(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1250:function(t,e,n){"use strict";n.r(e);var o=n(1222),l={name:"Tags",props:["tags"],components:{Multiselect:n.n(o).a},computed:{options:function(){return this.$store.getters["tags/getTags"]}},data:function(){return{value:[]}},methods:{addTag:function(t){var e=this;this.$store.dispatch("tags/newTag",t).then((function(t){e.value.push(t)}))}}},c=(n(1223),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("multiselect",{attrs:{options:t.options,value:t.tags,multiple:!0,"tag-placeholder":"Add this as new tag",placeholder:"Select or create tags for this post",label:"name","track-by":"name",taggable:!0,"clear-on-select":!1,"close-on-select":!1},on:{input:function(e){return t.$emit("update:tags",e)},tag:t.addTag}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);