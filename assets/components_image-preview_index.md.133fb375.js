var $=Object.defineProperty;var V=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var P=(o,a,s)=>a in o?$(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,A=(o,a)=>{for(var s in a||(a={}))S.call(a,s)&&P(o,s,a[s]);if(V)for(var s of V(a))U.call(a,s)&&P(o,s,a[s]);return o};import{_ as O,V as E,r as z,c as G,a as C,w as r,b as T,d as n,e as t,o as H}from"./app.bfbf33a4.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,resolveDirective:i,withDirectives:_}=E,k={class:"devui-image-preview-demo"},p=["src"];function d(F,y){const I=i("d-image-preview");return s(),e("div",null,[_((s(),e("div",k,[(s(!0),e(a,null,o(F.imageList,x=>(s(),e("img",{src:x,key:x},null,8,p))),128))])),[[I]])])}const{defineComponent:m,ref:g,reactive:B}=E,w=m({setup(){return{imageList:g(["https://devui.design/components/assets/image1.png","https://devui.design/components/assets/image3.png"])}}});return A({render:d},w)}(),"render-demo-1":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,resolveDirective:i,withDirectives:_,createTextVNode:k,resolveComponent:p,withCtx:d,createVNode:m}=E,g={class:"devui-image-preview-demo"},B=["src"],w=k("\u81EA\u5B9A\u4E49");function F(v,D){const f=p("d-button"),l=i("d-image-preview");return s(),e("div",null,[_((s(),e("div",g,[(s(!0),e(a,null,o(v.imageList,q=>(s(),e("img",{src:q,key:q},null,8,B))),128))])),[[l,{custom:v.image.custom,disableDefault:!0}]]),m(f,{onClick:v.open,class:"btn"},{default:d(()=>[w]),_:1},8,["onClick"])])}const{defineComponent:y,ref:I,reactive:x}=E,Z=y({setup(){const v=["https://devui.design/components/assets/image1.png","https://devui.design/components/assets/image3.png"],D=I(v),f=x({custom:{},imageList:v});function l(){f.custom.open()}return{imageList:D,image:f,open:l}}});return A({render:F},Z)}(),"render-demo-2":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,toDisplayString:i,createTextVNode:_,resolveComponent:k,withCtx:p,createBlock:d,createVNode:m,createElementVNode:g,resolveDirective:B,withDirectives:w}=E,F={class:"devui-image-preview-flex"},y={class:"text"},I={class:"devui-image-preview-flex"},x={class:"text"},Z={class:"devui-image-preview-demo"},v=["src"];function D(c,h){const b=k("d-radio"),L=k("d-radio-group"),N=B("d-image-preview");return s(),e("div",null,[g("div",F,[m(L,{direction:"row",modelValue:c.zIndex,"onUpdate:modelValue":h[0]||(h[0]=u=>c.zIndex=u)},{default:p(()=>[(s(!0),e(a,null,o(c.zIndexList,u=>(s(),d(b,{key:u,value:u},{default:p(()=>[_(i(u),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),g("span",y,"zIndex: "+i(c.zIndex),1)]),g("div",I,[m(L,{direction:"row",modelValue:c.backDropZIndex,"onUpdate:modelValue":h[1]||(h[1]=u=>c.backDropZIndex=u)},{default:p(()=>[(s(!0),e(a,null,o(c.backDropZIndexList,u=>(s(),d(b,{key:u,value:u},{default:p(()=>[_(i(u),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),g("span",x,"backDropZIndex: "+i(c.backDropZIndex),1)]),w((s(),e("div",Z,[(s(!0),e(a,null,o(c.imageList,u=>(s(),e("img",{src:u,key:u},null,8,v))),128))])),[[N,{zIndex:Number(c.zIndex),backDropZIndex:Number(c.backDropZIndex)}]])])}const{defineComponent:f,ref:l,reactive:q}=E,j=f({setup(){const c=l(["https://devui.design/components/assets/image1.png","https://devui.design/components/assets/image3.png"]),h=l(["1000","1050","1100"]),b=l(["900","1040","1000"]),L=l("1050"),N=l("1040");return{imageList:c,zIndexList:h,backDropZIndexList:b,zIndex:L,backDropZIndex:N}}});return A({render:D},j)}()}},un='{"title":"ImagePreview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5F00\u542F\u9884\u89C8\u7A97\u53E3","slug":"\u81EA\u5B9A\u4E49\u5F00\u542F\u9884\u89C8\u7A97\u53E3"},{"level":3,"title":"\u8BBE\u7F6E zIndex","slug":"\u8BBE\u7F6E-zindex"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/image-preview/index.md","lastUpdated":1647843975019}',K=T('<h1 id="imagepreview-\u56FE\u7247\u9884\u89C8" tabindex="-1">ImagePreview \u56FE\u7247\u9884\u89C8 <a class="header-anchor" href="#imagepreview-\u56FE\u7247\u9884\u89C8" aria-hidden="true">#</a></h1><p>\u9884\u89C8\u4E00\u5F20\u6216\u591A\u5F20\u56FE\u7247\u7684\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u6839\u636E\u7528\u6237\u4F20\u5165\u8FDB\u884C\u56FE\u7247\u9884\u89C8\u5C55\u793A\u6216\u5BF9\u5BB9\u5668\u5185\u56FE\u7247\u8FDB\u884C\u9884\u89C8\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),M=n("div",null,"\u4F7F\u7528 v-d-image-preview \u6307\u4EE4\uFF0C\u5BF9\u5BB9\u5668\u5185\u56FE\u7247\u8FDB\u884C\u9884\u89C8\u3002",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-d-image-preview"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-image-preview-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src in imageList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" _imageList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image1.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image3.png'"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" imageList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("_imageList"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      imageList
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u81EA\u5B9A\u4E49\u5F00\u542F\u9884\u89C8\u7A97\u53E3",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5F00\u542F\u9884\u89C8\u7A97\u53E3 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5F00\u542F\u9884\u89C8\u7A97\u53E3","aria-hidden":"true"},"#")],-1),W=n("div",null,"\u4F20\u5165 custom \u53C2\u6570,\u6307\u4EE4\u4F1A\u81EA\u52A8\u6CE8\u5165 open \u65B9\u6CD5\uFF0C\u901A\u8FC7 custom.open \u5F00\u542F\u9884\u89C8\u7A97\u53E3",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-image-preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ custom: image.custom, disableDefault: true }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-image-preview-demo"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src in imageList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" _imageList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image1.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image3.png'"),t(`
    `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" imageList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("_imageList"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" image "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"custom"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"imageList"),n("span",{class:"token operator"},":"),t(` _imageList
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      image`),n("span",{class:"token punctuation"},"."),t("custom"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      imageList`),n("span",{class:"token punctuation"},","),t(`
      image`),n("span",{class:"token punctuation"},","),t(`
      open
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Y=n("h3",{id:"\u8BBE\u7F6E-zindex",tabindex:"-1"},[t("\u8BBE\u7F6E zIndex "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6E-zindex","aria-hidden":"true"},"#")],-1),nn=n("div",null,"\u901A\u8FC7\u8BBE\u7F6E zIndex \u63A7\u5236\u5F39\u51FA\u6548\u679C\u7684\u5C42\u7EA7\uFF0C\u8BBE\u7F6E backDropZIndex \u63A7\u5236\u5F39\u51FA\u5C42\u80CC\u666F\u7684\u5C42\u7EA7\u3002\u53EF\u4EE5\u770B\u5230\u5F53\u8BBE\u7F6E zIndex \u5C0F\u4E8E backDropZIndex \u65F6\uFF0CimagePreview \u4F1A\u663E\u793A\u5728\u80CC\u666F\u4E0B\u65B9\u3002\u53EF\u4EE5\u901A\u8FC7 Esc \u5173\u95ED imagePreview\u3002",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-image-preview-flex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("zIndex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in zIndexList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ item }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("zIndex: {{ zIndex }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-image-preview-flex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("backDropZIndex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in backDropZIndexList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        {{ item }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("backDropZIndex: {{ backDropZIndex }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-image-preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ zIndex: Number(zIndex), backDropZIndex: Number(backDropZIndex) }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-image-preview-demo"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src in imageList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("src"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" imageList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image1.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'https://devui.design/components/assets/image3.png'"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" zIndexList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1000'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1050'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1100'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" backDropZIndexList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'900'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1040'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'1000'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" zIndex "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1050'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" backDropZIndex "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1040'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      imageList`),n("span",{class:"token punctuation"},","),t(`
      zIndexList`),n("span",{class:"token punctuation"},","),t(`
      backDropZIndexList`),n("span",{class:"token punctuation"},","),t(`
      zIndex`),n("span",{class:"token punctuation"},","),t(`
      backDropZIndex
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),sn=T('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">custom</td><td style="text-align:center;"><code>Object</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u4EE4\u4F1A\u81EA\u52A8\u6CE8\u5165 open \u65B9\u6CD5\uFF0C\u901A\u8FC7 custom.open \u5F00\u542F\u9884\u89C8\u7A97\u53E3</td></tr><tr><td style="text-align:center;">disableDefault</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u9ED8\u8BA4\u70B9\u51FB\u89E6\u53D1\u56FE\u7247\u9884\u89C8\u65B9\u5F0F</td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">1050</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u9884\u89C8\u65F6\u56FE\u7247\u7684 z-index \u503C</td></tr><tr><td style="text-align:center;">backDropZIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">1040</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u9884\u89C8\u65F6\u56FE\u7247\u80CC\u666F\u7684 z-index \u503C</td></tr></tbody></table>',2);function an(o,a,s,e,i,_){const k=z("render-demo-0"),p=z("demo"),d=z("render-demo-1"),m=z("render-demo-2");return H(),G("div",null,[K,C(p,{sourceCode:`<template>
  <div v-d-image-preview class="devui-image-preview-demo">
    <img v-for="src in imageList" :src="src" :key="src" />
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const _imageList = [
      'https://devui.design/components/assets/image1.png',
      'https://devui.design/components/assets/image3.png'
    ]
    const imageList = ref(_imageList)
    return {
      imageList
    }
  }
})
<\/script>
`},{description:r(()=>[M]),highlight:r(()=>[Q]),default:r(()=>[C(k)]),_:1}),R,C(p,{sourceCode:`<template>
  <div
    v-d-image-preview="{ custom: image.custom, disableDefault: true }"
    class="devui-image-preview-demo"
  >
    <img v-for="src in imageList" :src="src" :key="src" />
  </div>
  <d-button @click="open" class="btn">\u81EA\u5B9A\u4E49</d-button>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const _imageList = [
      'https://devui.design/components/assets/image1.png',
      'https://devui.design/components/assets/image3.png'
    ]
    const imageList = ref(_imageList)
    const image = reactive({
      custom: {},
      imageList: _imageList
    })
    function open() {
      image.custom.open()
    }
    return {
      imageList,
      image,
      open
    }
  }
})
<\/script>
`},{description:r(()=>[W]),highlight:r(()=>[X]),default:r(()=>[C(d)]),_:1}),Y,C(p,{sourceCode:`<template>
  <div class="devui-image-preview-flex">
    <d-radio-group direction="row" v-model="zIndex">
      <d-radio v-for="item in zIndexList" :key="item" :value="item">
        {{ item }}
      </d-radio>
    </d-radio-group>
    <span class="text">zIndex: {{ zIndex }}</span>
  </div>
  <div class="devui-image-preview-flex">
    <d-radio-group direction="row" v-model="backDropZIndex">
      <d-radio v-for="item in backDropZIndexList" :key="item" :value="item">
        {{ item }}
      </d-radio>
    </d-radio-group>
    <span class="text">backDropZIndex: {{ backDropZIndex }}</span>
  </div>
  <div
    v-d-image-preview="{ zIndex: Number(zIndex), backDropZIndex: Number(backDropZIndex) }"
    class="devui-image-preview-demo"
  >
    <img v-for="src in imageList" :src="src" :key="src" />
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const imageList = ref([
      'https://devui.design/components/assets/image1.png',
      'https://devui.design/components/assets/image3.png'
    ])
    const zIndexList = ref(['1000', '1050', '1100'])
    const backDropZIndexList = ref(['900', '1040', '1000'])
    const zIndex = ref('1050')
    const backDropZIndex = ref('1040')

    return {
      imageList,
      zIndexList,
      backDropZIndexList,
      zIndex,
      backDropZIndex
    }
  }
})
<\/script>
`},{description:r(()=>[nn]),highlight:r(()=>[tn]),default:r(()=>[C(m)]),_:1}),sn])}var cn=O(J,[["render",an]]);export{un as __pageData,cn as default};
