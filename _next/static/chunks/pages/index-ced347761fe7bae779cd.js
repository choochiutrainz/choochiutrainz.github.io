_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,s=void 0!==a&&a;return n||o&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),c=n("FYa8"),i=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,l=f.length;i<l;i++){var u=f[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var d=o.props[u],p=r[u]||new Set;"name"===u&&s||!p.has(d)?(p.add(d),r[u]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||s()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),s=(n("YFqc"),n("ikrc"),!0);function c(e){e.projects;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:'Home - Wesley "Chewy" Chiu'}),Object(r.jsx)("meta",{name:"keywords",content:"web development, agile, XP, air force, product manager, pm"})]}),Object(r.jsxs)("div",{id:"section1",className:"flex flex-row justify-center bg-s31-blue space-x-20",children:[Object(r.jsx)("img",{className:"h-96 text-gray-100 m-40 mr-0 rounded-md",src:"personal-portrait.png",alt:"Portrait of me"}),Object(r.jsxs)("div",{className:"flex flex-col justify-center space-y-8",children:[Object(r.jsxs)("h1",{className:"text-4xl text-yellow-300 mr-40",children:["My passion and focus is leading",Object(r.jsx)("br",{}),"agile software product teams."]}),Object(r.jsxs)("p",{className:"text-2xl text-gray-100 leading-normal mr-40",children:["I strive to build and lead diverse, collaborative, and kick-ass teams that deliver a working, reliable product that users love. If you want to learn more about working together, ",Object(r.jsx)("a",{className:"text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline",href:"/contact",children:"contact me"})," today!"]})]})]}),Object(r.jsxs)("div",{className:"flex flex-col bg-gray-200 justify-center items-center pb-16",children:[Object(r.jsx)("h1",{className:"text-center w-screen text-4xl p-14 font-bold",children:"I also do portrait photography. And I like to hack things."}),Object(r.jsxs)("div",{className:"flex flex-row space-x-20 pb-14",children:[Object(r.jsxs)("div",{className:"flex flex-col space-y-8 items-center pl-24 pr-8",children:[Object(r.jsx)("img",{className:"h-96 rounded-md",src:"wes-at-sans.jpg",alt:"Portrait of me"}),Object(r.jsx)("p",{className:"text-center text-xl",children:"I am a U.S. Air Force Cyberwarfare Officer by trade. I get a good kick out of penetration testing my home devices and participating in Capture-The-Flag events to test my skills."})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-8 items-center pr-24 pl-8",children:[Object(r.jsx)("img",{className:"h-96 rounded-md",src:"wes-photographer.jpg",alt:"Portrait of me"}),Object(r.jsx)("p",{className:"text-center text-xl",children:"I love capturing priceless moments on my camera and sharing the stories of amazing people that I meet around the world. I\u2019d be honored to photograph your special occasion."})]})]}),Object(r.jsx)("a",{href:"/passions",children:Object(r.jsxs)("button",{className:"inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",children:[Object(r.jsx)("span",{className:"pr-1",children:"Learn More About Me"}),Object(r.jsx)("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-8 py-16 justify-center items-center bg-white",children:[Object(r.jsx)("h1",{className:"text-center w-screen text-4xl font-bold",children:"My Projects"}),Object(r.jsxs)("p",{className:"text-center text-xl",children:["It's a wonderful opportunity to work with people who are so passionate about their own craft",Object(r.jsx)("br",{}),"and to enable them to achieve new heights. Check out my latest projects that I've been working on."]}),Object(r.jsxs)("div",{className:"flex flex-row justify-center items-center space-x-20",children:[Object(r.jsx)("a",{href:"/portfolio/section-31",children:Object(r.jsx)("img",{className:"h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75",src:"wes-with-starfox-2.jpg",alt:"Section 31 project"})}),Object(r.jsx)("a",{className:"pt-24",href:"/portfolio/rogue-squadron",children:Object(r.jsx)("img",{className:"h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75",src:"rogue-squadron.png",alt:"Rogue Squadron project"})}),Object(r.jsx)("a",{href:"/portfolio/defense-innovation-unit",children:Object(r.jsx)("img",{className:"h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75",src:"zipline-team-1.png",alt:"DIUx project"})})]}),Object(r.jsx)("a",{className:"pt-12",href:"/portfolio",children:Object(r.jsxs)("button",{className:"inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",children:[Object(r.jsx)("span",{className:"pr-1",children:"More Projects"}),Object(r.jsx)("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]}),Object(r.jsxs)("div",{className:"bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center",children:[Object(r.jsx)("h1",{className:"text-center w-screen text-2xl font-bold",children:"Product Manager | Penetration Tester | Portrait Photographer"}),Object(r.jsx)("h1",{className:"text-center w-screen text-4xl font-bold",children:"Ready to build the next great thing together?"}),Object(r.jsx)("a",{href:"/contact",children:Object(r.jsxs)("button",{className:"inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110",children:[Object(r.jsx)("span",{className:"pr-1",children:"Contact Me Today"}),Object(r.jsx)("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),s=n("elyg"),c=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,s.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,x=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=a.Children.only(h),g=j&&"object"===typeof j&&j.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),w=r(y,2),O=w[0],_=w[1],M=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,a.useEffect)((function(){var e=_&&t&&(0,s.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,o=l[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,f,p,{locale:r})}),[p,f,_,b,t,n]);var k={ref:M,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,m,x,v,b)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var N="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);k.href=I||(0,s.addBasePath)((0,s.addLocale)(p,N,n&&n.defaultLocale))}return a.default.cloneElement(j,k)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},ikrc:function(e,t,n){e.exports={grid:"Project_grid__1qJ0X",card:"Project_card__-GwWd",logo:"Project_logo__7P0Z4"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!s&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);