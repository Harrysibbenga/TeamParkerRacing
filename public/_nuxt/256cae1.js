(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{683:function(e,t,n){"use strict";n.r(t);n(32);var l={name:"ImageUpload",props:{images:{type:Array,default:function(){return[]}}},data:function(){return{files:[],imgs:[]}},methods:{handleChange:function(e){var t=this;this.files=e.target.files;for(var i=0;i<this.files.length;i++){var n={};n.file=this.files[i],n.alt=this.files[i].name,this.$store.dispatch("images/uploadImage",n).then((function(img){t.imgs.push(img)})).catch((function(e){console.log(e)}))}this.$emit("update:images",this.imgs)}}},o=n(2),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"files",multiple:"",accept:"image/*"},on:{change:e.handleChange}})])}),[],!1,null,null,null);t.default=component.exports}}]);