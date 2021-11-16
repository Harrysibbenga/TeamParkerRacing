(window.webpackJsonp=window.webpackJsonp||[]).push([[17,19,26,27],{692:function(t,e,o){"use strict";o.r(e);o(31);var d=o(43),l={components:{mdbInput:d.m,mdbBtn:d.b,mdbModalHeader:d.r,mdbModalTitle:d.s,mdbModalBody:d.p,mdbModalFooter:d.q,mdbModal:d.o},props:{uploadVideo:{type:Boolean,default:!1},video:{type:Object,default:function(){}}},data:function(){return{file:"",msg:{message:"",type:""},vid:{alt:""}}},computed:{videoList:function(){return this.$store.getters["videos/getVideos"]},uploadMsg:function(){return this.$store.getters["videos/getMsg"]}},methods:{saveFile:function(){var t=this,e={};e.file=this.file,e.alt=this.vid.alt,this.$store.dispatch("videos/singleUpload",e).then((function(e){t.$emit("update:video",e)})),setTimeout((function(){t.$emit("update:uploadVideo",!1),t.file="",t.img.alt=""}),2e3)},checkFile:function(t){this.file=t.target.files[0]},closeVideoUpload:function(){this.$emit("update:uploadVideo",!1),this.file="",this.vid.alt=""}}},n=o(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-modal",{attrs:{size:"md",show:t.uploadVideo},on:{close:t.closeVideoUpload}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Upload video")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"md-form"},[o("mdb-input",{attrs:{label:"Description",inline:""},model:{value:t.vid.alt,callback:function(e){t.$set(t.vid,"alt","string"==typeof e?e.trim():e)},expression:"vid.alt"}})],1)]),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"input-group"},[o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text",attrs:{id:"imageInput"}},[t._v("Upload")])]),t._v(" "),o("div",{staticClass:"custom-file"},[o("input",{ref:"videoInput",staticClass:"custom-file-input",attrs:{id:"videoInput",type:"file","aria-describedby":"videoInput",accept:"video/mp4"},on:{change:function(e){return t.checkFile(e)}}}),t._v(" "),t.file.name?o("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.file.name))]):o("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Video")])])])])])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.closeVideoUpload.apply(null,arguments)}}},[t._v("Close")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary",size:"sm",disabled:""==t.vid.alt},on:{click:function(e){return t.saveFile()}}},[t._v("Save")])],1),t._v(" "),o("transition",{attrs:{name:"fade"}},[""!=t.uploadMsg.message?o("div",{staticClass:"text-white text-center",class:"bg-"+t.uploadMsg.type},[o("p",[t._v(t._s(t.uploadMsg.message))])]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},693:function(t,e,o){"use strict";o.r(e);var d=o(43),l={components:{mdbBtn:d.b,mdbModalHeader:d.r,mdbModalTitle:d.s,mdbModalBody:d.p,mdbModalFooter:d.q,mdbModal:d.o},props:{item:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},select:{type:Boolean,default:!1}},data:function(){return{object:{}}},methods:{selected:function(t){this.object=t},confirmSelect:function(){this.$emit("update:item",this.object),this.$emit("update:select",!1),this.object=""},closeSelect:function(){this.object="",this.$emit("update:select",!1)}}},n=o(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.select},on:{close:t.closeSelect}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Select")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},t._l(t.items,(function(e,d){return o("div",{key:d,staticClass:"col-4 p-0"},[o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("video",{staticClass:"position-relative",attrs:{width:"100%",height:"100%",autoplay:"",controls:"controls",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:e.url,type:"video/mp4"}}),t._v("\n                Your browser does not support the video tag.\n              ")]),t._v(" "),o("input",{staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"circuits"},on:{click:function(o){return t.selected(e)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.title))])])])})),0)])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelect.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary"},on:{click:t.confirmSelect}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},701:function(t,e,o){"use strict";o.r(e);var d=o(43),l={components:{mdbCol:d.j,mdbBtn:d.b},props:{video:{type:Object,default:function(){}},videoList:{type:Array,default:function(){return[]}}},data:function(){return{addVideo:!1,selectVideo:!1,defaultImage:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7"}},computed:{vid:{get:function(){return this.video},set:function(t){this.$emit("update:video",t)}}}},n=o(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-col",[t.vid.url?o("video",{attrs:{width:"100%",height:"100%",autoplay:"",controls:"controls",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:t.vid.url,type:"video/mp4"}}),t._v("\n      Your browser does not support the video tag.\n    ")]):o("img",{staticClass:"img-fluid",attrs:{src:t.defaultImage,alt:"Placeholder image"}})]),t._v(" "),o("mdb-col",{staticClass:"pt-2"},[o("mdb-btn",{staticClass:"ml-0",attrs:{color:"primary"},nativeOn:{click:function(e){t.addVideo=!0}}},[t._v("\n      Add\n    ")]),t._v(" "),o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){t.selectVideo=!0}}},[t._v("\n      Select\n    ")])],1),t._v(" "),o("helpers-add-video",{attrs:{"upload-video":t.addVideo,video:t.vid},on:{"update:uploadVideo":function(e){t.addVideo=e},"update:upload-video":function(e){t.addVideo=e},"update:video":function(e){t.vid=e}}}),t._v(" "),o("helpers-select-video",{attrs:{select:t.selectVideo,item:t.vid,items:t.videoList},on:{"update:select":function(e){t.selectVideo=e},"update:item":function(e){t.vid=e},"update:items":function(e){t.videoList=e}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersAddVideo:o(692).default,HelpersSelectVideo:o(693).default})},749:function(t,e,o){"use strict";o.r(e);var d=o(43),l=o(18),n={components:{mdbBtn:d.b},props:{content:{type:Object,default:function(){}}},data:function(){return{video:{}}},computed:{videos:function(){return this.$store.getters["videos/getVideos"]},vid:{get:function(){return this.content},set:function(t){this.video=t}}},methods:{update:function(){l.f.doc(this.vid.id).update({video:this.video,value:this.vid.value,active:this.vid.active})}}},c=o(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("helpers-video-handler",{attrs:{video:t.vid.vid,"video-list":t.videos}}),t._v(" "),o("mdb-btn",{nativeOn:{click:function(e){return t.update.apply(null,arguments)}}},[t._v("\n    Update\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersVideoHandler:o(701).default})}}]);