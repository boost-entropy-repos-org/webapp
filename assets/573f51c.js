(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{522:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(523),o=r(2),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},523:function(t,e,r){"use strict";r(169),r(170),r(13);var n=r(0),o=(r(524),r(116)),c=r(218),l=r(58),d=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},524:function(t,e,r){var content=r(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("e23b7040",content,!0,{sourceMap:!1})},525:function(t,e,r){var n=r(10)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},528:function(t,e,r){"use strict";r(50),r(27),r(114),r(98),r(293),r(13),r(70),r(18),r(28),r(87),r(76),r(71),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(69),r(97);var n=r(0),o=(r(292),r(3)),c=r(39),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(_)};function O(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=y.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=O(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),y.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},611:function(t,e,r){var content=r(707);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("5342ec9a",content,!0,{sourceMap:!1})},706:function(t,e,r){"use strict";r(611)},707:function(t,e,r){var n=r(10)(!1);n.push([t.i,".outlined[data-v-2c521f6f]{color:#00f!important;border-color:#00f!important}",""]),t.exports=n},765:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,default:null}},data:function(){return{pie_options:{series:[44,55,13,33],chartOptions:{labels:["Apple","Mango","Orange","Watermelon"]}}}}},o=(r(706),r(49)),c=r(63),l=r.n(c),d=r(131),v=r(523),f=r(522),h=r(528),m=r(201),_=r(161),x=r(132),O=r(25),y=r(111),w=r(515),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"4",sm:"3",md:"2",xl:"1"}},[r("v-card",{staticClass:"mx-auto default ",attrs:{elevation:"1"}},[r("v-card-title",{staticClass:"font-weight-bold caption py-2   ma-0 pr-1 "},[t._v(t._s(t.data.title)),r("v-spacer"),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.data.measure,expression:"data.measure"}],staticClass:" pa-1 white--text text-lowercase font-weight-normal",attrs:{"x-small":"",color:"teal lighten-2",rounded:"",depressed:""}},[t._v(t._s(t.data.measure))])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",[r("v-list-item-content",{staticClass:"mt-1"},[r("v-list-item-subtitle",{staticClass:"font-weight-light light-blue--text text-subtitle-2"},[t._v(t._s(t.data.value)+"\n        ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"font-weight-light caption  ma-0 pa-0"},[t._v("\n          "+t._s(t.data.subtitle)+"\n        ")])],1),t._v(" "),r("v-list-item-icon",[r("v-icon",{attrs:{dark:"",color:"primary",small:""},domProps:{textContent:t._s(t.data.icon)}})],1)],1)],1)],1)}),[],!1,null,"2c521f6f",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardTitle:f.d,VCol:h.a,VDivider:m.a,VIcon:_.a,VListItem:x.a,VListItemContent:O.a,VListItemIcon:y.a,VListItemSubtitle:O.b,VSpacer:w.a})}}]);