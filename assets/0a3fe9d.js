(window.webpackJsonp=window.webpackJsonp||[]).push([[3,32,33,34,37],{589:function(t,e,n){"use strict";n.r(e);var r={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},l=n(36),o=n(47),c=n.n(o),d=n(239),v=n(577),m=n(178),f=n(227),_=n(568),h=n(102),x=n(69),C=n(572),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDataTable:v.a,VIcon:m.a,VProgressCircular:f.a,VSpacer:_.a,VTextField:h.a,VToolbar:x.a,VTooltip:C.a})},632:function(t,e,n){"use strict";n.r(e);var r={props:{patient:{type:Object,default:null}},data:function(){return{edit:!1,patientcp:this.patient,gender:["Male","Female","Unspecified"]}},methods:{submit:function(){var t=this;this.$store.dispatch("update_patient",this.patientcp).then((function(){t.edit=!1,t.fetchclientdata(t.$route.params.id)}))}}},l=n(36),o=n(47),c=n.n(o),d=n(142),v=n(239),m=n(150),f=n(597),_=n(574),h=n(178),x=n(576),C=n(177),w=n(322),k=n(568),y=n(102),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default",attrs:{flat:""}},[n("v-card-text",[n("v-row",[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"1",sm:"1"}},[n("v-btn",{staticClass:"mb-1",attrs:{color:"primary",fab:"",small:""},on:{click:function(e){t.edit=!t.edit}}},[n("v-icon",[t._v("mdi-account-edit")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t.patient.id?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"id"}},[t._v("ID:")]),t._v(" "),n("td",[t._v(t._s(t.patient.id))])]):t._e(),t._v(" "),t.patient.name?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"name"}},[t._v("Full Name:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.name,callback:function(e){t.$set(t.patientcp,"name",e)},expression:"patientcp.name"}}):n("p",[t._v(t._s(t.patient.name))])],1)]):t._e(),t._v(" "),t.patient.gender?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"gender"}},[t._v("Gender:")]),t._v(" "),t.edit?n("td",[n("v-select",{attrs:{items:t.gender,"menu-props":{top:!0,offsetY:!0},label:"Select gender"},model:{value:t.patientcp.gender,callback:function(e){t.$set(t.patientcp,"gender",e)},expression:"patientcp.gender"}})],1):n("td",[t._v(t._s(t.patient.gender))])]):t._e(),t._v(" "),t.patient.age?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"age"}},[t._v("Age:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.age,callback:function(e){t.$set(t.patientcp,"age",e)},expression:"patientcp.age"}}):n("p",[t._v(t._s(t.patient.age))])],1)]):t._e(),t._v(" "),t.patient.phone?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"phone"}},[t._v("Phone No.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.phone,callback:function(e){t.$set(t.patientcp,"phone",e)},expression:"patientcp.phone"}}):n("p",[t._v(t._s(t.patient.phone))])],1)]):t._e(),t._v(" "),t.patient.address?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"address"}},[t._v("Address.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.address,callback:function(e){t.$set(t.patientcp,"address",e)},expression:"patientcp.address"}}):n("p",[t._v(t._s(t.patient.address))])],1)]):t._e(),t._v(" "),t.patient.emailAddress?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"email"}},[t._v("Email Address.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.emailAddress,callback:function(e){t.$set(t.patientcp,"emailAddress",e)},expression:"patientcp.emailAddress"}}):n("p",[t._v(t._s(t.patient.emailAddress))])],1)]):t._e(),t._v(" "),t.patient.guardianName?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"guardian"}},[t._v("\n                  Guardian Name.\n                ")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.guardianName,callback:function(e){t.$set(t.patientcp,"guardianName",e)},expression:"patientcp.guardianName"}}):n("p",[t._v(t._s(t.patient.guardianName))])],1)]):t._e(),t._v(" "),t.patient.createdDate?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"createddate"}},[t._v("\n                  Created Date:\n                ")]),t._v(" "),n("td",[t._v(t._s(t.patient.createdDate))])]):t._e(),t._v(" "),t.patient.bloodPressure?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"bp"}},[t._v("BP:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.bloodPressure,callback:function(e){t.$set(t.patientcp,"bloodPressure",e)},expression:"patientcp.bloodPressure"}}):n("p",[t._v(t._s(t.patient.bloodPressure))])],1)]):t._e(),t._v(" "),t.patient.bloodGroup?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"bloodgroup"}},[t._v("\n                  Blood group:\n                ")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.bloodGroup,callback:function(e){t.$set(t.patientcp,"bloodGroup",e)},expression:"patientcp.bloodGroup"}}):n("p",[t._v(t._s(t.patient.bloodGroup))])],1)]):t._e(),t._v(" "),t.patient.height?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"height"}},[t._v("Height:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.height,callback:function(e){t.$set(t.patientcp,"height",e)},expression:"patientcp.height"}}):n("p",[t._v(t._s(t.patient.height))])],1)]):t._e(),t._v(" "),t.patient.weight?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"weight"}},[t._v("Weight:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.weight,callback:function(e){t.$set(t.patientcp,"weight",e)},expression:"patientcp.weight"}}):n("p",[t._v(t._s(t.patient.weight))])],1)]):t._e(),t._v(" "),t.patient.marriageStatus?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"marriage"}},[t._v("\n                  Maritial Status:\n                ")]),t._v(" "),n("td",[t._v(t._s(t.patient.marriageStatus))])]):t._e(),t._v(" "),n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"isamitted"}},[t._v("IDs Admitted")]),t._v(" "),n("td",[n("v-checkbox",{attrs:{readonly:"",dense:""},model:{value:t.patientcp.isAdmitted,callback:function(e){t.$set(t.patientcp,"isAdmitted",e)},expression:"patientcp.isAdmitted"}})],1)]),t._v(" "),t.edit?n("tr",[n("td"),t._v(" "),n("td",[n("v-btn",{staticClass:"primary",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.submit(e)}}},[t._v("Edit")])],1)]):t._e()])]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:m.c,VCheckbox:f.a,VCol:_.a,VIcon:h.a,VRow:x.a,VSelect:C.a,VSimpleTable:w.a,VSpacer:k.a,VTextField:y.a})},634:function(t,e,n){"use strict";n.r(e);var r={props:["type"]},l=n(36),o=n(47),c=n.n(o),d=n(228),v=n(229),m=n(143),f=n(231),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"ma-0"},[n("v-list-item",{staticClass:"ma-0 pa-0"},[n("v-list-item-avatar",{staticClass:"grey--text ma-0 mr-1 pa-1",attrs:{size:"45px"}},[n("span",{staticClass:"font-weight-regular text-caption text-uppercase black--text"},[t._v(t._s(t.type))])]),t._v(" "),n("v-divider")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VList:v.a,VListItem:m.a,VListItemAvatar:f.a})},635:function(t,e,n){"use strict";n.r(e);var r={props:["address"],data:function(){return{}},created:function(){console.log(this.address)}},l=n(36),o=n(47),c=n.n(o),d=n(142),v=n(143),m=n(25),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"ma-0 "},[n("v-list-item-title",{staticClass:"font-weight-bold"},[n("span",{staticClass:"text-subtitle-2 font-weight-bold"},[t._v(t._s(t.address.state))]),t._v("    \n        "),n("v-btn",{staticClass:"mb-1 primary--text",attrs:{small:"",depressed:"",color:"primary lighten-4"}},[t._v(t._s(t.address.zipcode))])],1),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[t._v("\n        "+t._s(t.address.city)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[t._v("\n        "+t._s(t.address.physical_address)+"\n      ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Contact Details")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[n("strong",[t._v("Mobile Phone: ")]),t._v("   "+t._s(t.address.work_phone)),n("br"),t._v(" "),n("strong",[t._v(" Home Phone:")]),t._v("   "+t._s(t.address.home_phone)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[n("strong",[t._v("Email Address: ")]),t._v("  "+t._s(t.address.email_address)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VListItem:v.a,VListItemContent:m.a,VListItemSubtitle:m.b,VListItemTitle:m.c})},636:function(t,e,n){"use strict";n.r(e);var r={components:{"service-card":n(589).default},props:{services:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"Status",value:"isActive"},{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Staff Name",value:"staffName"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},l=n(36),o=n(47),c=n.n(o),d=n(565),v=n(577),m=n(178),f=n(227),_=n(572),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[null==t.services?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey",size:"24"}}):n("div",[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,"mobile-breakpoint":"100"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"blue lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check-circle")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("v-tooltip",{attrs:{right:"",color:"warning"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-close-circle")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Closed")])])]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VDataTable:v.a,VIcon:m.a,VProgressCircular:f.a,VTooltip:_.a})},671:function(t,e,n){var content=n(748);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("31fc6e97",content,!0,{sourceMap:!1})},684:function(t,e,n){"use strict";n.r(e);var r=n(4),l=(n(79),n(33),n(26),n(45),n(23),n(632)),o=n(634),c=n(636),d=n(635),v={props:{userdata:{type:Object,default:null}},components:{"v-type-divider":o.default,"tb-biograph":l.default,"tb-services":c.default,"v-address-card":d.default},data:function(){return{dialog:!1,uploaddialog:!1,currentFile:void 0,rate:!1,tab:null,valid:!0,rating:2,posts:null,comments:null,admissions:null,followings:null,followers:null,selectedstaffId:null,date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,emptyIcon:"mdi-star-outline",fullIcon:"mdi-star",halfIcon:"mdi-star-half-full",address:null,staff:null,services:null,diagnoses:null,attrs:{class:"mb-6",boilerplate:!0,elevation:2}}},created:function(){this.address=this.userdata.contactsInformation,this.staff=this.userdata.staff,this.$store.dispatch("fetchAllStaffs")},computed:{entityThumbNail:function(){return this.userdata.patientPhoto},staffs:{get:function(){return this.$store.getters.staffs}}},methods:{selectFile:function(t){this.progress=0,this.currentFile=t},uploadPatientImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t.currentFile),e.next=4,t.$api.$patch("/patients/".concat(t.$route.params.id,"/images/"),n).then((function(e){null!==e&&(t.uploaddialog=!1,t.$emit("update-profile"))})).catch((function(t){console.log(t)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},deletePatientProfilePic:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.userdata.patientPhoto.split("/").pop()),e.next=3,t.$api.$delete("/patients/".concat(t.$route.params.id,"/images/").concat(t.userdata.patientPhoto.split("/").pop())).then((function(e){null!==e&&t.$emit("update-profile")})).catch((function(t){console.log(t)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},initiateServiceInstance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("consultations/".concat(t.$route.params.id)).then((function(e){null!==e&&(t.getPatientServices(),t.$emit("update-profile"))})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getPatientServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/patient/".concat(t.$route.params.id)).then((function(e){null!==e&&(t.services=e.sort((function(a,b){return b.isActive-a.isActive})))})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},get_average_rgb:function(img){var t=document.createElement("canvas").getContext("2d");if("string"==typeof img){var e=img;(img=new Image).setAttribute("crossOrigin",""),img.src=e}return t.imageSmoothingEnabled=!0,t.drawImage(img,0,0,1,1),t.getImageData(1,1,1,1).data.slice(0,3)}}},m=(n(747),n(36)),f=n(47),_=n.n(f),h=n(142),x=n(239),C=n(150),w=n(237),k=n(565),y=n(583),V=n(228),I=n(719),P=n(575),$=n(178),S=n(182),A=n(648),N=n(229),T=n(143),D=n(231),L=n(25),j=n(123),F=n(227),O=n(576),E=n(568),R=n(755),B=n(638),M=n(813),G=n(752),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-start":"",wrap:""}},[n("v-flex",{staticClass:"mt-0 ml-0 ",attrs:{xs12:"",md3:"",sm12:""}},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-0 ma-0",attrs:{xs12:"",md12:""}},[n("v-card",{staticClass:"mx-auto default",attrs:{flat:""}},[n("v-img",{staticClass:"grey lighten-2 align-end",attrs:{src:t.entityThumbNail,"lazy-src":"https://boylancode.com/wp-content/uploads/2018/09/Man-Placeholder-Headshot.png","aspect-ratio":"1",height:"200px","max-height":"200px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[t._v(" "),n("v-card-title",[n("v-list",{staticClass:"default",attrs:{"three-line":"",flat:"",width:"100%"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.entityThumbNail}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                          "+t._s(t.userdata.name))]),t._v(" "),t.userdata.contactsInformation?n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.userdata.contactsInformation.city)}}):n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.userdata.country)}})],1),t._v(" "),n("v-list-item-icon",[n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[null!=t.entityThumbNail?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(e){return e.stopPropagation(),t.deletePatientProfilePic()}}},[n("v-icon",[t._v("mdi-trash-can-outline")])],1):n("v-btn",t._g(t._b({attrs:{fab:"",color:"primary",dark:"","x-small":""}},"v-btn",l,!1),r),[n("v-icon",[t._v("mdi-progress-upload")])],1)]}}]),model:{value:t.uploaddialog,callback:function(e){t.uploaddialog=e},expression:"uploaddialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n                                Changing "+t._s(t.userdata.first_name)+" "+t._s(t.userdata.last_name)+"\n                                profile picture\n                              ")]),t._v(" "),n("v-card-text",[n("v-file-input",{attrs:{label:"Profile picture",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera","show-size":""},on:{change:t.selectFile},scopedSlots:t._u([{key:"selection",fn:function(e){var text=e.text;return[n("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                                      "+t._s(text)+"\n                                    ")])]}}])})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary","x-small":""},on:{click:function(e){e.stopPropagation(),t.uploaddialog=!1}}},[t._v("\n                                  Cancel\n                                ")]),t._v(" "),n("v-btn",{attrs:{color:"warning","x-small":"",shaped:""},on:{click:function(e){return t.uploadPatientImage()}}},[t._v("\n                                  Save\n                                ")])],1)],1)],1)],1)])],1)],1)],1)],1),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("v-flex",{staticClass:" d-flex justify-space-around",attrs:{xs12:"",md12:""}},[t.address?n("v-btn",{attrs:{small:"",color:"primary",to:"/patients/"+t.userdata.id+"/contacts/"}},[t._v("View contacts")]):n("v-btn",{attrs:{small:"",color:"primary",to:"/patients/"+t.userdata.id+"/contacts/add"}},[t._v("\n                    Add contacts\n                  ")]),t._v(" "),t.address?n("v-btn",{attrs:{to:"/patients/"+t.userdata.id+"/contacts/edit",small:""}},[t._v("Edit Contacts")]):t._e()],1),t._v(" "),n("v-flex",{staticClass:"ma-0 pa-0",attrs:{xs12:"",md12:""}},[n("v-type-divider",{staticClass:"default",attrs:{type:"Info"}})],1),t._v(" "),null!==t.address?n("v-flex",{staticClass:"ma-0 pa-0",attrs:{xs12:"",md12:""}},[n("v-address-card",{attrs:{address:t.address}})],1):t._e()],1)],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"ma-0 pa-0 default",attrs:{xs12:"",md9:"",sm12:""}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"primary","background-color":"default",left:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"ffont-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-eye")]),t._v("Biography")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:function(e){return e.stopPropagation(),t.getPatientServices()}}},[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("\n          Consultations\n        ")],1)],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticClass:"default"},[n("tb-biograph",{attrs:{patient:t.userdata}})],1),t._v(" "),n("v-tab-item",{staticClass:"default"},[n("div",{},[t.userdata.isActive?t._e():n("v-btn",{staticClass:"primary small ma-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.initiateServiceInstance()}}},[t._v("New consultation")]),t._v(" "),n("tb-services",{attrs:{services:t.services}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:h.a,VCard:x.a,VCardActions:C.a,VCardText:C.c,VCardTitle:C.d,VChip:w.a,VContainer:k.a,VDialog:y.a,VDivider:V.a,VFileInput:I.a,VFlex:P.a,VIcon:$.a,VImg:S.a,VLayout:A.a,VList:N.a,VListItem:T.a,VListItemAvatar:D.a,VListItemContent:L.a,VListItemIcon:j.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VProgressCircular:F.a,VRow:O.a,VSpacer:E.a,VTab:R.a,VTabItem:B.a,VTabs:M.a,VTabsItems:G.a})},747:function(t,e,n){"use strict";n(671)},748:function(t,e,n){var r=n(15)(!1);r.push([t.i,".basil{background-color:#fffbe6!important}.basil--text{color:#356859!important}.v-item-group .v-window__container,.v-window,.v-window-item{width:100%}",""]),t.exports=r}}]);