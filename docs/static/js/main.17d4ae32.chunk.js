(window.webpackJsonpadmin=window.webpackJsonpadmin||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/profile.0b9235c3.jpg"},43:function(e,t,a){e.exports=a(65)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(48),a(49),a(50),a(51),a(52),a(14)),s=a(22),i=a(8);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d={loggedIn:!0,info:{username:"admin",token:"@$$%^^%&*(&)*()*(_&^##"}},p=a(24),b=[{name:"Users",icon:"people",path:"/users",fields:["id","name","email","username"],datas:[{id:1,name:"Amir",email:"amir@gmail.com",username:"amir"}]}],E=Object(s.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return u({},e,{},t.payload);case"LOGOUT":return u({},e,{loggedIn:!1,info:null});default:return e}},models:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MODEL":return t.payload.datas=[],console.log(t.payload),[].concat(Object(p.a)(e),[t.payload]);case"ADD_DATA_MODEL":var a=t.payload,n=e.filter(function(e){return e.name!==a.model}),r=e.filter(function(e){return e.name===a.model});return(r=r[0]).datas=[].concat(Object(p.a)(r.datas),[a.data]),n.push(r),n;default:return e}}}),f=function(e,t){var a=e.url,n=v.getState().models;return 0===(n=n.filter(function(e){return e.path===a})).length&&t.push("/"),n=n[0]},h=Object(s.c)(E,function(){try{return localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):void 0}catch(e){return}}(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());h.subscribe(function(){!function(){try{var e=JSON.stringify(v.getState());localStorage.setItem("state",e)}catch(t){}}()});var v=h,g=a(11),y=a(12),O=a(16),N=a(13),j=a(15),w=a(6),D=a(20),k=a(76),S=a(66),_=a(67),P=a(68),A=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,username:"",password:""},a.handleSubmitLogin=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.setState({error:!1}),(n||r)&&"admin"===n&&"admin"===r?(a.props.login(),a.props.history.push("/")):a.setState({error:"Username and Password: admin",username:"",password:""})},a.handleInputChange=function(e){var t=e.target;a.setState(Object(i.a)({},t.name,t.value))},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"page-content--bge5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login-wrap"},r.a.createElement("div",{className:"login-content"},this.state.error?r.a.createElement(k.a,{color:"danger"},this.state.error):null,r.a.createElement("div",{className:"login-form"},r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Username"),r.a.createElement("input",{className:"au-input au-input--full",value:this.state.username,type:"text",name:"username",onChange:this.handleInputChange}))),r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Password"),r.a.createElement("input",{className:"au-input au-input--full",value:this.state.password,type:"password",name:"password",onChange:this.handleInputChange})),r.a.createElement("div",{className:"login-checkbox"},r.a.createElement(P.a,null,r.a.createElement("input",{type:"checkbox",name:"remember"}),"Remember Me"),r.a.createElement(P.a,null,r.a.createElement(w.b,{to:"#"},"Forgotten Password ?"))),r.a.createElement("button",{className:"au-btn au-btn--block au-btn--green m-b-20",type:"submit",onClick:this.handleSubmitLogin},"login in"),r.a.createElement("div",{className:"social-login-content"},r.a.createElement("button",{className:"au-btn au-btn--block au-btn--blue m-b-20"},"login in with facebook"),r.a.createElement("button",{className:"au-btn au-btn--block au-btn--blue2"},"login in with twitter"))),r.a.createElement("div",{className:"register-link"},r.a.createElement("p",null,"Dont't have account ?",r.a.createElement(w.b,{to:"#"}," Sign Up here"))))))))))}}]),t}(n.Component),I={login:function(){return{type:"LOGIN",payload:{loggedIn:!0,info:{username:"admin",token:"#@$@$@#$@#$!#@$^^%^&%$"}}}}},C=Object(o.b)(null,I)(A),x=a(19),M=Object(o.b)(function(e){return{models:e.models}})(Object(D.f)(function(e){var t=e.models,a=e.location,n=function(e){return a.pathname.indexOf(e)>-1?"active":""};return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"".concat(n(e.path))},r.a.createElement(w.b,{to:e.path},r.a.createElement("i",{className:"icon ion-ios-".concat(e.icon)}),e.name))}),r.a.createElement("li",{className:"".concat(n("/add/model"))},r.a.createElement(w.b,{to:"/add/model"},r.a.createElement("i",{className:"icon ion-ios-add"}),"Add New Model")))})),L=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"header-mobile d-block d-lg-none"},r.a.createElement("div",{className:"header-mobile__bar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"header-mobile-inner"},r.a.createElement(w.b,{to:"/",className:"logo"},"Simple Admin React"),r.a.createElement("button",{className:"hamburger hamburger--slider".concat(a?" is-active":""),onClick:function(){l(!a)}},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})))))),r.a.createElement("nav",{className:"navbar-mobile".concat(a?" d-block":"")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"navbar-mobile__list list-unstyled"},r.a.createElement(M,null)))))},F=function(){return r.a.createElement("div",{className:"menu-sidebar d-none d-lg-block"},r.a.createElement("div",{className:"logo"},r.a.createElement(w.b,{to:"/"},"Simple Admin React")),r.a.createElement("div",{className:"menu-sidebar__content"},r.a.createElement("nav",{className:"navbar-sidebar"},r.a.createElement("ul",{className:"list-unstyled navbar__list"},r.a.createElement(M,null)))))},J=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),l=t[0],c=t[1];return r.a.createElement("header",{className:"header-desktop"},r.a.createElement("div",{className:"section__content section__content--p30"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"header-wrap"},r.a.createElement("form",{className:"form-header"},r.a.createElement("input",{className:"au-input au-input--xl",type:"text",placeholder:"Search for wath ....?"}),r.a.createElement("button",{className:"au-btn--submit"},r.a.createElement("i",{className:"icon ion-ios-search"}))),r.a.createElement("div",{className:"header-button"},r.a.createElement("div",{className:"account-wrap"},r.a.createElement("div",{className:"account-item clearfix".concat(l?" show-dropdown":""),onClick:function(){c(!l)}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a(39),alt:"John Doe"})),r.a.createElement("div",{className:"content"},r.a.createElement(w.b,{to:"#"},"John Doe")),r.a.createElement("div",{className:"account-dropdown".concat(l?" js-dropdown":"")},r.a.createElement("div",{className:"info clearfix"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a(39),alt:"John Doe"})),r.a.createElement("div",{className:"content"},r.a.createElement("h5",{className:"name"},r.a.createElement(w.b,{to:"#"},"John Doe")),r.a.createElement("span",{className:"email"},"jdoe@gmail.com"))),r.a.createElement("div",{className:"account-dropdown__body"},r.a.createElement("div",{className:"account-dropdown__item"},r.a.createElement(w.b,{to:"#"},r.a.createElement("i",{className:"icon ion-ios-person"}),"Accounts"))),r.a.createElement("div",{className:"account-dropdown__footer"},r.a.createElement(w.b,{to:"#"},r.a.createElement("i",{className:"icon ion-ios-power"}),"Logout"))))))))))},$=function(e){var t=e.children,a=e.history;return Object(n.useEffect)(function(){!function(e){v.getState().auth.loggedIn?console.log("your logged in"):e.push("/login")}(a)},[a]),r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(L,null),r.a.createElement(F,null),r.a.createElement("div",{className:"page-container"},r.a.createElement(J,null),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"section__content section__content--p30"},r.a.createElement("div",{className:"container-fluid"},t)))))},T=a(69),U=a(70),R=a(71),X=a(72),G=a(73),z=function(e){var t=e.history;return r.a.createElement($,{history:t},r.a.createElement(T.a,null,r.a.createElement(U.a,{lg:12},r.a.createElement("div",{className:"overview-wrap"},r.a.createElement("h2",{className:"title-1"},"about this app")))),r.a.createElement(T.a,{className:"m-t-25"},r.a.createElement(U.a,{lg:6},r.a.createElement(R.a,null,r.a.createElement(X.a,null,"Problem"),r.a.createElement(G.a,null,r.a.createElement("p",null,"I am a junior developer and i think if we have a zero configuration admin panel can startup new project faster."),r.a.createElement("p",null,"I spend a lot of time for found a good admin panel ,I am was't lucky and can't find my case and think to desgin a simple model admin")))),r.a.createElement(U.a,null,r.a.createElement(R.a,null,r.a.createElement(X.a,null,"Solution"),r.a.createElement(G.a,null,r.a.createElement("p",null,"If you have same problem i suggest you use this app because you can use esay this app and you can add unlimited model and use there."),r.a.createElement("p",null,"If your developer can use this app very esay"))))))},V=a(74),q=function(e){var t=e.title,a=e.button;return r.a.createElement("div",{className:"row m-b-25"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"overview-wrap"},r.a.createElement("h2",{className:"title-1"},t),a)))};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var K={addModel:function(e){return{type:"ADD_MODEL",payload:e}}},Q=Object(o.b)(null,K)(function(e){var t=e.history,a=e.addModel,l=Object(n.useState)(["id"]),c=Object(x.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)({field:"",name:"",icon:"",path:""}),u=Object(x.a)(m,2),d=u[0],b=u[1],E=Object(n.useState)(),f=Object(x.a)(E,2),h=f[0],v=f[1],g=function(e){b(H({},d,Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement($,{history:t},r.a.createElement(q,{title:"Add New Model"}),r.a.createElement(T.a,null,r.a.createElement(U.a,{lg:12},r.a.createElement("div",{className:"au-card"},h?r.a.createElement(k.a,{color:"danger"},h):"",r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Model Name ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement(V.a,{type:"text",placeholder:"Enter an name for your model",value:d.name,name:"name",onChange:g})),r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Model Icon ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement(V.a,{type:"text",placeholder:"Add a icon",value:d.icon,name:"icon",onChange:g})),r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Model Path",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement(V.a,{type:"text",placeholder:"Add a path for model",value:d.path,name:"path",onChange:g})),r.a.createElement(_.a,null,r.a.createElement(P.a,null,"Model Fields ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("div",null,o.length>0?r.a.createElement("ul",{className:"mb-2 list-unstyled",style:{display:"inline-flex"}},o.map(function(e,t){return"id"!==e?r.a.createElement("li",{key:t,className:"mt-3 mr-3 mb-1"},e,r.a.createElement("button",{className:"btn btn-sm btn-danger ml-2",onClick:function(e){return function(e,t){e.preventDefault(),s(o.filter(function(e,a){return a!==t}))}(e,t)}},r.a.createElement("i",{className:"icon ion-ios-remove"}))):""})):""),r.a.createElement(T.a,null,r.a.createElement("div",{className:"col col-md-10"},r.a.createElement(V.a,{type:"text",placeholder:"Add Some Fields",value:d.field,name:"field",onChange:g})),r.a.createElement("div",{className:"col col-md-2"},r.a.createElement("button",{className:"btn btn-block btn-primary",onClick:function(e){e.preventDefault(),d.field&&(s([].concat(Object(p.a)(o),[d.field])),b(H({},d,{field:""})))}},r.a.createElement("i",{className:"icon ion-ios-add"}))))),r.a.createElement("button",{className:"btn btn-block btn-success",onClick:function(e){if(e.preventDefault(),""!==d.name&&""!==d.icon&&""!==d.path&&o.length>0){var n=H({},d);delete n.field,b({field:"",name:"",icon:"",path:""}),s([]),a(H({},n,{fields:o})),t.push(n.path+"/add")}else v("Fill fields correctly")}},r.a.createElement("i",{className:"icon ion-ios-add-circle-outline mr-2"}),"Add Model"),r.a.createElement("hr",null),r.a.createElement("span",{style:{fontSize:13,color:"grey"}},r.a.createElement("span",{style:{color:"red"}},"*"),"there are required fields"))))))}),W=a(75),Y=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fields,a=e.datas;return r.a.createElement(T.a,{className:"m-t-25"},r.a.createElement(U.a,{lg:12},r.a.createElement("div",{className:"au-card"},r.a.createElement(W.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,t.map(function(e,t){return r.a.createElement("th",{key:t},"id"===e?"#":e)}))),r.a.createElement("tbody",null,a.map(function(e,a){return r.a.createElement("tr",{key:a},t.map(function(t,a){return r.a.createElement("td",{key:a},e[t])}))}))))))}}]),t}(n.Component);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var ee=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={fields:[],datas:[]},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.history,n=f(t,a);this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},n))}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.match;return r.a.createElement($,{history:t},r.a.createElement(q,{title:a.params.model,button:r.a.createElement(w.b,{to:"/".concat(a.params.model,"/add"),className:"btn btn-primary btn-large"},r.a.createElement("i",{className:"icon ion-ios-add mr-2"}),"Add Item")}),r.a.createElement(Y,{fields:this.state.fields,datas:this.state.datas}))}}]),t}(n.Component);function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ne=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={fields:[]},a.handleInputChange=function(e){var t=ae({},a.state.inputs);t[e.target.name]=e.target.value,a.setState({inputs:t})},a.handleSubmit=function(e){e.preventDefault(),a.setState({error:""});var t=0;if(a.state.fields.map(function(e){""!==a.state[e]&&"id"!==e&&t++}),a.state.fields.length-1===t){var n=ae({},a.state.inputs);n.id=a.state.datas.length+1,a.props.addDataModel({model:a.state.name,data:n}),a.props.history.push(a.state.path)}else a.setState({error:"All Field Not Filled"})},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.history,n=t.match;n.url=n.url.replace("/add","");var r=f(n,a);this.setState(ae({},r)),r.fields.map(function(t){e.setState(function(e){return{inputs:ae({},e.inputs,Object(i.a)({},t,""))}})})}},{key:"render",value:function(){var e=this,t=this.props.match;return r.a.createElement($,{history:this.props.history},r.a.createElement(q,{title:"Add New ".concat(t.params.model)}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"au-card m-b-100"},this.state.error?r.a.createElement("div",{className:"alert alert-danger"},this.state.error):"",r.a.createElement("form",null,this.state.fields.map(function(t,a){return"id"===t?r.a.createElement("div",{className:"form-group",key:a},r.a.createElement("label",null,"#"),r.a.createElement("input",{className:"form-control",value:e.state.datas.length+1,readOnly:!0})):r.a.createElement("div",{className:"form-group",key:a},r.a.createElement("label",null,t),r.a.createElement("input",{className:"form-control",name:t,onChange:e.handleInputChange}))})),r.a.createElement("button",{className:"btn btn-info btn-block",onClick:this.handleSubmit},r.a.createElement("i",{className:"icon ion-ios-add-circle-outline mr-2"}),"Add Item")))))}}]),t}(n.Component),re={addDataModel:function(e){return{type:"ADD_DATA_MODEL",payload:e}}},le=Object(o.b)(null,re)(ne),ce=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:z}),r.a.createElement(D.a,{exact:!0,path:"/:model",component:ee}),r.a.createElement(D.a,{path:"/add/model",component:Q}),r.a.createElement(D.a,{path:"/:model/add",component:le}),r.a.createElement(D.a,{path:"/login",component:C})))}}]),t}(n.Component);c.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(ce,null)),document.getElementById("app"))}},[[43,1,2]]]);
//# sourceMappingURL=main.17d4ae32.chunk.js.map