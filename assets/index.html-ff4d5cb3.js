const e=JSON.parse('{"key":"v-5c33eeeb","path":"/posts/2022-08-14-install-ubuntu-laravel/","title":"在 Ubuntu 建構 Laravel 開發環境","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 建構 Laravel 開發環境","description":"在 Ubuntu 建構 Laravel 開發環境","date":"2022-08-14T00:00:00.000Z","category":"後端","tag":["Laravel","PHP","Ubuntu"],"head":[["meta",{"property":"og:url","content":"https://pamis.dev/posts/2022-08-14-install-ubuntu-laravel/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 建構 Laravel 開發環境"}],["meta",{"property":"og:description","content":"在 Ubuntu 建構 Laravel 開發環境"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pamis.dev/"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-11-21T06:36:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"在 Ubuntu 建構 Laravel 開發環境"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"Laravel"}],["meta",{"property":"article:tag","content":"PHP"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:published_time","content":"2022-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-21T06:36:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 建構 Laravel 開發環境\\",\\"image\\":[\\"https://pamis.dev/\\"],\\"datePublished\\":\\"2022-08-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-21T06:36:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamis.dev\\",\\"email\\":\\"pamis.wang@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"先決條件","slug":"先決條件","link":"#先決條件","children":[]},{"level":2,"title":"安裝步驟","slug":"安裝步驟","link":"#安裝步驟","children":[{"level":3,"title":"安裝 PHP","slug":"安裝-php","link":"#安裝-php","children":[]},{"level":3,"title":"安裝 Composer","slug":"安裝-composer","link":"#安裝-composer","children":[]},{"level":3,"title":"安裝 Nginx","slug":"安裝-nginx","link":"#安裝-nginx","children":[]},{"level":3,"title":"安裝 Node.js","slug":"安裝-node-js","link":"#安裝-node-js","children":[]},{"level":3,"title":"安裝資料庫","slug":"安裝資料庫","link":"#安裝資料庫","children":[]},{"level":3,"title":"安裝 git","slug":"安裝-git","link":"#安裝-git","children":[]},{"level":3,"title":"安裝 GitHub Desktop","slug":"安裝-github-desktop","link":"#安裝-github-desktop","children":[]}]},{"level":2,"title":"部署設定","slug":"部署設定","link":"#部署設定","children":[{"level":3,"title":"參考範例","slug":"參考範例","link":"#參考範例","children":[]},{"level":3,"title":"權限不足問題","slug":"權限不足問題","link":"#權限不足問題","children":[]}]}],"git":{"createdTime":1690378716000,"updatedTime":1700548582000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":2},{"name":"EXMAIL\\\\pamis","email":"pamis@mail.tca.org.tw","commits":1}]},"readingTime":{"minutes":3.5,"words":1050},"filePathRelative":"posts/2022-08-14-install-ubuntu-laravel/index.md","localizedDate":"2022年8月14日","excerpt":"<h1> 在 Ubuntu 建構 Laravel 開發環境</h1>\\n<h2> 前言</h2>\\n<p>基本上現在去看 Laravel 的官方文件<a href=\\"https://laravel.com/docs/9.x/installation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Installation</a>，<br>\\n在建置開發環境的內容都是以容器化的方式為主。</p>\\n<p>原因很簡單，因為透過容器化的方式可以確保開發環境條件單一，<br>\\n比起在自己的系統逐一安裝伺服器、PHP、資料庫會有版本的差異，<br>\\n也可能還有其他的依賴套件要安裝與設定，<br>\\n為了寫個網站還要去掌握一堆知識技能點。<br>\\n結果環境裝起來一個禮拜就先過去了 XDDD。</p>\\n<p>(迷：但是用 Docker 也還是要具備不少知識儲備阿 XDDD)</p>\\n<p>不過這邊還是寫一下用 VMware 虛擬機建置 Ubuntu 作業系統的情境來建置一個 Laravel 開發環境。</p>\\n<p>從頭自己建置一次開發環境，對於一個網站是如何運作會更有概念。</p>\\n"}');export{e as data};
