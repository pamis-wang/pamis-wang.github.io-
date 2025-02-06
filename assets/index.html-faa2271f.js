const e=JSON.parse('{"key":"v-c2e64092","path":"/posts/2022-08-04-install-ubuntu-nginx-by-official/","title":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）","description":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）","date":"2022-08-04T00:00:00.000Z","category":"伺服器","tag":["Nginx","Nginx 1.22","Ubuntu","Ubuntu 22.04"],"head":[["meta",{"property":"og:url","content":"https://pamis.dev/posts/2022-08-04-install-ubuntu-nginx-by-official/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）"}],["meta",{"property":"og:description","content":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pamis.dev/"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-08-22T16:59:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:tag","content":"Nginx 1.22"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Ubuntu 22.04"}],["meta",{"property":"article:published_time","content":"2022-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-22T16:59:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）\\",\\"image\\":[\\"https://pamis.dev/\\"],\\"datePublished\\":\\"2022-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-22T16:59:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamis.dev\\",\\"email\\":\\"pamis.wang@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"安裝 Nginx","slug":"安裝-nginx","link":"#安裝-nginx","children":[{"level":3,"title":"安裝必備套件","slug":"安裝必備套件","link":"#安裝必備套件","children":[]},{"level":3,"title":"導入官方 Nginx 簽名密鑰以便 APT 可以驗證套件的真實性。","slug":"導入官方-nginx-簽名密鑰以便-apt-可以驗證套件的真實性。","link":"#導入官方-nginx-簽名密鑰以便-apt-可以驗證套件的真實性。","children":[]},{"level":3,"title":"驗證下載的文件是否包含正確的密鑰","slug":"驗證下載的文件是否包含正確的密鑰","link":"#驗證下載的文件是否包含正確的密鑰","children":[]},{"level":3,"title":"輸出應包含完整指紋","slug":"輸出應包含完整指紋","link":"#輸出應包含完整指紋","children":[]},{"level":3,"title":"選擇安裝的版本","slug":"選擇安裝的版本","link":"#選擇安裝的版本","children":[]},{"level":3,"title":"安裝上方選定的版本","slug":"安裝上方選定的版本","link":"#安裝上方選定的版本","children":[]},{"level":3,"title":"安裝指定號碼的版本","slug":"安裝指定號碼的版本","link":"#安裝指定號碼的版本","children":[]},{"level":3,"title":"設定優先使用 Nginx 官方來源取代 APT 套件庫","slug":"設定優先使用-nginx-官方來源取代-apt-套件庫","link":"#設定優先使用-nginx-官方來源取代-apt-套件庫","children":[]}]},{"level":2,"title":"設定 Nginx","slug":"設定-nginx","link":"#設定-nginx","children":[{"level":3,"title":"重大改動","slug":"重大改動","link":"#重大改動","children":[]},{"level":3,"title":"網站設定","slug":"網站設定","link":"#網站設定","children":[]},{"level":3,"title":"權限設定","slug":"權限設定","link":"#權限設定","children":[]},{"level":3,"title":"確認 Nginx 是否連接成功","slug":"確認-nginx-是否連接成功","link":"#確認-nginx-是否連接成功","children":[]},{"level":3,"title":"得到這個消息後便可重啟 Nginx","slug":"得到這個消息後便可重啟-nginx","link":"#得到這個消息後便可重啟-nginx","children":[]},{"level":3,"title":"重新讀取 Nginx 設定文件","slug":"重新讀取-nginx-設定文件","link":"#重新讀取-nginx-設定文件","children":[]},{"level":3,"title":"重啟 Nginx 伺服器","slug":"重啟-nginx-伺服器","link":"#重啟-nginx-伺服器","children":[]}]},{"level":2,"title":"參考資料","slug":"參考資料","link":"#參考資料","children":[]}],"git":{"createdTime":1691071810000,"updatedTime":1692723555000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":2}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"posts/2022-08-04-install-ubuntu-nginx-by-official/index.md","localizedDate":"2022年8月4日","excerpt":"<h1> 在 Ubuntu 安裝 Nginx 伺服器（官網 Nginx 安裝）</h1>\\n<h2> 前言</h2>\\n<p>由於受到 &nbsp;<a href=\\"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-23017\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CVE-2021-23017</a>&nbsp; 漏洞的影響，<br>\\nNginx 必須升級到 1.20.1 以上，但由於 Ubuntu 22.04 官方 APT 發行的版本為 1.18。<br>\\n故本次教學直接使用 Nginx 官方的安裝指南，取代 Ubuntu 官方 APT 安裝的方式。</p>\\n<p>本文章會在 Ubuntu 22.04 透過官方的 APT 套件庫安裝 Nginx 伺服器，<br>\\n並簡單介紹使用設定說明。</p>\\n<figure><figcaption style=\\"font-size: 1rem\\">這樣會出事的！</figcaption></figure>\\n"}');export{e as data};
