<?php
/**
 * Attach the spellchecker to a javascript element.
 *
 * Copyright 2005-2009 The Horde Project (http://www.horde.org/)
 *
 * See the enclosed file COPYING for license information (GPL). If you
 * did not receive this file, see http://www.fsf.org/copyleft/gpl.html.
 *
 * @author  Michael Slusarz <slusarz@horde.org>
 * @package Horde_Ajax
 */
class Horde_Ajax_Imple_SpellChecker extends Horde_Ajax_Imple_Base
{
    /**
     * Constructor.
     *
     * @param array $params  Configuration parameters.
     * <pre>
     * 'id' => TODO (optional)
     * 'locales' => TODO (optional)
     * 'states' => TODO (optional)
     * 'targetId' => TODO (optional)
     * 'triggerId' => TODO (optional)
     * </pre>
     */
    public function __construct($params = array())
    {
        if (empty($params['id'])) {
            $params['id'] = $this->_randomid();
        }
        if (empty($params['targetId'])) {
            $params['targetId'] = $this->_randomid();
        }
        if (empty($params['triggerId'])) {
            $params['triggerId'] = $params['targetId'] . '_trigger';
        }
        if (empty($params['states'])) {
            $params['states'] = '""';
        } else {
            $params['states'] = Horde_Serialize::serialize($params['states'], Horde_Serialize::JSON, Horde_Nls::getCharset());
        }
        if (empty($params['locales'])) {
            $key_list = array_keys(Horde_Nls::$config['spelling']);
            asort($key_list, SORT_LOCALE_STRING);
            $params['locales'] = array();

            foreach ($key_list as $lcode) {
                $params['locales'][] = array('l' => Horde_Nls::$config['languages'][$lcode], 'v' => $lcode);
            }
        }
        $params['locales'] = Horde_Serialize::serialize($params['locales'], Horde_Serialize::JSON, Horde_Nls::getCharset());

        parent::__construct($params);
    }

    /**
     */
    public function attach()
    {
        Horde::addScriptFile('prototype.js', 'horde');
        Horde::addScriptFile('effects.js', 'horde');
        Horde::addScriptFile('KeyNavList.js', 'horde');
        Horde::addScriptFile('SpellChecker.js', 'horde');

        $url = $this->_getUrl('SpellChecker', 'horde', array('input' => $this->_params['targetId']));

        Horde::addInlineScript($this->_params['id'] . ' = new SpellChecker("' . $url . '", "' . $this->_params['targetId'] . '", "' . $this->_params['triggerId'] . '", ' . $this->_params['states'] . ', ' . $this->_params['locales'] . ', \'widget\');', 'dom');
    }

    /**
     */
    public function handle($args)
    {
        $spellArgs = array();

        if (!empty($GLOBALS['conf']['spell']['params'])) {
            $spellArgs = $GLOBALS['conf']['spell']['params'];
        }

        if (isset($args['locale'])) {
            $spellArgs['locale'] = $args['locale'];
        } elseif (isset($GLOBALS['language'])) {
            $spellArgs['locale'] = $GLOBALS['language'];
        }

        /* Add local dictionary words. */
        try {
            $result = Horde::loadConfiguration('spelling.php', 'ignore_list', 'horde');
            $spellArgs['localDict'] = $result;
        } catch (Horde_Exception $e) {}

        if (!empty($args['html'])) {
            $spellArgs['html'] = true;
        }

        try {
            $speller = Horde_SpellChecker::factory($GLOBALS['conf']['spell']['driver'], $spellArgs);
        } catch (Horde_Exception $e) {
            Horde::logMessage($e, __FILE__, __LINE__, PEAR_LOG_ERR);
            return array();
        }

        try {
            return $speller->spellCheck(Horde_Util::getPost($args['input']));
        } catch (Horde_Exception $e) {
            Horde::logMessage($e, __FILE__, __LINE__, PEAR_LOG_ERR);
            return array('bad' => array(), 'suggestions' => array());
        }
    }

}
