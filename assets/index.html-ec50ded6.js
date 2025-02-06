const t=JSON.parse('{"key":"v-7ec7a075","path":"/posts/2023-07-05-asp-dot-net-core-6-web-api/","title":"基於 ASP.NET Core 6 開發的 Web API","lang":"zh-TW","frontmatter":{"title":"基於 ASP.NET Core 6 開發的 Web API","date":"2023-07-05T00:00:00.000Z","category":"後端","tag":["ASP.NET Core","ASP.NET Core 6","API"],"description":"WebAPI 基於 ASP.NET Core 6 開發的 Web API 加入 跨來源資源共用（CORS） 讀取 appsettings.json 實作 跨來源資源共用 \\t// 讀取允許列表 \\tstring[] corsOrigins = appsettings.GetSection(\\"CORS:AllowOrigins\\").Get&lt;string[]&gt;(); \\t// 加入具有預設原則的 CORS 和中介軟體 \\tbuilder.Services.AddCors(options =&gt; \\t{ \\t\\toptions.AddDefaultPolicy( \\t\\t\\tpolicy =&gt; \\t\\t\\t{ \\t\\t\\t\\tif (corsOrigins.Contains(\\"localhost\\")) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tpolicy.SetIsOriginAllowed(origin =&gt; new Uri(origin).Host == \\"localhost\\"); \\t\\t\\t\\t} \\t\\t\\t\\telse \\t\\t\\t\\t{ \\t\\t\\t\\t\\tpolicy.WithOrigins(corsOrigins); \\t\\t\\t\\t} \\t\\t\\t\\tpolicy.AllowAnyHeader(); \\t\\t\\t\\tpolicy.AllowAnyMethod(); \\t\\t\\t\\tpolicy.AllowCredentials(); \\t\\t\\t}); \\t});","head":[["meta",{"property":"og:url","content":"https://pamis.dev/posts/2023-07-05-asp-dot-net-core-6-web-api/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"基於 ASP.NET Core 6 開發的 Web API"}],["meta",{"property":"og:description","content":"WebAPI 基於 ASP.NET Core 6 開發的 Web API 加入 跨來源資源共用（CORS） 讀取 appsettings.json 實作 跨來源資源共用 \\t// 讀取允許列表 \\tstring[] corsOrigins = appsettings.GetSection(\\"CORS:AllowOrigins\\").Get&lt;string[]&gt;(); \\t// 加入具有預設原則的 CORS 和中介軟體 \\tbuilder.Services.AddCors(options =&gt; \\t{ \\t\\toptions.AddDefaultPolicy( \\t\\t\\tpolicy =&gt; \\t\\t\\t{ \\t\\t\\t\\tif (corsOrigins.Contains(\\"localhost\\")) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tpolicy.SetIsOriginAllowed(origin =&gt; new Uri(origin).Host == \\"localhost\\"); \\t\\t\\t\\t} \\t\\t\\t\\telse \\t\\t\\t\\t{ \\t\\t\\t\\t\\tpolicy.WithOrigins(corsOrigins); \\t\\t\\t\\t} \\t\\t\\t\\tpolicy.AllowAnyHeader(); \\t\\t\\t\\tpolicy.AllowAnyMethod(); \\t\\t\\t\\tpolicy.AllowCredentials(); \\t\\t\\t}); \\t});"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-04-29T17:19:49.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"ASP.NET Core"}],["meta",{"property":"article:tag","content":"ASP.NET Core 6"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-29T17:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基於 ASP.NET Core 6 開發的 Web API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-29T17:19:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamis.dev\\",\\"email\\":\\"pamis.wang@gmail.com\\"}]}"]]},"headers":[{"level":3,"title":"透過 Nuget 加入 相依套件","slug":"透過-nuget-加入-相依套件","link":"#透過-nuget-加入-相依套件","children":[]},{"level":3,"title":"註冊並加入服務","slug":"註冊並加入服務","link":"#註冊並加入服務","children":[]},{"level":3,"title":"加入 XML 註解","slug":"加入-xml-註解","link":"#加入-xml-註解","children":[]},{"level":3,"title":"相依套件","slug":"相依套件","link":"#相依套件","children":[]}],"git":{"createdTime":1691408179000,"updatedTime":1714411189000,"contributors":[{"name":"EXMAIL\\\\pamis","email":"pamis@mail.tca.org.tw","commits":1},{"name":"Pamis Wang","email":"pamis1116@gmail.com","commits":1},{"name":"pamis","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":2.07,"words":622},"filePathRelative":"posts/2023-07-05-asp-dot-net-core-6-web-api/index.md","localizedDate":"2023年7月5日","excerpt":"<h1> WebAPI</h1>\\n<p>基於 <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> Core 6 開發的 Web API</p>\\n<h1> 加入 跨來源資源共用（CORS）</h1>\\n<p>讀取 appsettings.json 實作 跨來源資源共用</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-ext=\\"cs\\"><pre class=\\"language-csharp\\"><code>\\t<span class=\\"token comment\\">// 讀取允許列表</span>\\n\\t<span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> corsOrigins <span class=\\"token operator\\">=</span> appsettings<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GetSection</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"CORS:AllowOrigins\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token generic-method\\"><span class=\\"token function\\">Get</span><span class=\\"token generic class-name\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">// 加入具有預設原則的 CORS 和中介軟體</span>\\n\\tbuilder<span class=\\"token punctuation\\">.</span>Services<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AddCors</span><span class=\\"token punctuation\\">(</span>options <span class=\\"token operator\\">=&gt;</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\toptions<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AddDefaultPolicy</span><span class=\\"token punctuation\\">(</span>\\n\\t\\t\\tpolicy <span class=\\"token operator\\">=&gt;</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>corsOrigins<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Contains</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"localhost\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\tpolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetIsOriginAllowed</span><span class=\\"token punctuation\\">(</span>origin <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">Uri</span><span class=\\"token punctuation\\">(</span>origin<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>Host <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"localhost\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">else</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\tpolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WithOrigins</span><span class=\\"token punctuation\\">(</span>corsOrigins<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t\\tpolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AllowAnyHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\tpolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AllowAnyMethod</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\tpolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AllowCredentials</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
