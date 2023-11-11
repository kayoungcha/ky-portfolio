(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4025:function(e,s,a){Promise.resolve().then(a.bind(a,390))},274:function(e,s,a){"use strict";function cloudinaryLoader(e){let{src:s}=e;return s}a.r(s),a.d(s,{default:function(){return cloudinaryLoader}})},390:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Home}});var i=a(7437),l=a(2265),r=a(7269),n=a.n(r);function useScroll(){let[e,s]=(0,l.useState)(0),a=(0,l.useMemo)(()=>n()(()=>{s(window.scrollY)},300),[]);return(0,l.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[a]),{scrollY:e}}var t=a(9142),c=a.n(t);function Header(e){let s=e.scroll;function handleClick(s,a){s.preventDefault(),e.movePage(a)}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("header",{className:[c().gnb,s>100&&c().transform_header].join(" "),style:s>100?{animation:"none"}:{},children:(0,i.jsxs)("nav",{children:[(0,i.jsx)("a",{href:"#",className:e.profileView&&!e.portfolioView?c().active:"",onClick:e=>handleClick(e,0),title:"introduce",children:s<100?"소개":"I"}),(0,i.jsx)("a",{href:"#",className:e.portfolioView?c().active:"",onClick:e=>handleClick(e,1),title:"portfolio",children:s<100?"포트폴리오":"P"}),(0,i.jsx)("a",{href:"#",className:!e.skillView||e.portfolioView||e.footerView?"":c().active,onClick:e=>handleClick(e,2),title:"skill",children:s<100?"사용 가능 기술":"S"}),(0,i.jsx)("a",{href:"#",className:e.footerView?c().active:"",onClick:e=>handleClick(e,3),title:"More info",children:s<100?"더 많은 정보":"M"})]})})})}var o=a(4073),_=a.n(o),m=a(6691),d=a.n(m),h=a(994),p=a(4086);let x=(0,h.ZF)({apiKey:"AIzaSyBQFsve3bQkMZ-bbngCY3tCWUWi6hmozDc",authDomain:"myportfolio-148f2.firebaseapp.com",projectId:"myportfolio-148f2",storageBucket:"myportfolio-148f2.appspot.com",messagingSenderId:"793614042259",appId:"1:793614042259:web:bb05bda5cc9665a5717966"}),v=(0,p.ad)(x);function useReadDb(e,s,a){let i=s||"id",r=a||"asc",[n,t]=(0,l.useState)([]);async function getDb(){let s=(0,p.hJ)(v,e),a=(0,p.IO)(s,(0,p.Xo)(i,r)),l=await (0,p.PL)(a),n=await l.docs.map(e=>{let s=e.data(),a=e.id;return{id:a,...s}});console.log({dataArr:n}),t(n)}return(0,l.useEffect)(()=>{getDb()},[e]),n}function HoneAppPp(e){let s=e.scroll,a=useReadDb("app"),[r,n]=(0,l.useState)(null),handleMouseOver=e=>{n(e)},handleMouseOut=()=>{n(null)},t=(0,l.useRef)([]),[c,o]=(0,l.useState)({});return(0,l.useEffect)(()=>{if(t.current){for(let e=0;e<t.current.length;e++){let s=t.current[e];if(!s)break;let a=new IntersectionObserver(i=>{let l="set"+e;i.forEach(e=>{e.isIntersecting&&(o(s=>({...s,[l]:e.isIntersecting})),a.unobserve(s))})},{threshold:.3});a.observe(s)}return()=>{c["set"+Number(t.current.length-1)]&&s<1200&&o({})}}},[s]),(0,i.jsxs)("div",{className:_().app_pp_wrap,children:[(0,i.jsx)("h2",{children:"앱 개발 포트폴리오"}),(0,i.jsx)("ul",{children:a.map((e,s)=>(0,i.jsxs)("li",{onMouseOver:()=>handleMouseOver(e.id),onMouseOut:handleMouseOut,ref:e=>t.current[s]=e,className:c["set"+s]?_().active_card:"",children:[(0,i.jsx)(d(),{src:e.titleImg,alt:e.title,width:300,height:650}),(0,i.jsxs)("article",{className:[_().info_box,r==e.id?_().active:""].join(" "),children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.content}),(0,i.jsxs)("div",{className:_().icon_img_wrap,children:[(0,i.jsx)("h4",{children:"사용 기술"}),e.useTool.map((e,s)=>(0,i.jsx)("span",{children:e},s))]})]})]},e.id))})]})}var u=a(4259),w=a.n(u);function HomeSkill(e){let s=e.scroll;return(0,i.jsxs)("div",{className:w().skill_wrap,children:[(0,i.jsx)("h2",{className:w().b_title,children:"사용 가능 기술"}),(0,i.jsxs)("ul",{className:w().skill_list,children:[(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),0),")")},children:[(0,i.jsx)("img",{src:"images/html-icon.png",alt:"html icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"HTML"}),(0,i.jsx)("div",{className:w().wave_tow,children:"90% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.03,120),-50),")")},children:[(0,i.jsx)("img",{src:"images/css-icon.png",alt:"css icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"CSS"}),(0,i.jsx)("div",{className:w().wave_tow,children:"90% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.03,120),-20),")")},children:[(0,i.jsx)("img",{src:"images/js-icon.png",alt:"javascript icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"JAVASCRIPT"}),(0,i.jsx)("div",{className:w().wave_tow,children:"75% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),-30),")")},children:[(0,i.jsx)("img",{src:"images/ts-icon.png",alt:"typescript icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"TYPESCRIPT"}),(0,i.jsx)("div",{className:w().wave_tow,children:"75% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.03,120),-80),")")},children:[(0,i.jsx)("img",{src:"images/ionic-icon.png",alt:"ionic icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"ionic"}),(0,i.jsx)("div",{className:w().wave_tow,children:"70% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.03,120),-60),")")},children:[(0,i.jsx)("img",{src:"images/scss-icon.png",alt:"scss icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"SCSS"}),(0,i.jsx)("div",{className:w().wave_tow,children:"80% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),-50),")")},children:[(0,i.jsx)("img",{src:"images/firebase-icon.png",alt:"fieebase icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"FIREBASE"}),(0,i.jsx)("div",{className:w().wave_tow,children:"60% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),-50),")")},children:[(0,i.jsx)("img",{src:"images/nextjs-icon.png",alt:"nextjs icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"NEXT.JS"}),(0,i.jsx)("div",{className:w().wave_tow,children:"40% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),-100),")")},children:[(0,i.jsx)("img",{src:"images/react-icon.png",alt:"react icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"REACT"}),(0,i.jsx)("div",{className:w().wave_tow,children:"40% 사용가능"})]})]}),(0,i.jsxs)("li",{className:w().icon_box,style:{transform:"matrix(1, 0, 0, 1, 0, ".concat(Math.max(Math.min((6800-s)*.05,120),-50),")")},children:[(0,i.jsx)("img",{src:"images/angular-icon-b.png",alt:"angular icon"}),(0,i.jsxs)("div",{className:w().wave_wrap,children:[(0,i.jsx)("div",{className:w().wave_one,children:"ANGULAR"}),(0,i.jsx)("div",{className:w().wave_tow,children:"65% 사용가능"})]})]})]})]})}var f=a(1533),j=a(8278);a(8020),a(5615),a(9194);var b=a(9375),g=a.n(b);function HomeSlider(e){let s=e.scroll,a=useReadDb("publishing"),r=(0,l.useRef)(null),n=(0,l.useRef)(null),[t,c]=(0,l.useState)(null),handleClick=e=>{t==e?c(null):c(e)};return s>1300&&null!==t&&c(null),(0,i.jsxs)("div",{className:[g().swiper_wrap,s>1?g().none_box:""].join(" "),children:[(0,i.jsx)("h2",{children:"앱 퍼블리싱 포트폴리오"}),(0,i.jsxs)("div",{className:g().slide_area,children:[(0,i.jsx)(j.tq,{navigation:{prevEl:r.current,nextEl:n.current},modules:[f.W_],slidesPerView:1,breakpoints:{560:{slidesPerView:2,spaceBetween:16},767:{slidesPerView:3,spaceBetween:16},976:{slidesPerView:4,spaceBetween:16},1200:{slidesPerView:5}},children:a.map(e=>(0,i.jsxs)(j.o5,{className:g().slide_card,onClick:()=>handleClick(e.id),children:[(0,i.jsx)("div",{className:[g().card_front,t==e.id&&g().active_front].join(" "),children:(0,i.jsx)(d(),{src:e.titleImg,alt:e.title,width:200,height:433,className:g().slide_img})}),(0,i.jsxs)("div",{className:[g().card_back,t==e.id&&g().active_back].join(" "),children:[(0,i.jsx)("h4",{className:g().back_title,children:e.title}),(0,i.jsx)("p",{children:e.content}),(0,i.jsx)("h4",{className:g().tool_title,children:"사용 기술"}),(0,i.jsx)("p",{className:g().tool_area,children:e.useTool.map((e,s)=>(0,i.jsx)("span",{children:e},s))})]})]},e.id))}),(0,i.jsx)("button",{className:g().prev_btn,ref:r,onClick:()=>handleClick(null),children:"이전으로"}),(0,i.jsx)("button",{className:g().next_btn,ref:n,onClick:()=>handleClick(null),children:"다음으로"})]})]})}var N=a(1766),k=a.n(N);function HomeWebPp(e){let s=e.scroll,a=useReadDb("webDb"),[r,n]=(0,l.useState)(null),t=(0,l.useRef)([]),[c,o]=(0,l.useState)({});return(0,l.useEffect)(()=>{if(t.current){for(let e=0;e<t.current.length;e++){let s=t.current[e];if(!s)break;let a=new IntersectionObserver(i=>{let l="set"+e;i.forEach(e=>{e.isIntersecting&&(o(s=>({...s,[l]:e.isIntersecting})),a.unobserve(s))})},{threshold:.5});a.observe(s)}return()=>{c["set"+Number(t.current.length-1)]&&s<1200&&o({})}}},[s]),(0,i.jsxs)("div",{className:k().web_pp_wrap,children:[(0,i.jsx)("h2",{children:"웹 포트폴리오 퍼블리싱 + 개발"}),(0,i.jsx)("ul",{children:a.map((e,s)=>(0,i.jsx)("li",{ref:e=>t.current[s]=e,className:c["set"+s]?k().active:"",children:(0,i.jsxs)("div",{className:k().ex_box,children:[(0,i.jsx)(d(),{src:e.titleImg,alt:e.content,width:520,height:295,className:k().web_img}),(0,i.jsxs)("article",{children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsxs)("div",{className:k().icon_img_wrap,children:[(0,i.jsx)("h4",{children:"사용 기술"}),(0,i.jsx)("div",{className:k().toolbox,children:e.useTool.map((e,s)=>(0,i.jsx)("span",{className:e,children:e},s))})]})]})]})},e.id))})]})}var M=a(4699),y=a.n(M);function Home(){var e,s;function textAni(){let e=[...Array.from("노력해서 되는 것들은 늘 즐겁습니다."),"<br />",...Array.from("프론트엔드 개발자"),"myName",...Array.from("입니다.")],s=e.indexOf("myName");return e.map((e,a)=>"<br />"==e?(0,i.jsx)("br",{},a):"myName"==e?(0,i.jsx)("strong",{style:{animationDelay:"".concat(3.5+Number(.1*a),"s")},children:"\xa0“차가영”\xa0"},a):(0,i.jsx)("span",{style:{animationDelay:a<s?"".concat(3.5+Number(.1*a),"s"):"".concat(4+Number(.1*a),"s")},children:e},a))}let{scrollY:a}=useScroll(),[r,n]=(0,l.useState)(!1),[t,c]=(0,l.useState)(!1),[o,_]=(0,l.useState)(!1),[m,h]=(0,l.useState)(!1),p=(0,l.useRef)([]);function movePage(e){let s=p.current[e];s&&(0==e?window.scrollTo({top:0,left:0,behavior:"smooth"}):s.scrollIntoView({behavior:"smooth"}))}return(0,l.useEffect)(()=>{p.current&&p.current.forEach((e,s)=>{let a=new IntersectionObserver(e=>{e.forEach(e=>{0==s&&n(e.isIntersecting),1==s&&c(e.isIntersecting),2==s&&_(e.isIntersecting),3==s&&h(e.isIntersecting)})},{threshold:0==s?0:.1});a.observe(e)})},[a]),console.log({scrollY:a}),console.log(((null===(e=p.current[2])||void 0===e?void 0:e.offsetTop)||0)-500-a),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Header,{scroll:a,profileView:r,portfolioView:t,skillView:o,footerView:m,movePage:movePage}),(0,i.jsxs)("main",{className:y().wrap,children:[(0,i.jsx)("div",{className:y().profile_wrap,style:{backgroundColor:"rgb(15 0 28 / ".concat(Math.min(-250- -a,100),"%)")},ref:e=>p.current[0]=e,children:(0,i.jsxs)("section",{className:[y().profile_box,a>400?y().scroll_over:""].join(" "),children:[(0,i.jsx)("h2",{children:"소개"}),(0,i.jsxs)("div",{className:y().info_box,children:[(0,i.jsx)("div",{className:y().left,children:(0,i.jsx)(d(),{src:"images/profile_img.jpg",alt:"프로필 이미지",width:212,height:272})}),(0,i.jsxs)("div",{className:y().right,children:[(0,i.jsxs)("p",{className:y().right_text,children:[(0,i.jsx)("span",{className:y().txt1,children:"시작은 퍼블리셔"}),(0,i.jsx)("span",{className:y().txt2,children:"목표는 풀스텍 개발자"})]}),(0,i.jsxs)("p",{className:y().right_text,children:[(0,i.jsx)("span",{className:y().txt3,children:"노력형 개발자"}),(0,i.jsx)("span",{className:y().txt4,children:"앱 / 웹 에이전시 경력 3년"})]}),(0,i.jsx)("p",{className:y().info_main_text,children:textAni()})]})]})]})}),(0,i.jsxs)("div",{className:y().pp_wrap,style:o?{backgroundColor:"rgb(15 0 28 / ".concat(Math.max(((null===(s=p.current[2])||void 0===s?void 0:s.offsetTop)||0)-600-a,9),"%)")}:{backgroundColor:"rgb(15 0 28 / ".concat(Math.min(-250- -a,100),"%)")},ref:e=>p.current[1]=e,children:[(0,i.jsx)("section",{className:y().publishing_box,children:(0,i.jsx)(HomeSlider,{scroll:a})}),(0,i.jsx)("section",{children:(0,i.jsx)(HoneAppPp,{scroll:a})}),(0,i.jsx)("section",{children:(0,i.jsx)(HomeWebPp,{scroll:a})})]}),(0,i.jsx)("section",{className:y().skill_wrap,ref:e=>p.current[2]=e,children:(0,i.jsx)(HomeSkill,{scroll:a})})]}),(0,i.jsx)("div",{ref:e=>p.current[3]=e})]})}},9142:function(e){e.exports={gnb:"header_gnb__mqheH","profile-animate":"header_profile-animate__oWcvP",transform_header:"header_transform_header__GhWm8",active:"header_active__d_7o5"}},4073:function(e){e.exports={app_pp_wrap:"home-app-pp_app_pp_wrap__Ij13k",active_card:"home-app-pp_active_card__TPPIa",info_box:"home-app-pp_info_box__uncND",active:"home-app-pp_active__40K9p",icon_img_wrap:"home-app-pp_icon_img_wrap__0rytL"}},4259:function(e){e.exports={skill_wrap:"home-skill_skill_wrap__xNdtu",b_title:"home-skill_b_title__GVt3K",icon_box:"home-skill_icon_box__kGiph",wave_wrap:"home-skill_wave_wrap__J_hJB",wave_one:"home-skill_wave_one__J4c04",wave_tow:"home-skill_wave_tow___bsbu",move:"home-skill_move__o8nVz"}},9375:function(e){e.exports={swiper_wrap:"home-slider_swiper_wrap__88wAk",slide_area:"home-slider_slide_area__IlDYA",slide_card:"home-slider_slide_card__LJhdm",card_front:"home-slider_card_front__ECTR6",card_back:"home-slider_card_back__0ZqL2",active_front:"home-slider_active_front__n4QzN",active_back:"home-slider_active_back__1SmsL",slide_img:"home-slider_slide_img__a6HAo",prev_btn:"home-slider_prev_btn__h86M8",next_btn:"home-slider_next_btn__PXBiX",back_title:"home-slider_back_title__zHvPF",tool_area:"home-slider_tool_area__cnlZn",tool_title:"home-slider_tool_title__1U0vX",none_box:"home-slider_none_box__koot0"}},1766:function(e){e.exports={web_pp_wrap:"home-web-pp_web_pp_wrap__gGNnv",active:"home-web-pp_active__xWts0",ex_box:"home-web-pp_ex_box__hmusc",web_img:"home-web-pp_web_img__rhLU3",icon_img_wrap:"home-web-pp_icon_img_wrap__2Rmxr",toolbox:"home-web-pp_toolbox__LNpJ5",fream_wrap:"home-web-pp_fream_wrap__rUY3V"}},4699:function(e){e.exports={wrap:"page_wrap__JgDSH",profile_wrap:"page_profile_wrap__mfblw",profile_box:"page_profile_box__4SYhT","profile-animate":"page_profile-animate__IUP2s",scroll_over:"page_scroll_over__TU2Ok",info_box:"page_info_box__XobZR","info-animate":"page_info-animate__jGAIt",left:"page_left__Qm7MR",right:"page_right__dhBbZ",right_text:"page_right_text__xtEWk","reversal-animate":"page_reversal-animate__skKVm",txt1:"page_txt1___ZzHn",txt2:"page_txt2__WO8aS",txt3:"page_txt3__JnEfF",txt4:"page_txt4__1Fg2e",info_main_text:"page_info_main_text__quG1Y","text-animate":"page_text-animate__yBYJ0",pp_wrap:"page_pp_wrap__zhSDg",publishing_box:"page_publishing_box__PQF7h",skill_wrap:"page_skill_wrap__bxfLN"}}},function(e){e.O(0,[358,986,921,971,472,744],function(){return e(e.s=4025)}),_N_E=e.O()}]);