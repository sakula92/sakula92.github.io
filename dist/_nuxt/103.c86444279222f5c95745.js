webpackJsonp([103],{F60W:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".weui-form-preview__hd{height:auto!important;line-height:normal!important}.model{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:20;background-color:#fff}.thumb{width:5rem;height:5rem}",""])},"YnI/":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.gifts,function(t){return i("div",{key:t.id,staticClass:"border-t pt20",on:{click:function(i){return e.showDetail(t)}}},[i("div",{staticClass:"pd20 flex-wrp flex-align-stretch lh100 bg-white"},[i("div",{staticClass:"relative",class:{"vip-badge":t.vip_info}},[i("base-img",{staticClass:"border-radius5 thumb",attrs:{src:t.thumb}})],1),i("div",{staticClass:"flex-item flex-wrp flex-cell flex-between pl20"},[i("div",{staticClass:"color2 size32 compulsory-row-one lh150 bold"},[e._v(e._s(t.title))]),i("div",{staticClass:"flex-wrp flex-end"},[i("div",[i("i",{staticClass:"i i-jf size26",class:t.fee>0?"color7":"color37"}),e._v(" ")]),i("div",{staticClass:"pr10",class:t.fee>0?"color7":"color37"},[e._v(e._s(t.fee)+" 积分")])]),i("div",{staticClass:"flex-wrp size24"},[e._m(0,!0),i("div",{staticClass:"flex-cell color37"},[i("div",{staticClass:"pb10"},[e._v("："+e._s(t.code))]),i("div",[e._v("："+e._s(t.exchange_shop))])])])])])])}),i("load-more",{ref:"loadMore",attrs:{handler:e.fetchMore}}),e.showGift?i("div",{staticClass:"fixed-bottom fullHeight bg-white flex-wrp flex-cell",class:{"weui-animate-slide-up":e.showGift}},[i("div",{staticClass:"weui-form-preview"},[i("div",{staticClass:"weui-form-preview__hd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v(e._s(e.gift.title))]),i("em",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.fee)+"积分")])])]),i("div",{staticClass:"weui-form-preview__bd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("兑换商家")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.exchange_shop))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("兑换时间")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.time_create))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("商家地址")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.shop_address))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("商家电话")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.shop_contact))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("核销券码")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.code))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("核销有效期至")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.expired_at))])]),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("核销状态")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s("0"===e.gift.status?"待使用":"已使用"))])]),e.gift.used_at?i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[e._v("使用时间")]),i("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(e.gift.used_at))])]):e._e()]),i("div",{staticClass:"weui-form-preview__ft"},[i("div",{staticClass:"weui-form-preview__btn weui-form-preview__btn_primary",on:{click:function(t){e.showDesc=1}}},[e._v("查看兑换说明")])])]),i("div",{staticClass:"weui-btn-area"},[i("base-button",{on:{click:function(t){e.showGift=!1}}},[e._v("关闭")])],1)]):e._e(),1==e.showDesc?i("div",{staticClass:"flex-wrp flex-cell flex-item model"},[e._m(1),i("no-ssr",[i("div",{staticClass:"pb20 plr45 size30 color27 lh150 overflow-auto-y",domProps:{innerHTML:e._s(e.gift.content)}})]),i("div",{staticClass:"flex-wrp flex-center ptb30",on:{click:function(t){e.showDesc=0}}},[i("div",{staticClass:"ptb20 plr30 border border-color2 color27 border-radius20 size24"},[e._v("关闭")])])],1):e._e()],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-cell color5"},[t("div",{staticClass:"flex-wrp flex-between pb10"},[t("div",[this._v("核销券码")])]),t("div",{staticClass:"flex-wrp flex-between"},[t("div",[this._v("兑换商家")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-wrp ptb30 flex-center"},[t("div",{staticClass:"size36 color27"},[this._v("兑换说明")])])}]};t.a=a},edQv:function(e,t,i){"use strict";var s=i("woOf"),a=i.n(s),r=i("Xxa5"),l=i.n(r),o=i("exGp"),c=i.n(o),f=i("DHvs");t.a={data:function(){return{showDesc:!1,showGift:!1,gifts:[],gift:[]}},asyncData:function(){var e=c()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{filter:{limit:10}});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),watch:{filter:function(){var e=this;this.$nextTick(function(){e.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})}},methods:{onFilter:function(e){this.gifts=[],this.isMore=!0,this.filter=a()({},this.filter,e)},fetchMore:function(){var e=c()(l.a.mark(function e(){var t,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.get("/user/gift",a()({},this.filter,{offset:this.gifts.length}));case 2:return t=e.sent,i=t.data,this.gifts=this.gifts.concat(i.gifts||[]),e.abrupt("return",{length:this.gifts.length,isMore:(i.gifts||[]).length>=this.filter.limit});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showDetail:function(e){this.gift=e,this.showGift=!0}}}},rIUF:function(e,t,i){var s=i("F60W");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("22b173ee",s,!1,{sourceMap:!1})},wE78:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("edQv"),a=i("YnI/"),r=!1;var l=function(e){r||i("rIUF")},o=i("VU/8")(s.a,a.a,!1,l,null,null);o.options.__file="pages/user/gift/index.vue",t.default=o.exports}});