var O=Object.defineProperty;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var V=(l,s,a)=>s in l?O(l,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[s]=a,B=(l,s)=>{for(var a in s||(s={}))N.call(s,a)&&V(l,a,s[a]);if(x)for(var a of x(s))$.call(s,a)&&V(l,a,s[a]);return l};import{_ as U,V as A,r as b,c as S,a as h,w as m,b as D,d as n,e as t,o as z}from"./app.0c19a03b.js";const j={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:s,createTextVNode:a,createElementVNode:E,openBlock:y,createElementBlock:F}=A,g=a(" Small "),d=a(" Middle "),f=a(" Large "),p=a(" Underlined ");function i(o,k){const C=l("d-select");return y(),F("div",null,[E("div",null,[g,s(C,{modelValue:o.value1,"onUpdate:modelValue":k[0]||(k[0]=v=>o.value1=v),options:o.options,size:"sm"},null,8,["modelValue","options"]),d,s(C,{modelValue:o.value2,"onUpdate:modelValue":k[1]||(k[1]=v=>o.value2=v),options:o.options},null,8,["modelValue","options"]),f,s(C,{modelValue:o.value3,"onUpdate:modelValue":k[2]||(k[2]=v=>o.value3=v),options:o.options,size:"lg"},null,8,["modelValue","options"]),p,s(C,{modelValue:o.value4,"onUpdate:modelValue":k[3]||(k[3]=v=>o.value4=v),options:o.options,size:"lg",overview:"underlined"},null,8,["modelValue","options"])])])}const{defineComponent:c,reactive:e,ref:u}=A,r=c({setup(){const o=u(""),k=u(""),C=u(""),v=u(""),_=new Array(6).fill(0).map((Z,q)=>`Option ${q+1}`),w=e(_);return{value1:o,value2:k,value3:C,value4:v,options:w}}});return B({render:i},r)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:s,openBlock:a,createElementBlock:E}=A;function y(p,i){const c=l("d-select");return a(),E("div",null,[s(c,{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=e=>p.value=e),options:p.options,multiple:!0},null,8,["modelValue","options"])])}const{defineComponent:F,reactive:g,ref:d}=A,f=F({setup(){const p=d([]),i=new Array(6).fill(0).map((e,u)=>`Option ${u+1}`),c=g(i);return{value:p,options:c}}});return B({render:y},f)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:s,createElementVNode:a,openBlock:E,createElementBlock:y}=A,F=a("br",null,null,-1),g=a("br",null,null,-1);function d(e,u){const r=l("d-select");return E(),y("div",null,[s(r,{modelValue:e.value1,"onUpdate:modelValue":u[0]||(u[0]=o=>e.value1=o),options:e.options1,disabled:!0},null,8,["modelValue","options"]),F,s(r,{modelValue:e.value2,"onUpdate:modelValue":u[1]||(u[1]=o=>e.value2=o),options:e.options2,"option-disabled-key":"disabled"},null,8,["modelValue","options"]),g,s(r,{modelValue:e.value3,"onUpdate:modelValue":u[2]||(u[2]=o=>e.value3=o),options:e.options3,multiple:!0,"option-disabled-key":"notAllow"},null,8,["modelValue","options"])])}const{defineComponent:f,reactive:p,ref:i}=A,c=f({setup(){const e=i(""),u=i(""),r=i([]),o=new Array(6).fill(0).map((_,w)=>`Option ${w+1}`),k=p(o),C=p([{name:"Option 1",value:0},{name:"Option 2",value:1},{name:"Option 3",value:2,disabled:!0}]),v=p([{name:"Option 1",value:0},{name:"Option 2",value:1,notAllow:!0},{name:"Option 3",value:2}]);return{value1:e,value2:u,value3:r,options1:k,options2:C,options3:v}}});return B({render:d},c)}(),"render-demo-3":function(){const{resolveComponent:l,createVNode:s,createElementVNode:a,openBlock:E,createElementBlock:y}=A,F=a("br",null,null,-1);function g(c,e){const u=l("d-select");return E(),y("div",null,[s(u,{modelValue:c.value1,"onUpdate:modelValue":e[0]||(e[0]=r=>c.value1=r),options:c.options,"allow-clear":!0},null,8,["modelValue","options"]),F,s(u,{modelValue:c.value2,"onUpdate:modelValue":e[1]||(e[1]=r=>c.value2=r),options:c.options,multiple:!0,"allow-clear":!0},null,8,["modelValue","options"])])}const{defineComponent:d,reactive:f,ref:p}=A,i=d({setup(){const c=p(""),e=p([]),u=new Array(6).fill(0).map((o,k)=>`Option ${k+1}`),r=f(u);return{value1:c,value2:e,options:r}}});return B({render:g},i)}()}},sn='{"title":"Select \u4E0B\u62C9\u9009\u62E9\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u9009","slug":"\u591A\u9009"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"\u53EF\u6E05\u7A7A","slug":"\u53EF\u6E05\u7A7A"},{"level":3,"title":"Select \u53C2\u6570","slug":"select-\u53C2\u6570"},{"level":3,"title":"Select \u4E8B\u4EF6","slug":"select-\u4E8B\u4EF6"}],"relativePath":"components/select/index.md","lastUpdated":1650459252953}',L=D('<h1 id="select-\u4E0B\u62C9\u9009\u62E9\u6846" tabindex="-1">Select \u4E0B\u62C9\u9009\u62E9\u6846 <a class="header-anchor" href="#select-\u4E0B\u62C9\u9009\u62E9\u6846" aria-hidden="true">#</a></h1><p>\u4E0B\u62C9\u9009\u62E9\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u53EF\u4EE5\u4ECE\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u9879\u6216\u51E0\u9879\uFF1B\u4EC5\u652F\u6301\u7528\u6237\u5728\u4E0B\u62C9\u9009\u9879\u4E2D\u9009\u62E9\u548C\u641C\u7D22\u7CFB\u7EDF\u63D0\u4F9B\u7684\u9009\u9879\uFF0C\u4E0D\u652F\u6301\u8F93\u5165\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),M=n("div",null,[t("\u901A\u8FC7"),n("code",null,"size"),t("\uFF1A"),n("code",null,"sm"),t("\uFF0C"),n("code",null,"md(\u9ED8\u8BA4)"),t("\uFF0C"),n("code",null,"lg"),t("\u6765\u8BBE\u7F6E"),n("code",null,"Select"),t("\u5927\u5C0F\uFF0C\u901A\u8FC7"),n("code",null,"overview"),t("\uFF1A"),n("code",null,"underlined"),t("\u8BBE\u7F6E\u53EA\u6709\u4E0B\u8FB9\u6846\u6837\u5F0F")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    Small
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`

    Middle
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`

    Large
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`

    Underlined
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"overview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("underlined"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
      value4`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h3",{id:"\u591A\u9009",tabindex:"-1"},[t("\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u591A\u9009","aria-hidden":"true"},"#")],-1),G=n("div",null,[t("\u901A\u8FC7"),n("code",null,"multiple"),t("\uFF1A"),n("code",null,"true"),t("\u6765\u5F00\u542F\u591A\u9009")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"\u7981\u7528",tabindex:"-1"},[t("\u7981\u7528 "),n("a",{class:"header-anchor",href:"#\u7981\u7528","aria-hidden":"true"},"#")],-1),J=n("div",null,[t("\u901A\u8FC7"),n("code",null,"disabled"),t("\uFF1A"),n("code",null,"true"),t("\u6765\u7981\u7528"),n("code",null,"Select"),t("\uFF0C\u901A\u8FC7"),n("code",null,"option-disabled-key"),t("\u6765\u8BBE\u7F6E\u5355\u4E2A\u9009\u9879\u7981\u7528\uFF0C\u6BD4\u5982\u8BBE\u7F6E"),n("code",null,"disabled"),t("\u5B57\u6BB5\uFF0C\u5219\u5BF9\u8C61\u4E0A disabled \u4E3A"),n("code",null,"true"),t("\u65F6\u4E0D\u53EF\u9009\u62E9")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("notAllow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"notAllow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
      options3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u53EF\u6E05\u7A7A",tabindex:"-1"},[t("\u53EF\u6E05\u7A7A "),n("a",{class:"header-anchor",href:"#\u53EF\u6E05\u7A7A","aria-hidden":"true"},"#")],-1),R=n("div",null,[t("\u901A\u8FC7"),n("code",null,"allow-clear"),t("\uFF1A"),n("code",null,"true"),t("\u6765\u8BBE\u7F6E"),n("code",null,"Select"),t("\u53EF\u6E05\u7A7A")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=D('<h3 id="select-\u53C2\u6570" tabindex="-1">Select \u53C2\u6570 <a class="header-anchor" href="#select-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009, \u548C searchFn \u4E92\u65A5\uFF0C\u4E24\u8005\u5FC5\u987B\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u3002</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009,\u662F\u5426\u652F\u6301\u591A\u9009</td><td><a href="#%E5%A4%9A%E9%80%89">\u591A\u9009</a></td></tr><tr><td style="text-align:left;">readonly</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009,\u662F\u5426\u53EF\u4EE5\u8F93\u5165</td><td></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009,\u4E0B\u62C9\u9009\u6846\u5C3A\u5BF8,\u6709\u4E09\u79CD\u9009\u62E9&#39;lg&#39;,&#39;md&#39;,&#39;sm&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009,\u662F\u5426\u7981\u7528\u4E0B\u62C9\u6846</td><td><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u8BF7\u9009\u62E9&#39;</td><td style="text-align:left;">\u53EF\u9009,\u8F93\u5165\u6846\u7684 placeholder</td><td></td></tr><tr><td style="text-align:left;">overview</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;border&#39;</td><td style="text-align:left;">\u53EF\u9009,\u51B3\u5B9A\u9009\u62E9\u6846\u6837\u5F0F\u663E\u793A,\u9ED8\u8BA4\u6709\u8FB9\u6846&#39;border&#39;,&#39;underlined&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">option-disabled-key</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009,\u7981\u7528\u5355\u4E2A\u9009\u9879;<br>\u5F53\u4F20\u5165\u8D44\u6E90 options \u7C7B\u578B\u4E3A Object,\u6BD4\u5982\u8BBE\u7F6E\u4E3A&#39;disabled&#39;,<br>\u5219\u5F53\u5BF9\u8C61\u7684 disabled \u5C5E\u6027\u4E3A true \u65F6,\u8BE5\u9009\u9879\u5C06\u7981\u7528;<br>\u5F53\u8BBE\u7F6E\u4E3A&#39;&#39;\u65F6\u4E0D\u7981\u7528\u5355\u4E2A\u9009\u9879</td><td><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">allow-clear</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u5141\u8BB8\u6E05\u7A7A\u9009\u503C\uFF0C\u4EC5\u5355\u9009\u573A\u666F\u9002\u7528</td><td><a href="#%E5%8F%AF%E6%B8%85%E7%A9%BA">\u53EF\u6E05\u7A7A</a></td></tr></tbody></table><h3 id="select-\u4E8B\u4EF6" tabindex="-1">Select \u4E8B\u4EF6 <a class="header-anchor" href="#select-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">value-change</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u53EF\u9009,\u8F93\u51FA\u51FD\u6570,\u5F53\u9009\u4E2D\u67D0\u4E2A\u9009\u9879\u540E,\u5C06\u4F1A\u8C03\u7528\u6B64\u51FD\u6570,\u53C2\u6570\u4E3A\u5F53\u524D\u9009\u62E9\u9879\u7684\u503C</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">toggle-change</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u53EF\u9009,\u8F93\u51FA\u51FD\u6570,\u4E0B\u62C9\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr></tbody></table>',4);function Y(l,s,a,E,y,F){const g=b("render-demo-0"),d=b("demo"),f=b("render-demo-1"),p=b("render-demo-2"),i=b("render-demo-3");return z(),S("div",null,[L,h(d,{sourceCode:`<template>
  <div>
    Small
    <d-select v-model="value1" :options="options" size="sm"></d-select>

    Middle
    <d-select v-model="value2" :options="options"></d-select>

    Large
    <d-select v-model="value3" :options="options" size="lg"></d-select>

    Underlined
    <d-select v-model="value4" :options="options" size="lg" overview="underlined"></d-select>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);

    return {
      value1,
      value2,
      value3,
      value4,
      options,
    };
  },
});
<\/script>
`},{description:m(()=>[M]),highlight:m(()=>[T]),default:m(()=>[h(g)]),_:1}),P,h(d,{sourceCode:`<template>
  <d-select v-model="value" :options="options" :multiple="true" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);

    return {
      value,
      options,
    };
  },
});
<\/script>
`},{description:m(()=>[G]),highlight:m(()=>[H]),default:m(()=>[h(f)]),_:1}),I,h(d,{sourceCode:`<template>
  <d-select v-model="value1" :options="options1" :disabled="true" />
  <br />
  <d-select v-model="value2" :options="options2" option-disabled-key="disabled" />
  <br />
  <d-select v-model="value3" :options="options3" :multiple="true" option-disabled-key="notAllow" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options1 = reactive(items);
    const options2 = reactive([
      {
        name: 'Option 1',
        value: 0,
      },
      {
        name: 'Option 2',
        value: 1,
      },
      {
        name: 'Option 3',
        value: 2,
        disabled: true,
      },
    ]);
    const options3 = reactive([
      {
        name: 'Option 1',
        value: 0,
      },
      {
        name: 'Option 2',
        value: 1,
        notAllow: true,
      },
      {
        name: 'Option 3',
        value: 2,
      },
    ]);

    return {
      value1,
      value2,
      value3,
      options1,
      options2,
      options3,
    };
  },
});
<\/script>
`},{description:m(()=>[J]),highlight:m(()=>[K]),default:m(()=>[h(p)]),_:1}),Q,h(d,{sourceCode:`<template>
  <d-select v-model="value1" :options="options" :allow-clear="true" />
  <br />
  <d-select v-model="value2" :options="options" :multiple="true" :allow-clear="true" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);

    return {
      value1,
      value2,
      options,
    };
  },
});
<\/script>
`},{description:m(()=>[R]),highlight:m(()=>[W]),default:m(()=>[h(i)]),_:1}),X])}var an=U(j,[["render",Y]]);export{sn as __pageData,an as default};
