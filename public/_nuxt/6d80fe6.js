(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{693:function(t,e,o){"use strict";o.r(e);var l=o(43),c={components:{mdbBtn:l.b,mdbModalHeader:l.r,mdbModalTitle:l.s,mdbModalBody:l.p,mdbModalFooter:l.q,mdbModal:l.o},props:{item:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},select:{type:Boolean,default:!1}},data:function(){return{object:{}}},methods:{selected:function(t){this.object=t},confirmSelect:function(){this.$emit("update:item",this.object),this.$emit("update:select",!1),this.object=""},closeSelect:function(){this.object="",this.$emit("update:select",!1)}}},n=o(2),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.select},on:{close:t.closeSelect}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Select")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},t._l(t.items,(function(e,l){return o("div",{key:l,staticClass:"col-4 p-0"},[o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("video",{staticClass:"position-relative",attrs:{width:"100%",height:"100%",autoplay:"",controls:"controls",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:e.url,type:"video/mp4"}}),t._v("\n                Your browser does not support the video tag.\n              ")]),t._v(" "),o("input",{staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"circuits"},on:{click:function(o){return t.selected(e)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.title))])])])})),0)])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelect.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary"},on:{click:t.confirmSelect}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);