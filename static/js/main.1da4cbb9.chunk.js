(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),a=n(1),s=n.n(a),o=n(3),u=n(4),i=n(2),l=(n(15),n(16),n(9)),d=n.n(l),p=(n(17),n(0)),j=function(e){var t=e.posts,n=e.onChangePostId,c=e.selectedPostId;return Object(p.jsxs)("div",{className:"PostsList",children:[Object(p.jsx)("h2",{children:"Posts:"}),Object(p.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(p.jsxs)("li",{className:"PostsList__item",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"[User #".concat(e.userId,"]")}),e.title]}),Object(p.jsx)("button",{type:"button",className:d()({PostsList__button:!0,button:!0,"button--active":c===e.id}),onClick:function(){return n(e.id)},children:c===e.id?"Close":"Open"})]},e.id)}))})]})},b="https://mate.academy/students-api",m=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/comments?postId=").concat(t));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(5),x=n(7),v=(n(19),function(e){var t=e.selectedPostId,n=e.updateComment,c={postId:t,name:"",body:"",email:""},r=Object(i.useState)(c),a=Object(u.a)(r,2),l=a[0],d=a[1],j=function(e){var t=e.target,n=t.name,c=t.value;d(Object(x.a)(Object(x.a)({},l),{},Object(O.a)({},n,c)))},b=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f(l);case 3:d(c),n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{className:"NewCommentForm",onSubmit:b,children:[Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"text",name:"name",value:l.name,required:!0,placeholder:"Your name",className:"NewCommentForm__input",onChange:j})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"email",name:"email",value:l.email,required:!0,placeholder:"Your email",className:"NewCommentForm__input",onChange:j})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("textarea",{name:"body",value:l.body,required:!0,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:j})}),Object(p.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),_=(n(20),function(e){var t=e.post,n=e.selectedPostId,c=Object(i.useState)([]),r=Object(u.a)(c,2),a=r[0],l=r[1],d=Object(i.useState)(!0),j=Object(u.a)(d,2),b=j[0],f=j[1],O=Object(i.useState)(!0),x=Object(u.a)(O,2),_=x[0],N=x[1];Object(i.useEffect)((function(){Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.id||0);case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})))()}),[t,_]);var w=function(){N(!_)},y=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:w();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"PostDetails",children:[Object(p.jsx)("h2",{children:"Post details:"}),Object(p.jsx)("section",{className:"PostDetails__post",children:Object(p.jsx)("p",{children:t.body})}),Object(p.jsxs)("section",{className:"PostDetails__comments",children:[a.length>0?Object(p.jsxs)("button",{type:"button",className:"button",onClick:function(){f(!b)},children:[b?"Hide ":"Show ","".concat(a.length," comments")]}):"There are no comments yet",Object(p.jsx)("ul",{className:"PostDetails__list",children:b&&a.map((function(e){return Object(p.jsxs)("li",{className:"PostDetails__list-item",children:[Object(p.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return y(e.id)},children:"X"}),Object(p.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(p.jsx)("section",{children:Object(p.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(p.jsx)(v,{updateComment:w,selectedPostId:n})})})]})}),N=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t){e.next=6;break}return e.next=3,fetch("".concat(b,"/posts?userId=").concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(b,"/posts"));case 8:e.t0=e.sent;case 9:if(!(c=e.t0).ok||!(null===(n=c.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"))){e.next=12;break}return e.abrupt("return",c.json());case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/posts/").concat(t));case 2:if(!(c=e.sent).ok||!(null===(n=c.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"))){e.next=5;break}return e.abrupt("return",c.json());case 5:return e.abrupt("return",{id:0,userId:0,body:"",title:"",createdAt:"",updatedAt:""});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users"));case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.onChange,n=Object(i.useState)([]),c=Object(u.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(p.jsxs)("label",{children:["Select a user: \xa0",Object(p.jsxs)("select",{className:"App__user-selector",onChange:t,children:[Object(p.jsx)("option",{value:"0",children:"All users"}),r.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})},P=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),a=Object(u.a)(r,2),l=a[0],d=a[1],b=Object(i.useState)({}),m=Object(u.a)(b,2),f=m[0],h=m[1],O=Object(i.useState)(0),x=Object(u.a)(O,2),v=x[0],y=x[1],P=Object(i.useState)(!1),C=Object(u.a)(P,2),g=C[0],S=C[1];Object(i.useEffect)((function(){S(0!==v),Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(l);case 2:return t=e.sent,e.next=5,w(v);case 5:n=e.sent,c(t),h(n);case 8:case"end":return e.stop()}}),e)})))()}),[l,v]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App__header",children:Object(p.jsx)(k,{onChange:function(e){var t=e.target.value;d(+t)}})}),Object(p.jsxs)("main",{className:"App__main",children:[Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(j,{posts:n,onChangePostId:function(e){y(e===v?0:e)},selectedPostId:v})}),g&&Object(p.jsx)("div",{className:"App__content",children:Object(p.jsx)(_,{selectedPostId:v,post:f})})]})]})};r.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1da4cbb9.chunk.js.map