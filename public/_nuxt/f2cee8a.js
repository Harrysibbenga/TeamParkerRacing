(window.webpackJsonp=window.webpackJsonp||[]).push([[47,18,20,25,40,41],{676:function(t,e,l){"use strict";l.r(e);var r={components:{mdbAlert:l(43).a},props:{msg:{type:Object,default:function(){}}}},o=l(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("mdb-alert",{staticClass:"pl-5 mt-2 text-white text-center",attrs:{color:t.msg.type}},[t._v("\n  "+t._s(t.msg.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports},677:function(t,e,l){"use strict";l.r(e);l(31);var r=l(43),o={components:{mdbInput:r.m,mdbBtn:r.b,mdbModalHeader:r.r,mdbModalTitle:r.s,mdbModalBody:r.p,mdbModalFooter:r.q,mdbModal:r.o},props:{uploadImage:{type:Boolean,default:!1},image:{type:Object,default:function(){}}},data:function(){return{file:"",msg:{message:"",type:""},img:{alt:""}}},computed:{imageList:function(){return this.$store.getters["images/getImages"]},uploadMsg:function(){return this.$store.getters["images/getMsg"]}},methods:{saveFile:function(){var t=this,e={};e.file=this.file,e.alt=this.img.alt,this.$store.dispatch("images/uploadImage",e).then((function(img){t.$emit("update:image",img)})),setTimeout((function(){t.$emit("update:uploadImage",!1),t.file="",t.img.alt=""}),2e3)},checkFile:function(t){this.file=t.target.files[0]},closeImageUpload:function(){this.$emit("update:uploadImage",!1),this.file="",this.img.alt=""}}},n=l(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("mdb-modal",{attrs:{size:"md",show:t.uploadImage},on:{close:t.closeImageUpload}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v("Upload image")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Description",inline:""},model:{value:t.img.alt,callback:function(e){t.$set(t.img,"alt","string"==typeof e?e.trim():e)},expression:"img.alt"}})],1)]),t._v(" "),l("div",{staticClass:"col-12"},[l("div",{staticClass:"input-group"},[l("div",{staticClass:"input-group-prepend"},[l("span",{staticClass:"input-group-text",attrs:{id:"imageInput"}},[t._v("Upload")])]),t._v(" "),l("div",{staticClass:"custom-file"},[l("input",{ref:"imageInput",staticClass:"custom-file-input",attrs:{id:"imageInput",type:"file","aria-describedby":"imageInput",accept:"image/jpeg image/png"},on:{change:function(e){return t.checkFile(e)}}}),t._v(" "),t.file.name?l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.file.name))]):l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Image")])])])])])]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.closeImageUpload.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary",size:"sm",disabled:""==t.img.alt},on:{click:function(e){return t.saveFile()}}},[t._v("\n        Save\n      ")])],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[""!=t.uploadMsg.message?l("div",{staticClass:"text-white text-center",class:"bg-"+t.uploadMsg.type},[l("p",[t._v(t._s(t.uploadMsg.message))])]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},678:function(t,e,l){"use strict";l.r(e);var r=l(43),o={components:{mdbBtn:r.b,mdbModalHeader:r.r,mdbModalTitle:r.s,mdbModalBody:r.p,mdbModalFooter:r.q,mdbModal:r.o},props:{item:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},select:{type:Boolean,default:!1}},data:function(){return{object:{}}},methods:{selected:function(t){this.object=t},confirmSelect:function(){this.$emit("update:item",this.object),this.$emit("update:select",!1),this.object=""},closeSelect:function(){this.$emit("update:select",!1),this.object=""}}},n=l(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.select},on:{close:t.closeSelect}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v("Select")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row"},t._l(t.items,(function(e,r){return l("div",{key:r,staticClass:"col-4 p-0"},[l("div",{staticClass:"custom-control custom-radio custom-control-inline"},[l("img",{staticClass:"img-fluid",attrs:{src:e.url,alt:e.alt}}),t._v(" "),l("input",{staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"circuits"},on:{click:function(l){return t.selected(e)}}}),t._v(" "),l("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.title))])])])})),0)])]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.closeSelect.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary"},on:{click:t.confirmSelect}},[t._v("\n        Confirm\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},681:function(t,e,l){var content=l(690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(20).default)("4b32aec4",content,!0,{sourceMap:!1})},682:function(t,e,l){"use strict";l.r(e);var r=l(43),o={components:{mdbCol:r.j,mdbBtn:r.b},props:{image:{type:Object,default:function(){}},imageList:{type:Array,default:function(){return[]}},type:{type:String,default:""}},data:function(){return{addImage:!1,selectImage:!1,defaultImage:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7"}},computed:{img:{get:function(){return this.image},set:function(t){this.$emit("update:image",t)}}}},n=l(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("mdb-col",[t.img.url?l("img",{staticClass:"img-fluid",attrs:{src:t.img.url,alt:t.img.alt}}):l("img",{staticClass:"img-fluid",attrs:{src:t.defaultImage,alt:"Placeholder image"}})]),t._v(" "),l("mdb-col",{staticClass:"pt-2"},[l("mdb-btn",{staticClass:"ml-0",attrs:{color:"primary"},nativeOn:{click:function(e){t.addImage=!0}}},[t._v("\n      "+t._s("New "+t.type)+"\n    ")]),t._v(" "),l("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){t.selectImage=!0}}},[t._v("\n      "+t._s("Select "+t.type)+"\n    ")])],1),t._v(" "),l("helpers-add-image",{attrs:{"upload-image":t.addImage,image:t.img},on:{"update:uploadImage":function(e){t.addImage=e},"update:upload-image":function(e){t.addImage=e},"update:image":function(e){t.img=e}}}),t._v(" "),l("helpers-select-item",{attrs:{select:t.selectImage,item:t.img,items:t.imageList},on:{"update:select":function(e){t.selectImage=e},"update:item":function(e){t.img=e},"update:items":function(e){t.imageList=e}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersAddImage:l(677).default,HelpersSelectItem:l(678).default})},689:function(t,e,l){"use strict";l(681)},690:function(t,e,l){var r=l(19)(!1);r.push([t.i,".loading{width:100%;height:100%;position:fixed;z-index:3000;top:0;left:0;background-color:#fff;opacity:1}",""]),t.exports=r},691:function(t,e,l){"use strict";l.r(e);l(31);var r={data:function(){return{showing:!1}},computed:{getLoading:function(){return this.$store.getters["global/getLoading"]}},watch:{getLoading:function(t){t?(console.log("start fired"),this.start()):(console.log("stop fired"),this.stop())}},methods:{showProgress:function(t){this.showing=t},start:function(){this.showProgress(!0)},stop:function(){var t=this;setTimeout((function(){t.showProgress(!1)}),250)}}},o=(l(689),l(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("transition",{attrs:{name:"fade"}},[t.showing?l("div",{staticClass:"loading"},[l("div",{staticClass:"position-relative d-flex flex-center"})]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,l){"use strict";l.r(e);l(36),l(26),l(15),l(34),l(32),l(4),l(5),l(27),l(31);var r=l(43),o=l(18),n={components:{mdbInput:r.m,mdbBtn:r.b,mdbContainer:r.k,mdbIcon:r.l,mdbCol:r.j,mdbRow:r.u,mdbModalHeader:r.r,mdbModalTitle:r.s,mdbModalBody:r.p,mdbModalFooter:r.q,mdbModal:r.o,mdbPopover:r.t},props:{size:{type:Number,required:!1,default:10}},data:function(){return{driver:{img:{url:"",alt:""},slug:"",name:"",social:{facebook:"",website:"",twitter:"",gplus:"",insta:"",twitch:"",pinterest:"",youtube:""},partners:"",nationality:"",series:""},pageNumber:0,msg:"",editMsg:"",editModal:!1,deleteModal:!1,toDeleteDriver:{id:"",title:""},clickedDriver:{img:{url:"",alt:""},id:"",name:"",slug:"",social:{facebook:"",website:"",twitter:"",gplus:"",insta:"",twitch:"",pinterest:"",youtube:""},partners:"",nationality:"",series:""},existsModal:!1,uploadImage:!1,file:"",img:{id:"",content:"",alt:""},type:"",defaultImage:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7"}},computed:{drivers:function(){return this.$store.getters["drivers/getDrivers"]},images:function(){return this.$store.getters["images/getDriverImages"]},uploadMsg:function(){return this.$store.getters["images/getMsg"]},pageCount:function(){var t=this.drivers.length,s=this.size;return Math.ceil(t/s)},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.drivers.slice(t,e)}},methods:{reset:function(){this.driver={name:"",slug:"",img:{url:"",alt:""},partners:"",nationality:"",series:""},this.file="",this.img={id:"",content:"",alt:""},this.galleryContent=[],this.driver.social={facebook:"",website:"",twitter:"",gplus:"",insta:"",twitch:"",pinterest:"",youtube:""}},addDriver:function(){var t=this,e=[];this.driver.name.split(" ").forEach((function(t){e.push(t.toLowerCase())})),this.driver.slug=e.join("-"),""===this.driver.img.url&&(this.driver.img.url=this.defaultImage,this.driver.img.alt="Placeholder Img"),o.d.add({name:this.driver.name,slug:this.driver.slug,createdOn:new Date,url:this.driver.img.url,alt:this.driver.img.alt,social:this.driver.social,partners:this.driver.partners,nationality:this.driver.nationality,series:this.driver.series}).then((function(){t.reset(),t.msg={type:"success",message:"Driver added"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.msg={type:"warning",message:e.message},setTimeout((function(){t.msg={type:"",message:""}}),2e3)}))},newImage:function(t){this.uploadImage=!0,this.type=t},checkFile:function(t){var e=this;this.file=t.target.files[0],o.c.where("name","==",this.file.name).get().then((function(t){t.forEach((function(t){t.exists&&(e.existsModal=!0,e.uploadImage=!1,e.img.content=t.data(),e.img.id=t.id)}))}))},saveFile:function(){var t=this;if("driver"===this.type){var e={};e.file=this.file,e.alt=this.img.alt,this.$store.dispatch("images/uploadDriverImage",e).then((function(e){t.img.content=e,t.driver.imgId=t.img.content.id,t.driver.url=t.img.content.url,t.driver.alt=t.img.alt,t.type="",t.file="",t.img.alt="",t.$store.dispatch("global/setLoading",!1),setTimeout((function(){t.uploadImage=!1,t.$store.commit("images/setMsg",{})}),2e3)}))}else if("editDriver"===this.type){var l={};l.file=this.file,l.alt=this.img.alt,this.$store.dispatch("images/uploadDriverImage",l).then((function(e){t.img.content=e,t.clickedDriver.imgId=t.img.content.id,t.clickedDriver.url=t.img.content.url,t.clickedDriver.alt=t.img.alt,console.log(t.img.content),t.type="",t.file="",t.img.alt="",t.$store.dispatch("global/setLoading",!1),setTimeout((function(){t.uploadImage=!1,t.$store.commit("images/setMsg",{})}),2e3)}))}},closeImageUpload:function(){this.uploadImage=!1,this.type="",this.file="",this.img.alt=""},confirmUse:function(){"driver"===this.type?(this.driver.imgId=this.img.id,this.existsModal=!1,this.driver.url=this.img.content.url,this.driver.alt=this.img.content.alt,this.type="",this.file="",this.img.alt=""):"editDriver"===this.type&&(this.clickedDriver.imgId=this.img.id,this.existsModal=!1,this.clickedDriver.url=this.img.content.url,this.clickedDriver.alt=this.img.content.alt,this.type="",this.file="",this.img.alt="")},declineUse:function(){this.existsModal=!1,this.img.content="",this.img.id="",this.type="",this.file="",this.img.alt=""},submitForm:function(){var t=this;""===this.driver.name?(this.msg={type:"warning",message:"Missing information check the form is completely filled"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)):this.addDriver()},nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--},deleteDriver:function(t){this.deleteModal=!0,this.toDeleteDriver.name=t.name,this.toDeleteDriver.id=t.id},cancelDelete:function(){this.toDeleteDriver={id:"",title:""},this.deleteModal=!1},confirmDelete:function(){var t=this;o.d.doc(this.toDeleteDriver.id).delete().then((function(){t.deleteModal=!1,t.msg={type:"danger",message:"driver deleted"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.msg={type:"warning",message:e.message},setTimeout((function(){t.msg={type:"",message:""}}),2e3)}))},editDriver:function(t){this.editModal=!0,this.clickedDriver.id=t.id,this.clickedDriver.name=t.name,this.clickedDriver.slug=t.slug,this.clickedDriver.img.url=t.url,this.clickedDriver.img.alt=t.alt,this.clickedDriver.social=t.social,this.clickedDriver.partners=t.partners,this.clickedDriver.nationality=t.nationality,this.clickedDriver.series=t.series},cancelEdit:function(){this.clickedDriver={id:"",name:"",slug:"",url:"",imgId:""},this.editModal=!1},saveEdit:function(){var t=this,e=[];this.clickedDriver.name.split(" ").forEach((function(t){e.push(t.toLowerCase())})),this.clickedDriver.slug=e.join("-"),o.d.doc(this.clickedDriver.id).update({name:this.clickedDriver.name,slug:this.clickedDriver.slug,createdOn:new Date,url:this.clickedDriver.img.url,alt:this.clickedDriver.img.alt,social:this.clickedDriver.social,partners:this.clickedDriver.partners,nationality:this.clickedDriver.nationality,series:this.clickedDriver.series}).then((function(){t.cancelEdit(),t.msg={type:"success",message:"Driver updated"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.editMsg={type:"warning",message:e.message},setTimeout((function(){t.editMsg={type:"",message:""}}),2e3)}))}}},c=l(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"text-center w-100"},[t._v("\n    Drivers\n  ")]),t._v(" "),l("mdb-container",[l("mdb-row",[l("mdb-col",{staticClass:"text-center pt-2 offset-3",attrs:{col:"6"}},[l("helpers-image-handler",{attrs:{image:t.driver.img,"image-list":t.images},on:{"update:image":function(e){return t.$set(t.driver,"img",e)}}})],1),t._v(" "),l("mdb-col",{attrs:{col:"12"}},[l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Name",inline:""},model:{value:t.driver.name,callback:function(e){t.$set(t.driver,"name","string"==typeof e?e.trim():e)},expression:"driver.name"}})],1),t._v(" "),l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Partners",inline:""},model:{value:t.driver.partners,callback:function(e){t.$set(t.driver,"partners","string"==typeof e?e.trim():e)},expression:"driver.partners"}})],1),t._v(" "),l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Nationality",inline:""},model:{value:t.driver.nationality,callback:function(e){t.$set(t.driver,"nationality","string"==typeof e?e.trim():e)},expression:"driver.nationality"}})],1),t._v(" "),l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Series",inline:""},model:{value:t.driver.series,callback:function(e){t.$set(t.driver,"series","string"==typeof e?e.trim():e)},expression:"driver.series"}})],1),t._v(" "),l("mdb-col",{staticClass:"col-12 text-center pb-4"},[l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Facebook link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Facebook link"},slot:"body",model:{value:t.driver.social.facebook,callback:function(e){t.$set(t.driver.social,"facebook",e)},expression:"driver.social.facebook"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Facebook\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("insta link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"insta link"},slot:"body",model:{value:t.driver.social.insta,callback:function(e){t.$set(t.driver.social,"insta",e)},expression:"driver.social.insta"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              insta\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Twitter link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Twitter link"},slot:"body",model:{value:t.driver.social.twitter,callback:function(e){t.$set(t.driver.social,"twitter",e)},expression:"driver.social.twitter"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Twitter\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Google+ link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Gplus link"},slot:"body",model:{value:t.driver.social.gplus,callback:function(e){t.$set(t.driver.social,"gplus",e)},expression:"driver.social.gplus"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Google+\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Twitch link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Twitch link"},slot:"body",model:{value:t.driver.social.twitch,callback:function(e){t.$set(t.driver.social,"twitch",e)},expression:"driver.social.twitch"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Twitch\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Pinterest link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Pinterest link"},slot:"body",model:{value:t.driver.social.pinterest,callback:function(e){t.$set(t.driver.social,"pinterest",e)},expression:"driver.social.pinterest"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Pinterest\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Youtube link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Youtube link"},slot:"body",model:{value:t.driver.social.youtube,callback:function(e){t.$set(t.driver.social,"youtube",e)},expression:"driver.social.youtube"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Youtube\n            ")])],1)],1),t._v(" "),l("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.submitForm.apply(null,arguments)}}},[t._v("\n          Add driver\n        ")])],1)],1)],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[l("ui-message",{attrs:{msg:t.msg}})],1),t._v(" "),l("mdb-container",{staticClass:"p-0 pt-5",attrs:{fluid:""}},[l("mdb-row",[l("mdb-col",[l("table",{staticClass:"table"},[l("thead",{staticClass:"black text-white"},[l("tr",[l("th",{attrs:{scope:"col"}},[t._v("\n                Title\n              ")]),t._v(" "),l("th",{attrs:{scope:"col"}},[t._v("\n                Action\n              ")])])]),t._v(" "),l("tbody",t._l(t.paginatedData,(function(e,r){return l("tr",{key:r},[l("th",{attrs:{scope:"row"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),l("td",[l("a",{staticClass:"mr-1",on:{click:function(l){return t.editDriver(e)}}},[l("mdb-icon",{attrs:{icon:"edit"}})],1),t._v(" "),l("a",{staticClass:"ml-1",on:{click:function(l){return t.deleteDriver(e)}}},[l("mdb-icon",{attrs:{icon:"trash-alt"}})],1)])])})),0)])]),t._v(" "),l("mdb-col",{staticClass:"col-12 text-center"},[l("mdb-btn",{class:{"d-none":0==t.pageNumber},attrs:{color:"primary"},nativeOn:{click:function(e){return t.prevPage.apply(null,arguments)}}},[l("mdb-icon",{attrs:{icon:"angle-double-left"}})],1),t._v(" "),l("mdb-btn",{class:{"d-none":t.pageNumber>=t.pageCount-1},attrs:{color:"primary"},nativeOn:{click:function(e){return t.nextPage.apply(null,arguments)}}},[l("mdb-icon",{attrs:{icon:"angle-double-right"}})],1)],1)],1)],1),t._v(" "),l("mdb-modal",{attrs:{top:"",position:"top","full-height":"",direction:"top",show:t.editModal},on:{close:t.cancelEdit}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v(t._s(t.clickedDriver.name))])],1),t._v(" "),l("mdb-modal-body",[l("mdb-row",{staticClass:"d-flex flex-center"},[l("mdb-col",{attrs:{col:"6"}},[l("helpers-image-handler",{attrs:{image:t.clickedDriver.img,"image-list":t.images},on:{"update:image":function(e){return t.$set(t.clickedDriver,"img",e)}}})],1),t._v(" "),l("mdb-col",{staticClass:"md-form",attrs:{col:"4"}},[l("mdb-input",{attrs:{label:"Title",inline:""},model:{value:t.clickedDriver.name,callback:function(e){t.$set(t.clickedDriver,"name","string"==typeof e?e.trim():e)},expression:"clickedDriver.name"}})],1),t._v(" "),l("mdb-col",{staticClass:"md-form",attrs:{col:"8"}},[l("mdb-input",{attrs:{label:"Partners",inline:""},model:{value:t.clickedDriver.partners,callback:function(e){t.$set(t.clickedDriver,"partners","string"==typeof e?e.trim():e)},expression:"clickedDriver.partners"}})],1),t._v(" "),l("mdb-col",{staticClass:"md-form",attrs:{col:"4"}},[l("mdb-input",{attrs:{label:"Nationality",inline:""},model:{value:t.clickedDriver.nationality,callback:function(e){t.$set(t.clickedDriver,"nationality","string"==typeof e?e.trim():e)},expression:"clickedDriver.nationality"}})],1),t._v(" "),l("mdb-col",{staticClass:"md-form",attrs:{col:"8"}},[l("mdb-input",{attrs:{label:"Series",inline:""},model:{value:t.clickedDriver.series,callback:function(e){t.$set(t.clickedDriver,"series","string"==typeof e?e.trim():e)},expression:"clickedDriver.series"}})],1),t._v(" "),l("mdb-col",{staticClass:"col-12 text-center pb-4"},[l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Facebook link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Facebook link"},slot:"body",model:{value:t.clickedDriver.social.facebook,callback:function(e){t.$set(t.clickedDriver.social,"facebook",e)},expression:"clickedDriver.social.facebook"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Facebook\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("insta link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"insta link"},slot:"body",model:{value:t.clickedDriver.social.insta,callback:function(e){t.$set(t.clickedDriver.social,"insta",e)},expression:"clickedDriver.social.insta"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              insta\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Twitter link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Twitter link"},slot:"body",model:{value:t.clickedDriver.social.twitter,callback:function(e){t.$set(t.clickedDriver.social,"twitter",e)},expression:"clickedDriver.social.twitter"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Twitter\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Google+ link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Gplus link"},slot:"body",model:{value:t.clickedDriver.social.gplus,callback:function(e){t.$set(t.clickedDriver.social,"gplus",e)},expression:"clickedDriver.social.gplus"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Google+\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Twitch link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Twitch link"},slot:"body",model:{value:t.clickedDriver.social.twitch,callback:function(e){t.$set(t.clickedDriver.social,"twitch",e)},expression:"clickedDriver.social.twitch"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Twitch\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Pinterest link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Pinterest link"},slot:"body",model:{value:t.clickedDriver.social.pinterest,callback:function(e){t.$set(t.clickedDriver.social,"pinterest",e)},expression:"clickedDriver.social.pinterest"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Pinterest\n            ")])],1),t._v(" "),l("mdb-popover",{attrs:{trigger:"click",options:{placement:"bottom"}}},[l("span",{attrs:{slot:"header"},slot:"header"},[t._v("Youtube link")]),t._v(" "),l("mdb-input",{attrs:{slot:"body",label:"Youtube link"},slot:"body",model:{value:t.clickedDriver.social.youtube,callback:function(e){t.$set(t.clickedDriver.social,"youtube",e)},expression:"clickedDriver.social.youtube"}}),t._v(" "),l("mdb-btn",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n              Youtube\n            ")])],1)],1)],1)],1),t._v(" "),l("mdb-container",[l("transition",{attrs:{name:"fade"}},[l("ui-message",{attrs:{msg:t.editMsg}})],1)],1),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.cancelEdit.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.saveEdit.apply(null,arguments)}}},[t._v("\n        Save changes\n      ")])],1)],1),t._v(" "),l("mdb-modal",{attrs:{frame:"",position:"top",direction:"top",show:t.deleteModal},on:{close:function(e){t.deleteModal=!1}}},[l("mdb-modal-body",{staticClass:"text-center"},[l("span",{staticClass:"text-danger"},[t._v("Are you sure you want to delete this driver")]),t._v("\n      "+t._s(t.toDeleteDriver.name)+"\n      "),l("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.cancelDelete.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"danger"},nativeOn:{click:function(e){return t.confirmDelete.apply(null,arguments)}}},[t._v("\n        Delete\n      ")])],1)],1),t._v(" "),l("mdb-modal",{attrs:{size:"md",show:t.existsModal},on:{close:function(e){t.existsModal=!1}}},[l("mdb-modal-header",[l("mdb-modal-title",[t._v("Image exists with that name")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"row col-12 col-md-6 col-lg-4 py-3"},[l("p",[t._v("Would you like to use this one ?")])]),t._v(" "),l("img",{staticClass:"img-fluid",attrs:{src:t.img.content.url,alt:t.img.content.alt}})]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.declineUse.apply(null,arguments)}}},[t._v("\n        No\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary",size:"sm"},nativeOn:{click:function(e){return t.confirmUse.apply(null,arguments)}}},[t._v("\n        Yes\n      ")])],1)],1),t._v(" "),l("mdb-modal",{attrs:{size:"md",show:t.uploadImage},on:{close:t.closeImageUpload}},[l("ui-loader"),t._v(" "),l("mdb-modal-header",[l("mdb-modal-title",[t._v("Upload image")])],1),t._v(" "),l("mdb-modal-body",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"md-form"},[l("mdb-input",{attrs:{label:"Description",inline:""},model:{value:t.img.alt,callback:function(e){t.$set(t.img,"alt","string"==typeof e?e.trim():e)},expression:"img.alt"}})],1)]),t._v(" "),l("div",{staticClass:"col-12"},[l("div",{staticClass:"input-group"},[l("div",{staticClass:"input-group-prepend"},[l("span",{staticClass:"input-group-text",attrs:{id:"imageInput"}},[t._v("Upload")])]),t._v(" "),l("div",{staticClass:"custom-file"},[l("input",{ref:"imageInput",staticClass:"custom-file-input",attrs:{id:"imageInput",type:"file","aria-describedby":"imageInput",accept:"image/jpeg image/png"},on:{change:function(e){return t.checkFile(e)}}}),t._v(" "),t.file.name?l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.file.name))]):l("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Image")])])])])])]),t._v(" "),l("mdb-modal-footer",[l("mdb-btn",{attrs:{color:"secondary",size:"sm"},nativeOn:{click:function(e){return t.closeImageUpload.apply(null,arguments)}}},[t._v("\n        Close\n      ")]),t._v(" "),l("mdb-btn",{attrs:{color:"primary",size:"sm",disabled:""==t.img.alt},on:{click:function(e){return t.saveFile(t.type)}}},[t._v("\n        Save\n      ")])],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[l("ui-message",{attrs:{msg:t.uploadMsg}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelpersImageHandler:l(682).default,UiMessage:l(676).default,UiLoader:l(691).default})}}]);