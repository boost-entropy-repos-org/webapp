(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{522:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var o=n(523),r=n(2),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),f=Object(r.i)("v-card__title");o.a},528:function(t,e,n){"use strict";n(50),n(27),n(114),n(98),n(293),n(13),n(70),n(18),n(28),n(87),n(76),n(71),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(69),n(97);var o=n(0),r=(n(292),n(3)),c=n(39),l=n(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(y)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),r)}})},529:function(t,e,n){"use strict";n(20),n(50),n(27),n(114),n(293),n(70),n(18),n(28),n(51),n(87),n(76),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(69),n(97);var o=n(0),r=(n(292),n(3)),c=n(39),l=n(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(n,o){return n[t+Object(l.G)(o)]=e(),n}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),x=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:_}})),k={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,n){var o=C[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:_}},j),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var d in n)l+=String(n[d]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var o=n[t],r=I(e,t,o);r&&f.push(r)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),r)}})},530:function(t,e,n){var content=n(531);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2065bca8",content,!0,{sourceMap:!1})},531:function(t,e,n){var o=n(10)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},534:function(t,e,n){"use strict";n(64),n(27),n(98),n(13),n(51),n(59),n(36);var o=n(60),r=n(0),c=(n(530),n(499)),l=n(89),d=n(77),f=n(140),v=n(222),h=n(221),m=n(220),y=n(26),O=n(100),x=n(6),w=n(7),_=n(2);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(x.a)(l.a,d.a,f.a,v.a,h.a,m.a,y.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:O.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(_.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},616:function(t,e,n){"use strict";n.r(e);n(117);var o={props:{measures:{type:Array,default:null}},data:function(){return{dialog:!1,dialogDelete:!1,search:"",editedIndex:-1,editedItem:{id:0,unit:"",symbol:"",quantity:""},defaultItem:{id:0,unit:"",symbol:"",quantity:""},headers:[{text:"ID",value:"id"},{text:"Unit",value:"unit"},{text:"Symbol",value:"symbol",sortable:!1},{text:"Quantity",value:"quantity",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.measures[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_measure",this.editedItem)):(this.$store.dispatch("create_medicine_measurement",this.editedItem),this.$emit("update")),this.close()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},editItem:function(t){this.editedIndex=this.measures.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},deleteItem:function(t){this.editedIndex=this.measures.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.closeDelete()},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  measures":"Edit medicine measures ?"},datas:function(){return this.measures}}},r=n(49),c=n(63),l=n.n(c),d=n(131),f=n(523),v=n(522),h=n(528),m=n(512),y=n(723),O=n(534),x=n(201),w=n(161),_=n(529),j=n(515),k=n(90),C=n(48),I=n(99),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:t.headers,items:t.measures,search:t.search,"items-per-page":15,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[t._v("\n              Medicine measurement units\n            ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by ...","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("  \n          "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n                "+t._s(t.$t("label.button.addnewmeasure")))],1):n("v-btn",t._g(t._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Unit"},model:{value:t.editedItem.unit,callback:function(e){t.$set(t.editedItem,"unit",e)},expression:"editedItem.unit"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Symbol"},model:{value:t.editedItem.symbol,callback:function(e){t.$set(t.editedItem,"symbol",e)},expression:"editedItem.symbol"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Quantity"},model:{value:t.editedItem.quantity,callback:function(e){t.$set(t.editedItem,"quantity",e)},expression:"editedItem.quantity"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",outlined:""},on:{click:t.close}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{attrs:{color:"error",medium:""},on:{click:t.save}},[t._v(t._s(t.$t(-1===t.editedIndex?"label.button.btnsave":"label.button.btnedityes")))])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"indigo"},on:{click:function(e){return t.closeDelete()}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"warning darken-1"},on:{click:function(e){return t.deleteItemConfirm()}}},[t._v(t._s(t.$t("label.button.btnyesdelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),t._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(e){return t.deleteItem(o)}}},[t._v("\n          mdi-delete\n        ")])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:m.a,VDataTable:y.a,VDialog:O.a,VDivider:x.a,VIcon:w.a,VRow:_.a,VSpacer:j.a,VTextField:k.a,VToolbar:C.a,VToolbarTitle:I.a})}}]);