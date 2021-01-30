(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{680:function(t,e,n){"use strict";n.r(e);n(45);var o={data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,n=t.nativeEvent,o=t.event,r=function(){e.selectedEvent=o,e.selectedElement=n.target,setTimeout((function(){e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(t){for(var e=t.start,n=t.end,o=[],r=new Date("".concat(e.date,"T00:00:00")),c=new Date("".concat(n.date,"T23:59:59")),l=(c.getTime()-r.getTime())/864e5,v=this.rnd(l,l+20),i=0;i<v;i++){var d=0===this.rnd(0,3),h=this.rnd(r.getTime(),c.getTime()),m=new Date(h-h%9e5),f=9e5*this.rnd(2,d?288:8),_=new Date(m.getTime()+f);o.push({name:this.names[this.rnd(0,this.names.length-1)],start:m,end:_,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!d})}this.events=o},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a}}},r=n(60),c=n(73),l=n.n(c),v=n(246),d=n(676),h=n(503),m=n(502),f=n(511),_=n(164),y=n(209),k=n(133),T=n(32),w=n(218),V=n(512),E=n(58),C=n(496),x=n(59),D=n(103),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb  "},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/calendar"}},[t._v("Working calendar")])],1),t._v(" "),n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v("\n            Today\n          ")]),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-left\n            ")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-right\n            ")])],1),t._v(" "),t.$refs.calendar?n("v-toolbar-title",[t._v("\n            "+t._s(t.$refs.calendar.title)+"\n          ")]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),o),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),t._v(" "),n("v-icon",{attrs:{right:""}},[t._v("\n                  mdi-menu-down\n                ")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1)],1)],1)],1)],1),t._v(" "),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),t._v(" "),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),t._v(" "),n("v-card-text",[n("span",{domProps:{innerHTML:t._s(t.selectedEvent.details)}})]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v("\n                Cancel\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCalendar:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCol:f.a,VIcon:_.a,VList:y.a,VListItem:k.a,VListItemTitle:T.c,VMenu:w.a,VRow:V.a,VSheet:E.a,VSpacer:C.a,VToolbar:x.a,VToolbarTitle:D.a})}}]);