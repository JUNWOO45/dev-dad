(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{865:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var r=a(0),n=a.n(r),i=a(868),s=a(879),o=a(877),l=a(874),c=a(869);t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title,d=t.allMdx.edges;return n.a.createElement(o.a,{location:a,title:r,isIndexPage:!0},n.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement(s.a,null),d.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("div",{key:t.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},n.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",{className:"date"},t.frontmatter.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))};var d="1669605943"},868:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(7),s=a.n(i),o=a(113),l=a.n(o);a.d(t,"a",function(){return l.a});a(870);var c=n.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(d,{data:t,query:a,render:r||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},869:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(883),n=a.n(r),i=a(884),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},body:{fontFamily:"'Open Sans', 'Gothic A1', 'Apple SD Gothic NEO', helvetica, sans-serif"},"h1,h2,h3,h4,h5,h6":{fontFamily:"Montserrat, Black Han Sans",fontWeight:"normal",wordBreak:"keep-all"},p:{wordBreak:"keep-all"},".date":{fontFamily:"'Montserrat SemiBold', 'Apple SD Gothic NEO', helvetica, sans-serif"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,c=o.scale},870:function(e,t,a){var r;e.exports=(r=a(872))&&r.default||r},872:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),i=a(0),s=a.n(i),o=a(7),l=a.n(o),c=a(166),d=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(c.a,n()({location:t,pageResources:a},a.json)):null};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},873:function(e){e.exports={data:{site:{siteMetadata:{social:{twitter:"",github:"https://github.com/bluewings",stackOverflow:"",facebook:""}}}}}},874:function(e,t,a){"use strict";var r=a(875),n=a(0),i=a.n(n),s=a(7),o=a.n(s),l=a(885),c=a.n(l),d=a(868);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={description:"",lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},875:function(e){e.exports={data:{site:{siteMetadata:{title:"아빠는 개발자",description:"",author:"Cha Sung Won"}}}}},877:function(e,t,a){"use strict";var r=a(4),n=a.n(r),i=a(0),s=a.n(i),o=a(868),l=a(869),c=a(861),d=a.n(c),u=a(84);function f(){var e=Object(i.useContext)(u.a),t=e.theme,a=e.setTheme,r=Object(i.useRef)(0);return[Object(i.useMemo)(function(){var e=Math.abs(r.current%360);return("light"===t&&0===e||"dark"===t&&180===e)&&(r.current-=180),{transform:"rotate("+r.current+"deg)"}},[t]),function(){var e=function(){try{return window.__toggleTheme()}catch(e){}return""}();a(e)}]}var A=function(){var e=f(),t=e[0],a=e[1];return s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:d.a.root,onClick:a},s.a.createElement("div",{className:d.a.spinner,style:t},s.a.createElement("svg",{className:d.a.sun,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"})),s.a.createElement("svg",{className:d.a.moon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"})))))},g=(a(83),a(54),a(44),a(24),a(165),a(873));var m=function(){return s.a.createElement(o.b,{query:p,render:function(e){var t=e.site.siteMetadata.social,a=Object.keys(t).filter(function(e){return t[e]}).map(function(e){return{name:e,uri:t[e]}});return s.a.createElement("footer",{style:{marginTop:Object(l.a)(2)}},a.map(function(e,t){return s.a.createElement(i.Fragment,{key:e.name},t>0&&s.a.createElement(s.a.Fragment,null," • "),s.a.createElement("a",{href:e.uri,target:"_blank",rel:"noopener noreferrer"},e.name))}))},data:g})},p="3346284184",h=a(862),b=a.n(h);a(863);t.a=function(e){var t,a=e.location,r=e.title,i=e.children,c=e.maxWidth,d=e.isIndexPage;return t="/"===a.pathname||d?s.a.createElement("h1",{style:n()({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{className:b.a.root},s.a.createElement("div",{className:b.a.inner,style:{marginLeft:"auto",marginRight:"auto",maxWidth:c||Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,t,s.a.createElement(A,null)),s.a.createElement("main",null,i),s.a.createElement(m,null)))}},879:function(e,t,a){"use strict";a(880);var r=a(881),n=a(0),i=a.n(n),s=a(868),o=a(882),l=a.n(o),c=a(869);var d="4007731267";t.a=function(){return i.a.createElement(s.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",{style:{marginTop:-3}},"개발자를 꿈꾸는 아들을 둔 아빠 개발자입니다.",i.a.createElement("br",null),"데이터 시각화에 관심이 있으며, 재미있는 프로그램을 만드는 것을 좋아합니다."," ",r.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))},data:r})}},880:function(e,t,a){"use strict";a(256)("fixed",function(e){return function(){return e(this,"tt","","")}})},881:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAZ0drK1JU4bAvTGh/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAwQSEyEiMf/aAAgBAQABBQLJNrPiLZNCy7saU42RD5UxVJ//xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQMBAT8Bwp//xAAWEQEBAQAAAAAAAAAAAAAAAAAQAhH/2gAIAQIBAT8B0g//xAAcEAABBAMBAAAAAAAAAAAAAAABAAIQIRESMVH/2gAIAQEABj8C18Ct2WwCqJC6YqP/xAAcEAACAgMBAQAAAAAAAAAAAAABEQAhEEFRMXH/2gAIAQEAAT8hFGQAUD2MLsDkLLEVgglUZXNx/uD+ybx//9oADAMBAAIAAwAAABCLHzz/xAAaEQABBQEAAAAAAAAAAAAAAAAAEBEhMUFR/9oACAEDAQE/EKOR0yn/xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMVH/2gAIAQIBAT8QV8LfDDj/xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhMWFBUXGR0f/aAAgBAQABPxDn5gjbL6jsBqPt1inmawvliO1rEZive1qmV8xymvez5NzKnR6trzUNT//Z",width:50,height:50,src:"/static/7a396b5b3600e5fd979f0cacbf1002e6/9b664/profile-pic.jpg",srcSet:"/static/7a396b5b3600e5fd979f0cacbf1002e6/9b664/profile-pic.jpg 1x,\n/static/7a396b5b3600e5fd979f0cacbf1002e6/06a10/profile-pic.jpg 1.5x,\n/static/7a396b5b3600e5fd979f0cacbf1002e6/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Cha Sung Won",social:{twitter:""}}}}}},882:function(e,t,a){"use strict";var r=a(31);t.__esModule=!0,t.default=void 0;var n,i=r(a(25)),s=r(a(114)),o=r(a(70)),l=r(a(257)),c=r(a(0)),d=r(a(7)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),g=function(e){var t=u(e),a=f(t);return A[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(R,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},R=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var r=t.critical||p&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,g=e.fluid,m=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:O?"opacity "+h+"ms":"none"},o),N="boolean"==typeof p?"lightgray":p,Q={transitionDelay:h+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&Q,o,f),z={title:t,alt:this.state.isVisible?"":a,style:M,className:A};if(g){var k=g,T=k[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&Q)}),T.base64&&c.default.createElement(x,{src:T.base64,spreadProps:z,imageVariants:k,generateSources:w}),T.tracedSVG&&c.default.createElement(x,{src:T.tracedSVG,spreadProps:z,imageVariants:k,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(k),c.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},T,{imageVariants:k}))}}))}if(m){var C=m,V=C[0],D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete D.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},N&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:N,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},O&&Q)}),V.base64&&c.default.createElement(x,{src:V.base64,spreadProps:z,imageVariants:C,generateSources:w}),V.tracedSVG&&c.default.createElement(x,{src:V.tracedSVG,spreadProps:z,imageVariants:C,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,y(C),c.default.createElement(R,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:C}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:O,sizes:I,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([I,d.default.arrayOf(I)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=L;t.default=N}}]);
//# sourceMappingURL=component---src-templates-blog-index-jsx-9a6b0837e653c3bb18a9.js.map