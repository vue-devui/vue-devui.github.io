var A=Object.defineProperty;var B=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(u,s,a)=>s in u?A(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,E=(u,s)=>{for(var a in s||(s={}))x.call(s,a)&&_(u,a,s[a]);if(B)for(var a of B(s))b.call(s,a)&&_(u,a,s[a]);return u};import{_ as S,V as C,r as v,c as N,a as f,w as l,b as g,d as n,e as t,o as V}from"./app.bfbf33a4.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u57FA\u672C\u7528\u6CD5");function e(o,c){const p=s("d-button");return F(),h("div",null,[i(p,{onClick:c[0]||(c[0]=m=>o.showService())},{default:a(()=>[r]),_:1})])}const{defineComponent:k}=C,d=k({setup(){function o(){this.$notificationService.open({content:"\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9"})}return{showService:o}}});return E({render:e},d)}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u6D88\u606F\u6807\u9898");function e(o,c){const p=s("d-button");return F(),h("div",null,[i(p,{onClick:c[0]||(c[0]=m=>o.showService())},{default:a(()=>[r]),_:1})])}const{defineComponent:k}=C,d=k({setup(){function o(){this.$notificationService.open({title:"\u6D88\u606F\u6807\u9898",content:"\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9"})}return{showService:o}}});return E({render:e},d)}(),"render-demo-2":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u6D88\u606F\u7C7B\u578B");function e(o,c){const p=s("d-button");return F(),h("div",null,[i(p,{onClick:c[0]||(c[0]=m=>o.showService())},{default:a(()=>[r]),_:1})])}const{defineComponent:k}=C,d=k({setup(){function o(){this.$notificationService.open({title:"\u6D88\u606F\u6807\u9898",content:"\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9",type:"success"})}return{showService:o}}});return E({render:e},d)}(),"render-demo-3":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u8D85\u65F6\u65F6\u95F4");function e(o,c){const p=s("d-button");return F(),h("div",null,[i(p,{onClick:c[0]||(c[0]=m=>o.showService())},{default:a(()=>[r]),_:1})])}const{defineComponent:k}=C,d=k({setup(){function o(){this.$notificationService.open({title:"\u6D88\u606F\u6807\u9898",content:"\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9",duration:1e3})}return{showService:o}}});return E({render:e},d)}(),"render-demo-4":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u5173\u95ED\u56DE\u8C03");function e(o,c){const p=s("d-button");return F(),h("div",null,[i(p,{onClick:c[0]||(c[0]=m=>o.showService())},{default:a(()=>[r]),_:1})])}const{defineComponent:k}=C,d=k({setup(){function o(){this.$notificationService.open({title:"\u6D88\u606F\u6807\u9898",content:"\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9",onClose:()=>{console.log("notification closed")}})}return{showService:o}}});return E({render:e},d)}(),"render-demo-5":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:F,createElementBlock:h}=C,r=u("\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528"),e=u("\u901A\u77E5\u63D0\u793A\u5185\u5BB9");function k(p,m){const D=s("d-button"),w=s("d-notification");return F(),h("div",null,[i(D,{onClick:p.showComponent},{default:a(()=>[r]),_:1},8,["onClick"]),i(w,{modelValue:p.show,"onUpdate:modelValue":m[0]||(m[0]=y=>p.show=y),title:"\u6807\u9898",type:"info"},{default:a(()=>[e]),_:1},8,["modelValue"])])}const{defineComponent:d,ref:o}=C,c=d({setup(){const p=o(!1);return{show:p,showComponent:()=>{p.value=!0}}}});return E({render:k},c)}()}},sn='{"title":"Notification \u5168\u5C40\u901A\u77E5","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u6D88\u606F\u6807\u9898","slug":"\u6D88\u606F\u6807\u9898"},{"level":3,"title":"\u6D88\u606F\u7C7B\u578B","slug":"\u6D88\u606F\u7C7B\u578B"},{"level":3,"title":"\u8D85\u65F6\u65F6\u95F4","slug":"\u8D85\u65F6\u65F6\u95F4"},{"level":3,"title":"\u5173\u95ED\u56DE\u8C03","slug":"\u5173\u95ED\u56DE\u8C03"},{"level":3,"title":"\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528","slug":"\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"Service \u4F7F\u7528","slug":"service-\u4F7F\u7528"},{"level":3,"title":"d-notification \u53C2\u6570","slug":"d-notification-\u53C2\u6570"},{"level":3,"title":"d-notification \u63D2\u69FD","slug":"d-notification-\u63D2\u69FD"}],"relativePath":"components/notification/index.md","lastUpdated":1647843975025}',T=g('<h1 id="notification-\u5168\u5C40\u901A\u77E5" tabindex="-1">Notification \u5168\u5C40\u901A\u77E5 <a class="header-anchor" href="#notification-\u5168\u5C40\u901A\u77E5" aria-hidden="true">#</a></h1><p>\u5168\u5C40\u4FE1\u606F\u63D0\u793A\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u5411\u7528\u6237\u5168\u5C40\u5C55\u793A\u63D0\u793A\u4FE1\u606F\u65F6\u4F7F\u7528\uFF0C\u663E\u793A\u6570\u79D2\u540E\u6D88\u5931\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),q=n("div",null,"\u63A8\u8350\u4F7F\u7528\u670D\u52A1\u65B9\u5F0F\u8C03\u7528\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u53EA\u5C55\u793A\u6D88\u606F\u5185\u5BB9\u548C\u5173\u95ED\u6309\u94AE\u3002",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showService()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u57FA\u672C\u7528\u6CD5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$notificationService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" showService "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u6D88\u606F\u6807\u9898",tabindex:"-1"},[t("\u6D88\u606F\u6807\u9898 "),n("a",{class:"header-anchor",href:"#\u6D88\u606F\u6807\u9898","aria-hidden":"true"},"#")],-1),P=n("div",null,[t("\u901A\u8FC7"),n("code",null,"title"),t("\u53C2\u6570\u8BBE\u7F6E\u6D88\u606F\u6807\u9898\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u4E0D\u663E\u793A\u6807\u9898\u3002")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showService()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6D88\u606F\u6807\u9898"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$notificationService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D88\u606F\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" showService "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u6D88\u606F\u7C7B\u578B",tabindex:"-1"},[t("\u6D88\u606F\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u6D88\u606F\u7C7B\u578B","aria-hidden":"true"},"#")],-1),H=n("div",null,[t("\u901A\u8FC7"),n("code",null,"type"),t("\u53C2\u6570\u8BBE\u7F6E\u6D88\u606F\u7C7B\u578B\uFF0C\u76EE\u524D\u652F\u6301"),n("code",null,"normal"),t("\u3001"),n("code",null,"info"),t("\u3001"),n("code",null,"success"),t("\u3001"),n("code",null,"warning"),t("\u3001"),n("code",null,"danger"),t("\u4E94\u79CD\u7C7B\u578B\uFF0C\u9ED8\u8BA4"),n("code",null,"normal"),t("\u7C7B\u578B\uFF0C\u4E0D\u663E\u793A\u7C7B\u578B\u56FE\u6807\u3002")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showService()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6D88\u606F\u7C7B\u578B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$notificationService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D88\u606F\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" showService "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u8D85\u65F6\u65F6\u95F4",tabindex:"-1"},[t("\u8D85\u65F6\u65F6\u95F4 "),n("a",{class:"header-anchor",href:"#\u8D85\u65F6\u65F6\u95F4","aria-hidden":"true"},"#")],-1),K=n("div",null,[t("\u901A\u8FC7"),n("code",null,"duration"),t("\u53C2\u6570\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D"),n("code",null,"ms"),t("\uFF0C\u9ED8\u8BA4"),n("code",null,"3000 ms"),t("\u540E\u81EA\u52A8\u5173\u95ED\uFF0C\u8BBE\u7F6E\u4E3A"),n("code",null,"0"),t("\u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u3002")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showService()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u8D85\u65F6\u65F6\u95F4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$notificationService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D88\u606F\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" showService "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=n("h3",{id:"\u5173\u95ED\u56DE\u8C03",tabindex:"-1"},[t("\u5173\u95ED\u56DE\u8C03 "),n("a",{class:"header-anchor",href:"#\u5173\u95ED\u56DE\u8C03","aria-hidden":"true"},"#")],-1),O=n("div",null,[t("\u901A\u8FC7"),n("code",null,"onClose"),t("\u53C2\u6570\u8BBE\u7F6E\u6D88\u606F\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u3002")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showService()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5173\u95ED\u56DE\u8C03"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showService"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$notificationService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D88\u606F\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"onClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'notification closed'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" showService "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),W=n("div",null,[t("\u9664\u670D\u52A1\u65B9\u5F0F\u5916\uFF0C\u8FD8\u63D0\u4F9B\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528\uFF0C\u7EC4\u4EF6\u65B9\u5F0F\u7684\u9ED8\u8BA4\u63D2\u69FD\u4E0E\u670D\u52A1\u65B9\u5F0F\u7684"),n("code",null,"content"),t("\u53C2\u6570\u4F5C\u7528\u4E00\u81F4\uFF0C\u5176\u4ED6\u53C2\u6570\u4E0E\u670D\u52A1\u65B9\u5F0F\u4FDD\u6301\u540C\u540D\u3002")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showComponent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-notification")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6807\u9898"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u901A\u77E5\u63D0\u793A\u5185\u5BB9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-notification")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showComponent"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" show"),n("span",{class:"token punctuation"},","),t(" showComponent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Y=g(`<h3 id="service-\u4F7F\u7528" tabindex="-1">Service \u4F7F\u7528 <a class="header-anchor" href="#service-\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token comment">// \u65B9\u5F0F1\uFF0C\u5C40\u90E8\u5F15\u5165 NotificationService</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NotificationService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@devui/vue-devui/notification&#39;</span><span class="token punctuation">;</span>
NotificationService<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> xxx <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2\uFF0C\u5168\u5C40\u5C5E\u6027</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$notificationService<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> xxx <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="d-notification-\u53C2\u6570" tabindex="-1">d-notification \u53C2\u6570 <a class="header-anchor" href="#d-notification-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C</th></tr></thead><tbody><tr><td>v-model</td><td><code>boolean</code></td><td>&#39;false&#39;</td><td>\u7EC4\u4EF6\u8C03\u7528\u5FC5\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A</td><td><a href="#%E7%BB%84%E4%BB%B6%E6%96%B9%E5%BC%8F%E8%B0%83%E7%94%A8">\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528</a></td></tr><tr><td>content</td><td><code>string</code></td><td>&#39;&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6D88\u606F\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>title</td><td><code>string</code></td><td>&#39;&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6D88\u606F\u6807\u9898</td><td><a href="#%E6%B6%88%E6%81%AF%E6%A0%87%E9%A2%98">\u6D88\u606F\u6807\u9898</a></td></tr><tr><td>type</td><td><code>NotificationType</code></td><td>&#39;normal&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6D88\u606F\u7C7B\u578B</td><td><a href="#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B">\u6D88\u606F\u7C7B\u578B</a></td></tr><tr><td>duration</td><td><code>number</code></td><td>&#39;3000&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4</td><td><a href="#%E8%B6%85%E6%97%B6%E6%97%B6%E9%97%B4">\u8D85\u65F6\u65F6\u95F4</a></td></tr><tr><td>on-close</td><td><code>() =&gt; void</code></td><td>&#39;&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6D88\u606F\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td><a href="#%E5%85%B3%E9%97%AD%E5%9B%9E%E8%B0%83">\u5173\u95ED\u56DE\u8C03</a></td></tr></tbody></table><h3 id="d-notification-\u63D2\u69FD" tabindex="-1">d-notification \u63D2\u69FD <a class="header-anchor" href="#d-notification-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u7EC4\u4EF6\u65B9\u5F0F\u4F7F\u7528\u65F6\u6709\u6548</td></tr></tbody></table>`,6);function Z(u,s,a,i,F,h){const r=v("render-demo-0"),e=v("demo"),k=v("render-demo-1"),d=v("render-demo-2"),o=v("render-demo-3"),c=v("render-demo-4"),p=v("render-demo-5");return V(),N("div",null,[T,f(e,{sourceCode:`<template>
  <d-button @click.native="showService()">\u57FA\u672C\u7528\u6CD5</d-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function showService() {
      this.$notificationService.open({
        content: '\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9',
      });
    }

    return { showService };
  },
});
<\/script>
`},{description:l(()=>[q]),highlight:l(()=>[j]),default:l(()=>[f(r)]),_:1}),U,f(e,{sourceCode:`<template>
  <d-button @click.native="showService()">\u6D88\u606F\u6807\u9898</d-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function showService() {
      this.$notificationService.open({
        title: '\u6D88\u606F\u6807\u9898',
        content: '\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9',
      });
    }

    return { showService };
  },
});
<\/script>
`},{description:l(()=>[P]),highlight:l(()=>[z]),default:l(()=>[f(k)]),_:1}),G,f(e,{sourceCode:`<template>
  <d-button @click.native="showService()">\u6D88\u606F\u7C7B\u578B</d-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function showService() {
      this.$notificationService.open({
        title: '\u6D88\u606F\u6807\u9898',
        content: '\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9',
        type: 'success',
      });
    }

    return { showService };
  },
});
<\/script>
`},{description:l(()=>[H]),highlight:l(()=>[I]),default:l(()=>[f(d)]),_:1}),J,f(e,{sourceCode:`<template>
  <d-button @click.native="showService()">\u8D85\u65F6\u65F6\u95F4</d-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function showService() {
      this.$notificationService.open({
        title: '\u6D88\u606F\u6807\u9898',
        content: '\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9',
        duration: 1000,
      });
    }

    return { showService };
  },
});
<\/script>
`},{description:l(()=>[K]),highlight:l(()=>[L]),default:l(()=>[f(o)]),_:1}),M,f(e,{sourceCode:`<template>
  <d-button @click.native="showService()">\u5173\u95ED\u56DE\u8C03</d-button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function showService() {
      this.$notificationService.open({
        title: '\u6D88\u606F\u6807\u9898',
        content: '\u901A\u77E5\u6846\u6D88\u606F\u5185\u5BB9',
        onClose: () => {
          console.log('notification closed');
        },
      });
    }

    return { showService };
  },
});
<\/script>
`},{description:l(()=>[O]),highlight:l(()=>[Q]),default:l(()=>[f(c)]),_:1}),R,f(e,{sourceCode:`<template>
  <d-button @click="showComponent">\u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528</d-button>
  <d-notification v-model="show" title="\u6807\u9898" type="info">\u901A\u77E5\u63D0\u793A\u5185\u5BB9</d-notification>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const show = ref(false);
    const showComponent = () => {
      show.value = true;
    };

    return { show, showComponent };
  },
});
<\/script>
`},{description:l(()=>[W]),highlight:l(()=>[X]),default:l(()=>[f(p)]),_:1}),Y])}var an=S($,[["render",Z]]);export{sn as __pageData,an as default};
