import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,e as t,f as e}from"./app-da221e1c.js";const l={},u=n("h1",{id:"webapi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webapi","aria-hidden":"true"},"#"),s(" WebAPI")],-1),r={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},d=e(`<h1 id="加入-跨來源資源共用-cors" tabindex="-1"><a class="header-anchor" href="#加入-跨來源資源共用-cors" aria-hidden="true">#</a> 加入 跨來源資源共用（CORS）</h1><p>讀取 appsettings.json 實作 跨來源資源共用</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>	<span class="token comment">// 讀取允許列表</span>
	<span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> corsOrigins <span class="token operator">=</span> appsettings<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;CORS:AllowOrigins&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 加入具有預設原則的 CORS 和中介軟體</span>
	builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddCors</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
		options<span class="token punctuation">.</span><span class="token function">AddDefaultPolicy</span><span class="token punctuation">(</span>
			policy <span class="token operator">=&gt;</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>corsOrigins<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">{</span>
					policy<span class="token punctuation">.</span><span class="token function">SetIsOriginAllowed</span><span class="token punctuation">(</span>origin <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Uri</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">.</span>Host <span class="token operator">==</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">else</span>
				<span class="token punctuation">{</span>
					policy<span class="token punctuation">.</span><span class="token function">WithOrigins</span><span class="token punctuation">(</span>corsOrigins<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				policy<span class="token punctuation">.</span><span class="token function">AllowAnyHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				policy<span class="token punctuation">.</span><span class="token function">AllowAnyMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				policy<span class="token punctuation">.</span><span class="token function">AllowCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={href:"https://docs.microsoft.com/zh-tw/aspnet/core/security/cors?view=aspnetcore-6.0",target:"_blank",rel:"noopener noreferrer"},v=e(`<h1 id="加入-api-多版本控制-整合-swagger" tabindex="-1"><a class="header-anchor" href="#加入-api-多版本控制-整合-swagger" aria-hidden="true">#</a> 加入 API 多版本控制 整合 Swagger</h1><h3 id="透過-nuget-加入-相依套件" tabindex="-1"><a class="header-anchor" href="#透過-nuget-加入-相依套件" aria-hidden="true">#</a> 透過 Nuget 加入 相依套件</h3><p>Microsoft.AspNetCore.Mvc.Versioning<br> Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer</p><h3 id="註冊並加入服務" tabindex="-1"><a class="header-anchor" href="#註冊並加入服務" aria-hidden="true">#</a> 註冊並加入服務</h3><p>參考以下程式碼區塊，加入於 <code>Program.cs</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>	<span class="token comment">// 加入 API 版本控制</span>
	builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddApiVersioning</span><span class="token punctuation">(</span>option <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 返回響應標頭中支援的版本資訊</span>
	    option<span class="token punctuation">.</span>ReportApiVersions <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	    <span class="token comment">// 未提供版本請請時，使用預設版號</span>
	    option<span class="token punctuation">.</span>AssumeDefaultVersionWhenUnspecified <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	    <span class="token comment">// 預設 API 版本號，支援時間或數字版本號</span>
	    option<span class="token punctuation">.</span>DefaultApiVersion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ApiVersion</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>	<span class="token comment">// 加入 API 版本控制，並定義了版本號碼的格式，以及兼容 SwaggerEndpoint 加入版本號的方式</span>
	builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddVersionedApiExplorer</span><span class="token punctuation">(</span>option <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 加入版本化的 API Explorer，其中也加入了 IApiVersionDescriptionProvider 服務</span>
	    <span class="token comment">// 格式可參考 https://github.com/dotnet/aspnet-api-versioning/wiki/	Version-Format#custom-api-version-format-strings</span>
	    option<span class="token punctuation">.</span>GroupNameFormat <span class="token operator">=</span> <span class="token string">&quot;&#39;v&#39;VVV&quot;</span><span class="token punctuation">;</span>
	    option<span class="token punctuation">.</span>SubstituteApiVersionInUrl <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>	<span class="token comment">// 將 Swagger 產生器新增至 中的 Program.cs 服務集合</span>
	builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddEndpointsApiExplorer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">//使用 類別 OpenApiInfo ，修改 UI 中顯示的資訊，定義多個版本的 API 資訊，Version 需要和 	SwaggerEndpoint 對應</span>
	    options<span class="token punctuation">.</span><span class="token function">SwaggerDoc</span><span class="token punctuation">(</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiInfo</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;Pamis API - V1&quot;</span><span class="token punctuation">,</span> Version <span class="token operator">=</span> <span class="token string">&quot;v1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    options<span class="token punctuation">.</span><span class="token function">SwaggerDoc</span><span class="token punctuation">(</span><span class="token string">&quot;v2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OpenApiInfo</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;Pamis API - V2&quot;</span><span class="token punctuation">,</span> Version <span class="token operator">=</span> <span class="token string">&quot;v2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>	<span class="token comment">// 註冊 Swagger 中介軟體(Middleware) 並注入 DI 容器</span>
	<span class="token comment">// 啟用中介軟體來提供產生的 JSON 檔和 Swagger UI</span>
	app<span class="token punctuation">.</span><span class="token function">UseSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// SwaggerEndPoint 方法用於告訴SwaggerUI 請求哪個地址來獲取OpenApi JSON 資訊</span>
	    <span class="token comment">// 設定 Swagger UI 訪問 JSON 的位置，Version 需要和 SwaggerEndpoint 對應</span>
	    options<span class="token punctuation">.</span><span class="token function">SwaggerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger/v1/swagger.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    options<span class="token punctuation">.</span><span class="token function">SwaggerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger/v2/swagger.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 啟用 API 版本控制 中介軟體 (Middleware)</span>
	app<span class="token punctuation">.</span><span class="token function">UseApiVersioning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>測試用 Controllers</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Http</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">WebAPI<span class="token punctuation">.</span>Controllers</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiVersion</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiVersion</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;api/v{version:apiVersion}/[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MapToApiVersion</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;v1&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MapToApiVersion</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetV2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={href:"https://www.gushiciku.cn/pl/gaDe/zh-tw",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/dotnet/aspnet-api-versioning/wiki/Version-Format#custom-api-version-format-strings",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dotnet/aspnet-api-versioning/wiki/API-Explorer-Options",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"加入-xml-註解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#加入-xml-註解","aria-hidden":"true"},"#"),s(" 加入 XML 註解")],-1),w={href:"https://docs.microsoft.com/zh-tw/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.miniasp.com/post/2019/12/21/ASP%E2%80%A4NET-Core-3-NSwag-OpenAPI-v3",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.ais.com/self-documenting-azure-functions-with-c-and-openapi-part-two/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://bryanyu.github.io/2019/12/29/AspNetCoreSwagger/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://marcus116.blogspot.com/2019/01/how-to-add-api-document-using-swagger-in-webapi.html",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"相依套件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相依套件","aria-hidden":"true"},"#"),s(" 相依套件")],-1),y=n("p",null,"MailKit -Version 3.2.0",-1);function V(I,x){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("基於 "),n("a",r,[s("ASP.NET"),t(a)]),s(" Core 6 開發的 Web API")]),d,n("p",null,[s("參考資料："),n("a",k,[s("https://docs.microsoft.com/zh-tw/aspnet/core/security/cors?view=aspnetcore-6.0"),t(a)])]),v,n("p",null,[s("參考資料："),n("a",m,[s("https://www.gushiciku.cn/pl/gaDe/zh-tw"),t(a)])]),n("p",null,[s("參考資料："),n("a",g,[s("https://github.com/dotnet/aspnet-api-versioning/wiki/Version-Format#custom-api-version-format-strings"),t(a)])]),n("p",null,[s("參考資料："),n("a",b,[s("https://github.com/dotnet/aspnet-api-versioning/wiki/API-Explorer-Options"),t(a)])]),h,n("p",null,[s("參考資料："),n("a",w,[s("https://docs.microsoft.com/zh-tw/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio"),t(a)])]),n("p",null,[s("參考資料："),n("a",f,[s("https://blog.miniasp.com/post/2019/12/21/ASP․NET-Core-3-NSwag-OpenAPI-v3"),t(a)])]),n("p",null,[s("參考資料："),n("a",A,[s("https://www.ais.com/self-documenting-azure-functions-with-c-and-openapi-part-two/"),t(a)])]),n("p",null,[s("參考資料："),n("a",_,[s("https://bryanyu.github.io/2019/12/29/AspNetCoreSwagger/"),t(a)])]),n("p",null,[s("參考資料："),n("a",q,[s("https://marcus116.blogspot.com/2019/01/how-to-add-api-document-using-swagger-in-webapi.html"),t(a)])]),S,y])}const E=p(l,[["render",V],["__file","index.html.vue"]]);export{E as default};