(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1172:function(t,o,e){var content=e(1173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("1fbb21b2",content,!0,{sourceMap:!1})},1173:function(t,o,e){var r=e(10)(!1);r.push([t.i,".hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;transition:.3s}.hooper-pagination{position:absolute;bottom:0;right:50%;transform:translateX(50%);display:flex;padding:5px 10px}.hooper-indicators{display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}",""]),t.exports=r},1174:function(t,o,e){"use strict";e(914)},1175:function(t,o,e){var r=e(10)(!1);r.push([t.i,"#logo[data-v-07694c0a]{bottom:30%;left:0}.quote[data-v-07694c0a]{transform:skew(40deg);width:100%}.hover[data-v-07694c0a]{-webkit-animation:hovering 6s ease-in-out infinite;animation:hovering 6s ease-in-out infinite}@media(min-width:992px){#logo[data-v-07694c0a]{position:absolute}}@media(min-width:1200px){#logo[data-v-07694c0a]{bottom:15%;left:0}}",""]),t.exports=r},1240:function(t,o,e){"use strict";e.r(o);e(30),e(25);var r=e(50),n=e(913),l=(e(1172),e(4)),c=e.n(l),d={name:"Headline",components:{mdbContainer:r.h,mdbRow:r.r,mdbCol:r.g,Hooper:n.a,Slide:n.c,HooperNavigation:n.b},filters:{formatDateFrom:function(t){if(!t)return"-";var o=t;return c()(o).format("Do")},formatDateTo:function(t){if(!t)return"-";var o=t;return c()(o).format("Do MMM YYYY")}},data:function(){return{slug:"",post:{},activeDriver:""}},head:function(){return{title:this.post.name,titleTemplate:null,meta:[{property:"og:title",content:this.post.name},{property:"og:description",content:this.post.excerpt},{property:"og:url",content:"https://teamparkerracing.com/"+this.slug},{property:"og:image",content:this.post.url},{property:"og:site_name",content:"Team Parker Racing"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"},{hid:"description",name:"description",content:this.post.excerpt}]}},created:function(){var t=this,o=this.$route.params.slug;this.$store.dispatch("championships/setPostSlug",o).then((function(data){t.post=data}))},destroyed:function(){this.$store.commit("championships/clearPost")},methods:{show:function(t){var o=this;this.activeDriver="",setTimeout((function(){o.activeDriver=t}),300)}}},h=(e(1174),e(2)),component=Object(h.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("mdb-container",{attrs:{fluid:""}},[e("mdb-row",[e("mdb-col",{staticClass:"p-0",attrs:{col:"12"}},[e("img",{staticClass:"img-fluid",attrs:{src:t.post.url,alt:t.post.alt}})]),t._v(" "),e("mdb-col",{staticClass:"p-5",attrs:{id:"logo",col:"6"}},[e("img",{staticClass:"img-fluid",attrs:{src:t.post.logoUrl,alt:t.post.logoAlt}})])],1),t._v(" "),e("mdb-row",{staticClass:"pl-5 main-content"},[e("mdb-col",{attrs:{col:"12"}},[e("div",{staticClass:"py-5",domProps:{innerHTML:t._s(t.post.content)}})])],1),t._v(" "),e("mdb-row",{staticClass:"pb-4 flex-center"},[e("mdb-col",{attrs:{lg:"6"}},[e("img",{staticClass:"img-fluid",attrs:{src:t.post.timetableImg,alt:t.post.timetableAlt}})]),t._v(" "),e("mdb-col",{staticClass:"text-center",attrs:{lg:"6"}},[e("h4",{staticClass:"pb-4"},[t._v(t._s(t.post.timetable))]),t._v(" "),t._l(t.post.fixtures,(function(o,r){return e("div",{key:r,staticClass:"py-2"},[e("p",[e("span",[t._v(t._s(t._f("formatDateFrom")(o.dateFrom)))]),t._v("-"),e("span",[t._v(t._s(t._f("formatDateTo")(o.dateTo)))]),t._v(": "),e("span",[t._v(t._s(o.track))])])])}))],2)],1),t._v(" "),""!=t.post.galleryContent?e("mdb-row",{staticClass:"m-0"},[e("hooper",{staticStyle:{height:"auto"},attrs:{"items-to-show":3,"infinite-scroll":!0}},[t._l(t.post.galleryContent,(function(img,t){return e("slide",{key:t,attrs:{index:t}},[e("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}})])})),t._v(" "),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1):t._e()],1),t._v(" "),""!=t.post.drivers?e("mdb-container",{attrs:{fluid:""}},[e("mdb-row",{staticClass:"p-5"},[e("mdb-col",{attrs:{col:"12"}},[e("div",{staticClass:"quote bg-primary text-white p-2 mb-5 text-center"},[e("h2",[t._v("Meet Our Drivers")])])])],1)],1):t._e(),t._v(" "),e("mdb-container",{staticClass:"py-5"},[e("div",{staticClass:"d-flex d-flex justify-content-between"},t._l(t.post.drivers,(function(o,r){return e("div",{key:r,staticClass:"hover w-100 mx-1"},[e("div",{staticClass:"name bg-primary text-white p-2 text-center"},[e("h3",{on:{click:function(e){return t.show(o)}}},[t._v(t._s(o.name))])])])})),0)]),t._v(" "),e("transition",{attrs:{name:"zoom",mode:"out-in"}},[t.activeDriver?e("mdb-container",[e("mdb-row",{staticClass:"flex-center",staticStyle:{height:"auto"}},[e("mdb-col",{attrs:{lg:"4",col:"12"}},[e("img",{staticClass:"img-fluid p-5",attrs:{src:t.activeDriver.url,alt:t.activeDriver.alt}}),t._v(" "),e("div",{staticClass:"name bg-primary text-white p-2 mb-5 text-center"},[e("h3",[t._v(t._s(t.activeDriver.name))])])]),t._v(" "),e("mdb-col",{attrs:{lg:"8",col:"12"}},[e("p",[t._v("Nationality: "+t._s(t.activeDriver.nationality))]),t._v(" "),e("hr"),t._v(" "),t.activeDriver.partners?e("p",[t._v("\n            Partners: "+t._s(t.activeDriver.partners)+"\n          ")]):t._e(),t._v(" "),t.activeDriver.partners?e("hr"):t._e(),t._v(" "),e("p",[t._v("Social: "+t._s(t.activeDriver.social))]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Series: "+t._s(t.activeDriver.series))]),t._v(" "),e("hr")])],1)],1):t._e()],1)],1)}),[],!1,null,"07694c0a",null);o.default=component.exports},914:function(t,o,e){var content=e(1175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("289799dc",content,!0,{sourceMap:!1})}}]);