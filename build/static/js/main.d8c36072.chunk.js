(window["webpackJsonpzano-snippet"]=window["webpackJsonpzano-snippet"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(41),o=a.n(l),c=a(10),r="LOGO",s=[{title:"Marketplace",link:"https://marketplace.zano.org"},{title:"Snippet",link:"https://marketplace.zano.org/snippet.html"},{title:"API",link:"https://marketplace.zano.org/api.html"},{title:"Use cases",link:"https://marketplace.zano.org/use-cases.html"}],m=[{title:"twitter",link:"https://twitter.com/zano_project"},{title:"medium",link:"https://medium.com/@zano_project"},{title:"discord",link:"https://discord.gg/wE3rmYY"},{title:"telegram",link:"https://t.me/zanocoin"},{title:"github",link:"https://github.com/hyle-team/zano"}],d=[{title:"ZANO.ORG",links:[{title:"Main website",link:"https://zano.org"},{title:"Coinswap",link:"https://coinswap.zano.org"},{title:"Marketplace",link:"#",disabled:!0}]},{title:"ABOUT",links:[{title:"Blog",link:"https://medium.com/@zano_project"},{title:"Team",link:"https://zano.org/team.html"},{title:"Contacts",link:"#",disabled:!0}]},{title:"RESOURCES",links:[{title:"Downloads",link:"https://zano.org/downloads.html"},{title:"Roadmap",link:"https://zano.org/roadmap.html"},{title:"Documentation",link:"https://docs.zano.org/"},{title:"Explorer",link:"https://explorer.zano.org/"},{title:"Specifications",link:"https://docs.zano.org/docs/specifications"}]},{title:"LEGAL",links:[{title:"Terms of use",link:"https://zano.org/terms-of-use.html"},{title:"Privacy Policy",link:"https://zano.org/privacy-policy.html"},{title:"Cookie Policy",link:"https://zano.org/cookie-policy.html"}]}],u={sectionChart:{total:{title:[{title:"Reserved Coins"}],titleShadow:"Total"},done:{title:[{title:"Coins"},{title:"Swapped"}],titleShadow:"Swapped"}},sectionHero:{title:[{title:"Zano"},{title:"Contract",blue:!0},{title:"Snippets"}],titleShadow:"Snippets",description:"Zano contracts mechanism was designed to facilitate secure, anonymous payments from your customers. Contract snippets offer a simplified way to arrange a deal. As a seller of services or items, you can publish a snippet on your website with predefined contract details. When applied by a potential buyer, the contract will be generated in the Zano app ready to start.",buttonOne:"Main website",buttonOneLink:"https://zano.org",buttonTwo:"User guide",buttonTwoLink:"#how"},sectionHow:{steps:[{icon:"step-one",title:"Step 1",subtitle:"Create Contract Template",description:"Customise your contract proposal using the web form. You can hide, lock, and predefine any field to make your contract snippet suite best to your offer."},{icon:"step-two",title:"Step 2",subtitle:"Publish Contract Snippet",description:"Choose between dark or light color scheme and copy your contract snippet HTML to your webpage. A snippet can be as minimalistic as one button or contain editable fields."},{icon:"step-three",title:"Step 3",subtitle:"Receive Contract Proposals",description:"When a user clicks on your contract snippet the Zano app will open for him and a predefined contract proposal will be ready for him to send, avoiding mistypes."}]}},p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement(T,null),i.a.createElement(B,{items:d}),i.a.createElement(G,{items:m}),i.a.createElement("span",{className:"copyright"},"Copyright \xa9 2019 ZANO.org"))},h=a(1),f=a.n(h),b=function(){return i.a.createElement("header",{className:"header",id:"header"},i.a.createElement("div",{className:f()("header__wrap","container")},i.a.createElement(T,null),i.a.createElement(R,{items:s}),i.a.createElement(G,{items:m})))},k=function(e){var t=e.txt;return i.a.createElement("section",{className:"container section hero"},i.a.createElement(V,{title:t.sectionHero.title,shadow:t.sectionHero.titleShadow,centred:!0}),i.a.createElement("p",{className:"section__text"},t.sectionHero.description))},g=function(e){var t=e.txt;return i.a.createElement("section",{className:"section how",id:"how"},i.a.createElement("div",{className:"section-wrap container"},i.a.createElement(F,{steps:t.sectionHow.steps})))},v=a(42),E=a(43),w=a(48),N=a(44),C=a(49),I=a(45),x=a.n(I),y=a(4),j=a.n(y),_=a(46),z=a.n(_),Z={YOUR_WALLET:{title:"Your wallet address",value:"XXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXX",unit:"",hidden:!0,locked:!1,lockDisabled:!0},YOUR_ID:{title:"Your payment ID",value:"@test",unit:"",hidden:!0,locked:!1,lockDisabled:!0},AMOUNT:{title:"Amount",value:"15",unit:"ZANO",type:"number",hidden:!1,locked:!0,lockDisabled:!1},DESCRIPTION:{title:"Description",value:"RX 580 (ITM: 67214)",unit:"",hidden:!1,locked:!0,lockDisabled:!1},COMMENT:{title:"Comment",value:"",unit:"",hidden:!1,locked:!1,lockDisabled:!1},YOUR_DEPOSIT:{title:"Your deposit",value:"5",unit:"ZANO",type:"number",hidden:!1,locked:!0,lockDisabled:!1},BUYER_DEPOSIT:{title:"Buyer deposit",value:"15",unit:"ZANO",type:"number",hidden:!1,locked:!0,lockDisabled:!1},FEE:{title:"Fee",value:"0.01",unit:"ZANO",type:"number",hidden:!0,locked:!1,lockDisabled:!0},RESPONSE_TIME:{title:"You response time",value:"12",unit:"hours",type:"number",hidden:!0,locked:!1,lockDisabled:!0},LOGO:{title:"ZANO logo",visible:!0}},S=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(N.a)(t).call(this,e))).onHiddenClick=function(e){var t=a.state.form;e!==r?t[e].hidden=!t[e].hidden:t[e].visible=!t[e].visible,a.setState(function(){return{form:t}})},a.onLockedClick=function(e){var t=a.state.form;t[e].locked=!t[e].locked,a.setState(function(){return{form:t}})},a.onInputChange=function(e,t){var n=a.state.form;n[e].value=t,a.setState(function(){return{form:n}})},a.onFormClick=function(e){return a.setState(function(){return{formColor:e}})},a.renderButton=function(){var e=a.state.show,t=e?"Hide":"Show",n=e?"-":"+";return i.a.createElement("span",{className:f()("show-button",{filled:e}),onClick:function(){return a.setState(function(){return{show:!e}})}},"".concat(t," widget code ").concat(n))},a.state={form:Z,formColor:"black",show:!0},a}return Object(C.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state.show,t=Object.keys(Z).map(function(e){return{name:e,title:j()(Z[e],"title",""),value:j()(Z[e],"value",""),unit:j()(Z[e],"unit",""),type:j()(Z[e],"type","text"),hidden:j()(Z[e],"hidden",""),locked:j()(Z[e],"locked",!1),lockDisabled:j()(Z[e],"lockDisabled",!0)}}),a=j()(Z[r],"visible",!0),n={scheme:t,onHiddenClick:this.onHiddenClick,onLockedClick:this.onLockedClick,onInputChange:this.onInputChange},l={showLogo:a,activeColor:this.state.formColor,onFormClick:this.onFormClick,scheme:t},o={showLogo:a,scheme:t,color:this.state.formColor},c={className:"raw-html-input",name:"raw-html-input",id:"raw-html-input",rows:"10",value:z()(x.a.renderToStaticMarkup(i.a.createElement(ge,o))),onClick:function(e){return e.target.select()},onChange:function(){}};return i.a.createElement("div",{className:"super-form"},i.a.createElement(ae,n),i.a.createElement(Ee,l),i.a.createElement("div",{className:"raw-html container"},i.a.createElement("div",{className:"super-form-controls"},this.renderButton()),e&&i.a.createElement("textarea",c)))}}]),t}(i.a.Component),O=function(e){var t=e.children,a=e.className,n=e.disabled,l=e.blue,o=e.small,c=e.onClick;return i.a.createElement("button",{className:f()("button",a,{disabled:n,blue:l,small:o}),onClick:c},i.a.createElement("span",{className:"button-text"},t))};O.defaultProps={onClick:function(){}};var D=O,M=function(e){var t=e.name,a=e.value,n=e.unit,l=e.type,o=e.disabled,c=e.onChange,r={name:t,value:a,type:l,disabled:o,onChange:function(e){return c(t,e.target.value)}};return i.a.createElement("div",{className:f()("formatted",{disabled:o})},i.a.createElement("input",Object.assign({className:"formatted__input"},r)),n&&i.a.createElement("span",{className:"formatted__unit"},n))};M.defaultProps={name:"",value:"",unit:"",type:"text",disabled:!1,onChange:function(){}};var H=M,P=function(e){return i.a.createElement("span",{className:f()("icon",e.title)})},T=function(){return i.a.createElement("a",{className:"logo",href:"https://zano.org/",target:"_self"},i.a.createElement("span",{className:"logo__image"}),i.a.createElement("p",{className:"logo__text"},i.a.createElement("span",{className:"logo__world"},"Zano"),i.a.createElement("span",{className:"logo__world"},"Snippet")))},X=a(47),A=a.n(X),L=function(e){var t=e.className;return i.a.createElement("div",{className:f()("loader",t)},i.a.createElement("img",{className:"loader__img",src:A.a,alt:"Zano"}),i.a.createElement("p",{className:"loader__text"},"Loading ..."))},Y=function(e){var t=e.items;return i.a.createElement("nav",{className:"navigation"},t.map(function(e,t){return i.a.createElement("a",{className:f()("navigation__link",{disabled:e.disabled}),href:e.link,key:t},e.title)}))};Y.defaultProps={items:[]};var R=Y,B=function(e){var t=e.items;return i.a.createElement("div",{className:"footer-nav"},t.map(function(e,t){return i.a.createElement("div",{className:"footer-nav__section",key:"f-s-".concat(t)},i.a.createElement("h4",{className:"footer-nav__title"},e.title),i.a.createElement("ul",{className:"footer-nav__list"},e.links.map(function(e,t){return i.a.createElement("li",{className:"footer-nav__el",key:"f-el-".concat(t)},i.a.createElement("a",{className:f()("footer-nav__link navigation__link",{disabled:e.disabled}),href:e.link},e.title))})))}))},W=function(e){var t=e.items;return i.a.createElement("ul",{className:"social"},t.map(function(e,t){return i.a.createElement("li",{className:"social__el",key:t},i.a.createElement("a",{className:"social__link",href:e.link,title:e.title},i.a.createElement(P,{title:e.title})))}))};W.defaultProps={items:[]};var G=W,U=function(e){var t=e.classNames,a=e.icon,n=e.title,l=e.active,o=e.subtitle,c=e.description,r=e.button;return i.a.createElement("div",{className:f()("step",t,{"step-active":l})},i.a.createElement("div",{className:"step-title"},i.a.createElement(P,{title:a}),i.a.createElement("span",{className:"step-title-text"},n)),i.a.createElement("h5",{className:"step-subtitle"},o),i.a.createElement("p",{className:"step-description"},c),r&&i.a.createElement(D,{className:"step-button",blue:!0},r.link?i.a.createElement("a",{href:r.link},r.title):i.a.createElement("span",null,r.title)))};U.defaultProps={className:"",title:"",subtitle:"",description:"",icon:"",active:!1};var Q=U,F=function(e){var t=e.steps,a=Object(n.useState)(!0),l=Object(c.a)(a,2),o=l[0],r=l[1];return i.a.createElement("div",{className:"steps"},i.a.createElement("div",{className:"steps__controls"},function(){var e=o?"Hide":"Show",t=o?"-":"+";return i.a.createElement("span",{className:f()("steps__button",{filled:o}),onClick:function(){return r(!o)}},"".concat(e," info ").concat(t))}()),i.a.createElement("ul",{className:"steps__list"},!!o&&t.map(function(e,t){return i.a.createElement("li",{className:"steps__el",key:t},i.a.createElement(Q,e))})))},J=function(e){return i.a.createElement("h1",{className:f()("title",{centred:e.centred,small:e.small})},e.title.map(function(e,t){return i.a.createElement("span",{className:f()("title__word",{blue:e.blue}),key:t},e.title)}),i.a.createElement("span",{className:f()("title__shadow",e.shadowAlign)},e.shadow))};J.defaultProps={title:[],shadow:"",centred:!1,small:!1};var V=J,K=function(e){var t=e.name,a=e.title,n=e.value,l=e.unit,o=e.type,c=e.hidden,r=e.locked,s=e.lockDisabled,m=e.onInputChange,d=e.onHiddenClick,u=e.onLockedClick,p={name:t,value:n,type:o,unit:l,onChange:m},h={small:!0,blue:c,onClick:function(){return d(t)}},f={small:!0,blue:r,disabled:s,onClick:function(){return u(t)}};return i.a.createElement("div",{className:"configurator-row"},i.a.createElement("span",{className:"configurator-row__title"},a),i.a.createElement(H,p),i.a.createElement("div",{className:"configurator-row__controls"},i.a.createElement(D,h,"Hidden"),i.a.createElement(D,f,"Locked")))};K.defaultProps={name:"",title:"",value:"",unit:"",hidden:!1,locked:!1,lockDisabled:!1,onChange:function(){},onHiddenClick:function(){},onLockedClick:function(){}};var q=K,$=function(e){var t=e.name,a=e.title,n=e.onHiddenClick;return i.a.createElement("div",{className:"configurator-row"},i.a.createElement("span",{className:"configurator-row__title"},a),i.a.createElement("div",{className:"configurator-row__controls"},i.a.createElement(D,{small:!0,onClick:function(){return n(t)}},"Hidden")))};$.defaultProps={name:"",title:"",onHiddenClick:function(){}};var ee=$,te=function(e){var t=e.scheme,a=e.onHiddenClick,n=e.onLockedClick,l=e.onInputChange;return i.a.createElement("div",{className:"configurator"},t.map(function(e,t){var o={name:e.name,title:e.title,value:e.value,unit:e.unit,type:e.type,hidden:e.hidden,locked:e.locked,lockDisabled:e.lockDisabled,onHiddenClick:a,onLockedClick:n,onInputChange:l};return e.name!==r?i.a.createElement(q,Object.assign({},o,{key:"".concat(t,"-").concat(e.name)})):i.a.createElement(ee,Object.assign({},o,{key:"".concat(t,"-").concat(e.name)}))}))};te.defaultProps={scheme:[],onHiddenClick:function(){},onLockedClick:function(){},onInputChange:function(){}};var ae=te,ne={width:"440px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",padding:"20px",borderRadius:"14px",boxSizing:"border-box",cursor:"pointer"},ie={margin:"10px 0",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"nowrap",overflow:"hidden"},le={marginRight:"20px",width:"45%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:"bold"},oe={padding:"2px",display:"block",width:"100%",height:"50px",lineHeight:"46px",borderRadius:"10px",backgroundColor:"#359ef6",textDecoration:"none",color:"white",fontSize:"13px",fontWeight:"700",textTransform:"uppercase",letterSpacing:"1px",cursor:"pointer",backgroundImage:'linear-gradient(to bottom, "#359ef6", "#0662df")',boxSizing:"border-box",position:"relative",border:"none"},ce={display:"block",textAlign:"center",borderRadius:"10px",width:"100%",height:"100%",backgroundColor:"#359ef6",position:"relative",zIndex:"1",transition:"all 0.2s ease-in-out"},re={position:"relative",display:"inline-flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none"},se={display:"inline-block",backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MTIuNTUiIHkxPSIzOS43IiB4Mj0iNTEyLjU1IiB5Mj0iOTg0LjciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFlY2VkMCIvPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiM4YWE5ZjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2YTQ0ZmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik02NzkuNiA5ODQuN0wxOTMuNSAzMDUuMSAzNDQuNCAzOS43bDQ4Ny4yIDY3NS42eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTcuNzUiIHkxPSIzMjMuMTQiIHgyPSIyMTcuNzUiIHkyPSI2NDEuNzg1Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1N2I3ZTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3ZThhZjQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTE5My41IDMwNS4xbDI0MiAzMzguM0gweiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4MDcuMjUiIHkxPSI2OTEuNjI1IiB4Mj0iODA3LjI1IiB5Mj0iMzgyLjA3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3YzgzZjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2OGIwZTkiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNjKSIgZD0iTTgzMS42IDcxNS4zTDU5MC41IDM4MUgxMDI0eiIvPjwvc3ZnPg==)",width:"50px",height:"50px",transition:"transform 1s ease-in-out"},me={display:"inline-block",marginLeft:"14px",height:"100%",lineHeight:"1.6",textTransform:"uppercase",fontWeight:"bold",fontSize:"12px",color:"#dee0ee"},de={display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 0",position:"relative",width:"100%",borderBottom:"1px solid rgba(158, 170, 204, 0.5)"},ue={width:"95%",margin:"0",border:"none",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:"transparent",fontSize:"14px",color:"#9eaacc"},pe={fontWeight:"bold",color:"#9eaacc"},he=function(e){var t=e.name,a=e.value,n=e.unit,l=e.type,o=e.disabled,c=e.onChange,r={name:t,value:a,type:l,onChange:function(e){return c(t,e.target.value)}},s=Object.assign({},ue,{});return i.a.createElement("div",{style:de},i.a.createElement("input",Object.assign({style:s},r,{disabled:o})),n&&i.a.createElement("span",{style:pe},n))};he.defaultProps={name:"",value:"",unit:"",type:"text",disabled:!1,onChange:function(){}};var fe=he,be=function(e){var t=e.color,a=e.title,n=e.value,l=e.unit,o=e.disabled,c=e.hidden,r={value:n,unit:l,disabled:o},s=Object.assign({},le,{color:"white"===t?"black":"white"});return!c&&i.a.createElement("div",{style:ie},i.a.createElement("div",{style:s},a),i.a.createElement(fe,r))},ke=function(e){var t=e.activeColor,a=e.color,n=e.scheme,l=e.showLogo,o=e.onClick,c=Object.assign({},ne,{backgroundColor:"white"===a?"white":"#1E3068"});return i.a.createElement("div",{id:"zano-form-widget",className:f()("zano-form-widget",a,{active:a===t}),style:c,onClick:function(){return o(a)}},l&&i.a.createElement("div",{style:re},i.a.createElement("span",{style:se}),i.a.createElement("span",{style:me},"Zano")),n.map(function(e,t){var n={color:a,name:e.name,title:e.title,value:e.value,unit:e.unit,type:e.type,hidden:e.hidden,disabled:e.locked};return e.name!==r&&i.a.createElement(be,Object.assign({},n,{key:"form-row-".concat(t)}))}),i.a.createElement("button",{style:oe,onClick:function(){}},i.a.createElement("span",{style:ce},"Proceed to wallet")))};ke.defaultProps={showLogo:!0,color:"black",onClick:function(){}};var ge=ke,ve=function(e){var t=e.activeColor,a=e.scheme,n={activeColor:t,showLogo:e.showLogo,scheme:a,onClick:e.onFormClick};return i.a.createElement("div",{className:"forms-container"},i.a.createElement(ge,Object.assign({},n,{color:"black"})),i.a.createElement(ge,Object.assign({},n,{color:"white"})))};ve.defaultProps={scheme:{},showLogo:!0,onFormClick:function(){}};var Ee=ve,we=(a(118),function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),r=Object(c.a)(o,2),s=r[0],m=r[1];Object(n.useEffect)(function(){l(u),m(!1)},[]);return i.a.createElement("div",{className:"App"},i.a.createElement(b,null),s?i.a.createElement("div",{className:"loader-container"},i.a.createElement(L,null)):i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{txt:a}),i.a.createElement(g,{txt:a}),i.a.createElement(S,null)),i.a.createElement(p,null))});o.a.render(i.a.createElement(we,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/logo.7b467d1f.svg"},50:function(e,t,a){e.exports=a(119)},83:function(e,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.d8c36072.chunk.js.map