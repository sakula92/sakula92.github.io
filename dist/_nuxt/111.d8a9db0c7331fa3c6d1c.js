webpackJsonp([111],{IrLB:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".text-nowrap1[data-v-49140fb3]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bold1[data-v-49140fb3]{border:.09375rem solid #fff;border-radius:.15625rem}.bold2[data-v-49140fb3]{border:.09375rem solid #ff6a38;border-radius:.15625rem}",""])},KRiF:function(t,s,e){var i=e("IrLB");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("9ed2d960",i,!1,{sourceMap:!1})},c0Lr:function(t,s,e){"use strict";var i=e("Xxa5"),a=e.n(i),r=e("woOf"),n=e.n(r),c=e("exGp"),o=e.n(c),l=e("Dd8w"),d=e.n(l),h=e("vTey"),u=e.n(h),p=e("NYxO"),f=e("DHvs");s.a={data:function(){return{cateLinks:[],dishs:[],selected:{select:this.$route.query.num}}},computed:d()({},Object(p.mapState)({session:function(t){return t.session}}),{cateLinksGroup:function(){return u()(this.cateLinks,3)}}),mounted:function(){this.fetchDishs()},methods:{fetchDishs:function(){var t=o()(a.a.mark(function t(){var s,e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.b.get("/shop/special_dishes",n()({},{id:this.$route.query.id}));case 2:s=t.sent,e=s.data,this.cateLinks=this.cateLinks.concat(e.data||[]),e.data&&e.data.forEach(function(t,s,e){t.thumb&&(t.thumb=t.thumb.split("?")[0]+"?x-oss-process=image/resize,m_fill,w_264,h_198"),e[s]=t}),this.dishs=this.cateLinks[this.$route.query.num];case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),setPageMenu:function(){var t=o()(a.a.mark(function t(s,e){var i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.dishs=[],this.dishs=this.cateLinks[e],this.selected.select=e,t.next=5,f.b.get("/shop/special_click_count",{id:s.id});case 5:i=t.sent,i.data,i.status,f.b.post("/statistics/point/one",{session_id:this.session.session_id,category:"visit",key:"page",value:"/specialdish?id="+this.$route.query.id+"&num="+e+"&sid="+this.dishs.id});case 9:case"end":return t.stop()}},t,this)}));return function(s,e){return t.apply(this,arguments)}}()}}},gJW5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("c0Lr"),a=e("qWv4"),r=!1;var n=function(t){r||e("KRiF")},c=e("VU/8")(i.a,a.a,!1,n,"data-v-49140fb3",null);c.options.__file="pages/shop/specialdish.vue",s.default=c.exports},qWv4:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"w100 bg-white",staticStyle:{height:"100vh"}},[e("div",{staticClass:"overflow-hidden",staticStyle:{height:"143px"}},[e("div",{staticClass:"overflow-auto-x bg-white pt30 pl30 pb15",staticStyle:{width:"100vw"}},[e("div",{staticClass:"bg-white overflow-auto-x relative flex-wrp",staticStyle:{width:"max-content"}},t._l(t.cateLinks,function(s,i){return e("span",{key:i,staticClass:"flex-wrp flex-cell mr10",staticStyle:{width:"132px"},on:{click:function(e){return t.setPageMenu(s,i)}}},[e("div",{staticClass:"pd5",class:t.selected.select==i?"bold2":"bold1"},[e("img",{staticClass:"mr10 text-nowrap border-radius5",staticStyle:{width:"132px",height:"99px"},attrs:{src:s.thumb}})]),e("div",{staticClass:"flex-wrp flex-align-center ml5 mt5 w100 size28 color37"},[e("div",{staticClass:"text-nowrap1 pl5",class:t.selected.select==i?"color65":"color37",staticStyle:{"max-width":"120px",height:"22px"}},[t._v(t._s(s.name))])])])}),0)])]),e("div",{staticClass:"bg-white mt40"},[e("div",{staticClass:"ptb30 border-t pl30 flex-wrp"},[e("span",{staticClass:"size36 text-nowrap1 color37 mr10",staticStyle:{"max-width":"80vw"}},[t._v(t._s(t.dishs.name))]),e("span",{staticClass:"size20 color1 mt10 mr10 flex-wrp flex-center plr10 border-radius5 bg-dish",staticStyle:{"padding-top":"1px",height:"18px"}},[t._v("特色")])]),e("div",{staticClass:"plr30"},[e("img",{staticClass:"block",staticStyle:{width:"345px",height:"260px"},attrs:{src:t.dishs.thumb}}),e("div",{staticClass:"mt30 size26 color37",domProps:{innerHTML:t._s(t.dishs.introduce)}})])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a}});