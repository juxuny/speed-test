(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3149:function(t,e,a){Promise.resolve().then(a.bind(a,6980))},6980:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return u}});var n=a(9268),i=a(8741),s=a.n(i),l=a(6006),r=t=>{let[e]=(0,l.useState)(t.imageUrl),[a,i]=(0,l.useState)(0),[s,r]=(0,l.useState)(0);return(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{width:100,height:100,src:"".concat(e,"?_t_=").concat(a),alt:e,onLoad:()=>{i(new Date().getTime()),r(t=>t+1)}}),(0,n.jsx)("a",{children:s})]})},u=()=>{let[t,e]=(0,l.useState)([]),a=(0,l.useCallback)(async()=>{try{var t,a,n;let i=await s().get("/data/images.json");200===i.status&&(null===(t=i.data)||void 0===t?void 0:t.list)&&(null===(a=i.data)||void 0===a?void 0:null===(n=a.list)||void 0===n?void 0:n.length)>0&&e(i.data.list)}catch(t){console.error(t)}},[]);return(0,l.useEffect)(()=>{a()},[a]),(0,n.jsx)("div",{children:t&&t.map((t,e)=>(0,n.jsx)(r,{imageUrl:t},e))})}}},function(t){t.O(0,[957,667,488,744],function(){return t(t.s=3149)}),_N_E=t.O()}]);