webpackJsonp([9],{"/33S":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"flex-wrp"},t._l(t.max,function(e){return i("div",{staticClass:"flex-wrp flex-center mr5 star",class:{"bg-star":e<=t.value,"bg-lightstar":e>t.value},on:{click:function(i){return t.onChange(e)}}},[i("i",{staticClass:"i i-star color1"})])}),0)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},"1PM8":function(t,e,i){t.exports=i.p+"img/shop_title_icon.5a6000a.png"},"1yK0":function(t,e,i){t.exports=i.p+"img/shoplist_icon.bb3eb3b.png"},"2uxn":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("MIQv"),o=i("JfEk"),n=!1;var a=function(t){n||i("S8FF")},r=i("VU/8")(s.a,o.a,!1,a,"data-v-8707d666",null);r.options.__file="pages/shop/foodie/index.vue",e.default=r.exports},"3rgx":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".star{border-radius:.0625rem!important;padding:.0625rem!important}",""])},"5yzX":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white"},[s("div",{staticClass:"pd30 flex-wrp flex-align-stretch",on:{click:function(e){return t.goShop()}}},[t.shop.is_foodie_festival?s("fd-icon"):t._e(),s("div",{},[t.shop.thumb?s("base-img",{staticClass:"border-radius5 block thumb",attrs:{src:t.shop.thumb}}):s("div",{staticClass:"flex-wrp flex-center bg-default thumb"},[s("img",{staticStyle:{width:"36px",height:"30px"},attrs:{src:i("JT4a")}})])],1),s("div",{staticClass:"w250 flex-wrp flex-cell pl20"},[s("div",{staticClass:"flex-wrp flex-align-center flex-between"},[s("div",{staticClass:"size30 compulsory-row-one pt5 color37 bold"},[t._v(t._s(t.shop.title))])]),s("div",{staticClass:"flex-wrp flex-align-center pt10"},[s("div",{staticClass:"flex-item flex-wrp size24 flex-flow-row flex-between"},[s("div",{staticClass:"compulsory-row-one"},[t._v(t._s(t.shop.tag))]),t.price&&""!=t.shop.floor?s("div",{staticClass:"compulsory-row-one"},[t._v("商场"+t._s(t.shop.floor))]):t._e()])]),s("div",{staticClass:"flex-wrp flex-align-center pt10"},[s("div",{staticClass:"flex-item flex-wrp size24 flex-flow-row pr30"},[t.price?s("div",{staticClass:"maxw280 size24"},[t._v("￥"+t._s(t.price)+"/人均"),s("span",{staticClass:"pl20"},[t._v("销量"+t._s(t.shop.saled_count))])]):s("div",{staticClass:"maxw280 size24"},[t._v(t._s(t.shop.district))])]),t.shop.distance?s("div",{staticClass:" size24"},[t._v(t._s(t._f("distanceFilter")(t.shop.distance.number))+t._s(t.shop.distance.unit))]):t._e()]),t.showCouponInfo?s("div",{staticClass:"flex-wrp flex-align-center pt10"},[s("div",{staticClass:"pl5 pr5 size22 border border-radius10 mt5"},[t._v("可用红包券")])]):t._e(),t._l(t.shop_couponPre,function(e,i){return t.shop_couponPre?s("div",{key:i,staticClass:"flex-wrp flex-align-center pr10 pt10"},[s("div",{staticClass:"flex-item flex-wrp flex-between"},[s("div",{staticClass:"flex-wrp flex-align-center",on:{click:function(i){return i.stopPropagation(),t.goShop(e)}}},["0"===e.commodity_type?s("i",{staticClass:"z z-icon-test1 linear mr10 size30"}):s("i",{staticClass:"z z-quan linear1 mr10 size30"}),s("span",{staticClass:"size22 color37 compulsory-row-one"},[t._v(t._s(e.name))])])])]):t._e()}),t.shop.shop_coupon&&t.shop.shop_coupon.length>t.showLength?s("div",{staticClass:"flex-wrp flex-align-center pr10 pt20"},[s("div",{staticClass:"flex-item flex-wrp flex-between"},[s("div",{staticClass:"flex-wrp flex-center",on:{click:function(e){return e.stopPropagation(),t.showToggle()},touchmove:function(t){t.preventDefault()}}},[t.isAll?s("i",{staticClass:"i-icon i-down size24 pl10 rotate180"}):s("i",{staticClass:"i-icon i-down size24 pr10"}),t.isAll?s("span",{staticClass:"size22 color37"},[t._v("收起")]):s("span",{staticClass:"size22 color37"},[t._v("查看更多优惠信息")])])])]):t._e()],2)],1)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},"8S/d":function(t,e,i){"use strict";var s=i("QipQ"),o=i("/33S"),n=!1;var a=function(t){n||i("Oqkr")},r=i("VU/8")(s.a,o.a,!1,a,null,null);r.options.__file="components/Stars.vue",e.a=r.exports},DFfH:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".fixed-top[data-v-502cdb8b]{position:fixed;top:0;z-index:1002}.convenient-box[data-v-502cdb8b]{overflow-x:auto;overflow-y:hidden;background:#fff;padding-left:.9375rem;padding-bottom:.625rem;width:100vw;white-space:nowrap;-webkit-overflow-scrolling:touch}.convenient-box[data-v-502cdb8b]::-webkit-scrollbar{display:none}.convenient-filter[data-v-502cdb8b]{height:1.875rem;line-height:1.875rem;border-radius:.9375rem;font-size:.8125rem;color:#666;letter-spacing:0;text-align:center;background:#f5f5f5;padding:0 .9375rem;display:inline-block;margin-right:.625rem}.convenient-filter-active[data-v-502cdb8b]{color:#f56d23}#expendList[data-v-502cdb8b]{overflow-y:auto}#expendList[data-v-502cdb8b] ::-webkit-scrollbar{-webkit-appearance:none}.filter-wrap[data-v-502cdb8b]{position:relative;z-index:1002;top:-2.5rem}.filter-box[data-v-502cdb8b]{position:absolute;top:0;left:0}.filter-box-comix[data-v-502cdb8b]{position:fixed;left:0;top:2rem}.filter-cate[data-v-502cdb8b]:first-child{border-left:none}.ischeck[data-v-502cdb8b]{color:#fff;background-color:#f56d23}.nocheck[data-v-502cdb8b]{color:#333;border:.03125rem solid #ddd}input[data-v-502cdb8b]{opacity:0}.cate-active[data-v-502cdb8b]{color:#f56d23}.dish[data-v-502cdb8b]{border-radius:.25rem;padding-top:.1875rem;padding-bottom:.1875rem}.dish label[data-v-502cdb8b]{position:relative}.dish label input[data-v-502cdb8b]{position:absolute;left:0}.btn1[data-v-502cdb8b]{width:10.5rem;height:2.0625rem;border:.03125rem solid #d5d5d6;border-radius:.3125rem;background-color:#666;color:#fff}.border-blue[data-v-502cdb8b]{border:.03125rem solid #18baf9}.btn2[data-v-502cdb8b]{width:10.5rem;height:2.0625rem;border-radius:.3125rem;color:#fff;background-color:#17cc85}.rotate180[data-v-502cdb8b]{-webkit-transform:rotate(180deg);transform:rotate(180deg);position:relative;top:-.125rem}.width96[data-v-502cdb8b]{width:96%}.width160[data-v-502cdb8b]{min-width:4.6875rem}.width50[data-v-502cdb8b]{width:50%}.height80[data-v-502cdb8b]{height:2.5rem}.lineheight80[data-v-502cdb8b]{line-height:2.5rem}.textcenter[data-v-502cdb8b]{text-align:center}.bordertop1[data-v-502cdb8b]{border-top:.03125rem solid #ccc}.borderleft1[data-v-502cdb8b]{border-left:.03125rem solid #ccc}.borderbottom1[data-v-502cdb8b]{border-bottom:.03125rem solid #eee}.w92[data-v-502cdb8b]{width:92%;margin-left:4%}.switch[data-v-502cdb8b]{padding-top:.25rem}",""])},DpB9:function(t,e,i){t.exports=i.p+"img/top3.245c538.png"},DpsJ:function(t,e,i){t.exports=i.p+"img/top6.9f1dace.png"},E4J7:function(t,e,i){var s=i("l0RI");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("67baa90b",s,!1,{sourceMap:!1})},EhB4:function(t,e,i){"use strict";var s=i("oXnF"),o=i("lmvv"),n=!1;var a=function(t){n||i("E4J7")},r=i("VU/8")(s.a,o.a,!1,a,"data-v-3629257b",null);r.options.__file="components/FoodDay/AcIcon2.vue",e.a=r.exports},EoCj:function(t,e,i){"use strict";var s=i("bOdI"),o=i.n(s),n=i("woOf"),a=i.n(n),r=i("Xxa5"),c=i.n(r),l=i("exGp"),d=i.n(l),h=i("Dd8w"),p=i.n(h),u=i("NYxO"),f=i("Fd2+"),v=i("DHvs");e.a={data:function(){return{isfix:!1,show:!0,isclose:!1,expend:[],fexpend:[],isshow:!1,cuisine:[],open_time:[],shop_capacity:[],shop_age:[],filter_index:0,category_id:0,newAgentCity:{},couponSwitch:!1,coupon:0,conFilters:[{label:"500米以内",key:"distance",value:"500"},{label:"1km以内",key:"distance",value:"1000"},{label:"快餐小吃",key:"cid",value:""},{label:"饮品",key:"cid",value:""},{label:"豫菜",key:"cuisine",value:"豫菜"},{label:"川菜",key:"cuisine",value:"川菜"}],conFilter:""}},props:{filters:{type:Array,required:!0},filter:{type:Object,required:!0},curlabel:{type:String},cityInfo:{type:Object},showCoupon:{type:Boolean,default:!1},showConvenient:{type:Boolean,default:!1}},components:{VanSwitch:f.o},mounted:function(){this.newAgentCity=window.sessionStorage.getItem("agent_city")?JSON.parse(window.sessionStorage.getItem("agent_city")):this.agentCity,this.conFiltersQry()},computed:p()({},Object(u.mapState)({agentCity:function(t){return t.session.agentCity},currentCity:function(t){return t.session.currentCity}}),{label:function(){for(var t=[],e=0;e<this.filters.length;e++)t.push(this.filters[e].label);return e==this.filters.length&&this.curlabel&&(t[1]=this.curlabel),t[0]="附近",t}}),methods:{conFiltersQry:function(){var t=d()(c.a.mark(function t(){var e,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.b.get("/v3/extrafilter",{});case 2:e=t.sent,2e5===(i=e.data).code&&(this.$set(this.conFilters[2],"value",i.filter[0].value),this.$set(this.conFilters[3],"value",i.filter[1].value));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),switchToggle:function(){this.coupon=0===this.coupon?1:0,console.log(this.coupon)},close:function(){this.show=!1,this.$emit("close2")},onFetch:function(t){this.category_id=t,this.show=!0},touchmove:function(){this.show=!1},showFilter:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(v.l)("fm_filterClick",{},{eventType:t.label}),document.documentElement.scrollTop=568,this.$emit("scrollFixed",t),0==e&&(this.filter_index=i),"filter"===t.key?(this.expend=[],this.show=!0,this.isshow?(this.isshow=!1,this.$emit("close2")):(this.fexpend.length>0||this.fexpend.push(t),this.isshow=!0)):(this.show=!0,this.isshow=!1,t.items?this.expend.length>e?(this.expend=this.expend.slice(0,e+1),this.expend.every(function(e){return e.key===t.key&&e.value===t.value})?(this.$emit("close2"),this.expend.pop()):this.expend[e]=t):this.expend.push(t):(this.expend=[],this.label[this.filter_index]=t.label,"district_id"===t.key?(this.filter.distance="",this.conFilter=""):this.conFilter.key===t.key&&(this.conFilter=""),this.$emit("filter",a()({},this.filter,o()({},t.key,t.value))))),console.log("......this.isshow"+this.isshow)},complexFilter:function(t){if("reset"===t){this.cuisine=[],this.open_time=[],this.shop_capacity=[],this.shop_age=[];for(var e=this.fexpend[0].items,i=0;i<e.length;i++)for(var s=0;s<e[i].items.length;s++)e[i].items[s].checked&&(e[i].items[s].checked=!1)}if("submit"===t){this.cuisine=[],this.open_time=[],this.shop_capacity=[],this.shop_age=[];for(e=this.fexpend[0].items,i=0;i<e.length;i++)for(s=0;s<e[i].items.length;s++)e[i].items[s].checked&&("cuisine"===e[i].items[s].key&&this.cuisine.indexOf(e[i].items[s].value)<0&&this.cuisine.push(e[i].items[s].value),"open_time"===e[i].items[s].key&&this.open_time.indexOf(e[i].items[s].value)<0&&this.open_time.push(e[i].items[s].value),"shop_capacity"===e[i].items[s].key&&this.shop_capacity.indexOf(e[i].items[s].value)<0&&this.shop_capacity.push(e[i].items[s].value),"shop_age"===e[i].items[s].key&&this.shop_age.indexOf(e[i].items[s].value)<0&&this.shop_age.push(e[i].items[s].value));"cuisine"===this.conFilter.key&&(this.cuisine.indexOf(this.conFilter.value)>-1?this.conFilter="":this.cuisine.push(this.conFilter.value)),this.$emit("filter",a()({},this.filter,{cuisine:this.cuisine,open_time:this.open_time,shop_capacity:this.shop_capacity,shop_age:this.shop_age,coupon:this.coupon})),this.isshow=!1}},convenientFilter:function(t){if(this.conFilter.value!==t.value){var e={district_id:0,distance:"",cid:0};if("distance"===t.key)e.distance=t.value;else{if("cuisine"===t.key){if("cuisine"===this.conFilter.key){var i=this.cuisine.indexOf(this.conFilter.value);i>-1&&this.cuisine.splice(i,1)}this.cuisine.indexOf(t.value)<0&&this.cuisine.push(t.value),e.cuisine=this.cuisine}if("cid"===t.key){if("cuisine"===this.conFilter.key){var s=this.cuisine.indexOf(this.conFilter.value);s>-1&&this.cuisine.splice(s,1)}e.cuisine=this.cuisine,e.cid=t.value}}this.conFilter=t,this.$emit("filter",a()({},this.filter,e))}}}}},Fe5H:function(t,e,i){"use strict";var s=i("rsPy"),o=i("5yzX"),n=!1;var a=function(t){n||i("o+1Y")},r=i("VU/8")(s.a,o.a,!1,a,"data-v-fa2929ca",null);r.options.__file="components/CateList/Shop/shopItem.vue",e.a=r.exports},GsWQ:function(t,e,i){t.exports=i.p+"img/top5.2dc6130.png"},JT4a:function(t,e,i){t.exports=i.p+"img/load.ef9e840.png"},JfEk:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"shop"}},[i("div",{staticClass:"w100  pt20 pb20 relative search-model"},[i("div",{staticClass:"flex-wrp flex-align-center mr10 search-content"},[i("i",{staticClass:"i-search-o color44 mlr10"}),i("nuxt-link",{staticClass:"search-input color44 size30 w100",attrs:{to:{path:"/shopSearch"}}},[t._v("火锅")])],1)]),i("div",{staticClass:"w100 ",class:{fil2:t.isfix2}},[t.filters?i("base-filter",{staticClass:"border-b filter2 w100",class:{fil:t.isfix},staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{showCoupon:!0,filters:t.filters,filter:t.filter,cityInfo:t.isSelectCity?t.newAgentCity:t.currentCityData},on:{filter:t.onFilter,close2:t.close2,scrollFixed:t.scrollFixed}}):t._e(),t._l(t.shops,function(e,s){return i("shop-list",{key:s,staticClass:"bg-white mb10",attrs:{showCouponInfo:t.showCouponInfo,isParent:t.isParent,shop:e},on:{toChild:t.toChild}})}),i("load-more",{ref:"loadMore",attrs:{handler:t.fetchShops,noResult:"new",noMore:"new"}})],2)]),i("nuxt-child")],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},MIQv:function(t,e,i){"use strict";var s=i("woOf"),o=i.n(s),n=i("Dd8w"),a=i.n(n),r=i("Xxa5"),c=i.n(r),l=i("exGp"),d=i.n(l),h=i("NYxO"),p=i("vTey"),u=(i.n(p),i("DHvs")),f=i("f0Ur"),v=i("Fe5H"),g=i("Fd2+");e.a={data:function(){return this.$data?this.$data:{finished:!1,loading:!1,lat:"",lng:"",filters:[],shops:[],filter:{},isfix:!1,isfix2:!1,offset:0,carouselDatas:[],topSwiperOption:{slidesPerView:3,loopedSlides:9,autoplay:!1,direction:"horizontal",loop:!1,speed:1500,autoplayDisableOnInteraction:!1},loginStatusResponseData:{},newAgentCity:{},currentCityData:{},isSelectCity:!1,isParent:!0,showCouponInfo:!1}},asyncData:function(){var t=d()(c.a.mark(function t(e){var i,s,o,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={limit:10,offset:0,cid:e.query.cid||0,city_id:e.query.city_id,lng:e.query.lng,lat:e.query.lat},s=e.query.curlabel,o=e.query.activity_id,n=e.query.festival_id,t.abrupt("return",{filter:i,curlabel:s,activity_id:o,festival_id:n});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"精品好店"}},components:{BaseFilter:f.a,ShopList:v.a,VanList:g.h},mounted:function(){var t=this;if(Object(u.i)()){if(!this.user.id&&-1===location.href.indexOf("OpenId")){var e="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f4ab8a6e6185c70&redirect_uri=https%3A%2F%2Fwbs.zyebank.com%2Fpweixin%2Fweixin%2Fhtmls%2FAppSharePages%2FGotoUrl%2Findex.html%3Fgotourl%3Dhttps%3A%2F%2Fzfm.zybank.com.cn&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",i=e.slice(0,229),s=e.slice(229);location.href=i+encodeURIComponent(location.pathname)+s}this.getWeixinUser()}location.href.indexOf("fromCouponBox")>-1&&(this.showCouponInfo=!0);var o=this;this.isSelectCity=!1,this.$nextTick(function(){window.sessionStorage.getItem("agent_city")&&(t.isSelectCity=!0)}),window.loginStatusForResponse=function(t,e){o.loginStatusResponseData={data:t,sign:e},o.getdecryLoginStatusZyBank()},setTimeout(function(){t.newAgentCity=window.sessionStorage.getItem("agent_city")?JSON.parse(window.sessionStorage.getItem("agent_city")):t.currentCity,t.currentCityData=window.localStorage.getItem("current_city")?JSON.parse(window.localStorage.getItem("current_city")):t.currentCity,o.locationInfo?(o.lng=o.locationInfo.lng,o.lat=o.locationInfo.lat,Object(u.i)()||(o.appLoginCheck(),localStorage.setItem("lng",o.lng),localStorage.setItem("lat",o.lat))):(o.lng=localStorage.getItem("lng"),o.lat=localStorage.getItem("lat"),o.appLocation()),o.fetchFilters(o.newAgentCity)})},computed:a()({},Object(h.mapState)({config:function(t){return t.config},user:function(t){return t.user.info},currentCity:function(t){return t.session.currentCity},agentCity:function(t){return t.session.agentCity},locationInfo:function(t){return t.session.locationInfo}})),watch:{filter:function(){var t=this;this.$nextTick(function(){t.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})}},methods:{toChild:function(){this.isParent=!this.isParent},getWeixinUser:function(){var t=location.href,e=t.indexOf("?"),i=t.substr(e+1);this.userInfoQry(i)},userInfoQry:function(){var t=d()(c.a.mark(function t(e){var i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.get("/weixin/tools/wxLogin",{urlParam:e});case 2:i=t.sent,s=i.data,200===i.status&&"SUCCESS"===s.code&&this.$store.dispatch("user/getUser");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),appLocation:function(){if(Object(u.i)()){u.o.getLocation().then(function(t){console.log(t),localStorage.setItem("lng",t.longitude),localStorage.setItem("lat",t.latitude)})}else Object(u.d)()?window.demo&&window.demo.getLocationOnAndroid():Object(u.e)()?window.location.href="objc://getLocation:/":locationForResponse("113.65,34.76")},appLoginCheck:function(){Object(u.d)()?window.demo&&window.demo.getLoginStatusOnAndroid():Object(u.e)()&&(window.location.href="objc://getLoginStatus:/")},setUserCity:function(){var t=d()(c.a.mark(function t(e,i,s){var o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this,t.next=3,u.b.get("/zybank/loginLogs",{city_id:e,type:i,status:s});case 3:o=t.sent,o.data;case 5:case"end":return t.stop()}},t,this)}));return function(e,i,s){return t.apply(this,arguments)}}(),getdecryLoginStatusZyBank:function(){var t=d()(c.a.mark(function t(){var e,i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/zybank/decryLoginStatus",this.loginStatusResponseData);case 2:if(e=t.sent,i=e.data,200!==e.status||"SUCCESS"!==i.code||"1"!=i.loginStatus.loginStatus){t.next=10;break}return s=window.localStorage.getItem("current_city")?JSON.parse(window.localStorage.getItem("current_city")):{},this.setUserCity(s.city_id||"","0",s.status||"2"),t.next=10,this.$store.dispatch("user/getUser");case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onFilter:function(t){t.lng=localStorage.getItem("lng"),t.lat=localStorage.getItem("lat"),this.isfix2=!1,setTimeout(function(){document.documentElement.scrollTop=604},10),this.shops=[],this.filter=o()({},this.filter,t)},scrollFixed:function(t){this.isfix2=!0},close2:function(){this.isfix2=!1,setTimeout(function(){document.documentElement.scrollTop=589},1)},handleScroll:function(){var t=document.querySelector(".filter2").offsetTop,e=document.documentElement.scrollTop||document.body.scrollTop;e>t&&(this.isfix=!0),e<=100&&(this.isfix=!1)},fetchFilters:function(){var t=d()(c.a.mark(function t(){var e,i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={},(e=this.isSelectCity?this.newAgentCity:this.currentCityData)||(e=param),t.next=5,u.b.get("/v3/filter",{typeid:6,city_id:e.city_id});case 5:i=t.sent,s=i.data,this.filters=s.filters;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),fetchShops:function(){var t=d()(c.a.mark(function t(){var e,i,s,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("lng"),i=localStorage.getItem("lat"),{},(this.isSelectCity?this.newAgentCity:this.currentCityData)||param,t.next=7,u.b.get("/v3/foodie-festival-shop",o()({},this.filter,{offset:this.shops.length,city_id:this.isSelectCity?this.newAgentCity.city_id:this.currentCityData.city_id,district_id:this.isSelectCity?this.filter.district_id||this.newAgentCity.district_id:this.filter.district_id||this.currentCityData.district_id,lng:this.lng||this.filter.lng||e||"",lat:this.lat||this.filter.lat||i||"",activity_id:this.activity_id,festival_id:this.festival_id}));case 7:if(s=t.sent,n=s.data,s.status,"200000"!=n.code){t.next=13;break}return this.shops=this.shops.concat(n.shops||[]),t.abrupt("return",{length:this.shops.length,isMore:(n.shops||[]).length>=this.filter.limit});case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},destroyed:function(){console.log("index===destroyed");var t=document.getElementById("shop");t&&(t.style.display="block")}}},Oqkr:function(t,e,i){var s=i("3rgx");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("d54d9c90",s,!1,{sourceMap:!1})},QipQ:function(t,e,i){"use strict";e.a={props:{value:{type:Number,default:0},max:{type:Number,default:5}},methods:{onChange:function(t){this.$emit("onChange",t)}}}},S8FF:function(t,e,i){var s=i("VnHr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("3565cded",s,!1,{sourceMap:!1})},VnHr:function(t,e,i){var s=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,".header-title[data-v-8707d666]{border-radius:.9375rem .9375rem 0 0;background-image:url("+s(i("rsZd"))+');background-size:auto 100%}.header-title[data-v-8707d666]:before{display:inline-block;content:"";width:1.25rem;height:.9375rem;background:url('+s(i("1PM8"))+") no-repeat 0;background-size:auto 100%}.top-label[data-v-8707d666]{width:2.5625rem;height:1.1875rem;position:absolute;top:-.03125rem;z-index:1;border-top-left-radius:.5625rem;border-bottom-right-radius:.5625rem;font-family:Krungthep;font-weight:700;-webkit-box-shadow:0 .0625rem .125rem 0 rgba(0,0,0,.5);box-shadow:0 .0625rem .125rem 0 rgba(0,0,0,.5)}.top1[data-v-8707d666]{background-image:url("+s(i("pGm6"))+");background-size:cover}.top2[data-v-8707d666]{background-image:url("+s(i("gIrh"))+");background-size:cover}.top3[data-v-8707d666]{background-image:url("+s(i("DpB9"))+");background-size:cover}.top4[data-v-8707d666]{background-image:url("+s(i("xg5s"))+");background-size:cover}.top5[data-v-8707d666]{background-image:url("+s(i("GsWQ"))+");background-size:cover}.top6[data-v-8707d666]{background-image:url("+s(i("DpsJ"))+");background-size:cover}.shop-btn[data-v-8707d666]{width:4.53125rem;height:1.125rem;border-radius:.71875rem;background-color:#ff4104;-webkit-box-shadow:0 .3125rem .3125rem rgba(255,65,4,.2);box-shadow:0 .3125rem .3125rem rgba(255,65,4,.2)}.top-item[data-v-8707d666]{width:33.3333%!important;padding-left:.1875rem;padding-right:.1875rem;border-bottom-right-radius:.1875rem;border-bottom-left-radius:.1875rem}.top-shadow[data-v-8707d666]{-webkit-box-shadow:0 .1875rem .3125rem rgba(0,0,0,.1);box-shadow:0 .1875rem .3125rem rgba(0,0,0,.1)}.thumb[data-v-8707d666]{width:100%;height:27.8vw}.fil[data-v-8707d666]{position:fixed;top:0;z-index:1000}.fil2[data-v-8707d666]{position:fixed;top:0;z-index:9000}.search-model[data-v-8707d666]{background-color:#f4f4f4}.search-content[data-v-8707d666]{height:2.125rem;width:92%;margin-left:4%;background-color:#fff;border-radius:.3125rem}",""])},c0vo:function(t,e,i){t.exports=i.p+"img/shop_headbg.f1d6cf2.png"},f0Ur:function(t,e,i){"use strict";var s=i("EoCj"),o=i("w9w+"),n=!1;var a=function(t){n||i("i8la")},r=i("VU/8")(s.a,o.a,!1,a,"data-v-502cdb8b",null);r.options.__file="components/Base/Filter.vue",e.a=r.exports},"fB/o":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".tag[data-v-fa2929ca]{border:.03125rem solid #bbb;background-color:#f8f8f8}.linear1[data-v-fa2929ca]{background:#f5a623;background-clip:text;-webkit-background-clip:text}.linear1[data-v-fa2929ca],.linear[data-v-fa2929ca]{border-radius:.0625rem;-webkit-text-fill-color:transparent}.linear[data-v-fa2929ca]{background:linear-gradient(-135deg,#fba649,#f56d23);background-clip:text;-webkit-background-clip:text}.thumb[data-v-fa2929ca]{width:5.375rem;height:3.90625rem}.blank-box[data-v-fa2929ca]{width:3.75rem}.buying-item[data-v-fa2929ca]{border-top:.03125rem dashed #eee}.i-label-rush[data-v-fa2929ca]{position:absolute;left:0;top:50%;-webkit-transform:translate(-160%,-50%);transform:translate(-160%,-50%)}.h40[data-v-fa2929ca]{height:1.25rem}.maxw280[data-v-fa2929ca]{max-width:100%}.rotate180[data-v-fa2929ca]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.w80[data-v-fa2929ca]{width:80%}.w250[data-v-fa2929ca]{width:15.625rem}.border-radius10[data-v-fa2929ca]{color:#db1013;border-color:#db1013}",""])},gIrh:function(t,e,i){t.exports=i.p+"img/top2.04ece7f.png"},i8la:function(t,e,i){var s=i("DFfH");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("6bcf1ea5",s,!1,{sourceMap:!1})},l0RI:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".shop-list-icon[data-v-3629257b]{width:3.375rem;height:1.0625rem;position:absolute;margin-top:-.53125rem;margin-left:-.125rem}.shop-list-icon img[data-v-3629257b]{width:100%;height:100%;max-width:100%;max-height:100%}",""])},lmvv:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.wechat,expression:"wechat"}],staticClass:"shop-list-icon"},[e("img",{attrs:{src:i("1yK0")}})])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},"o+1Y":function(t,e,i){var s=i("fB/o");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("87c54dc6",s,!1,{sourceMap:!1})},oXnF:function(t,e,i){"use strict";var s=i("DHvs");e.a={data:function(){return{wechat:!1}},mounted:function(){this.wechat=Object(s.i)()}}},pGm6:function(t,e,i){t.exports=i.p+"img/top1.3946cb2.png"},rsPy:function(t,e,i){"use strict";var s=i("8S/d"),o=i("EhB4"),n=i("DHvs");e.a={data:function(){return{discounts:[{discount:"7折买单"},{discount:"6折买单"}],headImg:[{imgUrl:i("c0vo")}],scroll:"",shop_couponPre:[],isAll:!1,showLength:2}},props:{shop:{type:Object,required:!0},isParent:{type:Boolean},price:{type:String},showCouponInfo:{type:Boolean,default:!1}},components:{Star:s.a,FdIcon:o.a},mounted:function(){if(this.shop.shop_coupon){if(this.shop.is_foodie_day&&Object(n.i)()&&this.shop.is_foodie_festival)for(var t=0;t<this.shop.shop_coupon.length;t++){this.shop.shop_coupon[t].is_foodie_festival||(this.shop.shop_coupon.splice(t,1),t--)}var e=!1,i=!1,s="";this.shop.shop_coupon[0]&&"0"===this.shop.shop_coupon[0].commodity_type?e=!0:i=!0;for(var o=0;o<this.shop.shop_coupon.length;o++)"0"===this.shop.shop_coupon[o].commodity_type?(e||0===o||(s=this.shop.shop_coupon.splice(o,1),this.shop.shop_coupon.splice(0,0,s[0])),e=!0):(i||0===o||(s=this.shop.shop_coupon.splice(o,1),this.shop.shop_coupon.splice(0,0,s[0])),i=!0);this.showLength=e&&i?2:1}this.shop_couponPre=this.shop.shop_coupon&&this.shop.shop_coupon.slice(0,this.showLength)},computed:{tags:function(){return!!this.shop.tag&&this.shop.tag.split(",")},isShowVipDiscountScale:function(){return!!this.shop.discount_info&&(!!this.shop.discount_info.vip&&(!(parseFloat(this.shop.discount_info.vip.scale)<=0)&&!(parseFloat(this.shop.discount_info.vip.scale)>=10)))}},methods:{showToggle:function(){this.isAll?this.shop_couponPre=this.shop.shop_coupon&&this.shop.shop_coupon.slice(0,this.showLength):this.shop_couponPre=this.shop.shop_coupon,this.isAll=!this.isAll},goCoupon:function(t){this.$emit("toChild"),this.$router.push({path:"/foodCoupon",query:{id:t.id}})},goShop:function(){this.$router.push({path:"/shop_"+this.shop.id})}}}},rsZd:function(t,e,i){t.exports=i.p+"img/222.83fceae.png"},"w9w+":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-white"},[(t.expend.length>0||t.isshow)&&t.show?i("div",{staticClass:"mask",on:{click:t.close,touchmove:function(t){t.preventDefault()}}}):t._e(),t.filters.length>0?i("div",{staticClass:"bg-white flex-wrp relative ptb10 w100",class:[(t.expend.length>0||t.isshow)&&t.show?"fixed-top":""]},t._l(t.filters,function(e,s){return i("div",{staticClass:"flex-item flex-wrp ptb10 flex-center filter-cate",class:{"cate-active":t.category_id==s},on:{click:function(i){t.showFilter(e,0,s),t.onFetch(s)}}},[i("div",{staticClass:"size26 text-center compulsory-row-one w100 flex-wrp flex-align-center"},[t._v("\n        "+t._s(t.label[s])+"\n        "),t.isshow?[t.fexpend.length>0&&t.fexpend[0].key===e.key?i("i",{staticClass:"i i-arrow-down color3 size22 pl5",class:t.show?"rotate180":""}):i("i",{staticClass:"i i-arrow-down size22 pl5",class:t.category_id==s?"color3":"color5"})]:[t.expend.length>0&&t.expend[0].key===e.key?i("i",{staticClass:"i i-arrow-down color3 size22 pl5",class:t.show?"rotate180":""}):i("i",{staticClass:"i i-arrow-down size22 pl5",class:t.category_id==s?"color3":"color5"})]],2)])}),0):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showConvenient,expression:"showConvenient"}],staticClass:"convenient-box"},t._l(t.conFilters,function(e,s){return i("div",{key:s,staticClass:"convenient-filter",class:[e.value===t.conFilter.value&&e.key===t.conFilter.key?"convenient-filter-active":""],on:{click:function(i){return i.target!==i.currentTarget?null:t.convenientFilter(e)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])}),0),t.expend.length>0&&t.show?i("div",{staticClass:"filter-wrap relative overflow-auto-y w100",staticStyle:{height:"368px",position:"fixed","z-index":"1002",top:"37px"},attrs:{id:"expendList"}},[i("div",{staticClass:"flex-wrp bg-white size26 w100 filter-box"},t._l(t.expend,function(e,s){return i("div",{key:s,staticClass:"flex-item",class:{"bg-grey":s+1<t.expend.length}},t._l(e.items,function(e){return i("div",{staticClass:"flex-wrp flex-align-center pd30",class:{color3:t.filter[e.key]&&t.filter[e.key]===e.value&&!t.conFilter,"bg-white":t.expend.length>s+1&&e.value===t.expend[s+1].value},on:{click:function(i){return t.showFilter(e,s+1)}}},[i("span",{staticClass:"flex-item"},[t._v(t._s(e.label))]),e.items?i("i",{staticClass:"i i-arrow-right-o size24 color4"}):t._e()])}),0)}),0)]):t._e(),t.isshow?i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"filter-box-comix weui-animate-fade-in",staticStyle:{"z-index":"1000"}},[i("div",{staticClass:"bg-white size26 w100"},[t._l(t.fexpend[0].items,function(e,s){return i("div",{key:s,staticClass:"pl30"},[i("div",{staticClass:"ptb15 size22 color44"},[t._v(t._s(e.label))]),i("div",{staticClass:"flex-wrp flex-flow-row width96"},t._l(e.items,function(e,s){return i("span",{staticClass:"flex-wrp flex-center pl20 pr20 mb15 mr10 dish width160",class:e.checked?"ischeck":"nocheck"},[i("label",{staticClass:"size26"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"n.checked"}],attrs:{type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(e.checked)?t._i(e.checked,e.value)>-1:e.checked},on:{change:function(i){var s=e.checked,o=i.target,n=!!o.checked;if(Array.isArray(s)){var a=e.value,r=t._i(s,a);o.checked?r<0&&t.$set(e,"checked",s.concat([a])):r>-1&&t.$set(e,"checked",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(e,"checked",n)}}}),t._v(t._s(e.label))])])}),0)])}),i("div",{staticClass:"flex-wrp flex-between mt15 plr30 w100 bordertop1"},[i("div",{staticClass:"width50 height80 lineheight80 textcenter",on:{click:function(e){return t.complexFilter("reset")}}},[t._v("重置")]),i("div",{staticClass:"width50 height80 lineheight80 textcenter color3 borderleft1",on:{click:function(e){return t.complexFilter("submit")}}},[t._v("完成")])])],2)]):t._e()])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},xg5s:function(t,e,i){t.exports=i.p+"img/top4.9335c84.png"}});