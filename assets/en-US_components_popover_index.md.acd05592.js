var X=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var B=(s,p,o)=>p in s?X(s,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[p]=o,C=(s,p)=>{for(var o in p||(p={}))Y.call(p,o)&&B(s,o,p[o]);if(N)for(var o of N(p))tt.call(p,o)&&B(s,o,p[o]);return s};import{_ as nt,V as w,r as T,c as at,a as _,w as f,b as D,d as t,e as n,o as st}from"./app.a2cc62c7.js";const ot={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:s,resolveComponent:p,withCtx:o,createVNode:a,createElementVNode:e,openBlock:v,createElementBlock:k}=w,c={class:"popover-demo-item"},r=s("default"),d=s("info"),g=s("error"),h=s("success"),y=s("warning"),l=s("no-animation");function b(E,V){const m=p("d-button"),q=p("d-popover");return v(),k("div",null,[e("div",c,[a(q,{content:"default!",controlled:""},{reference:o(()=>[a(m,{variant:"common"},{default:o(()=>[r]),_:1})]),_:1}),a(q,{content:"info!",popType:"info",position:["top"],controlled:""},{reference:o(()=>[a(m,{variant:"primary"},{default:o(()=>[d]),_:1})]),_:1}),a(q,{content:"error!",popType:"error",controlled:"",position:["left"],zIndex:9999},{reference:o(()=>[a(m,{variant:"danger"},{default:o(()=>[g]),_:1})]),_:1}),a(q,{content:"success!",popType:"success",controlled:"",position:["right"]},{reference:o(()=>[a(m,{variant:"success"},{default:o(()=>[h]),_:1})]),_:1}),a(q,{content:"warning!",popType:"warning",controlled:""},{reference:o(()=>[a(m,{variant:"warning"},{default:o(()=>[y]),_:1})]),_:1}),a(q,{content:"no-animation!",showAnimation:!1,popMaxWidth:100,controlled:""},{reference:o(()=>[a(m,{variant:"common"},{default:o(()=>[l]),_:1})]),_:1})])])}return C({render:b},{})}(),"render-demo-1":function(){const{createTextVNode:s,resolveComponent:p,withCtx:o,createVNode:a,createElementVNode:e,openBlock:v,createElementBlock:k}=w,c={class:"popover-demo-item"},r=s(" click me!"),d=s(" hover me!");function g(y,l){const b=p("d-button"),x=p("d-popover");return v(),k("div",null,[e("div",c,[a(x,{content:"Custom Content",controlled:""},{reference:o(()=>[a(b,{variant:"primary"},{default:o(()=>[r]),_:1})]),_:1}),a(x,{content:"Custom Content",trigger:"hover",controlled:"",popoverStyle:{backgroundColor:"#7693f5",color:"#fff"}},{reference:o(()=>[a(b,{variant:"primary"},{default:o(()=>[d]),_:1})]),_:1})])])}return C({render:g},{})}(),"render-demo-2":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:k}=w,c={class:"item"},r=s("div",null,"left",-1),d=p("left"),g=s("div",null,"left-top",-1),h=s("div",null,"left-top",-1),y=p("left-top"),l=s("div",null,"left-bottom",-1),b=s("div",null,"left-bottom",-1),x=p("left-bottom"),E={style:{"margin-top":"10px"},class:"item"},V=s("span",null,"top",-1),m=p("top"),q=s("span",null,"top-left",-1),M=p("top-left"),P=s("span",null,"top-right",-1),U=p("top-right"),O={style:{"margin-top":"10px"},class:"item"},S=s("div",null,"right",-1),L=p("right"),W=s("div",null,"right-top",-1),A=s("div",null,"right-top",-1),I=p("right-top"),z=s("div",null,"right-bottom",-1),$=s("div",null,"right-bottom",-1),R=p("right-bottom"),j={style:{"margin-top":"10px"},class:"item"},F=s("div",null,"bottom",-1),H=p("bottom"),J=s("div",null,"bottom-left",-1),Z=p("bottom-left"),G=s("div",null,"bottom-right",-1),K=p("bottom-right");function Q(xt,qt){const u=o("d-button"),i=o("d-popover");return v(),k("div",null,[s("div",c,[e(i,{position:["left"],controlled:""},{content:a(()=>[r]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[d]),_:1})]),_:1}),e(i,{position:["left-top"],controlled:""},{content:a(()=>[g,h]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[y]),_:1})]),_:1}),e(i,{position:["left-bottom"],controlled:""},{content:a(()=>[l,b]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[x]),_:1})]),_:1})]),s("div",E,[e(i,{position:["top"],controlled:""},{content:a(()=>[V]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[m]),_:1})]),_:1}),e(i,{position:["top-left"],controlled:""},{content:a(()=>[q]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[M]),_:1})]),_:1}),e(i,{position:["top-right"],controlled:""},{content:a(()=>[P]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[U]),_:1})]),_:1})]),s("div",O,[e(i,{position:["right"],controlled:""},{content:a(()=>[S]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[L]),_:1})]),_:1}),e(i,{position:["right-top"],controlled:""},{content:a(()=>[W,A]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[I]),_:1})]),_:1}),e(i,{position:["right-bottom"],controlled:""},{content:a(()=>[z,$]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[R]),_:1})]),_:1})]),s("div",j,[e(i,{position:["bottom"],controlled:""},{content:a(()=>[F]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[H]),_:1})]),_:1}),e(i,{position:["bottom-left"],controlled:""},{content:a(()=>[J]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[Z]),_:1})]),_:1}),e(i,{position:["bottom-right"],controlled:""},{content:a(()=>[G]),reference:a(()=>[e(u,{variant:"common"},{default:a(()=>[K]),_:1})]),_:1})])])}return C({render:Q},{})}(),"render-demo-3":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:k}=w,c=s("div",null," Manual Control Display ",-1),r=p("Manual Control Display");function d(l,b){const x=o("d-button"),E=o("d-popover");return v(),k("div",null,[e(E,{position:["top"],visible:l.visible},{content:a(()=>[c]),reference:a(()=>[e(x,{variant:"primary",onClick:l.onClick},{default:a(()=>[r]),_:1},8,["onClick"])]),_:1},8,["visible"])])}const{defineComponent:g,ref:h}=w,y=g({setup(){const l=h(!1);return{visible:l,onClick:()=>{l.value=!l.value}}}});return C({render:d},y)}(),"render-demo-4":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:k}=w,c={class:"item"},r=s("div",null," Mouse enter 500ms later. ",-1),d=p(" show Me "),g=p("MouseEnter delay 500ms"),h=s("div",null," Mouse leave 2000ms later. ",-1),y=p(" MouseLeave delay 2000ms");function l(x,E){const V=o("d-button"),m=o("d-popover");return v(),k("div",null,[s("div",c,[e(m,{position:["bottom-right"],trigger:"hover",controlled:"",mouseEnterDelay:500},{content:a(()=>[r,d]),reference:a(()=>[e(V,{variant:"primary"},{default:a(()=>[g]),_:1})]),_:1}),e(m,{position:["bottom-right"],trigger:"hover",controlled:"",mouseLeaveDelay:2e3},{content:a(()=>[h]),reference:a(()=>[e(V,{variant:"common"},{default:a(()=>[y]),_:1})]),_:1})])])}return C({render:l},{})}()}},Tt='{"title":"Popover","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Custom Tips","slug":"custom-tips"},{"level":3,"title":"Position","slug":"position"},{"level":3,"title":"Manual Control Display","slug":"manual-control-display"},{"level":3,"title":"Delay Trigger","slug":"delay-trigger"},{"level":3,"title":"DPopover","slug":"dpopover"}],"relativePath":"en-US/components/popover/index.md","lastUpdated":1650439126631}',et=D('<h1 id="popover" tabindex="-1">Popover <a class="header-anchor" href="#popover" aria-hidden="true">#</a></h1><p>Simple text prompt box.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used to notify users of non-critical problems or to indicate that a control is in a special situation.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',5),pt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"popType"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("info"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("info"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"popType"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":zIndex"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("9999"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("error"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"popType"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("success"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"popType"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("warning"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("no-animation!"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showAnimation"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":popMaxWidth"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("no-animation"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item > *"),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ct=t("h3",{id:"custom-tips",tabindex:"-1"},[n("Custom Tips "),t("a",{class:"header-anchor",href:"#custom-tips","aria-hidden":"true"},"#")],-1),lt=t("p",null,"The HTMLElement or TemplateRef type can be transferred.",-1),ut=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popover-demo-item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Custom Content"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" click me!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Custom Content"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token attr-name"},":popoverStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ backgroundColor: "),t("span",{class:"token punctuation"},"'"),n("#7693f5"),t("span",{class:"token punctuation"},"'"),n(",color: "),t("span",{class:"token punctuation"},"'"),n("#fff"),t("span",{class:"token punctuation"},"'"),n("}"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" hover me!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item > *"),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),it=t("h3",{id:"position",tabindex:"-1"},[n("Position "),t("a",{class:"header-anchor",href:"#position","aria-hidden":"true"},"#")],-1),kt=t("p",null,"A total of 12 pop-up positions are supported.",-1),rt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left-top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("left-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("left-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("left-bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("left-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("left-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token punctuation"},">")]),n("top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top-left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token punctuation"},">")]),n("top-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("top-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top-right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token punctuation"},">")]),n("top-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("top-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right-top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("right-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("right-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right-top"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("right-bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("right-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("right-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right-bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-left"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("bottom-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("bottom-left"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n("bottom-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("bottom-right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item > *"),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),dt=t("h3",{id:"manual-control-display",tabindex:"-1"},[t("strong",null,"Manual Control Display"),n(),t("a",{class:"header-anchor",href:"#manual-control-display","aria-hidden":"true"},"#")],-1),gt=t("p",null,"Displaying the pop-up dialog box through the visible interface to verify the form. To use the visible control function, set controlled to the default value false.",-1),mt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":visible"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n(" Manual Control Display "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onClick"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Manual Control Display"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" visible"),t("span",{class:"token operator"},"="),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onClick"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),n(`
      visible`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"!"),n("visible"),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},"{"),n(`
      visible`),t("span",{class:"token punctuation"},","),n(`
      onClick
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),vt=t("h3",{id:"delay-trigger",tabindex:"-1"},[n("Delay Trigger "),t("a",{class:"header-anchor",href:"#delay-trigger","aria-hidden":"true"},"#")],-1),ht=t("p",null,[n("Only when the trigger type is hover. This event is triggered only when the mouse pointer is moved in for more than "),t("code",null,"mouseEnterDelay"),n(" milliseconds. The default value is 150 ms to prevent flashing caused by unintentional strokes. The toolTip component is hidden only after "),t("code",null,"mouseLeaveDelay"),n("milliseconds after the cursor is moved out. The default value is 100 milliseconds.")],-1),_t=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n("  "),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token attr-name"},":mouseEnterDelay"),n(),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("500"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token punctuation"},">")]),n(" Mouse enter 500ms later. "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        show Me
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("MouseEnter delay 500ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-popover")]),n(),t("span",{class:"token attr-name"},":position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("bottom-right"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"controlled"),n(),t("span",{class:"token attr-name"},":mouseLeaveDelay"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2000"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(" Mouse leave 2000ms later. "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#reference"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" MouseLeave delay 2000ms"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-popover")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".popover-demo-item > *"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n("10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ft=D('<h3 id="dpopover" tabindex="-1">DPopover <a class="header-anchor" href="#dpopover" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th><strong>Parameter</strong></th><th><strong>Type</strong></th><th><strong>Default</strong></th><th><strong>Description</strong></th><th><strong>Jump to Demo</strong></th></tr></thead><tbody><tr><td>content</td><td><code>string</code></td><td>defalut</td><td>Required. The display content of the pop-up box or template reference</td><td><a href="#custom-tips">Custom Tips</a></td></tr><tr><td>visible</td><td><code>boolean</code></td><td>false</td><td>Optional. Initial pop-up status of the pop-up dialog box</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>trigger</td><td><code>string</code></td><td>click</td><td>Pop-up message triggering mode</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>controlled</td><td><code>boolean</code></td><td>false</td><td>Optional. Specifies whether to trigger a dialog box in <code>trigger</code> mode</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>popType</td><td><code>string</code></td><td>default</td><td>Optional. Which indicates the type of the pop-up box with different styles</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>zIndex</td><td><code>number</code></td><td>1060</td><td>Optional. Z-index value, which is used to manually control the height of the layer</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>positionType</td><td><code>string</code></td><td>bottom</td><td>Optional. Specifies the content pop-up direction. For example, top-left indicates the content pop-up direction, and left indicates the left-aligned content.</td><td><a href="#Position">Position</a></td></tr><tr><td>showAnimation</td><td><code>boolean</code></td><td>true</td><td>Optional. Whether to display animation</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>popMaxWidth</td><td><code>number</code></td><td>-</td><td>Optional. Limit the maximum width of the pop-up box (<code>px</code>)</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>mouseEnterDelay</td><td><code>number</code></td><td>150</td><td>Optional. Only when the type of trigger is hover. Delay for displaying Popover after the mouse is enter. The unit is <code>ms</code></td><td><a href="#delay-trigger">Delay Trigger</a></td></tr><tr><td>mouseLeaveDelay</td><td><code>number</code></td><td>100</td><td>Optional. Only when the type of trigger is hover. Delay for hiding Tooltip after the mouse is leave. The unit is <code>ms</code></td><td><a href="#delay-trigger">Delay Trigger</a></td></tr><tr><td>popoverStyle</td><td><code>{[klass:string]:any;}</code></td><td>-</td><td>Optional. When you need to change the style of the pop-up layer, the same background color is applied to the arrows. Style. Refer to <a href="https://angular.io/api/common/NgStyle" target="_blank" rel="noopener noreferrer">ngStyle</a></td><td><a href="#custom-tips">Custom Tips</a></td></tr></tbody></table><h4 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h4><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td>content</td><td>Custom content</td></tr><tr><td>reference</td><td>Triggers the contents of the element displayed by Popover</td></tr></tbody></table>',5);function bt(s,p,o,a,e,v){const k=T("render-demo-0"),c=T("demo"),r=T("render-demo-1"),d=T("render-demo-2"),g=T("render-demo-3"),h=T("render-demo-4");return st(),at("div",null,[et,_(c,{sourceCode:`<template>
<div class="popover-demo-item" >
  <d-popover content="default!" controlled>
    <template #reference>
      <d-button variant="common">default</d-button>
    </template>
  </d-popover>
  <d-popover content="info!" popType="info" :position="['top']" controlled>
    <template #reference>
      <d-button  variant="primary">info</d-button>
    </template>
  </d-popover>
  <d-popover  content="error!" popType="error" controlled :position="['left']" :zIndex="9999">
    <template #reference>
      <d-button  variant="danger">error</d-button>
    </template>
  </d-popover>
    <d-popover  content="success!" popType="success" controlled :position="['right']">
    <template #reference>
      <d-button  variant="success">success</d-button>
    </template>
  </d-popover>
  <d-popover  content="warning!" popType="warning" controlled>
    <template #reference>
      <d-button  variant="warning">warning</d-button>
    </template>
  </d-popover>
  <d-popover  content="no-animation!" :showAnimation="false" :popMaxWidth="100" controlled>
    <template #reference>
      <d-button  variant="common">no-animation</d-button>
    </template>
  </d-popover>
</div>
</template>
<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:f(()=>[pt]),default:f(()=>[_(k)]),_:1}),ct,lt,_(c,{sourceCode:`<template>
<div class="popover-demo-item">
  <d-popover content="Custom Content" controlled>
    <template #reference>
      <d-button variant="primary"> click me!</d-button>
    </template>
  </d-popover>
  <d-popover  content="Custom Content" trigger="hover" controlled :popoverStyle="{ backgroundColor: '#7693f5',color: '#fff'}">
    <template #reference>
      <d-button variant="primary"> hover me!</d-button>
    </template>
  </d-popover>
</div>
</template>

<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:f(()=>[ut]),default:f(()=>[_(r)]),_:1}),it,kt,_(c,{sourceCode:`<template>
<div class="item">
  <d-popover  :position="['left']" controlled>
  <template #content>
      <div>left</div>
    </template>
  <template #reference>
    <d-button variant="common">left</d-button>
  </template>
  </d-popover>
  <d-popover  :position="['left-top']" controlled>
    <template #content>
        <div >left-top</div>
        <div>left-top</div>
    </template>
    <template #reference>
      <d-button variant="common">left-top</d-button>
    </template>
  </d-popover>
  <d-popover  :position="['left-bottom']" controlled >
    <template #content>
        <div>left-bottom</div>
        <div>left-bottom</div>
      </template>
    <template #reference>
      <d-button variant="common">left-bottom</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover :position="['top']" controlled>
    <template #content>
        <span >top</span>
      </template>
    <template #reference>
      <d-button variant="common">top</d-button>
    </template>
  </d-popover>
  <d-popover :position="['top-left']" controlled>
    <template #content>
        <span >top-left</span>
      </template>
    <template #reference>
      <d-button variant="common">top-left</d-button>
    </template>
  </d-popover>
  <d-popover :position="['top-right']" controlled>
    <template #content>
        <span >top-right</span>
      </template>
    <template #reference>
      <d-button variant="common">top-right</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover :position="['right']" controlled>
    <template #content>
        <div >right</div>
      </template>
    <template #reference>
      <d-button variant="common">right</d-button>
    </template>
  </d-popover>
  <d-popover :position="['right-top']" controlled>
    <template #content>
        <div >right-top</div>
        <div >right-top</div>
      </template>
    <template #reference>
      <d-button variant="common">right-top</d-button>
    </template>
  </d-popover>
    <d-popover :position="['right-bottom']" controlled>
    <template #content>
        <div >right-bottom</div>
        <div >right-bottom</div>
      </template>
    <template #reference>
      <d-button variant="common">right-bottom</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover :position="['bottom']" controlled>
    <template #content>
        <div >bottom</div>
      </template>
    <template #reference>
      <d-button variant="common">bottom</d-button>
    </template>
  </d-popover>
    <d-popover :position="['bottom-left']" controlled>
    <template #content>
        <div >bottom-left</div>
      </template>
    <template #reference>
      <d-button variant="common">bottom-left</d-button>
    </template>
  </d-popover>
  <d-popover  :position="['bottom-right']" controlled>
    <template #content>
        <div >bottom-right</div>
      </template>
    <template #reference>
      <d-button variant="common">bottom-right</d-button>
    </template>
  </d-popover>
</div>
</template>
<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:f(()=>[rt]),default:f(()=>[_(d)]),_:1}),dt,gt,_(c,{sourceCode:`<template>
  <d-popover :position="['top']" :visible="visible">
    <template #content>
        <div > Manual Control Display </div>
      </template>
    <template #reference>
      <d-button variant="primary" @click="onClick">Manual Control Display</d-button>
    </template>
  </d-popover>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const visible=ref(false);
    const onClick = ()=>{
      visible.value = !visible.value ;
    }
    return{
      visible,
      onClick
    }
  }
})
<\/script>
`},{highlight:f(()=>[mt]),default:f(()=>[_(g)]),_:1}),vt,ht,_(c,{sourceCode:`<template>
<div class="item">
  <d-popover  :position="['bottom-right']" trigger="hover" controlled :mouseEnterDelay ="500">
    <template #content>
        <div > Mouse enter 500ms later. </div>
        show Me
      </template>
    <template #reference>
      <d-button variant="primary">MouseEnter delay 500ms</d-button>
    </template>
  </d-popover>
  <d-popover :position="['bottom-right']" trigger="hover" controlled :mouseLeaveDelay="2000">
    <template #content>
        <div> Mouse leave 2000ms later. </div>
      </template>
    <template #reference>
      <d-button variant="common"> MouseLeave delay 2000ms</d-button>
    </template>
  </d-popover>
  </div>
</template>
<style>
.popover-demo-item > * {
  margin-right:10px;
}
</style>
`},{highlight:f(()=>[_t]),default:f(()=>[_(h)]),_:1}),ft])}var Et=nt(ot,[["render",bt]]);export{Tt as __pageData,Et as default};
