(this["webpackJsonptech-news"]=this["webpackJsonptech-news"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(37),c=n.n(r),o=Object(a.createContext)(),s=Object(a.createContext)(),l=n(190),i=n(194),u=n(196),j=n(195),b=n(1),d=function(e){var t=e.entry,n=t.points,a=t.author,r=t.title,c=t.url,o=t.num_comments;return Object(b.jsx)(l.a,{children:Object(b.jsx)(i.a,{primary:Object(b.jsx)(u.a,{underline:"none",href:c,children:r}),secondary:Object(b.jsxs)(j.a,{color:"text.secondary",variant:"body2",children:[Object(b.jsx)(j.a,{component:"span",children:"".concat(n," point").concat(1===n?"":"s"," by ")}),Object(b.jsx)(j.a,{component:"span",sx:{fontStyle:"italic"},children:a}),Object(b.jsx)(j.a,{component:"span",children:" | ".concat(o," comments")})]})})})},p=Object(a.createContext)(),h=n(189),x=function(){var e=Object(a.useContext)(p);return Object(b.jsx)(a.Fragment,{children:null!==e.alert&&Object(b.jsx)(h.a,{severity:e.alert.type,children:e.alert.msg})})},g=n(187),O=n(188),f=n(193),m=n(200),y=n(199),v=n(181),w=function(){var e=Object(a.useContext)(s),t=e.changeSort,n=e.sort;return Object(b.jsxs)(y.a,{style:{float:"right"},sx:{mt:1},component:"fieldset",children:[Object(b.jsx)(v.a,{sx:{mr:2,display:{xs:"none",sm:"block"}},style:{textAlign:"right",position:"absolute",transform:"translate(-130%, -50%)",top:"50%"},component:"legend",children:"Sort by:"}),Object(b.jsxs)(f.a,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",value:n,onChange:function(e){t(e.target.value)},children:[Object(b.jsx)(m.a,{value:"search",control:Object(b.jsx)(O.a,{}),label:"Points"}),Object(b.jsx)(m.a,{value:"search_by_date",control:Object(b.jsx)(O.a,{}),label:"Newest"})]})]})},C=n(201),P=n(182);function S(){return Object(b.jsx)(P.a,{style:{width:"200px",margin:"auto",display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(b.jsx)(C.a,{})})}var E,k=function(){var e=Object(a.useContext)(s),t=Object(a.useContext)(p),n=e.getNews,r=e.news,c=e.loading,o=e.input,l=e.searchNews,i=e.currentPage,u=e.changePage,j=e.sort,h=t.setAlert,O=t.clearAlert,f=r.hits,m=r.nbPages,y=function(e,t){u(t-1)};return Object(a.useEffect)((function(){"tags=front_page"===o?n(i,j):l(o,i,j),!f&&!c&&h("No results found. Please try something else","error")}),[i,o,j]),Object(a.useEffect)((function(){c||0!==f.length||h("No results found. Please try something else","error"),c&&O()}),[l]),Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(x,{}),!c&&0!==f.length&&Object(b.jsx)(g.a,{count:m,page:i+1,onChange:y,color:"primary",size:"medium",sx:{mt:2},style:{position:"absolute"}}),!c&&0!==f.length&&Object(b.jsx)(w,{}),c?Object(b.jsx)(S,{}):f.map((function(e){return Object(b.jsx)(d,{entry:e},e.objectID)})),!c&&0!==f.length&&Object(b.jsx)(g.a,{count:m,page:i+1,onChange:y,color:"primary",size:"large",sx:{pb:4,mt:2}})]})},A=n(56),N=n.n(A),_=n(83),I=n(13),R=n(23),T="GET_NEWS",G="SEARCH_NEWS",M="CHANGE_PAGE",W="CHANGE_INPUT",H="CHANGE_SORT",z="LOAD",D="SET_ALERT",F="REMOVE_ALERT",L=function(e,t){switch(t.type){case G:return Object(R.a)(Object(R.a)({},e),{},{news:t.payload.news,loading:!1,input:t.payload.input});case M:return Object(R.a)(Object(R.a)({},e),{},{currentPage:t.payload});case W:return Object(R.a)(Object(R.a)({},e),{},{input:t.payload});case H:return Object(R.a)(Object(R.a)({},e),{},{sort:t.payload});case T:return Object(R.a)(Object(R.a)({},e),{},{news:t.payload.news,loading:!1});case z:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});default:return e}},J=function(e){var t=Object(a.useReducer)(L,{news:{},loading:!0,input:"tags=front_page",currentPage:0,sort:"search"}),n=Object(I.a)(t,2),r=n[0],c=n[1],o=function(){var e=Object(_.a)(N.a.mark((function e(){var t,n,a,o,s=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:r.currentPage,n=s.length>1&&void 0!==s[1]?s[1]:r.sort,c({type:z}),e.prev=3,e.next=6,fetch("http://hn.algolia.com/api/v1/".concat(n,"?").concat(r.input,"&page=").concat(t));case 6:return a=e.sent,e.next=9,a.json();case 9:o=e.sent,c({type:T,payload:{news:o}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(_.a)(N.a.mark((function e(t){var n,a,o,s,l=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:r.currentPage,a=l.length>2&&void 0!==l[2]?l[2]:r.sort,c({type:z}),e.prev=3,e.next=6,fetch("http://hn.algolia.com/api/v1/".concat(a,"?query=").concat(t,"&tags=story&page=").concat(n));case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,c({type:G,payload:{news:s,input:t}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(s.Provider,{value:{news:r.news,input:r.input,loading:r.loading,currentPage:r.currentPage,sort:r.sort,getNews:o,searchNews:l,changePage:function(e){c({type:M,payload:e})},resetPages:function(){c({type:M,payload:0})},changeInput:function(e){c({type:W,payload:e})},changeSort:function(e){c({type:H,payload:e})}},children:e.children})},q=n(25),B=n(185),U=n(183),V=n(96),Y=Object(V.a)(B.a)(E||(E=Object(q.a)(["\n  & label.Mui-focused,\n  label {\n    color: white;\n  }\n  & .MuiOutlinedInput-root {\n    &.Mui-focused fieldset,\n    fieldset {\n      border-color: white;\n    }\n    &:hover fieldset {\n      border-color: grey;\n    }\n  }\n"]))),K=function(){var e=Object(a.useContext)(s),t=Object(a.useContext)(p),n=e.resetPages,r=e.changeInput,c=t.setAlert,o=t.clearAlert,l=Object(a.useState)(""),i=Object(I.a)(l,2),u=i[0],j=i[1];return Object(b.jsx)(U.a,{component:"form",autoComplete:"off",onSubmit:function(e){e.preventDefault(),u?(n(),o(),r(u),j("")):c("Please write something!","warning",!0)},textColor:"white",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end",textColor:"white"},sx:{position:{xs:{position:"absolute",right:"0"},md:"initial"},width:{xs:"100%",md:"initial"}},children:Object(b.jsx)(Y,{id:"filled-search",label:"Search news",variant:"outlined",size:"small",value:u,onChange:function(e){j(e.target.value)},sx:{input:{color:"white"}}})})},Q=n(202),X=n(203),Z=n(99),$=n.n(Z),ee=n(198),te=n(101),ne=n.n(te),ae=n(100),re=n.n(ae),ce=function(){var e=Object(a.useContext)(o),t=e.mode,n=e.toggleMode;return Object(b.jsx)(P.a,{sx:{flexGrow:1,bgcolor:"background.default",color:"text.primary"},children:Object(b.jsx)(Q.a,{position:"static",children:Object(b.jsxs)(X.a,{children:[Object(b.jsx)(P.a,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},color:"inherit",sx:{mr:2},children:Object(b.jsx)($.a,{fontSize:"large",sx:{boxShadow:"2px 4px 3px rgba(0,0,0,0.3)"}})}),Object(b.jsx)(j.a,{variant:"h5",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",md:"block"},letterSpacing:8,ml:4,fontWeight:900,fontFamily:"Roboto Slab",textShadow:"2px 4px 3px rgba(0,0,0,0.5)"},children:"TECHY NEWS"}),Object(b.jsx)(K,{}),Object(b.jsx)(ee.a,{sx:{ml:2},onClick:function(){n()},color:"inherit",children:"dark"===t?Object(b.jsx)(re.a,{}):Object(b.jsx)(ne.a,{})})]})})})},oe=function(e,t){switch(t.type){case D:return t.payload;case F:return null;default:return e}},se=function(e){var t=Object(a.useReducer)(oe,null),n=Object(I.a)(t,2),r=n[0],c=n[1];return Object(b.jsx)(p.Provider,{value:{alert:r,setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c({type:D,payload:{msg:e,type:t}}),n&&setTimeout((function(){return c({type:F})}),3e3)},clearAlert:function(){c({type:F})}},children:e.children})},le=n(204),ie=n(85),ue=n(192),je=n(184),be=(n(131),function(){var e=Object(a.useContext)(o).mode,t=Object(a.useMemo)((function(){return Object(ie.a)({palette:{mode:e}})}),[e]);return Object(b.jsx)(J,{children:Object(b.jsx)(se,{children:Object(b.jsxs)(ue.a,{theme:t,children:[Object(b.jsx)(je.a,{}),Object(b.jsxs)(le.a,{className:"light"===e?"light--mode":"dark--mode",maxWidth:"md",sx:{bgcolor:"background.default",color:"text.primary"},children:[Object(b.jsx)(ce,{}),Object(b.jsx)(k,{})]})]})})})}),de=function(e){var t=Object(a.useState)("light"),n=Object(I.a)(t,2),r=n[0],c=n[1];return Object(b.jsx)(o.Provider,{value:{mode:r,toggleMode:function(){c((function(e){return"light"===e?"dark":"light"}))}},children:e.children})};c.a.render(Object(b.jsx)(de,{children:Object(b.jsx)(be,{})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.622a8b91.chunk.js.map