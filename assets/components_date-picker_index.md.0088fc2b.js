import{f as p,i as o,_ as d,r as c,c as l,a,d as r,b as s,o as i}from"./app.4054ec9d.js";const k=p({setup(){const n=o("");return{eventValue:n,handleEventValue:u=>{n.value=u}}}}),q='{"title":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C5E\u6027 auto-close","slug":"\u5C5E\u6027-auto-close"},{"level":3,"title":"\u5C5E\u6027 range","slug":"\u5C5E\u6027-range"},{"level":3,"title":"\u5C5E\u6027 format","slug":"\u5C5E\u6027-format"},{"level":3,"title":"\u5C5E\u6027 range-spliter","slug":"\u5C5E\u6027-range-spliter"},{"level":3,"title":"\u4E8B\u4EF6 selectedDateChange","slug":"\u4E8B\u4EF6-selecteddatechange"}],"relativePath":"components/date-picker/index.md","lastUpdated":1649728324714}',F=s(`<h1 id="datepicker-\u65E5\u671F\u9009\u62E9\u5668" tabindex="-1">DatePicker \u65E5\u671F\u9009\u62E9\u5668 <a class="header-anchor" href="#datepicker-\u65E5\u671F\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\u65F6\uFF1B\u9700\u8981\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u65F6\u3002</p><h3 id="\u5C5E\u6027-auto-close" tabindex="-1">\u5C5E\u6027 auto-close <a class="header-anchor" href="#\u5C5E\u6027-auto-close" aria-hidden="true">#</a></h3><table><thead><tr><th>\u9879\u76EE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>auto-close / autoClose</td></tr><tr><td>\u7C7B\u578B</td><td>boolean</td></tr><tr><td>\u5FC5\u586B</td><td>\u5426</td></tr><tr><td>\u9ED8\u8BA4</td><td>false</td></tr><tr><td>\u8BF4\u660E</td><td>\u9009\u62E9\u65E5\u671F\u540E\uFF0C\u662F\u5426\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F</td></tr></tbody></table><div class="language-vue"><pre><code><span class="token comment">&lt;!-- \u5F00\u542F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">auto-close</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">:auto-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- \u5173\u95ED --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">:auto-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,7),h=s(`<h3 id="\u5C5E\u6027-range" tabindex="-1">\u5C5E\u6027 range <a class="header-anchor" href="#\u5C5E\u6027-range" aria-hidden="true">#</a></h3><table><thead><tr><th>\u9879\u76EE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>range</td></tr><tr><td>\u7C7B\u578B</td><td>boolean</td></tr><tr><td>\u5FC5\u586B</td><td>\u5426</td></tr><tr><td>\u9ED8\u8BA4</td><td>false</td></tr><tr><td>\u8BF4\u660E</td><td>\u662F\u5426\u5F00\u542F\u533A\u95F4\u9009\u62E9</td></tr></tbody></table><div class="language-vue"><pre><code><span class="token comment">&lt;!-- \u5F00\u542F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">range</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- \u5173\u95ED --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,3),g=s('<h3 id="\u5C5E\u6027-format" tabindex="-1">\u5C5E\u6027 format <a class="header-anchor" href="#\u5C5E\u6027-format" aria-hidden="true">#</a></h3><table><thead><tr><th>\u9879\u76EE</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>format</td></tr><tr><td>\u7C7B\u578B</td><td>string</td></tr><tr><td>\u5FC5\u586B</td><td>\u5426</td></tr><tr><td>\u9ED8\u8BA4</td><td>y/MM/dd</td></tr><tr><td>\u8BF4\u660E</td><td>\u65E5\u671F\u503C\u683C\u5F0F</td></tr></tbody></table>',2),E=s(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yyyy-MM-dd hh:mm:ss<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yy-MM-dd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">range</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p><strong>\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26</strong></p><table><thead><tr><th>\u5B57\u7B26</th><th>\u8BF4\u660E</th><th>\u89C4\u5219</th></tr></thead><tbody><tr><td>y, yy, yyyy</td><td>year</td><td>\u4F7F\u7528<code>yy</code>\u65F6\uFF0C\u53EA\u663E\u793A\u540E2\u4F4D\u5E74\u4EFD\uFF0C\u5176\u4ED6\u60C5\u51B5\u663E\u793A4\u4F4D\u5E74\u4EFD\u3002\u6BD4\u5982<code>yy/MM/dd -&gt; 21/01/02</code>\uFF0C <code>y/MM/dd -&gt; 2021/01/02</code></td></tr><tr><td>M,MM</td><td>month</td><td>\u4F7F\u7528<code>MM</code>\u65F6\uFF0C\u4E00\u4F4D\u6570\u6570\u5B57\u5DE6\u4FA7\u81EA\u52A8\u8865<code>0</code>\u3002\u6BD4\u5982<code>y/MM/dd -&gt; 2021/01/02</code>\uFF0C<code>y/M/d -&gt; 2021/1/2</code></td></tr><tr><td>d,dd</td><td>date</td><td>\u89C4\u5219\u540C<code>M</code></td></tr><tr><td>h,hh</td><td>hour</td><td>\u89C4\u5219\u540C<code>M</code>\uFF1B\u4F7F\u752824\u5C0F\u65F6\u8868\u793A\u3002</td></tr><tr><td>m,mm</td><td>minute</td><td>\u89C4\u5219\u540C<code>M</code></td></tr><tr><td>s,ss</td><td>second</td><td>\u89C4\u5219\u540C<code>M</code></td></tr></tbody></table><h3 id="\u5C5E\u6027-range-spliter" tabindex="-1">\u5C5E\u6027 range-spliter <a class="header-anchor" href="#\u5C5E\u6027-range-spliter" aria-hidden="true">#</a></h3><table><thead><tr><th>\u9879\u76EE</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>range-spliter / rangeSpliter</td></tr><tr><td>\u7C7B\u578B</td><td>string</td></tr><tr><td>\u5FC5\u586B</td><td>\u5426</td></tr><tr><td>\u9ED8\u8BA4</td><td>-</td></tr><tr><td>\u8BF4\u660E</td><td>\u5728\u533A\u95F4\u9009\u62E9\u6A21\u5F0F\u4E0B\uFF0C\u5206\u9694\u8D77\u6B62\u65F6\u95F4\u7684\u5B57\u7B26\u3002</td></tr></tbody></table><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">range</span> <span class="token attr-name">range-spliter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81F3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,6),C=s(`<h3 id="\u4E8B\u4EF6-selecteddatechange" tabindex="-1">\u4E8B\u4EF6 selectedDateChange <a class="header-anchor" href="#\u4E8B\u4EF6-selecteddatechange" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eventValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">readonly</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-datepicker</span> <span class="token attr-name">:selected-date-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleEventValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),B=["value"];function m(n,e,u,v,y,f){const t=c("d-datepicker");return i(),l("div",null,[F,a(t,{"auto-close":""}),a(t),h,a(t,{range:""}),g,a(t,{format:"yyyy-MM-dd hh:mm:ss"}),a(t,{format:"yy-MM-dd",range:""}),E,a(t,{range:"","range-spliter":"\u81F3"}),C,r("input",{value:n.eventValue,readonly:""},null,8,B),a(t,{"selected-date-change":n.handleEventValue},null,8,["selected-date-change"])])}var D=d(k,[["render",m]]);export{q as __pageData,D as default};