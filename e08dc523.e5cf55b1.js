(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(116)),i={id:"take_until",title:"TakeUntil"},c={unversionedId:"core/reactive/take_until",id:"core/reactive/take_until",isDocsHomePage:!1,title:"TakeUntil",description:"Category: Combinator (filtering)",source:"@site/docs/core/reactive/take_until.md",slug:"/core/reactive/take_until",permalink:"/docs/core/reactive/take_until",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/take_until.md",version:"current",sidebar:"docs",previous:{title:"Take",permalink:"/docs/core/reactive/take"},next:{title:"TimeInterval",permalink:"/docs/core/reactive/time_interval"}},l=[],s={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Brief"),": Returns elements from the first sequence only until the second sequence produces a value."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output"),": Same type as the first input"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"TakeUntil")," operator allows you to stop an observable sequence when a notification is emitted from a second observable. ",Object(o.b)("inlineCode",{parentName:"p"},"TakeUntil")," starts by forwarding all notifications from the first observable. As soon as a notification is received from the second observable, ",Object(o.b)("inlineCode",{parentName:"p"},"TakeUntil")," cancels the subscription to the first observable and terminates successfully."),Object(o.b)("p",null,Object(o.b)("img",{alt:"TakeUntil operator",src:n(198).default})))}u.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/take_until-bdf6491187f066c6fae284e27e42d70e.svg"}}]);