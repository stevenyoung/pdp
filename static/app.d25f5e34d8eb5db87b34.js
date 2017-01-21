webpackJsonp([0,3],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=n(a),u=r(28),l=n(u),i=r(166),c=r(196),s=r(257),p=n(s),f=r(270),d=n(f),h=r(271),m=n(h),y={query:{searchTerm:""},places:[],mapCenter:{place:{lat:37.749202,lng:-122.41575}}},b=(0,p.default)(y);l.default.render(o.default.createElement(i.Provider,{store:b},o.default.createElement(c.Router,{history:c.browserHistory},o.default.createElement(c.Route,{path:"/",components:m.default}),o.default.createElement(c.Route,{path:"*",component:d.default}))),document.getElementById("app"))},257:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return(0,o.createStore)(p.default,e,(0,o.applyMiddleware)(l.default,f))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(173),u=r(258),l=n(u),i=r(259),c=n(i),s=r(265),p=n(s),f=(0,c.default)()},258:function(e,t){"use strict";function r(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(a){return"function"==typeof a?a(r,n,e):t(a)}}}}t.__esModule=!0;var n=r();n.withExtraArgument=r,t.default=n},259:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=o({},c.default,e),r=t.logger,n=t.transformer,a=t.stateTransformer,i=t.errorTransformer,s=t.predicate,p=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};n&&console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!");var d=[];return function(e){var r=e.getState;return function(e){return function(n){if("function"==typeof s&&!s(r,n))return e(n);var c={};d.push(c),c.started=l.timer.now(),c.startedTime=new Date,c.prevState=a(r()),c.action=n;var h=void 0;if(p)try{h=e(n)}catch(e){c.error=i(e)}else h=e(n);c.took=l.timer.now()-c.started,c.nextState=a(r());var m=t.diff&&"function"==typeof f?f(r,n):t.diff;if((0,u.printBuffer)(d,o({},t,{diff:m})),d.length=0,c.error)throw c.error;return h}}}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=r(260),l=r(261),i=r(264),c=n(i);t.default=a,e.exports=t.default},260:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function u(e,t,r,n){switch("undefined"==typeof e?"undefined":o(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,a(r)):e[n];case"function":return e(t);default:return e}}function l(e){var t=e.timestamp,r=e.duration;return function(e,n,a){var o=["action"];return t&&o.push("@ "+n),o.push(e.type),r&&o.push("(in "+a.toFixed(2)+" ms)"),o.join(" ")}}function i(e,t){var r=t.logger,n=t.actionTransformer,a=t.titleFormatter,o=void 0===a?l(t):a,i=t.collapsed,s=t.colors,f=t.level,d=t.diff;e.forEach(function(t,a){var l=t.started,h=t.startedTime,m=t.action,y=t.prevState,b=t.error,v=t.took,g=t.nextState,E=e[a+1];E&&(g=E.prevState,v=E.started-l);var T=n(m),_="function"==typeof i?i(function(){return g},m):i,P=(0,c.formatTime)(h),S=s.title?"color: "+s.title(T)+";":null,w=o(T,P,v);try{_?s.title?r.groupCollapsed("%c "+w,S):r.groupCollapsed(w):s.title?r.group("%c "+w,S):r.group(w)}catch(e){r.log(w)}var C=u(f,T,[y],"prevState"),j=u(f,T,[T],"action"),k=u(f,T,[b,y],"error"),O=u(f,T,[g],"nextState");C&&(s.prevState?r[C]("%c prev state","color: "+s.prevState(y)+"; font-weight: bold",y):r[C]("prev state",y)),j&&(s.action?r[j]("%c action","color: "+s.action(T)+"; font-weight: bold",T):r[j]("action",T)),b&&k&&(s.error?r[k]("%c error","color: "+s.error(b,y)+"; font-weight: bold",b):r[k]("error",b)),O&&(s.nextState?r[O]("%c next state","color: "+s.nextState(g)+"; font-weight: bold",g):r[O]("next state",g)),d&&(0,p.default)(y,g,r,_);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.printBuffer=i;var c=r(261),s=r(262),p=n(s)},261:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.repeat=function(e,t){return new Array(t+1).join(e)},n=t.pad=function(e,t){return r("0",t-e.toString().length)+e};t.formatTime=function(e){return n(e.getHours(),2)+":"+n(e.getMinutes(),2)+":"+n(e.getSeconds(),2)+"."+n(e.getMilliseconds(),3)},t.timer="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date},262:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return"color: "+c[e].color+"; font-weight: bold"}function o(e){var t=e.kind,r=e.path,n=e.lhs,a=e.rhs,o=e.index,u=e.item;switch(t){case"E":return r.join(".")+" "+n+" → "+a;case"N":return r.join(".")+" "+a;case"D":return""+r.join(".");case"A":return[r.join(".")+"["+o+"]",u];default:return null}}function u(e,t,r,n){var u=(0,i.default)(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}u?u.forEach(function(e){var t=e.kind,n=o(e);r.log("%c "+c[t].text,a(t),n)}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var l=r(263),i=n(l),c={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};e.exports=t.default},263:function(e,t,r){var n,a;(function(r){!function(r,o){"use strict";n=[],a=function(){return o()}.apply(t,n),!(void 0!==a&&(e.exports=a))}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function u(e,t){u.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function l(e,t,r){l.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function i(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function c(e){var t=typeof e;return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"undefined"!=typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function s(t,r,n,p,f,d,h){f=f||[];var m=f.slice(0);if("undefined"!=typeof d){if(p){if("function"==typeof p&&p(m,d))return;if("object"==typeof p){if(p.prefilter&&p.prefilter(m,d))return;if(p.normalize){var y=p.normalize(m,d,t,r);y&&(t=y[0],r=y[1])}}}m.push(d)}"regexp"===c(t)&&"regexp"===c(r)&&(t=t.toString(),r=r.toString());var b=typeof t,v=typeof r;if("undefined"===b)"undefined"!==v&&n(new o(m,r));else if("undefined"===v)n(new u(m,t));else if(c(t)!==c(r))n(new a(m,t,r));else if("[object Date]"===Object.prototype.toString.call(t)&&"[object Date]"===Object.prototype.toString.call(r)&&t-r!==0)n(new a(m,t,r));else if("object"===b&&null!==t&&null!==r){if(h=h||[],h.indexOf(t)<0){if(h.push(t),Array.isArray(t)){var g;t.length;for(g=0;g<t.length;g++)g>=r.length?n(new l(m,g,new u(e,t[g]))):s(t[g],r[g],n,p,m,g,h);for(;g<r.length;)n(new l(m,g,new o(e,r[g++])))}else{var E=Object.keys(t),T=Object.keys(r);E.forEach(function(a,o){var u=T.indexOf(a);u>=0?(s(t[a],r[a],n,p,m,a,h),T=i(T,u)):s(t[a],e,n,p,m,a,h)}),T.forEach(function(t){s(e,r[t],n,p,m,t,h)})}h.length=h.length-1}}else t!==r&&("number"===b&&isNaN(t)&&isNaN(r)||n(new a(m,t,r)))}function p(t,r,n,a){return a=a||[],s(t,r,function(e){e&&a.push(e)},n),a.length?a:e}function f(e,t,r){if(r.path&&r.path.length){var n,a=e[t],o=r.path.length-1;for(n=0;n<o;n++)a=a[r.path[n]];switch(r.kind){case"A":f(a[r.path[n]],r.index,r.item);break;case"D":delete a[r.path[n]];break;case"E":case"N":a[r.path[n]]=r.rhs}}else switch(r.kind){case"A":f(e[t],r.index,r.item);break;case"D":e=i(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,a=-1,o=r.path?r.path.length-1:0;++a<o;)"undefined"==typeof n[r.path[a]]&&(n[r.path[a]]="number"==typeof r.path[a]?[]:{}),n=n[r.path[a]];switch(r.kind){case"A":f(r.path?n[r.path[a]]:n,r.index,r.item);break;case"D":delete n[r.path[a]];break;case"E":case"N":n[r.path[a]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,a=e[t],o=r.path.length-1;for(n=0;n<o;n++)a=a[r.path[n]];switch(r.kind){case"A":h(a[r.path[n]],r.index,r.item);break;case"D":a[r.path[n]]=r.lhs;break;case"E":a[r.path[n]]=r.lhs;break;case"N":delete a[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=i(e,t)}return e}function m(e,t,r){if(e&&t&&r&&r.kind){var n,a,o=e;for(a=r.path.length-1,n=0;n<a;n++)"undefined"==typeof o[r.path[n]]&&(o[r.path[n]]={}),o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}}function y(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};s(e,t,n)}}var b,v,g=[];return b="object"==typeof r&&r?r:"undefined"!=typeof window?window:{},v=b.DeepDiff,v&&g.push(function(){"undefined"!=typeof v&&b.DeepDiff===p&&(b.DeepDiff=v,v=e)}),t(a,n),t(o,n),t(u,n),t(l,n),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:s,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:m,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof v},enumerable:!0},noConflict:{value:function(){return g&&(g.forEach(function(e){e()}),g=null),p},enumerable:!0}}),p})}).call(t,function(){return this}())},264:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},e.exports=t.default},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(173),a=r(266),o={query:a.query,places:a.places,mapCenter:a.mapCenter},u=(0,n.combineReducers)(o);t.default=u},266:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case u.SET_SEARCH_TERM:return Object.assign({},e,{searchTerm:t.text});default:return e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,places:[]},t=arguments[1];switch(t.type){case u.REQUEST_PLACES:return Object.assign({},e,{isFetching:!0});case u.RECEIVE_PLACES:return Object.assign({},e,{isFetching:!1,items:t.places});default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case u.SELECT_LOCATION:return Object.assign({},e,{place:t.place});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.query=n,t.places=a,t.mapCenter=o;var u=r(267)},267:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:f,text:e}}function o(e){return{type:d,query:e}}function u(e,t){return{type:h,query:e,places:t.result.map(function(e){return e.place})}}function l(e){return function(t){return t(o(e)),(0,p.default)("https://pdp-proto.herokuapp.com/search/"+e).then(function(e){return e.json()}).then(function(r){return t(u(e,r))})}}function i(e){return{type:m,place:e}}function c(e){return function(t){t(i(e))}}Object.defineProperty(t,"__esModule",{value:!0}),t.SELECT_LOCATION=t.RECEIVE_PLACES=t.REQUEST_PLACES=t.SET_SEARCH_TERM=void 0,t.setSearchTerm=a,t.requestPlaces=o,t.receivePlaces=u,t.fetchPlaces=l,t.selectLocationItem=i,t.updateMapCenter=c;var s=r(268),p=n(s),f=t.SET_SEARCH_TERM="SET_SEARCH_TERM",d=t.REQUEST_PLACES="REQUEST_PLACES",h=t.RECEIVE_PLACES="RECEIVE_PLACES",m=t.SELECT_LOCATION="SELECT_LOCATION"},270:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return u.default.createElement("div",{id:"missing"},u.default.createElement("h1",null,"oops"),u.default.createElement("h2",null,"use the top menu to navigate"))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),u=n(o);t.default=a},271:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),s=r(166),p=r(267),f=r(272),d=n(f),h=r(274),m=n(h),y=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleSearchValueUpdate=r.handleSearchValueUpdate.bind(r),r.handleSearchSubmit=r.handleSearchSubmit.bind(r),r.handleLocationSelect=r.handleLocationSelect.bind(r),r}return u(t,e),l(t,[{key:"handleLocationSelect",value:function(e){this.props.dispatch((0,p.updateMapCenter)({lat:e.lat,lng:e.lng}))}},{key:"handleSearchValueUpdate",value:function(e){this.props.dispatch((0,p.setSearchTerm)(e.target.value))}},{key:"handleSearchSubmit",value:function(){this.props.dispatch((0,p.fetchPlaces)(this.props.query.searchTerm))}},{key:"render",value:function(){var e="pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow",t="https://api.mapbox.com/styles/v1/stevenyoung/ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}";return c.default.createElement("div",null,c.default.createElement(d.default,{placeholder:"Place? Movie? Book? Song?",searchValue:this.props.query.searchTerm,updateInput:this.handleSearchValueUpdate,onUserSubmit:this.handleSearchSubmit}),c.default.createElement(m.default,{mapboxToken:e,mapboxTileLayer:t,query:this.props.query,mapCenter:this.props.mapCenter,handleLocationSelect:this.handleLocationSelect}))}}]),t}(i.Component);y.propTypes={query:i.PropTypes.object,placeCollection:i.PropTypes.array.isRequired,isFetching:i.PropTypes.bool.isRequired,lastUpdated:i.PropTypes.number,dispatch:i.PropTypes.func.isRequired,mapCenter:i.PropTypes.object};var b=function(e){var t=e.query,r=e.places,n=e.mapCenter,a=!1,o=r.items;return{query:t,placeCollection:o,isFetching:a,mapCenter:n}};y.defaultProps={placeCollection:[]},t.default=(0,s.connect)(b)(y)},272:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),u=r(273),l=function(e){var t="places.press";return o.default.createElement("div",{className:"searchinput w-form"},o.default.createElement(u.MobileSearchForm,{placeholder:e.placeholder,searchValue:e.searchValue,submitSearch:e.onUserSubmit,updateInput:e.updateInput}),o.default.createElement("div",{className:"logosearchcontainer w-container"},o.default.createElement("div",{className:"app-title"},o.default.createElement("span",{className:"app-title"},t)),o.default.createElement(u.SearchForm,{placeholder:e.placeholder,searchValue:e.searchValue,submitSearch:e.onUserSubmit,updateInput:e.updateInput})))};l.propTypes={placeholder:o.default.PropTypes.string,searchValue:o.default.PropTypes.string,onUserSubmit:o.default.PropTypes.func,updateInput:o.default.PropTypes.func},t.default=l},273:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MobileSearchForm=t.SearchForm=void 0;var a=r(1),o=n(a),u=function(e){return o.default.createElement("form",{className:"mobilesearchform",onSubmit:e.submitSearch},o.default.createElement("input",{className:"mobilesearch w-hidden-main w-hidden-medium w-hidden-small w-input",maxLength:"256",placeholder:e.placeholder,required:"required",type:"text",onChange:e.updateInput}),o.default.createElement("a",{className:"searchformsubmit w-button w-hidden-main w-hidden-medium w-hidden-small",onClick:e.submitSearch},"Go"))},l=function(e){return o.default.createElement("div",{className:"logosearchformwrapper w-form"},o.default.createElement("form",{className:"searchform",onSubmit:e.submitSearch},o.default.createElement("input",{className:"searchforminput w-input",maxLength:"256",placeholder:e.placeholder,required:"required",type:"text",onChange:e.updateInput}),o.default.createElement("a",{className:"searchformsubmit w-button",onClick:e.submitSearch},"Go")))};u.propTypes={placeholder:o.default.PropTypes.string,searchValue:o.default.PropTypes.string,submitSearch:o.default.PropTypes.func,updateInput:o.default.PropTypes.func},l.propTypes={placeholder:o.default.PropTypes.string,searchValue:o.default.PropTypes.string,submitSearch:o.default.PropTypes.func,updateInput:o.default.PropTypes.func},t.SearchForm=l,t.MobileSearchForm=u},274:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),s=r(166),p=r(275),f=n(p),d=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={query:e.query},r}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props.mapboxToken,t=this.props.mapboxTileLayer,r=this.props.query.searchTerm;return c.default.createElement("div",{className:"home"},c.default.createElement(f.default,{accessToken:e,placeCollection:this.props.placeCollection,searchTerm:r,tileLayer:t,mapCenter:this.props.mapCenter,dispatch:this.props.dispatch,handleLocationSelect:this.props.handleLocationSelect}))}}]),t}(i.Component);d.propTypes={mapboxToken:i.PropTypes.string,mapboxTileLayer:i.PropTypes.string,query:i.PropTypes.object.isRequired,placeCollection:i.PropTypes.array.isRequired,isFetching:i.PropTypes.bool.isRequired,lastUpdated:i.PropTypes.number,dispatch:i.PropTypes.func.isRequired,mapCenter:i.PropTypes.object,handleLocationSelect:i.PropTypes.func};var h=function(e){var t=e.query,r=e.places,n=e.mapCenter,a=!1,o=r.items;return{query:t,placeCollection:o,mapCenter:n,isFetching:a}};d.defaultProps={placeCollection:[]},t.default=(0,s.connect)(h)(d)},275:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),u=r(276),l=n(u),i=r(278),c=n(i),s=function(e){var t={accessToken:e.accessToken,tileUrl:e.tileLayer,defaultZoom:9,maxZoom:18};return o.default.createElement("div",{className:"mapcontainer"},o.default.createElement(l.default,{mapCenter:e.mapCenter,places:e.placeCollection,mapSettings:t}),o.default.createElement(c.default,{results:e.placeCollection,searchTerm:e.searchTerm,dispatch:e.dispatch,handleLocationSelect:e.handleLocationSelect}))};s.propTypes={accessToken:o.default.PropTypes.string,placeCollection:o.default.PropTypes.array,searchTerm:o.default.PropTypes.string,tileLayer:o.default.PropTypes.string,mapCenter:o.default.PropTypes.object,dispatch:o.default.PropTypes.func,handleLocationSelect:o.default.PropTypes.func},t.default=s},276:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),s=r(277),p=n(s),f=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.initializeLeafletMap(),this.mapTiles.addTo(this.map),this.displayMapForCoords(this.props.mapCenter.place),this.displayMarkerCollection(this.props.places)}},{key:"componentWillReceiveProps",value:function(e){e.mapCenter!==this.props.mapCenter&&this.displayMapForCoords(e.mapCenter.place)}},{key:"componentDidUpdate",value:function(e){e.places!==this.props.places&&this.displayMarkerCollection(this.props.places)}},{key:"initializeLeafletMap",value:function(){this.map=p.default.map("leafletmap"),this.mapTiles=p.default.tileLayer(this.props.mapSettings.tileUrl+"?access_token="+this.props.mapSettings.accessToken,{maxZoom:this.props.mapSettings.maxZoom,attribution:"<© Mapbox>"})}},{key:"displayMapForCoords",value:function(e){this.map.setView([e.lat,e.lng],this.props.mapSettings.defaultZoom)}},{key:"displayMarkerCollection",value:function(e){var t=this;e.forEach(function(e){var r=t.popupMarkup(e),n={lat:e.loc.coordinates[1],lng:e.loc.coordinates[0]};t.displayMarker(n,r)})}},{key:"popupMarkup",value:function(e){return'<div class="leafletpopup">\n        <h4>'+e.name+"</h4>\n        <em><h4>"+e.title+"</em> - <em>"+e.author+"</h4></em>\n        <p>"+e.scenedescription+'</p>\n        <p><a href="//'+e.url+'">'+e.attribution+"</a></p>\n      </div>"}},{key:"displayMarker",value:function(e,t){var r=p.default.marker([e.lat,e.lng]);r.bindPopup(t).openPopup().addTo(this.map)}},{key:"render",value:function(){return c.default.createElement("div",{className:"leafletmapcontainer"},c.default.createElement("div",{id:"leafletmap"}))}}]),t}(c.default.Component);f.propTypes={mapCenter:c.default.PropTypes.object,map:c.default.PropTypes.node,mapTiles:c.default.PropTypes.object,places:c.default.PropTypes.array,mapSettings:c.default.PropTypes.object},f.defaultProps={places:[]},t.default=f},278:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),u=r(279),l=n(u),i=r(280),c=n(i),s=function(e){var t=e.results,r=e.searchTerm,n=e.handleLocationSelect,a=void 0;a=t.length>0?o.default.createElement("div",{className:"locationlist"},o.default.createElement("div",{className:"location-list-items"},t.map(function(e){return o.default.createElement(l.default,{place:e,key:e.id,onClick:n})}))):o.default.createElement(c.default,null);var u=void 0;return u=r&&t.length>0?o.default.createElement("div",{className:"resultssummary w-dyn-list searchterm"},o.default.createElement("span",null,"matched ",r)):o.default.createElement("div",{className:"resultssummary w-dyn-list"}," "),o.default.createElement("div",{className:"w-container listcontainer"},u,o.default.createElement("div",{className:"resultssummary w-dyn-list"},a))};s.propTypes={results:o.default.PropTypes.array,searchTerm:o.default.PropTypes.string,handleLocationSelect:o.default.PropTypes.func},s.defaultProps={results:[]},t.default=s},279:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),u=r(196),l=function(e){return o.default.createElement("div",{className:"locationitem",key:e.place.id},o.default.createElement(u.Link,{onClick:function(){return e.onClick(e.place)}},o.default.createElement("div",null,o.default.createElement("span",{className:"location-work-title"},e.place.name)," ",o.default.createElement("span",{className:"location-work-name"},e.place.title)," by ",o.default.createElement("span",{className:"location-work-artist"},e.place.author))))};l.propTypes={place:o.default.PropTypes.object,onClick:o.default.PropTypes.func,dispatch:o.default.PropTypes.func},t.default=l},280:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a),u=function(){return o.default.createElement("div",{className:"locationlist"},o.default.createElement("div",{className:"emptylocationlist"},"No items found."),o.default.createElement("a",{className:"more-locations w-button",href:"/nearby"},"more nearby locations..."))};t.default=u}});