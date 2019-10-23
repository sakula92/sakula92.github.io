webpackJsonp([139],{eX7A:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("q6MA"),a=s("uF1X"),n=s("VU/8")(i.a,a.a,!1,null,null,null);n.options.__file="pages/shop/join/form.vue",t.default=n.exports},q6MA:function(e,t,s){"use strict";var i=s("Xxa5"),a=s.n(i),n=s("exGp"),o=s.n(n),l=s("RWSh");t.a={data:function(){return{showAgreement:!1,isSaving:!1,isAgree:!1,info:{shop_name:"",shop_address:"",contact_name:"",contact_phone:""}}},props:{joinConfig:{type:Object,required:!0}},methods:{onSubmit:function(){var e=this;weui.form.validate("#form",function(t){t||e.doSubmit()})},doSubmit:function(){var e=o()(a.a.mark(function e(){var t,s,i,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).isSaving=!0,e.next=4,l.a.post("/shop/join",t.info);case 4:s=e.sent,i=s.data,n=s.status,t.isSaving=!1,200===n&&"SUCCESS"===i.code?weui.toast("您在本平台已提交成功，请等待审核",function(){t.$router.replace("/")}):i.msg&&weui.alert(i.msg);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}},uF1X:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("base-header",{attrs:{title:"入驻申请表"}}),s("div",{staticClass:"weui-cells",attrs:{id:"form"}},[s("div",{staticClass:"weui-cell"},[e._m(0),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.info.shop_name,expression:"info.shop_name"}],staticClass:"weui-input",attrs:{type:"text",maxlength:"20",placeholder:"请填写店铺名称",required:"",emptyTips:"请填写店铺名称"},domProps:{value:e.info.shop_name},on:{input:function(t){t.target.composing||e.$set(e.info,"shop_name",t.target.value)}}})])]),s("div",{staticClass:"weui-cell"},[e._m(1),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.info.shop_address,expression:"info.shop_address"}],staticClass:"weui-input",attrs:{type:"text",required:"",maxlength:"50",placeholder:"请填写店铺地址",emptyTips:"请填写店铺地址"},domProps:{value:e.info.shop_address},on:{input:function(t){t.target.composing||e.$set(e.info,"shop_address",t.target.value)}}})])]),s("div",{staticClass:"weui-cell"},[e._m(2),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.info.contact_name,expression:"info.contact_name"}],staticClass:"weui-input",attrs:{type:"text",maxlength:"8",placeholder:"请填写联系人姓名",required:"",emptyTips:"请填写联系人姓名"},domProps:{value:e.info.contact_name},on:{input:function(t){t.target.composing||e.$set(e.info,"contact_name",t.target.value)}}})])]),s("div",{staticClass:"weui-cell"},[e._m(3),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.info.contact_phone,expression:"info.contact_phone"}],staticClass:"weui-input",attrs:{type:"tel",maxlength:"11",pattern:"[0-9]{11}",placeholder:"请填写联系人电话",required:"",emptyTips:"请填写联系人电话",notMatchTips:"请输入正确的手机号"},domProps:{value:e.info.contact_phone},on:{input:function(t){t.target.composing||e.$set(e.info,"contact_phone",t.target.value)}}})])])]),s("div",{staticClass:"weui-agree"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isAgree,expression:"isAgree"}],staticClass:"weui-agree__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAgree)?e._i(e.isAgree,null)>-1:e.isAgree},on:{change:function(t){var s=e.isAgree,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n=e._i(s,null);i.checked?n<0&&(e.isAgree=s.concat([null])):n>-1&&(e.isAgree=s.slice(0,n).concat(s.slice(n+1)))}else e.isAgree=a}}}),s("span",{staticClass:"weui-agree__text pl10"},[s("span",{staticClass:"color5"},[e._v("同意并遵守")]),s("span",{staticClass:"color3",on:{click:function(t){e.showAgreement=!0}}},[e._v("《好店入驻协议》")])])]),s("div",{staticClass:"weui-btn-area"},[s("base-button",{attrs:{fetching:e.isSaving,enabled:e.isAgree},on:{click:e.onSubmit}},[e._v("提交信息")])],1),e.showAgreement?s("div",{staticClass:"fixed-bottom fullHeight bg-white flex-wrp flex-cell",class:{"weui-animate-slide-up":e.showAgreement}},[s("div",{staticClass:"flex-item overflow-auto-y plr30 ptb30",domProps:{innerHTML:e._s(e.joinConfig.agreement)}}),s("div",{staticClass:"weui-btn-area"},[s("base-button",{on:{click:function(t){e.showAgreement=!1}}},[e._v("关闭")])],1)]):e._e()],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"weui-cell__hd"},[t("label",{staticClass:"weui-label"},[this._v("店铺名称")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"weui-cell__hd"},[t("label",{staticClass:"weui-label"},[this._v("店铺地址")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"weui-cell__hd"},[t("label",{staticClass:"weui-label"},[this._v("联系人姓名")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"weui-cell__hd"},[t("label",{staticClass:"weui-label"},[this._v("联系人电话")])])}]};t.a=a}});