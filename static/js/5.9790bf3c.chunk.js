(this["webpackJsonproyalty-shop"]=this["webpackJsonproyalty-shop"]||[]).push([[5],{108:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.imageUrl,t=e.children;return n.a.createElement("div",{className:"header-banner",style:{backgroundImage:"url(".concat(a,")")}},t)}},110:function(e,a,t){},111:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(12),s=t(7),l=t(55),i=t(26),m=t(48),o=t(59);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var E=n.a.createElement("path",{d:"M15.8,0a6.18,6.18,0,0,0-5,2.7A6.18,6.18,0,0,0,5.8,0,5.91,5.91,0,0,0,0,6c0,3.7,2.5,9.5,9.7,13.7a2,2,0,0,0,1.1.3,2.28,2.28,0,0,0,1.1-.3c7.2-4.1,9.7-9.9,9.7-13.7A5.91,5.91,0,0,0,15.8,0Z"}),p=function(e){var a=e.svgRef,t=e.title,r=d(e,["svgRef","title"]);return n.a.createElement("svg",u({viewBox:"0 0 21.6 20",ref:a},r),t?n.a.createElement("title",null,t):null,E)},b=n.a.forwardRef((function(e,a){return n.a.createElement(p,u({svgRef:a},e))})),f=(t.p,t(110),Object(s.b)({wishListItems:o.a}));a.a=Object(c.b)(f,(function(e){return{addItem:function(a){return e(Object(i.a)(a))},toggleItem:function(a){return e(Object(m.c)(a))}}}))((function(e){var a=e.item,t=e.addItem,r=e.toggleItem,c=e.wishListItems,s=a.imageUrl,i=a.name,m=a.price,o=a.id,u=c.filter((function(e){return e.id===o})).length>0;return n.a.createElement("div",{className:"collection-item"},n.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(s,")")}}),n.a.createElement(b,{onClick:function(){return r(a)},className:"wish-list-icon pointer",fill:u?"black":"white",stroke:u?"white":"black"}),n.a.createElement("div",{className:"collection-footer"},n.a.createElement("span",{className:"name"},i),n.a.createElement("span",{className:"price"},"\u20ac",m)),n.a.createElement(l.a,{onClick:function(){return t(a)},inverted:!0},"Add to Cart"))}))},112:function(e,a,t){},115:function(e,a,t){"use strict";var r=t(56),n=t(0),c=t.n(n),s=t(12),l=t(7),i=t(57),m=t(11),o=t(61),u=c.a.memo(Object(m.g)((function(e){var a=e.imageUrl,t=e.title,r=e.size,n=e.history,s=e.linkUrl;return c.a.createElement("div",{role:"link",className:"".concat(r||""," menu-item pointer"),onClick:function(){return n.push("".concat("/RoyaltyShop","/").concat(s))}},c.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),c.a.createElement("div",{className:"content"},c.a.createElement("h2",{className:"title"},t),c.a.createElement(o.a,{className:"title-underline"}),c.a.createElement("span",{className:"subtitle"},"Shop now")))}))),d=(t(112),Object(l.b)({sections:i.a}));a.a=Object(s.b)(d)((function(e){var a=e.sections;return c.a.createElement("div",{className:"directory-menu container"},a.map((function(e){var a=e.id,t=Object(r.a)(e,["id"]);return c.a.createElement(u,Object.assign({key:a},t))})))}))},118:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return l}));var r=t(7),n=t(65),c=function(e){return e.orderHistory},s=(Object(r.a)([c],(function(e){return e.orders})),Object(r.a)([c],(function(e){return Object(n.b)(e)}))),l=Object(r.a)([c],(function(e){return e.currentOrder}))},119:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(115);a.a=function(e){var a=e.title;return n.a.createElement("div",{className:"empty-title"},n.a.createElement("h2",null,a),n.a.createElement("p",null,"Take a look at our new collection"),n.a.createElement(c.a,null))}},124:function(e,a,t){},126:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=function(e){var a=e.item,t=a.name,r=a.imageUrl,c=a.price,s=a.quantity;return n.a.createElement("div",{className:"item-details"},n.a.createElement("div",{className:"image-container"},n.a.createElement("img",{src:r,alt:"".concat(t," item")})),n.a.createElement("span",{className:"name"},t),n.a.createElement("span",{className:"quantity"},s),n.a.createElement("span",{className:"price"},"\u20ac",c))};t(124),a.a=function(e){var a=e.order;if(Object(r.useEffect)((function(){var e=document.querySelector(".table-header");e&&e.scrollIntoView()}),[a]),!a)return null;var t=a.id,s=a.date,l=a.total,i=a.orderItems,m=s.seconds?s.toDate().toDateString():new Date(Date.parse(s)).toDateString();return n.a.createElement("div",{className:"order-details"},n.a.createElement("header",{className:"table-header"},n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Order nr.")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Date")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Total")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Status"))),n.a.createElement("main",{className:"table-main"},n.a.createElement("div",{className:"order-row"},n.a.createElement("span",{className:"id"},t),n.a.createElement("span",{className:"date"},m),n.a.createElement("span",{className:"total"},"\u20ac",l),n.a.createElement("span",{className:"status"},"Processing"))),n.a.createElement("div",{className:"status-bar"},n.a.createElement("span",{className:"status-bar-item"},n.a.createElement("span",{className:"status-bar-visual"},n.a.createElement("span",{className:"status-bar-circle done"}),n.a.createElement("span",{className:"status-bar-strip done"})),n.a.createElement("span",{className:"status-bar-description"},n.a.createElement("span",{className:"status-bar-text"},"Payment Received"))),n.a.createElement("span",{className:"status-bar-item"},n.a.createElement("span",{className:"status-bar-visual"},n.a.createElement("span",{className:"status-bar-circle done"}),n.a.createElement("span",{className:"status-bar-strip"})),n.a.createElement("span",{className:"status-bar-description"},n.a.createElement("span",{className:"status-bar-text"},"Processing"))),n.a.createElement("span",{className:"status-bar-item"},n.a.createElement("span",{className:"status-bar-visual"},n.a.createElement("span",{className:"status-bar-circle"}),n.a.createElement("span",{className:"status-bar-strip"})),n.a.createElement("span",{className:"status-bar-description"},n.a.createElement("span",{className:"status-bar-text"},"Out for delivery"))),n.a.createElement("span",{className:"status-bar-item"},n.a.createElement("span",{className:"status-bar-visual"},n.a.createElement("span",{className:"status-bar-circle"})),n.a.createElement("span",{className:"status-bar-description"},n.a.createElement("span",{className:"status-bar-text"},"Delivered")))),n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"table-header"},n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Product")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Description")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Quantity")),n.a.createElement("div",{className:"header-block"},n.a.createElement("span",null,"Price"))),i.map((function(e){return n.a.createElement(c,{key:e.id,item:e})}))))}},159:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var r=t(47),n=t(0),c=t.n(n),s=t(12),l=t(7),i=t(108),m=t(55),o=t(11),u=t(119),d=t(30),E=Object(s.b)(null,(function(e){return{setCurrentOrder:function(a){return e(Object(d.e)(a))}}}))((function(e){var a=e.order,t=e.setCurrentOrder,r=a.id,n=a.date,s=a.total,l=n.seconds?n.toDate().toDateString():n;return c.a.createElement("div",{className:"order-row"},c.a.createElement("span",null,r),c.a.createElement("span",null,l),c.a.createElement("span",null,"\u20ac",s),c.a.createElement("span",null,"Processing"),c.a.createElement("span",{className:"details"},c.a.createElement(m.a,{onClick:function(){return t(a)}},"Details")))})),p=function(e){var a=e.orders;return c.a.createElement("div",{className:"orders-overview"},c.a.createElement("header",{className:"table-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Order nr.")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Date")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Total")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Status")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Details"))),c.a.createElement("main",{className:"table-main"},a.map((function(e){return c.a.createElement(E,{key:e.id,order:e})}))),c.a.createElement("footer",{className:"table-footer"},c.a.createElement("p",null,"You can view more details regarding each order by pressing the details button")))},b=t(126),f=t(118),v=t(23),N=Object(l.b)({cartItems:v.b,currentOrder:f.a}),h=Object(o.g)(Object(s.b)(N,(function(e){return{unsetCurrentOrder:function(){return e(Object(d.f)())}}}))((function(e){var a=e.orders,t=e.currentOrder,r=e.unsetCurrentOrder;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),a.length?c.a.createElement("div",{className:"orders-container",style:{left:t?"-100%":0}},c.a.createElement(p,{orders:a}),c.a.createElement("div",{className:"order-details-container"},c.a.createElement("p",{className:"pointer",onClick:r},"\u2962 Back to Orders overview"),c.a.createElement(b.a,{order:t}))):c.a.createElement(u.a,{title:"No orders placed so far"})}))),O=t(111),g=t(59),y=Object(l.b)({wishListItems:g.a}),k=Object(o.g)(Object(s.b)(y)((function(e){var a=e.wishListItems;return a.length?c.a.createElement("div",{className:"wish-list"},a.map((function(e){return c.a.createElement(O.a,{key:e.id,item:e})}))):c.a.createElement(u.a,{title:"Your wish list is empty"})}))),j=t(19),w=(t(159),Object(l.b)({currentUser:j.a,orders:f.b}));a.default=Object(s.b)(w,(function(e){return{fetchOrdersStart:function(){return e(Object(d.b)())},unsetCurrentOrder:function(){return e(Object(d.f)())}}}))((function(e){var a=e.currentUser,t=e.orders,s=e.history,l=e.fetchOrdersStart,o=e.unsetCurrentOrder,u=Object(n.useState)(""),d=Object(r.a)(u,2),E=d[0],p=d[1];if(Object(n.useEffect)((function(){window.scrollTo(0,200)}),[E]),Object(n.useEffect)((function(){l()}),[l]),!a)return c.a.createElement(i.a,{imageUrl:"https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=1200&q=100"},c.a.createElement("div",{className:"temp-title"},c.a.createElement("h2",null,"Please Sign in to view your account"),c.a.createElement(m.a,{onClick:function(){return s.push("".concat("/RoyaltyShop","/signin"))}},"Sign in")));var b=a.displayName,f=a.createdAt;return c.a.createElement("article",{className:"account-page"},c.a.createElement(i.a,{imageUrl:"https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=1200&q=100"},c.a.createElement("div",{className:"account-welcome"},c.a.createElement("div",{className:"account-welcome-background"},c.a.createElement("h2",null,"Hello ",b)))),c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"RoyaltyShop member since: ",f.toDate().toDateString()),c.a.createElement("header",{className:"account-page-header"},c.a.createElement("p",null,"View your order history or wish list:"),c.a.createElement("div",{className:"account-page-cta"},c.a.createElement(m.a,{onClick:function(){l(),o(),p("OrderHistory")}},"Order History"),c.a.createElement(m.a,{onClick:function(){return p("WishList")}},"Wish List"))),E?c.a.createElement("div",{className:"account-page-display"},function(e){switch(e){case"OrderHistory":return c.a.createElement(h,{orders:t});case"WishList":return c.a.createElement(k,null);default:return""}}(E)):null))}))}}]);
//# sourceMappingURL=5.9790bf3c.chunk.js.map