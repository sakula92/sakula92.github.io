webpackJsonp([67],{FJiM:function(t,e){t.exports="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},KFJO:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.isShowQRCode?a("div",{staticClass:"weui-mask weui-animate-fade-in",on:{click:function(e){e.preventDefault(),t.isShowQRCode=!1}}}):t._e(),t.isShowQRCode?a("div",{staticClass:"weui-animate-fade-in bg-white pd30 border border-radius30 fixed-center qrcode2",on:{click:function(e){e.preventDefault(),t.isShowQRCode=!1}}},[a("img",{staticClass:"bg-cover w100",style:{backgroundImage:"url("+t.qrcode+")"},attrs:{src:r("FJiM")},on:{click:function(e){e.preventDefault(),t.isShowQRCode=!1}}}),a("div",{staticClass:"color5 size28 pt20 text-center"},[t._v("请将二维码出示给商家")])]):t._e(),t._m(0),a("div",{staticClass:"bg-white flex-wrp flex-center no-padding"},[a("div",{staticClass:"successInfo"},[a("div",{staticClass:"size24"},[a("span",{staticClass:"size44 colorred"},[t._v(t._s(t._f("number_format")(t.order.cash_fee)))]),t._v("元")]),a("div",{staticClass:"size24 color4 pd15"},[t._v("支付成功")])])]),a("div",{staticClass:"successInfo2 size28"},[a("p",{staticClass:"p1"},[a("span",{staticClass:"spfl"},[t._v("商家名称")]),a("span",{staticClass:"spfr"},[t._v(t._s(t.order.detail&&t.order.detail.shop?t.order.detail.shop.title:""))])]),a("p",{staticClass:"p2"},[a("span",{staticClass:"spfl"},[t._v("订单号")]),a("span",{staticClass:"spfr"},[t._v(t._s(t.order.id))])])]),t._m(1),a("div",{staticClass:"padt"},[a("nuxt-link",{staticClass:"block text-center ptb20 size36 border-radius5 btn mt30 width30 floatL",attrs:{to:{path:"/"}}},[t._v("返回首页")]),a("nuxt-link",{staticClass:"block text-center ptb20 size36  border-radius5 btn mt30 width30 floatR",attrs:{to:{path:"/user_order_detail",query:{id:t.order.id}}}},[t._v("查看订单")])],1),t.order&&t.order.codeList&&t.order.codeList.length>0&&t.order.codeList[0].code?a("div",{staticClass:"qrcodeList"},[a("p",{staticClass:"headTitle"},[t._v("核销码")]),t._l(t.order.codeList,function(e,i){return a("div",{key:i,staticClass:"qrcode"},[a("div",{staticClass:"dateTerm"},[t._v("有效期至"+t._s(e.expiry))]),a("div",{staticClass:"qrbtn",on:{click:function(r){return t.qrcodeLoginModel(e.qrcode)}}},[a("img",{attrs:{src:r("honR")}})]),a("div",{staticClass:"qrNumber"},[t._v("核销码: "),a("span",[t._v(t._s(e.code))])])])}),t.order&&t.order.codeList&&t.order.codeList.length>0&&t.order.codeList[0].code?a("div",{staticClass:"qrcodeInfo"},[t._v("可在吃货地图“我的—全部订单”中查询")]):t._e()],2):t._e(),t.activities.length>0?a("div",t._l(t.activities,function(e,i){return a("div",{key:i,staticClass:"mt20"},["image"==e.type?a("a",{staticClass:"block",attrs:{href:e.link}},[a("img",{staticClass:"w100",attrs:{src:e.image}})]):"lottery"==e.type?a("nuxt-link",{staticClass:"block mt20",attrs:{to:{path:"/lottery",query:{id:e.activity.id,order_id:t.order.id}}}},[a("img",{staticClass:"w100",attrs:{src:r("ewS+")}})]):t._e()],1)}),0):t._e(),t.order&&t.order.codeList&&0!==t.order.codeList.length&&t.order.codeList[0].code?t._e():a("div",{staticClass:"bottomAdvBack"}),t.order.advertisement&&t.order.advertisement.length>0?a("div",{staticClass:"bottomAdv"},[a("img",{attrs:{src:t.order.advertisement[0].image},on:{click:function(e){return t.goActivityPage()}}})]):t._e()])},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white ptb35 flex-wrp flex-center"},[e("img",{staticClass:"img-120",attrs:{src:r("ii0N")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white relative border-t plr30 size24 ext hide"},[e("div",{staticClass:"flex-wrp flex-align-center flex-between ptb20"},[e("div",{staticClass:"flex-wrp"},[e("div",{staticClass:"color4"},[this._v("特权会员：")]),e("div",{staticClass:"color2"},[this._v("首开会员免费送大礼")])]),e("i",{staticClass:"i i-arrow-right-o"})]),e("div",{staticClass:"flex-wrp flex-align-center flex-between ptb20"},[e("div",{staticClass:"flex-wrp"},[e("div",{staticClass:"color4"},[this._v("超级福利：")]),e("div",{staticClass:"color2"},[this._v("首开会员免费送大礼")])]),e("i",{staticClass:"i i-arrow-right-o"})]),e("div",{staticClass:"flex-wrp flex-align-center flex-between ptb20"},[e("div",{staticClass:"flex-wrp"},[e("div",{staticClass:"color4"},[this._v("积分奖励：")]),e("div",{staticClass:"color2"},[this._v("首开会员免费送大礼")])]),e("i",{staticClass:"i i-arrow-right-o"})])])}];a._withStripped=!0;var s={render:a,staticRenderFns:i};e.a=s},bek6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("bhRc"),i=r("KFJO"),s=!1;var o=function(t){s||r("iHbH")},d=r("VU/8")(a.a,i.a,!1,o,"data-v-0248d7b3",null);d.options.__file="pages/pay/success.vue",e.default=d.exports},bhRc:function(t,e,r){"use strict";var a=r("Xxa5"),i=r.n(a),s=r("exGp"),o=r.n(s),d=r("RWSh");r("DHvs");e.a={head:{title:"支付成功"},data:function(){return{activities:[],weixinLoginModel:!1,qrcode:"",isShowQRCode:!1}},asyncData:function(){var t=o()(i.a.mark(function t(e){var r,a,s,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/user/order/"+e.query.id,null,e);case 2:if(r=t.sent,a=r.data,200!==(s=r.status)||"SUCCESS"!==a.code){t.next=11;break}return o=[],a.order&&a.order.attach?(a.order.attach.buying&&a.order.attach.buying.length>0&&(o=a.order.attach.buying),a.order.attach.tickets&&a.order.attach.tickets.length>0&&(o=a.order.attach.tickets),a.order.attach.coupon&&a.order.attach.coupon.length>0&&(o=a.order.attach.coupon),a.order.attach.rim&&a.order.attach.rim.length>0&&(o=a.order.attach.rim),a.order.codeList=o):a.order.codeList=o,t.abrupt("return",{order:a.order});case 11:return t.abrupt("return",e.error({statusCode:s,message:a.msg}));case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){document.getElementsByTagName("body")[0].style.margin="0",this.fetchActivity(),window.addEventListener("popstate",function(){history.pushState(null,null,document.URL),this.$router.push({path:"/"}),location.href="/"})},methods:{qrcodeLoginModel:function(t){this.weixinLoginModel=!this.weixinLoginModel,this.isShowQRCode=!this.isShowQRCode,t&&(this.qrcode=t)},goActivityPage:function(){var t=this.order.advertisement[0].url;t.indexOf("http")>-1?location.href=t:this.$router.push({path:t,query:{}})},checkPay:function(){var t=o()(i.a.mark(function t(e){var r,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("===============================checkPay",this.$route.query.id),t.next=3,d.a.get("/user/order/20181211113557905",{});case 3:r=t.sent,a=r.data,200===r.status&&"SUCCESS"===a.code&&console.log("sucess");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchActivity:function(){var t=o()(i.a.mark(function t(){var e,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/user/order/"+this.order.id+"/activity");case 2:e=t.sent,r=e.data,200===e.status&&"SUCCESS"===r.code&&(this.activities=r.activities||[]);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},"ewS+":function(t,e,r){t.exports=r.p+"img/lottery.840c719.png"},honR:function(t,e,r){t.exports=r.p+"img/hexiaoma.d53412c.png"},iHbH:function(t,e,r){var a=r("ieXC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("ca458eec",a,!1,{sourceMap:!1})},ieXC:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,'.container[data-v-0248d7b3]{position:relative;min-height:100vh}a[data-v-0248d7b3]{text-decoration:none}.ext[data-v-0248d7b3]{border-top-style:dashed}.ext[data-v-0248d7b3]:after,.ext[data-v-0248d7b3]:before{position:absolute;display:block;content:"";width:.9375rem;height:.9375rem;background:#f2f2f2;border-radius:50%;top:-.46875rem}.ext[data-v-0248d7b3]:before{left:-.46875rem}.ext[data-v-0248d7b3]:after{right:-.46875rem}.ext>div[data-v-0248d7b3]{border-top:.03125rem solid #eee}.ext>div[data-v-0248d7b3]:first-child{border-top:none}.btn[data-v-0248d7b3]{border:.03125rem solid #1abc9c}.no-padding[data-v-0248d7b3]{padding-top:0!important;padding-bottom:.3125rem}.size-12[data-v-0248d7b3]{font-size:.8rem}.size-20[data-v-0248d7b3]{font-size:.2rem}.colorred[data-v-0248d7b3]{color:#ff6c00}.successInfo[data-v-0248d7b3]{text-align:center}.width30[data-v-0248d7b3]{width:46%}.floatL[data-v-0248d7b3]{float:left;color:#1abc9c;border-color:#1abc9c}.floatR[data-v-0248d7b3]{float:right;background-color:#1abc9c;color:#fff;border-color:#1abc9c}.padt[data-v-0248d7b3]{padding:1rem;overflow:hidden}.bottomAdvBack[data-v-0248d7b3]{width:100%;height:1rem}.bottomAdv[data-v-0248d7b3]{width:100%;height:7rem}.bottomAdv>img[data-v-0248d7b3]{width:100%;height:100%}.successInfo2[data-v-0248d7b3]{width:100%;background-color:#fff;padding:0 4% 1rem}.successInfo2>p[data-v-0248d7b3]{background-color:#e8f8f5;margin:0;overflow:hidden;color:#333}.p1[data-v-0248d7b3]{padding:.6rem .8rem .3rem}.p2[data-v-0248d7b3]{padding:.3rem .8rem .6rem}.spfl[data-v-0248d7b3]{float:left}.spfr[data-v-0248d7b3]{float:right;max-width:75%;text-align:right}.qrcodeList[data-v-0248d7b3]{width:100%;padding:0 4%}.headTitle[data-v-0248d7b3]{margin:0 0 .5rem}.qrcode[data-v-0248d7b3]{width:100%;background-color:#fff;padding:.8rem;margin-top:.8rem;border-radius:.5rem}.dateTerm[data-v-0248d7b3]{font-size:.8rem;width:85%}.qrNumber[data-v-0248d7b3]{width:100%;margin-top:1.5rem;text-align:center;font-size:.9rem}.qrNumber>span[data-v-0248d7b3]{font-size:1rem}.qrbtn[data-v-0248d7b3]{float:right;width:1.2rem;height:1.2rem;position:relative;top:-1rem}.qrbtn>img[data-v-0248d7b3]{width:100%;height:100%}.model[data-v-0248d7b3]{width:15rem;height:15rem;margin:0 auto;position:relative;margin-top:9.375rem;padding:.5rem;background-color:#fff}.qrCodeImg[data-v-0248d7b3]{width:100%;height:100%}.model_span[data-v-0248d7b3]{position:absolute;top:-.625rem;right:-.46875rem;width:1.25rem;height:1.25rem;line-height:1.25rem;background-color:#fff;border-radius:50%;text-align:center}.qrcodeInfo[data-v-0248d7b3]{text-align:center;font-size:.85rem;color:#ff532b;margin-top:1rem;padding-bottom:.65rem}.qrcode2[data-v-0248d7b3]{width:70%;z-index:1001}',""])},ii0N:function(t,e,r){t.exports=r.p+"img/chengg.9dbcd78.png"}});