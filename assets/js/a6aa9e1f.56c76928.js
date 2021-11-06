"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[3089,8636],{9055:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(6862),r=a(9496),l=a(1626),i=a(7633),o=a(3962),c="sidebar_3JuB",s="sidebarItemTitle_3YjX",m="sidebarItemList_17xI",u="sidebarItem_2J7W",d="sidebarItemLink_3VB1",g="sidebarItemLinkActive_1KsO",f=a(7506);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(5686),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,p),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},6923:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(9496),r=a(360),l=a(9055),i=a(7637),o=a(3962),c=a(7506);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(3443);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},7637:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(9496),r=a(1626),l=a(9613),i=a(7506),o=a(3962),c=a(6326),s=a(3443),m=a(2634),u=a(4486),d="blogPostTitle_2mKm",g="blogPostData_2k81",f="blogPostDetailsFull_37lq",h=a(3585),v="image_361I";var p=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_14Tq";function b(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,p,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,C=e.metadata,P=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,L=C.date,w=C.formattedDate,I=C.permalink,S=C.tags,R=C.readingTime,x=C.title,A=C.editUrl,B=C.authors,M=null!=(t=k.image)?t:N.image;return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=y?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:d,itemProp:"headline"},y?x:n.createElement(o.Z,{itemProp:"url",to:I},x)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w),void 0!==R&&n.createElement(n.Fragment,null," \xb7 ",E(R))),n.createElement(b,{authors:B,assets:k}))),M&&n.createElement("meta",{itemProp:"image",content:_(M,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},Z)),(S.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[f]=y,a))},S.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!y})},n.createElement(h.Z,{tags:S})),y&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),!y&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:C.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4486:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(9496),r=a(7506),l=a(98),i=a(6862),o=a(1626),c="iconEdit_3ZDl",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(3443);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5686:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return f}});var n=a(9496),r=a(1626),l=a(3443);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_788J",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7423:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(9496),r=a(1626),l=a(3962),i="tag_3MYd",o="tagRegular_3PzX",c="tagWithCount_39-t";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},3585:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(9496),r=a(1626),l=a(7506),i=a(7423),o="tags_2oxJ",c="tag_1yCn";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}},4131:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(98),r=a(6862),l=a(9496),i=a(7995),o=a(360),c=a(1571),s=a(6326),m=a(3962),u=a(5629),d=a(6609),g=a(8212),f=a(9671),h=a(1157),v=a(7506),p="searchBox_1ZXk",E=["contextualSearch"],b=null;function _(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function Z(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function N(e){var t,m,d=e.contextualSearch,N=(0,r.Z)(e,E),k=(0,o.Z)().siteMetadata,C=(0,h.Z)(),P=null!=(t=null==(m=N.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(C,P):P,y=Object.assign({},N.searchParameters,{facetFilters:T}),L=((0,s.C)().withBaseUrl,(0,c.k6)()),w=(0,l.useRef)(null),I=(0,l.useRef)(null),S=(0,l.useState)(!1),R=S[0],x=S[1],A=(0,l.useState)(null),B=A[0],M=A[1],O=(0,l.useCallback)((function(){return b?Promise.resolve():Promise.all([a.e(9652).then(a.bind(a,9652)),Promise.all([a.e(532),a.e(5556)]).then(a.bind(a,5556)),Promise.all([a.e(532),a.e(6317)]).then(a.bind(a,6317))]).then((function(e){var t=e[0].DocSearchModal;b=t}))}),[]),U=(0,l.useCallback)((function(){O().then((function(){w.current=document.createElement("div"),document.body.insertBefore(w.current,document.body.firstChild),x(!0)}))}),[O,x]),F=(0,l.useCallback)((function(){x(!1),w.current.remove()}),[x]),q=(0,l.useCallback)((function(e){O().then((function(){x(!0),M(e.key)}))}),[O,x,M]),D=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,z=(0,l.useRef)((function(e){return e.map((function(e){return document.createElement("a").href=e.url,console.log(e.url),Object.assign({},e)}))})).current,j=(0,l.useMemo)((function(){return function(e){return l.createElement(Z,(0,n.Z)({},e,{onClose:F}))}}),[F]),H=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:R,onOpen:U,onClose:F,onInput:q,searchButtonRef:I});var J=(0,v.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+N.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:p},l.createElement(f.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:U,ref:I,translations:{buttonText:J,buttonAriaLabel:J}})),R&&(0,i.createPortal)(l.createElement(b,(0,n.Z)({onClose:F,initialScrollY:window.scrollY,initialQuery:B,navigator:D,transformItems:z,hitComponent:_,resultsFooterComponent:j,transformSearchClient:H},N,{searchParameters:y})),w.current))}var k=function(){var e=(0,o.Z)().siteConfig;return l.createElement(N,e.themeConfig.algolia)}}}]);