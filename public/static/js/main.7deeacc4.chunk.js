(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{119:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),o=n(10),s=n(65),i=n(8),l=n(12),u=n.n(l),j=n(21),d=n(18),b=n.n(d),m="https://mern-completo-mariano.herokuapp.com/api",O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},p="[ui] Open modal",v="[ui] Close modal",h="[event] Set Active",x="[event] Events loaded",g="[Event] Event updated",y="[Event] Event Deleted",N="[event] Add new",w="[event] Clear active event",E="[event] Event logout",k="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",D=n(5),I=n(17),T=n.n(I),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:T()(e.end).toDate(),start:T()(e.start).toDate()})}))},L=function(e){return{type:N,payload:e}},_=function(){return{type:w}},R=function(e){return{type:g,payload:e}},A=function(){return{type:y}},G=function(e){return{type:x,payload:e}},M=function(){return{type:k}},V=function(e){return{type:S,payload:e}},F=function(){return function(e){localStorage.clear(),e(H()),e({type:E})}},H=function(){return{type:C}},J=n(16),U=n(25),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(J.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},c),{},Object(U.a)({},t.name,t.value)))};return[c,s,o]},q=(n(86),n(2)),z=function(){var e=Object(o.b)(),t=X({lEmail:"mariano@gmail.com",lPassword:"123456"}),n=Object(J.a)(t,2),a=n[0],c=n[1],r=X({rName:"Mario",rEmail:"mario@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(J.a)(r,2),i=s[0],l=s[1],d=a.lEmail,m=a.lPassword,f=i.rName,p=i.rEmail,v=i.rPassword1,h=i.rPassword2;return Object(q.jsx)("div",{className:"container login-container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(q.jsx)("h3",{children:"Ingreso"}),Object(q.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=d,a=m,function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:r.uid,name:r.name}))):b.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:d,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:m,onChange:c})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(q.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(q.jsx)("h3",{children:"Registro"}),Object(q.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,c;e((n=p,a=v,c=f,function(){var e=Object(j.a)(u.a.mark((function e(t){var r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:l})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:p,onChange:l})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:l})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:l})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},B=n(50),K=(n(88),function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(q.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(q.jsx)("span",{className:"navbar-brand",children:e}),Object(q.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(F())},children:[Object(q.jsx)("i",{className:"fas fa-sign-out-alt",children:" "}),Object(q.jsx)("span",{children:" Salir"})]})]})}),Q=function(e){var t=e.event,n=t.title,a=t.user;return Object(q.jsxs)("div",{children:[Object(q.jsx)("span",{children:n}),Object(q.jsxs)("strong",{children:[" - ",a.name]})]})},W={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Y=n(46),Z=n.n(Y),$=n(47),ee=n.n($),te=function(){return{type:p}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=T()().minutes(0).seconds(0).add(1,"hours"),ce=ae.clone().add(1,"hours"),re={title:"",notes:"",start:ae.toDate(),end:ce.toDate()},oe=function(){var e=Object(a.useState)(ae.toDate()),t=Object(J.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(ce.toDate()),s=Object(J.a)(r,2),i=s[0],l=s[1],d=Object(a.useState)(!0),m=Object(J.a)(d,2),O=m[0],p=m[1],h=Object(o.b)(),x=Object(a.useState)(re),g=Object(J.a)(x,2),y=g[0],N=g[1],w=Object(o.c)((function(e){return e.ui})).modalOpen,E=Object(o.c)((function(e){return e.calendar})).activeEvent;Object(a.useEffect)((function(){N(E||re)}),[E,N]);var k=y.notes,S=y.title,C=y.start,I=y.end,P=function(e){var t=e.target;N(Object(D.a)(Object(D.a)({},y),{},Object(U.a)({},t.name,t.value)))},A=function(){h({type:v}),h(_()),N(re)};return Object(q.jsxs)(Z.a,{isOpen:w,onRequestClose:A,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(q.jsx)("h1",{children:E?"Editar Evento":"Nuevo evento"}),Object(q.jsx)("hr",{}),Object(q.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=T()(C),a=T()(I);return n.isSameOrAfter(a)?b.a.fire("Error","La fecha fin debe de ser mayor a la fecha de incio","error"):S.trim().length<2?p(!1):(h(E?(t=y,function(){var e=Object(j.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).ok?n(R(t)):b.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n,a){var c,r,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,f("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(L(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),p(!0),void A())},children:[Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Fecha y hora inicio"}),Object(q.jsx)(ee.a,{onChange:function(e){c(e),console.log(e),N(Object(D.a)(Object(D.a)({},y),{},{start:e}))},value:n,className:"form-control"})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Fecha y hora fin"}),Object(q.jsx)(ee.a,{onChange:function(e){l(e),console.log(e),N(Object(D.a)(Object(D.a)({},y),{},{end:e}))},value:i,minDate:n,className:"form-control"})]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Titulo y notas"}),Object(q.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:S,onChange:P,autoComplete:"off"}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:k,onChange:P}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(q.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(q.jsx)("i",{className:"far fa-save"}),Object(q.jsx)("span",{children:" Guardar"})]})]})]})},se=(n(117),function(){var e=Object(o.b)();return Object(q.jsx)("button",{onClick:function(){e(te())},className:"btn btn-primary fab",children:Object(q.jsx)("i",{className:"fas fa-plus"})})}),ie=function(){var e=Object(o.b)();return Object(q.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,f("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(A()):b.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(q.jsx)("i",{className:"fas fa-trash"})})};T.a.locale("es");var le=Object(B.b)(T.a),ue=function(){var e=Object(o.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,r=Object(o.b)(),s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(J.a)(s,2),l=i[0],d=i[1];Object(a.useEffect)((function(){r(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=P(a.eventos),console.log(c),t(G(c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(q.jsxs)("div",{className:"calendar-screen",children:[Object(q.jsx)(K,{}),Object(q.jsx)(B.a,{localizer:le,events:t,startAccessor:"start",endAccessor:"end",messages:W,onDoubleClickEvent:function(e){r(te())},onSelectEvent:function(e){r({type:h,payload:e})},onView:function(e){d(e),localStorage.setItem("lastView",e)},view:l,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.usuarios._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:Q},onSelectSlot:function(e){r(_())},selectable:!0}),Object(q.jsx)(se,{}),n&&Object(q.jsx)(ie,{}),Object(q.jsx)(oe,{})]})},je=n(36),de=["isLoggedIn","component"],be=function(e){var t=e.isLoggedIn,n=e.component,a=Object(je.a)(e,de);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(D.a)({},e)):Object(q.jsx)(i.a,{to:"/login"})}}))},me=["isLoggedIn","component"],Oe=function(e){var t=e.isLoggedIn,n=e.component,a=Object(je.a)(e,me);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(i.a,{to:"/"}):Object(q.jsx)(n,Object(D.a)({},e))}}))},fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),a.ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(M());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(q.jsx)("h5",{children:"ESPERE ..."}):Object(q.jsx)(s.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(Oe,{exact:!0,path:"/login",component:z,isLoggedIn:!!c}),Object(q.jsx)(be,{exact:!0,path:"/",component:ue,isLoggedIn:!!c}),Object(q.jsx)(i.a,{to:"/"})]})})})},pe=n(26),ve=n(66),he={checking:!0},xe=n(51),ge={events:[],activeEvent:null},ye={modalOpen:!1},Ne=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:Object(D.a)({},t.payload)});case N:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(xe.a)(e.events),[t.payload])});case w:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case g:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case y:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case x:return Object(D.a)(Object(D.a)({},e),{},{events:Object(xe.a)(t.payload)});case E:return Object(D.a)({},ge);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)({},e),{},{checking:!1},t.payload);case k:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),we="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Ee=Object(pe.d)(Ne,we(Object(pe.a)(ve.a))),ke=function(){return Object(q.jsx)(o.a,{store:Ee,children:Object(q.jsx)(fe,{})})};n(119);r.a.render(Object(q.jsx)(ke,{}),document.getElementById("root"))},86:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.7deeacc4.chunk.js.map