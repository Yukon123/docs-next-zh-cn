(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{396:function(t,e,n){"use strict";var r=n(218),a=n(223),o=n(12),s=n(30),u=n(398),i=n(220),c=n(24),l=n(26),p=n(219),f=n(88),h=n(224),d=n(3),v=h.UNSUPPORTED_Y,g=[].push,b=Math.min;r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=l(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,o);for(var u,i,c,p=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,h+"g");(u=f.call(v,r))&&!((i=v.lastIndex)>d&&(p.push(r.slice(d,u.index)),u.length>1&&u.index<r.length&&g.apply(p,u.slice(1)),c=u[0].length,d=i,p.length>=o));)v.lastIndex===u.index&&v.lastIndex++;return d===r.length?!c&&v.test("")||p.push(""):p.push(r.slice(d)),p.length>o?p.slice(0,o):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,a,n):r.call(l(a),e,n)},function(t,a){var s=o(this),f=l(t),h=n(r,s,f,a,r!==e);if(h.done)return h.value;var d=u(s,RegExp),g=s.unicode,m=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"g":"y"),w=new d(v?"^(?:"+s.source+")":s,m),y=void 0===a?4294967295:a>>>0;if(0===y)return[];if(0===f.length)return null===p(w,f)?[f]:[];for(var j=0,O=0,x=[];O<f.length;){w.lastIndex=v?0:O;var _,S=p(w,v?f.slice(O):f);if(null===S||(_=b(c(w.lastIndex+(v?O:0)),f.length))===j)O=i(f,O,g);else{if(x.push(f.slice(j,O)),x.length===y)return x;for(var k=1;k<=S.length-1;k++)if(x.push(S[k]),x.length===y)return x;O=j=_}}return x.push(f.slice(j)),x}]}),!!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),v)},398:function(t,e,n){var r=n(12),a=n(61),o=n(4)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[o])?e:a(n)}},410:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r={language:"Language",github:"GitHub",lastCommit:"Last commit",last90Days:"Last 90 days",loadDetails:"Load Details",commits:"commits",loading:"Loading..."},a=[{lang:"en-us",owner:"vuejs",repo:"docs",branch:"master",url:"https://v3.vuejs.org/"},{lang:"id",owner:"vuejs-id",repo:"docs-next",branch:"indonesian"},{lang:"ja",owner:"vuejs-jp",repo:"ja.vuejs.org",branch:"lang-ja",url:"https://v3.ja.vuejs.org/"},{lang:"ko",owner:"vuejs-kr",repo:"docs-next",branch:"rootKoKr",url:"https://v3.ko.vuejs.org/"},{lang:"pt-br",owner:"vuejs-br",repo:"docs-next",branch:"master",url:"https://vuejsbr-docs-next.netlify.app/"},{lang:"ru",owner:"translation-gang",repo:"docs-next",branch:"master",url:"https://v3.ru.vuejs.org/"},{lang:"zh-cn",owner:"vuejs",repo:"docs-next-zh-cn",branch:"master",url:"https://v3.cn.vuejs.org/"}]},416:function(t,e,n){var r=n(38),a=Date.prototype,o=a.toString,s=a.getTime;"Invalid Date"!=String(new Date(NaN))&&r(a,"toString",(function(){var t=s.call(this);return t==t?o.call(this):"Invalid Date"}))},461:function(t,e,n){},530:function(t,e,n){var r=n(2),a=n(3),o=n(19),s=n(39).f,u=n(14),i=a((function(){s(1)}));r({target:"Object",stat:!0,forced:!u||i,sham:!u},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},531:function(t,e,n){var r=n(2),a=n(14);r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:n(231)})},532:function(t,e,n){"use strict";var r=n(2),a=n(3),o=n(16),s=n(225);r({target:"Date",proto:!0,forced:a((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}))},{toJSON:function(t){var e=o(this),n=s(e,"number");return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},533:function(t,e,n){"use strict";n(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},534:function(t,e,n){n(2)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},535:function(t,e,n){"use strict";n(461)},551:function(t,e,n){"use strict";n.r(e);n(124),n(42),n(40),n(530),n(128),n(129),n(235),n(531),n(130);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(46),n(8),n(67),n(13),n(15),n(127);var s=n(84);var u=n(36),i=(n(90),n(217),n(60),n(396),n(86),n(532),n(533),n(416),n(534),n(87),n(410)),c=function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(e){var n,r,a,o,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.owner,r=e.repo,a=e.branch,t.next=3,fetch("https://api.github.com/repos/".concat(n,"/").concat(r,"/branches/").concat(a));case 3:return o=t.sent,t.next=6,o.json();case 6:return s=t.sent,u=s.commit.commit.committer.date,t.abrupt("return",u.split("T")[0]);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=new Date(Date.now()-7776e6).toJSON().replace(/\.\d*/,""),p=function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(e){var n,r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.owner,r=e.repo,t.next=3,fetch("https://api.github.com/repos/".concat(n,"/").concat(r,"/commits?since=").concat(l,"&per_page=100"));case 3:return a=t.sent,t.next=6,a.json();case 6:return o=t.sent,t.abrupt("return",o.length);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f={name:"translations",data:function(){var t,e={},n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(s.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){i=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw o}}}}(i.b);try{for(n.s();!(t=n.n()).done;){e[t.value.lang]=null}}catch(t){n.e(t)}finally{n.f()}return{showLoadButton:!0,dates:e,counts:o({},e),labels:i.a,repos:i.b}},computed:{merged:function(){var t=this;return this.repos.map((function(e){return o(o({},e),{},{date:t.dates[e.lang],count:t.counts[e.lang]})}))}},mounted:function(){var t=null;try{t=JSON.parse(sessionStorage.getItem("translation-stats"))}catch(t){}if(t){var e=t,n=e.date,r=e.counts,a=e.dates;!n||n+108e5<Date.now()||(this.dates=a,this.counts=r,this.showLoadButton=!1)}},methods:{load:function(){var t=this;return Object(u.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoadButton=!1,e.next=3,Promise.all(t.repos.map(t.loadRepo));case 3:t.saveStats();case 4:case"end":return e.stop()}}),e)})))()},loadRepo:function(t){var e=this;return Object(u.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadLastCommit(t);case 2:return n.abrupt("return",e.loadCommitCount(t));case 3:case"end":return n.stop()}}),n)})))()},loadLastCommit:function(t){var e=this;return Object(u.a)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.lang,e.dates[r]=i.a.loading,a="-",n.prev=3,n.next=6,c(t);case 6:a=n.sent,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(3);case 11:e.dates[r]=a;case 12:case"end":return n.stop()}}),n,null,[[3,9]])})))()},loadCommitCount:function(t){var e=this;return Object(u.a)(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.lang,a=e.dates[r],o=0,"-"!==a){n.next=7;break}o="-",n.next=18;break;case 7:if(!(a>l)){n.next=18;break}return e.counts[r]=i.a.loading,n.prev=9,n.next=12,p(t);case 12:o=n.sent,n.next=18;break;case 15:n.prev=15,n.t0=n.catch(9),o="-";case 18:e.counts[r]=o;case 19:case"end":return n.stop()}}),n,null,[[9,15]])})))()},saveStats:function(){var t={date:Date.now(),counts:this.counts,dates:this.dates};sessionStorage.setItem("translation-stats",JSON.stringify(t))}}},h=(n(535),n(59)),d=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v(t._s(t.labels.language))]),t._v(" "),n("th",[t._v(t._s(t.labels.github))]),t._v(" "),n("th",[t._v(t._s(t.labels.lastCommit))]),t._v(" "),n("th",[t._v(t._s(t.labels.last90Days))])])]),t._v(" "),n("tbody",t._l(t.merged,(function(e,r){var a=e.lang,o=e.owner,s=e.repo,u=e.url,i=e.count,c=e.date;return n("tr",{key:r},[n("td",[u?n("a",{attrs:{href:u,target:"_blank"}},[t._v("\n          "+t._s(a)+" "),n("OutboundLink")],1):[t._v("\n          "+t._s(a)+"\n        ")]],2),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/"+o+"/"+s+"/",target:"_blank"}},[t._v(t._s(o)+"/"+t._s(s)+" "),n("OutboundLink")],1)]),t._v(" "),t.showLoadButton?[0===r?n("td",{staticClass:"load-cell",attrs:{colspan:"2",rowspan:t.merged.length}},[n("button",{on:{click:t.load}},[t._v(t._s(t.labels.loadDetails))])]):t._e()]:[n("td",[t._v(t._s(c))]),t._v(" "),n("td",[t._v("\n          "+t._s(i)+t._s(100===i?"+":"")+"\n          "),"number"==typeof i?[t._v("\n            "+t._s(t.labels.commits)+"\n          ")]:t._e()],2)]],2)})),0)])}),[],!1,null,"ac871d6e",null);e.default=d.exports}}]);