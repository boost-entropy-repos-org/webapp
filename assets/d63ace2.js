(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{566:function(t,e,n){var content=n(632);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("119758f3",content,!0,{sourceMap:!1})},631:function(t,e,n){"use strict";n(566)},632:function(t,e,n){(e=n(14)(!1)).push([t.i,"h2[data-v-78610f70]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),t.exports=e},696:function(t,e,n){"use strict";n.r(e);var o={components:{"users-component":n(666).default},data:function(){return{mode:0,switch1:!0,select:{locale:"English",lang:"en"},locales:[{locale:"English",lang:"en"},{locale:"Kiswahili",lang:"sw"},{locale:"French",lang:"fr"},{locale:"Arab",lang:"ar"}]}},methods:{toggle:function(t){"true"==="".concat(t)?(this.$vuetify.theme.dark=!0,this.$store.dispatch("change_to_dark"),document.body.style.background="#354141"):(this.$store.dispatch("change_to_light"),this.$vuetify.theme.dark=!1,document.body.style.backgroundImage="url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)")},changeLanguage:function(t){this.$i18n.locale=t}},created:function(){},computed:{isDark:function(){return this.$store.getters.isDark}}},c=(n(631),n(60)),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("users-component")}),[],!1,null,"78610f70",null);e.default=component.exports}}]);