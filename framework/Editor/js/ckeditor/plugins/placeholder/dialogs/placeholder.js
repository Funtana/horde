(function(){function b(a,h){var g=a.lang.placeholder,f=a.lang.common.generalTab;return{title:g.title,minWidth:300,minHeight:80,contents:[{id:"info",label:f,title:f,elements:[{id:"text",type:"text",style:"width: 100%;",label:g.text,"default":"",required:true,validate:CKEDITOR.dialog.validate.notEmpty(g.textMissing),setup:function(c){if(h){this.setValue(c.getText().slice(2,-2))}},commit:function(d){var c="[["+this.getValue()+"]]";CKEDITOR.plugins.placeholder.createPlaceholder(a,d,c)}}]}],onShow:function(){if(h){this._element=CKEDITOR.plugins.placeholder.getSelectedPlaceHoder(a)}this.setupContent(this._element)},onOk:function(){this.commitContent(this._element);delete this._element}}}CKEDITOR.dialog.add("createplaceholder",function(a){return b(a)});CKEDITOR.dialog.add("editplaceholder",function(a){return b(a,1)})})();