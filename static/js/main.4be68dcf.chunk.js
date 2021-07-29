(this["webpackJsonpurl-shorten-app"]=this["webpackJsonpurl-shorten-app"]||[]).push([[0],{37:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(12),n=s.n(a),i=s(13),r=s(41),l=s(42),o=s(1);var d=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"navbar-box",children:Object(o.jsxs)(r.a,{bg:"none",expand:"lg",children:[Object(o.jsx)(r.a.Brand,{href:"#home",children:Object(o.jsx)("img",{id:"logo-header",src:"images/logo.svg",alt:"logo"})}),Object(o.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav",id:"nav-toggle",onClick:function(){return a(!s)}}),Object(o.jsxs)(r.a.Collapse,{id:"basic-navbar-nav",className:"navbar-item-clp",bg:"dark",children:[Object(o.jsxs)(l.a,{className:"mr-auto nav-items",children:[Object(o.jsx)(l.a.Link,{href:"#feature",id:"feature",className:"nav-text",children:"Feature"}),Object(o.jsx)(l.a.Link,{href:"#pricing",id:"pricing",className:"nav-text",children:"Pricing"}),Object(o.jsx)(l.a.Link,{href:"#resources",id:"resources",className:"nav-text",children:"Resources"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(l.a,{className:"nav-items",children:[Object(o.jsx)(l.a.Link,{href:"#login",id:"login",className:"nav-text",children:"Login"}),Object(o.jsx)(l.a.Link,{href:"#sign-up",id:"sign-up",className:"nav-text",children:"Sign Up"})]})]})]})}),Object(o.jsxs)("section",{id:"intro-box",children:[Object(o.jsx)("img",{id:"intro-bg-img",className:"".concat(s&&"imgDisplay-mobile"," imageDisplay"),src:"images/illustration-working.svg",alt:"working illustration"}),Object(o.jsxs)("div",{id:"intro-text-box",children:[Object(o.jsx)("h1",{id:"intro-title",children:" More than just shorter links"}),Object(o.jsx)("p",{id:"intro-paragraph",className:"text",children:"  Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(o.jsx)("button",{className:"intro-btn",children:"Get Started"})]})]})]})},j=s(11),b=s.n(j),x=s(18);function h(e){return/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%.\+#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%\+.#?&//=])|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%.\+#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%\+.#?&//=])/g.test(e)}var u=function(){var e="https://api.shrtco.de/v2/shorten?url=",t=Object(c.useState)(null),s=Object(i.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(localStorage.length+1),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(c.useState)(localStorage),m=Object(i.a)(u,2),O=m[0],g=m[1],p="card-container-id-";function v(){return(v=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.body.style.cursor="progress",!a){e.next=7;break}return e.next=4,f();case 4:document.body.style.cursor="default",e.next=8;break;case 7:alert("please enter a link");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(b.a.mark((function t(){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h(s=e+a)){t.next=6;break}return t.next=4,fetch(s).then((function(e){return e.json()})).then((function(e){e.ok?(j((function(e){return e+1})),k(e),n(null)):alert(e.error)}),(function(e){console.error("error",e)})).catch((function(e){return alert("sorry! looks like something went wrong, please try again later")}));case 4:t.next=7;break;case 6:alert("please enter a valid link");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(b.a.mark((function e(t){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={input:t.result.original_link,res:t.result.full_short_link},c=p+d,localStorage.setItem(c,JSON.stringify(s)),g(localStorage);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{id:"shorten-link-box",children:[Object(o.jsxs)("div",{id:"shorten-func-box",children:[Object(o.jsx)("input",{id:"link-input",placeholder:"shorten a link here...",onChange:function(e){n(e.target.value)},value:a||""}),Object(o.jsx)("button",{className:"shorten-btn",onClick:function(){return v.apply(this,arguments)},children:"Shorten It!"})]}),Object(o.jsx)("div",{id:"result-cards-container",children:0===localStorage.length?null:Object.keys(O).sort().map((function(e){var t=JSON.parse(O.getItem(e)),s=t.input,c=t.res;return Object(o.jsx)("div",{id:e,className:"card-container",children:Object(o.jsxs)("div",{className:"result-card",children:[Object(o.jsx)("div",{className:"card-elemt-container",children:Object(o.jsx)("p",{className:"result-card-text card-input",children:s})}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"card-elemt-container",children:Object(o.jsx)("p",{className:"result-card-text card-res",children:c})}),Object(o.jsx)("div",{className:"card-elemt-container",children:Object(o.jsx)("button",{className:"shorten-btn copy-btn",onClick:function(){navigator.clipboard.writeText(c)},children:" Copy "})})]})},e)}))})]})},m=s(6);var O=function(){return Object(o.jsxs)("div",{id:"stat-box",children:[Object(o.jsxs)("div",{id:"stat-text-box",children:[Object(o.jsx)("h2",{children:"Advanced Statistics"}),Object(o.jsx)("p",{className:"text",children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(o.jsxs)("div",{id:"cardCollection",children:[Object(o.jsxs)(m.a,{className:"stat-card",children:[Object(o.jsx)("div",{className:"stat-card-icon-container",children:Object(o.jsx)("img",{className:"stat-card-icon",src:"images/icon-brand-recognition.svg",alt:"brand recognition"})}),Object(o.jsxs)(m.a.Body,{children:[Object(o.jsx)(m.a.Title,{className:"card-title",children:"Brand Recognition"}),Object(o.jsx)(m.a.Text,{className:"text",children:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."})]})]}),Object(o.jsxs)(m.a,{className:"stat-card",children:[Object(o.jsx)("div",{className:"stat-card-icon-container",children:Object(o.jsx)("img",{className:"stat-card-icon",src:"images/icon-detailed-records.svg",alt:"detailed records"})}),Object(o.jsx)("div",{className:"transition-bar"}),Object(o.jsxs)(m.a.Body,{children:[Object(o.jsx)(m.a.Title,{className:"card-title",children:"Detailed Records"}),Object(o.jsx)(m.a.Text,{className:"text",children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]})]}),Object(o.jsxs)(m.a,{className:"stat-card",children:[Object(o.jsx)("div",{className:"stat-card-icon-container",children:Object(o.jsx)("img",{className:"stat-card-icon",src:"images/icon-fully-customizable.svg",alt:"Fully Customizable"})}),Object(o.jsx)("div",{className:"transition-bar"}),Object(o.jsxs)(m.a.Body,{children:[Object(o.jsx)(m.a.Title,{className:"card-title",children:" Fully Customizable"}),Object(o.jsx)(m.a.Text,{className:"text",children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})]})]})};var g=function(){return Object(o.jsxs)("div",{id:"boost-box",children:[Object(o.jsx)("h2",{id:"boost-title",children:"Boost your links today"}),Object(o.jsx)("button",{id:"boost-btn",className:"intro-btn",size:"lg",children:"Get Started"})]})},p=s(23),v=s(39),f=s(40);var N=function(){return Object(o.jsxs)(p.a,{fluid:!0,id:"footer-box",children:[Object(o.jsxs)(v.a,{children:[Object(o.jsx)(f.a,{xs:12,md:3,children:Object(o.jsx)("img",{id:"logo-footer",src:"images/logo-footer.svg",alt:"logo"})}),Object(o.jsxs)(f.a,{xs:12,md:3,className:"footer-section",children:[Object(o.jsx)("p",{className:"footer-title",children:"Features"}),Object(o.jsxs)("ul",{className:"footer-list",children:[Object(o.jsx)("li",{className:"text",children:"Link Shortening"}),Object(o.jsx)("li",{className:"text",children:"Branded Links"}),Object(o.jsx)("li",{className:"text",children:"Analytics"})]})]}),Object(o.jsxs)(f.a,{xs:12,md:3,className:"footer-section",children:[Object(o.jsx)("p",{className:"footer-title",children:"Resources"}),Object(o.jsxs)("ul",{className:"footer-list",children:[Object(o.jsx)("li",{className:"text",children:"Blog"}),Object(o.jsx)("li",{className:"text",children:"Developers"}),Object(o.jsx)("li",{className:"text",children:"Support"})]})]}),Object(o.jsxs)(f.a,{xs:12,md:3,className:"footer-section",children:[Object(o.jsx)("p",{className:"footer-title",children:"Company"}),Object(o.jsxs)("ul",{className:"footer-list",children:[Object(o.jsx)("li",{className:"text",children:"About"}),Object(o.jsx)("li",{className:"text",children:"Our Team"}),Object(o.jsx)("li",{className:"text",children:"Careers"}),Object(o.jsx)("li",{className:"text",children:"Contact"})]})]})]}),Object(o.jsxs)("div",{id:"socials",children:[Object(o.jsx)("img",{className:"socialIcon",src:"images/icon-facebook.svg",alt:"facebook"}),Object(o.jsx)("img",{className:"socialIcon",src:"images/icon-twitter.svg",alt:"twitter"}),Object(o.jsx)("img",{className:"socialIcon",src:"images/icon-pinterest.svg",alt:"pinterest"}),Object(o.jsx)("img",{className:"socialIcon",src:"images/icon-instagram.svg",alt:"instagram"})]})]})};var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsx)(u,{}),Object(o.jsx)(O,{}),Object(o.jsx)(g,{}),Object(o.jsx)(N,{})]})};n.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4be68dcf.chunk.js.map