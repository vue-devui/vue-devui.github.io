var C=Object.defineProperty;var _=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(e,s,a)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,f=(e,s)=>{for(var a in s||(s={}))q.call(s,a)&&b(e,a,s[a]);if(_)for(var a of _(s))V.call(s,a)&&b(e,a,s[a]);return e};import{_ as E,V as m,r as x,c as N,a as k,w as c,b as S,d as t,e as n,o as T}from"./app.e6d57bfa.js";const F={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:s,createVNode:a,openBlock:u,createElementBlock:r}=m,i={class:"devui-search-demo"},h=e("h4",null,"Small",-1),p=e("h4",null,"Middle",-1),o=e("h4",null,"Large",-1),l=e("h4",null,"Disabled",-1);function g(y,B){const d=s("d-search");return u(),r("div",null,[e("div",i,[h,a(d,{size:"sm",autoFocus:"",placeholder:"please enter",style:{width:"200px"},delay:1e3}),p,a(d,{style:{width:"200px"},placeholder:"please enter",isKeyupSearch:"",onOnSearch:y.onSearch1},null,8,["onOnSearch"]),o,a(d,{iconPosition:"left",placeholder:"please enter",size:"lg",style:{width:"200px"},onOnSearch:y.onSearch2},null,8,["onOnSearch"]),l,a(d,{disabled:"",style:{width:"200px"},placeholder:"please enter"})])])}const{defineComponent:v,ref:G}=m,w=v({setup(){return{onSearch1:d=>{console.log(d)},onSearch2:d=>{console.log(d)}}}});return f({render:g},w)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,openBlock:u,createElementBlock:r}=m;function i(p,o){const l=e("d-search");return u(),r("div",null,[a("div",null,[s(l,{iconPosition:"left",placeholder:"please enter",style:{width:"200px"}})])])}return f({render:i},{})}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,openBlock:u,createElementBlock:r}=m;function i(p,o){const l=e("d-search");return u(),r("div",null,[a("div",null,[s(l,{iconPosition:"left",placeholder:"please enter",noBorder:"",style:{width:"200px"}})])])}return f({render:i},{})}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,openBlock:a,createElementBlock:u}=m;function r(o,l){const g=e("d-search");return a(),u("div",null,[s(g,{cssClass:"ipt",modelValue:o.searchText,"onUpdate:modelValue":l[0]||(l[0]=v=>o.searchText=v),placeholder:"please enter",maxLength:5,style:{width:"200px"},onOnSearch:o.search},null,8,["modelValue","onOnSearch"])])}const{defineComponent:i,ref:h}=m,p=i({setup(){const o=h("Devui");return{searchText:o,search:g=>{console.log(`search callback: ${g}\uFF0Cvalue\uFF1A${o.value}`)}}}});return f({render:r},p)}()}},R='{"title":"Search","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Left Search Icon","slug":"left-search-icon"},{"level":3,"title":"No Border","slug":"no-border"},{"level":3,"title":"VModel","slug":"vmodel"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"d-search event","slug":"d-search-event"}],"relativePath":"en-US/components/search/index.md","lastUpdated":1650439126647}',U=S('<h1 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-hidden="true">#</a></h1><p>Search box.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When you need to search for required data in a dataset, you can enter the content (or part) of the required data to return the search results of all the matching content.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',5),O=t("div",null,[n("Use "),t("code",null,"sm"),n(", "),t("code",null,"''"),n(", "),t("code",null,"lg"),n(" to define the "),t("code",null,"Search"),n(" base type")],-1),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("devui-search-demo"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"autoFocus"),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},":delay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1000"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Middle"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"isKeyupSearch"),n(),t("span",{class:"token attr-name"},"@onSearch"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSearch1"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"iconPosition"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"@onSearch"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onSearch2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h4")]),t("span",{class:"token punctuation"},">")]),n("Disabled"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h4")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"disabled"),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onSearch1"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"e"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("e"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onSearch2"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"e"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("e"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      onSearch1`),t("span",{class:"token punctuation"},","),n(`
      onSearch2
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),D=t("h3",{id:"left-search-icon",tabindex:"-1"},[n("Left Search Icon "),t("a",{class:"header-anchor",href:"#left-search-icon","aria-hidden":"true"},"#")],-1),L=t("div",null,[n("Use "),t("code",null,"left"),n(", "),t("code",null,"right"),n(" to define "),t("code",null,"Search"),n(" icon position, default "),t("code",null,"right")],-1),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"iconPosition"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),z=t("h3",{id:"no-border",tabindex:"-1"},[n("No Border "),t("a",{class:"header-anchor",href:"#no-border","aria-hidden":"true"},"#")],-1),I=t("div",null,[n("Use "),t("code",null,"noBorder"),n(" to define "),t("code",null,"Search"),n(" without borders")],-1),M=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"iconPosition"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"noBorder"),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),A=t("h3",{id:"vmodel",tabindex:"-1"},[n("VModel "),t("a",{class:"header-anchor",href:"#vmodel","aria-hidden":"true"},"#")],-1),K=t("div",null,[n("Use "),t("code",null,"v-model"),n(" two-way binding")],-1),W=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-search")]),n(),t("span",{class:"token attr-name"},"cssClass"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ipt"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchText"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("please enter"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":maxLength"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"@onSearch"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("search"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-search")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" searchText "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Devui'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"search"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"e"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"search callback: "),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("e"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"\uFF0Cvalue\uFF1A"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("searchText"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      searchText`),t("span",{class:"token punctuation"},","),n(`
      search
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=S('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th><th>Jump to Demo</th><th>Global Config</th></tr></thead><tbody><tr><td style="text-align:center;">size</td><td style="text-align:center;"><code>&#39;sm&#39;|&#39;&#39;|&#39;lg&#39;</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:left;">Optional. Specifies the size of the search box. The options are lg, &#39;&#39;, and sm.</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. This parameter specifies the placeholder in the input box.</td><td><a href="#left-search-icon">Left Search Icon</a></td><td></td></tr><tr><td style="text-align:center;">maxLength</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Optional. Max-length of the text box.</td><td><a href="#vmodel">VModel</a></td><td></td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">300</td><td style="text-align:left;">Optional. Delay of debounceTime.</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Indicating whether the text box is available.</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">autoFocus</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Whether to enable autofocus for the text box.</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">isKeyupSearch</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Indicates whether to support immediate searchFn after input.</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">iconPosition</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;right&#39;</td><td style="text-align:left;">Optional. The options are&#39;left&#39; and&#39;right&#39;.</td><td><a href="#left-search-icon">Left Search Icon</a></td><td></td></tr><tr><td style="text-align:center;">noBorder</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">Optional. Specifies whether to display the border.</td><td><a href="#no-border">No Border</a></td><td></td></tr><tr><td style="text-align:center;">cssClass</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:left;">Optional. The class name can be transferred to the text box.</td><td><a href="#vmodel">VModel</a></td><td></td></tr></tbody></table><h3 id="d-search-event" tabindex="-1">d-search event <a class="header-anchor" href="#d-search-event" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Event</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:center;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">onSearch</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">Callback function triggered by pressing Enter or clicking the search button to return the value entered in the text box.</td><td style="text-align:center;"><a href="#basic-usage">Basic Usage</a></td></tr></tbody></table>',4);function J(e,s,a,u,r,i){const h=x("render-demo-0"),p=x("demo"),o=x("render-demo-1"),l=x("render-demo-2"),g=x("render-demo-3");return T(),N("div",null,[U,k(p,{sourceCode:`<template>
  <div class="devui-search-demo">
    <h4>Small</h4>
    <d-search size="sm" autoFocus placeholder="please enter" style="width: 200px" :delay="1000"></d-search>
    <h4>Middle</h4>
    <d-search style="width: 200px" placeholder="please enter" isKeyupSearch @onSearch="onSearch1"></d-search>
    <h4>Large</h4>
    <d-search iconPosition="left" placeholder="please enter" size="lg" style="width: 200px" @onSearch="onSearch2"></d-search>
    <h4>Disabled</h4>
    <d-search disabled style="width: 200px" placeholder="please enter"></d-search>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const onSearch1 = (e) => {
      console.log(e)
    }
    const onSearch2 = (e) => {
      console.log(e)
    }
    return {
      onSearch1,
      onSearch2
    }
  }
})
<\/script>
`},{description:c(()=>[O]),highlight:c(()=>[P]),default:c(()=>[k(h)]),_:1}),D,k(p,{sourceCode:`<template>
  <div>
    <d-search iconPosition="left" placeholder="please enter" style="width: 200px"></d-search>
  </div>
</template>
`},{description:c(()=>[L]),highlight:c(()=>[$]),default:c(()=>[k(o)]),_:1}),z,k(p,{sourceCode:`<template>
  <div>
    <d-search iconPosition="left" placeholder="please enter" noBorder style="width: 200px"></d-search>
  </div>
</template>
`},{description:c(()=>[I]),highlight:c(()=>[M]),default:c(()=>[k(l)]),_:1}),A,k(p,{sourceCode:`
<template>
  <d-search cssClass="ipt" v-model="searchText" placeholder="please enter" :maxLength="5" style="width: 200px" @onSearch="search"></d-search>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const searchText = ref('Devui')
    const search = (e) => {
      console.log(\`search callback: \${e}\uFF0Cvalue\uFF1A\${searchText.value}\`)
    }
    return {
      searchText,
      search
    }
  },
})
<\/script>
`},{description:c(()=>[K]),highlight:c(()=>[W]),default:c(()=>[k(g)]),_:1}),j])}var X=E(F,[["render",J]]);export{R as __pageData,X as default};