webpackJsonp([65],{"+uiu":function(t,e,i){var n=i("KzDv");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("2f142a5c",n,!1,{sourceMap:!1})},"/voC":function(t,e,i){t.exports=i.p+"img/btbgTip.53df5b7.png"},"0NhW":function(t,e,i){"use strict";i.d(e,"a",function(){return h});var n=i("Xxa5"),s=i.n(n),a=i("mvHQ"),o=i.n(a),r=i("exGp"),c=i.n(r),l=i("DHvs"),p=function(){var t=c()(s.a.mark(function t(e,i,n,a){var r,c,p,h;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("http--/weixin/tools/get_ticket"),t.next=3,l.b.get("/weixin/tools/get_ticket",{url:a||location.href});case 3:r=t.sent,c=r.data,p=r.status,console.log(p),200===p&&"SUCCESS"===c.code&&(h={appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature,jsApiList:e},n&&(n.link=c.url),console.log(o()(h)+"=====weixingetconfig.js"),l.o.setConfig(h),l.o.ready().then(function(){"1"===i?(l.o.hideAllNonBaseMenuItem(),l.o.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:QZone"]}),l.o.setShareNew(n)):l.o.hideAllNonBaseMenuItem()}));case 8:case"end":return t.stop()}},t,this)}));return function(e,i,n,s){return t.apply(this,arguments)}}(),h=function(t,e,i,n){console.log(t),console.log("wxSetConfig"),console.log(l.o),p(t,e,i,n)}},K1Y3:function(t,e,i){"use strict";var n=i("Xxa5"),s=i.n(n),a=i("exGp"),o=i.n(a),r=i("Dd8w"),c=i.n(r),l=i("NYxO"),p=i("RWSh"),h=i("DHvs");i("0NhW");e.a={data:function(){return{dataArray:[],showTipContent:"",dataShare:""}},computed:c()({},Object(l.mapState)({config:function(t){return t.config},user:function(t){return t.user.info}})),head:function(){return{title:"吃货地图，跨年爆品秒杀"}},mounted:function(){var t=this;if(Object(h.i)()){var e={title:"吃货地图，跨年爆品秒杀",link:location.origin+location.pathname,imgUrl:"https://zfm.zybank.com.cn/pic/2018/11/23/pic2.png",success:function(){t.shareSuccess()}};if(h.o.setShare(e),!t.user.id&&-1===location.href.indexOf("OpenId")){var i="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f4ab8a6e6185c70&redirect_uri=https%3A%2F%2Fwbs.zyebank.com%2Fpweixin%2Fweixin%2Fhtmls%2FAppSharePages%2FGotoUrl%2Findex.html%3Fgotourl%3Dhttps%3A%2F%2Fzfm.zybank.com.cn&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",n=i.slice(0,229),s=i.slice(229);location.href=n+encodeURIComponent(location.pathname)+s}t.getWeixinUser()}this.getData()},methods:{getWeixinUser:function(){var t=location.href,e=t.indexOf("?"),i=t.substr(e+1);this.userInfoQry(i)},userInfoQry:function(){var t=o()(s.a.mark(function t(e){var i,n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("/weixin/tools/wxLogin ===== http"),console.log(e+"=====param"),t.next=4,p.a.get("/weixin/tools/wxLogin",{urlParam:e});case 4:i=t.sent,n=i.data,a=i.status,console.log(a),200===a&&"SUCCESS"===n.code&&(console.log(n),this.$store.dispatch("user/getUser"));case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getData:function(){var t=o()(s.a.mark(function t(){var e,i,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.dataArray=[],t.next=3,p.a.get("/shop/spreader");case 3:if(e=t.sent,i=e.data,200===e.status&&"SUCCESS"===i.code){for(n in this.dataShare=i,"1"==i.is_score?this.showTipContent="wxshare":this.showTipContent="wxNoshare",i.data)this.dataArray.push(i.data[n]);console.log(this.dataArray,"getData")}case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),shareSuccess:function(){var t=o()(s.a.mark(function t(){var e,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/share");case 2:e=t.sent,i=e.data,200===e.status&&"SUCCESS"===i.code&&this.getData(),console.log(i,"sharedata");case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),buyingLink:function(){var t=o()(s.a.mark(function t(e){var i,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"22"),t.next=3,p.a.get("/v2/buying/"+e.id);case 3:i=t.sent,n=i.data,i.status,"SUCCESS"==n.code?this.$router.push({path:"/buying_"+e.id}):"OK"!=n.msg&&weui.alert(n.msg);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}},KzDv:function(t,e,i){var n=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,".mainContainer{width:100%;height:100%}.mainContent{width:100%;position:relative}.tipText{position:absolute;width:100%;padding:0 .625rem}.bgTitleImg{border-radius:.03125rem solid}.tipTitle{height:22rem;background:url("+n(i("SPTM"))+") no-repeat;background-size:100% 100%}.shopList,.tipTitle{width:100%;position:relative}.shopList{background-color:#fc636d;top:-.03rem}.shopContent{display:-webkit-box;display:-ms-flexbox;display:flex;margin:.5rem 0;padding:1rem;height:7.8125rem}.shopPic{margin-right:.3125rem;-webkit-box-flex:1;-ms-flex:1;flex:1;height:25vw}.shopPicImg{width:2.5rem;height:100%}.rightContent{height:25vw}.shopDetial{-webkit-box-flex:3;-ms-flex:3;flex:3;position:relative}.titleText{float:left;width:100%;min-height:1.5rem;font-weight:600}.contentText{width:100%;min-height:2.5rem}.contentText,.shopFee{position:absolute;bottom:0}.shopFee{height:100%;color:#f85236;overflow:hidden;width:56%}.shopFee>span{color:#999;float:left;width:100%}.oldFee{color:#999;position:absolute;top:.3125rem}.onlyToday{position:absolute;bottom:-.46875rem;color:#f85236;left:.15625rem;font-weight:600}.payImg{height:100%;float:right;height:10vw;background:url("+n(i("vB8e"))+");background-repeat:no-repeat;background-size:100% 100%;line-height:10vw;width:24vw;text-align:center;font-weight:700;color:#fff}.payImg img{height:10vw;float:left}.payImg>span{position:absolute}.nowFee{font-weight:600;float:left;position:relative;top:.15rem}.baoPic{position:absolute;width:2.1875rem;height:2.1875rem;top:8vw;left:6vw}.baoPic img{width:100%;height:100%}.bgpic{background:url("+n(i("/voC"))+") no-repeat;background-size:100% 100%;width:100%;height:6rem;bottom:2rem;position:absolute}.tipContent{position:absolute;bottom:0;width:80%;text-align:center;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-weight:600}",""])},OOpJ:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainContainer"},[i("div",{staticClass:"mainContent"},[i("div",{staticClass:"tipTitle"},[i("div",{staticClass:"tipContent"},[i("div",{staticClass:"bgpic"}),"wxNoshare"==t.showTipContent?i("div",{staticClass:"tipText",staticStyle:{bottom:"2.5rem"}},[i("p",[t._v("分享获得2积分,购买获得10积分,积分达70分,可参与大礼包抽奖活动 (分享或购买后可查询积分)")])]):t._e(),"wxshare"==t.showTipContent?i("div",{staticClass:"tipText",staticStyle:{bottom:"3.3rem"}},[i("p",[t._v("分享获得"+t._s(t.dataShare.score_share)+"积分,购买产品获得"+t._s(t.dataShare.score_buy)+"积分,共计获得"+t._s(t.dataShare.score)+"积分")])]):t._e()])]),t.dataArray?i("div",{staticClass:"shopList pd30"},[t._m(0),t._l(t.dataArray,function(e,n){return i("div",{staticClass:"bg-white shopContent"},[i("div",{staticClass:"shopPic"},[i("base-img",{staticStyle:{width:"80px",height:"100%"},attrs:{src:e.thumbnail}})],1),i("div",{staticClass:"rightContent",staticStyle:{flex:"3",position:"relative"}},[i("div",{staticClass:"titleText size28"},[t._v(t._s(e.name))]),i("div",{staticClass:"contentText"},[i("div",{staticClass:"shopFee"},[i("span",{staticClass:"del size24 "},[t._v("原价："+t._s(e.price)+"元")]),i("div",{staticClass:"nowFee"},[i("span",{staticClass:"size22"},"0"==n?[t._v("惊爆价：")]:[t._v("优惠价：")]),i("span",{staticClass:"size32",staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.qg_price))]),i("span",{staticClass:"size22"},[t._v("元")])])]),i("span",{staticClass:"payImg size30",on:{click:function(i){return t.buyingLink(e)}}},[t._v("马上抢 >")])])])])})],2):t._e()])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"baoPic"},[e("img",{attrs:{src:i("kmka")}})])}];n._withStripped=!0;var a={render:n,staticRenderFns:s};e.a=a},SPTM:function(t,e,i){t.exports=i.p+"img/momBgImg.8d5bdba.png"},"Yp/K":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("K1Y3"),s=i("OOpJ"),a=!1;var o=function(t){a||i("+uiu")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="pages/buying/momHelpActive.vue",e.default=r.exports},kmka:function(t,e,i){t.exports=i.p+"img/baoPic.fcb4491.png"},vB8e:function(t,e,i){t.exports=i.p+"img/payBtn.07e5d58.png"}});