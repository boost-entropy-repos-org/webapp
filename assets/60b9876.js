(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{656:function(t,e,n){var content=n(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("e28963cc",content,!0,{sourceMap:!1})},712:function(t,e,n){"use strict";n(656)},713:function(t,e,n){var l=n(9)(!1);l.push([t.i,'#app{font-family:"Lato",sans-serif}.routeLink{text-decoration:none}',""]),t.exports=l},774:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{clipped:!1,drawer:!0,fixed:!1,picture:!0,dark:!1,sync:!1,pagetitle:"Administrator Dashboard",admins:[["label.titles.usersmanagement","mdi-account-multiples-outline","/settings/users"],["label.titles.settings","mdi-cog-outline","/settings/admin"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]],settings:[{title:"label.titles.roleandpermissions",icon:"mdi-shield-lock-outline",menus:[{title:"label.titles.administrations",submenus:[{title:"label.titles.usersmanagement",to:"/settings",icon:"mdi-account-settings"},{title:"label.menu.rolesandprivileges",icon:"mdi-cog-outline",to:"/settings/roles"}]}]},{title:"label.titles.system",icon:"mdi-cog",menus:[{title:"label.titles.configurations",submenus:[{title:"label.titles.smsconfigurations",to:"/settings/sms",icon:"mdi-message-cog-outline"},{title:"label.titles.emailconfigurations",to:"/settings/config/email",icon:"mdi-mailbox-outline"}]}]}]}},head:function(){return{title:"Home Page"}},beforeMount:function(){},methods:{toggledrawer:function(){this.drawer=!this.drawer}}},o=(n(712),n(27)),r=n(38),c=n.n(r),m=n(570),d=n(561),v=n(221),f=n(172),_=n(222),h=n(223),k=n(136),y=n(17),w=n(571),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/settings"}},[t._v("Setting & Configurations")])],1),t._v(" "),n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"3"}},[n("v-list",{attrs:{nav:"",dense:"",subheader:"",tile:""}},[t._l(t.settings,(function(e,l){return[n("v-list-group",{key:l,attrs:{value:!0,"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(t._s(t.$t(e.title)))])]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.menus,(function(menu,e){return[n("v-list-group",{key:menu.title,attrs:{value:!0,"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t(menu.title)))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(menu.submenus,(function(sub,i){return[n("v-list-item",{key:sub.to,attrs:{to:sub.to}},[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{small:""},domProps:{innerHTML:t._s(sub.icon)}}),t._v("\n                          "+t._s(t.$t(sub.title))+"\n                        ")],1)],1)],1),t._v(" "),n("v-divider",{key:i,staticClass:"ml-12"})]}))],2)]}))],2)]}))],2)],1),t._v(" "),n("v-col",{staticClass:"ma-0 pa-2",attrs:{cols:"12",sm:"12",md:"9"}},[n("nuxt-child",{key:this.$router.currentRoute.name,staticClass:"ma-0 pa-0"})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:m.a,VContainer:d.a,VDivider:v.a,VIcon:f.a,VList:_.a,VListGroup:h.a,VListItem:k.a,VListItemContent:y.a,VListItemTitle:y.c,VRow:w.a})}}]);