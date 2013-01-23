(function(){var b=function(Z,Y){var X=1,W=2,V=4,U=8,T=/^\s*(\d+)((px)|\%)?\s*$/i,S=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,R=/^\d+px$/,Q=function(){var f=this.getValue(),e=this.getDialog(),d=f.match(T);if(d){if(d[2]=="%"){L(e,false)}f=d[1]}if(e.lockRatio){var c=e.originalElement;if(c.getCustomData("isReady")=="true"){if(this.id=="txtHeight"){if(f&&f!="0"){f=Math.round(c.$.width*(f/c.$.height))}if(!isNaN(f)){e.setValueOf("info","txtWidth",f)}}else{if(f&&f!="0"){f=Math.round(c.$.height*(f/c.$.width))}if(!isNaN(f)){e.setValueOf("info","txtHeight",f)}}}}P(e)},P=function(c){if(!c.originalElement||!c.preview){return 1}c.commitContent(V,c.preview);return 0};function O(){var d=arguments,c=this.getContentElement("advanced","txtdlgGenStyle");c&&c.commit.apply(c,d);this.foreach(function(e){if(e.commit&&e.id!="txtdlgGenStyle"){e.commit.apply(e,d)}})}var N;function M(h){if(N){return}N=1;var g=this.getDialog(),f=g.imageElement;if(f){this.commit(X,f);h=[].concat(h);var e=h.length,d;for(var c=0;c<e;c++){d=g.getContentElement.apply(g,h[c].split(":"));d&&d.setup(X,f)}}N=0}var L=function(e,d){if(!e.getContentElement("info","ratioLock")){return null}var c=e.originalElement;if(!c){return null}if(d=="check"){if(!e.userlockRatio&&c.getCustomData("isReady")=="true"){var k=e.getValueOf("info","txtWidth"),j=e.getValueOf("info","txtHeight"),i=c.$.width*1000/c.$.height,h=k*1000/j;e.lockRatio=false;if(!k&&!j){e.lockRatio=true}else{if(!isNaN(i)&&!isNaN(h)){if(Math.round(i)==Math.round(h)){e.lockRatio=true}}}}}else{if(d!=undefined){e.lockRatio=d}else{e.userlockRatio=1;e.lockRatio=!e.lockRatio}}var g=CKEDITOR.document.getById(D);if(e.lockRatio){g.removeClass("cke_btn_unlocked")}else{g.addClass("cke_btn_unlocked")}g.setAttribute("aria-checked",e.lockRatio);if(CKEDITOR.env.hc){var f=g.getChild(0);f.setHtml(e.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢")}return e.lockRatio},J=function(f){var e=f.originalElement;if(e.getCustomData("isReady")=="true"){var d=f.getContentElement("info","txtWidth"),c=f.getContentElement("info","txtHeight");d&&d.setValue(e.$.width);c&&c.setValue(e.$.height)}P(f)},I=function(i,h){if(i!=X){return}function g(l,k){var j=l.match(T);if(j){if(j[2]=="%"){j[1]+="%";L(f,false)}return j[1]}return k}var f=this.getDialog(),e="",d=this.id=="txtWidth"?"width":"height",c=h.getAttribute(d);if(c){e=g(c,e)}e=g(h.getStyle(d),e);this.setValue(e)},H,G=function(){var c=this.originalElement;c.setCustomData("isReady","true");c.removeListener("load",G);c.removeListener("error",F);c.removeListener("abort",F);CKEDITOR.document.getById(B).setStyle("display","none");if(!this.dontResetSize){J(this)}if(this.firstLoad){CKEDITOR.tools.setTimeout(function(){L(this,"check")},0,this)}this.firstLoad=false;this.dontResetSize=false},F=function(){var c=this;var e=c.originalElement;e.removeListener("load",G);e.removeListener("error",F);e.removeListener("abort",F);var d=CKEDITOR.getUrl(Z.skinPath+"images/noimage.png");if(c.preview){c.preview.setAttribute("src",d)}CKEDITOR.document.getById(B).setStyle("display","none");L(c,false)},E=function(c){return CKEDITOR.tools.getNextId()+"_"+c},D=E("btnLockSizes"),C=E("btnResetSize"),B=E("ImagePreviewLoader"),a=E("previewLink"),K=E("previewImage");return{title:Z.lang.image[Y=="image"?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){var c=this;c.imageElement=false;c.linkElement=false;c.imageEditMode=false;c.linkEditMode=false;c.lockRatio=true;c.userlockRatio=0;c.dontResetSize=false;c.firstLoad=true;c.addLink=false;var i=c.getParentEditor(),h=i.getSelection(),g=h&&h.getSelectedElement(),f=g&&g.getAscendant("a");CKEDITOR.document.getById(B).setStyle("display","none");H=new CKEDITOR.dom.element("img",i.document);c.preview=CKEDITOR.document.getById(K);c.originalElement=i.document.createElement("img");c.originalElement.setAttribute("alt","");c.originalElement.setCustomData("isReady","false");if(f){c.linkElement=f;c.linkEditMode=true;var e=f.getChildren();if(e.count()==1){var d=e.getItem(0).getName();if(d=="img"||d=="input"){c.imageElement=e.getItem(0);if(c.imageElement.getName()=="img"){c.imageEditMode="img"}else{if(c.imageElement.getName()=="input"){c.imageEditMode="input"}}}}if(Y=="image"){c.setupContent(W,f)}}if(g&&g.getName()=="img"&&!g.data("cke-realelement")||g&&g.getName()=="input"&&g.getAttribute("type")=="image"){c.imageEditMode=g.getName();c.imageElement=g}if(c.imageEditMode){c.cleanImageElement=c.imageElement;c.imageElement=c.cleanImageElement.clone(true,true);c.setupContent(X,c.imageElement)}else{c.imageElement=i.document.createElement("img")}L(c,true);if(!CKEDITOR.tools.trim(c.getValueOf("info","txtUrl"))){c.preview.removeAttribute("src");c.preview.setStyle("display","none")}},onOk:function(){var c=this;if(c.imageEditMode){var d=c.imageEditMode;if(Y=="image"&&d=="input"&&confirm(Z.lang.image.button2Img)){d="img";c.imageElement=Z.document.createElement("img");c.imageElement.setAttribute("alt","");Z.insertElement(c.imageElement)}else{if(Y!="image"&&d=="img"&&confirm(Z.lang.image.img2Button)){d="input";c.imageElement=Z.document.createElement("input");c.imageElement.setAttributes({type:"image",alt:""});Z.insertElement(c.imageElement)}else{c.imageElement=c.cleanImageElement;delete c.cleanImageElement}}}else{if(Y=="image"){c.imageElement=Z.document.createElement("img")}else{c.imageElement=Z.document.createElement("input");c.imageElement.setAttribute("type","image")}c.imageElement.setAttribute("alt","")}if(!c.linkEditMode){c.linkElement=Z.document.createElement("a")}c.commitContent(X,c.imageElement);c.commitContent(W,c.linkElement);if(!c.imageElement.getAttribute("style")){c.imageElement.removeAttribute("style")}if(!c.imageEditMode){if(c.addLink){if(!c.linkEditMode){Z.insertElement(c.linkElement);c.linkElement.append(c.imageElement,false)}else{Z.insertElement(c.imageElement)}}else{Z.insertElement(c.imageElement)}}else{if(!c.linkEditMode&&c.addLink){Z.insertElement(c.linkElement);c.imageElement.appendTo(c.linkElement)}else{if(c.linkEditMode&&!c.addLink){Z.getSelection().selectElement(c.linkElement);Z.insertElement(c.imageElement)}}}},onLoad:function(){var c=this;if(Y!="image"){c.hidePage("Link")}var d=c._.element.getDocument();if(c.getContentElement("info","ratioLock")){c.addFocusable(d.getById(C),5);c.addFocusable(d.getById(D),5)}c.commitContent=O},onHide:function(){var c=this;if(c.preview){c.commitContent(U,c.preview)}if(c.originalElement){c.originalElement.removeListener("load",G);c.originalElement.removeListener("error",F);c.originalElement.removeListener("abort",F);c.originalElement.remove();c.originalElement=false}delete c.imageElement},contents:[{id:"info",label:Z.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:Z.lang.common.url,required:true,onChange:function(){var f=this.getDialog(),e=this.getValue();if(e.length>0){f=this.getDialog();var d=f.originalElement;f.preview.removeStyle("display");d.setCustomData("isReady","false");var c=CKEDITOR.document.getById(B);if(c){c.setStyle("display","")}d.on("load",G,f);d.on("error",F,f);d.on("abort",F,f);d.setAttribute("src",e);H.setAttribute("src",e);f.preview.setAttribute("src",H.$.src);P(f)}else{if(f.preview){f.preview.removeAttribute("src");f.preview.setStyle("display","none")}}},setup:function(f,e){if(f==X){var d=e.data("cke-saved-src")||e.getAttribute("src"),c=this;this.getDialog().dontResetSize=true;c.setValue(d);c.setInitValue()}},commit:function(e,d){var c=this;if(e==X&&(c.getValue()||c.isChanged())){d.data("cke-saved-src",c.getValue());d.setAttribute("src",c.getValue())}else{if(e==U){d.setAttribute("src","");d.removeAttribute("src")}}},validate:CKEDITOR.dialog.validate.notEmpty(Z.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:Z.lang.common.browseServer,hidden:true,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:Z.lang.image.alt,accessKey:"T","default":"",onChange:function(){P(this.getDialog())},setup:function(d,c){if(d==X){this.setValue(c.getAttribute("alt"))}},commit:function(e,d){var c=this;if(e==X){if(c.getValue()||c.isChanged()){d.setAttribute("alt",c.getValue())}}else{if(e==V){d.setAttribute("alt",c.getValue())}else{if(e==U){d.removeAttribute("alt")}}}}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:Z.lang.common.width,onKeyUp:Q,onChange:function(){M.call(this,"advanced:txtdlgGenStyle")},validate:function(){var d=this.getValue().match(S),c=!!(d&&parseInt(d[1],10)!==0);if(!c){alert(Z.lang.common.invalidWidth)}return c},setup:I,commit:function(h,g,f){var e=this.getValue();if(h==X){if(e){g.setStyle("width",CKEDITOR.tools.cssLength(e))}else{g.removeStyle("width")}!f&&g.removeAttribute("width")}else{if(h==V){var d=e.match(T);if(!d){var c=this.getDialog().originalElement;if(c.getCustomData("isReady")=="true"){g.setStyle("width",c.$.width+"px")}}else{g.setStyle("width",CKEDITOR.tools.cssLength(e))}}else{if(h==U){g.removeAttribute("width");g.removeStyle("width")}}}}},{type:"text",id:"txtHeight",width:"40px",label:Z.lang.common.height,onKeyUp:Q,onChange:function(){M.call(this,"advanced:txtdlgGenStyle")},validate:function(){var d=this.getValue().match(S),c=!!(d&&parseInt(d[1],10)!==0);if(!c){alert(Z.lang.common.invalidHeight)}return c},setup:I,commit:function(h,g,f){var e=this.getValue();if(h==X){if(e){g.setStyle("height",CKEDITOR.tools.cssLength(e))}else{g.removeStyle("height")}!f&&g.removeAttribute("height")}else{if(h==V){var d=e.match(T);if(!d){var c=this.getDialog().originalElement;if(c.getCustomData("isReady")=="true"){g.setStyle("height",c.$.height+"px")}}else{g.setStyle("height",CKEDITOR.tools.cssLength(e))}}else{if(h==U){g.removeAttribute("height");g.removeStyle("height")}}}}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var d=CKEDITOR.document.getById(C),c=CKEDITOR.document.getById(D);if(d){d.on("click",function(e){J(this);e.data&&e.data.preventDefault()},this.getDialog());d.on("mouseover",function(){this.addClass("cke_btn_over")},d);d.on("mouseout",function(){this.removeClass("cke_btn_over")},d)}if(c){c.on("click",function(j){var e=this;var i=L(e),h=e.originalElement,g=e.getValueOf("info","txtWidth");if(h.getCustomData("isReady")=="true"&&g){var f=h.$.height/h.$.width*g;if(!isNaN(f)){e.setValueOf("info","txtHeight",Math.round(f));P(e)}}j.data&&j.data.preventDefault()},this.getDialog());c.on("mouseover",function(){this.addClass("cke_btn_over")},c);c.on("mouseout",function(){this.removeClass("cke_btn_over")},c)}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+Z.lang.image.lockRatio+'" class="cke_btn_locked" id="'+D+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+Z.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+Z.lang.image.resetSize+'" class="cke_btn_reset" id="'+C+'" role="button"><span class="cke_label">'+Z.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",width:"60px",label:Z.lang.image.border,"default":"",onKeyUp:function(){P(this.getDialog())},onChange:function(){M.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(Z.lang.image.validateBorder),setup:function(f,e){if(f==X){var d,c=e.getStyle("border-width");c=c&&c.match(/^(\d+px)(?: \1 \1 \1)?$/);d=c&&parseInt(c[1],10);isNaN(parseInt(d,10))&&(d=e.getAttribute("border"));this.setValue(d)}},commit:function(f,e,d){var c=parseInt(this.getValue(),10);if(f==X||f==V){if(!isNaN(c)){e.setStyle("border-width",CKEDITOR.tools.cssLength(c));e.setStyle("border-style","solid")}else{if(!c&&this.isChanged()){e.removeStyle("border")}}if(!d&&f==X){e.removeAttribute("border")}}else{if(f==U){e.removeAttribute("border");e.removeStyle("border-width");e.removeStyle("border-style");e.removeStyle("border-color")}}}},{type:"text",id:"txtHSpace",width:"60px",label:Z.lang.image.hSpace,"default":"",onKeyUp:function(){P(this.getDialog())},onChange:function(){M.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(Z.lang.image.validateHSpace),setup:function(i,h){if(i==X){var g,f,e,d=h.getStyle("margin-left"),c=h.getStyle("margin-right");d=d&&d.match(R);c=c&&c.match(R);f=parseInt(d,10);e=parseInt(c,10);g=f==e&&f;isNaN(parseInt(g,10))&&(g=h.getAttribute("hspace"));this.setValue(g)}},commit:function(f,e,d){var c=parseInt(this.getValue(),10);if(f==X||f==V){if(!isNaN(c)){e.setStyle("margin-left",CKEDITOR.tools.cssLength(c));e.setStyle("margin-right",CKEDITOR.tools.cssLength(c))}else{if(!c&&this.isChanged()){e.removeStyle("margin-left");e.removeStyle("margin-right")}}if(!d&&f==X){e.removeAttribute("hspace")}}else{if(f==U){e.removeAttribute("hspace");e.removeStyle("margin-left");e.removeStyle("margin-right")}}}},{type:"text",id:"txtVSpace",width:"60px",label:Z.lang.image.vSpace,"default":"",onKeyUp:function(){P(this.getDialog())},onChange:function(){M.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(Z.lang.image.validateVSpace),setup:function(i,h){if(i==X){var g,f,e,d=h.getStyle("margin-top"),c=h.getStyle("margin-bottom");d=d&&d.match(R);c=c&&c.match(R);f=parseInt(d,10);e=parseInt(c,10);g=f==e&&f;isNaN(parseInt(g,10))&&(g=h.getAttribute("vspace"));this.setValue(g)}},commit:function(f,e,d){var c=parseInt(this.getValue(),10);if(f==X||f==V){if(!isNaN(c)){e.setStyle("margin-top",CKEDITOR.tools.cssLength(c));e.setStyle("margin-bottom",CKEDITOR.tools.cssLength(c))}else{if(!c&&this.isChanged()){e.removeStyle("margin-top");e.removeStyle("margin-bottom")}}if(!d&&f==X){e.removeAttribute("vspace")}}else{if(f==U){e.removeAttribute("vspace");e.removeStyle("margin-top");e.removeStyle("margin-bottom")}}}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:Z.lang.common.align,"default":"",items:[[Z.lang.common.notSet,""],[Z.lang.common.alignLeft,"left"],[Z.lang.common.alignRight,"right"]],onChange:function(){P(this.getDialog());M.call(this,"advanced:txtdlgGenStyle")},setup:function(e,d){if(e==X){var c=d.getStyle("float");switch(c){case"inherit":case"none":c=""}!c&&(c=(d.getAttribute("align")||"").toLowerCase());this.setValue(c)}},commit:function(f,e,d){var c=this.getValue();if(f==X||f==V){if(c){e.setStyle("float",c)}else{e.removeStyle("float")}if(!d&&f==X){c=(e.getAttribute("align")||"").toLowerCase();switch(c){case"left":case"right":e.removeAttribute("align")}}}else{if(f==U){e.removeStyle("float")}}}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(Z.lang.common.preview)+'<br><div id="'+B+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+a+'"><img id="'+K+'" alt="" /></a>'+(Z.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:Z.lang.link.title,padding:0,elements:[{id:"txtUrl",type:"text",label:Z.lang.common.url,style:"width: 100%","default":"",setup:function(e,d){if(e==W){var c=d.data("cke-saved-href");if(!c){c=d.getAttribute("href")}this.setValue(c)}},commit:function(f,e){var c=this;if(f==W){if(c.getValue()||c.isChanged()){var d=decodeURI(c.getValue());e.data("cke-saved-href",d);e.setAttribute("href",d);if(c.getValue()||!Z.config.image_removeLinkByEmptyURL){c.getDialog().addLink=true}}}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:Z.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:true,label:Z.lang.common.browseServer},{id:"cmbTarget",type:"select",label:Z.lang.common.target,"default":"",items:[[Z.lang.common.notSet,""],[Z.lang.common.targetNew,"_blank"],[Z.lang.common.targetTop,"_top"],[Z.lang.common.targetSelf,"_self"],[Z.lang.common.targetParent,"_parent"]],setup:function(d,c){if(d==W){this.setValue(c.getAttribute("target")||"")}},commit:function(d,c){if(d==W){if(this.getValue()||this.isChanged()){c.setAttribute("target",this.getValue())}}}}]},{id:"Upload",hidden:true,filebrowser:"uploadButton",label:Z.lang.image.upload,elements:[{type:"file",id:"upload",label:Z.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:Z.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:Z.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",label:Z.lang.common.id,setup:function(d,c){if(d==X){this.setValue(c.getAttribute("id"))}},commit:function(d,c){if(d==X){if(this.getValue()||this.isChanged()){c.setAttribute("id",this.getValue())}}}},{id:"cmbLangDir",type:"select",style:"width : 100px;",label:Z.lang.common.langDir,"default":"",items:[[Z.lang.common.notSet,""],[Z.lang.common.langDirLtr,"ltr"],[Z.lang.common.langDirRtl,"rtl"]],setup:function(d,c){if(d==X){this.setValue(c.getAttribute("dir"))}},commit:function(d,c){if(d==X){if(this.getValue()||this.isChanged()){c.setAttribute("dir",this.getValue())}}}},{type:"text",id:"txtLangCode",label:Z.lang.common.langCode,"default":"",setup:function(d,c){if(d==X){this.setValue(c.getAttribute("lang"))}},commit:function(d,c){if(d==X){if(this.getValue()||this.isChanged()){c.setAttribute("lang",this.getValue())}}}}]},{type:"text",id:"txtGenLongDescr",label:Z.lang.common.longDescr,setup:function(d,c){if(d==X){this.setValue(c.getAttribute("longDesc"))}},commit:function(d,c){if(d==X){if(this.getValue()||this.isChanged()){c.setAttribute("longDesc",this.getValue())}}}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",label:Z.lang.common.cssClass,"default":"",setup:function(d,c){if(d==X){this.setValue(c.getAttribute("class"))}},commit:function(d,c){if(d==X){if(this.getValue()||this.isChanged()){c.setAttribute("class",this.getValue())}}}},{type:"text",id:"txtGenTitle",label:Z.lang.common.advisoryTitle,"default":"",onChange:function(){P(this.getDialog())},setup:function(d,c){if(d==X){this.setValue(c.getAttribute("title"))}},commit:function(e,d){var c=this;if(e==X){if(c.getValue()||c.isChanged()){d.setAttribute("title",c.getValue())}}else{if(e==V){d.setAttribute("title",c.getValue())}else{if(e==U){d.removeAttribute("title")}}}}}]},{type:"text",id:"txtdlgGenStyle",label:Z.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(Z.lang.common.invalidInlineStyle),"default":"",setup:function(i,h){if(i==X){var g=h.getAttribute("style");if(!g&&h.$.style.cssText){g=h.$.style.cssText}this.setValue(g);var f=h.$.style.height,e=h.$.style.width,d=(f?f:"").match(T),c=(e?e:"").match(T);this.attributesInStyle={height:!!d,width:!!c}}},onChange:function(){M.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]);P(this)},commit:function(d,c){if(d==X&&(this.getValue()||this.isChanged())){c.setAttribute("style",this.getValue())}}}]}]}};CKEDITOR.dialog.add("image",function(a){return b(a,"image")});CKEDITOR.dialog.add("imagebutton",function(a){return b(a,"imagebutton")})})();