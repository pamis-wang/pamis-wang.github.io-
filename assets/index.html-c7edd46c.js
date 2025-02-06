const t=JSON.parse('{"key":"v-38d0e315","path":"/posts/2023-07-19-deploy-vite-another-repository-using-github-actions/","title":"使用 GitHub Actions 發佈 Vite 專案到另一個存放庫","lang":"zh-TW","frontmatter":{"title":"使用 GitHub Actions 發佈 Vite 專案到另一個存放庫","date":"2023-07-19T00:00:00.000Z","category":"CI/CD","tag":["GitHub","GitHub Actions","Github Pages","CI/CD","DevOps"],"description":"透過發佈 Vite 專案為案例介紹 GitHub Actions","head":[["meta",{"property":"og:url","content":"https://pamis.dev/posts/2023-07-19-deploy-vite-another-repository-using-github-actions/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"使用 GitHub Actions 發佈 Vite 專案到另一個存放庫"}],["meta",{"property":"og:description","content":"透過發佈 Vite 專案為案例介紹 GitHub Actions"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pamis.dev/"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-12-30T14:40:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"使用 GitHub Actions 發佈 Vite 專案到另一個存放庫"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:tag","content":"GitHub Actions"}],["meta",{"property":"article:tag","content":"Github Pages"}],["meta",{"property":"article:tag","content":"CI/CD"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:published_time","content":"2023-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T14:40:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 GitHub Actions 發佈 Vite 專案到另一個存放庫\\",\\"image\\":[\\"https://pamis.dev/\\"],\\"datePublished\\":\\"2023-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-30T14:40:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamis.dev\\",\\"email\\":\\"pamis.wang@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"事前準備","slug":"事前準備","link":"#事前準備","children":[{"level":3,"title":"建立存放庫","slug":"建立存放庫","link":"#建立存放庫","children":[]},{"level":3,"title":"建立 Vite 專案","slug":"建立-vite-專案","link":"#建立-vite-專案","children":[]},{"level":3,"title":"路徑設定補充說明","slug":"路徑設定補充說明","link":"#路徑設定補充說明","children":[]},{"level":3,"title":"推送專案原始碼","slug":"推送專案原始碼","link":"#推送專案原始碼","children":[]}]},{"level":2,"title":"發佈網站","slug":"發佈網站","link":"#發佈網站","children":[{"level":3,"title":"土法煉鋼","slug":"土法煉鋼","link":"#土法煉鋼","children":[]},{"level":3,"title":"建置專案","slug":"建置專案","link":"#建置專案","children":[]},{"level":3,"title":"推送打包後的專案目錄","slug":"推送打包後的專案目錄","link":"#推送打包後的專案目錄","children":[]},{"level":3,"title":"設定 Github Pages 的對應分支","slug":"設定-github-pages-的對應分支","link":"#設定-github-pages-的對應分支","children":[]},{"level":3,"title":"段落小結","slug":"段落小結","link":"#段落小結","children":[]}]},{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[{"level":3,"title":"CI/CD 與 DevOps","slug":"ci-cd-與-devops","link":"#ci-cd-與-devops","children":[]},{"level":3,"title":"基本介紹","slug":"基本介紹","link":"#基本介紹","children":[]},{"level":3,"title":"官方文件","slug":"官方文件","link":"#官方文件","children":[]},{"level":3,"title":"如何建立","slug":"如何建立","link":"#如何建立","children":[]},{"level":3,"title":"撰寫建議","slug":"撰寫建議","link":"#撰寫建議","children":[]},{"level":3,"title":"撰寫範例","slug":"撰寫範例","link":"#撰寫範例","children":[]}]},{"level":2,"title":"設定權限","slug":"設定權限","link":"#設定權限","children":[{"level":3,"title":"新增私鑰","slug":"新增私鑰","link":"#新增私鑰","children":[]},{"level":3,"title":"新增公鑰","slug":"新增公鑰","link":"#新增公鑰","children":[]},{"level":3,"title":"使用限制","slug":"使用限制","link":"#使用限制","children":[]}]}],"git":{"createdTime":1689701321000,"updatedTime":1735569620000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":6},{"name":"EXMAIL\\\\pamis","email":"pamis@mail.tca.org.tw","commits":1},{"name":"Pamis Wang","email":"pamis.wang@gmail.com","commits":1}]},"readingTime":{"minutes":9,"words":2699},"filePathRelative":"posts/2023-07-19-deploy-vite-another-repository-using-github-actions/index.md","localizedDate":"2023年7月19日","excerpt":"<h1> 使用 GitHub Actions 發佈 Vite 專案到另一個存放庫</h1>\\n<h2> 前言</h2>\\n<p>本篇文章會以發佈一個 Vite 專案為案例來介紹 GitHub Actions<br>\\n目標是將一個 Vite 專案的原始碼放在私有的存放庫，<br>\\n將打包後的靜態網站放在公開的存放庫。</p>\\n"}');export{t as data};
