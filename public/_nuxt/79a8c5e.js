(window.webpackJsonp=window.webpackJsonp||[]).push([[7,21],{1247:function(t,e,n){"use strict";n.r(e);n(8),n(13),n(18),n(30),n(14);var o=n(50),c={components:{mdbContainer:o.h,mdbRow:o.r,mdbCol:o.g,mdbBtn:o.a},data:function(){return{content:{},active:"",headline:[{id:1,name:"Image",url:"Images",upcoming:!1,value:!1,active:!0},{id:2,name:"Video",url:"Videos",upcoming:!1,value:!1,active:!1}]}},mounted:function(){var t=this;this.$refs.input.forEach((function(input){if(!0===input.checked){var e=parseInt(input.attributes.id.value);t.content=t.headline.filter((function(t){return t.id===e}))[0],t.active="The "+t.headline.filter((function(t){return t.id===e}))[0].name+" section is currently active."}}))},methods:{handleChange:function(t,e){var n=this;this.headline.filter((function(t){return t.id===e})).map((function(t){t.value=!0,n.content=t})),this.headline.filter((function(t){return t.id!==e})).map((function(t){return t.value=!1}))}}},r=n(2),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mdb-container",{staticClass:"text-center"},[o("h1",[t._v("Headline Section")]),t._v(" "),o("h4",[t._v(t._s(t.active))]),t._v(" "),o("h5",[t._v("Select headline content to edit")]),t._v(" "),t._l(t.headline,(function(e,n){return o("div",{key:n,staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{ref:"input",refInFor:!0,staticClass:"custom-control-input",attrs:{id:e.id,type:"radio",name:"radioInline",data:e},domProps:{value:e.value,checked:e.active},on:{change:function(n){return t.handleChange(n,e.id)}}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v(t._s(e.name))])])}))],2),t._v(" "),o("div",[t._v(t._s(t.headline))]),t._v(" "),o("div",[t._v(t._s(t.content))]),t._v(" "),o("mdb-container",{attrs:{fluid:""}},["Image"==t.content.name?o("mdb-row",[o("mdb-col",{staticClass:"image p-0",attrs:{col:"8"}},[o("img",{staticClass:"img-fluid",attrs:{src:n(698),alt:""}}),t._v(" "),t.content.upcoming?o("mdb-col",{staticClass:"d-flex offset-6 upcoming-container p-0",attrs:{md:"6"}},[o("upcoming")],1):t._e()],1),t._v(" "),o("mdb-col",[o("mdb-btn",{on:{click:function(e){t.content.upcoming=!t.content.upcoming}}},[t._v("Toggle upcoming section")]),t._v(" "),o("mdb-btn",[t._v("Edit Image")])],1)],1):t._e(),t._v(" "),"Video"==t.content.name?o("mdb-row",[o("mdb-col",{staticClass:"video p-0",attrs:{col:"8"}},[o("div",{staticClass:"embed-responsive embed-responsive-21by9"},[o("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"}})]),t._v(" "),t.content.upcoming?o("mdb-col",{staticClass:"d-flex offset-6 upcoming-container p-0",attrs:{md:"6"}},[o("HomeUpcoming")],1):t._e()],1),t._v(" "),o("mdb-col",[o("mdb-btn",{on:{click:function(e){t.content.upcoming=!t.content.upcoming}}},[t._v("Toggle upcoming section")]),t._v(" "),o("mdb-btn",[t._v("Edit Video")])],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeUpcoming:n(757).default})},698:function(t,e,n){t.exports=n.p+"img/PCCGB_KH_-D4B01559.56b10d0.png"},757:function(t,e,n){"use strict";n.r(e);var o={name:"Headline",components:{mdbCol:n(50).g}},c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-col",{staticClass:"bg-light"},[n("table",{staticClass:"table"},[n("thead",{staticClass:"grey lighten-2"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("First")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Last")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Handle")])])]),t._v(" "),n("tbody",[n("tr",[n("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),n("td",[t._v("Mark")]),t._v(" "),n("td",[t._v("Otto")]),t._v(" "),n("td",[t._v("@mdo")])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),n("td",[t._v("Jacob")]),t._v(" "),n("td",[t._v("Thornton")]),t._v(" "),n("td",[t._v("@fat")])]),t._v(" "),n("tr",[n("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),n("td",[t._v("Larry")]),t._v(" "),n("td",[t._v("the Bird")]),t._v(" "),n("td",[t._v("@twitter")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);