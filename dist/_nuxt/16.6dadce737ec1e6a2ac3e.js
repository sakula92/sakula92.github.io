webpackJsonp([16],{"+J53":function(e,t,r){"use strict";var o=r("CHyu");t.a={props:{modal:{default:!0},showClose:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},closeOnClickModal:{default:!0},closeOnPressEscape:{default:!0},inputType:{type:String,default:"text"},boxType:{type:String,default:""},confirmButtonText:{type:String,default:"确定"},cancelButtonText:{type:String,default:"取消"}},created:function(){},computed:{confirmButtonClasses:function(){var e="msgbox-btn msgbox-confirm";return this.confirmButtonClass&&"undefined"!==this.confirmButtonClass&&(e+=" "+this.confirmButtonClass),this.confirmButtonHighlight&&(e+=" msgbox-confirm-highlight"),e},cancelButtonClasses:function(){var e="msgbox-btn msgbox-cancel";return this.cancelButtonClass&&"undefined"!==this.cancelButtonClass&&(e+=" "+this.cancelButtonClass),this.cancelButtonHighlight&&(e+=" msgbox-cancel-highlight"),e}},methods:{doClose:function(){var e=this;this.value=!1,this._closing=!0,this.onClose&&this.onClose(),setTimeout(function(){e.modal&&"hidden"!==e.bodyOverflow&&(document.body.style.overflow=e.bodyOverflow,document.body.style.paddingRight=e.bodyPaddingRight),e.bodyOverflow=null,e.bodyPaddingRight=null},200),this.opened=!1,this.transition||this.doAfterClose()},handle:function(){this.value=!1},handleAction:function(e){if("prompt"!==this.$type||"confirm"!==e||this.validate()){var t=this.callback;this.value=!1,t(e),o.a.backBtn()}},validate:function(){if("prompt"===this.$type){var e=this.inputPattern;if(e&&!e.test(this.inputValue||""))return this.editorErrorMessage=this.inputErrorMessage||"输入的数据不合法!",this.$refs.input.classList.add("invalid"),!1;var t=this.inputValidator;if("function"==typeof t){var r=t(this.inputValue);if(!1===r)return this.editorErrorMessage=this.inputErrorMessage||"输入的数据不合法!",this.$refs.input.classList.add("invalid"),!1;if("string"==typeof r)return this.editorErrorMessage=r,!1}}return this.editorErrorMessage="",this.$refs.input.classList.remove("invalid"),!0},handleInputType:function(e){"range"!==e&&this.$refs.input&&(this.$refs.input.type=e)}},watch:{inputValue:function(){"prompt"===this.$type&&this.validate()},value:function(e){var t=this;this.handleInputType(this.inputType),e&&"prompt"===this.$type&&setTimeout(function(){t.$refs.input&&t.$refs.input.focus()},500)},inputType:function(e){this.handleInputType(e)}},data:function(){return{value:!1,title:"",message:"",code:"",type:"",showInput:!1,inputValue:null,inputPlaceholder:"",inputPattern:null,inputValidator:null,inputErrorMessage:"",showConfirmButton:!0,showCancelButton:!1,showCloseButton:!0,confirmButtonClass:"",confirmButtonDisabled:!1,cancelButtonClass:"",editorErrorMessage:null,callback:null}}}},"3AEh":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white mt20 ml20 mr20 border-radius10",on:{click:function(t){return e.toDetail(e.order)}}},[r("div",{staticClass:"flex-wrp size28 pt20 pb20 ml20 mr20 border-b"},[e.order.subject?r("div",{staticClass:"flex-item flex-wrp w0 color5 compulsory-row-one"},[r("div",{staticClass:"pl10 size32 bold color37"},[e._v(e._s(e.order.subject))])]):r("div",{staticClass:"flex-item"},[e._v(" ")]),r("div",{staticClass:"color3 size24 flex-wrp flex-center"},[e._v(e._s(e.order.status_txt))])]),r("div",{staticClass:"flex-wrp pd20 relative"},[r("div",{staticClass:"placeholder-logo"},[r("base-img",{staticClass:"block border-radius5 img-90",attrs:{src:e.order.thumb}})],1),r("div",{staticClass:"flex-item flex-wrp flex-cell  w0 pl20 size24 color5"},["-2"===e.order.status?r("div",{staticClass:"pb15"},[e._v("退款金额：￥"+e._s(e.order.fee))]):r("div",{staticClass:"pb15"},[e._v("实付：￥"+e._s(e.order.fee))]),e.order.expired_at&&"6"===e.order.status?r("div",[e._v("有效期："+e._s(e.order.expired_at))]):e._e(),!e.order.used_at||"3"!==e.order.status&&"7"!==e.order.status?e._e():r("div",[e._v("使用时间："+e._s(e.order.used_at))]),e.order.refund_at&&"-2"===e.order.status?r("div",[e._v("退款时间："+e._s(e.order.refund_at))]):e._e()]),"1"===e.order.module_id?r("i",{staticClass:"z z-icon-test1 size30 color11"}):"2"===e.order.module_id||"6"===e.order.module_id?r("i",{staticClass:"z z-mai size30 color12"}):"5"===e.order.module_id?r("i",{staticClass:"z z-quan size30 color12"}):r("i",{staticClass:"z z-tuan size30 color11"})]),r("div",{staticClass:"flex-wrp flex-bottom pd20 prela"},[r("div",{staticClass:"block"},[e._v(" ")]),1==e.order.status||-1==e.order.status?r("div",{staticClass:"block ptb5 plr15 border color3 border-radius5 size30 btn-pay min-w150",on:{click:function(t){return t.stopPropagation(),e.deleteOrderPre(e.order.id)}}},[e._v("删除订单")]):e._e(),1==e.order.status||-1==e.order.status?r("div",{staticClass:"block ptb5 plr15 border color1 border-radius5 size30 ml15 min-w150",class:-1==e.order.status?"gray2":"light2",on:{click:function(t){return t.stopPropagation(),e.toPay(e.order)}}},["2"===e.order.module_id?r("span",[e._v("继续买单")]):r("div",[e._v("去支付")])]):e._e(),7==e.order.status?r("div",{staticClass:"block ptb5 plr15 border color1 border-radius5 bg-main size30 btn-comment min-w150",on:{click:function(t){return t.stopPropagation(),e.toComment()}}},[e._v("立即评价")]):e._e(),6==e.order.status?r("div",{staticClass:"block ptb5 plr15 border color3 border-radius5 size30 btn-pay min-w150",on:{click:function(t){return t.stopPropagation(),e.showQRCode()}}},[e._v("付款码")]):e._e(),6!=e.order.status||e.order.wx_coupon_fee>0?e._e():r("div",{staticClass:"block ptb5 plr15 border color1 border-radius5 bg-main size30 btn-comment min-w150 ml15",on:{click:function(t){return t.stopPropagation(),e.toPayMore()}}},[e._v("继续买单")])]),r("form",{staticStyle:{display:"none"},attrs:{action:e.orders.url,method:"post",id:"zybank_"+e.order.id}},[r("input",{attrs:{type:"hidden",id:"plain",name:"Plain"},domProps:{value:e.orders.data&&e.orders.data.Plain}}),r("input",{attrs:{type:"hidden",name:"Signature"},domProps:{value:e.orders.data&&e.orders.data.Signature}})]),r("confirm",{attrs:{ctrlFlag:e.ctrlFlag,message:e.message,confirmText:e.confirmText},on:{confirmFun:function(t){return e.refundSubmitPre()}}}),r("verify-pop-box",{ref:"popBox",attrs:{order:e.order}})],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i},AVSK:function(e,t,r){var o=r("t0+h");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("38037816",o,!1,{sourceMap:!1})},Aotj:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.veri_show,expression:"veri_show"}],on:{click:function(t){return t.stopPropagation(),e.close()}}},[r("div",{staticClass:"veri-popup"},[r("div",{staticClass:"veri-code-box"},[r("div",{staticClass:"veri-code-img"},[r("img",{staticClass:"pay-success-img",attrs:{src:e.order.qr_code}})]),r("div",{staticClass:"flex-wrp flex-align-center flex-between w100 plr30"},[e.order.member_verify?r("div",{class:e.order.wx_coupon_fee>0?"pay-btn":"pay-btn-l",on:{click:function(t){return t.stopPropagation(),e.toCertifyConfirm()}}},[e._v("我要核销")]):e._e(),!e.order.member_verify||e.order.wx_coupon_fee>0?e._e():r("div",{staticClass:"pay-btn-r",on:{click:function(t){return t.stopPropagation(),e.toPayMore()}}},[e._v("继续买单")]),e.order.member_verify||e.order.wx_coupon_fee>0?e._e():r("div",{staticClass:"pay-btn",on:{click:function(t){return t.stopPropagation(),e.toPayMore()}}},[e._v("继续买单")])])]),r("div",{staticClass:"w100 plr30 pt20 pb20 bg-white border-radius10 mt20"},[r("p",{staticClass:"size36 color37 mb10 mt0"},[e._v("操作说明：")]),e.order.member_verify?r("p",{staticClass:"size28 color37 lh44 mtb10"},[e._v("1.该二维码可直接出示给商家，由商家扫码核销;"),r("br"),e._v("2.点击“我要核销”，确认后，表示您已完成本次消费，请将本次成功消费界面出示给商家；"),r("br"),e._v("3.点击“继续买单”，在与商家确认总消费金额后，可同步完成付款码核销与超出消费金额部分的支付。"),r("br")]):r("p",{staticClass:"size28 color37 lh44 mtb10"},[e._v("1.该二维码可直接出示给商家，由商家扫码核销;"),r("br"),e._v("2.点击“继续买单”，在与商家确认总消费金额后，可同步完成付款码核销与超出消费金额部分的支付。"),r("br")])])]),r("div",{staticClass:"veri-overlay",on:{click:function(t){return t.stopPropagation(),e.close()}}}),r("van-dialog",{attrs:{"show-confirm-button":!1},model:{value:e.msgFlag,callback:function(t){e.msgFlag=t},expression:"msgFlag"}},[r("div",{staticClass:"message-box"},[r("div",{staticClass:"message-box-title"},[e._v("温馨提示")]),r("div",{staticClass:"message-box-content"},[e._v("请经过商家同意再点击“确认”按钮，确认后本次消费结束")]),r("div",{staticClass:"w100 text-center mt44 flex-wrp flex-align-center flex-between"},[r("div",{staticClass:"message-btn-cancle",on:{click:function(t){return t.stopPropagation(),e.closeMsg()}}},[e._v("取消")]),r("div",{staticClass:"message-btn-confirm",on:{click:function(t){return e.toCertify()}}},[e._v("确认")])])])])],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i},BJQc:function(e,t,r){"use strict";var o=r("Fd2+"),i=r("DHvs");t.a={props:{order:{type:Object}},data:function(){return{veri_show:!1,msgFlag:!1}},methods:{show:function(){this.veri_show=!0},close:function(){this.veri_show=!1},toCertifyConfirm:function(){this.msgFlag=!0,Object(i.l)("fm_orderClickVerify")},toCertify:function(){var e=this;i.b.post("/v3/member/ticket/verify/"+this.order.code).then(function(t){var r=t.data;2e5===r.code?(Object(o.r)("核销成功！"),Object(i.l)("fm_orderVerified"),e.$router.replace({path:"/pay_result",query:{order_id:e.order.id}})):o.c.alert({title:"温馨提示",message:r.msg})})},toPayMore:function(){this.$router.replace({path:"/pay_more",query:{order_id:this.order.id}})},closeMsg:function(){this.msgFlag=!1}}}},CFpt:function(e,t,r){"use strict";var o=r("Xxa5"),i=r.n(o),a=r("exGp"),n=r.n(a),s=r("Dd8w"),d=r.n(s),c=r("NYxO"),l=r("DHvs"),u=r("JAy8"),f=r("ca6n"),m=r("CHyu");t.a={data:function(){return{ctrlFlag:{val:!1},message:"",confirmText:"确认退款",status:{"-1":{label:"支付超时",style:"bg-warn"},"-2":{label:"已退款",style:"bg-warn"},"-3":{label:"已过期",style:"bg-warn"},0:{label:"已取消",style:"bg-warn"},1:{label:"待支付",style:"bg-main"},2:{label:"已支付",style:"bg-main"},3:{label:"已完成",style:"bg-gray"},4:{label:"待发货",style:"bg-warn"},5:{label:"待收货",style:"bg-warn"},6:{label:"待使用",style:"bg-main"},7:{label:"已完成",style:"bg-gray"},8:{label:"退款中",style:"bg-warn"},9:{label:"退款中",style:"bg-warn"},10:{label:"退款失败",style:"bg-warn"}},orders:{}}},props:{order:{required:!0},index:{type:Number,default:0}},components:{confirm:u.a,VerifyPopBox:f.a},computed:d()({},Object(c.mapState)({user:function(e){return e.user.info},agentCity:function(e){return e.session.agentCity}})),mounted:function(){},methods:{sensData:function(e){Object(l.l)(e)},toComment:function(){Object(l.l)("fm_orderClickAddComment"),this.$router.push({path:"/add_comment",query:{shop_id:this.order.shop_id,module_id:this.order.module_id,target_id:this.order.product_id,order_id:this.order.id}})},toPayMore:function(){Object(l.l)("fm_orderClickPayBill"),this.$router.push({path:"/pay_more",query:{order_id:this.order.id}})},toDetail:function(e){var t=this;console.log(e),["1","5","2"].includes(e.module_id)?-1==e.status?(Object(l.l)("fm_orderClickPay"),Object(m.a)({title:"温馨提示",message:"付款超时，请重新下单购买",showCancelButton:!0,confirmButtonClass:"color11",boxType:"new"}).then(function(r){if("confirm"===r){if("2"===e.module_id&&"-1"===e.status)return;var o="1"==e.module_id?"/buying_"+e.product_id:"/foodCoupon",i="1"==e.module_id?"":e.product_id;console.log(o,i),t.$router.push({path:o,query:"5"===e.module_id?{id:i}:""})}})):this.$router.push({path:"/user_order_detail",query:{id:e.id}}):weui.toast("功能模块已下架")},deleteOrderPre:function(e){var t=this;Object(l.l)("fm_orderClickDelete"),Object(m.a)({title:"温馨提示",message:"确认删除订单",showCancelButton:!0,confirmButtonClass:"color11",boxType:"new"}).then(function(r){"confirm"===r&&t.deleteOrder(e)})},deleteOrder:function(){var e=n()(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.b.delete("/v3/member/order/"+t,{});case 2:200===(r=e.sent).status&&"200000"==r.data.code&&(this.$emit("deleteOrder",this.index),weui.toast("删除成功"));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),refundFun:function(){var e=n()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this,e.next=3,l.b.get("/order/"+this.order.id+"/refund-check",{});case 3:200===(t=e.sent).status&&"SUCCESS"===t.data.code?(console.log(Number(t.data.refund_fee).toFixed(2)),console.log("res.data.refund_fee.toFixed(2)"),this.ctrlFlag.val=!0,this.message="您本次申请退款金额"+Number(t.data.refund_fee).toFixed(2)+"元"):weui.alert(t.data.msg,{title:"温馨提示"});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),refundSubmitPre:function(){this.refundSubmit()},refundSubmit:function(){var e=n()(i.a.mark(function e(){var t,r,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=weui.loading(""),e.next=3,l.b.post("/order/"+this.order.id+"/refund",{});case 3:r=e.sent,t.hide(),200===r.status&&"SUCCESS"===r.data.code?weui.toast("申请成功",function(){o.$router.go(0)}):weui.alert(r.data.msg,{title:"温馨提示"});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),goRefundNotice:function(){this.$router.push({path:"/pay_refund",query:{}})},isShowModuleIcon:function(e){return[1,11,21,22,6].findIndex(function(t){return t===parseInt(e.type)})>-1},toPay:function(){var e=n()(i.a.mark(function e(t){var r,o,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t,"-1"!=(o=this).order.status){e.next=5;break}return o.toDetail(o.order),e.abrupt("return");case 5:if("1"!=o.order.status||"2"!=o.order.module_id){e.next=8;break}return this.$router.replace({path:"/pay_more",query:{order_id:o.order.parent_id}}),e.abrupt("return");case 8:if(2!=o.user.login_status){e.next=12;break}Object(l.d)()?window.demo&&window.demo.openRealName():Object(l.e)()&&(window.location.href="objc://openRealName:/"),e.next=25;break;case 12:if(!Object(l.i)()){e.next=16;break}location.href="/payment?id="+r.id,e.next=25;break;case 16:if("v2"!==this.order.pay_version){e.next=20;break}this.$router.replace({path:"/order_pay",query:{order_id:r.id}}),e.next=25;break;case 20:return a=weui.loading("支付中"),e.next=23,l.b.post("/user/order/pay",{order_id:r.id});case 23:"SUCCESS"===(n=e.sent).data.code?(o.orders=n.data,o.$nextTick(function(){a.hide();var e="zybank_"+r.id;document.getElementById(e).submit()})):(a.hide(),weui.alert("支付失败"));case 25:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),showQRCode:function(){this.$refs.popBox.show(),Object(l.l)("fm_showCoupon",{},{page:"订单列表"})}}}},CHyu:function(e,t,r){"use strict";var o,i,a=r("pFYg"),n=r.n(a),s=r("//Fk"),d=r.n(s),c=r("/5sW"),l=r("Eurh"),u={title:"温馨提示",message:"",code:"",type:"",showInput:!1,showClose:!0,modalFade:!1,lockScroll:!1,closeOnClickModal:!0,inputValue:null,inputPlaceholder:"",inputPattern:null,inputValidator:null,inputErrorMessage:"",showConfirmButton:!0,showCancelButton:!1,confirmButtonPosition:"right",confirmButtonHighlight:!1,cancelButtonHighlight:!1,confirmButtonText:"确定",cancelButtonText:"取消",confirmButtonClass:"",cancelButtonClass:"",boxType:""},f=function(e){for(var t=1,r=arguments.length;t<r;t++){var o=arguments[t];for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];void 0!==a&&(e[i]=a)}}return e},m=c.default.extend(l.a),p=[],b=function(e){if(o){var t=o.callback;if("function"==typeof t&&(i.showInput?t(i.inputValue,e):t(e)),o.resolve){var r=o.options.$type;"confirm"===r||"prompt"===r?"confirm"===e?i.showInput?o.resolve({value:i.inputValue,action:e}):o.resolve(e):"cancel"===e&&o.reject&&o.reject(e):o.resolve(e)}}},v=function(){if(i||function(){(o=p[0]).options;(i=new m({el:document.createElement("div")})).callback=b}(),(!i.value||i.closeTimer)&&p.length>0){var e=(o=p.shift()).options;for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);void 0===e.callback&&(i.callback=b),["modal","showClose","closeOnClickModal","closeOnPressEscape"].forEach(function(e){void 0===i[e]&&(i[e]=!0)}),document.getElementById("__layout").childNodes[0].appendChild(i.$el),c.default.nextTick(function(){i.value=!0})}},h=function(){console.log("测试"),g.close()},g=function e(t,r){if(document.addEventListener("backbutton",h,!0),"string"==typeof t?(t={title:t},arguments[1]&&(t.message=arguments[1]),arguments[2]&&(t.type=arguments[2])):t.callback&&!r&&(r=t.callback),void 0!==d.a)return new d.a(function(o,i){p.push({options:f({},u,e.defaults||{},t),callback:r,resolve:o,reject:i}),v()});p.push({options:f({},u,e.defaults||{},t),callback:r}),v()};g.setDefaults=function(e){g.defaults=e},g.alert=function(e,t,r){return"object"===(void 0===t?"undefined":n()(t))&&(r=t,t=""),g(f({title:t,message:e,$type:"alert",closeOnPressEscape:!1,closeOnClickModal:!1},r))},g.confirm=function(e,t,r){return"object"===(void 0===t?"undefined":n()(t))&&(r=t,t=""),g(f({title:t,message:e,$type:"confirm",showCancelButton:!0},r))},g.prompt=function(e,t,r){return"object"===(void 0===t?"undefined":n()(t))&&(r=t,t=""),g(f({title:t,message:e,showCancelButton:!0,showInput:!0,$type:"prompt"},r))},g.close=function(){document.removeEventListener("backbutton",h,!0),i&&(i.value=!1,p=[],o=null)},g.backBtn=function(){document.removeEventListener("backbutton",h,!0)},t.a=g},Eurh:function(e,t,r){"use strict";var o=r("+J53"),i=r("Ye+a"),a=!1;var n=function(e){a||r("AVSK")},s=r("VU/8")(o.a,i.a,!1,n,"data-v-43e1d73a",null);s.options.__file="components/MessageBox/ZyMessageBox.vue",t.a=s.exports},IAgW:function(e,t,r){"use strict";var o=r("CFpt"),i=r("3AEh"),a=!1;var n=function(e){a||r("iMfu")},s=r("VU/8")(o.a,i.a,!1,n,"data-v-40711b4c",null);s.options.__file="components/User/Order/List/Item.vue",t.a=s.exports},JAy8:function(e,t,r){"use strict";var o=r("YN/7"),i=r("TIeH"),a=!1;var n=function(e){a||r("WDKs")},s=r("VU/8")(o.a,i.a,!1,n,"data-v-b3f89156",null);s.options.__file="components/confirm.vue",t.a=s.exports},K84M:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".model[data-v-40711b4c]{width:12.5rem;margin:0 auto;padding:1.375rem 0;position:relative;margin-top:9.375rem;background-color:#fff;border-radius:.3125rem}.input_row[data-v-40711b4c]{padding:0 0 0 .3125rem;text-align:center}.input_row>input[data-v-40711b4c]{border:.0625rem solid #ddd;height:1.25rem;font-size:.75rem}.btn1[data-v-40711b4c],.btn2[data-v-40711b4c]{display:inline-block;height:1.5625rem;width:3.125rem;margin:.625rem .625rem 0}.model_span[data-v-40711b4c]{position:absolute;top:-.46875rem;right:-.3125rem;width:1.5625rem;height:1.5625rem;background-color:#fff;border-radius:50%;text-align:center}.btn-comment[data-v-40711b4c],.btn-pay[data-v-40711b4c]{border-color:#f56d23}.bml[data-v-40711b4c]{border:.0625rem solid #f56d23;margin-left:.5rem;text-decoration:none}.bml2[data-v-40711b4c]{border:.0625rem solid #ccc;color:#ccc}.prela[data-v-40711b4c]{position:relative}.iconfl[data-v-40711b4c]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:100%;top:.95rem}.iconfl i[data-v-40711b4c]{position:relative;top:.08rem}.min-w150[data-v-40711b4c]{min-width:4.8125rem;text-align:center}.gray2[data-v-40711b4c]{background:#ccc;border:.0625rem solid #ccc}.light2[data-v-40711b4c]{background:#f56d23}",""])},SuUO:function(e,t,r){"use strict";var o=r("bOdI"),i=r.n(o),a=r("woOf"),n=r.n(a),s=r("Xxa5"),d=r.n(s),c=r("exGp"),l=r.n(c),u=r("DHvs"),f=r("IAgW");t.a={data:function(){return{types:[{id:0,text:"全部"},{id:1,text:"待付款"},{id:2,text:"待使用"},{id:3,text:"待评价"},{id:5,text:"退款"}],orders:[]}},components:{UserOrderListItem:f.a},mounted:function(){},asyncData:function(){var e=l()(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{filter:{type:parseInt(t.query.status||0),limit:10,offset:0}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),watch:{filter:function(){var e=this;this.$nextTick(function(){e.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})}},methods:{sensData:function(e){Object(u.l)(e)},deleteOrder:function(e){var t=this;this.orders.splice(e,1),0==this.orders.length&&this.$nextTick(function(){t.$refs.loadMore.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")})},onFilter:function(e,t){0===t?Object(u.l)("fm_clickOrderAll"):1===t?Object(u.l)("fm_clickOrderUnpaid"):2===t?Object(u.l)("fm_clickOrderToBeUsed"):3===t?Object(u.l)("fm_orderClickToComment"):Object(u.l)("fm_orderClickRefund"),this.orders=[],this.filter=n()({},this.filter,i()({},e,t))},isShowModuleIcon:function(e){return[1,21,22].findIndex(function(t){return t===parseInt(e.type)})>-1},fetchOrders:function(){var e=l()(d.a.mark(function e(){var t,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.get("/v3/member/order",n()({},this.filter,{offset:this.orders.length}));case 2:return t=e.sent,"200000"==(r=t.data).code&&(this.orders=this.orders.concat(r.list||[])),e.abrupt("return",{length:this.orders.length,isMore:(r.list||[]).length>=this.filter.limit});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}},TIeH:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.ctrlFlag.val?o("div",{staticClass:"content"},[o("div",{staticClass:"mask2"}),o("div",{staticClass:"dialog"},[o("div",{staticClass:"title"},[o("strong",[e._v(e._s(e.title))]),o("span",{staticClass:"closeImg",on:{click:function(t){return e.closeDialog()}}},[o("img",{attrs:{src:r("TvRB")}})])]),o("div",{staticClass:"message size28"},[e._v(e._s(e.message))]),o("div",{staticClass:"btn size36"},["1"===e.confiremType?o("div",[o("span",{staticClass:"confiremType1",on:{click:e.confirmFun}},[e._v(e._s(e.confirmText))])]):e._e(),"2"===e.confiremType?o("div",[o("span",{staticClass:"confiremType2"},[e._v(e._s(e.cancelText))]),o("span",{staticClass:"confiremType3"},[e._v(e._s(e.confirmText))])]):e._e()])])]):e._e()};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i},TvRB:function(e,t,r){e.exports=r.p+"img/closeDialog.986a656.png"},VngM:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".content[data-v-b3f89156]{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box}.mask2[data-v-b3f89156]{position:fixed;z-index:1000;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6)}.dialog[data-v-b3f89156]{position:fixed;z-index:5000;width:80%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:.3125rem;overflow:hidden}.title[data-v-b3f89156]{padding:1.3rem 1.6rem .5rem;color:#323232}.message[data-v-b3f89156]{padding:0 1.6rem .8rem;min-height:1.25rem;line-height:1.3;color:#666}.btn[data-v-b3f89156]{padding:.5rem 0;color:#1abc9c;overflow:hidden;text-align:center;border-top:.03125rem solid #ccc}.btn span[data-v-b3f89156]{float:left}.confiremType1[data-v-b3f89156]{width:100%;text-align:center}.confiremType2[data-v-b3f89156]{width:50%;text-align:center}.confiremType3[data-v-b3f89156]{width:50%;text-align:center;color:#333}.closeImg[data-v-b3f89156]{position:absolute;right:.5rem;top:.5rem;width:1rem;height:1rem}",""])},WDKs:function(e,t,r){var o=r("VngM");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("e0b40caa",o,!1,{sourceMap:!1})},"YN/7":function(e,t,r){"use strict";t.a={data:function(){return{timer:"",canClickAgain:!0}},props:{ctrlFlag:{type:Object,default:{val:!1}},title:{type:String,default:"温馨提示"},message:{type:String,default:""},cancelText:{type:String,default:"取消"},cancelFun:{type:Function,default:null},confirmText:{type:String,default:"确认"},confiremType:{type:String,default:"1"}},methods:{closeDialog:function(){this.ctrlFlag.val=!1,console.log("xxxxx",this.ctrlFlag.val)},confirmFun:function(){if(this.ctrlFlag.val=!1,this.canClickAgain){this.canClickAgain=!1;var e=this;this.timer=setTimeout(function(){e.canClickAgain=!0},400),this.$emit("confirmFun")}}}}},"Ye+a":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"msgbox",attrs:{id:"msgbox"}},[r("transition",{attrs:{name:"msgbox-bounce"}},[r("div",{staticClass:"zy-msgbox"},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.showCloseButton,expression:"showCloseButton"}],staticClass:"msgbox-can",on:{click:function(t){return e.handle()}}},[r("i",{staticClass:"iconfont icon-cha"})]),""!==e.title?r("div",{staticClass:"msgbox-header"},[r("div",{staticClass:"msgbox-title size36"},[e._v(e._s(e.title))])]):e._e(),""!==e.message?r("div",{staticClass:"msgbox-content msg-content"},[r("div",{staticClass:"msgbox-message size32",domProps:{innerHTML:e._s(e.message)}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showInput,expression:"showInput"}],staticClass:"msgbox-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"input",attrs:{placeholder:e.inputPlaceholder},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),r("div",{staticClass:"msgbox-errormsg",style:{visibility:e.editorErrorMessage?"visible":"hidden"}},[e._v(e._s(e.editorErrorMessage))])])]):e._e(),e.code?r("div",{staticClass:"msgbox-code size20"},[r("p",[e._v("错误代码："+e._s(e.code))])]):r("div",{staticClass:"msgbox-code size20"}),"new"===e.boxType?r("div",{staticClass:"msgbox-btns-new pl30 pr30 mb30 pt20"},[r("div",{staticClass:"w100 text-center mt44 flex-wrp",class:e.showCancelButton?"flex-align-center flex-between":"flex-center"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showCancelButton,expression:"showCancelButton"}],staticClass:"message-btn-cancle",on:{click:function(t){return t.stopPropagation(),e.handleAction("cancel")}}},[e._v(e._s(e.cancelButtonText))]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmButton,expression:"showConfirmButton"}],staticClass:"message-btn-confirm",on:{click:function(t){return t.stopPropagation(),e.handleAction("confirm")}}},[e._v(e._s(e.confirmButtonText))])])]):r("div",{staticClass:"msgbox-btns"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.showCancelButton,expression:"showCancelButton"}],staticClass:"size28",class:[e.cancelButtonClasses],on:{click:function(t){return e.handleAction("cancel")}}},[e._v(e._s(e.cancelButtonText))]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmButton,expression:"showConfirmButton"}],staticClass:"size28",class:[e.confirmButtonClasses],on:{click:function(t){return e.handleAction("confirm")}}},[e._v(e._s(e.confirmButtonText))])])])])],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i},c4sh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("SuUO"),i=r("ynz/"),a=!1;var n=function(e){a||r("tUx2")},s=r("VU/8")(o.a,i.a,!1,n,"data-v-17a82086",null);s.options.__file="pages/user/order/index.vue",t.default=s.exports},ca6n:function(e,t,r){"use strict";var o=r("BJQc"),i=r("Aotj"),a=!1;var n=function(e){a||r("odjs")},s=r("VU/8")(o.a,i.a,!1,n,"data-v-86922bd6",null);s.options.__file="components/Pay/VerifyPopBox.vue",t.a=s.exports},iMfu:function(e,t,r){var o=r("K84M");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("c7866206",o,!1,{sourceMap:!1})},odjs:function(e,t,r){var o=r("udd4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("f0d00a74",o,!1,{sourceMap:!1})},pWOj:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,'body[data-v-17a82086]{background-color:#fff}.top[data-v-17a82086]{position:fixed;top:0;width:100%;z-index:1000;background-color:#fff;-webkit-box-shadow:0 .03125rem 0 0 #e6e6e6;box-shadow:0 .03125rem 0 0 #e6e6e6}.topbakcground[data-v-17a82086]{height:2.5625rem}.btn-comment[data-v-17a82086]{border-color:#f2a715}.btn-pay[data-v-17a82086]{border-color:#18baf9}.zindex1[data-v-17a82086]{z-index:1}.sort-active[data-v-17a82086]{position:relative}.sort-active[data-v-17a82086]:after{width:80%;left:10%;height:.375rem;background-image:-webkit-gradient(linear,left top,right top,from(#f56d23),to(#fba649));background-image:linear-gradient(90deg,#f56d23,#fba649);position:absolute;display:block;content:"";bottom:27%;z-index:-1}.fixed[data-v-17a82086]{position:absolute;top:0}',""])},"t0+h":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".msgbox[data-v-43e1d73a]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:99999999}.zy-msgbox[data-v-43e1d73a]{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);background-color:#fff;width:85%;border-radius:.25rem;font-size:.5rem;overflow:hidden;-webkit-transition:.2s;transition:.2s}.msgbox-header[data-v-43e1d73a]{margin-top:1.5625rem;text-align:center}.msgbox-title[data-v-43e1d73a]{font-size:.5625rem}.msgbox-content[data-v-43e1d73a]{margin:.46875rem 1.5625rem 1.5625rem;text-align:center;color:#595758;font-size:.375rem}.msgbox-code[data-v-43e1d73a]{width:100%;color:#999;font-size:.75rem;text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .15rem 0 0;display:inline-block}.msgbox-code p[data-v-43e1d73a]{width:67%;float:right;text-overflow:ellipsis;overflow:hidden;height:1.375rem;word-wrap:break-word;white-space:nowrap;padding-right:.3125rem;margin-bottom:0}.msgbox-message[data-v-43e1d73a]{font-size:.4375rem;padding:.9375rem .9375rem 0}.msg-content[data-v-43e1d73a]{margin:.3rem 0 .2rem}.iconfont.icon-cha[data-v-43e1d73a]{font-size:.4375rem}.msgbox-btns[data-v-43e1d73a]{border-top:.0625rem solid #eee}.msgbox-btns-new[data-v-43e1d73a],.msgbox-btns[data-v-43e1d73a]{line-height:2.5rem;text-align:center}.msgbox-btn[data-v-43e1d73a]{color:#666;background:#fff;border:0}.msgbox-can[data-v-43e1d73a]{position:absolute;width:.5rem;height:.5rem;right:0;top:0;text-align:center;color:#999;font-size:.4375rem;margin:.15625rem .3125rem .28125rem}.msgbox-input[data-v-43e1d73a]{padding-top:.46875rem;border:.03125rem solid #dedede;border-radius:.15625rem;padding:.125rem .15625rem;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.msgbox-input[data-v-43e1d73a]:focus,.msgbox-input[data-v-43e1d73a]:invalid{border-color:#ff4949}.msgbox-confirm[data-v-43e1d73a]{width:49%}.msgbox-confirm[data-v-43e1d73a]:active{color:#26a2ff}.msgbox-cancel[data-v-43e1d73a]{color:#666;width:48.9%;border-right:.03125rem solid #ddd}.msgbox-cancel[data-v-43e1d73a]:active{color:#000}.msgbox-bounce-enter[data-v-43e1d73a]{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.msgbox-bounce-leave-active[data-v-43e1d73a]{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}.message-btn-confirm[data-v-43e1d73a]{background:#f56d23;border-radius:.25rem;color:#fff}.message-btn-cancle[data-v-43e1d73a],.message-btn-confirm[data-v-43e1d73a]{height:2.1875rem;line-height:2.1875rem;font-size:1rem;letter-spacing:.1875rem;text-align:center;width:8.125rem}.message-btn-cancle[data-v-43e1d73a]{background:#fff;border:.03125rem solid #f56d23;border-radius:.25rem;color:#f56d23}",""])},tUx2:function(e,t,r){var o=r("pWOj");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("f9f3518a",o,!1,{sourceMap:!1})},udd4:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".veri-code-box[data-v-86922bd6]{border-top:.9375rem solid #f56d23;border-radius:.3125rem;width:100%;background-color:#fff;padding-bottom:.9375rem}.veri-code-img[data-v-86922bd6]{width:100%;text-align:center;margin:1.25rem 0}.veri-code-img img[data-v-86922bd6]{width:10.46875rem;height:10.46875rem}.pay-btn-l[data-v-86922bd6]{height:2.4375rem;width:45%;line-height:2.4375rem;background:#fff;border-radius:.1875rem;border:.03125rem solid #f56d23;font-size:1.125rem;color:#f56d23;letter-spacing:.1875rem;text-align:center}.pay-btn-r[data-v-86922bd6]{width:45%}.pay-btn-r[data-v-86922bd6],.pay-btn[data-v-86922bd6]{height:2.4375rem;line-height:2.4375rem;background:#f56d23;border-radius:.1875rem;font-size:1.125rem;color:#fff;letter-spacing:.1875rem;text-align:center}.pay-btn[data-v-86922bd6]{width:100%}.veri-popup[data-v-86922bd6]{z-index:1019;position:fixed;top:3%;left:5.3%;max-height:80%;width:89.4%;overflow-y:auto;-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-overflow-scrolling:touch}.veri-overlay[data-v-86922bd6]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);z-index:1018}.message-box[data-v-86922bd6]{width:100%;padding:.9375rem;background-color:#fff}.message-box-close[data-v-86922bd6]{position:absolute;top:.625rem;right:.625rem}.message-box-title[data-v-86922bd6]{width:100%;font-size:1.125rem;color:#333;height:1.5625rem;line-height:1.5625rem;letter-spacing:0;text-align:center}.message-box-content[data-v-86922bd6]{text-align:center;margin-top:.9375rem;font-size:1rem;line-height:1.40625rem;color:#666;letter-spacing:0;padding:0 .375rem}.mt44[data-v-86922bd6]{margin-top:1.375rem}.message-btn-confirm[data-v-86922bd6]{background:#f56d23;border-radius:.25rem;color:#fff}.message-btn-cancle[data-v-86922bd6],.message-btn-confirm[data-v-86922bd6]{height:2.1875rem;line-height:2.1875rem;font-size:1rem;letter-spacing:.1875rem;text-align:center;width:8.125rem}.message-btn-cancle[data-v-86922bd6]{background:#fff;border:.03125rem solid #f56d23;border-radius:.25rem;color:#f56d23}",""])},"ynz/":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"top"},[r("div",{staticClass:"flex-wrp size28 bg-white border-t"},e._l(e.types,function(t){return r("div",{key:t.id,staticClass:"block flex-item ptb20 text-center zindex1",class:e.filter.type===t.id?"sort-active":"",on:{click:function(r){return r.stopPropagation(),e.onFilter("type",t.id)}}},[e._v(e._s(t.text))])}),0)]),r("div",{staticClass:"topbakcground"}),e._l(e.orders,function(t,o){return r("user-order-list-item",{key:o,attrs:{order:t,index:o},on:{deleteOrder:e.deleteOrder}})}),r("load-more",{ref:"loadMore",attrs:{handler:e.fetchOrders,noMore:"new",noResult:"new"}})],2)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i}});