import{_ as e,c as o,o as t,b as a}from"./app.8f8c714d.js";const v='{"title":"Vue DevUI \u8D21\u732E\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u53C2\u4E0E\u8D21\u732E","slug":"\u53C2\u4E0E\u8D21\u732E"}],"relativePath":"contributing/index.md","lastUpdated":1652702330422}',n={},r=a(`<h1 id="vue-devui-\u8D21\u732E\u6307\u5357" tabindex="-1">Vue DevUI \u8D21\u732E\u6307\u5357 <a class="header-anchor" href="#vue-devui-\u8D21\u732E\u6307\u5357" aria-hidden="true">#</a></h1><p>\u4F60\u597D\uFF01\u6211\u4EEC\u5F88\u9AD8\u5174\u4F60\u6709\u5174\u8DA3\u4E3A Vue DevUI \u505A\u51FA\u8D21\u732E\u3002\u5728\u63D0\u4EA4\u4F60\u7684\u8D21\u732E\u4E4B\u524D\uFF0C\u8BF7\u82B1\u70B9\u65F6\u95F4\u9605\u8BFB\u4EE5\u4E0B\u6307\u5357\uFF1A</p><h3 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h3><p>Vue DevUI \u4F7F\u7528 <code>pnpm</code> \u6784\u5EFA <code>monorepo</code> \u4ED3\u5E93\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528 <a href="https://www.pnpm.cn/" target="_blank" rel="noopener noreferrer">pnpm 6.x</a> \u5305\u7BA1\u7406\u5668\uFF0C\u4EE5\u786E\u4FDD\u4E0D\u4F1A\u56E0\u4E3A\u5305\u7BA1\u7406\u5668\u7684\u4E0D\u540C\u800C\u5F15\u53D1\u5F02\u5E38\u3002</p><blockquote><p>pnpm 7.x \u53D1\u751F\u4E86<a href="https://github.com/pnpm/pnpm/releases/tag/v7.0.0" target="_blank" rel="noopener noreferrer">break change</a>\uFF0C\u5982\u8981\u4F7F\u7528pnpm 7.x \u8BF7\u81EA\u884C\u66F4\u65B0<code>package.json</code>\u7684script\uFF0C\u4F8B\u5982\u672C\u5730\u542F\u52A8\uFF1A<code>pnpm --filter vue-devui dev</code>\uFF0C\u5176\u4ED6\u4FEE\u6539\u53EF\u4EE5\u67E5\u9605\u4E0A\u8FF0\u94FE\u63A5</p></blockquote><p>\u5982\u679C\u4F60\u60F3\u53C2\u4E0E <code>devui-vue</code> \u7684\u5F00\u53D1\u6216\u8005\u6D4B\u8BD5\uFF1A</p><ol><li>\u70B9\u51FB Github \u53F3\u4E0A\u89D2\u7684 Fork \u6309\u94AE\uFF0C\u5C06\u4ED3\u5E93 Fork \u4ED3\u5E93\u5230\u4E2A\u4EBA\u7A7A\u95F4</li><li>Clone \u4E2A\u4EBA\u7A7A\u95F4\u9879\u76EE\u5230\u672C\u5730\uFF1A<code>git clone git@github.com:username/vue-devui.git</code></li><li>\u5728 Vue DevUI \u7684\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C<code>pnpm i</code>, \u5B89\u88C5 node \u4F9D\u8D56</li><li>\u8FD0\u884C <code>pnpm dev</code>\uFF0C\u542F\u52A8\u7EC4\u4EF6\u5E93\u7F51\u7AD9</li><li>\u4F7F\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A<a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></li></ol><div class="language-bash"><pre><code><span class="token comment"># username \u4E3A\u7528\u6237\u540D\uFF0C\u6267\u884C\u524D\u8BF7\u66FF\u6362</span>
<span class="token function">git</span> clone git@github.com:username/vue-devui.git
<span class="token builtin class-name">cd</span> vue-devui
<span class="token function">git</span> remote <span class="token function">add</span> upstream git@github.com:DevCloudFE/vue-devui.git
<span class="token function">pnpm</span> i
<span class="token function">pnpm</span> dev
</code></pre></div><h3 id="\u53C2\u4E0E\u8D21\u732E" tabindex="-1">\u53C2\u4E0E\u8D21\u732E <a class="header-anchor" href="#\u53C2\u4E0E\u8D21\u732E" aria-hidden="true">#</a></h3><p>Vue DevUI \u662F\u4E00\u4E2A\u591A\u4EBA\u5408\u4F5C\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u4E3A\u4E86\u907F\u514D\u591A\u4EBA\u540C\u65F6\u5F00\u53D1\u540C\u4E00\u4E2A\u7EC4\u4EF6/\u529F\u80FD\uFF0C\u8BF7\u5148\u5728 <a href="https://github.com/DevCloudFE/vue-devui/issues" target="_blank" rel="noopener noreferrer">issues \u5217\u8868</a> \u4E2D\u9009\u62E9\u81EA\u5DF1\u611F\u5174\u8DA3\u7684\u4EFB\u52A1\uFF0C\u5728\u8BC4\u8BBA\u533A\u8BA4\u9886</p><ol><li>\u8BF7\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B8C\u6210\u5FEB\u901F\u4E0A\u624B\u4E2D\u7684\u6B65\u9AA4\uFF0C\u5E76\u4E14\u6B63\u5E38\u8BBF\u95EE <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></li><li>\u521B\u5EFA\u65B0\u5206\u652F <code>git checkout -b username/feature1</code>\uFF0C\u5206\u652F\u540D\u5B57\u5EFA\u8BAE\u4E3A<code>username/feat-xxx</code>/<code>username/fix-xxx</code></li><li>\u672C\u5730\u7F16\u7801\uFF0C\u9700\u9075\u5FAA <a href="/contributing/development-specification/">\u5F00\u53D1\u89C4\u8303</a></li><li>\u9075\u5FAA <a href="https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit" target="_blank" rel="noopener noreferrer">Angular Commit Message Format</a> \u8FDB\u884C\u63D0\u4EA4\uFF08<strong>\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u63D0\u4EA4\u5C06\u4E0D\u4F1A\u88AB\u5408\u5E76</strong>\uFF09</li><li>\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u4E5F\u5C31\u662F Fork \u540E\u7684\u4ED3\u5E93\uFF0C<code>git push origin branchName</code></li><li>(\u53EF\u9009) \u540C\u6B65\u4E0A\u6E38\u4ED3\u5E93dev\u5206\u652F\u6700\u65B0\u4EE3\u7801\uFF0C<code>git pull upstream dev</code></li><li>\u6253\u5F00\u4E0A\u6E38\u4ED3\u5E93\u63D0\u4EA4 <a href="https://github.com/DevCloudFE/vue-devui/pulls" target="_blank" rel="noopener noreferrer">PR</a></li><li>\u4ED3\u5E93 Committer \u8FDB\u884C Code Review\uFF0C\u5E76\u63D0\u51FA\u610F\u89C1</li><li>PR \u53D1\u8D77\u4EBA\u6839\u636E\u610F\u89C1\u8C03\u6574\u4EE3\u7801\uFF08\u4E00\u4E2A\u5206\u652F\u53D1\u8D77\u4E86 PR \u540E\uFF0C\u540E\u7EED\u7684 commit \u4F1A\u81EA\u52A8\u540C\u6B65\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0 PR\uFF09</li><li>\u4ED3\u5E93\u7BA1\u7406\u5458\u5408\u5E76PR</li><li>\u8D21\u732E\u6D41\u7A0B\u7ED3\u675F\uFF0C\u611F\u8C22\u4F60\u7684\u8D21\u732E</li></ol><p>\u5982\u679C\u6D89\u53CA\u65B0\u7EC4\u4EF6\u6216\u7EC4\u4EF6\u7684\u65B0\u7279\u6027\uFF0C\u5219\u9700\u8981\uFF1A</p><ol><li>\u5B8C\u5584\u7EC4\u4EF6\u4E2D\u82F1\u6587\u6587\u6863</li><li>\u5B8C\u5584\u7EC4\u4EF6\u7684\u5355\u5143\u6D4B\u8BD5</li><li>\u5B8C\u6210\u7EC4\u4EF6<a href="https://github.com/DevCloudFE/vue-devui/wiki/%E7%BB%84%E4%BB%B6%E8%87%AA%E6%A3%80%E6%B8%85%E5%8D%95" target="_blank" rel="noopener noreferrer">\u81EA\u68C0\u6E05\u5355</a></li></ol>`,13),i=[r];function l(c,s,p,d,u,h){return t(),o("div",null,i)}var g=e(n,[["render",l]]);export{v as __pageData,g as default};