var C=Object.defineProperty;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(l,p,o)=>p in l?C(l,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[p]=o,h=(l,p)=>{for(var o in p||(p={}))q.call(p,o)&&b(l,o,p[o]);if(y)for(var o of y(p))B.call(p,o)&&b(l,o,p[o]);return l};import{_ as E,V as f,r as _,c as N,a as V,w as v,b as w,d as n,e as a,o as U}from"./app.0ce8509b.js";const I={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}};function k(s,t){const e=l("d-slider");return d(),m("div",null,[o("div",g,[p(e,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":t[0]||(t[0]=i=>s.inputValue=i)},null,8,["min","max","modelValue"])])])}const{defineComponent:u,ref:c}=f,r=u({setup(){const s=c(12),t=c(0),e=c(20);return{inputValue:s,maxValue:e,minValue:t}}});return h({render:k},r)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}};function k(s,t){const e=l("d-slider");return d(),m("div",null,[o("div",g,[p(e,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":t[0]||(t[0]=i=>s.inputValue=i),step:s.step},null,8,["min","max","modelValue","step"])])])}const{defineComponent:u,ref:c}=f,r=u({setup(){const s=c(8),t=c(0),e=c(20),i=c(4);return{inputValue:s,maxValue:e,minValue:t,step:i}}});return h({render:k},r)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}};function k(s,t){const e=l("d-slider");return d(),m("div",null,[o("div",g,[p(e,{min:s.minValue,max:s.maxValue,modelValue:s.inputValue,"onUpdate:modelValue":t[0]||(t[0]=i=>s.inputValue=i),showInput:""},null,8,["min","max","modelValue"])])])}const{defineComponent:u,ref:c}=f,r=u({setup(){const s=c(10),t=c(0),e=c(20);return{inputValue:s,maxValue:e,minValue:t}}});return h({render:k},r)}(),"render-demo-3":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}};function k(s,t){const e=l("d-slider");return d(),m("div",null,[o("div",g,[p(e,{modelValue:s.inputValue,"onUpdate:modelValue":t[0]||(t[0]=i=>s.inputValue=i),color:"#e67e22"},null,8,["modelValue"])])])}const{defineComponent:u,ref:c}=f,r=u({setup(){return{inputValue:c(20)}}});return h({render:k},r)}(),"render-demo-4":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}};function k(s,t){const e=l("d-slider");return d(),m("div",null,[o("div",g,[p(e,{min:s.minValue,max:s.maxValue,disabled:"",modelValue:s.disabledValue,"onUpdate:modelValue":t[0]||(t[0]=i=>s.disabledValue=i)},null,8,["min","max","modelValue"])])])}const{defineComponent:u,ref:c}=f,r=u({setup(){const s=c(5),t=c(50),e=c(2);return{disabledValue:s,maxValue:t,minValue:e}}});return h({render:k},r)}(),"render-demo-5":function(){const{resolveComponent:l,createVNode:p,createElementVNode:o,openBlock:d,createElementBlock:m}=f,g={class:"slider-wrapper",style:{padding:"20px"}},k=o("br",{style:{"margin-bottom":"20px"}},null,-1);function u(t,e){const i=l("d-slider");return d(),m("div",null,[o("div",null,[o("div",g,[p(i,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":e[0]||(e[0]=x=>t.inputValue=x),tipsRenderer:"apples"},null,8,["min","max","modelValue"]),k,p(i,{min:t.minValue,max:t.maxValue,modelValue:t.inputValue,"onUpdate:modelValue":e[1]||(e[1]=x=>t.inputValue=x),tipsRenderer:"null"},null,8,["min","max","modelValue"])])])])}const{defineComponent:c,ref:r}=f,s=c({setup(){const t=r(5),e=r(50),i=r(2);return{inputValue:t,maxValue:e,minValue:i}}});return h({render:u},s)}()}},Q='{"title":"Slider","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Limit Step","slug":"limit-step"},{"level":3,"title":"Bidirectional Binding","slug":"bidirectional-binding"},{"level":3,"title":"Custom Color","slug":"custom-color"},{"level":3,"title":"Input forbidden state","slug":"input-forbidden-state"},{"level":3,"title":"Customized popover content displayed","slug":"customized-popover-content-displayed"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/slider/index.md","lastUpdated":1650439126647}',z=w('<h1 id="slider" tabindex="-1">Slider <a class="header-anchor" href="#slider" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used when you need to select a value from a specific range.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),S=n("h3",{id:"limit-step",tabindex:"-1"},[a("Limit Step "),n("a",{class:"header-anchor",href:"#limit-step","aria-hidden":"true"},"#")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("step"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" step "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
      step`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),j=n("h3",{id:"bidirectional-binding",tabindex:"-1"},[a("Bidirectional Binding "),n("a",{class:"header-anchor",href:"#bidirectional-binding","aria-hidden":"true"},"#")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"showInput"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=n("h3",{id:"custom-color",tabindex:"-1"},[a("Custom Color "),n("a",{class:"header-anchor",href:"#custom-color","aria-hidden":"true"},"#")],-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#e67e22"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),P=n("h3",{id:"input-forbidden-state",tabindex:"-1"},[a("Input forbidden state "),n("a",{class:"header-anchor",href:"#input-forbidden-state","aria-hidden":"true"},"#")],-1),$=n("p",null,"When disabled is set to true, user input is not allowed.",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledValue"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" disabledValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      disabledValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),A=n("h3",{id:"customized-popover-content-displayed",tabindex:"-1"},[a("Customized popover content displayed "),n("a",{class:"header-anchor",href:"#customized-popover-content-displayed","aria-hidden":"true"},"#")],-1),M=n("p",null,"Use the tipsRenderer parameter to transfer the function to customize the content displayed in the popover.",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slider-wrapper"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a("20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a("  "),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"tipsRenderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("apples"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-slider")]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("maxValue"),n("span",{class:"token punctuation"},'"')]),a("  "),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"tipsRenderer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("null"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-slider")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" inputValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" maxValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" minValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      inputValue`),n("span",{class:"token punctuation"},","),a(`
      maxValue`),n("span",{class:"token punctuation"},","),a(`
      minValue`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),F=w('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-slider parameter</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>min</td><td>number</td><td>0</td><td>Optional. Minimum value of the sliding input bar</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>max</td><td>number</td><td>100</td><td>Optional. Maximum value of the sliding input bar</td><td><a href="#basic-usage">Basic Usage</a></td></tr><tr><td>step</td><td>number</td><td>1</td><td>Optional. Step of the sliding input bar. The value must be greater than or equal to 0 and must be divisible by (max-min)</td><td><a href="#limit-step">Limit Step </a></td></tr><tr><td>color</td><td>string</td><td>&#39;&#39;</td><td>Optional. Custom slider color display</td><td><a href="#custom-color">Custom Color</a></td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>Optional. When the value is true, users are not allowed to enter</td><td><a href="#input-forbidden-state">Input forbidden state</a></td></tr><tr><td>showInput</td><td>boolean</td><td>false</td><td>Optional,When the value is false,the input is not displayed</td><td><a href="#bidirectional-binding">Bidirectional Binding</a></td></tr><tr><td>tipsRenderer</td><td>string</td><td></td><td>Optional. This parameter indicates the function for rendering popover content. If &quot;null&quot; is transferred, popover content is not displayed</td><td><a href="#customized-popover-content-displayed">Customized popover content displayed</a></td></tr></tbody></table>',3);function G(l,p,o,d,m,g){const k=_("render-demo-0"),u=_("demo"),c=_("render-demo-1"),r=_("render-demo-2"),s=_("render-demo-3"),t=_("render-demo-4"),e=_("render-demo-5");return U(),N("div",null,[z,V(u,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue"></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(12);
    const minValue = ref(0);
    const maxValue = ref(20);
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:v(()=>[R]),default:v(()=>[V(k)]),_:1}),S,V(u,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue" :step="step"></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(8);
    const minValue = ref(0);
    const maxValue = ref(20);
    const step = ref(4);
    return {
      inputValue,
      maxValue,
      minValue,
      step,
    };
  },
});
<\/script>
`},{highlight:v(()=>[O]),default:v(()=>[V(c)]),_:1}),j,V(u,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" v-model="inputValue" showInput></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(10);
    const minValue = ref(0);
    const maxValue = ref(20);
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:v(()=>[T]),default:v(()=>[V(r)]),_:1}),W,V(u,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider v-model="inputValue" color="#e67e22"></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(20);
    return {
      inputValue,
    };
  },
});
<\/script>
`},{highlight:v(()=>[D]),default:v(()=>[V(s)]),_:1}),P,$,V(u,{sourceCode:`<template>
  <div class="slider-wrapper" style="padding:20px">
    <d-slider :min="minValue" :max="maxValue" disabled v-model="disabledValue"></d-slider>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const disabledValue = ref(5);
    const maxValue = ref(50);
    const minValue = ref(2);
    return {
      disabledValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:v(()=>[L]),default:v(()=>[V(t)]),_:1}),A,M,V(u,{sourceCode:`<template>
  <div>
    <div class="slider-wrapper" style="padding:20px">
      <d-slider  :min="minValue" :max="maxValue" v-model="inputValue" tipsRenderer="apples"></d-slider>
      <br style="margin-bottom: 20px" />
      <d-slider :min="minValue" :max="maxValue"  v-model="inputValue" tipsRenderer="null" ></d-slider>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref(5);
    const maxValue = ref(50);
    const minValue = ref(2);
    return {
      inputValue,
      maxValue,
      minValue,
    };
  },
});
<\/script>
`},{highlight:v(()=>[J]),default:v(()=>[V(e)]),_:1}),F])}var X=E(I,[["render",G]]);export{Q as __pageData,X as default};
