webpackJsonp([77],{"51JP":function(e,t,a){var s=a("kxFB");(e.exports=a("FZ+f")(!1)).push([e.i,".me-red[data-v-aa5ef55e]{white-space:nowrap}.tips[data-v-aa5ef55e]{border-bottom-right-radius:.3125rem}.btn[data-v-aa5ef55e]{border:.09375rem solid #ff9501;height:1.65625rem}.icon[data-v-aa5ef55e]{position:absolute;right:0;top:0;font-size:4.375rem;color:#b2b2b2}.box[data-v-aa5ef55e]{min-height:6.25rem;border-right:.3125rem dotted #f4f4f4}.box.bg-redpacket2[data-v-aa5ef55e]{background:url("+s(a("SHCm"))+") no-repeat 50%;background-size:cover}.box.bg-smoke[data-v-aa5ef55e]{background:url("+s(a("Wqww"))+') no-repeat 50%;background-size:cover}.box3[data-v-aa5ef55e]{position:relative}.box3[data-v-aa5ef55e]:before{width:.625rem;height:.625rem;content:"";border-radius:50%;background:#f2f3f5;position:absolute;top:50%;margin-top:-.3125rem;left:-.3125rem}.box4[data-v-aa5ef55e]{width:3.125rem;position:relative}.box4[data-v-aa5ef55e]:after{width:.625rem;height:.625rem;content:"";border-radius:50%;background:#f2f3f5;position:absolute;top:50%;margin-top:-.3125rem;right:-.3125rem}',""])},"8As7":function(e,t,a){var s=a("51JP");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("14bb9a3c",s,!1,{sourceMap:!1})},O6uP:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("base-header",[a("div",{staticClass:"flex-wrp color5 bold",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"flex-item ptb10 plr40 size36 me-red ",class:0==e.tabIndex&&"color0",on:{click:function(t){return e.onSwitchTab(0)}}},[e._v("现金红包\n                ")]),a("div",{staticClass:"flex-item ptb10 plr40 size36 me-red ",class:1==e.tabIndex&&"color0",on:{click:function(t){return e.onSwitchTab(1)}}},[e._v("消费红包\n                ")])])]),0===e.tabIndex?a("div",[a("div",{staticClass:"pd25 mb20"},[a("div",{staticClass:"bg-main-gradient ptb45 plr50 border-radius10 overflow-hidden"},[a("div",{staticClass:"flex-wrp flex-between color10 plr10"},[a("div",[a("div",{staticClass:"size32 color1"},[e._v("累计抢红包(元)")]),a("div",{staticClass:"size42 pt20 color1 lh100"},[e._v(e._s(e._f("number_format")(e.weal.redpacket.money.total)))])]),a("div",{staticClass:"pt60"},[a("nuxt-link",{staticClass:"ptb10 pl40 pr40 text-center size10 color1 border border-radius30",attrs:{to:"/user_finance"}},[e._v("\n                                提 现\n                            ")])],1)])])]),e._l(e.cash_redpacket.redpackets,function(t){return a("div",{staticClass:"bg-white flex-wrp flex-between border-b pd20"},[a("div",[a("div",{staticClass:"size28 pt10 color28 bold"},[e._v(e._s(t.title))]),a("div",{staticClass:"size24 color5"},[e._v(e._s(t.time_create))])]),a("div",{staticClass:"flex-wrp flex-align-center size34 color38 bold"},[e._v(e._s(t.money))])])}),a("load-more",{ref:"cashRedpacketLoadMore",attrs:{handler:e.fetchCashedpackets}}),a("div",{staticClass:"ptb40"})],2):e._e(),1===e.tabIndex?a("div",[a("div",{staticClass:"flex-wrp bg-white"},[a("div",{staticClass:"flex-item ptb30 text-center size32",class:0==e.redpacket.filter.status?"color0 active":"",on:{click:function(){return e.onSwitchStatus(0)}}},[e._v("\n                    未使用("+e._s(e.weal.redpacket.consume.count[0])+")\n                ")]),a("div",{staticClass:"flex-item ptb30 text-center size32",class:1==e.redpacket.filter.status?"color0 active":"",on:{click:function(){return e.onSwitchStatus(1)}}},[e._v("\n                    已使用("+e._s(e.weal.redpacket.consume.count[1])+")\n                ")]),a("div",{staticClass:"flex-item ptb30 text-center size32",class:-1==e.redpacket.filter.status?"color0 active":"",on:{click:function(){return e.onSwitchStatus(-1)}}},[e._v("\n                    已过期("+e._s(e.weal.redpacket.consume.count[-1])+")\n                ")])]),e._l(e.redpacket.redpackets,function(t){return a("div",{staticClass:"mt20 mlr20 relative"},[a("div",{staticClass:"bg-white flex-wrp relative"},[a("div",{staticClass:"flex-item flex-wrp flex-cell flex-center relative overflow-hidden box border-r box3 color41",class:[0==e.redpacket.filter.status?"bg-redpacket2":"bg-smoke"]},[a("div",{staticClass:"flex-wrp flex-align-center pt30"},[t.fee?a("div",{staticClass:"flex-wrp"},[a("div",{staticClass:"size40 mt40"},[e._v(e._s(e._f("number_format")(t.fee)))])]):e._e()]),a("div",{staticClass:"size24 color1"},[1==t.type?a("span",[e._v("满"+e._s(e._f("number_format")(t.condition.lower))+"可用")]):e._e(),2==t.type?a("span",[e._v("满"+e._s(e._f("number_format")(t.condition.lower))+"可用")]):e._e()])]),a("div",{staticClass:"pd20 flex-wrp flex-cell flex-between",style:{flex:2}},[a("div",{staticClass:"flex-wrp"},[a("span",{staticClass:"border-radius5 color2 size28 ptb5 bold",class:t.is_expired||t.is_used?"bg-smoke":"bg-orange"},[1==t.type?a("span",[e._v("满减优惠券")]):e._e(),2==t.type?a("span",[e._v("随机")]):e._e()])]),a("div",{staticClass:"flex-wrp"},[a("div",{staticClass:"flex-item flex-wrp size24 bold color37"},[t.apply_shops&&t.apply_shops.length>0?a("div",[a("span",[e._v(e._s(t.shop.title)+" - ")]),t.apply_shops?a("span",[e._v(e._s(e._f("join")(t.apply_shops.map(function(e){return e.title}),"，")))]):e._e()]):e._e()])]),a("div",{staticClass:"color5 size20 bold"},[a("span",[e._v("使用时间："+e._s(e._f("datetime_format")(t.time_start,"YYYY.MM.DD"))+"-"+e._s(e._f("datetime_format")(t.time_end,"YYYY.MM.DD")))])])]),0==e.redpacket.filter.status?a("nuxt-link",{staticClass:"flex-wrp border-l border-l-s-d box4",attrs:{to:{path:t.apply_shops&&t.apply_shops.length>0?t.apply_shops[0].id?"/shop_"+t.apply_shops[0].id:"/shop_"+t.shop.id:"/shop"}}},[a("div",{staticClass:"flex-item size28 color38 pd30 wmr text-center"},[e._v("\n                            立即使用\n                        ")])]):e._e(),1==e.redpacket.filter.status?a("div",{staticClass:"flex-wrp border-l border-l-s-d box4"},[a("div",{staticClass:"flex-item size28 color5 pd30 wmr text-center"},[e._v("\n                            已使用\n                        ")])]):e._e(),-1==e.redpacket.filter.status?a("div",{staticClass:"flex-wrp border-l border-l-s-d box4"},[a("div",{staticClass:"flex-item size28 color5 pd30 wmr text-center"},[e._v("\n                            已过期\n                        ")])]):e._e()],1)])}),a("load-more",{ref:"loadMore",attrs:{handler:e.fetchRedpackets}}),a("div",{staticClass:"ptb40"}),a("nuxt-link",{staticClass:"fixed-bottom bg-white pd40 text-center flex-wrp flex-center bs",style:{zIndex:21},attrs:{to:"/weal"}},[a("i",{staticClass:"i i-redpacket color3"}),a("div",{staticClass:"box7 lh100 color37"},[e._v("领取更多红包")])])],2):e._e()],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};t.a=r},SHCm:function(e,t,a){e.exports=a.p+"img/bg-redpacket2.865c97e.png"},Wqww:function(e,t,a){e.exports=a.p+"img/bg-smoke.1216429.png"},Zav8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("dhuH"),r=a("O6uP"),i=!1;var n=function(e){i||a("8As7")},c=a("VU/8")(s.a,r.a,!1,n,"data-v-aa5ef55e",null);c.options.__file="pages/user/redpacket/index.vue",t.default=c.exports},dhuH:function(e,t,a){"use strict";var s=a("Xxa5"),r=a.n(s),i=a("woOf"),n=a.n(i),c=a("exGp"),o=a.n(c),l=a("Dd8w"),d=a.n(l),p=a("NYxO"),f=a("DHvs"),u=Object(p.createNamespacedHelpers)("user"),h=u.mapState,v=u.mapActions;t.a={data:function(){return{tabIndex:1,redpacket:{filter:{limit:10,status:0},redpackets:[]},cash_redpacket:{filter:{limit:10},redpackets:[]}}},computed:d()({},h({user:function(e){return e.info},weal:function(e){return e.weal}})),mounted:function(){this.getWeal()},watch:{tabIndex:function(e){var t=this;this.$nextTick(function(){switch(e){case 0:t.$refs.cashRedpacketLoadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset");break;case 1:t.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")}})},"redpacket.filter.status":function(){var e=this;this.$nextTick(function(){e.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})}},methods:d()({},v({getWeal:"getWeal"}),{onSwitchTab:function(e){this.tabIndex!==e&&(this.tabIndex=e)},onSwitchStatus:function(e){this.redpacket.filter.status=e,this.redpacket.redpackets=[]},fetchRedpackets:function(){var e=o()(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.get("/user/redpacket",n()({},this.redpacket.filter,{offset:this.redpacket.redpackets.length}));case 2:return t=e.sent,a=t.data,this.redpacket.redpackets=this.redpacket.redpackets.concat(a.redpackets||[]),e.abrupt("return",{length:this.redpacket.redpackets.length,isMore:(a.redpackets||[]).length>=this.redpacket.filter.limit});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchCashedpackets:function(){var e=o()(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.get("/user/cash_redpacket",n()({},this.cash_redpacket.filter,{offset:this.cash_redpacket.redpackets.length}));case 2:return t=e.sent,a=t.data,this.cash_redpacket.redpackets=this.cash_redpacket.redpackets.concat(a.redpackets||[]),e.abrupt("return",{length:this.cash_redpacket.redpackets.length,isMore:(a.redpackets||[]).length>=this.cash_redpacket.filter.limit});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onDelete:function(){var e=o()(r.a.mark(function e(t){var a=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:weui.confirm("确认删除？",o()(r.a.mark(function e(){var s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.delete("/user/redpacket/"+t.id);case 2:s=e.sent,"SUCCESS"===(i=s.data).code?a.redpacket.redpackets=a.redpacket.redpackets.filter(function(e){return e.id!==t.id}):i.msg&&weui.alert(i.msg,{title:"删除失败"});case 5:case"end":return e.stop()}},e,a)})));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()})}}});