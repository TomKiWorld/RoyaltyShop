(this["webpackJsonproyalty-shop"]=this["webpackJsonproyalty-shop"]||[]).push([[7],{108:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.imageUrl,n=e.children;return c.a.createElement("div",{className:"header-banner",style:{backgroundImage:"url(".concat(t,")")}},n)}},110:function(e,t,n){},111:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(12),l=n(7),i=n(55),o=n(26),s=n(48),u=n(59);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createElement("path",{d:"M15.8,0a6.18,6.18,0,0,0-5,2.7A6.18,6.18,0,0,0,5.8,0,5.91,5.91,0,0,0,0,6c0,3.7,2.5,9.5,9.7,13.7a2,2,0,0,0,1.1.3,2.28,2.28,0,0,0,1.1-.3c7.2-4.1,9.7-9.9,9.7-13.7A5.91,5.91,0,0,0,15.8,0Z"}),d=function(e){var t=e.svgRef,n=e.title,a=f(e,["svgRef","title"]);return c.a.createElement("svg",m({viewBox:"0 0 21.6 20",ref:t},a),n?c.a.createElement("title",null,n):null,b)},E=c.a.forwardRef((function(e,t){return c.a.createElement(d,m({svgRef:t},e))})),p=(n.p,n(110),Object(l.b)({wishListItems:u.a}));t.a=Object(r.b)(p,(function(e){return{addItem:function(t){return e(Object(o.a)(t))},toggleItem:function(t){return e(Object(s.c)(t))}}}))((function(e){var t=e.item,n=e.addItem,a=e.toggleItem,r=e.wishListItems,l=t.imageUrl,o=t.name,s=t.price,u=t.id,m=r.filter((function(e){return e.id===u})).length>0;return c.a.createElement("div",{className:"collection-item"},c.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(l,")")}}),c.a.createElement(E,{onClick:function(){return a(t)},className:"wish-list-icon pointer",fill:m?"black":"white",stroke:m?"white":"black"}),c.a.createElement("div",{className:"collection-footer"},c.a.createElement("span",{className:"name"},o),c.a.createElement("span",{className:"price"},"\u20ac",s)),c.a.createElement(i.a,{onClick:function(){return n(t)},inverted:!0},"Add to Cart"))}))},113:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(62);n(114);t.a=function(){return c.a.createElement("div",{className:"benefits-banner container"},c.a.createElement("div",{className:"benefits-banner-box"},c.a.createElement(r.a,{className:"logo"}),c.a.createElement("h3",{className:"benefits-banner-title"},c.a.createElement("span",null,"Quality")," Products")),c.a.createElement("div",{className:"benefits-banner-box"},c.a.createElement(r.a,{className:"logo"}),c.a.createElement("h3",{className:"benefits-banner-title"},c.a.createElement("span",null,"Quick")," Delivery")),c.a.createElement("div",{className:"benefits-banner-box"},c.a.createElement(r.a,{className:"logo"}),c.a.createElement("h3",{className:"benefits-banner-title"},c.a.createElement("span",null,"Free")," Shipment")))}},114:function(e,t,n){},125:function(e,t,n){"use strict";var a=n(56),c=n(0),r=n.n(c),l=n(63);t.a=function(e){return function(t){var n=t.isLoading,c=Object(a.a)(t,["isLoading"]);return n?r.a.createElement(l.a,null):r.a.createElement(e,c)}}},165:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(7),r=n(60),l=n(18),i=n(125),o=n(0),s=n.n(o),u=n(11),m=n(57),f=n(108),b=(n(165),function(e){var t=e.title,n=e.subtitle;return s.a.createElement("div",{className:"header-title-block"},s.a.createElement("div",{className:"title-container"},s.a.createElement("h2",null,t),n?s.a.createElement("p",null,s.a.createElement("i",null,n)):null))}),d=n(111),E=n(113),p=(n(166),Object(a.b)((function(e,t){return{collection:Object(r.a)(t.match.params.collectionId)(e),section:Object(m.b)(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=e.section,a=e.history;if(Object(o.useEffect)((function(){window.scrollTo(0,0)}),[t]),!t||!n)return s.a.createElement(u.a,{to:"".concat("/RoyaltyShop","/not-found")});var c=t.title,r=t.items,l=n.imageUrl;return s.a.createElement("section",{className:"collection-page"},s.a.createElement(f.a,{imageUrl:l},s.a.createElement(b,{title:"Royalty ".concat(c),subtitle:"".concat((new Date).getFullYear()," Collection")})),s.a.createElement("p",{role:"link",className:"container pointer",onClick:function(){return a.push("".concat("/RoyaltyShop","/shop"))}},"\u2962 Back to Collections"),s.a.createElement("div",{className:"collection-items container"},r.map((function(e){return s.a.createElement(d.a,{key:e.id,item:e})}))),s.a.createElement(E.a,null))}))),v=Object(c.b)({isLoading:function(e){return!Object(r.d)(e)}}),g=Object(l.d)(Object(a.b)(v),i.a)(p);t.default=g}}]);
//# sourceMappingURL=7.7ebad70c.chunk.js.map