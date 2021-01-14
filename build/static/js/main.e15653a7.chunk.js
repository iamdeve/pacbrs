(this.webpackJsonppacbrs=this.webpackJsonppacbrs||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),c=a(13),i=a.n(c),o=(a(143),a(21)),l=(a(144),a(19)),u=a(9),d=a.n(u),b=a(23),j=a(64),m=a(17),p=a(18),h=a.n(p),g=a(241),x=a(223),O=a(243),f=a(229),v=a(238),k=a(85),w=a(20),_=a(227),S=a(242),y=a(100),C=a(239),N=a(240),I=a(224),M=a(236),B=a(96),D=a.n(B);D.a.defaults.headers.common.authorization="".concat(localStorage.getItem("pacbrsToken"));var H=D.a.create({baseURL:"https://pacbrs.herokuapp.com/api/"}),E=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){H.get("/bike/allBikes").then((function(t){e(t.data.bikes)})).catch((function(e){console.log(e),t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){H.get("/bike/bikes").then((function(t){e(t.data.allBikes)})).catch((function(e){console.log(e),t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){H.get("/reservation/getReservation").then((function(t){e(t.data.reservations)})).catch((function(e){console.log(e),t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){H.post("/reservation/reserve",t).then((function(t){e(t)})).catch((function(e){console.log(e),a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){H.post("/auth/signup",t).then((function(t){e(t)})).catch((function(e){console.log(e),a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){H.post("/auth/login",t).then((function(t){e(t)})).catch((function(e){console.log(e),a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){H.delete("/reservation/"+t).then((function(t){e(t)})).catch((function(e){console.log(e),a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=a(116),G={isAuthenticated:!!localStorage.getItem("pacbrsToken"),user:W(),token:localStorage.getItem("pacbrsToken")?localStorage.getItem("pacbrsToken"):null,bikes:[],userReservations:[],allBikes:[]},U=s.a.createContext(),Y=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("pacbrsToken",t.payload),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,user:t.payload.user,token:t.payload.token});case"LOGOUT":return localStorage.removeItem("pacbrsToken"),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1,user:null,token:null});case"SET_BIKES":return Object(m.a)(Object(m.a)({},e),{},{bikes:t.payload});case"SET_ALL_BIKES":return Object(m.a)(Object(m.a)({},e),{},{allBikes:t.payload});case"SET_USER_RESERVATION":return Object(m.a)(Object(m.a)({},e),{},{userReservations:t.payload});case"SET_USER":return Object(m.a)(Object(m.a)({},e),{},{user:W()});default:return e}};function W(){try{var e=localStorage.getItem("pacbrsToken");return Object(K.a)(e)}catch(t){return null}}var V=a(178),z=a(175),q=a(174),J=a(222),X=a(221);var Z=function(e){return Object(n.jsxs)(V.a,{open:e.showAlert,onClose:e.handleCloseAlert,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(X.a,{id:"alert-dialog-title",children:e.heading}),Object(n.jsx)(q.a,{children:Object(n.jsx)(J.a,{id:"alert-dialog-description",children:e.children})}),Object(n.jsx)(z.a,{children:Object(n.jsx)(k.a,{onClick:e.handleCloseAlert,color:"primary",children:"Close"})})]})},Q=a(27),$=a.n(Q),ee=a.p+"static/media/logo.f308dbb5.jpeg",te=a(30),ae=a(176),ne=a(120),re=a.n(ne),se=a(121),ce=a.n(se);var ie=function(){var e=s.a.useContext(U),t=e.state,a=e.dispatch,r=s.a.useState(!1),c=Object(o.a)(r,2),i=c[0],l=c[1];return Object(n.jsxs)("div",{className:$.a.Header,children:[Object(n.jsx)(te.b,{to:"/",className:["btn",$.a.BtnCustom].join(" "),children:Object(n.jsx)("img",{className:$.a.HeaderImg,src:ee,alt:"Logo"})}),Object(n.jsx)("div",{className:$.a.Menu,children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:t.isAuthenticated?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te.b,{to:"reservations",className:["btn",$.a.BtnCustom].join(" "),children:"Reservations"}),Object(n.jsx)(te.b,{onClick:function(){return a({type:"LOGOUT"})},className:["btn",$.a.BtnCustom].join(" "),children:"Logout"})]}):Object(n.jsx)(te.b,{to:"/login",className:["btn",$.a.BtnCustom].join(" "),children:"Login"})})})}),Object(n.jsxs)("div",{className:$.a.MobileMenuContainer,children:[Object(n.jsx)(ae.a,{onClick:function(){return l(!i)},children:Object(n.jsx)(re.a,{})}),i&&Object(n.jsxs)("div",{className:$.a.MobileMenu,children:[Object(n.jsx)("div",{className:["text-right",$.a.Cancel].join(""),children:Object(n.jsx)(ae.a,{onClick:function(){return l(!i)},children:Object(n.jsx)(ce.a,{style:{color:"#fff"}})})}),Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:t.isAuthenticated?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te.b,{to:"reservations",className:["btn",$.a.BtnCustom,$.a.BtnCustomMobile].join(" "),children:"Reservations"}),Object(n.jsx)(te.b,{onClick:function(){return a({type:"LOGOUT"})},className:["btn",$.a.BtnCustom,$.a.BtnCustomMobile].join(" "),children:"Logout"})]}):Object(n.jsx)(te.b,{to:"/login",className:["btn",$.a.BtnCustom,$.a.BtnCustomMobile].join(" "),children:"Log In"})})})]})]})]})},oe=a(228);var le=function(){var e,t=s.a.useContext(U),a=t.state,r=t.dispatch,c=s.a.useState(!1),i=Object(o.a)(c,2),l=i[0],u=i[1],p=s.a.useState(""),B=Object(o.a)(p,2),D=B[0],H=B[1],F=s.a.useState(""),T=Object(o.a)(F,2),P=T[0],R=T[1],K=s.a.useState(!1),G=Object(o.a)(K,2),Y=G[0],W=G[1],V=s.a.useState({fullName:"",email:"",password:"",bikeId:"",date:new Date,time:new Date}),z=Object(o.a)(V,2),q=z[0],J=z[1],X=function(e){var t=e.target,a=t.name,n=t.value;J((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(j.a)({},a,n))}))},Q=function(e){J((function(t){return Object(m.a)(Object(m.a)({},t),{},{date:e})}))},$=function(e){J((function(t){return Object(m.a)(Object(m.a)({},t),{},{time:e})}))};e=a.isAuthenticated?["Book a Bike"]:["Credential","Book a Bike"];var ee,te,ae=s.a.useState(0),ne=Object(o.a)(ae,2),re=ne[0],se=ne[1],ce=e,le=function(){var e=Object(b.a)(d.a.mark((function e(){var t,s,c,i,o,l,b,j,m,p,h,g,x,O,f,v,k,w,_;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isAuthenticated){e.next=35;break}if(0!==re){e.next=33;break}return W(!0),e.prev=3,console.log(q.date),t=new Date(q.date).getMonth()+1+"/"+new Date(q.date).getDate()+"/"+new Date(q.date).getFullYear(),s=new Date(q.time).getHours()>0&&new Date(q.time).getHours()<10?"0"+new Date(q.time).getHours():new Date(q.time).getHours(),c=new Date(q.time).getMinutes()>0&&new Date(q.time).getMinutes()<10?"0"+new Date(q.time).getMinutes():new Date(q.time).getMinutes(),t=t+" "+s+":"+c,console.log(t),console.log(a.user),e.next=13,A({bikeId:q.bikeId,date:t,userId:a.user.id,userEmail:a.user.email});case 13:if(200!==(i=e.sent).status){e.next=23;break}return e.next=17,E();case 17:o=e.sent,r({type:"SET_BIKES",payload:o}),H(i.status),u(!0),W(!1),R(i.data.message);case 23:e.next=33;break;case 25:e.prev=25,e.t0=e.catch(3),console.log(e.t0),console.log(e.t0.response.status),u(!0),W(!1),H(e.t0.response.status),e.t0.response&&e.t0.response.data?e.t0.response.data.error?e.t0.response.data.error.message?e.t0.response.data.error&&e.t0.response.data.error.raw?R(e.t0.response.data.error.raw.message):R(e.t0.response.data.error.message):R(e.t0.response.data.error):e.t0.response.data.errors?(l=e.t0.response.data.errors.map((function(e){return Object(n.jsx)("li",{children:e.msg})})),R(l)):R(e.t0.response.data.message):R(e.t0.message);case 33:e.next=117;break;case 35:if(1!==re){e.next=117;break}return W(!0),e.prev=37,console.log(q.date),b=new Date(q.date).getMonth()+1+"/"+new Date(q.date).getDate()+"/"+new Date(q.date).getFullYear(),j=new Date(q.time).getHours()>0&&new Date(q.time).getHours()<10?"0"+new Date(q.time).getHours():new Date(q.time).getHours(),m=new Date(q.time).getMinutes()>0&&new Date(q.time).getMinutes()<10?"0"+new Date(q.time).getMinutes():new Date(q.time).getMinutes(),b=b+" "+j+":"+m,console.log(b),e.next=46,L({fullName:q.fullName,email:q.email,password:q.password});case 46:if(200!==(p=e.sent).status&&201!==p.status){e.next=60;break}return e.next=50,A({bikeId:q.bikeId,date:b,userEmail:q.email,pass:p.data.pass});case 50:if(200!==(h=e.sent).status){e.next=60;break}return e.next=54,E();case 54:g=e.sent,r({type:"SET_BIKES",payload:g}),H(h.status),u(!0),W(!1),R(h.data.message);case 60:return e.abrupt("return");case 63:if(e.prev=63,e.t1=e.catch(37),console.log(e.t1),console.log(e.t1.response.status),!e.t1.response||!e.t1.response.data){e.next=113;break}if(!e.t1.response.data.error){e.next=74;break}u(!0),H(e.t1.response.status),e.t1.response.data.error.message?e.t1.response.data.error&&e.t1.response.data.error.raw?R(e.t1.response.data.error.raw.message):R(e.t1.response.data.error.message):R(e.t1.response.data.error),e.next=111;break;case 74:if(!e.t1.response.data.errors){e.next=81;break}u(!0),H(e.t1.response.status),x=e.t1.response.data.errors.map((function(e){return Object(n.jsx)("li",{children:e.msg})})),R(x),e.next=111;break;case 81:if("Email already registered"!==e.t1.response.data.message){e.next=108;break}return e.prev=82,O=new Date(q.date).getMonth()+1+"/"+new Date(q.date).getDate()+"/"+new Date(q.date).getFullYear(),f=new Date(q.time).getHours()>0&&new Date(q.time).getHours()<10?"0"+new Date(q.time).getHours():new Date(q.time).getHours(),v=new Date(q.time).getMinutes()>0&&new Date(q.time).getMinutes()<10?"0"+new Date(q.time).getMinutes():new Date(q.time).getMinutes(),O=O+" "+f+":"+v,console.log(O),e.next=90,A({bikeId:q.bikeId,date:O,userEmail:q.email});case 90:if(200!==(k=e.sent).status){e.next=99;break}return e.next=94,E();case 94:w=e.sent,r({type:"SET_BIKES",payload:w}),H(k.status),u(!0),R(k.data.message);case 99:e.next=106;break;case 101:e.prev=101,e.t2=e.catch(82),u(!0),H(e.t2.response.status),e.t2.response&&e.t2.response.data?e.t2.response.data.error?e.t2.response.data.error.message?e.t2.response.data.error&&e.t2.response.data.error.raw?R(e.t2.response.data.error.raw.message):R(e.t2.response.data.error.message):R(e.t2.response.data.error):e.t2.response.data.errors?(_=e.t2.response.data.errors.map((function(e){return Object(n.jsx)("li",{children:e.msg})})),R(_)):R(e.t2.response.data.message):R(e.t2.message);case 106:e.next=111;break;case 108:u(!0),H(e.t1.response.status),R(e.t1.response.data.message);case 111:e.next=116;break;case 113:u(!0),H(e.t1.response.status),R(e.t1.message);case 116:W(!1);case 117:se((function(e){return e+1}));case 118:case"end":return e.stop()}}),e,null,[[3,25],[37,63],[82,101]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,r({type:"SET_BIKES",payload:t}),r({type:"SET_USER"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),ee=a.isAuthenticated?[Object(n.jsx)(w.a,{utils:y.a,children:Object(n.jsxs)(x.a,{container:!0,justify:"center",children:[Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsxs)(I.a,{margin:"normal",className:h.a.formControl,children:[Object(n.jsx)(C.a,{id:"demo-simple-select-label",children:"Bike"}),Object(n.jsx)(M.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"bikeId",value:q.bikeId,onChange:X,children:a.bikes&&a.bikes.map((function(e,t){return Object(n.jsx)(N.a,{value:e._id,children:e.bikeModel},t)}))})]})}),Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(_.a,{margin:"normal",id:"date-picker-dialog",label:"Date",name:"date",format:"MM/dd/yyyy",disablePast:!0,value:q.date,onChange:Q,KeyboardButtonProps:{"aria-label":"change date"}})}),Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(S.a,{margin:"normal",id:"time-picker",label:"Time",name:"time",value:q.time,onChange:$,KeyboardButtonProps:{"aria-label":"change time"}})})]})})]:[Object(n.jsxs)(x.a,{container:!0,justify:"center",children:[Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(g.a,{margin:"normal",name:"fullName",value:q.fullName,onChange:X,label:"Full Name"})}),Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(g.a,{margin:"normal",name:"email",value:q.email,onChange:X,label:"Email"})})]}),Object(n.jsx)(w.a,{utils:y.a,children:Object(n.jsxs)(x.a,{container:!0,justify:"center",children:[Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsxs)(I.a,{margin:"normal",className:h.a.formControl,children:[Object(n.jsx)(C.a,{id:"demo-simple-select-label",children:"Bike"}),Object(n.jsx)(M.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"bikeId",value:q.bikeId,onChange:X,children:a.bikes&&a.bikes.map((function(e,t){return Object(n.jsx)(N.a,{value:e._id,children:e.bikeModel},t)}))})]})}),Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(_.a,{margin:"normal",id:"date-picker-dialog",label:"Date",name:"date",format:"MM/dd/yyyy",disablePast:!0,value:q.date,onChange:Q,KeyboardButtonProps:{"aria-label":"change date"}})}),Object(n.jsx)("div",{className:h.a.InputField,children:Object(n.jsx)(S.a,{margin:"normal",id:"time-picker",label:"Time",name:"time",value:q.time,onChange:$,KeyboardButtonProps:{"aria-label":"change time"}})})]})})],a.isAuthenticated?0===re&&(te=Object(n.jsxs)("div",{className:h.a.wrapper,children:[Object(n.jsx)(k.a,{variant:"contained",color:"primary",disabled:Y||""===q.bikeId||""===q.date,onClick:le,children:re===ce.length-1?"Book Now":"Next"}),Y&&Object(n.jsx)(oe.a,{size:24,className:h.a.buttonProgress})]})):0===re?te=Object(n.jsx)(k.a,{disabled:""===q.email,variant:"contained",color:"primary",onClick:le,children:re===ce.length-1?"Book Now":"Next"}):1===re&&(te=Object(n.jsxs)("div",{className:h.a.wrapper,children:[Object(n.jsx)(k.a,{variant:"contained",color:"primary",disabled:Y||""===q.bikeId||""===q.date,onClick:le,children:re===ce.length-1?"Book Now":"Next"}),Y&&Object(n.jsx)(oe.a,{size:24,className:h.a.buttonProgress})]})),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(ie,{}),Object(n.jsxs)("div",{className:h.a.Main,children:[Object(n.jsx)("h3",{className:["text-center",h.a.HomeHeading].join(" "),children:"Welcome to Plano Athletic Club Bike Reservation System"}),Object(n.jsx)("p",{className:["text-center",h.a.HomeSubHeading].join(" "),children:"Please select your date/time of reservation, and your bike number"}),Object(n.jsxs)("div",{className:h.a.FormContainer,children:[Object(n.jsx)(O.a,{activeStep:re,alternativeLabel:!0,children:ce.map((function(e){return Object(n.jsx)(f.a,{children:Object(n.jsx)(v.a,{children:e})},e)}))}),Object(n.jsx)("div",{children:re===ce.length?Object(n.jsx)("div",{children:(se(0),void J({fullName:"",email:"",password:"",bikeId:"",date:new Date,time:new Date}))}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:h.a.StepContext,children:ee[re]}),Object(n.jsxs)("div",{className:["mt-5 mb-5",h.a.StepperBtnGroup].join(" "),children:[Object(n.jsx)(k.a,{disabled:0===re,onClick:function(){se((function(e){return e-1}))},className:h.a.backButton,children:"Back"}),te]})]})})]})]}),l&&Object(n.jsx)(Z,{heading:D?"Status Code "+D:"Something Went Wrong",showAlert:l,handleCloseAlert:function(){u(!1)},children:P})]})},ue=a(69),de=a.n(ue);var be=function(){var e=Object(l.f)(),t=s.a.useContext(U),a=t.state,r=t.dispatch,c=s.a.useState(!1),i=Object(o.a)(c,2),u=i[0],p=i[1],h=s.a.useState(""),x=Object(o.a)(h,2),O=x[0],f=x[1],v=s.a.useState(""),w=Object(o.a)(v,2),_=w[0],S=w[1],y=s.a.useState({email:"",password:""}),C=Object(o.a)(y,2),N=C[0],I=C[1],M=function(e){var t=e.target,a=t.name,n=t.value;I((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(j.a)({},a,n))}))},B=function(){var t=Object(b.a)(d.a.mark((function t(a){var s,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,P({email:N.email,password:N.password});case 4:200!==(s=t.sent).status&&201!==s.status||(r({type:"LOGIN",payload:s.data.token}),e.push("/")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),p(!0),f(t.t0.response.status),t.t0.response&&t.t0.response.data?t.t0.response.data.error?t.t0.response.data.error&&t.t0.response.data.error.raw?S(t.t0.response.data.error.raw.message):S(t.t0.response.data.error.message):t.t0.response.data.errors?(c=t.t0.response.data.errors.map((function(e){return Object(n.jsx)("li",{children:e.msg})})),S(c)):S(t.t0.response.data.message):S(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return s.a.useEffect((function(){a.isAuthenticated&&e.push("/")}),[a,e]),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(ie,{}),Object(n.jsx)("div",{className:de.a.Main,children:Object(n.jsxs)("div",{className:de.a.FormContainer,children:[Object(n.jsx)("h4",{children:"Please Log In"}),Object(n.jsxs)("form",{onSubmit:B,children:[Object(n.jsx)("div",{className:de.a.InputField,children:Object(n.jsx)(g.a,{type:"email",margin:"normal",name:"email",value:N.email,onChange:M,label:"Email",required:!0})}),Object(n.jsx)("div",{className:de.a.InputField,children:Object(n.jsx)(g.a,{type:"password",margin:"normal",name:"password",value:N.password,onChange:M,label:"Password",required:!0})}),Object(n.jsx)("div",{className:de.a.InputFieldSubmit,children:Object(n.jsx)(k.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})})]})]})}),u&&Object(n.jsx)(Z,{heading:O?"Status Code "+O:"Something Went Wrong",showAlert:u,handleCloseAlert:function(){p(!1)},children:_})]})},je=a(99),me=a.n(je),pe=a(231),he=a(235),ge=a(234),xe=a(230),Oe=a(232),fe=a(233),ve=a(217),ke=a(123),we=a.n(ke),_e=a(122),Se=a.n(_e);var ye=function(){var e=Object(l.f)(),t=s.a.useContext(U),a=t.state,r=t.dispatch,c=s.a.useState(!1),i=Object(o.a)(c,2),u=i[0],j=i[1],m=s.a.useState(""),p=Object(o.a)(m,2),h=p[0],g=p[1],x=s.a.useState(""),O=Object(o.a)(x,2),f=O[0],v=O[1];s.a.useEffect((function(){a.isAuthenticated||e.push("/"),function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,r({type:"SET_USER_RESERVATION",payload:t}),e.next=6,F();case 6:a=e.sent,r({type:"SET_ALL_BIKES",payload:a});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,a.isAuthenticated,a.reservations]);var k=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:if(200!==(a=e.sent).status){e.next=12;break}return g(a.status),j(!0),v(a.data.message),e.next=10,T();case 10:s=e.sent,r({type:"SET_USER_RESERVATION",payload:s});case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),j(!0),g(e.t0.response.status),e.t0.response&&e.t0.response.data?e.t0.response.data.error?e.t0.response.data.error&&e.t0.response.data.error.raw?v(e.t0.response.data.error.raw.message):v(e.t0.response.data.error.message):e.t0.response.data.errors?(c=e.t0.response.data.errors.map((function(e){return Object(n.jsx)("li",{children:e.msg})})),v(c)):v(e.t0.response.data.message):v(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(ie,{}),Object(n.jsx)("div",{className:me.a.Main,children:Object(n.jsx)(xe.a,{component:ve.a,children:Object(n.jsxs)(pe.a,{className:me.a.table,"aria-label":"simple table",children:[Object(n.jsx)(Oe.a,{children:Object(n.jsxs)(fe.a,{children:[Object(n.jsx)(ge.a,{children:" Bike Label"}),Object(n.jsx)(ge.a,{children:" Bike Model"}),Object(n.jsx)(ge.a,{children:"Date"}),Object(n.jsx)(ge.a,{align:"right",children:"Action"})]})}),Object(n.jsx)(he.a,{children:a.userReservations&&a.userReservations.map((function(e){return Object(n.jsxs)(fe.a,{children:[Object(n.jsx)(ge.a,{component:"th",scope:"row",children:a.allBikes.length>0&&a.allBikes.filter((function(t){return t._id.toString()===e.bikeId.toString()}))[0].bikeLabel}),Object(n.jsx)(ge.a,{children:a.allBikes.length>0&&a.allBikes.filter((function(t){return t._id.toString()===e.bikeId.toString()}))[0].bikeModel}),Object(n.jsx)(ge.a,{children:Se()(e.date).format("YYYY-MM-DD,hh:mm A")}),Object(n.jsx)(ge.a,{align:"right",children:Object(n.jsx)(ae.a,{onClick:function(){return k(e._id)},children:Object(n.jsx)(we.a,{style:{color:"red"},color:"primary"})})})]},e._id)}))})]})})}),u&&Object(n.jsx)(Z,{heading:h?"Status Code "+h:"Something Went Wrong",showAlert:u,handleCloseAlert:function(){j(!1)},children:f})]})};var Ce=function(){var e=s.a.useReducer(Y,G),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(U.Provider,{value:{state:a,dispatch:r},children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:le}),Object(n.jsx)(l.a,{exact:!0,path:"/reservations",component:ye}),Object(n.jsx)(l.a,{exact:!0,path:"/login",component:be})]})})})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,246)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(171);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(te.a,{children:Object(n.jsx)(Ce,{})})}),document.getElementById("root")),Ne()},18:function(e,t,a){e.exports={Main:"Home_Main__Tg8dP",FormContainer:"Home_FormContainer__37ATt",InputField:"Home_InputField__1lrea",StepperBtnGroup:"Home_StepperBtnGroup__1R6ms",wrapper:"Home_wrapper__2XVz2",buttonProgress:"Home_buttonProgress__3ZFLg",HomeHeading:"Home_HomeHeading__30uD8",HomeSubHeading:"Home_HomeSubHeading__3pRxG","MuiFormControl-marginNormal":"Home_MuiFormControl-marginNormal__ncSFq"}},27:function(e,t,a){e.exports={Header:"Header_Header__3VoE2",HeaderImg:"Header_HeaderImg__25x5y",Menu:"Header_Menu__oVQwr",MobileMenuContainer:"Header_MobileMenuContainer__xFy7p",MobileMenu:"Header_MobileMenu__wdSZY",BtnCustom:"Header_BtnCustom__2MuL1",BtnCustomMobile:"Header_BtnCustomMobile__1SLsm"}},69:function(e,t,a){e.exports={Main:"Login_Main__36y-0",InputFieldSubmit:"Login_InputFieldSubmit__x4EXP"}},99:function(e,t,a){e.exports={Main:"Reservations_Main__198M8"}}},[[172,1,2]]]);
//# sourceMappingURL=main.e15653a7.chunk.js.map