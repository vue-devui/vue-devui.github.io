var M=Object.defineProperty;var P=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var R=(a,e,s)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,T=(a,e)=>{for(var s in e||(e={}))$.call(e,s)&&R(a,s,e[s]);if(P)for(var s of P(e))z.call(e,s)&&R(a,s,e[s]);return a};import{_ as j,V as x,r as S,c as O,a as F,w,b as I,d as n,e as t,o as Y}from"./app.74859d28.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:e,withCtx:s,createVNode:y,createElementVNode:o,renderList:l,Fragment:d,openBlock:p,createElementBlock:i,toDisplayString:f,resolveDirective:v,withDirectives:_}=x,C=a("click me!"),E={backdrop:!0,positionType:"relative",view:{top:"50%",left:"50%"},zIndex:100,style:{width:"100%","text-align":"left"}},A=o("thead",null,[o("tr",null,[o("th",null,"\u5E8F\u53F7"),o("th",null,"\u59D3\u540D"),o("th",null,"\u961F\u4F0D"),o("th",null,"\u64CD\u4F5C")])],-1),r=o("td",null,"\u5F20\u5BB6\u9F50",-1),g=o("td",null,"\u8DF3\u6C34",-1),m=o("td",null,"\u8DF3\u6C34\u961F",-1);function k(u,D){const L=e("d-button"),q=v("dLoading");return p(),i("div",null,[y(L,{onClick:u.fetchTableData,style:{"margin-top":"8px"}},{default:s(()=>[C]),_:1},8,["onClick"]),_((p(),i("table",E,[A,o("tbody",null,[(p(!0),i(d,null,l(u.datas,(N,V)=>(p(),i("tr",{key:V},[o("td",null,f(V),1),r,g,m]))),128))])])),[[q,u.loadingStatus]])])}const{defineComponent:h,ref:c,reactive:B}=x,b=h({setup(){const u=c(!1),D=B([]);return{datas:D,loadingStatus:u,fetchTableData:()=>{u.value=!0,setTimeout(()=>{D.push(1,2,3),u.value=!1},2e3)}}}});return T({render:k},b)}(),"render-demo-1":function(){const{createTextVNode:a,resolveComponent:e,withCtx:s,createVNode:y,resolveDirective:o,openBlock:l,createElementBlock:d,withDirectives:p}=x,i=a("click me!"),f={message:"One moment please...",style:{"margin-top":"20px",width:"100%",height:"80px",padding:"10px"}},_=[a(" loading will show here2 ")];function C(g,m){const k=e("d-button"),h=o("dLoading");return l(),d("div",null,[y(k,{onClick:g.fetchMutiplePromise,style:{"margin-top":"8px"}},{default:s(()=>[i]),_:1},8,["onClick"]),p((l(),d("div",f,_)),[[h,g.promises]])])}const{defineComponent:E,ref:A}=x,r=E({setup(){const g=A([]);return{promises:g,fetchMutiplePromise:()=>{let k=[];for(let h=0;h<3;h++)k.push(new Promise((c,B)=>{setTimeout(()=>{c(h)},(h+1)*1e3)}).then(c=>c));g.value=k}}}});return T({render:C},r)}(),"render-demo-2":function(){const{createTextVNode:a,resolveComponent:e,withCtx:s,createVNode:y,resolveDirective:o,openBlock:l,createBlock:d,withDirectives:p,createElementBlock:i}=x,f=a(" Loading Style 1 "),v=a(" Loading Style 2 "),_=a(" Loading Style 3 "),C=["loadingTemplateRef"],A=[a(" loading will show here1 ")];function r(c,B){const b=e("d-button"),u=o("dLoading");return l(),i("div",null,[y(b,{onClick:c.showLoading1,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:s(()=>[f]),_:1},8,["onClick"]),p((l(),d(b,{onClick:c.showLoading2,loadingTemplateRef:c.temp2,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:s(()=>[v]),_:1},8,["onClick","loadingTemplateRef"])),[[u,c.isShowLoading2]]),p((l(),d(b,{variant:"text",loadingTemplateRef:c.temp3,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:s(()=>[_]),_:1},8,["loadingTemplateRef"])),[[u,!0]]),p((l(),i("div",{style:{height:"80px","line-height":"80px"},loadingTemplateRef:c.temp1},A,8,C)),[[u,c.isShowLoading1]])])}const{defineComponent:g,ref:m,h:k}=x,h=g({setup(){const c=k("div",{className:"devui-infinity-loading"},k("i",{className:"icon-refresh"})),B=k("div",{className:"devui-circle-loading-container-2"},k("i",{className:"icon-refresh"})),b=k("div",{className:"devui-circle-loading-container-3"},k("i",{className:"icon-refresh"})),u=m(!1),D=()=>{u.value=new Promise(N=>{setTimeout(()=>{N(!0)},1e3)})},L=m(!1);return{temp1:c,temp2:B,temp3:b,isShowLoading1:u,isShowLoading2:L,showLoading1:D,showLoading2:()=>{L.value=new Promise(N=>{setTimeout(()=>{N(!0)},1e3)})}}}});return T({render:r},h)}(),"render-demo-3":function(){const{createTextVNode:a,resolveComponent:e,withCtx:s,createVNode:y,openBlock:o,createBlock:l,createCommentVNode:d,createElementVNode:p,createElementBlock:i}=x,f=a(" click me show full screen loading! "),v=a(" click me show loading in target! "),_=a(" click me close loading in target! "),C=p("div",{id:"me",style:{"margin-top":"20px",width:"100%",height:"60px",padding:"10px"}}," loading will show here3 ",-1);function E(r,g){const m=e("d-button");return o(),i("div",null,[y(m,{onClick:r.serviceToBody,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:s(()=>[f]),_:1},8,["onClick"]),r.isShow?(o(),l(m,{key:0,onClick:r.openTargetLoading,style:{"margin-right":"8px",display:"inline-block",width:"200px"}},{default:s(()=>[v]),_:1},8,["onClick"])):(o(),l(m,{key:1,onClick:r.closeTargetLoading,style:{"margin-right":"8px",display:"inline-block",width:"200px"}},{default:s(()=>[_]),_:1},8,["onClick"])),C])}return T({render:E},{data(){return{isShow:!0,resultTarget:null}},methods:{serviceToBody(){const r=this.$loadingService.open();setTimeout(()=>{r.loadingInstance.close()},2e3)},openTargetLoading(){this.resultTarget=this.$loadingService.open({target:document.querySelector("#me"),message:"One moment please...",positionType:"relative",zIndex:1}),this.isShow=!1},closeTargetLoading(){this.resultTarget.loadingInstance.close(),this.isShow=!0}}})}()}},cn='{"title":"Loading \u52A0\u8F7D\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A promise","slug":"\u591A-promise"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","slug":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"}],"relativePath":"components/loading/index.md","lastUpdated":1649728324745}',G=I('<h1 id="loading-\u52A0\u8F7D\u63D0\u793A" tabindex="-1">Loading \u52A0\u8F7D\u63D0\u793A <a class="header-anchor" href="#loading-\u52A0\u8F7D\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u63D0\u793A\u7528\u6237\u9875\u9762\u6B63\u5728\u6267\u884C\u6307\u4EE4\uFF0C\u9700\u8981\u7B49\u5F85\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u6267\u884C\u6307\u4EE4\u65F6\u95F4\u8F83\u957F\uFF08\u9700\u8981\u6570\u79D2\u4EE5\u4E0A\uFF09\u65F6\uFF0C\u5411\u7528\u6237\u5C55\u793A\u6B63\u5728\u6267\u884C\u7684\u72B6\u6001\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5C55\u793A\u52A0\u8F7D\u8868\u683C\u6570\u636E\u7684\u573A\u666F\u4E2D\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p>',6),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fetchTableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("table")]),t(`
    `),n("span",{class:"token attr-name"},"v-dLoading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadingStatus"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":backdrop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"positionType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("relative"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":view"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ top: "),n("span",{class:"token punctuation"},"'"),t("50%"),n("span",{class:"token punctuation"},"'"),t(", left: "),n("span",{class:"token punctuation"},"'"),t("50%"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":zIndex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u5E8F\u53F7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u961F\u4F0D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u64CD\u4F5C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(val, index) in datas"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("{{ index }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u5F20\u5BB6\u9F50"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u8DF3\u6C34"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u8DF3\u6C34\u961F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("table")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loadingStatus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" datas "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetchTableData"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loadingStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        datas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(`
        loadingStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      datas`),n("span",{class:"token punctuation"},","),t(`
      loadingStatus`),n("span",{class:"token punctuation"},","),t(`
      fetchTableData
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u591A-promise",tabindex:"-1"},[t("\u591A promise "),n("a",{class:"header-anchor",href:"#\u591A-promise","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u652F\u6301\u591A\u4E2A promise\u3002",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fetchMutiplePromise"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token attr-name"},"v-dLoading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("promises"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"message"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("One moment please..."),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 80px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here2
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" promises "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetchMutiplePromise"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("res"),n("span",{class:"token punctuation"},","),t(" rej")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(` res
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      promises`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` list
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      promises`),n("span",{class:"token punctuation"},","),t(`
      fetchMutiplePromise
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u901A\u8FC7 templateRef \u81EA\u5B9A\u4E49 loading \u6837\u5F0F\u3002",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLoading1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 1
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-dLoading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowLoading2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLoading2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loadingTemplateRef"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 2
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-dLoading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loadingTemplateRef"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 3
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 80px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 80px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"v-dLoading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowLoading1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loadingTemplateRef"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp1"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here1
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" temp1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-infinity-loading'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" temp2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-circle-loading-container-2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" temp3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-circle-loading-container-3'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" isShowLoading1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showLoading1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isShowLoading1`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" isShowLoading2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showLoading2"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isShowLoading2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      temp1`),n("span",{class:"token punctuation"},","),t(`
      temp2`),n("span",{class:"token punctuation"},","),t(`
      temp3`),n("span",{class:"token punctuation"},","),t(`
      isShowLoading1`),n("span",{class:"token punctuation"},","),t(`
      isShowLoading2`),n("span",{class:"token punctuation"},","),t(`
      showLoading1`),n("span",{class:"token punctuation"},","),t(`
      showLoading2
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".devui-infinity-loading"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},","),t(" -50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".devui-circle-loading-container-2"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 5px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".devui-circle-loading-container-3"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" -20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u670D\u52A1\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),tn=n("p",null,"\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u5168\u5C4F\u52A0\u8F7D loading \u7EC4\u4EF6\u6216\u8005\u5728\u6307\u5B9A\u5BBF\u4E3B\u4E0A\u52A0\u8F7D loading \u7EC4\u4EF6\u3002",-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serviceToBody"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    click me show full screen loading!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShow"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openTargetLoading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    click me show loading in target!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-else"),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closeTargetLoading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    click me close loading in target!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("me"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here3
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"isShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"resultTarget"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"serviceToBody"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$loadingService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        results`),n("span",{class:"token punctuation"},"."),t("loadingInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"openTargetLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("resultTarget "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$loadingService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#me'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'One moment please...'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"positionType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'relative'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("isShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"closeTargetLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("resultTarget"),n("span",{class:"token punctuation"},"."),t("loadingInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("isShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=I('<h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>dLoading \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>v-dLoading</td><td><code>Promise&lt;any&gt; | Array&lt;Promise&lt;any&gt;&gt; | Boolean | undefined</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u6307\u4EE4\u65B9\u5F0F\uFF0C\u63A7\u5236 loading \u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>target</td><td><code>element</code></td><td>document.body</td><td>\u53EF\u9009\uFF0C\u670D\u52A1\u65B9\u5F0F\uFF0CLoading \u9700\u8981\u8986\u76D6\u7684 DOM \u8282\u70B9</td><td><a href="#%E6%9C%8D%E5%8A%A1%E6%96%B9%E5%BC%8F%E8%B0%83%E7%94%A8">\u670D\u52A1\u65B9\u5F0F\u8C03\u7528</a></td></tr><tr><td>message</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0Cloading \u65F6\u7684\u63D0\u793A\u4FE1\u606F</td><td><a href="#%E5%A4%9Apromise">\u591A promise</a></td></tr><tr><td>loadingTemplateRef</td><td><code>VNode</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49 loading \u6A21\u677F</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td>backdrop</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0Cloading \u65F6\u662F\u5426\u663E\u793A\u906E\u7F69</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>positionType</td><td><code>string</code></td><td>relative</td><td>\u53EF\u9009\uFF0C\u6307\u5B9A<code>dLoading</code>\u5BBF\u4E3B\u5143\u7D20\u7684\u5B9A\u4F4D\u7C7B\u578B,\u53D6\u503C\u4E0E css position \u5C5E\u6027\u4E00\u81F4\u3002</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>view</td><td><code>{top?:string,left?:string} </code></td><td><code>{top: &#39;50%&#39;, left: &#39;50%&#39;}</code></td><td>\u53EF\u9009\uFF0C\u8C03\u6574 loading \u7684\u663E\u793A\u4F4D\u7F6E\uFF0C\u76F8\u5BF9\u4E8E\u5BBF\u4E3B\u5143\u7D20\u7684\u9876\u90E8\u8DDD\u79BB\u4E0E\u5DE6\u4FA7\u8DDD\u79BB</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>zIndex</td><td><code>number</code></td><td>--</td><td>\u53EF\u9009\uFF0Cloading \u52A0\u8F7D\u63D0\u793A\u7684 z-index \u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',3);function on(a,e,s,y,o,l){const d=S("render-demo-0"),p=S("demo"),i=S("render-demo-1"),f=S("render-demo-2"),v=S("render-demo-3");return Y(),O("div",null,[G,F(p,{sourceCode:`<template>
  <d-button @click="fetchTableData" style="margin-top: 8px">click me!</d-button>
  <table
    v-dLoading="loadingStatus"
    :backdrop="true"
    positionType="relative"
    :view="{ top: '50%', left: '50%' }"
    :zIndex="100"
    style="width: 100%; text-align: left;"
  >
    <thead>
      <tr>
        <th>\u5E8F\u53F7</th>
        <th>\u59D3\u540D</th>
        <th>\u961F\u4F0D</th>
        <th>\u64CD\u4F5C</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, index) in datas" :key="index">
        <td>{{ index }}</td>
        <td>\u5F20\u5BB6\u9F50</td>
        <td>\u8DF3\u6C34</td>
        <td>\u8DF3\u6C34\u961F</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const loadingStatus = ref(false)
    const datas = reactive([])
    const fetchTableData = () => {
      loadingStatus.value = true

      setTimeout(() => {
        datas.push(1, 2, 3)
        loadingStatus.value = false
      }, 2000)
    }

    return {
      datas,
      loadingStatus,
      fetchTableData
    }
  }
})
<\/script>
`},{highlight:w(()=>[H]),default:w(()=>[F(d)]),_:1}),J,K,F(p,{sourceCode:`<template>
  <d-button @click="fetchMutiplePromise" style="margin-top: 8px">click me!</d-button>

  <div
    v-dLoading="promises"
    message="One moment please..."
    style="margin-top: 20px; width: 100%; height: 80px; padding: 10px;"
  >
    loading will show here2
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const promises = ref([])
    const fetchMutiplePromise = () => {
      let list = []
      for (let i = 0; i < 3; i++) {
        list.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(i)
            }, (i + 1) * 1000)
          }).then((res) => {
            return res
          })
        )
      }
      promises.value = list
    }

    return {
      promises,
      fetchMutiplePromise
    }
  }
})
<\/script>
`},{highlight:w(()=>[Q]),default:w(()=>[F(i)]),_:1}),W,X,F(p,{sourceCode:`<template>
  <d-button @click="showLoading1" style="margin-right: 8px; display: inline-block; width: 220px;">
    Loading Style 1
  </d-button>

  <d-button
    v-dLoading="isShowLoading2"
    @click="showLoading2"
    :loadingTemplateRef="temp2"
    style="margin-right: 8px; display: inline-block; width: 220px;"
  >
    Loading Style 2
  </d-button>

  <d-button
    v-dLoading="true"
    variant="text"
    :loadingTemplateRef="temp3"
    style="margin-right: 8px; display: inline-block; width: 220px;"
  >
    Loading Style 3
  </d-button>

  <div
    style="height: 80px; line-height: 80px"
    v-dLoading="isShowLoading1"
    :loadingTemplateRef="temp1"
  >
    loading will show here1
  </div>
</template>

<script>
import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  setup() {
    const temp1 = h(
      'div',
      {
        className: 'devui-infinity-loading'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const temp2 = h(
      'div',
      {
        className: 'devui-circle-loading-container-2'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const temp3 = h(
      'div',
      {
        className: 'devui-circle-loading-container-3'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const isShowLoading1 = ref(false)
    const showLoading1 = () => {
      isShowLoading1.value = new Promise((res) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    const isShowLoading2 = ref(false)
    const showLoading2 = () => {
      isShowLoading2.value = new Promise((res) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    return {
      temp1,
      temp2,
      temp3,
      isShowLoading1,
      isShowLoading2,
      showLoading1,
      showLoading2
    }
  }
})
<\/script>

<style>
.devui-infinity-loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.devui-circle-loading-container-2 {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.devui-circle-loading-container-3 {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
`},{highlight:w(()=>[Z]),default:w(()=>[F(f)]),_:1}),nn,tn,F(p,{sourceCode:`<template>
  <d-button @click="serviceToBody" style="margin-right: 8px; display: inline-block; width: 220px;">
    click me show full screen loading!
  </d-button>

  <d-button
    v-if="isShow"
    @click="openTargetLoading"
    style="margin-right: 8px; display: inline-block; width: 200px;"
  >
    click me show loading in target!
  </d-button>

  <d-button
    v-else
    @click="closeTargetLoading"
    style="margin-right: 8px; display: inline-block; width: 200px;"
  >
    click me close loading in target!
  </d-button>

  <div id="me" style="margin-top: 20px; width: 100%; height: 60px; padding: 10px;">
    loading will show here3
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
  data() {
    return {
      isShow: true,
      resultTarget: null
    }
  },
  methods: {
    serviceToBody() {
      const results = this.$loadingService.open()

      setTimeout(() => {
        results.loadingInstance.close()
      }, 2000)
    },
    openTargetLoading() {
      this.resultTarget = this.$loadingService.open({
        target: document.querySelector('#me'),
        message: 'One moment please...',
        positionType: 'relative',
        zIndex: 1
      })
      this.isShow = false
    },
    closeTargetLoading() {
      this.resultTarget.loadingInstance.close()
      this.isShow = true
    }
  }
}
<\/script>
`},{highlight:w(()=>[sn]),default:w(()=>[F(v)]),_:1}),an])}var un=j(U,[["render",on]]);export{cn as __pageData,un as default};
