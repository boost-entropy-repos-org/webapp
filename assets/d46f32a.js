(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{782:function(e,t,r){"use strict";r.r(t);r(11),r(9),r(7),r(13),r(10),r(14);var n=r(0),l=r(86);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{dialog:!1,dialogDelete:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Username",align:"start",sortable:!1,value:"username"},{text:"Email",value:"email"},{text:"Is Staff ?",value:"isStaff"},{text:"Roles",value:"roles"}],editedItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},defaultItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},colors:["red","blue","green","yellow","purple","teal","orange","brown","deep-orange","blue-grey","cyan"],currentColor:"",valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>5||"Name must be less than 5 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("get_self_service_users")},methods:{getColor:function(e){return"user"===e?"yellow":"admin"===e?"red darken-3 white--text":"moderator"===e?"green":"cyan"}},computed:c(c({},Object(l.b)({userslist:"selfserviceusers"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newuser":"label.titles.edituser"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}}},f=r(36),m=r(47),v=r.n(m),y=r(237),h=r(577),w=r(228),O=r(178),_=r(227),j=r(568),x=r(69),k=r(78),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[null==e.userslist?r("v-progress-circular",{attrs:{size:"52",color:"indigo",indeterminate:""}}):r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.userslist,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v(e._s(e.$t("label.titles.selfusersmanagement")))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer")],1)]},proxy:!0},{key:"item.isStaff",fn:function(t){return[t.item.isStaff?r("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[e._v("\n        mdi-check\n      ")]):r("v-icon",{staticClass:"font-weight-black",attrs:{small:"",color:"primary"}},[e._v("\n        mdi-close\n      ")])]}},{key:"item.roles",fn:function(t){var n=t.item;return e._l(n.roles,(function(t,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1",attrs:{color:e.getColor(t.name.toLowerCase()),"x-small":""}},[e._v(e._s(t.name.toLowerCase()))])}))}},{key:"no-data",fn:function(){return[r("p",[e._v("No Data available")])]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VChip:y.a,VDataTable:h.a,VDivider:w.a,VIcon:O.a,VProgressCircular:_.a,VSpacer:j.a,VToolbar:x.a,VToolbarTitle:k.a})}}]);