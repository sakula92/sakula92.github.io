webpackJsonp([45],{"2GES":function(e,t,i){"use strict";var s=i("mvHQ"),a=i.n(s),o=i("Dd8w"),r=i.n(o),n=i("Xxa5"),l=i.n(n),c=i("exGp"),u=i.n(c),d=i("NYxO"),p=i("RWSh"),v=i("DHvs"),f=i("GWAw");t.a={head:{title:"团购下单"},data:function(){return{phoneNumber:"",wxdata:{},isSaving:!1,quantity:1,order:{},couponShow:!1,doCouponList:[],notCouponList:[],couponData:"",selectMoney:"",redMoneyID:"",noUseCoupon:!1,isWeixin:!1}},asyncData:function(){var e=u()(l.a.mark(function e(t){var i,s,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/groupbuy/"+t.query.id,null,t);case 2:if(i=e.sent,s=i.data,200!==(a=i.status)||!s.groupbuy){e.next=10;break}return s.groupbuy.delivery||1!==t.store.state.groupbuy.delivery||t.store.dispatch("groupbuy/setDelivery",0),e.abrupt("return",{groupbuy:s.groupbuy});case 10:return e.abrupt("return",t.error({statusCode:a,message:"商品不存在或已下架"}));case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),components:{Stepper:f.a},computed:r()({},Object(d.mapState)({user:function(e){return e.user.info},address:function(e){return e.groupbuy.address}}),{delivery:{get:function(){return this.$store.state.groupbuy.delivery},set:function(e){this.setDelivery(e)}},remark:{get:function(){return this.$store.state.groupbuy.remark},set:function(e){this.setRemark(e)}},fee:function(){return this.groupbuy.vip_info&&this.user.is_vip?this.groupbuy.vip_info.fee:this.groupbuy.gb_price},maxQuantity:function(){return parseInt(this.groupbuy.stock)>parseInt(this.groupbuy.purchase_limit)?parseInt(this.groupbuy.purchase_limit):parseInt(this.groupbuy.stock)}}),mounted:function(){this.getCouponList()},methods:r()({},Object(d.mapActions)({setDelivery:"groupbuy/setDelivery",setRemark:"groupbuy/setRemark"}),{selectCoupon:function(e,t){var i=this;console.log(e,"iii++="),i.doCouponList.forEach(function(s,a){a==t?(s.selectImgShow=!s.selectImgShow,i.noUseCoupon=!1,s.selectImgShow?(i.selectMoney=e.TICKET_AMOUNT,i.redMoneyID=e.TICKET_ID):(i.selectMoney="",i.redMoneyID="",i.noUseCoupon=!0)):s.selectImgShow=!1});var s=i.doCouponList;i.doCouponList=JSON.parse(a()(s));var o=i.selectMoney;setTimeout(function(){i.couponShow=!1,i.selectMoney=o},500)},couponDialog:function(){console.log(this.doCouponList,"333"),this.couponShow=!0},closeDialog:function(){this.couponShow=!1},getCouponList:function(){var e=u()(l.a.mark(function e(){var t,i,s=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/red_coupon/getOrderCouponsNew",{order_amount:this.fee*this.quantity,type:"0",id:this.groupbuy.id});case 2:t=e.sent,i=t.data,200===t.status&&(Object(v.i)()?this.isWeixin=!1:this.isWeixin=!0,this.couponData=i.data,this.doCouponList=i.data.do,this.doCouponList.length>0&&(this.selectMoney=this.doCouponList[0].TICKET_AMOUNT,this.redMoneyID=this.doCouponList[0].TICKET_ID,this.doCouponList.forEach(function(e){e.selectImgShow=!1,s.doCouponList[0].selectImgShow=!0})),this.notCouponList=i.data.not,console.log(this.doCouponList,"444"));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submitOrder:function(){var e=u()(l.a.mark(function e(){var t,i,s,a,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(2!=(t=this).user.login_status){e.next=5;break}Object(v.d)()?window.demo&&window.demo.openRealName():Object(v.e)()&&(window.location.href="objc://openRealName:/"),e.next=28;break;case 5:if(1!==t.delivery||t.address){e.next=8;break}return weui.alert("请选择收货地址"),e.abrupt("return");case 8:return t.isSaving=!0,i={groupbuy_id:t.groupbuy.id,quantity:t.quantity,delivery:t.delivery,remark:t.remark,ticket_id:t.redMoneyID||""},t.delivery&&t.address&&(i.address_id=t.address.id),e.next=13,p.a.post("/groupbuy/order",i);case 13:if(s=e.sent,a=s.data,200!==(o=s.status)||"SUCCESS"!==a.code){e.next=27;break}if(!Object(v.i)()){e.next=21;break}location.href="/payment?id="+a.order_id,e.next=25;break;case 21:return e.next=23,p.a.post("/user/order/pay",{order_id:a.order_id});case 23:"SUCCESS"===(r=e.sent).data.code?(t.isSaving=!1,t.order=r.data,t.$nextTick(function(){document.getElementById("zybank").submit()})):(weui.alert("支付失败"),t.isSaving=!1);case 25:e.next=28;break;case 27:200===o&&"3001"===a.code&&Object(v.i)()?(weui.confirm("请先绑定您的手机号",{title:"温馨提示",buttons:[{label:"取消",type:"default"},{label:"确定",type:"primary",onClick:function(){t.$router.push("/bindphone")}}]}),t.isSaving=!1):-1===a.err_code?weui.alert(a.msg,function(){t.$router.push({path:"/user_order_detail",query:{id:a.order_id}})},{title:"下单失败"}):(t.isSaving=!1,weui.alert(a.msg,{title:"温馨提示"}));case 28:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),setQuantity:function(e){this.selectMoney="",this.quantity=e,this.redMoneyID="",this.getCouponList()}})}},G8PW:function(e,t,i){var s=i("dKli");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("016f01b1",s,!1,{sourceMap:!1})},GWAw:function(e,t,i){"use strict";var s=i("e1sg"),a=i("WKtL"),o=i("VU/8")(s.a,a.a,!1,null,null,null);o.options.__file="components/Stepper.vue",t.a=o.exports},HuPf:function(e,t,i){e.exports=i.p+"img/useEnd.c9ca803.png"},Or4e:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"weui-cells mt0"},[s("div",{staticClass:"weui-cell flex-align-stretch"},[s("base-img",{staticClass:"thumb",attrs:{src:e.groupbuy.thumb}}),s("div",{staticClass:"flex-item w0 flex-wrp flex-cell flex-between pl15"},[s("div",{staticClass:"color2 size28"},[e._v(e._s(e.groupbuy.title))]),s("div",{staticClass:"flex-wrp flex-align-center lh100 vip-box"},[s("div",{staticClass:"color3 size32"},[s("span",[e._v("￥"+e._s(e.fee))])]),s("div",{staticClass:"color4 size28 pl40"},[e._v("原价：￥"+e._s(e.groupbuy.price))])])])],1),s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[e._v("数量")]),s("div",{staticClass:"weui-cell__ft"},[s("stepper",{attrs:{value:e.quantity,max:e.maxQuantity,min:1},on:{onChange:e.setQuantity}})],1)]),e.isWeixin?s("a",{staticClass:"weui-cell weui-cell_access",on:{click:e.couponDialog}},[s("div",{staticClass:"weui-cell__bd"},[e._v("优惠券")]),s("div",{staticStyle:{color:"#E87415"}},[e.selectMoney&&!e.noUseCoupon?s("span",[e._v("-￥"+e._s(e.selectMoney))]):e._e(),e.selectMoney||e.noUseCoupon?e._e():s("span",[e._v("暂无可用")]),e.noUseCoupon&&!e.selectMoney?s("span",[e._v("暂不使用")]):e._e(),e._m(0)])]):e._e()]),e.isWeixin?s("div",{staticStyle:{color:"#E87415","font-size":"13px","margin-left":"14px",height:"36px","line-height":"36px"}},[e._v("\n        优惠券活动仅支持中原银行卡支付使用\n    ")]):e._e(),s("div",{staticStyle:{position:"relative",overflow:"hidden","background-color":"#fff"}},[s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[e._v("小计")]),s("div",{staticClass:"weui-cell__ft color3"},[e._v("￥"+e._s(e._f("number_format")(e.fee*e.quantity-e.selectMoney)))])])]),s("div",{staticClass:"weui-cells"},[e.groupbuy.delivery?s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[e._v("配送方式")]),s("div",{staticClass:"weui-cell__ft weui-cells_checkbox flex-wrp"},[s("label",{staticClass:"flex-wrp weui-check__label",attrs:{for:"s11"}},[s("div",{staticClass:"weui-cell__hd"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delivery,expression:"delivery",modifiers:{number:!0}}],staticClass:"weui-check",attrs:{type:"radio",name:"delivery",id:"s11"},domProps:{value:1,checked:e._q(e.delivery,e._n(1))},on:{change:function(t){e.delivery=e._n(1)}}}),s("i",{staticClass:"weui-icon-checked"})]),s("div",{staticClass:"weui-cell__bd"},[e._v("送货上门")])]),s("label",{staticClass:"flex-wrp weui-check__label",attrs:{for:"s12"}},[s("div",{staticClass:"weui-cell__hd"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delivery,expression:"delivery",modifiers:{number:!0}}],staticClass:"weui-check",attrs:{type:"radio",name:"delivery",id:"s12"},domProps:{value:0,checked:e._q(e.delivery,e._n(0))},on:{change:function(t){e.delivery=e._n(0)}}}),s("i",{staticClass:"weui-icon-checked"})]),s("div",{staticClass:"weui-cell__bd"},[e._v("到店自提")])])])]):e._e(),1===e.delivery?s("nuxt-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{path:"/user_addresses",query:{act:"choose",module:"groupbuy"}}}},[e.address?s("div",{staticClass:"weui-cell__bd"},[s("div",[e._v(e._s(e.address.realname)+" "+e._s(e.address.mobile))]),s("div",[e._v(e._s(e.address.address))])]):s("div",{staticClass:"weui-cell__bd"},[e._v("请选择收货地址")]),s("div",{staticClass:"weui-cell__ft"})]):e._e(),1===e.delivery?s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],staticClass:"weui-textarea bg-white size32",attrs:{placeholder:"请填写附加要求，我们会尽快安排",rows:"3"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})])]):e._e()],1),s("div",{staticClass:"fixed-bottom pd30"},[s("base-button",{attrs:{loading:e.isSaving,enabled:!e.isSaving},on:{click:e.submitOrder}},[e._v("提交订单")])],1),s("form",{staticStyle:{display:"none"},attrs:{action:e.order.url,method:"post",id:"zybank"}},[s("input",{attrs:{type:"hidden",id:"plain",name:"Plain"},domProps:{value:e.order.data&&e.order.data.Plain}}),s("input",{attrs:{type:"hidden",name:"Signature"},domProps:{value:e.order.data&&e.order.data.Signature}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.couponShow,expression:"couponShow"}],staticClass:"mask1 flex-wrp flex-center color48",staticStyle:{display:"none"}},[s("div",{staticClass:"bg-white",staticStyle:{width:"100%",height:"500px",bottom:"0",position:"absolute",left:"0"}},[s("div",{staticStyle:{"border-bottom":"1px solid #CECECE",height:"40px","line-height":"40px","text-align":"center"}},[s("span",{staticStyle:{position:"absolute",left:"3vw",width:"4vw"},on:{click:e.closeDialog}},[s("img",{attrs:{src:i("TvRB")}})]),s("span",{staticStyle:{"font-weight":"bold"}},[e._v("优惠券")])]),s("div",{staticStyle:{width:"100%",position:"absolute",overflow:"scroll","margin-top":"0px",height:"calc(100% - 40px)"}},[s("div",{staticStyle:{padding:"0 2vw"}},e._l(e.doCouponList,function(t,a){return e.couponData.do_count>0?s("div",{key:a,staticClass:"flex-wrp relative bg-white bgImgCoupon",staticStyle:{padding:"0 2vw","margin-top":"4vw",height:"25vw"},on:{click:function(i){return e.selectCoupon(t,a)}}},[s("div",{staticClass:"flex-item flex-wrp flex-cell flex-center relative box3",staticStyle:{color:"white",position:"relative"}},[s("div",{staticClass:"flex-wrp flex-align-center pt10",staticStyle:{position:"absolute",top:"4vw"}},[s("div",{staticClass:"flex-wrp flex-end"},[s("div",{staticClass:"size60"},[s("span",{staticStyle:{"font-size":"12px"}},[e._v("￥")]),s("span",{staticStyle:{"font-size":"30px"}},[e._v(e._s(t.TICKET_AMOUNT))])])])]),s("div",{staticClass:" pt10",staticStyle:{position:"absolute",bottom:"5vw","font-size":"11px"}},[s("span",[e._v("满"+e._s(t.LOWEST_AMOUNT)+"可用")])])]),s("div",{staticClass:"pd20",style:{flex:2}},[s("div",{staticClass:"flex-wrp flex-align-center pl20"},[s("div",{staticClass:"color2 size3 ptb20 tips"},[s("span",[e._v(e._s(t.TICKET_REMARK))])])]),s("div",{staticClass:"color5 size26 pt5 pl20"},[s("span",[e._v("有效期至："+e._s(t.END_TIME.replace(/\//,"-").substring(0,7))+"-"+e._s(t.END_TIME.replace(/\//,"-").substring(8,11)))])])]),s("div",{staticClass:"flex-wrp ",staticStyle:{width:"60px","text-align":"center",position:"relative"}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.selectImgShow,expression:"doCoupon.selectImgShow"}],staticClass:"selectImg",attrs:{src:i("TmWz")}})])]):e._e()}),0),e.couponData.not_count>0?s("div",{staticStyle:{width:"100%"}},[e._m(1),s("div",{staticStyle:{padding:"0 2vw"}},e._l(e.notCouponList,function(t,i){return s("div",{key:i,staticClass:"flex-wrp relative bg-white bgImgCouponEnd",staticStyle:{"margin-top":"4vw",height:"25vw"}},[s("div",{staticClass:"flex-item flex-wrp flex-cell flex-center relative box3",staticStyle:{color:"white",position:"relative"}},[s("div",{staticClass:"flex-wrp flex-align-center pt10",staticStyle:{position:"absolute",top:"4vw"}},[s("div",{staticClass:"flex-wrp flex-end"},[s("div",{staticClass:"size60"},[s("span",{staticStyle:{"font-size":"12px"}},[e._v("￥")]),s("span",{staticStyle:{"font-size":"30px"}},[e._v(e._s(t.TICKET_AMOUNT))])])])]),s("div",{staticClass:" pt10",staticStyle:{position:"absolute",bottom:"5vw","font-size":"11px"}},[s("span",[e._v("满"+e._s(t.LOWEST_AMOUNT)+"可用")])])]),s("div",{staticClass:"pd20",style:{flex:1.7}},[s("div",{staticClass:"flex-wrp flex-align-center pl20"},[s("div",{staticClass:"color2 size3 ptb20 tips"},[s("span",[e._v(e._s(t.TICKET_REMARK))])])]),s("div",{staticClass:"color5 size26 pt5 pl20"},[s("span",[e._v("有效期至："+e._s(t.END_TIME.replace(/\//,"-").substring(0,7))+"-"+e._s(t.END_TIME.replace(/\//,"-").substring(8,11)))])])]),s("div",{staticClass:"flex-wrp ",staticStyle:{width:"60px","text-align":"center",position:"relative"}})])}),0)]):e._e()])])])])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("img",{staticStyle:{width:"10px",height:"10px","margin-left":"10px"},attrs:{src:i("gEd7")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center","margin-top":"2vw",width:"100%"}},[t("p",{staticStyle:{color:"black",display:"inline-block",width:"100%"}},[t("span",{staticStyle:{"border-bottom":"1px solid #DEDEDE",display:"inline-block",width:"28vw","margin-bottom":"5px"}}),t("span",{staticStyle:{color:"#CDCDCD",padding:"0 3vw"}},[this._v("不可使用优惠券")]),t("span",{staticStyle:{"border-bottom":"1px solid #DEDEDE",width:"calc(100% - 72vw)",display:"inline-block","margin-bottom":"5px"}})])])}];s._withStripped=!0;var o={render:s,staticRenderFns:a};t.a=o},P9TZ:function(e,t,i){e.exports=i.p+"img/couponBg.eec18da.png"},TmWz:function(e,t,i){e.exports=i.p+"img/select.f599870.png"},TvRB:function(e,t,i){e.exports=i.p+"img/closeDialog.986a656.png"},WKtL:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex-wrp flex-align-center"},[i("div",{staticClass:"ptb5 plr20 border border-radius5",on:{click:function(t){return e.change(e.value-1)}}},[e._v("-")]),i("div",{staticClass:"plr30"},[e._v(e._s(e.number))]),i("div",{staticClass:"ptb5 plr20 border border-radius5",on:{click:function(t){return e.change(e.value+1)}}},[e._v("+")])])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a},ZgBz:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("2GES"),a=i("Or4e"),o=!1;var r=function(e){o||i("G8PW")},n=i("VU/8")(s.a,a.a,!1,r,"data-v-4cfd498e",null);n.options.__file="pages/groupbuy/pay.vue",t.default=n.exports},dKli:function(e,t,i){var s=i("kxFB");(e.exports=i("FZ+f")(!1)).push([e.i,".model[data-v-4cfd498e]{width:12.5rem;margin:0 auto;padding:1.375rem 0;position:relative;margin-top:9.375rem;background-color:#fff;border-radius:.3125rem}.input_row[data-v-4cfd498e]{padding:0 0 0 .3125rem;text-align:center}.input_row>input[data-v-4cfd498e]{border:.03125rem solid #ddd;height:1.25rem;font-size:.75rem}.btn1[data-v-4cfd498e],.btn2[data-v-4cfd498e]{display:inline-block;height:1.5625rem;width:3.125rem;margin:.625rem .625rem 0}.bgImgCoupon[data-v-4cfd498e]{background:url("+s(i("P9TZ"))+") no-repeat;background-size:100% 100%}.bgImgCoupon[data-v-4cfd498e],.bgImgCouponEnd[data-v-4cfd498e]{-webkit-box-shadow:.3125rem .3125rem .03125rem #fff;box-shadow:.3125rem .3125rem .03125rem #fff}.bgImgCouponEnd[data-v-4cfd498e]{background:url("+s(i("HuPf"))+") no-repeat;background-size:100% 100%}.selectImg[data-v-4cfd498e]{width:1.25rem;height:1.25rem;position:absolute;left:0;top:0;right:0;bottom:0;margin:auto}.model_span[data-v-4cfd498e]{position:absolute;top:-.46875rem;right:-.3125rem;width:1.5625rem;height:1.5625rem;background-color:#fff;border-radius:50%;text-align:center}.thumb[data-v-4cfd498e]{width:5.9375rem;height:4.6875rem}",""])},e1sg:function(e,t,i){"use strict";t.a={data:function(){return{number:this.value}},props:{value:{type:Number,required:!0},max:{type:Number,required:!0},min:{type:Number,required:!0}},methods:{change:function(e){return e>this.max?weui.topTips("最大不超过"+this.max):e<this.min?weui.topTips("最小不低于"+this.min):(this.number=e,void this.$emit("onChange",e))}}}},gEd7:function(e,t,i){e.exports=i.p+"img/yhqJT.bcc0947.png"}});