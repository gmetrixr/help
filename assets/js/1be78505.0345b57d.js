"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[9514,4927,8636],{6927:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(9496),r=n(9613),o=n(2239),l=n(7633),c=n(1626),i=n(3443),s=n(3921),u=n(1217),d=n(6438),m=n(98),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(7506),f=n(6862),b=n(3962),v=n(8922),E=n(2904),g="menuLinkText_17dI",C=["items"],k=["item"],Z=["item","onItemClick","activePath"],S=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,C);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(I,(0,m.Z)({key:t,item:e},n))})))}));function I(e){var t=e.item,n=(0,f.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,m.Z)({item:t},n)):a.createElement(M,(0,m.Z)({item:t},n))}function T(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,f.Z)(e,Z),s=n.items,u=n.label,d=n.collapsible,p=_(n,o),h=(0,i.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),b=h.collapsed,v=h.setCollapsed,E=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:b,setCollapsed:v}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),E()}:void 0,href:d?"#":void 0},l),u),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(N,{items:s,tabIndex:b?-1:0,onItemClick:r,activePath:o})))}function M(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,f.Z)(e,S),l=t.href,s=t.label,u=_(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(b.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:l},(0,v.Z)(l)&&{onClick:n},o),(0,v.Z)(l)?s:a.createElement("span",null,s,a.createElement(E.Z,null))))}var P="sidebar_1PGX",w="sidebarWithHideableNavbar_1wLO",y="sidebarHidden_33OS",x="sidebarLogo_UfS6",B="menu_1RO6",F="menuWithAnnouncementBar_2Vj8",A="collapseSidebarButton_33p6",L="collapseSidebarButtonIcon_1CBo";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:L}))}function R(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,i.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,b=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(P,(t={},t[w]=h,t[y]=s,t))},h&&a.createElement(d.Z,{tabIndex:-1,className:x}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(n={},n[F]=!b&&m,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:o,activePath:r}))),f&&a.createElement(D,{onClick:l}))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()}}))};function O(e){return a.createElement(i.Cv,{component:H,props:e})}var W=a.memo(R),z=a.memo(O);function Y(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(z,e))}var U=n(2634),j=n(5882),Q=n(1571),V="backToTopButton_1FdN",X="backToTopButtonShow_3DYr";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,Q.TH)(),n=q(),r=n.smoothScrollTop,o=n.cancelScrollToTop,l=(0,a.useState)(!1),i=l[0],s=l[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,c.Z)("clean-btn",V,(e={},e[X]=i,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},K={docPage:"docPage_bzDa",docMainContainer:"docMainContainer_2Zr6",docSidebarContainer:"docSidebarContainer_3Qrx",docMainContainerEnhanced:"docMainContainerEnhanced_jL2D",docSidebarContainerHidden:"docSidebarContainerHidden_86ZD",collapsedDocSidebar:"collapsedDocSidebar_3rwa",expandSidebarButtonIcon:"expandSidebarButtonIcon_3l7S",docItemWrapperEnhanced:"docItemWrapperEnhanced_39tQ"},J=n(5629);function $(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,f=u.version,b=s.sidebar,v=b?u.docsSidebars[b]:void 0,E=(0,a.useState)(!1),g=E[0],C=E[1],k=(0,a.useState)(!1),Z=k[0],S=k[1],_=(0,a.useCallback)((function(){Z&&S(!1),C(!g)}),[Z]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,i.os)(m,f)}},a.createElement("div",{className:K.docPage},a.createElement(G,null),v&&a.createElement("aside",{className:(0,c.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&g&&S(!0)}},a.createElement(Y,{key:b,sidebar:v,path:s.path,onCollapse:_,isHidden:Z}),Z&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(p,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(o={},o[K.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:U.Z},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(J.Z,null,a.createElement("html",{className:n.className})),a.createElement($,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(j.default,e)}},5882:function(e,t,n){n.r(t);var a=n(9496),r=n(7633),o=n(7506);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4131:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(98),r=n(6862),o=n(9496),l=n(7995),c=n(360),i=n(1571),s=n(6326),u=n(3962),d=n(5629),m=n(6609),p=n(8212),h=n(9671),f=n(1157),b=n(7506),v="searchBox_1ZXk",E=["contextualSearch"],g=null;function C(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function k(e){var t=e.state,n=e.onClose,a=(0,m.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function Z(e){var t,u,m=e.contextualSearch,Z=(0,r.Z)(e,E),S=(0,c.Z)().siteMetadata,_=(0,f.Z)(),N=null!=(t=null==(u=Z.searchParameters)?void 0:u.facetFilters)?t:[],I=m?[].concat(_,N):N,T=Object.assign({},Z.searchParameters,{facetFilters:I}),M=((0,s.C)().withBaseUrl,(0,i.k6)()),P=(0,o.useRef)(null),w=(0,o.useRef)(null),y=(0,o.useState)(!1),x=y[0],B=y[1],F=(0,o.useState)(null),A=F[0],L=F[1],D=(0,o.useCallback)((function(){return g?Promise.resolve():Promise.all([n.e(9652).then(n.bind(n,9652)),Promise.all([n.e(532),n.e(5556)]).then(n.bind(n,5556)),Promise.all([n.e(532),n.e(6317)]).then(n.bind(n,6317))]).then((function(e){var t=e[0].DocSearchModal;g=t}))}),[]),R=(0,o.useCallback)((function(){D().then((function(){P.current=document.createElement("div"),document.body.insertBefore(P.current,document.body.firstChild),B(!0)}))}),[D,B]),H=(0,o.useCallback)((function(){B(!1),P.current.remove()}),[B]),O=(0,o.useCallback)((function(e){D().then((function(){B(!0),L(e.key)}))}),[D,B,L]),W=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;M.push(t)}}).current,z=(0,o.useRef)((function(e){return e.map((function(e){return document.createElement("a").href=e.url,console.log(e.url),Object.assign({},e)}))})).current,Y=(0,o.useMemo)((function(){return function(e){return o.createElement(k,(0,a.Z)({},e,{onClose:H}))}}),[H]),U=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",S.docusaurusVersion),e}),[S.docusaurusVersion]);(0,p.D)({isOpen:x,onOpen:R,onClose:H,onInput:O,searchButtonRef:w});var j=(0,b.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(d.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+Z.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:v},o.createElement(h.a,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:R,ref:w,translations:{buttonText:j,buttonAriaLabel:j}})),x&&(0,l.createPortal)(o.createElement(g,(0,a.Z)({onClose:H,initialScrollY:window.scrollY,initialQuery:A,navigator:W,transformItems:z,hitComponent:C,resultsFooterComponent:Y,transformSearchClient:U},Z,{searchParameters:T})),P.current))}var S=function(){var e=(0,c.Z)().siteConfig;return o.createElement(Z,e.themeConfig.algolia)}}}]);