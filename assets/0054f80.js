(window.webpackJsonp=window.webpackJsonp||[]).push([[5,26,27,28,29],{520:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return m}));var o=n(521),r=n(2),c=Object(r.i)("v-card__actions"),d=Object(r.i)("v-card__subtitle"),l=Object(r.i)("v-card__text"),m=Object(r.i)("v-card__title");o.a},546:function(e,t,n){var content=n(547);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("2065bca8",content,!0,{sourceMap:!1})},547:function(e,t,n){var o=n(9)(!1);o.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=o},554:function(e,t,n){"use strict";n(51),n(28),n(76),n(12),n(46),n(59),n(38);var o=n(21),r=n(0),c=(n(546),n(519)),d=n(96),l=n(86),m=n(146),v=n(241),h=n(240),f=n(239),_=n(32),x=n(105),y=n(6),I=n(7),w=n(2);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(y.a)(d.a,l.a,m.a,v.a,h.a,f.a,_.a);t.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(I.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===w.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:O({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},589:function(e,t,n){"use strict";n.r(t);n(104);var o=n(0),r=n(77);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{medicines:{type:Array,default:null},showaction:{type:Boolean,default:!0}},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Quantity left",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Price per unit",value:"price"},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0,price:0}}},created:function(){},beforeMount:function(){},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.datalist.indexOf(e);confirm("Are you sure you want to delete this item?")},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(Object.assign(this.medicines[this.editedIndex],this.editedItem),this.editedItem.group=this.editedItem.group.id,this.editedItem.category=this.editedItem.category.id,this.editedItem.price=parseFloat(this.editedItem.price+".00"),this.$store.dispatch("update_medicine_product",this.editedItem)):(this.medicines.push(this.editedItem),this.$store.dispatch("add_new_medicine",this.editedItem)),this.close()},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:d(d({},Object(r.b)({template:"medicine_templates"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine":"Edit medicine"}})},m=n(37),v=n(45),h=n.n(v),f=n(137),_=n(521),x=n(520),y=n(541),I=n(532),w=n(543),k=n(554),O=n(221),C=n(174),j=n(228),T=n(542),$=n(173),V=n(535),D=n(97),A=n(57),S=n(85),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.medicines,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicines\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([e.showaction?{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewmedicine")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Unit price"},model:{value:e.editedItem.price,callback:function(t){e.$set(e.editedItem,"price",t)},expression:"editedItem.price"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Company"},model:{value:e.editedItem.company,callback:function(t){e.$set(e.editedItem,"company",t)},expression:"editedItem.company"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Compositions"},model:{value:e.editedItem.compositions,callback:function(t){e.$set(e.editedItem,"compositions",t)},expression:"editedItem.compositions"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Units"},model:{value:e.editedItem.units,callback:function(t){e.$set(e.editedItem,"units",t)},expression:"editedItem.units"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineGroupOptions,label:"Group","item-text":"name","item-value":"id"},model:{value:e.editedItem.group,callback:function(t){e.$set(e.editedItem,"group",t)},expression:"editedItem.group"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineCategoriesOptions,label:"Medical Category","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.name)+" - "+e._s(n.id)+"\n                      ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.id)+" - "+e._s(n.name)+"\n                      ")]}}]),model:{value:e.editedItem.category,callback:function(t){e.$set(e.editedItem,"category",t)},expression:"editedItem.category"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},{key:"item.category",fn:function(t){var o=t.item;return[n("p",[e._v(e._s(o.group.name))])]}},e.showaction?{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}:null,{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VContainer:I.a,VDataTable:w.a,VDialog:k.a,VDivider:O.a,VIcon:C.a,VProgressLinear:j.a,VRow:T.a,VSelect:$.a,VSpacer:V.a,VTextField:D.a,VToolbar:A.a,VToolbarTitle:S.a})},597:function(e,t,n){"use strict";var o=n(149),r=n(108),c=n(245),d=n(2),l=n(6),m=Object(l.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(d.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(d.g)(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}});t.a=m.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var e=m.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}})},629:function(e,t,n){"use strict";n.r(t);n(104);var o={props:{groups:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,search:"",headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Descriptions",value:"descriptions",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:0,name:"",descriptions:""},defaultItem:{id:0,name:"",descriptions:""}}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.groups[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_group",this.editedItem)):(this.groups.push(this.editedItem),this.$store.dispatch("add_new_medicine_group",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.groups.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(){}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  group":"Edit medicine group"}}},r=n(37),c=n(45),d=n.n(c),l=n(137),m=n(521),v=n(520),h=n(541),f=n(532),_=n(543),x=n(554),y=n(221),I=n(174),w=n(542),k=n(535),O=n(97),C=n(57),j=n(85),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.groups,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicine groups\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewgroup")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[n("v-text-field",{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:x.a,VDivider:y.a,VIcon:I.a,VRow:w.a,VSpacer:k.a,VTextField:O.a,VToolbar:C.a,VToolbarTitle:j.a})},630:function(e,t,n){"use strict";n.r(t);n(104);var o=n(0),r=n(77);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{categories:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,dialogDelete:!1,search:"",select:null,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Descriptions",value:"descriptions",sortable:!1},{text:"Unit of measurement",value:"measureName"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:0,name:"",measurementId:0,descriptions:""},defaultItem:{id:0,name:"",measurementId:0,descriptions:""}}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.categories[this.editedIndex],this.editedItem),delete this.editedItem.measureName,this.editedItem.measurementId=this.select,this.$store.dispatch("update_medicine_category",this.editedItem)):(this.categories.push(this.editedItem),delete this.editedItem.id,this.editedItem.measurementId=this.select,this.$store.dispatch("add_new_medicine_category",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.categories.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.editedIndex=this.categories.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},fetch_measures:function(){this.$store.dispatch("fetch_medicine_measurements")}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},computed:d(d({},Object(r.b)({measures:"medicinemeasurements"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine  category":"Edit medicine category"},datas:function(){return this.categories}})},m=n(37),v=n(45),h=n.n(v),f=n(137),_=n(521),x=n(520),y=n(541),I=n(532),w=n(543),k=n(554),O=n(221),C=n(174),j=n(228),T=n(542),$=n(173),V=n(535),D=n(97),A=n(57),S=n(85),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.categories,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicine categories\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n              "+e._s(e.$t("label.button.addnewcategory")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-select",{attrs:{items:e.measures,"item-text":"unit","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Measure unit",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_measures},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:e.save}},[e._v(e._s(e.$t("label.button.btnsave")))])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"indigo"},on:{click:function(t){return e.closeDelete()}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"warning darken-1"},on:{click:function(t){return e.deleteItemConfirm()}}},[e._v(e._s(e.$t("label.button.btndelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VContainer:I.a,VDataTable:w.a,VDialog:k.a,VDivider:O.a,VIcon:C.a,VProgressLinear:j.a,VRow:T.a,VSelect:$.a,VSpacer:V.a,VTextField:D.a,VToolbar:A.a,VToolbarTitle:S.a})},631:function(e,t,n){"use strict";n.r(t);n(104);var o={props:{measures:{type:Array,default:null}},data:function(){return{dialog:!1,dialogDelete:!1,search:"",editedIndex:-1,editedItem:{id:0,unit:"",symbol:"",quantity:""},defaultItem:{id:0,unit:"",symbol:"",quantity:""},headers:[{text:"ID",value:"id"},{text:"Unit",value:"unit"},{text:"Symbol",value:"symbol",sortable:!1},{text:"Quantity",value:"quantity",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.measures[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_measure",this.editedItem)):(this.$store.dispatch("create_medicine_measurement",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.measures.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(e){this.editedIndex=this.measures.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.closeDelete()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  measures":"Edit medicine measures ?"},datas:function(){return this.measures}}},r=n(37),c=n(45),d=n.n(c),l=n(137),m=n(521),v=n(520),h=n(541),f=n(532),_=n(543),x=n(554),y=n(221),I=n(174),w=n(542),k=n(535),O=n(97),C=n(57),j=n(85),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.measures,search:e.search,"items-per-page":15,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"gray"}},[n("v-toolbar-title",[n("h3",[e._v("\n              Medicine measurement units\n            ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"shrink",attrs:{label:"Search by ...","single-line":"","hide-details":"",rounded:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n          "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",elevation:"1",medium:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n                "+e._s(e.$t("label.button.addnewmeasure")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Unit"},model:{value:e.editedItem.unit,callback:function(t){e.$set(e.editedItem,"unit",t)},expression:"editedItem.unit"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Symbol"},model:{value:e.editedItem.symbol,callback:function(t){e.$set(e.editedItem,"symbol",t)},expression:"editedItem.symbol"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Quantity"},model:{value:e.editedItem.quantity,callback:function(t){e.$set(e.editedItem,"quantity",t)},expression:"editedItem.quantity"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",outlined:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"error",medium:""},on:{click:e.save}},[e._v(e._s(e.$t(-1===e.editedIndex?"label.button.btnsave":"label.button.btnedityes")))])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{dark:"","max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"indigo"},on:{click:function(t){return e.closeDelete()}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{staticClass:"py-2",attrs:{color:"warning darken-1"},on:{click:function(t){return e.deleteItemConfirm()}}},[e._v(e._s(e.$t("label.button.btnyesdelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n          mdi-delete\n        ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:x.a,VDivider:y.a,VIcon:I.a,VRow:w.a,VSpacer:k.a,VTextField:O.a,VToolbar:C.a,VToolbarTitle:j.a})},717:function(e,t,n){"use strict";n.r(t);n(104);var o=n(0),r=n(77),c=n(589),d=n(629),l=n(630),m=n(631);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{"tab-medicine":c.default,"tab-med-groups":d.default,"tab-med-categories":l.default,"tab-med-measurement":m.default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},items:[{id:3,tab:"Medicine Groups",content:"Tab 2 Content"},{id:2,tab:"Medicine Categories",content:"Tab 2 Content"},{id:1,tab:"Medicines",content:"Tab 1"},{id:4,tab:"Measurement units",content:"Tab measures "}]}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},fetchMedicineMeasureUnits:function(){this.$store.dispatch("fetch_medicine_measurements")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups();break;case 4:this.fetchMedicineMeasureUnits()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:h(h({},Object(r.b)({medicines:"medicines",categories:"medicinecategories",groups:"medicinegroups",template:"medicine_templates",medicinemeasurements:"medicinemeasurements"})),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}})},_=n(37),x=n(45),y=n.n(x),I=n(723),w=n(597),k=n(774),O=n(718),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v("Pharmacy")])],1),e._v(" "),n("v-tabs",{attrs:{"show-arrows":"","background-color":"primary",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return n("v-tab",{key:t.tab,on:{click:function(n){return n.stopPropagation(),e.handleTabNavigation(t)}}},[e._v("\n      "+e._s(t.tab)+"\n    ")])})),1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",[n("tab-med-groups",{attrs:{groups:e.groups},on:{update:function(t){return e.fetchGroups()}}})],1),e._v(" "),n("v-tab-item",[n("tab-med-categories",{attrs:{categories:e.categories},on:{update:function(t){return e.fetchCategories()}}})],1),e._v(" "),n("v-tab-item",[n("tab-medicine",{attrs:{medicines:e.medicines}})],1),e._v(" "),n("v-tab-item",[n("tab-med-measurement",{attrs:{measures:e.medicinemeasurements},on:{update:function(t){return e.fetchMedicineMeasureUnits()}}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VTab:I.a,VTabItem:w.a,VTabs:k.a,VTabsItems:O.a})}}]);