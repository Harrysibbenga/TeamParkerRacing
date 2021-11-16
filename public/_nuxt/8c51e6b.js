(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{779:function(t,e,l){"use strict";l.r(e);l(32),l(4),l(5),l(31);var n=l(43),o=l(18),m={components:{mdbInput:n.m,mdbBtn:n.b,mdbContainer:n.k,mdbIcon:n.l,mdbModalHeader:n.r,mdbModalTitle:n.s,mdbModalBody:n.p,mdbModalFooter:n.q,mdbModal:n.o,mdbCol:n.j,mdbRow:n.u},data:function(){return{toDeleteItem:{id:"",name:"",alt:"",url:""},deleteModal:!1,uploadImage:!1,file:"",msg:{message:"",type:""},img:{alt:""}}},computed:{imageList:function(){return this.$store.getters["images/getImages"]},uploadMsg:function(){return this.$store.getters["images/getMsg"]}},methods:{newImage:function(){this.uploadImage=!0},checkFile:function(t){var e=this;this.file=t.target.files[0],o.g.where("name","==",this.file.name).get().then((function(t){t.forEach((function(t){if(t.exists){e.$store.commit("images/setMsg",{type:"warning",message:"Image with this name already exists"}),e.file=""}}))}))},deleteItem:function(t){this.deleteModal=!0,this.toDeleteItem={id:t.id,name:t.name,alt:t.alt,url:t.url}},cancelDelete:function(){this.toDeleteItem={id:"",name:"",alt:"",url:""},this.deleteModal=!1},confirmDelete:function(){var t=this;o.g.doc(this.toDeleteItem.id).delete().then((function(){t.deleteModal=!1,t.msg={type:"danger",message:"Image deleted"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.msg={type:"warning",message:e.message},setTimeout((function(){t.msg={type:"",message:""}}),2e3)}))},saveFile:function(){var t=this,e={};e.file=this.file,e.alt=this.img.alt,this.$store.dispatch("images/uploadImage",e).then((function(){t.$store.dispatch("global/setLoading",!1),t.file="",t.img.alt="",setTimeout((function(){t.uploadImage=!1}),3e3)}))},closeImageUpload:function(){this.uploadImage=!1,this.file="",this.img.alt=""}}},d=l(2),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"container text-center"},[l("mdb-btn",{staticClass:"ml-0",attrs:{color:"primary",inline:""},on:{click:t.newImage}},[t._v("\n      Add new image\n    ")])],1),t._v(" "),l("mdb-container",{staticClass:"p-0 pt-5",attrs:{fluid:""}},[l("mdb-row",t._l(t.imageList,(function(image,e){return l("mdb-col",{key:e,staticClass:"col-4"},[l("img",{staticClass:"img-fluid",attrs:{src:image.url,alt:image.alt}}),t._v(" "),l("p",[t._v("name: "+t._s(image.name))]),t._v(" "),l("p",[t._v("alt: "+t._s(image.alt))]),t._v(" "),l("div",{staticClass:"text-center"},[l("a",{on:{click:function(e){return t.deleteItem(image)}}},[l("mdb-icon",{attrs:{icon:"trash-alt"}})],1)])])})),1)],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[""!=t.msg.message?l("div",{staticClass:"pl-5 mt-4 text-white text-center",class:"bg-"+t.msg.type},[l("p",[t._v(t._s(t.msg.message))])]):t._e()]),t._v(" "),l("mdb-modal",{attrs:{frame:"",position:"top",direction:"top",show:t.deleteModal},on:{close:function(e){t.deleteModal=!1}}},[l("mdb-modal-body",{staticClass:"text-center"},[l("span",{staticClass:"text-danger"},[t._v("Are you sure you want to delete this image ? ( any documents that use\n        this image will need to be changed )")]),t._v("\n      "+t._s(t.toDeleteItem.name)+"\n      "),l("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.cancelDelete.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"secondary"},on:{click:t.confirmDelete}},[t._v("\n        Delete\n      ")])],1)],1),t._v(" "),l("mdb-modal",{attrs:{size:"md",show:t.uploadImage},on:{close:t.closeImageUpload}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v("Upload image")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Description",inline:""},model:{value:t.img.alt,callback:function(e){t.$set(t.img,"alt","string"==typeof e?e.trim():e)},expression:"img.alt"}})],1)]),t._v(" "),l("div",{staticClass:"col-12"},[l("div",{staticClass:"input-group"},[l("div",{staticClass:"input-group-prepend"},[l("span",{staticClass:"input-group-text",attrs:{id:"imageInput"}},[t._v("Upload")])]),t._v(" "),l("div",{staticClass:"custom-file"},[l("input",{ref:"imageInput",staticClass:"custom-file-input",attrs:{id:"imageInput",type:"file","aria-describedby":"imageInput",accept:"image/jpeg image/png"},on:{change:function(e){return t.checkFile(e)}}}),t._v(" "),t.file.name?l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.file.name))]):l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Image")])])])])])]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.closeImageUpload.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary",size:"sm",disabled:""==t.img.alt},on:{click:function(e){return t.saveFile(t.type)}}},[t._v("\n        Save\n      ")])],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[""!=t.uploadMsg.message?l("div",{staticClass:"text-white text-center",class:"bg-"+t.uploadMsg.type},[l("p",[t._v(t._s(t.uploadMsg.message))])]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);