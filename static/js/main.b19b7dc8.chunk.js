(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,s){e.exports={wrapper:"styles_wrapper__2hDWy",about:"styles_about__lYKcO",profile:"styles_profile__BqbUP",skillSet:"styles_skillSet__2W3iT",skill:"styles_skill__2UAY8",fillPath:"styles_fillPath__1PNWT",percentageFill:"styles_percentageFill__30OF5",projects:"styles_projects__1bWuT",projectsImg:"styles_projectsImg__2zg79",projectContainer:"styles_projectContainer__2H9I1",projectTitle:"styles_projectTitle__2GPFK",services:"styles_services__3ZVon",serviceType:"styles_serviceType__1_n0h",type:"styles_type__3o85C",contact:"styles_contact__2wX69",address:"styles_address__1PLVJ",contactForm:"styles_contactForm__3xd0R",err:"styles_err__2s6mr",success:"styles_success__VWZYq",btnDisabled:"styles_btnDisabled__2Q18p",webDesign:"styles_webDesign__1YUS-",respDesign:"styles_respDesign__YmD-O",webDev:"styles_webDev__362pN",contactInfo:"styles_contactInfo__1nkwq"}},,function(e,t,s){e.exports={menuIcon:"styles_menuIcon__CYnwV",mobMenu:"styles_mobMenu__3aL6T",toggleMenu:"styles_toggleMenu__qUdqm"}},,,function(e,t,s){e.exports={social:"styles_social__3nfr4",chevron:"styles_chevron__2QzPU"}},,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var c=s(2),i=s.n(c),n=s(7),r=s.n(n),a=(s(12),s(13),s(0));var l=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("p",{children:"copyrights 2021 | all rights reserved | arun portfolio"})})},o=s(3),j=s.n(o);var d=function(e){var t=e.top,s=e.projectsRef,i=e.servicesRef,n=e.contactRef,r=Object(c.useRef)(),l=function(e){e.current.scrollIntoView()};return Object(a.jsx)("header",{ref:t,children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("h2",{children:"LOGO"}),Object(a.jsxs)("div",{className:j.a.menuIcon,onClick:function(){r.current.classList.toggle(j.a.toggleMenu)},children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{ref:r,className:j.a.mobMenu,children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Home"}),Object(a.jsx)("li",{children:"About"}),Object(a.jsx)("li",{onClick:function(){l(s)},children:"Projects"}),Object(a.jsx)("li",{onClick:function(){l(i)},children:"Services"}),Object(a.jsx)("li",{onClick:function(){l(n)},children:"Contact"})]}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text"}),Object(a.jsx)("button",{children:"Search"})]})]})]})})},u=s(6),b=s.n(u),p=s.p+"static/media/facebook.2ca05ac4.svg",m=s.p+"static/media/linkedin.03f1d164.svg",f=s.p+"static/media/twitter.e7886f46.svg",O=s.p+"static/media/instagram.f0cfa30d.svg",h=function(e){window.open(e)},x="https://trafficsignal-e99ca.web.app/",g="https://todo-list-286f2.web.app/",v="https://arunsullia.github.io/tik-tac-toe/",_="https://www.facebook.com/arunmb45",y="https://www.linkedin.com/in/arunmb45",w="https://www.twitter.com/arunmb45",N="https://www.instagram.com/arun_sullia";var T=function(e){var t=e.top,s=Object(c.useRef)();Object(c.useEffect)((function(){window.addEventListener("scroll",i)}),[]);var i=function(){var e=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);s.current.style.right=e>500?"25px":"-65px"};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:b.a.social,children:[Object(a.jsx)("img",{src:p,alt:"facebook",onClick:function(){return h(_)}}),Object(a.jsx)("img",{src:m,alt:"linkedin",onClick:function(){return h(y)}}),Object(a.jsx)("img",{src:f,alt:"twitter",onClick:function(){return h(w)}}),Object(a.jsx)("img",{src:O,alt:"instagram",onClick:function(){return h(N)}})]}),Object(a.jsx)("div",{className:b.a.chevron,onClick:function(){t.current.scrollIntoView()},ref:s,children:Object(a.jsx)("div",{})})]})},k=s(1),C=s.n(k),L=s.p+"static/media/profile.ebd1b700.jpg";var R=function(){var e=[{id:1,skill:"JavaScript",rating:.75},{id:2,skill:"Html",rating:.7},{id:3,skill:"css",rating:.6},{id:4,skill:"React js",rating:.65},{id:5,skill:"php",rating:.5},{id:6,skill:"firebase",rating:.4}];return Object(a.jsx)("section",{id:C.a.about,children:Object(a.jsxs)("div",{className:C.a.wrapper,children:[Object(a.jsx)("h1",{children:"About"}),Object(a.jsxs)("div",{className:C.a.profile,children:[Object(a.jsx)("img",{src:L,alt:"profile-pic"}),Object(a.jsx)("p",{children:"Hi, my name is Arun. I am a front end developer and a programmer living in Bangalore, India. I make web applications, usually with javascript. I have diverse set of skills, ranging from design, to HTML + CSS + javascript, ReactJS UI development. My expertise is in the area of responsive design. With every line of code, I strive to make the weeb a beautiful palce."})]}),Object(a.jsx)("h2",{children:"Skills"}),Object(a.jsx)("div",{className:C.a.skillSet,children:e&&e.map((function(e,t){return Object(a.jsxs)("div",{className:C.a.skill,children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:e.skill}),Object(a.jsxs)("li",{children:[100*e.rating,"%"]})]}),Object(a.jsx)("div",{className:C.a.fillPath,children:Object(a.jsx)("div",{className:C.a.percentageFill,style:{width:"".concat(100*e.rating,"%")}})})]},e.id)}))})]})})},M=s(4);var q=function(e){var t=e.contactRef,s=Object(c.useState)(""),i=Object(M.a)(s,2),n=i[0],r=i[1],l=Object(c.useState)(""),o=Object(M.a)(l,2),j=o[0],d=o[1],u=Object(c.useState)(""),b=Object(M.a)(u,2),p=b[0],m=b[1],f=/^(?=[^@]{4,}@)([\w.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z.]*[a-zA-Z])$/,O=/[a-zA-Z]{3,}/,h=/[0-9]/,x=Object(c.useRef)(),g=Object(c.useRef)(),v=Object(c.useRef)(),_=Object(c.useRef)(),y=Object(c.useRef)();return Object(c.useEffect)((function(){x.current.innerHTML=""}),[n]),Object(c.useEffect)((function(){g.current.innerHTML=""}),[j]),Object(c.useEffect)((function(){v.current.innerHTML=""}),[p]),Object(a.jsx)("section",{id:C.a.contact,ref:t,children:Object(a.jsxs)("div",{className:C.a.wrapper,children:[Object(a.jsx)("h1",{children:"Contact"}),Object(a.jsxs)("div",{className:C.a.contactInfo,children:[Object(a.jsxs)("div",{className:C.a.address,children:[Object(a.jsx)("h2",{children:"Address"}),Object(a.jsxs)("p",{children:["sullia, DK",Object(a.jsx)("br",{}),"Karnataka",Object(a.jsx)("br",{}),"India -574239"]})]}),Object(a.jsx)("div",{className:C.a.contactForm,children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault();var t=!0;if(x.current.innerHTML="",g.current.innerHTML="",v.current.innerHTML="",""===n?(x.current.innerHTML="Please fill the name",t=!0):h.test(n)?(x.current.innerHTML="Numbers not allowed",t=!0):O.test(n)?t=!1:(x.current.innerHTML="Min 3 charaters required",t=!0),""===j?(g.current.innerHTML="Please fill the email",t=!0):f.test(j)?t=!1:(g.current.innerHTML="Please enter a valid email",t=!0),""===p?(v.current.innerHTML="Message cannot be blank",t=!0):t=!1,t)console.log("invalid form data");else{_.current.innerHTML="Sending...",_.current.classList.add(C.a.btnDisabled),_.current.disabled=!0;new Promise((function(e,t){e({status:200,data:[]})})).then((function(e){console.log(e),_.current.innerHTML="Send message",_.current.classList.remove(C.a.btnDisabled),_.current.disabled=!1,y.current.style.opacity="1",setTimeout((function(){y.current.style.opacity="0"}),5e3)})).catch((function(e){console.log(e)}))}},children:[Object(a.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"name*",value:n}),Object(a.jsx)("span",{className:C.a.err,ref:x}),Object(a.jsx)("input",{type:"email*",onChange:function(e){return d(e.target.value)},placeholder:"email",value:j}),Object(a.jsx)("span",{className:C.a.err,ref:g}),Object(a.jsx)("textarea",{onChange:function(e){return m(e.target.value)},placeholder:"message*",value:p,rows:"4"}),Object(a.jsx)("span",{className:C.a.err,ref:v}),Object(a.jsx)("button",{ref:_,children:"Send message"}),Object(a.jsx)("span",{className:C.a.success,ref:y,children:"Message sent!!"})]})})]})]})})},S=s.p+"static/media/traffic.500de47d.png",I=s.p+"static/media/todo.f9d19577.png",D=s.p+"static/media/tic-tac-toe.e5bbb035.png",H=s.p+"static/media/pic-4.dd64e95b.jpg",P=s.p+"static/media/pic-5.24ad5e18.jpg",F=s.p+"static/media/pic-6.254ee6c1.jpg",A=s.p+"static/media/pic-7.b09da6d9.jpg",z=s.p+"static/media/pic-8.c0c63675.jpg";var E=function(e){var t=e.projectsRef;return Object(a.jsx)("section",{id:C.a.projects,ref:t,children:Object(a.jsxs)("div",{className:C.a.wrapper,children:[Object(a.jsx)("h1",{children:"Projects"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt distinctio, sunt dolor nobis maiores minus illum temporibus non iusto assumenda sed eaque fuga voluptatem, blanditiis explicabo deserunt officiis dolores asperiores quidem? Nobis iste repellendus quisquam maiores illo dolores commodi unde dignissimos, neque"}),Object(a.jsxs)("div",{className:C.a.projectsImg,children:[Object(a.jsxs)("div",{className:C.a.projectContainer,onClick:function(){return h(x)},children:[Object(a.jsx)("img",{src:S,alt:"traffic-img"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"Automatic Traffic Signal"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,onClick:function(){return h(g)},children:[Object(a.jsx)("img",{src:I,alt:"todo-img"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"Todo List"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,onClick:function(){return h(v)},children:[Object(a.jsx)("img",{src:D,alt:"tic-tac-toe-img"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"Tic Tac Toe"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,children:[Object(a.jsx)("img",{src:H,alt:"pic-4.jpg"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"project 3"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,children:[Object(a.jsx)("img",{src:P,alt:"pic-5.jpg"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"project 3"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,children:[Object(a.jsx)("img",{src:F,alt:"pic-6.jpg"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"project 3"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,children:[Object(a.jsx)("img",{src:A,alt:"pic-7.jpg"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"project 3"})]}),Object(a.jsxs)("div",{className:C.a.projectContainer,children:[Object(a.jsx)("img",{src:z,alt:"pic-8.jpg"}),Object(a.jsx)("div",{className:C.a.projectTitle,children:"project 3"})]})]})]})})},W=s.p+"static/media/service-1.45faf00c.png",Y=s.p+"static/media/service-2.fe929d5f.png",Z=s.p+"static/media/service-3.d2c976f6.png";var V=function(e){var t=e.servicesRef;return Object(a.jsx)("section",{id:C.a.services,ref:t,children:Object(a.jsxs)("div",{className:C.a.wrapper,children:[Object(a.jsx)("h1",{children:"Services"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt distinctio, sunt dolor nobis maiores minus illum temporibus non iusto assumenda sed eaque fuga voluptatem, blanditiis explicabo deserunt officiis dolores asperiores quidem? Nobis iste repellendus quisquam maiores illo dolores commodi unde dignissimos, neque"}),Object(a.jsxs)("div",{className:C.a.serviceType,children:[Object(a.jsxs)("div",{className:"".concat(C.a.type," ").concat(C.a.webDesign),children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:W,alt:"service-1"})}),Object(a.jsx)("h2",{children:"Web design"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quisquam."})]}),Object(a.jsxs)("div",{className:"".concat(C.a.type," ").concat(C.a.respDesign),children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:Y,alt:"service-2"})}),Object(a.jsx)("h2",{children:"Responsive design"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quisquam."})]}),Object(a.jsxs)("div",{className:"".concat(C.a.type," ").concat(C.a.webDev),children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:Z,alt:"service-3"})}),Object(a.jsx)("h2",{children:"Web Development"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quisquam."})]})]})]})})};var U=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useRef)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{top:e,projectsRef:t,servicesRef:s,contactRef:i}),Object(a.jsx)(R,{}),Object(a.jsx)(E,{projectsRef:t}),Object(a.jsx)(V,{servicesRef:s}),Object(a.jsx)(q,{contactRef:i}),Object(a.jsx)(l,{}),Object(a.jsx)(T,{top:e})]})};var J=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(U,{})})},Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),i(e),n(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),Q()}],[[15,1,2]]]);
//# sourceMappingURL=main.b19b7dc8.chunk.js.map