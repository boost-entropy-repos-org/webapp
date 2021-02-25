(window.webpackJsonp=window.webpackJsonp||[]).push([[63,30],{582:function(t,e,n){var content=n(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2065bca8",content,!0,{sourceMap:!1})},583:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},586:function(t,e,n){"use strict";n(54),n(30),n(12),n(46),n(62),n(39);var o=n(23),r=n(0),c=(n(582),n(557)),l=n(94),d=n(87),m=n(143),v=n(242),h=n(241),f=n(240),y=n(33),x=n(102),_=n(6),O=n(7),w=n(2);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(_.a)(l.a,d.a,m.a,v.a,h.a,f.a,y.a);e.a=j.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:I({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=I(I({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},627:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(79);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{medicines:{type:Array,default:null},showaction:{type:Boolean,default:!0}},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Quantity left",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Price per unit",value:"price"},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0}}},created:function(){},beforeMount:function(){},methods:{editItem:function(t){this.editedIndex=this.medicines.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},deleteItem:function(t){this.datalist.indexOf(t);confirm("Are you sure you want to delete this item?")},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?(Object.assign(this.medicines[this.editedIndex],this.editedItem),this.editedItem.group=this.editedItem.group.id,this.editedItem.category=this.editedItem.category.id,this.editedItem.price=parseFloat(this.editedItem.price+".00"),this.$store.dispatch("update_medicine_product",this.editedItem)):(this.medicines.push(this.editedItem),this.$store.dispatch("add_new_medicine",this.editedItem)),this.close()},handleClick:function(t){console.log(t),this.$router.push("/patients/"+t.id)}},watch:{dialog:function(t){t||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:l(l({},Object(r.b)({template:"medicine_templates"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine":"Edit medicine"}})},m=n(27),v=n(38),h=n.n(v),f=n(135),y=n(231),x=n(142),_=n(577),O=n(568),w=n(579),k=n(586),I=n(220),j=n(169),C=n(227),$=n(578),A=n(168),P=n(571),S=n(96),T=n(60),E=n(66),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:t.headers,items:t.medicines,search:t.search,"items-per-page":15,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[n("h3",[t._v("\n            Medicines\n          ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:t._u([t.showaction?{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(t._s(t.$t("label.button.addnewmedicine")))],1):n("v-btn",t._g(t._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-plus")])],1)]}}:null],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Unit price"},model:{value:t.editedItem.price,callback:function(e){t.$set(t.editedItem,"price",e)},expression:"editedItem.price"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Company"},model:{value:t.editedItem.company,callback:function(e){t.$set(t.editedItem,"company",e)},expression:"editedItem.company"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Compositions"},model:{value:t.editedItem.compositions,callback:function(e){t.$set(t.editedItem,"compositions",e)},expression:"editedItem.compositions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Units"},model:{value:t.editedItem.units,callback:function(e){t.$set(t.editedItem,"units",e)},expression:"editedItem.units"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:t.template.medicineGroupOptions,label:"Group","item-text":"name","item-value":"id"},model:{value:t.editedItem.group,callback:function(e){t.$set(t.editedItem,"group",e)},expression:"editedItem.group"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:t.template.medicineCategoriesOptions,label:"Medical Category","item-value":"id"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n                        "+t._s(n.name)+" - "+t._s(n.id)+"\n                      ")]}},{key:"item",fn:function(e){var n=e.item;return[t._v("\n                        "+t._s(n.id)+" - "+t._s(n.name)+"\n                      ")]}}]),model:{value:t.editedItem.category,callback:function(e){t.$set(t.editedItem,"category",e)},expression:"editedItem.category"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(e){var o=e.item;return[n("p",[t._v(t._s(o.group.name))])]}},{key:"item.category",fn:function(e){var o=e.item;return[n("p",[t._v(t._s(o.group.name))])]}},t.showaction?{key:"item.actions",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),t._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(e){return t.deleteItem(o)}}},[t._v("\n        mdi-delete\n      ")])]}}:null,{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:y.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:_.a,VContainer:O.a,VDataTable:w.a,VDialog:k.a,VDivider:I.a,VIcon:j.a,VProgressLinear:C.a,VRow:$.a,VSelect:A.a,VSpacer:P.a,VTextField:S.a,VToolbar:T.a,VToolbarTitle:E.a})},760:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(79);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{"tab-medicine":n(627).default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(t){this.editedIndex=this.medicines.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},handleTabNavigation:function(t){switch(t.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups()}},handleClick:function(t){console.log(t),this.$router.push("/patients/"+t.id)}},watch:{dialog:function(t){t||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({medicines:"medicines"}))},d=n(27),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[t._v("Pharmacy")])],1),t._v(" "),n("tab-medicine",{attrs:{medicines:t.medicines,showaction:!1}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);