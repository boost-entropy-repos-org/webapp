(window.webpackJsonp=window.webpackJsonp||[]).push([[81,85],{615:function(e,t,r){var content=r(683);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("119758f3",content,!0,{sourceMap:!1})},631:function(e,t,r){"use strict";r.r(t);r(94),r(62);var l=r(0),n=r(77);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={data:function(){return{dialog:!1,dialogDelete:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Username",align:"start",sortable:!1,value:"username"},{text:"Email",value:"email"},{text:"Is Staff ?",value:"isStaff"},{text:"Roles",value:"roles"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},defaultItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},colors:["red","blue","green","yellow","purple","teal","orange","brown","deep-orange","blue-grey","cyan"],currentColor:"",valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>5||"Name must be less than 5 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("fetchuserroles"),this.$store.dispatch("retrieveAllusers")},methods:{getColor:function(e){return"user"===e?"yellow":"admin"===e?"red darken-3 white--text":"moderator"===e?"green":"cyan"},editItem:function(e){this.editedIndex=this.userslist.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.departmentId=null===this.editedItem.staff?null:this.editedItem.staff.department.id;var t=[];this.editedItem.roles.forEach((function(e){t.push(e.id)})),this.editedItem.roles=t,this.dialog=!0},deleteItem:function(e){this.editedIndex=this.userslist.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.userslist.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),this.$store.dispatch("retrieveAllusers")},save:function(){if(this.editedIndex>-1){var e=this.editedItem.id;delete this.editedItem.staff;var t={id:e,data:this.editedItem};this.$store.dispatch("updateuserdetails",t)}else delete this.editedItem.id,this.$refs.form.validate()&&this.$store.dispatch("create_new_user",this.editedItem),this.close()},_fetch_departments:function(){this.$store.dispatch("retrieve_departments")}},computed:d(d({},Object(n.b)({userslist:"users",userroles:"userroles",departments:"departments"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newuser":"label.titles.edituser"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}}},m=r(36),f=r(45),v=r.n(f),h=r(133),_=r(520),I=r(519),x=r(562),y=r(228),k=r(540),w=r(531),$=r(542),O=r(553),C=r(219),D=r(565),V=r(169),j=r(218),S=r(541),E=r(168),P=r(534),T=r(95),A=r(59),R=r(84),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.userslist?r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.userslist,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v(e._s(e.$t("label.titles.usersmanagement")))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,n=t.attrs;return[e.isMdAndUp?r("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",medium:"",dark:""}},"v-btn",n,!1),l),[r("v-icon",[e._v("mdi-plus")]),e._v("\n              "+e._s(e.$t("label.button.btncreatenewuser")))],1):r("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",fab:"",small:"",dark:""}},"v-btn",n,!1),l),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[e._v(e._s(e.$t(e.formTitle)))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Username",required:""},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})],1),e._v(" "),-1===e.editedIndex?r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1):e._e(),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"Email Address",type:"email",required:""},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.userroles,"item-text":"name","item-value":"id",chips:"","small-chips":"",multiple:"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Role",required:""},model:{value:e.editedItem.roles,callback:function(t){e.$set(e.editedItem,"roles",t)},expression:"editedItem.roles"}})],1),e._v(" "),r("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"6"}},[r("v-checkbox",{attrs:{label:"Is Staff?",required:""},model:{value:e.editedItem.isStaff,callback:function(t){e.$set(e.editedItem,"isStaff",t)},expression:"editedItem.isStaff"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e.editedItem.isStaff?r("v-select",{attrs:{items:e.departments,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Department"},on:{click:e._fetch_departments},model:{value:e.editedItem.departmentId,callback:function(t){e.$set(e.editedItem,"departmentId",t)},expression:"editedItem.departmentId"}}):e._e()],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:e.close}},[e._v("\n                "+e._s(e.$t("label.button.btncancel"))+"\n              ")]),e._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:e.save}},[e._v("\n                "+e._s(e.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",{staticClass:"subhead-1 pa-4"},[e._v("\n              "+e._s(e.$t("label.dialogs.deleteconfirmdialog")))]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary","x-small":""},on:{click:e.closeDelete}},[e._v(e._s(e.$t("label.button.btnno")))]),e._v(" "),r("v-btn",{attrs:{color:"warning","x-small":""},on:{click:e.deleteItemConfirm}},[e._v(e._s(e.$t("label.button.btnyes")))]),e._v(" "),r("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.isStaff",fn:function(t){return[t.item.isStaff?r("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[e._v("\n        mdi-check\n      ")]):e._e()]}},{key:"item.actions",fn:function(t){var l=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(l)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(l)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"item.roles",fn:function(t){var l=t.item;return e._l(l.roles,(function(t,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1",attrs:{color:e.getColor(t.name.toLowerCase()),"x-small":""}},[e._v(e._s(t.name.toLowerCase()))])}))}},{key:"no-data",fn:function(){return[r("p",[e._v("No Data available")])]},proxy:!0}],null,!0)}):r("v-progress-circular",{attrs:{size:"52",color:"indigo",indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:_.a,VCardActions:I.a,VCardText:I.c,VCardTitle:I.d,VCheckbox:x.a,VChip:y.a,VCol:k.a,VContainer:w.a,VDataTable:$.a,VDialog:O.a,VDivider:C.a,VForm:D.a,VIcon:V.a,VProgressCircular:j.a,VRow:S.a,VSelect:E.a,VSpacer:P.a,VTextField:T.a,VToolbar:A.a,VToolbarTitle:R.a})},682:function(e,t,r){"use strict";r(615)},683:function(e,t,r){var l=r(9)(!1);l.push([e.i,"h2[data-v-78610f70]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),e.exports=l},747:function(e,t,r){"use strict";r.r(t);var l={components:{"users-component":r(631).default},data:function(){return{mode:0,switch1:!0,select:{locale:"English",lang:"en"},locales:[{locale:"English",lang:"en"},{locale:"Kiswahili",lang:"sw"},{locale:"French",lang:"fr"},{locale:"Arab",lang:"ar"}]}},methods:{toggle:function(e){"true"==="".concat(e)?(this.$vuetify.theme.dark=!0,this.$store.dispatch("change_to_dark"),document.body.style.background="#354141"):(this.$store.dispatch("change_to_light"),this.$vuetify.theme.dark=!1,document.body.style.backgroundImage="url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)")},changeLanguage:function(e){this.$i18n.locale=e}},created:function(){},computed:{isDark:function(){return this.$store.getters.isDark}}},n=(r(682),r(36)),component=Object(n.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("users-component")}),[],!1,null,"78610f70",null);t.default=component.exports}}]);