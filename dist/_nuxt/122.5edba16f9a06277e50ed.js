webpackJsonp([122],{DPYS:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#searchBar[data-v-1955ebbf],body[data-v-1955ebbf]{background-color:#fff}.weui-search-bar[data-v-1955ebbf]:after{border:none}.province-item[data-v-1955ebbf]{border:.03125rem solid #d8d8d8;margin-left:.3%}.city-item[data-v-1955ebbf]{border-color:#ccc;margin-left:.3%}.w33[data-v-1955ebbf]{width:30%;margin-right:3%}.border-b[data-v-1955ebbf]{border-bottom:.0625rem solid #d8d8d8}.plr30[data-v-1955ebbf]{min-height:100vh;background-color:#fff}.bg-f5[data-v-1955ebbf]{background-color:#f5f5f5}",""])},DRRp:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"plr30"},[i("div",{staticClass:"ptb20 border-b mr30 size36"},[i("i",{staticClass:"z z-location color11 pr10 size32"}),t._v(t._s(t.currentCity.city_name))]),i("div",{staticClass:"size28 color44 pt30 pb10"},[t._v("全部城市")]),t._l(t.cityGroup,function(e,n){return i("div",{key:n,staticClass:"flex-wrp flex-flow-row"},t._l(e,function(e,r){return i("div",{key:r,staticClass:"w33  text-center size28 color5 ptb20 mt20 bg-white province-item",class:{border:n===t.current.index&&t.current.name===e.name},on:{click:function(i){return t.goback(e)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),0)})],2)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},Sliq:function(t,e,i){var n=i("DPYS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("200abeb8",n,!1,{sourceMap:!1})},jZvk:function(t,e,i){"use strict";var n,r=i("bOdI"),c=i.n(r),o=i("mvHQ"),a=i.n(o),s=i("Xxa5"),u=i.n(s),d=i("exGp"),f=i.n(d),y=i("Dd8w"),l=i.n(y),b=i("vTey"),m=i.n(b),h=i("RWSh"),p=i("NYxO");e.a=(n={data:function(){return{citys:[],provinces:[],current:{},keyword:"",history:[],historyGroup:[]}},computed:l()({},Object(p.mapState)({agentCity:function(t){return t.session.agentCity},locationInfo:function(t){return t.session.locationInfo},config:function(t){return t.config}})),asyncData:function(){var t=f()(u.a.mark(function t(e){var i,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/geo/city",null,e);case 2:if(i=t.sent,n=i.data,200!==i.status||"SUCCESS"!==n.code){t.next=7;break}return t.abrupt("return",{citys:n.data,currentCity:e.query.current});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},c()(n,"computed",{cityGroup:function(){return m()(this.provinces,3)}}),c()(n,"mounted",function(){weui.searchBar("#searchBar"),this.provinces=this.citys}),c()(n,"watch",{keyword:function(t){this.provinces=t?this.citys.map(function(e){if(e.name.includes(t)||t.includes(e.name))return e;var i=e.list.filter(function(e){return e.name.includes(t)||t.includes(e.name)});return i.length>0?l()({},e,{list:i}):void 0}).filter(function(t){return t}):this.citys}}),c()(n,"methods",{getHistory:function(){var t=this;h.a.webGet("/v3/home/history_list",{},function(e){t.history=e.data.data,t.historyGroup=m()(t.history,3)},function(t){console.log(t)})},addHistory:function(t){h.a.webGet("/v3/home/history",{city_id:t.city_id},function(){},function(t){console.log(t)})},goback:function(t){this.addHistory(t),sessionStorage.setItem("agent_city",a()({city_id:t.city_id,city_name:t.name,city_code:t.code,district_id:0,district_name:t.name})),this.$store.dispatch("session/setAgentCity",{city_id:t.city_id,city_name:t.name,city_code:t.code,district_id:0,district_name:t.name});var e="";e="buying"===this.$route.query.name?"/buying":"actSearch"===this.$route.query.name?"/buying_newActivity":"directCoupon"===this.$route.query.name?"/directCoupon":"/",this.$router.replace({path:e,query:{}})},onChooseProvince:function(t,e){this.current.name!==t.name?(this.current=t,this.current.index=e):this.current={}},stateagentCity:function(t,e){sessionStorage.setItem("agent_city",a()({city_id:e.id,city_name:e.name,city_code:e.code,district_id:t.id,district_name:t.name})),this.$store.dispatch("session/setAgentCity",{city_id:e.id,city_name:e.name,city_code:e.code,district_id:t.id,district_name:t.name}),this.goback(t,e)}}),n)},jx9a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("jZvk"),r=i("DRRp"),c=!1;var o=function(t){c||i("Sliq")},a=i("VU/8")(n.a,r.a,!1,o,"data-v-1955ebbf",null);a.options.__file="pages/citys.vue",e.default=a.exports}});