(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{528:function(t,e,n){"use strict";n(50),n(27),n(114),n(98),n(293),n(13),n(70),n(18),n(28),n(87),n(76),n(71),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(69),n(97);var r=n(0),c=(n(292),n(3)),o=n(39),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],c=w(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},529:function(t,e,n){"use strict";n(20),n(50),n(27),n(114),n(293),n(70),n(18),n(28),n(51),n(87),n(76),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(69),n(97);var r=n(0),c=(n(292),n(3)),o=n(39),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},m=O("align",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},S=O("justify",(function(){return{type:String,default:null,validator:w}})),h=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=O("alignContent",(function(){return{type:String,default:null,validator:h}})),P={align:Object.keys(m),justify:Object.keys(S),alignContent:Object.keys(C)},k={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=k[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},m),{},{justify:{type:String,default:null,validator:w}},S),{},{alignContent:{type:String,default:null,validator:h}},C),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var r=n[t],c=D(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},551:function(t,e,n){"use strict";n.r(e);var r={props:{transaction:{type:Object,default:null}},data:function(){return{headers:[{text:"ID",value:"id"},{text:"Service/Medicine",value:"service",sortable:!0},{text:"Department",value:"departmentName"},{text:"Amount",value:"amount",sortable:!1},{text:"Currency",value:"currencyCode"},{text:"Reversed",value:"isReversed",sortable:!0},{text:"Transaction Date",value:"transactionDate"}]}}},c=n(49),o=n(63),l=n.n(o),f=n(523),d=n(528),v=n(512),y=n(723),O=n(208),j=n(529),m=n(515),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return null==t.transaction?n("v-progress-linear",{attrs:{indeterminate:""}}):n("v-container",{staticClass:"ma-2",attrs:{fluid:""}},[n("v-row",{staticClass:"mb-2",attrs:{justify:"end","no-gutters":""}},[n("v-spacer"),t._v(" "),n("v-col",{staticStyle:{"background-color":"green"},attrs:{md:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{elevation:"1",outlined:"",tile:""}},[n("h3",[t._v("Total amount: "+t._s(t.transaction.totalAmount))])])],1)],1),t._v(" "),n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.transaction.transactions,"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"item.service",fn:function(e){var r=e.item;return[null!=r.medicalServiceName?n("p",[t._v("\n        "+t._s(r.medicalServiceName)+"\n      ")]):n("p",[t._v(t._s(r.medicineName))])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCol:d.a,VContainer:v.a,VDataTable:y.a,VProgressLinear:O.a,VRow:j.a,VSpacer:m.a})}}]);