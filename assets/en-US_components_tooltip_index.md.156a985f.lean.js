import{V as T}from"./framework.37dedfa0.js";import{_ as M,S as q,b as k,a1 as m,a3 as E,V as t,x as n,N as y,R as N}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:a,createVNode:s,createElementVNode:r,openBlock:d,createElementBlock:c}=T,l={class:"tooltip-buttons"},p=e("left"),g=e("top"),h=e("bottom"),b=e("right"),f=e("No Animation");function x(v,H){const u=o("d-button"),i=o("d-tooltip");return d(),c("div",null,[r("div",l,[s(i,{position:"left",content:"I am a HTML Element!"},{default:a(()=>[s(u,{variant:"common"},{default:a(()=>[p]),_:1})]),_:1}),s(i,{position:"top",content:"I am a HTML Element!"},{default:a(()=>[s(u,{variant:"common"},{default:a(()=>[g]),_:1})]),_:1}),s(i,{position:"bottom",content:"I am a HTML Element!"},{default:a(()=>[s(u,{variant:"common"},{default:a(()=>[h]),_:1})]),_:1}),s(i,{position:"right",content:"I am a HTML Element!"},{default:a(()=>[s(u,{variant:"common"},{default:a(()=>[b]),_:1})]),_:1}),s(i,{content:"No Animation",showAnimation:!1},{default:a(()=>[s(u,{variant:"common"},{default:a(()=>[f]),_:1})]),_:1})])])}return{render:x,...{}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:a,createVNode:s,createElementVNode:r,openBlock:d,createElementBlock:c}=T,l=e("MouseEnter delay 500ms"),p=r("br",null,null,-1),g=e("MouseEnter delay 1000ms");function h(f,x){const _=o("d-button"),v=o("d-tooltip");return d(),c("div",null,[s(v,{position:"top",content:"Mouse enter 500ms later.",mouseEnterDelay:"500"},{default:a(()=>[s(_,null,{default:a(()=>[l]),_:1})]),_:1}),p,s(v,{position:"top",content:"Mouse leave 1000ms later.",mouseLeaveDelay:"1000"},{default:a(()=>[s(_,{variant:"common"},{default:a(()=>[g]),_:1})]),_:1})])}return{render:h,...{}}}()}},S='{"title":"Tooltip","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Delay Trigger","slug":"delay-trigger"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/tooltip/index.md","lastUpdated":1658409114914}',V=E('<h1 id="tooltip" tabindex="-1">Tooltip <a class="header-anchor" href="#tooltip" aria-hidden="true">#</a></h1><p>Text notification.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When users move the cursor to a text, they can see what should do next.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',5),L=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tooltip-buttons"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("I am a HTML Element!"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("I am a HTML Element!"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("I am a HTML Element!"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("I am a HTML Element!"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("No Animation"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showAnimation"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("No Animation"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".tooltip-buttons"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".tooltip-buttons .devui-tooltip"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),w=t("h3",{id:"delay-trigger",tabindex:"-1"},[n("Delay Trigger "),t("a",{class:"header-anchor",href:"#delay-trigger","aria-hidden":"true"},"#")],-1),B=t("p",null,"This event is triggered only when the mouse pointer is moved in for more than [mouseEnterDelay] milliseconds. The default value is 150 ms to prevent flashing caused by unintentional strokes. The toolTip component is hidden only after [mouseLeaveDelay] milliseconds after the cursor is moved out. The default value is 100 milliseconds.",-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(`
    `),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Mouse enter 500ms later."),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"mouseEnterDelay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("500"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n("MouseEnter delay 500ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("br")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tooltip")]),n(`
    `),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Mouse leave 1000ms later."),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"mouseLeaveDelay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1000"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("MouseEnter delay 1000ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tooltip")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),C=E('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>Tooltip parameter</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th><th>Jump to Demo</th><th>Global Config</th></tr></thead><tbody><tr><td style="text-align:center;">content</td><td style="text-align:center;"><code>string|DOMString</code></td><td style="text-align:center;">--</td><td style="text-align:left;">Required. Tooltip display content</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><code>PositionType|PositionType[]</code></td><td style="text-align:center;">[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</td><td style="text-align:left;">Optional. Tooltip display position</td><td><a href="#basic-usage">Basic Usage</a></td><td></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">Optional. Whether to display the drawing animation</td><td></td><td>\u2714</td></tr><tr><td style="text-align:center;">mouseEnterDelay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">150</td><td style="text-align:left;">Optional. Delay for displaying Tooltip after the mouse is enter. The unit is ms</td><td><a href="#delay-trigger">Delay Trigger</a></td><td></td></tr><tr><td style="text-align:center;">mouseLeaveDelay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">100</td><td style="text-align:left;">Optional. Delay for hiding Tooltip after the mouse is leave, The unit is ms</td><td><a href="#delay-trigger">Delay Trigger</a></td><td></td></tr></tbody></table>',3);function A(e,o,a,s,r,d){const c=y("render-demo-0"),l=y("demo"),p=y("render-demo-1");return N(),q("div",null,[V,k(l,{sourceCode:`<template>
  <div class="tooltip-buttons">
    <d-tooltip position="left" content="I am a HTML Element!">
      <d-button variant="common">left</d-button>
    </d-tooltip>
    <d-tooltip position="top" content="I am a HTML Element!">
      <d-button variant="common">top</d-button>
    </d-tooltip>
    <d-tooltip position="bottom" content="I am a HTML Element!">
      <d-button variant="common">bottom</d-button>
    </d-tooltip>
    <d-tooltip position="right" content="I am a HTML Element!">
      <d-button variant="common">right</d-button>
    </d-tooltip>
    <d-tooltip content="No Animation" :showAnimation="false">
      <d-button variant="common">No Animation</d-button>
    </d-tooltip>
  </div>
</template>
<style>
.tooltip-buttons {
  display: flex;
}
.tooltip-buttons .devui-tooltip {
  margin-right: 10px;
}
</style>
`},{highlight:m(()=>[L]),default:m(()=>[k(c)]),_:1}),w,B,k(l,{sourceCode:`<template>
  <d-tooltip
    position="top"
    content="Mouse enter 500ms later."
    mouseEnterDelay="500"
  >
    <d-button>MouseEnter delay 500ms</d-button>
  </d-tooltip>
  <br />
  <d-tooltip
    position="top"
    content="Mouse leave 1000ms later."
    mouseLeaveDelay="1000"
  >
    <d-button variant="common">MouseEnter delay 1000ms</d-button>
  </d-tooltip>
</template>
`},{highlight:m(()=>[I]),default:m(()=>[k(p)]),_:1}),C])}var W=M(D,[["render",A]]);export{S as __pageData,W as default};