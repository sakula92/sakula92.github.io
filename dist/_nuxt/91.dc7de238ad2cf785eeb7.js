webpackJsonp([91],{HYXj:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"imgContainer "}),this._l(this.items,function(t,n){return e("nuxt-link",{key:n,staticClass:"imgPosition",style:{top:t.indexPosition+"vw"},attrs:{to:t.pathAdress}})})],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},V6ox:function(t,e,n){var i=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,".imgContainer{width:100%;height:535vw;background:url("+i(n("rd5X"))+") no-repeat;background-size:100% 100%}.imgPosition{height:33vw;width:68vw;position:absolute;left:17vw}",""])},"la/o":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("zNJN"),s=n("HYXj"),r=!1;var o=function(t){r||n("qZTn")},a=n("VU/8")(i.a,s.a,!1,o,null,null);a.options.__file="pages/buying/activityOne.vue",e.default=a.exports},qZTn:function(t,e,n){var i=n("V6ox");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("64bf3b92",i,!1,{sourceMap:!1})},rd5X:function(t,e,n){t.exports=n.p+"img/activityOne.882e2de.jpg"},zNJN:function(t,e,n){"use strict";var i=n("Xxa5"),s=n.n(i),r=n("exGp"),o=n.n(r),a=n("Dd8w"),u=n.n(a),c=n("RWSh"),p=n("DHvs"),d=n("NYxO");e.a={data:function(){return{r:null,items:[{indexPosition:87,pathAdress:"/buying_3132"},{indexPosition:124,pathAdress:"/buying_3135"},{indexPosition:160,pathAdress:"/buying_3134"},{indexPosition:197,pathAdress:"/buying_3136"},{indexPosition:233,pathAdress:"/buying_3154"},{indexPosition:270,pathAdress:"/buying_3155"},{indexPosition:306,pathAdress:"/buying_3052"},{indexPosition:342,pathAdress:"/buying_3053"},{indexPosition:378,pathAdress:"/buying_3071"},{indexPosition:414,pathAdress:"/buying_3055"}]}},computed:u()({},Object(d.mapState)({config:function(t){return t.config},user:function(t){return t.user.info}})),head:function(){return{title:""}},mounted:function(){if(Object(p.i)()){var t={title:"年味十足·春节团员套餐",desc:"中原银行“臻选年夜饭”为您安排，最好的品质，最优的价格，让您尽享美味乐团圆！",link:location.origin+location.pathname,imgUrl:"https://zfm.zybank.com.cn/pic/2018/11/23/pic.png",success:function(){}};if(p.o.setShare(t),!this.user.id&&-1===location.href.indexOf("OpenId")){var e="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f4ab8a6e6185c70&redirect_uri=https%3A%2F%2Fwbs.zyebank.com%2Fpweixin%2Fweixin%2Fhtmls%2FAppSharePages%2FGotoUrl%2Findex.html%3Fgotourl%3Dhttps%3A%2F%2Fzfm.zybank.com.cn&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",n=e.slice(0,229),i=e.slice(229);location.href=n+encodeURIComponent(location.pathname)+i}this.getWeixinUser()}},methods:{getWeixinUser:function(){var t=location.href,e=t.indexOf("?"),n=t.substr(e+1);this.userInfoQry(n)},userInfoQry:function(){var t=o()(s.a.mark(function t(e){var n,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/weixin/tools/wxLogin",{urlParam:e});case 2:n=t.sent,i=n.data,200===n.status&&"SUCCESS"===i.code&&(console.log(i),this.$store.dispatch("user/getUser"));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),shareSuccess:function(){var t=o()(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/user/share");case 2:e=t.sent,n=e.data,200===e.status&&"SUCCESS"===n.code&&this.getData(),console.log(n,"sharedata");case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),buyingLink:function(){var t=o()(s.a.mark(function t(e){var n,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"22"),t.next=3,c.a.get("/v2/buying/"+e.id);case 3:n=t.sent,i=n.data,n.status,"SUCCESS"==i.code?this.$router.push({path:"/buying_"+e.id}):"OK"!=i.msg&&weui.alert(i.msg);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}}});