(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{684:function(t,e,l){"use strict";l.r(e);var o=l(43),n={components:{mdbBtn:o.b,mdbCol:o.j,mdbModalHeader:o.r,mdbModalTitle:o.s,mdbModalBody:o.p,mdbModalFooter:o.q,mdbModal:o.o},props:{images:{type:Array,default:function(){return[]}}},data:function(){return{selectedImages:[],selectModel:!1}},computed:{imageList:function(){return this.$store.getters["images/getImages"]}},created:function(){this.default()},methods:{saveSelection:function(){this.$emit("update:images",this.selectedImages),this.selectModel=!1,this.selectedImages=[]},closeSelection:function(){this.selectedImages=[],this.selectModel=!1},selected:function(img){this.selectedImages.push(img)},default:function(){this.selectedImages=this.images}}},c=l(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("mdb-col",{attrs:{col:"12"}},[l("div",{staticClass:"d-flex flex-row"},[l("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.selectModel=!0}}},[t._v("\n        Select images\n      ")])],1)]),t._v(" "),l("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.selectModel},on:{close:t.closeSelection}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v("Select images")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},t._l(t.imageList,(function(img,e){return l("div",{key:e,staticClass:"col-4 p-0"},[l("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[l("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}}),t._v(" "),l("input",{staticClass:"custom-control-input",attrs:{id:img.id,type:"checkbox"},on:{click:function(e){return t.selected(img)}}}),t._v(" "),l("label",{staticClass:"custom-control-label",attrs:{for:img.id}},[t._v("\n                "+t._s(img.alt)+"\n              ")])])])})),0)])]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelection.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);