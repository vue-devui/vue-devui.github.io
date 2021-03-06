var N=Object.defineProperty;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var w=(e,a,s)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,B=(e,a)=>{for(var s in a||(a={}))q.call(a,s)&&w(e,s,a[s]);if(D)for(var s of D(a))U.call(a,s)&&w(e,s,a[s]);return e};import{_ as j,V as F,r as _,c as H,a as y,w as f,b as V,d as t,e as n,o as S}from"./app.74859d28.js";const I={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:c,createElementVNode:r,openBlock:d,createElementBlock:k}=F,p=e("\u663E\u793A\u56FA\u5B9A\u906E\u7F69\u5C42"),g=r("div",{class:"demo-fixed-overlay-container"},"Hello DevUI!",-1);function v(l,i){const C=a("d-button"),o=a("d-fixed-overlay");return d(),k("div",null,[c(C,{onClick:i[0]||(i[0]=u=>l.visible=!l.visible)},{default:s(()=>[p]),_:1}),c(o,{visible:l.visible,"onUpdate:visible":i[1]||(i[1]=u=>l.visible=u),"background-class":"demo-fixed-overlay-bg","background-block":""},{default:s(()=>[g]),_:1},8,["visible"])])}const{defineComponent:x,ref:m}=F,b=x({setup(){return{visible:m(!1)}}});return B({render:v},b)}(),"render-demo-1":function(){const{createElementVNode:e,toDisplayString:a,createTextVNode:s,resolveComponent:c,withCtx:r,createVNode:d,openBlock:k,createElementBlock:p}=F,g={ref:"origin",class:"demo-flexible-overlay-origin"},v=e("br",null,null,-1),x=s(" Hello DevUI! ");function m(o,u){const h=c("d-button"),E=c("d-flexible-overlay");return k(),p("div",null,[e("div",null,[e("div",g,"origin",512),v,d(h,{onClick:u[0]||(u[0]=A=>o.visible=!o.visible)},{default:r(()=>[s(a(o.title),1)]),_:1}),d(E,{modelValue:o.visible,"onUpdate:modelValue":u[1]||(u[1]=A=>o.visible=A),origin:o.origin,position:o.position,"show-arrow":"",class:"custom-overlay"},{default:r(()=>[x]),_:1},8,["modelValue","origin","position"])])])}const{defineComponent:b,ref:l,computed:i}=F,C=b({setup(){const o=l(),u=l(!1),h=l(["top","right"]),E=i(()=>u.value?"\u9690\u85CF":"\u663E\u793A");return{origin:o,visible:u,title:E,position:h}}});return B({render:m},C)}()}},K='{"title":"Overlay \u906E\u7F69\u5C42","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u56FA\u5B9A\u906E\u7F69\u5C42","slug":"\u56FA\u5B9A\u906E\u7F69\u5C42"},{"level":3,"title":"\u5F39\u6027\u906E\u7F69\u5C42","slug":"\u5F39\u6027\u906E\u7F69\u5C42"},{"level":3,"title":"FixedOverlay \u53C2\u6570","slug":"fixedoverlay-\u53C2\u6570"},{"level":3,"title":"FlexibleOverlay \u53C2\u6570","slug":"flexibleoverlay-\u53C2\u6570"},{"level":3,"title":"\u7C7B\u578B","slug":"\u7C7B\u578B"}],"relativePath":"components/overlay/index.md","lastUpdated":1649728324749}',O=V('<h1 id="overlay-\u906E\u7F69\u5C42" tabindex="-1">Overlay \u906E\u7F69\u5C42 <a class="header-anchor" href="#overlay-\u906E\u7F69\u5C42" aria-hidden="true">#</a></h1><p>\u906E\u7F69\u5C42\u5C5E\u4E8E\u57FA\u7840\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u6784\u5EFA\u72EC\u7ACB\u4E8E\u5F53\u524D\u9875\u9762\u5E03\u5C40\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u4F60\u9700\u8981\u5168\u5C40\u5F39\u7A97\uFF0C\u6216\u8005\u9700\u8981\u5143\u7D20\u8DDF\u968F\u529F\u80FD\uFF0C\u4FBF\u53EF\u4EE5\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p><h3 id="\u56FA\u5B9A\u906E\u7F69\u5C42" tabindex="-1">\u56FA\u5B9A\u906E\u7F69\u5C42 <a class="header-anchor" href="#\u56FA\u5B9A\u906E\u7F69\u5C42" aria-hidden="true">#</a></h3>',5),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible = !visible"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u663E\u793A\u56FA\u5B9A\u906E\u7F69\u5C42"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-fixed-overlay")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"background-class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-fixed-overlay-bg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"background-block"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-fixed-overlay-container"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Hello DevUI!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-fixed-overlay")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" visible "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(" visible "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
  `),t("span",{class:"token selector"},".demo-fixed-overlay-container"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 10vw"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 10vh"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(" #fff"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" #000"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`

  `),t("span",{class:"token selector"},".demo-fixed-overlay-bg"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h3",{id:"\u5F39\u6027\u906E\u7F69\u5C42",tabindex:"-1"},[n("\u5F39\u6027\u906E\u7F69\u5C42 "),t("a",{class:"header-anchor",href:"#\u5F39\u6027\u906E\u7F69\u5C42","aria-hidden":"true"},"#")],-1),$=t("div",null,[n("\u8DDF\u968F\u8D77\u70B9\u5143\u7D20\u79FB\u52A8\uFF0C\u5E76\u4E14\u5728\u9047\u5230\u8FB9\u754C\u65F6\u6839\u636E"),t("code",null,"position"),n("\u53C2\u6570\u6307\u5B9A\u7684\u53EF\u9009\u4F4D\u7F6E\u81EA\u52A8\u8C03\u6574\u3002")],-1),L=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("origin"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-flexible-overlay-origin"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("origin"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("br")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible = !visible"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ title }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-flexible-overlay")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":origin"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("origin"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("position"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"show-arrow"),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("custom-overlay"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Hello DevUI!
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-flexible-overlay")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" computed "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" origin "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" visible "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" position "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'top'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'right'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" title "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"computed"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),n("visible"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"?"),n(),t("span",{class:"token string"},"'\u9690\u85CF'"),n(),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u663E\u793A'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      origin`),t("span",{class:"token punctuation"},","),n(`
      visible`),t("span",{class:"token punctuation"},","),n(`
      title`),t("span",{class:"token punctuation"},","),n(`
      position`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".demo-flexible-overlay-origin"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(" #E9EDFA"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" #252b3a"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".custom-overlay"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 100px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),M=V(`<h3 id="fixedoverlay-\u53C2\u6570" tabindex="-1">FixedOverlay \u53C2\u6570 <a class="header-anchor" href="#fixedoverlay-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u906E\u7F69\u5C42\u662F\u5426\u53EF\u89C1</td></tr><tr><td style="text-align:left;">onUpdate:visible</td><td style="text-align:left;"><code>(value: boolean) =&gt; void</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u906E\u7F69\u5C42\u53D6\u6D88\u53EF\u89C1\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">background-block</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5982\u679C\u4E3A true\uFF0C\u80CC\u666F\u4E0D\u80FD\u6EDA\u52A8</td></tr><tr><td style="text-align:left;">background-class</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u80CC\u666F\u7684\u6837\u5F0F\u7C7B</td></tr><tr><td style="text-align:left;">background-style</td><td style="text-align:left;"><code>CSSProperties</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u80CC\u666F\u7684\u6837\u5F0F</td></tr><tr><td style="text-align:left;">on-backdrop-click</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u80CC\u666F\u89E6\u53D1\u7684\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">backdrop-close</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5982\u679C\u4E3A true\uFF0C\u70B9\u51FB\u80CC\u666F\u5C06\u89E6\u53D1 <code>onUpdate:visible</code>\uFF0C<br>\u9ED8\u8BA4\u53C2\u6570\u662F false</td></tr><tr><td style="text-align:left;">has-backdrop</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5982\u679C\u4E3A false\uFF0C\u80CC\u666F\u5143\u7D20\u7684 <code>point-event</code> \u4F1A\u8BBE\u4E3A <code>none</code>\uFF0C<br>\u4E14\u4E0D\u663E\u793A\u9ED8\u8BA4\u80CC\u666F</td></tr><tr><td style="text-align:left;">overlay-style</td><td style="text-align:left;"><code>CSSProperties</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u906E\u7F69\u5C42\u7684\u6837\u5F0F</td></tr></tbody></table><h3 id="flexibleoverlay-\u53C2\u6570" tabindex="-1">FlexibleOverlay \u53C2\u6570 <a class="header-anchor" href="#flexibleoverlay-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A</td></tr><tr><td style="text-align:left;">origin</td><td style="text-align:left;"><code>HTMLElement</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u4F60\u5FC5\u987B\u6307\u5B9A\u8D77\u70B9\u5143\u7D20\u624D\u80FD\u8BA9\u906E\u7F69\u5C42\u4E0E\u8BE5\u5143\u7D20\u8FDE\u63A5\u5728\u4E00\u8D77</td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;"><a href="#placement">Placement[]</a></td><td style="text-align:left;">[&#39;bottom&#39;]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u663E\u793A\u4F4D\u7F6E</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;"><code>start | end | center</code></td><td style="text-align:left;">center</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u5BF9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5BF9\u9F50</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">8</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u4E0E\u8D77\u70B9\u5143\u7D20\u7684\u95F4\u8DDD</td></tr><tr><td style="text-align:left;">show-arrow</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u7BAD\u5934</td></tr></tbody></table><h3 id="\u7C7B\u578B" tabindex="-1">\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a></h3><h4 id="placement" tabindex="-1">Placement <a class="header-anchor" href="#placement" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Placement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function z(e,a,s,c,r,d){const k=_("render-demo-0"),p=_("demo"),g=_("render-demo-1");return S(),H("div",null,[O,y(p,{sourceCode:`<template>
  <d-button @click="visible = !visible">\u663E\u793A\u56FA\u5B9A\u906E\u7F69\u5C42</d-button>
  <d-fixed-overlay v-model:visible="visible" background-class="demo-fixed-overlay-bg" background-block>
    <div class="demo-fixed-overlay-container">Hello DevUI!</div>
  </d-fixed-overlay>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(false);

    return { visible };
  }
});
<\/script>
<style>
  .demo-fixed-overlay-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 10vh;
    background: #fff;
    color: #000;
  }

  .demo-fixed-overlay-bg {
    align-items: center;
    justify-content: center;
  }
</style>
`},{highlight:f(()=>[P]),default:f(()=>[y(k)]),_:1}),T,y(p,{sourceCode:`<template>
  <div>
    <div ref="origin" class="demo-flexible-overlay-origin">origin</div>
    <br>
    <d-button @click="visible = !visible">{{ title }}</d-button>
    <d-flexible-overlay v-model="visible" :origin="origin" :position="position" show-arrow class="custom-overlay">
      Hello DevUI!
    </d-flexible-overlay>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const origin = ref();
    const visible = ref(false);
    const position = ref(['top', 'right']);
    const title = computed(() => (visible.value ? '\u9690\u85CF' : '\u663E\u793A'));

    return {
      origin,
      visible,
      title,
      position,
    };
  },
});
<\/script>

<style>
.demo-flexible-overlay-origin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #E9EDFA;
  color: #252b3a;
}

.custom-overlay {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
</style>
`},{description:f(()=>[$]),highlight:f(()=>[L]),default:f(()=>[y(g)]),_:1}),M])}var Q=j(I,[["render",z]]);export{K as __pageData,Q as default};
