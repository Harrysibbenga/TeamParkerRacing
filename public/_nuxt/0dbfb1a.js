(window.webpackJsonp=window.webpackJsonp||[]).push([[37,16,17,19,20,22],{1254:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomeHeadline"),t._v(" "),n("HomeLatest"),t._v(" "),n("HomeSubscribe"),t._v(" "),n("HomeSocial")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHeadline:n(964).default,HomeLatest:n(956).default,HomeSubscribe:n(957).default,HomeSocial:n(965).default})},698:function(t,e,n){t.exports=n.p+"img/PCCGB_KH_-D4B01559.56b10d0.png"},712:function(t,e,n){"use strict";n.r(e);var r=n(50),l={components:{mdbCard:r.b,mdbCardImage:r.d,mdbView:r.v,mdbMask:r.k,mdbIcon:r.i,mdbCardTitle:r.f,mdbCardText:r.e,mdbCardBody:r.c},props:{post:{type:Object,required:!0,default:function(){return{}}}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-card",[n("mdb-view",{attrs:{hover:""}},[n("a",{attrs:{href:"#!"}},[n("mdb-card-image",{staticClass:"img-fluid",attrs:{src:t.post.url,alt:t.post.alt}}),t._v(" "),n("mdb-mask",{attrs:{"flex-center":"",waves:"",overlay:"white-slight"}})],1)]),t._v(" "),n("mdb-card-body",{staticClass:"text-center"},["championship"==t.post.type?n("mdb-card-title",{staticClass:"pt-2"},[t._v(t._s(t.post.name))]):n("mdb-card-title",{staticClass:"pt-2"},[t._v(t._s(t.post.title))]),t._v(" "),n("mdb-card-text",[t._v(t._s(t.post.date))]),t._v(" "),n("mdb-card-text",[t._v(t._s(t.post.excerpt))]),t._v(" "),"championship"==t.post.type?n("NuxtLink",{staticClass:"black-text d-flex justify-content-center py-2",attrs:{to:{name:"championship-slug",params:{slug:t.post.slug}}}},[n("h5",[t._v("Read more "),n("mdb-icon",{staticClass:"pl-2",attrs:{icon:"angle-double-right"}})],1)]):t._e(),t._v(" "),"post"==t.post.type?n("NuxtLink",{staticClass:"black-text d-flex justify-content-center py-2",attrs:{to:{name:"post-slug",params:{slug:t.post.slug}}}},[n("h5",[t._v("Read more "),n("mdb-icon",{staticClass:"pl-2",attrs:{icon:"angle-double-right"}})],1)]):t._e(),t._v(" "),"featured"==t.post.type?n("NuxtLink",{staticClass:"black-text d-flex justify-content-center py-2",attrs:{to:{name:"feature-slug",params:{slug:t.post.slug}}}},[n("h5",[t._v("Read more "),n("mdb-icon",{staticClass:"pl-2",attrs:{icon:"angle-double-right"}})],1)]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},727:function(t,e,n){var content=n(792);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("c402c144",content,!0,{sourceMap:!1})},728:function(t,e,n){var content=n(794);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("64408a0e",content,!0,{sourceMap:!1})},791:function(t,e,n){"use strict";n(727)},792:function(t,e,n){var r=n(10)(!1);r.push([t.i,".container-xl{max-width:1440px}.rgba-primary-strong{background-color:rgba(20,73,130,.9)}@media screen and (max-width:991px){.view .mask{position:relative}.championship,.date,.title{font-size:1.3rem}.overlay .mask{opacity:1}.zoom:hover img,.zoom:hover video{transform:none}.featured-img{max-width:100%;height:auto}}@media(min-width:992px){.featured-img{height:726px}}",""]),t.exports=r},793:function(t,e,n){"use strict";n(728)},794:function(t,e,n){var r=n(10)(!1);r.push([t.i,"#eapps-instagram-feed-1{width:inherit!important;margin:0 auto;height:auto}",""]),t.exports=r},956:function(t,e,n){"use strict";n.r(e);n(23);var r=n(50),l={name:"Latest",components:{mdbContainer:r.h,mdbRow:r.r,mdbCol:r.g},computed:{posts:function(){return this.$store.getters["posts/getPosts"].slice(0,3)}}},o=(n(791),n(2)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-container",{staticClass:"bg-primary",attrs:{fluid:""}},[n("mdb-row",{staticClass:"pt-5"},t._l(t.posts,(function(t,e){return n("mdb-col",{key:e,staticClass:"mt-5 py-5",attrs:{md:"4"}},[n("UICard",{attrs:{post:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UICard:n(712).default})},957:function(t,e,n){"use strict";n.r(e);var r={name:"Basic",components:{mdbBtn:n(50).a},methods:{open:function(){this.$store.dispatch("global/setModal",!0)}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 text-center bg-secondary"},[n("h4",{staticClass:"text-white title"},[t._v("To keep up to date with our latest news")]),t._v(" "),n("mdb-btn",{attrs:{outline:"white"},nativeOn:{click:function(e){return t.open()}}},[t._v(" Click here")])],1)}),[],!1,null,null,null);e.default=component.exports},964:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"img-fluid",attrs:{src:n(698),alt:""}})])}],l=n(2),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},965:function(t,e,n){"use strict";n.r(e);n(793);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row pt-5 px-3"},[n("div",{staticClass:"col-12 col-md-4"},[n("div",{staticClass:"elfsight-app-607fb6b7-ae14-436b-9cc3-205602c23a06"})]),t._v(" "),n("div",{staticClass:"col-12 col-md-4"},[n("div",{staticClass:"elfsight-app-bfbbbc8d-0e36-4890-932d-2445092e37c7"})]),t._v(" "),n("div",{staticClass:"col-12 col-md-4"},[n("div",{staticClass:"elfsight-app-7a3eb100-617d-4911-b2c2-62c7784b39a7"})])])])}],!1,null,null,null);e.default=component.exports}}]);