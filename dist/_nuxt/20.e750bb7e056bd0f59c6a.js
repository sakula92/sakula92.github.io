webpackJsonp([20],{"/33S":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex-wrp"},t._l(t.max,function(e){return s("div",{staticClass:"flex-wrp flex-center mr5 star",class:{"bg-star":e<=t.value,"bg-lightstar":e>t.value},on:{click:function(s){return t.onChange(e)}}},[s("i",{staticClass:"i i-star color1"})])}),0)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"/Y1N":function(t,e,s){var i=s("G4Sd");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("5f1c461a",i,!1,{sourceMap:!1})},"1yK0":function(t,e,s){t.exports=s.p+"img/shoplist_icon.bb3eb3b.png"},"3rgx":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".star{border-radius:.0625rem!important;padding:.0625rem!important}",""])},"5yzX":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-white"},[i("div",{staticClass:"pd30 flex-wrp flex-align-stretch",on:{click:function(e){return t.goShop()}}},[t.shop.is_foodie_festival?i("fd-icon"):t._e(),i("div",{},[t.shop.thumb?i("base-img",{staticClass:"border-radius5 block thumb",attrs:{src:t.shop.thumb}}):i("div",{staticClass:"flex-wrp flex-center bg-default thumb"},[i("img",{staticStyle:{width:"36px",height:"30px"},attrs:{src:s("JT4a")}})])],1),i("div",{staticClass:"w250 flex-wrp flex-cell pl20"},[i("div",{staticClass:"flex-wrp flex-align-center flex-between"},[i("div",{staticClass:"size30 compulsory-row-one pt5 color37 bold"},[t._v(t._s(t.shop.title))])]),i("div",{staticClass:"flex-wrp flex-align-center pt10"},[i("div",{staticClass:"flex-item flex-wrp size24 flex-flow-row flex-between"},[i("div",{staticClass:"compulsory-row-one"},[t._v(t._s(t.shop.tag))]),t.price&&""!=t.shop.floor?i("div",{staticClass:"compulsory-row-one"},[t._v("商场"+t._s(t.shop.floor))]):t._e()])]),i("div",{staticClass:"flex-wrp flex-align-center pt10"},[i("div",{staticClass:"flex-item flex-wrp size24 flex-flow-row pr30"},[t.price?i("div",{staticClass:"maxw280 size24"},[t._v("￥"+t._s(t.price)+"/人均"),i("span",{staticClass:"pl20"},[t._v("销量"+t._s(t.shop.saled_count))])]):i("div",{staticClass:"maxw280 size24"},[t._v(t._s(t.shop.district))])]),t.shop.distance?i("div",{staticClass:" size24"},[t._v(t._s(t._f("distanceFilter")(t.shop.distance.number))+t._s(t.shop.distance.unit))]):t._e()]),t.showCouponInfo?i("div",{staticClass:"flex-wrp flex-align-center pt10"},[i("div",{staticClass:"pl5 pr5 size22 border border-radius10 mt5"},[t._v("可用红包券")])]):t._e(),t._l(t.shop_couponPre,function(e,s){return t.shop_couponPre?i("div",{key:s,staticClass:"flex-wrp flex-align-center pr10 pt10"},[i("div",{staticClass:"flex-item flex-wrp flex-between"},[i("div",{staticClass:"flex-wrp flex-align-center",on:{click:function(s){return s.stopPropagation(),t.goShop(e)}}},["0"===e.commodity_type?i("i",{staticClass:"z z-icon-test1 linear mr10 size30"}):i("i",{staticClass:"z z-quan linear1 mr10 size30"}),i("span",{staticClass:"size22 color37 compulsory-row-one"},[t._v(t._s(e.name))])])])]):t._e()}),t.shop.shop_coupon&&t.shop.shop_coupon.length>t.showLength?i("div",{staticClass:"flex-wrp flex-align-center pr10 pt20"},[i("div",{staticClass:"flex-item flex-wrp flex-between"},[i("div",{staticClass:"flex-wrp flex-center",on:{click:function(e){return e.stopPropagation(),t.showToggle()},touchmove:function(t){t.preventDefault()}}},[t.isAll?i("i",{staticClass:"i-icon i-down size24 pl10 rotate180"}):i("i",{staticClass:"i-icon i-down size24 pr10"}),t.isAll?i("span",{staticClass:"size22 color37"},[t._v("收起")]):i("span",{staticClass:"size22 color37"},[t._v("查看更多优惠信息")])])])]):t._e()],2)],1)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"8S/d":function(t,e,s){"use strict";var i=s("QipQ"),o=s("/33S"),a=!1;var n=function(t){a||s("Oqkr")},r=s("VU/8")(i.a,o.a,!1,n,null,null);r.options.__file="components/Stars.vue",e.a=r.exports},E4J7:function(t,e,s){var i=s("l0RI");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("67baa90b",i,!1,{sourceMap:!1})},EhB4:function(t,e,s){"use strict";var i=s("oXnF"),o=s("lmvv"),a=!1;var n=function(t){a||s("E4J7")},r=s("VU/8")(i.a,o.a,!1,n,"data-v-3629257b",null);r.options.__file="components/FoodDay/AcIcon2.vue",e.a=r.exports},Fe5H:function(t,e,s){"use strict";var i=s("rsPy"),o=s("5yzX"),a=!1;var n=function(t){a||s("o+1Y")},r=s("VU/8")(i.a,o.a,!1,n,"data-v-fa2929ca",null);r.options.__file="components/CateList/Shop/shopItem.vue",e.a=r.exports},G4Sd:function(t,e,s){var i=s("kxFB");(t.exports=s("FZ+f")(!1)).push([t.i,".shopping[data-v-e11be1c0]{position:relative}.shopping-bg[data-v-e11be1c0]{width:100%;height:9.4375rem}.shopping-bg img[data-v-e11be1c0]{width:100%;height:100%}.shopping-content[data-v-e11be1c0]{width:100%;height:14.25rem;background-color:#fff;border-top-left-radius:1.4375rem;border-top-right-radius:1.4375rem;position:absolute;top:7.375rem}.shopping-center[data-v-e11be1c0]{width:100%;padding-top:.9375rem}.shopping-center>span[data-v-e11be1c0]{display:block}.shopping-center .address[data-v-e11be1c0]{line-height:1.25rem}.introduce[data-v-e11be1c0]{height:6.375rem;margin:.59375rem 1.0625rem 1rem;background:#fef6f1;border-radius:.21875rem;padding:.75rem .9375rem .75rem 1.25rem}.introduce .left-bg[data-v-e11be1c0]{width:2.9375rem;height:3.53125rem;background:url("+i(s("b88W"))+") no-repeat;background-size:100% 100%;display:inline-block}.introduce .right-cont[data-v-e11be1c0]{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:1.375rem;text-align:left}.introduce i[data-v-e11be1c0]{width:.125rem;height:100%;display:inline-block;background:#fdd4be;margin:0 .6875rem 0 1.125rem}.details-phone[data-v-e11be1c0]{padding-left:.9375rem;border-left:.0625rem solid #ccc}.goodshop[data-v-e11be1c0]{width:100%;position:absolute;top:22.34375rem;background:#fff}.goodshop>span[data-v-e11be1c0]{color:#282828;display:block;padding:.9375rem 0 .6875rem 1.09375rem}.goodshop>span[data-v-e11be1c0],.shop-list[data-v-e11be1c0]{border-bottom:.125rem solid #f5f5f5}.map-model[data-v-e11be1c0]{position:fixed;bottom:0;width:92%;margin-left:4%;background:rgba(0,0,0,.7)}.map-content[data-v-e11be1c0]{position:absolute}.map-d1[data-v-e11be1c0]{top:-13.1875rem;height:2.5rem;line-height:2.5rem;text-align:center;border-top-right-radius:.625rem;border-top-left-radius:.625rem}.map-d2[data-v-e11be1c0]{top:-10.6875rem;height:3.25rem;line-height:3.25rem}.map-d3[data-v-e11be1c0]{top:-7.4375rem;height:3.25rem;line-height:3.25rem;border-bottom-right-radius:.625rem;border-bottom-left-radius:.625rem}.mapCancel[data-v-e11be1c0]{width:100%;top:-3.875rem;text-align:center;height:3.25rem;line-height:3.25rem;margin:.3125rem 0 .625rem;border-radius:.625rem}",""])},JT4a:function(t,e,s){t.exports=s.p+"img/load.ef9e840.png"},Oqkr:function(t,e,s){var i=s("3rgx");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("d54d9c90",i,!1,{sourceMap:!1})},QipQ:function(t,e,s){"use strict";e.a={props:{value:{type:Number,default:0},max:{type:Number,default:5}},methods:{onChange:function(t){this.$emit("onChange",t)}}}},b88W:function(t,e,s){t.exports=s.p+"img/fenzu4.e56685b.png"},c0vo:function(t,e,s){t.exports=s.p+"img/shop_headbg.f1d6cf2.png"},epdq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mDH8"),o=s("fxTj"),a=!1;var n=function(t){a||s("/Y1N")},r=s("VU/8")(i.a,o.a,!1,n,"data-v-e11be1c0",null);r.options.__file="pages/menu/shoppingDetail.vue",e.default=r.exports},"fB/o":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".tag[data-v-fa2929ca]{border:.03125rem solid #bbb;background-color:#f8f8f8}.linear1[data-v-fa2929ca]{background:#f5a623;background-clip:text;-webkit-background-clip:text}.linear1[data-v-fa2929ca],.linear[data-v-fa2929ca]{border-radius:.0625rem;-webkit-text-fill-color:transparent}.linear[data-v-fa2929ca]{background:linear-gradient(-135deg,#fba649,#f56d23);background-clip:text;-webkit-background-clip:text}.thumb[data-v-fa2929ca]{width:5.375rem;height:3.90625rem}.blank-box[data-v-fa2929ca]{width:3.75rem}.buying-item[data-v-fa2929ca]{border-top:.03125rem dashed #eee}.i-label-rush[data-v-fa2929ca]{position:absolute;left:0;top:50%;-webkit-transform:translate(-160%,-50%);transform:translate(-160%,-50%)}.h40[data-v-fa2929ca]{height:1.25rem}.maxw280[data-v-fa2929ca]{max-width:100%}.rotate180[data-v-fa2929ca]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.w80[data-v-fa2929ca]{width:80%}.w250[data-v-fa2929ca]{width:15.625rem}.border-radius10[data-v-fa2929ca]{color:#db1013;border-color:#db1013}",""])},fxTj:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopping"},[s("div",{staticClass:"shopping-bg"},[s("img",{attrs:{src:t.details.thumb,alt:""}})]),s("div",{staticClass:"shopping-content"},[s("div",{staticClass:"shopping-center"},[s("span",{staticClass:"size44 color37 bold text-center"},[t._v(t._s(t.details.name))]),s("div",{staticClass:"flex-wrp flex-align-center introduce"},[s("span",{staticClass:"left-bg"}),s("i"),s("span",{staticClass:"size28 color37 bold right-cont"},[t._v("\n                    "+t._s(t.details.description)+"\n                ")])]),s("div",{staticClass:"flex-wrp flex-center",staticStyle:{width:"90%",margin:"auto"}},[s("span",{staticClass:"size26 color5 bold pl40 pr40",on:{click:function(e){return t.openLocation()}}},[s("i",{staticClass:"z z-location pr10 size28",staticStyle:{color:"#ccc"}}),t._v(t._s(t.details.address))]),t.details.phone?s("span",{staticClass:"details-phone"},[s("a",{attrs:{href:"tel:"+t.details.phone},on:{click:function(e){return e.stopPropagation(),t.sensData("fm_clusterClickPhone")}}},[s("i",{staticClass:"i i-phone-o size38 color3"})])]):t._e()])])]),s("div",{staticClass:"goodshop"},[s("span",{staticClass:"size36"},[t._v("招牌好店")]),s("van-list",{attrs:{finished:t.finished,"finished-text":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._l(t.shops,function(e,i){return s("shop-list",{key:i,staticClass:"bg-white shop-list",staticStyle:{"margin-left":"15px"},attrs:{isParent:t.isParent,shop:e,price:e.avg_price},on:{toChild:t.toChild},nativeOn:{click:function(s){return t.sensData("fm_clusterClickShop",e)}}})}),t.shops.length>0&&t.finished?s("no-more",{staticClass:"bg-white",attrs:{bgColor:"#fff"}}):t._e(),0==t.shops.length&&t.finished?s("no-result",{staticClass:"bg-white"}):t._e()],2)],1),t.isMap?s("div",{staticClass:"mask"},[s("div",{staticClass:"flex-wrp flex-cell flex-center w100 bg-white map-bg map-model"},[s("div",{staticClass:"map-content map-d1 border-b w100 bg-white color5 size24"},[t._v("请选择地图")]),s("div",{staticClass:"flex-wrp flex-center w100 size36 color3  border-b map-content map-d2 bg-white",on:{click:t.addressGD}},[t._v("高德地图")]),s("div",{staticClass:"flex-wrp flex-center w100 size36 color3  map-content map-d3 bg-white",on:{click:t.addressBD}},[t._v("百度地图")]),s("div",{staticClass:"mapCancel map-content bg-white",on:{touchmove:function(t){t.preventDefault()},click:function(e){return t.closeMap()}}},[t._v("取消")])])]):t._e()])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},l0RI:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".shop-list-icon[data-v-3629257b]{width:3.375rem;height:1.0625rem;position:absolute;margin-top:-.53125rem;margin-left:-.125rem}.shop-list-icon img[data-v-3629257b]{width:100%;height:100%;max-width:100%;max-height:100%}",""])},lmvv:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.wechat,expression:"wechat"}],staticClass:"shop-list-icon"},[e("img",{attrs:{src:s("1yK0")}})])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},mDH8:function(t,e,s){"use strict";var i=s("Dd8w"),o=s.n(i),a=s("NYxO"),n=s("DHvs"),r=s("Fd2+"),c=s("Fe5H"),l=s("W6hx"),p=s("6GxD");e.a={data:function(){return{details:{},shops:[],isParent:!0,loading:!1,finished:!1,isMap:!1}},components:{VanList:r.h,NoMore:l.a,NoResult:p.a,ShopList:c.a},props:["bgColor"],computed:o()({},Object(a.mapState)({config:function(t){return t.config},user:function(t){return t.user.info}})),methods:{sensData:function(t,e){"fm_clusterClickShop"===t?Object(n.l)(t,{},{id:this.$route.query.id,shop_id:e.id,is_foodie_day:e.is_foodie_day,is_foodie_festival:e.is_foodie_festival}):Object(n.l)(t)},toChild:function(){this.isParent=!this.isParent},onLoad:function(){var t=this;this.loading=!0,n.b.webGet("/v3/business/"+this.$route.query.id,{limit:10,offset:this.shops.length,city_id:this.$route.query.city_id,lat:this.$route.query.lat,lng:this.$route.query.lng},function(e){t.loading=!1,t.details=e.data.cluster,t.shops=t.shops.concat(e.data.cluster.shops||[]),0===e.data.cluster.shops.length&&(t.finished=!0)},function(e){t.loading=!1,t.finished=!0})},openLocation:function(){if(Object(n.l)("fm_clusterClickPosition"),Object(n.i)()){this.user.id&&this.addressPreview();var t={title:this.details.name,desc:this.details.description,link:location.origin+location.pathname,imgUrl:this.details.thumb,success:function(){}};n.o.setShare(t)}else this.isMap=!this.isMap},closeMap:function(){Object(n.l)("fm_clusterClickCancel"),this.isMap=!this.isMap},addressPreview:function(){n.o.openLocation({title:this.details.name,lat:this.$route.query.lat,lng:this.$route.query.lng})},addressBD:function(){Object(n.l)("fm_clusterClickBaidu");var t=this.bd_decrypt(this.$route.query.lng,this.$route.query.lat),e="http://api.map.baidu.com/marker?location="+t.lat+","+t.lng+"&title="+this.details.address+"&content="+this.details.name+"&output=html&src=中原银行|中原银行";Object(n.d)()?e="bdapp://map/marker?location="+this.$route.query.lat+","+t.lng+"&title="+this.details.address+"&content="+this.details.name+"&output=html&src=中原银行|中原银行&traffic=off":Object(n.e)()&&(e="baidumap://map/marker?location="+t.lat+","+t.lng+"&title="+this.details.address+"&content="+this.details.name+"&src=webapp.marker.中原银行.中原银行"),window.open(e.replace(/#/,"号"))},bd_decrypt:function(t,e){var s=3e3*Math.PI/180,i=t,o=e,a=Math.sqrt(i*i+o*o)+2e-5*Math.sin(o*s),n=Math.atan2(o,i)+3e-6*Math.cos(i*s);return{lng:a*Math.cos(n)+.0065,lat:a*Math.sin(n)+.006}},addressGD:function(){Object(n.l)("fm_clusterClickGeoMap");var t=this.$route.query.lat,e=this.$route.query.lng,s="https://uri.amap.com/marker?position="+e+","+t+"&name="+this.details.name+"&callnative=0";Object(n.d)()?s="androidamap://viewMap?sourceApplication=zybank&poiname="+this.details.name+"&lat="+t+"&lon="+e+"&dev=0":Object(n.e)()&&(s="iosamap://viewMap?sourceApplication=zybank&poiname="+this.details.name+"&lat="+t+"&lon="+e+"&dev=0"),window.open(s)}},mounted:function(){}}},"o+1Y":function(t,e,s){var i=s("fB/o");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("87c54dc6",i,!1,{sourceMap:!1})},oXnF:function(t,e,s){"use strict";var i=s("DHvs");e.a={data:function(){return{wechat:!1}},mounted:function(){this.wechat=Object(i.i)()}}},rsPy:function(t,e,s){"use strict";var i=s("8S/d"),o=s("EhB4"),a=s("DHvs");e.a={data:function(){return{discounts:[{discount:"7折买单"},{discount:"6折买单"}],headImg:[{imgUrl:s("c0vo")}],scroll:"",shop_couponPre:[],isAll:!1,showLength:2}},props:{shop:{type:Object,required:!0},isParent:{type:Boolean},price:{type:String},showCouponInfo:{type:Boolean,default:!1}},components:{Star:i.a,FdIcon:o.a},mounted:function(){if(this.shop.shop_coupon){if(this.shop.is_foodie_day&&Object(a.i)()&&this.shop.is_foodie_festival)for(var t=0;t<this.shop.shop_coupon.length;t++){this.shop.shop_coupon[t].is_foodie_festival||(this.shop.shop_coupon.splice(t,1),t--)}var e=!1,s=!1,i="";this.shop.shop_coupon[0]&&"0"===this.shop.shop_coupon[0].commodity_type?e=!0:s=!0;for(var o=0;o<this.shop.shop_coupon.length;o++)"0"===this.shop.shop_coupon[o].commodity_type?(e||0===o||(i=this.shop.shop_coupon.splice(o,1),this.shop.shop_coupon.splice(0,0,i[0])),e=!0):(s||0===o||(i=this.shop.shop_coupon.splice(o,1),this.shop.shop_coupon.splice(0,0,i[0])),s=!0);this.showLength=e&&s?2:1}this.shop_couponPre=this.shop.shop_coupon&&this.shop.shop_coupon.slice(0,this.showLength)},computed:{tags:function(){return!!this.shop.tag&&this.shop.tag.split(",")},isShowVipDiscountScale:function(){return!!this.shop.discount_info&&(!!this.shop.discount_info.vip&&(!(parseFloat(this.shop.discount_info.vip.scale)<=0)&&!(parseFloat(this.shop.discount_info.vip.scale)>=10)))}},methods:{showToggle:function(){this.isAll?this.shop_couponPre=this.shop.shop_coupon&&this.shop.shop_coupon.slice(0,this.showLength):this.shop_couponPre=this.shop.shop_coupon,this.isAll=!this.isAll},goCoupon:function(t){this.$emit("toChild"),this.$router.push({path:"/foodCoupon",query:{id:t.id}})},goShop:function(){this.$router.push({path:"/shop_"+this.shop.id})}}}}});