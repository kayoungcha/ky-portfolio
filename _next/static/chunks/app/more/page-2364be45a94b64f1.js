(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{9970:function(e,a,r){Promise.resolve().then(r.bind(r,1447))},2179:function(e,a,r){"use strict";r.d(a,{ao:function(){return readDoc},Rc:function(){return useReadDb}});var s=r(2265),i=r(994),o=r(4086);let n=(0,i.ZF)({apiKey:"AIzaSyBQFsve3bQkMZ-bbngCY3tCWUWi6hmozDc",authDomain:"myportfolio-148f2.firebaseapp.com",projectId:"myportfolio-148f2",storageBucket:"myportfolio-148f2.appspot.com",messagingSenderId:"793614042259",appId:"1:793614042259:web:bb05bda5cc9665a5717966"}),t=(0,o.ad)(n);function useReadDb(e,a,r){let i=a||"id",n=r||"asc",[c,l]=(0,s.useState)([]);async function getDb(){let a=(0,o.hJ)(t,e),r=(0,o.IO)(a,(0,o.Xo)(i,n)),s=await (0,o.PL)(r),c=await s.docs.map(e=>{let a=e.data(),r=e.id;return{docId:r,...a}});l(c)}return(0,s.useEffect)(()=>{getDb()},[e]),c}async function readDoc(e,a,r){let s=(0,o.hJ)(t,e),i=(0,o.IO)(s,(0,o.ar)(a,"==",r)),n=await (0,o.PL)(i),c=await n.docs.map(e=>{let a=e.data(),r=e.id;return{id:r,...a}});return c}},274:function(e,a,r){"use strict";function cloudinaryLoader(e){let{src:a}=e;return console.log({src:a}),a}r.r(a),r.d(a,{default:function(){return cloudinaryLoader}})},1447:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return More}});var s=r(7437),i=r(2265),o=r(2313),n=r.n(o),t=r(1396),c=r.n(t),l=r(6691),_=r.n(l),d=r(8278),p=r(875);r(8020),r(8751);var m=r(2179);function More(){let[e,a]=(0,i.useState)(""),[r,o]=(0,i.useState)({}),t=(0,d.oc)();(0,i.useEffect)(()=>{let s=location.search.split("=");(0,m.ao)("app","param",e).then(e=>{o(e[0])}),a(s[1]),s&&r&&r.detailImg&&t.update()},[e]);let[l,u]=(0,i.useState)(!1);return(0,s.jsxs)("div",{className:n().page_wrap,children:[(0,s.jsx)("div",{className:n().temporary_header,children:(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)(_(),{src:"./images/home-icon.png",alt:"홈 icon",width:32,height:32})})}),r&&e&&(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:n().info_wrap,children:[(0,s.jsxs)("div",{className:n().top_box,children:[(0,s.jsx)("div",{className:n().left_area,children:(0,s.jsx)(d.tq,{effect:"cards",grabCursor:!0,modules:[p.c4],className:["mySwiper",n().swiper].join(" "),children:r.detailImg&&r.detailImg.map((e,a)=>(0,s.jsx)(d.o5,{className:n()["swiper-slide"],children:(0,s.jsx)(_(),{src:e,width:200,height:433,alt:r.title+"예시화면"+a+"1"})},a))})}),(0,s.jsxs)("section",{className:n().right_area,children:[(0,s.jsx)("h2",{style:{color:r.mainColor||"#000"},children:r.title}),(0,s.jsxs)("div",{className:n().info_box,children:[(0,s.jsx)("p",{className:n().info,children:r.detailContent}),(0,s.jsxs)("p",{children:["참여 범위: ",r.devScope]}),(0,s.jsxs)("p",{children:["작업 기간 : ",r.devPeriod]})]}),(0,s.jsxs)("div",{className:n().felx_box,children:[(0,s.jsxs)("article",{className:n().dev_env,children:[(0,s.jsx)("h3",{children:"개발 환경"}),(0,s.jsx)("ul",{children:r.devInfo&&r.devInfo.map((e,a)=>{let r=Object.keys(e),i=Object.values(e);return(0,s.jsxs)("li",{children:[r[0],": ",i[0]," "]},a)})})]}),(0,s.jsxs)("article",{className:n().tool,children:[(0,s.jsx)("h3",{children:"개발 도구"}),(0,s.jsx)("ul",{children:r.useTool&&r.useTool.map(e=>(0,s.jsx)("li",{className:e,children:e},e))})]})," "]})]})]}),(0,s.jsxs)("section",{className:n().more_info,children:[(0,s.jsx)("h2",{children:"자세히 보기"}),(0,s.jsx)("iframe",{src:r.url}),(0,s.jsx)("div",{className:n().notice_wrap,style:l?{display:"none"}:{},children:(0,s.jsxs)("section",{className:n().notice,children:[(0,s.jsxs)("p",{children:["직접 작동해 볼 수 있는 카피 페이지입니다. ",(0,s.jsx)("br",{}),"어플 안에 내용은 모두 테스트 데이터로 실제 데이터와 다릅니다. ",(0,s.jsx)("br",{}),"웹에서 작동하게 만든 사이트로 실제 어플 구동과는 차이가 있을 수 있습니다.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"모든 이미지 업로드 서비스는 어플용 플러그인으로",(0,s.jsx)("br",{}),"카피 페이지에서는 실행 되지않습니다."]}),(0,s.jsx)("button",{onClick:()=>{l||u(!0)},children:"닫고 시작하기"})]})})]})]})})]})}},8751:function(){},2313:function(e){e.exports={page_wrap:"more-page_page_wrap__j9LmI",temporary_header:"more-page_temporary_header__WGv5V",info_wrap:"more-page_info_wrap__ppS2P",top_box:"more-page_top_box__K55_b",left_area:"more-page_left_area__QUCwq",right_area:"more-page_right_area__D_G2q",info_box:"more-page_info_box__XXpMj",info:"more-page_info__Ued3C",i_did:"more-page_i_did__aP7LO",tool:"more-page_tool__y_O19",dev_env:"more-page_dev_env__G8LTG",felx_box:"more-page_felx_box__0Bd8w",more_info:"more-page_more_info__vkUTO",notice_wrap:"more-page_notice_wrap__vSoUm",notice:"more-page_notice__2s1DM",swiper:"more-page_swiper__ULOjT","swiper-slide":"more-page_swiper-slide__aQb9_"}}},function(e){e.O(0,[358,249,971,472,744],function(){return e(e.s=9970)}),_N_E=e.O()}]);