(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9756],{45455:function(e,t,n){var r=n(86411),i=n(70940),o=n(79631),a=n(86152),u=n(67878),c=n(73226),l=n(16001),d=n(77598),A=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(u(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||d(e)||o(e)))return!e.length;var t=i(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!r(e).length;for(var n in e)if(A.call(e,n))return!1;return!0}},51594:function(e,t,n){"use strict";var r=n(52322);t.Z=function(e){var t=e.id;return(0,r.jsx)("div",{id:t,"data-testid":"auth-react-wrapper"})}},88004:function(e,t,n){"use strict";var r=n(15893),i=n(38421),o=n.n(i),a=n(52322),u=(0,r.vJ)([".footer{margin-top:0;}"]);t.C=function(e){var t=e.image,n=e.children;return(0,a.jsxs)(a.Fragment,{children:[null!=(null===t||void 0===t?void 0:t.src)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{}),(0,a.jsx)(o(),{loader:function(e){var t=e.src,n=e.width,r=e.quality;return"".concat(t,"?w=").concat(n,"&q=").concat(null!==r&&void 0!==r?r:75,"}")},src:t.src,layout:"fill",objectFit:"cover",priority:!0,"data-testid":"background-page"})]}),n]})}},17138:function(e,t,n){"use strict";n.d(t,{o4:function(){return d},GN:function(){return u},wd:function(){return A}});var r=n(40489),i=n(15893),o=n(52322),a=i.ZP.div.withConfig({displayName:"FormPage__Container",componentId:"sc-1b51r8o-0"})(["padding-left:8px;padding-right:8px;@media (width >= 1200px){&.container{max-width:",";}}@media (width <= 520px){.col{padding-left:0;padding-right:0;}}",";"],(function(e){return"".concat(e.maxWidth,";")}),(function(e){return e.iframeMode?(0,i.iv)([".ux-card{border-top:none;}"]):(0,i.iv)(["@media (width >= 520px){padding-top:10px;}@media (width >= 768px){padding-top:40px;}"])})),u=function(e){var t=e.iframeMode,n=void 0!==t&&t,i=e.justify,u=void 0===i?"center":i,c=e.children,l=e.maxWidth,d=void 0===l?"1140px":l;return(0,o.jsx)(a,{iframeMode:n,maxWidth:d,className:(0,r.Z)({"container-fluid":n,container:!n}),children:(0,o.jsx)("div",{className:(0,r.Z)("row",{"d-flex":!n,"justify-content-sm-start":"left"===u,"justify-content-sm-center":"center"===u,"justify-content-sm-end":"right"===u}),children:c})})},c=n(37567),l=i.ZP.div.withConfig({displayName:"FormPageColumn__Container",componentId:"sc-uwin2-0"})([""," "," ",""],(function(e){var t=e.minWidth;return t&&(0,i.iv)(["min-width:",";"],t)}),(function(e){var t=e.maxWidth;return t&&(0,i.iv)(["max-width:",";"],t)}),(function(e){return e.noPadding&&(0,i.iv)(["padding-left:0;padding-right:0;"])})),d=function(e){var t=e.children,n=(0,c.Z)();return(0,o.jsx)(o.Fragment,{children:n.only("md")?(0,o.jsx)(l,{maxWidth:"560px",noPadding:!1,className:"col-xs-12 col-sm-10 col-lg-6",children:t}):null})},A=function(e){var t=e.children,n=e.className,i=void 0===n?"col-xs-12 col-sm-10 col-lg-6":n,a=e.maxWidth,u=void 0===a?"560px":a,c=e.minWidth,d=e.fluid,A=void 0!==d&&d,s=e.noPadding,f=void 0!==s&&s;return(0,o.jsx)(l,{maxWidth:A?null:u,minWidth:c,noPadding:f,className:(0,r.Z)("col",A?null:i),children:t})}},48359:function(e,t,n){"use strict";var r=(0,n(15893).vJ)(["html{height:100%;}#main{height:100%;}body{display:flex;flex-direction:column;height:100%;}#root{flex:1;> div{height:100%;}}"]);t.Z=r},24306:function(e,t,n){"use strict";var r=n(15893),i=new(n(48188).ZP),o=(0,r.vJ)([".ux-app{background:",";}"],i.ux.box.backgroundColor);t.Z=o},46574:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(83899);n(16841);function i(e){var t=e.url,n=e.dataTestId,i=void 0===n?"auth-react-assets":n;(0,r.useEffect)((function(){var e=null;if("string"===typeof t){var n=t;0,(e=document.createElement("script")).src=n,null!=i&&e.setAttribute("data-testid",i),document.body.appendChild(e)}return function(){null!=e&&document.body.removeChild(e)}}),[t,i])}},78610:function(e){var t=["/","/login","/account/create","/contact/validate","/profile/contact/validate","/account/reset","/profile/edit","/login/levelup","/login/levelup/recovery","/account/payee"],n=["/account/create.json","/index.json","/login.json","/login/levelup.json","/login/levelup/recovery.json"];e.exports={makeIsFeatureFlagForRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,i=new RegExp("^(".concat(e.join("|"),")$")),o=new RegExp("/_next/data/.*(".concat(r.join("|"),")$"));return function(e){return i.test(e)||o.test(e)}},featureFlagNames:{IS_PROFILE_CV_REQUIRED:"isProfileCVRequired",ENABLE_CLIENT_SIDE_ROUTING:"enableClientSideRouting",ENABLE_NEW_TAC_ROUTES:"enableNewTacRoutes",ENABLE_STUDIO_BANNER:"enableStudioBanner",IS_NEW_DISABLE_2SV_FLOW_ENABLED:"isNewDisable2SVFlowEnabled"},nonAuthFeatureFlagNames:{AFTERNIC_ADD_PAYEE:"am-ui-feat-006"}}},20396:function(e,t,n){"use strict";var r=n(97729),i=n.n(r),o=n(52322);t.Z=function(e){return(0,o.jsxs)(i(),{children:[(0,o.jsx)("meta",{charSet:"UTF-8"}),(0,o.jsx)("title",{children:e.title||""}),(0,o.jsx)("meta",{name:"description",content:e.description||""}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})}},36069:function(e,t,n){"use strict";n.d(t,{u:function(){return u},v:function(){return a}});var r=n(45455),i=n.n(r),o=n(89575),a=function(e,t){var n,r,a,u,c,l,d,A,s,f,p,v;if(i()(t)||i()(e))return null;var g=t.host,h=t.plid,m=t.urlParams,w=t.isChina,E=(0,o.formatBrandConfig)(e,g,h,m);return{enable_apple:!0,is_china:null!==w&&void 0!==w&&w,forgot_username_url:null!==(n=null===E||void 0===E||null===(r=E.global)||void 0===r||null===(a=r.redirect)||void 0===a?void 0:a.username_recovery)&&void 0!==n?n:"",forgot_password_url:null!==(u=null===E||void 0===E||null===(c=E.login)||void 0===c||null===(l=c.redirect)||void 0===l?void 0:l.password_recovery)&&void 0!==u?u:"",create_account_url:null!==(d=null===E||void 0===E||null===(A=E.login)||void 0===A||null===(s=A.redirect)||void 0===s?void 0:s.create)&&void 0!==d?d:"",resend_activation_url:null!==(f=null===E||void 0===E||null===(p=E.login)||void 0===p||null===(v=p.redirect)||void 0===v?void 0:v.activation)&&void 0!==f?f:""}},u=function(e,t){var n,r,a,u,c,l,d,A,s;if(i()(e)||i()(t))return null;var f=t.host,p=t.plid,v=t.urlParams,g=t.isChina,h=(0,o.formatBrandConfig)(e,f,p,v);return{tos_url:null!==(n=null===h||void 0===h||null===(r=h.create)||void 0===r||null===(a=r.redirect)||void 0===a?void 0:a.terms)&&void 0!==n?n:"",is_china:null!==g&&void 0!==g&&g,privacy_url:null!==(u=null===h||void 0===h||null===(c=h.create)||void 0===c||null===(l=c.redirect)||void 0===l?void 0:l.privacy)&&void 0!==u?u:"",go_back_url:null!==(d=null===h||void 0===h||null===(A=h.recovery)||void 0===A||null===(s=A.redirect)||void 0===s?void 0:s.back)&&void 0!==d?d:""}}},96100:function(e,t,n){"use strict";var r=n(95235),i=n(82269),o=n(83899),a=n(56580),u=n(5632),c=n(89538),l=n(71729),d=n(78610),A=["path","urlParams","authType","assets","realm","apiVersion","authAssetsHost","authAssetsResourceName"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(0,a.v9)((function(e){return e.globalsReducer}),a.wU),r=n.path,s=n.urlParams,p=n.authType,v=n.assets,g=n.realm,h=n.apiVersion,m=n.authAssetsHost,w=n.authAssetsResourceName,E=(0,i.Z)(n,A),_=(0,u.useRouter)();return(0,o.useEffect)((function(){window.onpageshow=function(e){e.persisted&&window.location.reload()},window.ux.eldorado.page={currentPage:r},null==window.sso&&(window.sso={});var n=d.featureFlagNames.ENABLE_CLIENT_SIDE_ROUTING in e&&!0===e[d.featureFlagNames.ENABLE_CLIENT_SIDE_ROUTING]?_:null;window.sso=f(f(f({},window.sso),E),{},{url_params:s,version:h,auth_type:p,realm:g,default_app_for_realm:l.APP_BY_REALM[g],nextRouter:n,featureFlags:e,get_client_files:function(e){return(0,c.getAssetGroupPath)(m,v,"")+e}}),null!=t&&t()}),[_,s,h,g,m,v,p,r,E,e,t]),f(f({urlParams:s,authType:p,realm:g},E),{},{assetsUrl:(0,c.getAssetGroupPath)(m,v,w)})}},37567:function(e,t,n){"use strict";var r=n(83899);t.Z=function(){var e=(0,r.useState)({md:!1}),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){return window.matchMedia("(min-width: 992px)").matches},t=function(){n({md:e()})};return n({md:e()}),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),{only:function(e){return"md"===e&&Boolean(t.md)}}}},50464:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(37567),i=n(71729),o={en_IN:{src:"/trust-center/_next/static/media/whatsApp.91273eca.jpg",height:1015,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAhgyf/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDAAQREgVBYf/aAAgBAQABPwC85BykS6YMcaoCp1Jx2fa//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEREjH/2gAIAQIBAT8Aqow//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIxQZH/2gAIAQMBAT8Aeaw//9k=",blurWidth:8,blurHeight:5},zh_SG:{src:"/trust-center/_next/static/media/sg_zh-Wechat.18326c0e.jpeg",height:1015,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkQo//8QAHhAAAQMEAwAAAAAAAAAAAAAAAwECBAAFERMSUXH/2gAIAQEAAT8AY+TfLhDDIMmwmBbeOV9d2tf/xAAbEQACAQUAAAAAAAAAAAAAAAACAwEABBESUf/aAAgBAgEBPwC5axRCITiNeV//xAAYEQEAAwEAAAAAAAAAAAAAAAACAQMRAP/aAAgBAwEBPwCkGwylGzvf/9k=",blurWidth:8,blurHeight:5}},a=n(37550),u=function(){var e=(0,r.Z)(),t=(0,a.AD)(),n=(0,a.H1)(),u=(0,a.$)(),c=(0,a.PL)();return{promoImage:u.includes("godaddy")&&c===i.IDP&&"mediatemple"!==(null===n||void 0===n?void 0:n.cobrand)&&t in o&&e.only("md")?o[t]:null}}},94366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(18726).Z)(n(83899)).default.createContext({});t.AmpStateContext=r},79836:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},24254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var r=n(95903).Z,i=n(18726).Z,o=(0,n(22698).Z)(n(83899)),a=i(n(63661)),u=n(94366),c=n(84633),l=n(79836);n(17590);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function A(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function f(e,t){var n=t.inAmpMode;return e.reduce(A,[]).reverse().concat(d(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var u=i.key.slice(i.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,l=s.length;c<l;c++){var d=s[c];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var A=i.props[d],f=r[d]||new Set;"name"===d&&a||!f.has(A)?(f.add(A),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,o.default.cloneElement(e,a)}return o.default.cloneElement(e,{key:i})}))}var p=function(e){var t=e.children,n=o.useContext(u.AmpStateContext),r=o.useContext(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var c;null==t||null==(c=t.mountedInstances)||c.add(e.children),u()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}})),a((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(22698).Z)(n(83899));var i=!1,o=i?function(){}:r.useLayoutEffect,a=i?function(){}:r.useEffect},17590:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;t.warnOnce=function(e){}},36125:function(e,t){"use strict";var n=function(){var e=0,t=[],n=!0,r=function t(n){if(!(e>10))if("undefined"===typeof _trfq&&null!=n)++e,setTimeout((function(){t(n)}),250);else if(null!=n){var r;null===(r=_trfq)||void 0===r||r.push(n)}},i=function(e,n,r){t.length<10&&t.push({eventDescription:e,eventId:n,customProperties:r})};return{logTraffic2Event:function(e,t,o){n&&r(["cmdLogPageEvent",e,t]);try{i(e,t,o)}catch(a){}},getTrackingValues:function(){return new Promise((function(e){null!=window._expDataLayer?window._expDataLayer.push({version:"v1",schema:"get_tracking_values",data:{callback:function(t){return e(t)}}}):e({})}))},logTraffic2Impression:function(e){r(["cmdLogImpression",e])},extendLogTraffic2Event:function(e){for(i=e,n=!1;t.length;){var r=t.shift();null!=r&&i(r.eventDescription,r.eventId,r.customProperties)}}}}();t.Z=n},15502:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(36125);function i(e,t){r.Z.logTraffic2Event(e,t)}},97729:function(e,t,n){e.exports=n(24254)}}]);