webpackJsonp([46],{"6DhC":function(e,t,n){e.exports=n.p+"img/zybank.107d05b.png"},"71Un":function(e,t,n){"use strict";var i,r=n("bOdI"),a=n.n(r),o=n("pFYg"),s=n.n(o),c=n("//Fk"),l=n.n(c),u=n("Dd8w"),d=n.n(u),g=n("Xxa5"),f=n.n(g),p=n("exGp"),h=n.n(p),m=n("NYxO"),b=n("cVLP"),v=n("DHvs"),w=n("sbrb"),x=n.n(w);t.a=(i={data:function(){return{isSaving:!1,LoginBox:!1,loading:"",isDisabled:!1,module_id:"",target_id:""}},asyncData:function(){var e=h()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{comment:{shop_id:t.query.shop_id,module_id:t.query.module_id,target_id:t.query.target_id,score:5,content:"",pics:[]},state:{btnText:"登录",backUrl:t.query.url,loginParam:{},loginResponseData:{}}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),components:{Star:b.a},mounted:function(){var e=h()(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.user.id?this.LoginBox=!1:Object(v.i)()||(this.LoginBox=!0),t=this,window.loginForResponse=function(e,n,i,r){t.loginResponseData={type:"app",url:e,data:n,sign:i,avatar:r},t.getUserInfoForZyBank()},window.wechatLoginForResponse=function(e,n){t.loginResponseData={type:"wechat",data:e,sign:n},t.getUserInfoForZyBank()},window.onResponseError=function(){weui.toast("获取授权失败,请重试!"),window.history.back()};case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),head:function(){return{title:"发表评论"}}},a()(i,"components",{Star:b.a}),a()(i,"computed",d()({},Object(m.mapState)({config:function(e){return e.config},user:function(e){return e.user.info},weal:function(e){return e.user.weal}}),{isEnabledSaving:function(){return!this.isSaving&&!(this.comment.content.length<=0)}})),a()(i,"methods",{cancel:function(){Object(v.i)()||(this.LoginBox=!0),this.$router.back(-1)},Login:function(){var e=h()(f.a.mark(function e(t){var n,i,r,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,this.isDisabled=!1,i=location.href,e.next=5,v.b.get("/zybank/prelogin",{url:i});case 5:r=e.sent,a=r.data,200===r.status&&"SUCCESS"===a.code&&(this.loginParam=a.data),e.t0=t,e.next="app"===e.t0?12:"wechat"===e.t0?14:16;break;case 12:return Object(v.d)()?(n.isDisabled=!0,window.demo.clickOnAndroid(this.loginParam.loginUrl,this.loginParam.crypted,this.loginParam.sign),setTimeout(function(){n.isDisabled=!1},1500)):Object(v.e)()&&(n.isDisabled=!0,window.location.href="objc://loginBank:/,"+this.loginParam.loginUrl+","+this.loginParam.crypted+","+this.loginParam.sign,setTimeout(function(){n.isDisabled=!1},1500)),e.abrupt("break",16);case 14:return Object(v.d)()?(n.isDisabled=!0,window.demo.wechatLoginOnAndroid(),setTimeout(function(){n.isDisabled=!1},1500)):Object(v.e)()&&(n.isDisabled=!0,window.location.href="objc://wechatLogin:/",setTimeout(function(){n.isDisabled=!1},1500)),e.abrupt("break",16);case 16:this.LoginBox=!1;case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUserInfoForZyBank:function(){var e=h()(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.b.post("/zybank/setlogin",this.loginResponseData);case 2:if(t=e.sent,n=t.data,200!==t.status||"SUCCESS"!==n.code){e.next=12;break}return weui.toast("登录成功"),e.next=9,this.$store.dispatch("user/getUser");case 9:this.LoginBox=!1,e.next=14;break;case 12:weui.toast("登录失败"),Object(v.i)()||(this.LoginBox=!0);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onChange:function(e){this.comment.score=e},uploadImg:function(){var e=h()(f.a.mark(function e(t){var n,i,r,a,o,c,u,d,g,p,m,b,w=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((n=this).loading=weui.loading("加载中..."),i=t.target.files,r=[],a=n.comment.pics.length,o=i.length,!(a+o>9)){e.next=11;break}return n.loading.hide(),weui.alert("最多只能上传9张图片，请重新选择",{title:"温馨提示"}),e.abrupt("return");case 11:c=0;case 12:if(!(c<i.length)){e.next=21;break}if(u=i[c],/\/(?:jpeg|jpg|png)/i.test(u.type)){e.next=18;break}return n.loading.hide(),weui.alert("只能上传jpeg、jpg、png类型图片",{title:"温馨提示"}),e.abrupt("return");case 18:c++,e.next=12;break;case 21:d=function(e){return new l.a(function(t){var n=new FileReader;n.onload=function(e){return t(e.target.result)},n.readAsDataURL(e)})},g=f.a.mark(function e(a){var o,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((u=i[a]).size/1024>500)){e.next=5;break}n.photoCompress(u,"",{quality:.1},function(){var e=h()(f.a.mark(function e(o){var s,c,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.push(o),s=o,e.next=4,v.b.post("/uploadpic",{content:s});case 4:if(c=e.sent,l=c.data,200!==c.status||"SUCCESS"!==l.code){e.next=12;break}n.comment.pics.push(l.url),a==i.length-1&&(n.loading.hide(),t.target.value=""),e.next=15;break;case 12:return n.loading.hide(),weui.alert(l.msg,{title:"温馨提示"}),e.abrupt("return");case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.next=21;break;case 5:return e.next=7,d(i[a]);case 7:return m=e.sent,e.next=10,v.b.post("/uploadpic",{content:m});case 10:if(o=e.sent,s=o.data,200!==o.status||"SUCCESS"!==s.code){e.next=18;break}n.comment.pics.push(s.url),a==i.length-1&&(n.loading.hide(),t.target.value=""),e.next=21;break;case 18:return n.loading.hide(),weui.alert(s.msg,{title:"温馨提示"}),e.abrupt("return",{v:void 0});case 21:case"end":return e.stop()}},e,w)}),p=0;case 24:if(!(p<i.length)){e.next=32;break}return e.delegateYield(g(p),"t0",26);case 26:if("object"!==(void 0===(b=e.t0)?"undefined":s()(b))){e.next=29;break}return e.abrupt("return",b.v);case 29:p++,e.next=24;break;case 32:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSave:function(){var e=h()(f.a.mark(function e(){var t,n,i,r=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isSaving=!0,e.prev=1,e.next=4,v.b.post("/comment/addshopcomment",this.comment);case 4:t=e.sent,n=t.data,t.status,this.isSaving=!1,"SUCCESS"===n.code?weui.toast("感谢您的评价,请等待后台审核",function(){r.$router.back()}):(i=this,-1==n.auth?weui.dialog({title:"温馨提示",content:n.msg,buttons:[{label:"确定",type:"primary",onClick:function(){Object(v.i)()||(i.LoginBox=!0)}}]}):weui.alert(n.msg,{title:"温馨提示"})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),weui.alert("网络异常，请检查网络",{title:"温馨提示"}),this.isSaving=!1;case 15:case"end":return e.stop()}},e,this,[[1,11]])}));return function(){return e.apply(this,arguments)}}(),previewImage:function(e,t){var n=this,i=weui.gallery(e,{onDelete:function(){n.comment.pics.splice(t,1),i.hide()}})},photoCompress:function(e,t,n,i){var r=this,a=new FileReader;a.readAsDataURL(e),a.onload=function(){var t=this.result,a=null;x.a.getData(e,function(){x.a.getAllTags(this),a=x.a.getTag(this,"Orientation"),r.canvasDataURL(t,a,n,i)})}},canvasDataURL:function(e,t,n,i){var r=this,a=new Image;a.src=e;var o=null;a.onload=function(){var e,a="",s=this.width/this.height;a=this.width>750?750:this.width,a=n.width||a,n.height,e=(a=a)/s;var c=.2,l=document.createElement("canvas"),u=l.getContext("2d"),d=document.createAttribute("width");d.nodeValue=a;var g=document.createAttribute("height");if(g.nodeValue=e,l.setAttributeNode(d),l.setAttributeNode(g),u.drawImage(this,0,0,a,e),n.quality&&n.quality<=1&&n.quality>0&&(c=n.quality),navigator.userAgent.match(/iphone/i)){if(""!=t&&1!=t)switch(t){case 6:r.rotateImg(this,"left",l);break;case 8:r.rotateImg(this,"right",l);break;case 3:r.rotateImg(this,"right",l),r.rotateImg(this,"right",l)}o=l.toDataURL("image/jpeg",c)}else if(navigator.userAgent.match(/Android/i)){if(""!=t&&1!=t)switch(t){case 6:r.rotateImg(this,"left",l);break;case 8:r.rotateImg(this,"right",l);break;case 3:r.rotateImg(this,"right",l),r.rotateImg(this,"right",l)}o=l.toDataURL("image/jpeg",c)}else{if(""!=t&&1!=t)switch(t){case 6:rotateImg(this,"left",l);break;case 8:rotateImg(this,"right",l);break;case 3:rotateImg(this,"right",l),rotateImg(this,"right",l)}o=l.toDataURL("image/jpeg",c)}i(o)}},rotateImg:function(e,t,n){if(null!=e){var i=e.height,r=e.width,a=2;null==a&&(a=0),"right"==t?++a>3&&(a=0):--a<0&&(a=3);var o=90*a*Math.PI/180,s=n.getContext("2d");switch(a){case 0:n.width=r,n.height=i,s.drawImage(e,0,0);break;case 1:n.width=i,n.height=r,s.rotate(o),s.drawImage(e,0,-i);break;case 2:n.width=r,n.height=i,s.rotate(o),s.drawImage(e,-r,-i);break;case 3:n.width=i,n.height=r,s.rotate(o),s.drawImage(e,-r,0)}}}}),a()(i,"beforeDestroy",function(){this.loading&&this.loading.hide()}),i)},FjP8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("71Un"),r=n("qEbW"),a=!1;var o=function(e){a||n("oaAV")},s=n("VU/8")(i.a,r.a,!1,o,"data-v-71383e76",null);s.options.__file="pages/comment.vue",t.default=s.exports},PA0N:function(e,t,n){var i=n("PYP6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("5fe7389c",i,!1,{sourceMap:!1})},PL5j:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex-wrp"},e._l(e.max,function(t){return n("div",{staticClass:"flex-wrp flex-center mr15 star",class:{"bg-star":t<=e.value,"bg-lightstar":t>e.value},on:{click:function(n){return e.onChange(t)}}},[n("i",{staticClass:"i i-star color1"})])}),0)])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},PYP6:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".star{border-radius:.15625rem!important;padding:.25rem}",""])},cVLP:function(e,t,n){"use strict";var i=n("fk0T"),r=n("PL5j"),a=!1;var o=function(e){a||n("PA0N")},s=n("VU/8")(i.a,r.a,!1,o,null,null);s.options.__file="components/Star2.vue",t.a=s.exports},fk0T:function(e,t,n){"use strict";t.a={props:{value:{type:Number,default:0},max:{type:Number,default:5}},methods:{onChange:function(e){this.$emit("onChange",e)}}}},oaAV:function(e,t,n){var i=n("xlM6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("3e6d1c77",i,!1,{sourceMap:!1})},qEbW:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-white",staticStyle:{height:"100vh"}},[i("div",[i("div",{staticClass:"w100 border-b"},[i("div",{staticClass:"flex-wrp flex-align-center flex-between color5 mlr30 comment-title"},[i("div",{staticClass:"flex-wrp flex-align-center"},[i("div",{staticClass:"size32 pr20"},[e._v("总体")]),i("star",{staticClass:"size30 mr5",attrs:{max:5,value:e.comment.score},on:{onChange:e.onChange}})],1)])]),i("div",{staticClass:"border-b w100"},[i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.comment.content,expression:"comment.content",modifiers:{trim:!0}}],staticClass:"comment-textarea bg-none size28 w100 lh150 color44 plr30",attrs:{rows:"5",minlength:"1",placeholder:"亲，分享口味，环境服务等方面的体验，欢迎您留下宝贵的意见和建议！"},domProps:{value:e.comment.content},on:{input:function(t){t.target.composing||e.$set(e.comment,"content",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"flex-wrp flex-align-center mt35 pb40 plr30 img-box"},[i("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderFiles"}},e._l(e.comment.pics,function(t,n){return i("li",{key:n,staticClass:"weui-uploader__file",style:{backgroundImage:"url("+t+")"},on:{click:function(i){return e.previewImage(t,n)}}})}),0),e.comment.pics.length<=8?i("div",{staticClass:"flex-wrp flex-cell flex-center upload"},[i("input",{staticClass:"addimg",attrs:{type:"file",id:"imgurl",multiple:"",accept:"image/*"},on:{change:e.uploadImg}}),i("i",{staticClass:"i-camera"}),i("div",{staticClass:"size22 mt5 color5"},[e._v("上传照片")])]):e._e()])]),i("div",{staticClass:"bg-white w100 pb30"},[i("div",{staticClass:"flex-wrp flex-center sub"},[i("base-button",{staticClass:"bg-green size36 color1",attrs:{loading:e.isSaving,enabled:e.isEnabledSaving},on:{click:e.onSave}},[e._v("发表评论")])],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.LoginBox,expression:"LoginBox"}],staticClass:"mask1 flex-wrp flex-center color48",staticStyle:{display:"none"}},[i("div",{staticClass:"bg-white border-radius10 mlr30 mt30 relative login-bounce"},[i("div",{staticClass:"text-center ptb50 size32"},[e._v("选择登录方式")]),i("div",{staticClass:"flex-wrp flex-between size28 pt20 pb50 plr60 border-b"},[i("button",{staticClass:"flex-wrp flex-cell flex-center",staticStyle:{border:"0","background-color":"#fff"},attrs:{disabled:e.isDisabled},on:{click:function(t){return e.Login("app")}}},[i("img",{staticClass:"block login_img",attrs:{src:n("6DhC")}}),i("div",{staticClass:"pt15"},[e._v("APP授权登录")])]),i("button",{staticClass:"flex-wrp flex-cell flex-center",staticStyle:{border:"0","background-color":"#fff"},attrs:{disabled:e.isDisabled},on:{click:function(t){return e.Login("wechat")}}},[i("img",{staticClass:"block login_img",attrs:{src:n("zGqc")}}),i("div",{staticClass:"pt15"},[e._v("微信登录")])])]),i("div",{staticClass:"flex-wrp flex-center color63 ptb20",on:{click:e.cancel}},[e._v("取消")])])])])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},sbrb:function(e,t,i){var r;(function(){var i=!1,a=function(e){return e instanceof a?e:this instanceof a?void(this.EXIFwrapped=e):new a(e)};void 0!==e&&e.exports&&(t=e.exports=a),t.EXIF=a;var o=a.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},s=a.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},c=a.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},l=a.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},u=a.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function d(e){return!!e.exifdata}function g(e,t){function n(n){var r=f(n);e.exifdata=r||{};var o=function(e){var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,a=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<r;){if(a(t,n)){var o=t.getUint8(n+7);o%2!=0&&(o+=1),0===o&&(o=4);var s=n+8+o,c=t.getUint16(n+6+o);return h(e,s,c)}n++}}(n);if(e.iptcdata=o||{},a.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,a=new DOMParser;for(;n<r-4;){if("http"==v(t,n,4)){var o=n-1,s=t.getUint16(n-2)-1,c=v(t,o,s),l=c.indexOf("xmpmeta>")+8,u=(c=c.substring(c.indexOf("<x:xmpmeta"),l)).indexOf("x:xmpmeta")+10;c=c.slice(0,u)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+c.slice(u);var d=a.parseFromString(c,"text/xml");return S(d)}n++}}(n);e.xmpdata=s||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))n(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),i=n.length,r=new ArrayBuffer(i),a=new Uint8Array(r),o=0;o<i;o++)a[o]=n.charCodeAt(o);return r}(e.src));else if(/^blob\:/i.test(e.src)){(o=new FileReader).onload=function(e){n(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){o.readAsArrayBuffer(e)})}else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(r.response),r=null},r.open("GET",e.src,!0),r.responseType="arraybuffer",r.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var o;(o=new FileReader).onload=function(e){i&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},o.readAsArrayBuffer(e)}}function f(e){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;for(var n,r=2,a=e.byteLength;r<a;){if(255!=t.getUint8(r))return i&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),i&&console.log(n),225==n)return i&&console.log("Found 0xFFE1 marker"),w(t,r+4,t.getUint16(r+2));r+=2+t.getUint16(r+2)}}var p={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function h(e,t,n){for(var i,r,a,o,s=new DataView(e),c={},l=t;l<t+n;)28===s.getUint8(l)&&2===s.getUint8(l+1)&&(o=s.getUint8(l+2))in p&&((a=s.getInt16(l+3))+5,r=p[o],i=v(s,l+5,a),c.hasOwnProperty(r)?c[r]instanceof Array?c[r].push(i):c[r]=[c[r],i]:c[r]=i),l++;return c}function m(e,t,n,r,a){var o,s,c,l=e.getUint16(n,!a),u={};for(c=0;c<l;c++)o=n+12*c+2,!(s=r[e.getUint16(o,!a)])&&i&&console.log("Unknown tag: "+e.getUint16(o,!a)),u[s]=b(e,o,t,n,a);return u}function b(e,t,n,i,r){var a,o,s,c,l,u,d=e.getUint16(t+2,!r),g=e.getUint32(t+4,!r),f=e.getUint32(t+8,!r)+n;switch(d){case 1:case 7:if(1==g)return e.getUint8(t+8,!r);for(a=g>4?f:t+8,o=[],c=0;c<g;c++)o[c]=e.getUint8(a+c);return o;case 2:return v(e,a=g>4?f:t+8,g-1);case 3:if(1==g)return e.getUint16(t+8,!r);for(a=g>2?f:t+8,o=[],c=0;c<g;c++)o[c]=e.getUint16(a+2*c,!r);return o;case 4:if(1==g)return e.getUint32(t+8,!r);for(o=[],c=0;c<g;c++)o[c]=e.getUint32(f+4*c,!r);return o;case 5:if(1==g)return l=e.getUint32(f,!r),u=e.getUint32(f+4,!r),(s=new Number(l/u)).numerator=l,s.denominator=u,s;for(o=[],c=0;c<g;c++)l=e.getUint32(f+8*c,!r),u=e.getUint32(f+4+8*c,!r),o[c]=new Number(l/u),o[c].numerator=l,o[c].denominator=u;return o;case 9:if(1==g)return e.getInt32(t+8,!r);for(o=[],c=0;c<g;c++)o[c]=e.getInt32(f+4*c,!r);return o;case 10:if(1==g)return e.getInt32(f,!r)/e.getInt32(f+4,!r);for(o=[],c=0;c<g;c++)o[c]=e.getInt32(f+8*c,!r)/e.getInt32(f+4+8*c,!r);return o}}function v(e,t,i){var r="";for(n=t;n<t+i;n++)r+=String.fromCharCode(e.getUint8(n));return r}function w(e,t){if("Exif"!=v(e,t,4))return i&&console.log("Not valid EXIF data! "+v(e,t,4)),!1;var n,r,a,d,g,f=t+6;if(18761==e.getUint16(f))n=!1;else{if(19789!=e.getUint16(f))return i&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(f+2,!n))return i&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var p=e.getUint32(f+4,!n);if(p<8)return i&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(f+4,!n)),!1;if((r=m(e,f,f+p,s,n)).ExifIFDPointer)for(a in d=m(e,f,f+r.ExifIFDPointer,o,n)){switch(a){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[a]=u[a][d[a]];break;case"ExifVersion":case"FlashpixVersion":d[a]=String.fromCharCode(d[a][0],d[a][1],d[a][2],d[a][3]);break;case"ComponentsConfiguration":d[a]=u.Components[d[a][0]]+u.Components[d[a][1]]+u.Components[d[a][2]]+u.Components[d[a][3]]}r[a]=d[a]}if(r.GPSInfoIFDPointer)for(a in g=m(e,f,f+r.GPSInfoIFDPointer,c,n)){switch(a){case"GPSVersionID":g[a]=g[a][0]+"."+g[a][1]+"."+g[a][2]+"."+g[a][3]}r[a]=g[a]}return r.thumbnail=function(e,t,n,i){var r=function(e,t,n){var i=e.getUint16(t,!n);return e.getUint32(t+2+12*i,!n)}(e,t+n,i);if(!r)return{};if(r>e.byteLength)return{};var a=m(e,t,t+r,l,i);if(a.Compression)switch(a.Compression){case 6:if(a.JpegIFOffset&&a.JpegIFByteCount){var o=t+a.JpegIFOffset,s=a.JpegIFByteCount;a.blob=new Blob([new Uint8Array(e.buffer,o,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",a.Compression)}else 2==a.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return a}(e,f,p,n),r}function x(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var i=e.attributes.item(n);t["@attributes"][i.nodeName]=i.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var a=e.childNodes.item(r),o=a.nodeName;if(null==t[o])t[o]=x(a);else{if(null==t[o].push){var s=t[o];t[o]=[],t[o].push(s)}t[o].push(x(a))}}return t}function S(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var i=e.children.item(n),r=i.attributes;for(var a in r){var o=r[a],s=o.nodeName,c=o.nodeValue;void 0!==s&&(t[s]=c)}var l=i.nodeName;if(void 0===t[l])t[l]=x(i);else{if(void 0===t[l].push){var u=t[l];t[l]=[],t[l].push(u)}t[l].push(x(i))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}a.enableXmp=function(){a.isXmpEnabled=!0},a.disableXmp=function(){a.isXmpEnabled=!1},a.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(d(e)?t&&t.call(e):g(e,t),!0)},a.getTag=function(e,t){if(d(e))return e.exifdata[t]},a.getIptcTag=function(e,t){if(d(e))return e.iptcdata[t]},a.getAllTags=function(e){if(!d(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},a.getAllIptcTags=function(e){if(!d(e))return{};var t,n=e.iptcdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},a.pretty=function(e){if(!d(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?i+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":i+=t+" : ["+n[t].length+" values]\r\n":i+=t+" : "+n[t]+"\r\n");return i},a.readFromBinaryFile=function(e){return f(e)},void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}).call(this)},xlM6:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".comment-title[data-v-71383e76]{padding-top:1.75rem;padding-bottom:1.5rem}.comment-textarea[data-v-71383e76]{outline:none;resize:none;border:0;padding-top:1rem;padding-bottom:32.53vw}.upload[data-v-71383e76]{width:4.875rem;height:4.875rem;border:.03125rem dashed #d5d5d5;background-color:#f9f9f9;border-radius:.25rem;position:relative}.sub[data-v-71383e76]{width:92%;height:2.875rem;border-radius:.25rem;margin:0 auto}.login_img[data-v-71383e76]{width:3.125rem;height:3.125rem}.login-bounce[data-v-71383e76]{width:17.5rem;height:14.6875rem}.weui-uploader__input-box[data-v-71383e76]{border-style:dashed}.weui-uploader__input-box[data-v-71383e76]:after,.weui-uploader__input-box[data-v-71383e76]:before{display:none}.img-box[data-v-71383e76]{background:#fff;-ms-flex-wrap:wrap;flex-wrap:wrap}.img-box .addimg[data-v-71383e76]{position:absolute;left:0;top:0;width:4.875rem;height:4.875rem;border:.03125rem dashed #d5d5d5;border-radius:.25rem;opacity:0;display:inline-block;cursor:pointer}.none[data-v-71383e76]{display:none}.weui-btn_disabled.bg-blue[data-v-71383e76]{background-color:#ccc!important}",""])},zGqc:function(e,t,n){e.exports=n.p+"img/wx.35c2691.png"}});