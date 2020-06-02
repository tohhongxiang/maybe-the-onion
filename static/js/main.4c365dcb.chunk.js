(this["webpackJsonpmaybe-the-onion"]=this["webpackJsonpmaybe-the-onion"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),l=(n(14),n(3)),s=n.n(l),u=n(4),i=n(6),f=n(1);function b(e){var t=e.title,n=e.subreddit,c=e.link,o=e.goToNextQuestion,l=e.onAnswer,s=Object(r.useState)(null),u=Object(f.a)(s,2),i=u[0],b=u[1],d=function(e){return"nottheonion"===n.toLowerCase()&&"real"===e||"theonion"===n.toLowerCase()&&"fake"===e?(l(1),b(1)):(l(0),b(-1))};return Object(r.useEffect)((function(){b(null)}),[t,n]),a.a.createElement("div",{className:"w-auto flex flex-col justify-center align-center h-full"},a.a.createElement("div",{className:"mb-8 p-4"},a.a.createElement("h1",{className:"font-sans text-5xl text-center font-semibold"},t)),a.a.createElement("div",{className:"flex flex-col md:flex-row w-3/5 ml-auto mr-auto justify-around"},i?a.a.createElement("div",{className:"flex flex-col"},a.a.createElement("button",{className:"p-4 m-4 rounded-lg tracking-wide \n                            bg-".concat(1===i?"green":"red","-300 \n                            hover:bg-").concat(1===i?"green":"red","-500 \n                            border border-gray-200"),onClick:o},a.a.createElement("strong",null,1===i?"Correct":"Incorrect")),c&&a.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"m-8 hover:underline"},a.a.createElement("em",null,"Link to reddit article"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"p-4 m-4 rounded-lg tracking-wide bg-red-300 hover:bg-red-500 border border-gray-200",onClick:function(){return d("fake")}},a.a.createElement("strong",null,"Fake news")),a.a.createElement("button",{className:"p-4 m-4 rounded-lg tracking-wide bg-green-300 hover:bg-green-500 border border-gray-200",onClick:function(){return d("real")}},a.a.createElement("strong",null,"Real news")))))}var d=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),l=Object(f.a)(o,2),d=l[0],g=l[1],p=Object(r.useState)(0),j=Object(f.a)(p,2),O=j[0],w=j[1],E=Object(r.useState)(""),v=Object(f.a)(E,2),k=v[0],x=v[1],N=Object(r.useState)(""),y=Object(f.a)(N,2),S=y[0],C=y[1],L=Object(r.useCallback)(Object(i.a)(s.a.mark((function e(){var t,n,r,a,o,l,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:"",g(!0),e.next=5,Promise.all([m("TheOnion",{after:t}),m("NotTheOnion",{after:n})]);case 5:r=e.sent,a=Object(f.a)(r,2),o=a[0],l=a[1],g(!1),c((function(e){return[].concat(Object(u.a)(e),Object(u.a)(h([].concat(Object(u.a)(o.articles),Object(u.a)(l.articles)))))})),x(o.after),C(n.after);case 13:case"end":return e.stop()}}),e)}))),[]);Object(r.useEffect)((function(){L()}),[L]),Object(r.useEffect)((function(){O>n.length-1&&L(k,S)}),[L,O,n.length,k,S]);var T=Object(r.useState)(0),A=Object(f.a)(T,2),M=A[0],R=A[1],F=Object(r.useState)(0),I=Object(f.a)(F,2),J=I[0],P=I[1],Q=function(){w((function(e){return e+1}))};return a.a.createElement("div",{className:"App h-screen",style:{display:"grid",gridTemplateRows:"1fr auto"}},d?a.a.createElement("p",{className:"text-center m-12 font-semibold"},"Loading..."):n[O]&&a.a.createElement(b,Object.assign({},n[O],{onAnswer:function(e){R((function(t){return t+e})),P((function(e){return e+1}))},goToNextQuestion:Q})),a.a.createElement("div",{className:"flex justify-between items-center pl-4 pr-4"},a.a.createElement("h2",{className:"font-bold text-2xl"},M,"/",J),a.a.createElement("button",{className:"p-4 m-4 rounded-lg tracking-wide bg-blue-300 hover:bg-blue-500 border border-gray-200",onClick:Q},">")))};function m(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t){var n,r,a=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r=new URL("https://www.reddit.com/r/".concat(t,".json")),Object.keys(n).forEach((function(e){return r.searchParams.append(e,n[e])})),e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){var t=e.data;return{after:t.after,articles:t.children.map((function(e){var t=e.data;return{title:t.title,link:"https://www.reddit.com"+t.permalink,subreddit:t.subreddit}}))}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4c365dcb.chunk.js.map