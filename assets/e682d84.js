(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{733:function(t,e,r){"use strict";r.r(e);r(117);var n={data:function(){return{title:"Wards",search:"",editedIndex:-1,dialog:!1,valid:!0,headers:[{text:"ID",value:"id"},{text:"Name",value:"name",sortable:!1},{text:"No. of Beds",value:"numberOfBeds"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:""},defaultItem:{id:"",name:""}}},methods:{navigateToWard:function(t){console.log(t),this.$router.push("/inventory/ward/"+t.id)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.$store.dispatch("retrieve_all_wards")}))},editItem:function(t){this.editedIndex=this.wards.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.$store.dispatch("delete_ward",t.id)},save:function(){this.editedIndex>-1?(this.$store.dispatch("update_ward",this.editedItem),this.close()):(delete this.editedItem.id,this.$store.dispatch("create_new_ward",this.editedItem),this.close())}},computed:{wards:function(){return this.$store.getters.wards},formTitle:function(){return-1===this.editedIndex?"label.titles.newward":"label.titles.editward"}},beforeMount:function(){this.$store.dispatch("retrieve_all_wards")}},l=r(49),o=r(63),d=r.n(o),c=r(131),v=r(523),m=r(522),_=r(528),h=r(512),f=r(723),w=r(534),x=r(549),I=r(161),k=r(200),V=r(529),y=r(515),C=r(90),$=r(48),T=r(99),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{attrs:{to:"/inventory"}},[t._v("Inventory")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/inventory/ward"}},[t._v("Wards")])],1),t._v(" "),null===t.wards?r("v-progress-circular",{attrs:{width:2,color:"primary",size:"20",indeterminate:""}}):r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.wards,search:t.search,"items-per-page":15,"sort-by":"calories"},on:{"click:row":t.navigateToWard},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[r("h3",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"",dense:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[t.isMdAndUp?r("v-btn",t._g(t._b({staticClass:"primary",attrs:{medium:""}},"v-btn",l,!1),n),[r("v-icon",[t._v("mdi-plus")]),t._v(t._s(t.$t("label.button.btncreateward")))],1):r("v-btn",t._g(t._b({staticClass:"primary",attrs:{small:"",fab:""}},"v-btn",l,!1),n),[r("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-text-field",{attrs:{label:"Ward Name",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                "+t._s(t.$t("label.button.btncancel"))+"\n              ")]),t._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                "+t._s(t.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[r("td",{on:{click:function(t){t.stopPropagation()}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")]),t._v(" "),r("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n          mdi-delete\n        ")])],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:_.a,VContainer:h.a,VDataTable:f.a,VDialog:w.a,VForm:x.a,VIcon:I.a,VProgressCircular:k.a,VRow:V.a,VSpacer:y.a,VTextField:C.a,VToolbar:$.a,VToolbarTitle:T.a})}}]);