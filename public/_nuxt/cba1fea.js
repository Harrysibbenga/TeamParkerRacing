(window.webpackJsonp=window.webpackJsonp||[]).push([[48,16,17,19,22,24,26,27],{683:function(t,e,o){"use strict";o.r(e);o(32);var n={name:"ImageUpload",props:{images:{type:Array,default:function(){return[]}}},data:function(){return{files:[],imgs:[]}},methods:{handleChange:function(t){var e=this;this.files=t.target.files;for(var i=0;i<this.files.length;i++){var o={};o.file=this.files[i],o.alt=this.files[i].name,this.$store.dispatch("images/uploadImage",o).then((function(img){e.imgs.push(img)})).catch((function(t){console.log(t)}))}this.$emit("update:images",this.imgs)}}},l=o(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"files",multiple:"",accept:"image/*"},on:{change:t.handleChange}})])}),[],!1,null,null,null);e.default=component.exports},684:function(t,e,o){"use strict";o.r(e);var n=o(43),l={components:{mdbBtn:n.b,mdbCol:n.j,mdbModalHeader:n.r,mdbModalTitle:n.s,mdbModalBody:n.p,mdbModalFooter:n.q,mdbModal:n.o},props:{images:{type:Array,default:function(){return[]}}},data:function(){return{selectedImages:[],selectModel:!1}},computed:{imageList:function(){return this.$store.getters["images/getImages"]}},created:function(){this.default()},methods:{saveSelection:function(){this.$emit("update:images",this.selectedImages),this.selectModel=!1,this.selectedImages=[]},closeSelection:function(){this.selectedImages=[],this.selectModel=!1},selected:function(img){this.selectedImages.push(img)},default:function(){this.selectedImages=this.images}}},d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-col",{attrs:{col:"12"}},[o("div",{staticClass:"d-flex flex-row"},[o("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.selectModel=!0}}},[t._v("\n        Select images\n      ")])],1)]),t._v(" "),o("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.selectModel},on:{close:t.closeSelection}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Select images")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},t._l(t.imageList,(function(img,e){return o("div",{key:e,staticClass:"col-4 p-0"},[o("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[o("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}}),t._v(" "),o("input",{staticClass:"custom-control-input",attrs:{id:img.id,type:"checkbox"},on:{click:function(e){return t.selected(img)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:img.id}},[t._v("\n                "+t._s(img.alt)+"\n              ")])])])})),0)])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelection.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,o){"use strict";o.r(e);o(31);var n=o(43),l={components:{mdbInput:n.m,mdbBtn:n.b,mdbModalHeader:n.r,mdbModalTitle:n.s,mdbModalBody:n.p,mdbModalFooter:n.q,mdbModal:n.o},props:{uploadVideo:{type:Boolean,default:!1},video:{type:Object,default:function(){}}},data:function(){return{file:"",msg:{message:"",type:""},vid:{alt:""}}},computed:{videoList:function(){return this.$store.getters["videos/getVideos"]},uploadMsg:function(){return this.$store.getters["videos/getMsg"]}},methods:{saveFile:function(){var t=this,e={};e.file=this.file,e.alt=this.vid.alt,this.$store.dispatch("videos/singleUpload",e).then((function(e){t.$emit("update:video",e)})),setTimeout((function(){t.$emit("update:uploadVideo",!1),t.file="",t.img.alt=""}),2e3)},checkFile:function(t){this.file=t.target.files[0]},closeVideoUpload:function(){this.$emit("update:uploadVideo",!1),this.file="",this.vid.alt=""}}},d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-modal",{attrs:{size:"md",show:t.uploadVideo},on:{close:t.closeVideoUpload}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Upload video")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"md-form"},[o("mdb-input",{attrs:{label:"Description",inline:""},model:{value:t.vid.alt,callback:function(e){t.$set(t.vid,"alt","string"==typeof e?e.trim():e)},expression:"vid.alt"}})],1)]),t._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticClass:"input-group"},[o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text",attrs:{id:"imageInput"}},[t._v("Upload")])]),t._v(" "),o("div",{staticClass:"custom-file"},[o("input",{ref:"videoInput",staticClass:"custom-file-input",attrs:{id:"videoInput",type:"file","aria-describedby":"videoInput",accept:"video/mp4"},on:{change:function(e){return t.checkFile(e)}}}),t._v(" "),t.file.name?o("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.file.name))]):o("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Video")])])])])])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.closeVideoUpload.apply(null,arguments)}}},[t._v("Close")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary",size:"sm",disabled:""==t.vid.alt},on:{click:function(e){return t.saveFile()}}},[t._v("Save")])],1),t._v(" "),o("transition",{attrs:{name:"fade"}},[""!=t.uploadMsg.message?o("div",{staticClass:"text-white text-center",class:"bg-"+t.uploadMsg.type},[o("p",[t._v(t._s(t.uploadMsg.message))])]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},693:function(t,e,o){"use strict";o.r(e);var n=o(43),l={components:{mdbBtn:n.b,mdbModalHeader:n.r,mdbModalTitle:n.s,mdbModalBody:n.p,mdbModalFooter:n.q,mdbModal:n.o},props:{item:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},select:{type:Boolean,default:!1}},data:function(){return{object:{}}},methods:{selected:function(t){this.object=t},confirmSelect:function(){this.$emit("update:item",this.object),this.$emit("update:select",!1),this.object=""},closeSelect:function(){this.object="",this.$emit("update:select",!1)}}},d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.select},on:{close:t.closeSelect}},[o("mdb-modal-header",[o("mdb-modal-title",[t._v("Select")])],1),t._v(" "),o("mdb-modal-body",[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},t._l(t.items,(function(e,n){return o("div",{key:n,staticClass:"col-4 p-0"},[o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("video",{staticClass:"position-relative",attrs:{width:"100%",height:"100%",autoplay:"",controls:"controls",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:e.url,type:"video/mp4"}}),t._v("\n                Your browser does not support the video tag.\n              ")]),t._v(" "),o("input",{staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"circuits"},on:{click:function(o){return t.selected(e)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.title))])])])})),0)])]),t._v(" "),o("mdb-modal-footer",[o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelect.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),o("mdb-btn",{attrs:{color:"primary"},on:{click:t.confirmSelect}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},701:function(t,e,o){"use strict";o.r(e);var n=o(43),l={components:{mdbCol:n.j,mdbBtn:n.b},props:{video:{type:Object,default:function(){}},videoList:{type:Array,default:function(){return[]}}},data:function(){return{addVideo:!1,selectVideo:!1,defaultImage:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7"}},computed:{vid:{get:function(){return this.video},set:function(t){this.$emit("update:video",t)}}}},d=o(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-col",[t.vid.url?o("video",{attrs:{width:"100%",height:"100%",autoplay:"",controls:"controls",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:t.vid.url,type:"video/mp4"}}),t._v("\n      Your browser does not support the video tag.\n    ")]):o("img",{staticClass:"img-fluid",attrs:{src:t.defaultImage,alt:"Placeholder image"}})]),t._v(" "),o("mdb-col",{staticClass:"pt-2"},[o("mdb-btn",{staticClass:"ml-0",attrs:{color:"primary"},nativeOn:{click:function(e){t.addVideo=!0}}},[t._v("\n      Add\n    ")]),t._v(" "),o("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){t.selectVideo=!0}}},[t._v("\n      Select\n    ")])],1),t._v(" "),o("helpers-add-video",{attrs:{"upload-video":t.addVideo,video:t.vid},on:{"update:uploadVideo":function(e){t.addVideo=e},"update:upload-video":function(e){t.addVideo=e},"update:video":function(e){t.vid=e}}}),t._v(" "),o("helpers-select-video",{attrs:{select:t.selectVideo,item:t.vid,items:t.videoList},on:{"update:select":function(e){t.selectVideo=e},"update:item":function(e){t.vid=e},"update:items":function(e){t.videoList=e}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersAddVideo:o(692).default,HelpersSelectVideo:o(693).default})},748:function(t,e,o){"use strict";o.r(e);o(191);var n=o(43),l=o(18),d={components:{mdbBtn:n.b,mdbRow:n.u,mdbCol:n.j},props:{content:{type:Object,default:function(){}}},data:function(){return{images:[]}},computed:{carousel:{get:function(){return this.content},set:function(t){return t}}},methods:{update:function(){l.f.doc(this.carousel.id).update({images:this.carousel.images,value:this.carousel.value,active:this.carousel.active})},removeImage:function(img,t){var e=t.indexOf(img);t.splice(e,1)}}},c=o(2),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("helpers-multi-upload",{attrs:{images:t.carousel.images},on:{"update:images":function(e){return t.$set(t.carousel,"images",e)}}}),t._v(" "),o("helpers-select-images",{attrs:{images:t.carousel.images},on:{"update:images":function(e){return t.$set(t.carousel,"images",e)}}}),t._v(" "),t.carousel.images.length>0?o("mdb-row",t._l(t.carousel.images,(function(e,n){return o("mdb-col",{key:n,attrs:{col:"4"}},[o("img",{staticClass:"img-fluid",attrs:{src:e.url,alt:e.alt}}),t._v(" "),o("mdb-btn",{on:{click:function(e){return t.removeImage(n,t.carousel.images)}}},[t._v("\n        Delete\n      ")])],1)})),1):t._e(),t._v(" "),o("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.update.apply(null,arguments)}}},[t._v("\n    Update\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersMultiUpload:o(683).default,HelpersSelectImages:o(684).default})},749:function(t,e,o){"use strict";o.r(e);var n=o(43),l=o(18),d={components:{mdbBtn:n.b},props:{content:{type:Object,default:function(){}}},data:function(){return{video:{}}},computed:{videos:function(){return this.$store.getters["videos/getVideos"]},vid:{get:function(){return this.content},set:function(t){this.video=t}}},methods:{update:function(){l.f.doc(this.vid.id).update({video:this.video,value:this.vid.value,active:this.vid.active})}}},c=o(2),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("helpers-video-handler",{attrs:{video:t.vid.vid,"video-list":t.videos}}),t._v(" "),o("mdb-btn",{nativeOn:{click:function(e){return t.update.apply(null,arguments)}}},[t._v("\n    Update\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersVideoHandler:o(701).default})},778:function(t,e,o){"use strict";o.r(e);o(7),o(4),o(32),o(23);var n=o(739),l=o(43),d=o(18),c={components:{mdbContainer:l.k,mdbRow:l.u},data:function(){return{content:{},active:"",headline:[],carousel:{},video:{}}},computed:{head:function(){return Object(n.cloneDeep)(this.$store.getters["headline/getHeadlines"])}},created:function(){this.carousel=this.head.filter((function(t){return"Carousel"===t.name}))[0],this.video=this.head.filter((function(t){return"Video"===t.name}))[0],this.headline=[this.carousel,this.video]},methods:{handleChange:function(t,e){var o=this;this.headline.filter((function(t){return t.id===e})).map((function(t){d.f.doc(t.id).update({value:!0,active:!0}),o.content=t})),this.headline.filter((function(t){return t.id!==e})).map((function(t){d.f.doc(t.id).update({value:!1,active:!1})}))}}},r=o(2),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-container",{staticClass:"text-center"},[o("h1",[t._v("Headline Section")]),t._v(" "),o("h5",[t._v("Select headline content to edit and activate")]),t._v(" "),t._l(t.headline,(function(e,n){return o("div",{key:n,staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{ref:"input",refInFor:!0,staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"radioInline",data:e},domProps:{value:e.value},on:{change:function(o){return t.handleChange(o,e.id)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.name))])])}))],2),t._v(" "),o("mdb-container",{attrs:{fluid:""}},["Carousel"===t.content.name?o("mdb-row",[o("headline-carousel",{attrs:{content:t.carousel},on:{"update:content":function(e){t.carousel=e}}})],1):t._e(),t._v(" "),"Video"===t.content.name?o("mdb-row",[o("headline-video",{attrs:{content:t.video},on:{"update:content":function(e){t.video=e}}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeadlineCarousel:o(748).default,HeadlineVideo:o(749).default})}}]);