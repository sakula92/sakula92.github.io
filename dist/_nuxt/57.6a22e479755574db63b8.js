webpackJsonp([57],{"2s7/":function(t,e,a){"use strict";var r=a("Xxa5"),i=a.n(r),s=a("exGp"),n=a.n(s),o=a("Dd8w"),c=a.n(o),l=a("RWSh"),d=a("NYxO");e.a={props:{position:{type:String,default:"top"}},data:function(){return{ads:[]}},computed:c()({},Object(d.mapState)({agentCity:function(t){return t.session.agentCity}})),mounted:function(){this.getAds()},methods:{getAds:function(){var t=n()(i.a.mark(function t(){var e,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/v3/pay/ads",{city_id:this.agentCity&&this.agentCity.city_id});case 2:e=t.sent,2e5===(a=e.data).code&&(this.ads=a.links||[]);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),toGo:function(t){t.indexOf("http")<0?this.$router.push({path:t}):window.location.href=t}}}},Hp6F:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".bottom[data-v-67553b2c]{position:fixed;bottom:0;left:0}.pay-ads-box[data-v-67553b2c]{width:100%;overflow-x:auto;padding:0}.ad-img[data-v-67553b2c]{margin-top:.9375rem;margin-bottom:1.875rem;width:100%;height:7.03125rem;border-radius:.3125rem;padding-left:.9375rem;padding-right:.9375rem}.ad-img img[data-v-67553b2c]{border-radius:.3125rem;width:100%;max-width:100%;height:100%;max-height:100%}",""])},I91p:function(t,e,a){var r=a("lfEz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("b6145834",r,!1,{sourceMap:!1})},P2a0:function(t,e,a){"use strict";var r=a("2s7/"),i=a("ebtZ"),s=!1;var n=function(t){s||a("pf5l")},o=a("VU/8")(r.a,i.a,!1,n,"data-v-67553b2c",null);o.options.__file="components/Pay/PayAds.vue",e.a=o.exports},aWhg:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white"},[t._m(0),a("div",{staticClass:"amount-title"},[t._v(t._s(t._f("number_format")(t.order.order_fee))+"元")]),a("div",{staticClass:"w100 text-center size32 color37 lh45 plr60"},[t._v("向"+t._s(t.order.detail.shop.title)+"付款成功，请直接出示给商家查看")]),a("div",{staticClass:"pay-btn",on:{click:function(e){return t.toFinish()}}},[t._v("完成")]),a("div",{staticClass:"w100 plr30 ptb20 size30 color37 border-t border-b"},[a("div",{staticClass:"flex-wrp flex-align-center result-info-item w100"},["paymore"===t.type?a("span",{staticClass:"mr30"},[t._v("消费总额：")]):a("span",{staticClass:"mr30"},[t._v("订单金额：")]),a("span",{staticClass:"flex-item text-right"},[t._v("￥"+t._s(t._f("number_format")(t.order.order_fee)))])]),"paymore"===t.type?a("div",{staticClass:"flex-wrp flex-align-center result-info-item w100"},[a("span",{staticClass:"mr30"},[t._v("抵扣金额：")]),a("span",{staticClass:"flex-item text-right"},[t._v("-¥"+t._s(t._f("number_format ? order.paid_fee : '0.00'")(t.order.paid_fee)))])]):t._e(),"paymore"!==t.type?a("div",{staticClass:"flex-wrp flex-align-center result-info-item w100"},[a("span",{staticClass:"mr30"},[t._v("优惠券抵扣金额：")]),a("span",{staticClass:"flex-item text-right"},[t._v("-¥"+t._s(t._f("number_format")(t.order.ticket_amount)))])]):t._e(),a("div",{staticClass:"flex-wrp flex-align-center result-info-item w100"},[a("span",{staticClass:"mr30 color67"},[t._v("实付金额：")]),a("span",{staticClass:"flex-item text-right color67"},[t._v("¥"+t._s(t._f("number_format")(t.order.cash_fee)))])])]),a("div",{staticClass:"w100 plr30 ptb20 size30 color37"},[a("div",{staticClass:"flex-wrp flex-align-center result-info-item2 w100"},[a("span",{staticClass:"mr30"},[t._v("订单编号：")]),a("span",{staticClass:"flex-item text-right"},[t._v(t._s(t.order.id))])]),a("div",{staticClass:"flex-wrp flex-align-center result-info-item2 w100"},[a("span",{staticClass:"mr30"},[t._v("下单时间：")]),a("span",{staticClass:"flex-item text-right"},[t._v(t._s(t.order.time_create))])])]),a("pay-ads",{attrs:{position:"bottom"}})],1)},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w100 text-center"},[e("img",{staticClass:"pay-success-img",attrs:{src:a("n7sS")}})])}];r._withStripped=!0;var s={render:r,staticRenderFns:i};e.a=s},ebtZ:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ads.length>0?a("div",{directives:[{name:"swiper",rawName:"v-swiper:adsSwiper",value:{autoplay:t.ads.length>1&&3e3,speed:2e3,direction:"horizontal",loop:t.ads.length>1},expression:"{\n      autoplay: ads.length > 1 ? 3000 : false, \n      speed: 2000, \n      direction : 'horizontal', \n      loop: ads.length > 1}",arg:"adsSwiper"}],staticClass:"overflow-hidden w100"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.ads,function(e,r){return a("div",{key:r,staticClass:"ad-img swiper-slide overflow-hidden block"},[a("img",{attrs:{src:e.image},on:{click:function(a){return t.toGo(e.url)}}})])}),0)]):t._e()};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},hZIV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("nOB5"),i=a("aWhg"),s=!1;var n=function(t){s||a("I91p")},o=a("VU/8")(r.a,i.a,!1,n,"data-v-12755c6b",null);o.options.__file="pages/paynew/result.vue",e.default=o.exports},lfEz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".pay-success-img[data-v-12755c6b]{width:6.90625rem;height:6.75rem;margin:1.25rem 0 0}.pay-bottom-img[data-v-12755c6b]{position:absolute;bottom:0;background-image:-webkit-gradient(linear,left top,left bottom,from(#ff8b38),color-stop(98%,#ff5a2c));background-image:linear-gradient(-180deg,#ff8b38,#ff5a2c 98%);border-radius:.3125rem;margin:.9375rem;height:5.625rem}.pay-bottom-img img[data-v-12755c6b]{width:100%;height:100%;max-height:100%;max-width:100%}.amount-title[data-v-12755c6b]{font-size:1.5rem;color:#db1013;letter-spacing:0;line-height:2.09375rem;width:100%;text-align:center;margin-top:.625rem}.pay-btn[data-v-12755c6b]{bottom:1.875rem;height:2.6875rem;line-height:2.6875rem;margin:1.5625rem .9375rem;background:#f56d23;border-radius:.3125rem;font-size:1.125rem;color:#fff;letter-spacing:.1875rem;text-align:center}.lh45[data-v-12755c6b]{line-height:1.40625rem}.result-info-item[data-v-12755c6b]{height:1.25rem}.result-info-item2[data-v-12755c6b]{height:1.5rem}",""])},n7sS:function(t,e,a){t.exports=a.p+"img/pay_success.cc5656e.png"},nOB5:function(t,e,a){"use strict";var r=a("Xxa5"),i=a.n(r),s=a("exGp"),n=a.n(s),o=a("RWSh"),c=a("Fd2+"),l=a("P2a0");e.a={head:function(){return{title:"中原吃货地图"}},asyncData:function(){var t=n()(i.a.mark(function t(e){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/user/order/"+e.query.order_id,{},e);case 2:if(a=t.sent,r=a.data,200!==a.status||"SUCCESS"!==r.code){t.next=10;break}return t.abrupt("return",{order:r.order,type:e.query.type});case 10:return Object(c.r)("未查询到订单信息！"),t.abrupt("return",{order:{}});case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),components:{PayAds:l.a},data:function(){return{}},methods:{toFinish:function(){this.$router.replace({path:"/"})}}}},pf5l:function(t,e,a){var r=a("Hp6F");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("0445b528",r,!1,{sourceMap:!1})}});