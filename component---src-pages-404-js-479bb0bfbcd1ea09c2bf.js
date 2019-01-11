(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146);t.default=function(){return r.a.createElement(i.b,{title:"404: Not found"},r.a.createElement(i.c,{style:{minHeight:"100vh"},withColor:!0},r.a.createElement(i.d,null,"404 - Not Found"),r.a.createElement("p",null,"You just found a page that doesn't exist.")))}},141:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(139),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(141),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Blake Knight",description:"Charles Blake Knight's homepage. Blake Knight is a web developer and hacker living in Nashville, TN.",author:"@blakek"}}}}},145:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(54),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,n){"use strict";var a=n(140),r=a.b.section.withConfig({displayName:"Content",componentId:"sc-1m20wtg-0"})(["margin:0.8em 0;max-width:800px;text-align:left;width:100%;& > a{color:#7142ff;}"]),i=n(143),o=n.n(i),l=n(0),c=n.n(l),s=n(4),u=n.n(s),d=a.b.section.withConfig({displayName:"Section",componentId:"sc-17nek4h-0"})(["align-items:center;background-color:",";color:",";display:flex;flex-direction:column;justify-content:center;padding:1.0875rem 1.45rem;"],function(e){return e.withColor?"#7142ff":"#fff"},function(e){return e.withColor?"#fff":"#333"}),f=Object(a.b)(r).withConfig({displayName:"Footer__ContentWrapper",componentId:"rjmzb4-0"})(["color:#fff;display:flex;flex-direction:row;font-size:0.6rem;justify-content:space-between;"]),m=function(){return c.a.createElement(d,{as:"footer",withColor:!0},c.a.createElement(f,null,c.a.createElement("div",null,c.a.createElement("a",{href:"https://blakek.me/"},"Made with"," ",c.a.createElement("span",{"aria-label":"love",style:{color:"#ff4271"}},"♥")," ","from Nashville")),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/blakek/blakek.me"},"View source"))))},p=n(147),h=n.n(p);function g(){var e=h()(['\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 460px) {\n    html {\n      font-size: 20px;\n    }\n  }\n\n  body {\n    margin: 0;\n  }\n\n  a {\n    color: inherit;\n  }\n\n  @import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:700,700i\');\n']);return g=function(){return e},e}var y=Object(a.a)(g()),w=n(144),b=n(148),v=n.n(b),k=n(142);function E(e){var t=e.description,n=e.lang,a=e.meta,r=e.keywords,i=e.title;return c.a.createElement(k.StaticQuery,{query:C,render:function(e){var o=t||e.site.siteMetadata.description;return c.a.createElement(v.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:w})}E.defaultProps={lang:"en",meta:[],keywords:[]},E.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired};var x=E,C="1025518380",q=a.b.div.withConfig({displayName:"Document__Wrapper",componentId:"sc-169zftf-0"})(["box-sizing:border-box;min-height:100vh;overflow:auto;width:100vw;"]),S=function(e){var t=e.children,n=o()(e,["children"]);return c.a.createElement(l.Fragment,null,c.a.createElement(x,n),c.a.createElement(y,null),c.a.createElement(q,null,t,c.a.createElement(m,null)))};S.propTypes={children:u.a.node.isRequired};var j=S,I=a.b.h1.withConfig({displayName:"Title",componentId:"vdnv0i-0"})(["font-family:'IBM Plex Serif',serif;font-size:4.75rem;font-weight:600;letter-spacing:0.5rem;margin:0.5em;"]);n.d(t,"a",function(){return r}),n.d(t,"b",function(){return j}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return I})}}]);
//# sourceMappingURL=component---src-pages-404-js-479bb0bfbcd1ea09c2bf.js.map