(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},180:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/zip-573967c64d6ddb4c1924616fa302b1da.svg"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(116)),a={id:"zip",title:"Zip"},c={unversionedId:"core/reactive/zip",id:"core/reactive/zip",isDocsHomePage:!1,title:"Zip",description:"Category: Combinator",source:"@site/docs/core/reactive/zip.md",slug:"/core/reactive/zip",permalink:"/docs/core/reactive/zip",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/zip.md",version:"current",sidebar:"docs",previous:{title:"TimeInterval",permalink:"/docs/core/reactive/time_interval"},next:{title:"BitwiseNot",permalink:"/docs/core/expressions/bitwise_not"}},p=[],s={rightToc:p};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Combinator"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Combines values from the source sequences whenever all of the sequences have produced an element."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) as long as multiple are supplied"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"System.Tuple<input1_type,input2_type,input3_type>"),"): A tuple of inputs"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Zip")," operator allows you to combine the items emitted by two or more observable sequences. Items are matched by the order in which they were emitted by each of the sequences, independently of time."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Zip operator",src:r(180).default})),Object(i.b)("p",null,"The first item emitted by observable #1 is matched to the first item emitted by observable #2; the second item emitted by observable #1 is matched to the second item emitted by observable #2; and so on."),Object(i.b)("p",null,"The operator will terminate when all possible pairs have been formed. This means that the resulting sequence will only be as long as the shortest of the input sequences."))}l.isMDXComponent=!0}}]);