var w=Object.defineProperty;var A=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var D=(p,c,a)=>c in p?w(p,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[c]=a,F=(p,c)=>{for(var a in c||(c={}))b.call(c,a)&&D(p,a,c[a]);if(A)for(var a of A(c))V.call(c,a)&&D(p,a,c[a]);return p};import{_ as q,V as y,r as x,c as S,a as B,w as _,b as I,d as n,e as t,o as T}from"./app.40268ba6.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k}=y;function d(l,s){const u=m("d-radio");return a(),r("div",null,[(a(!0),r(c,null,p(l.list,i=>(a(),k(u,{modelValue:l.choose,"onUpdate:modelValue":s[0]||(s[0]=E=>l.choose=E),key:i,value:i,style:{marginBottom:"20px"}},{default:o(()=>[C(" The Radio value is: "+v(i),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:h,ref:g}=y,f=h({setup(){const l=g(["Item1","Item2","Item3"]);let s=g("Item1");return{list:l,choose:s}}});return F({render:d},f)}(),"render-demo-1":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k}=y;function d(l,s){const u=m("d-radio");return a(),r("div",null,[(a(!0),r(c,null,p(l.list,i=>(a(),k(u,{modelValue:l.choose,"onUpdate:modelValue":s[0]||(s[0]=E=>l.choose=E),key:i,value:i,beforeChange:l.beforeChange,style:{marginBottom:"20px"},onChange:l.valChange},{default:o(()=>[C(" The Radio value is: "+v(i),1)]),_:2},1032,["modelValue","value","beforeChange","onChange"]))),128))])}const{defineComponent:h,ref:g}=y,f=h({setup(){const l=g(["Item1","Item2","Item3"]);let s=g("Item1");return{list:l,choose:s,beforeChange(u){return u!=="Item2"},valChange(u){console.log("current value",u)}}}});return F({render:d},f)}(),"render-demo-2":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k,createVNode:d}=y;function h(s,u){const i=m("d-radio"),E=m("d-radio-group");return a(),r("div",null,[d(E,{direction:"row",modelValue:s.choose,"onUpdate:modelValue":u[0]||(u[0]=e=>s.choose=e),beforeChange:s.beforeChange},{default:o(()=>[(a(!0),r(c,null,p(s.list,e=>(a(),k(i,{key:e,value:e},{default:o(()=>[C(v(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","beforeChange"]),d(E,{modelValue:s.choose2,"onUpdate:modelValue":u[1]||(u[1]=e=>s.choose2=e),direction:"row",disabled:""},{default:o(()=>[(a(!0),r(c,null,p(s.list2,e=>(a(),k(i,{key:e,value:e},{default:o(()=>[C(v(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:g,ref:f}=y,l=g({setup(){const s=f(["Item1","Item2","Item3"]);let u=f("Item1");const i=["Spring","Summer","Autumn","Winter"],E=f("Summer");return{list:s,choose:u,list2:i,choose2:E,beforeChange(e){return e!=="Item2"}}}});return F({render:h},l)}(),"render-demo-3":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k}=y;function d(l,s){const u=m("d-radio");return a(),r("div",null,[(a(!0),r(c,null,p(l.list,i=>(a(),k(u,{modelValue:l.choose,"onUpdate:modelValue":s[0]||(s[0]=E=>l.choose=E),key:i,value:i,style:{marginBottom:"20px"},disabled:""},{default:o(()=>[C(" The Radio value is: "+v(i),1)]),_:2},1032,["modelValue","value"]))),128))])}const{defineComponent:h,ref:g}=y,f=h({setup(){const l=g(["Item1","Item2","Item3"]);let s=g("Item1");return{list:l,choose:s}}});return F({render:d},f)}(),"render-demo-4":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k,createVNode:d}=y;function h(s,u){const i=m("d-radio"),E=m("d-radio-group");return a(),r("div",null,[d(E,{direction:"row",modelValue:s.choose,"onUpdate:modelValue":u[0]||(u[0]=e=>s.choose=e)},{default:o(()=>[(a(!0),r(c,null,p(s.list,e=>(a(),k(i,{key:e,value:e},{default:o(()=>[C(" The Radio value is: "+v(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:g,ref:f}=y,l=g({setup(){const s=f(["Item1","Item2","Item3"]);let u=f("Item1");return{list:s,choose:u}}});return F({render:h},l)}(),"render-demo-5":function(){const{resolveComponent:p,createVNode:c,openBlock:a,createElementBlock:r}=y;function v(k,d){const h=p("d-radio-group");return a(),r("div",null,[c(h,{values:k.list,modelValue:k.choose,"onUpdate:modelValue":d[0]||(d[0]=g=>k.choose=g)},null,8,["values","modelValue"])])}const{defineComponent:C,ref:m}=y,o=C({setup(){const k=["Spring","Summer","Autumn","Winter"],d=m("Summer");return{list:k,choose:d,valChange(h){console.log("current value",h)}}}});return F({render:v},o)}(),"render-demo-6":function(){const{renderList:p,Fragment:c,openBlock:a,createElementBlock:r,toDisplayString:v,createTextVNode:C,resolveComponent:m,withCtx:o,createBlock:k,createVNode:d}=y;function h(s,u){const i=m("d-radio"),E=m("d-radio-group");return a(),r("div",null,[d(E,{direction:"row",modelValue:s.choose,"onUpdate:modelValue":u[0]||(u[0]=e=>s.choose=e)},{default:o(()=>[(a(!0),r(c,null,p(s.list,e=>(a(),k(i,{key:e,value:e},{default:o(()=>[C(" The Radio value is: "+v(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),d(E,{direction:"row",modelValue:s.choose2,"onUpdate:modelValue":u[1]||(u[1]=e=>s.choose2=e)},{default:o(()=>[(a(!0),r(c,null,p(s.list2,e=>(a(),k(i,{key:e.name,value:e.name},{default:o(()=>[C(" The Radio value is: "+v(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:g,ref:f}=y,l=g({setup(){const s=f(["Item1","Item2","Item3"]);let u=f("Item1");const i=[{name:"Item1"},{name:"Item2"},{name:"Item3"}];let E=f("Item3");return{list:s,choose:u,list2:i,choose2:E}}});return F({render:h},l)}()}},sn='{"title":"Radio \u5355\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879","slug":"\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879"},{"level":3,"title":"radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","slug":"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"\u6A2A\u5411\u6392\u5217","slug":"\u6A2A\u5411\u6392\u5217"},{"level":3,"title":"\u7AD6\u5411\u6392\u5217","slug":"\u7AD6\u5411\u6392\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879","slug":"\u81EA\u5B9A\u4E49\u5355\u9009\u9879"},{"level":3,"title":"Radio \u53C2\u6570","slug":"radio-\u53C2\u6570"},{"level":3,"title":"Radio \u4E8B\u4EF6","slug":"radio-\u4E8B\u4EF6"},{"level":3,"title":"RadioGroup \u53C2\u6570","slug":"radiogroup-\u53C2\u6570"},{"level":3,"title":"RadioGroup \u4E8B\u4EF6","slug":"radiogroup-\u4E8B\u4EF6"}],"relativePath":"components/radio/index.md","lastUpdated":1650456022709}',N=I('<h1 id="radio-\u5355\u9009\u6846" tabindex="-1">Radio \u5355\u9009\u6846 <a class="header-anchor" href="#radio-\u5355\u9009\u6846" aria-hidden="true">#</a></h1><p>\u5355\u9009\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u8981\u4ECE\u4E00\u4E2A\u6570\u636E\u96C6\u4E2D\u9009\u62E9\u5355\u4E2A\u9009\u9879\uFF0C\u4E14\u80FD\u5E76\u6392\u67E5\u770B\u6240\u6709\u53EF\u9009\u9879\uFF0C\u9009\u9879\u6570\u91CF\u5728 2~7 \u4E4B\u95F4\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5355\u9009\u6309\u94AE\u3002</p><h3 id="\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" tabindex="-1">\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879 <a class="header-anchor" href="#\u76F8\u4E92\u72EC\u7ACB\u7684\u5355\u9009\u9879" aria-hidden="true">#</a></h3>',5),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[t("radio \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),n("a",{class:"header-anchor",href:"#radio-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),j=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u9879\u7981\u6B62\u8DF3\u8F6C\u3002",-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("valChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"beforeChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" value "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'Item2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"valChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current value'"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C",tabindex:"-1"},[t("radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C "),n("a",{class:"header-anchor",href:"#radio-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u7B2C\u4E8C\u4E2Aradio-group\u7981\u6B62\u8DF3\u8F6C\u3002",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" list2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Spring'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Autumn'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Winter'"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" choose2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      list2`),n("span",{class:"token punctuation"},","),t(`
      choose2`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"beforeChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" value "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'Item2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u7981\u7528",tabindex:"-1"},[t("\u7981\u7528 "),n("a",{class:"header-anchor",href:"#\u7981\u7528","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(`
    `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ marginBottom: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"disabled"),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    The Radio value is: {{ item }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u6A2A\u5411\u6392\u5217",tabindex:"-1"},[t("\u6A2A\u5411\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u6A2A\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=n("h3",{id:"\u7AD6\u5411\u6392\u5217",tabindex:"-1"},[t("\u7AD6\u5411\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u7AD6\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},":values"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Spring'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Autumn'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Winter'"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"valChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'current value'"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u9009\u9879",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5355\u9009\u9879 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5355\u9009\u9879","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("choose2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in list2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      The Radio value is: {{ item.name }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item1'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" list2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item2'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Item3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" choose2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Item3'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      choose`),n("span",{class:"token punctuation"},","),t(`
      list2`),n("span",{class:"token punctuation"},","),t(`
      choose2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=I('<h3 id="radio-\u53C2\u6570" tabindex="-1">Radio \u53C2\u6570 <a class="header-anchor" href="#radio-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u9879\u540D\u79F0</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u5355\u9009\u9879\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u5355\u9009\u9879</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function / Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio \u5207\u6362</td><td style="text-align:left;"><a href="#radio-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr></tbody></table><h3 id="radio-\u4E8B\u4EF6" tabindex="-1">Radio \u4E8B\u4EF6 <a class="header-anchor" href="#radio-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%8D%95%E9%80%89%E9%A1%B9">\u4E92\u76F8\u72EC\u7ACB\u7684\u5355\u9009\u9879</a></td></tr></tbody></table><h3 id="radiogroup-\u53C2\u6570" tabindex="-1">RadioGroup \u53C2\u6570 <a class="header-anchor" href="#radiogroup-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6846\u7684\u540D\u79F0</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u6570\u636E\u7EC4</td><td><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879\u7EC4</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">radio-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u64CD\u4F5C</a></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;"><code>&#39;row&#39;</code> | <code>&#39;column&#39;</code></td><td style="text-align:left;">&#39;column&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6A2A\u5411\u6216\u7EB5\u5411\u6392\u5217</td><td><a href="#%E6%A8%AA%E5%90%91%E6%8E%92%E5%88%97">\u6A2A\u5411\u6392\u5217</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function</code> | <code>Promise</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cradio-group \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 radio-group \u7684\u5207\u6362</td><td><a href="#radio-group-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E6%93%8D%E4%BD%9C">\u56DE\u8C03\u5207\u6362</a></td></tr></tbody></table><h3 id="radiogroup-\u4E8B\u4EF6" tabindex="-1">RadioGroup \u4E8B\u4EF6 <a class="header-anchor" href="#radiogroup-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:left;">\u5355\u9009\u9879\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u503C</td><td style="text-align:left;"><a href="#%E7%AB%96%E5%90%91%E6%8E%92%E5%88%97">\u7AD6\u5411\u6392\u5217</a></td></tr></tbody></table>',8);function nn(p,c,a,r,v,C){const m=x("render-demo-0"),o=x("demo"),k=x("render-demo-1"),d=x("render-demo-2"),h=x("render-demo-3"),g=x("render-demo-4"),f=x("render-demo-5"),l=x("render-demo-6");return T(),S("div",null,[N,B(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :style="{ marginBottom: '20px' }"
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:_(()=>[L]),default:_(()=>[B(m)]),_:1}),U,j,B(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :beforeChange="beforeChange"
    :style="{ marginBottom: '20px' }"
    @change="valChange"
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
      beforeChange(value) {
        return value !== 'Item2'
      },
      valChange(val) {
        console.log('current value', val)
      },
    }
  },
})
<\/script>
`},{highlight:_(()=>[W]),default:_(()=>[B(k)]),_:1}),G,$,B(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose" :beforeChange="beforeChange">
    <d-radio v-for="item in list" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
  <d-radio-group v-model="choose2" direction="row" disabled>
    <d-radio v-for="item in list2" :key="item" :value="item">
      {{ item }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    const list2 = ['Spring', 'Summer', 'Autumn', 'Winter']
    const choose2 = ref('Summer')

    return {
      list,
      choose,
      list2,
      choose2,
      beforeChange(value) {
        return value !== 'Item2'
      },
    }
  },
})
<\/script>
`},{highlight:_(()=>[P]),default:_(()=>[B(d)]),_:1}),z,B(o,{sourceCode:`<template>
  <d-radio
    v-for="item in list"
    v-model="choose"
    :key="item"
    :value="item"
    :style="{ marginBottom: '20px' }"
    disabled
  >
    The Radio value is: {{ item }}
  </d-radio>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:_(()=>[H]),default:_(()=>[B(h)]),_:1}),J,B(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose">
    <d-radio v-for="item in list" :key="item" :value="item">
      The Radio value is: {{ item }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    return {
      list,
      choose,
    }
  },
})
<\/script>
`},{highlight:_(()=>[K]),default:_(()=>[B(g)]),_:1}),M,B(o,{sourceCode:`<template>
  <d-radio-group :values="list" v-model="choose"></d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ['Spring', 'Summer', 'Autumn', 'Winter']
    const choose = ref('Summer')

    return {
      list,
      choose,
      valChange(val) {
        console.log('current value', val)
      },
    }
  },
})
<\/script>
`},{highlight:_(()=>[O]),default:_(()=>[B(f)]),_:1}),Q,X,B(o,{sourceCode:`<template>
  <d-radio-group direction="row" v-model="choose">
    <d-radio v-for="item in list" :key="item" :value="item">
      The Radio value is: {{ item }}
    </d-radio>
  </d-radio-group>
  <d-radio-group direction="row" v-model="choose2">
    <d-radio v-for="item in list2" :key="item.name" :value="item.name">
      The Radio value is: {{ item.name }}
    </d-radio>
  </d-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['Item1', 'Item2', 'Item3'])
    let choose = ref('Item1')

    const list2 = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }]
    let choose2 = ref('Item3')

    return {
      list,
      choose,
      list2,
      choose2,
    }
  },
})
<\/script>
`},{highlight:_(()=>[Y]),default:_(()=>[B(l)]),_:1}),Z])}var en=q(R,[["render",nn]]);export{sn as __pageData,en as default};
