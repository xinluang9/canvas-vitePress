import{_ as s,o as a,c as n,U as l}from"./chunks/framework.a3e4ade3.js";const F=JSON.parse('{"title":"样式和颜色控制","description":"","frontmatter":{},"headers":[],"relativePath":"src/03-basicColor.md"}'),p={name:"src/03-basicColor.md"},o=l(`<h1 id="样式和颜色控制" tabindex="-1">样式和颜色控制 <a class="header-anchor" href="#样式和颜色控制" aria-label="Permalink to &quot;样式和颜色控制&quot;">​</a></h1><p>在绘制图形的章节里，只用到默认的线条和填充样式。而在这一章里，我们将会探讨 canvas 全部的可选项，来绘制出更加吸引人的内容。 <img src="https://t9.baidu.com/it/u=3062716621,2780390909&amp;fm=218&amp;app=126&amp;size=f242,150&amp;n=0&amp;f=JPEG&amp;fmt=auto?s=19843C7A13F5539045E5715F00009063&amp;sec=1690995600&amp;t=8a69c63ed9cbd3bd1453b72b767ee9c5" alt=""></p><h2 id="色彩-colors" tabindex="-1"><span style="color:skyblue;"> 色彩 Colors </span> <a class="header-anchor" href="#色彩-colors" aria-label="Permalink to &quot;&lt;span style=&#39;color: skyblue&#39;&gt; 色彩 Colors &lt;/span&gt;&quot;">​</a></h2><p>到目前为止，我们只看到过绘制内容的方法。如果我们想要给图形上色，有两个重要的属性可以做到：<b>fillStyle </b> 和 <b> strokeStyle。</b></p><ul><li>设置图形的填充颜色。</li></ul><p><code>fillStyle = color</code></p><ul><li>设置图形轮廓的颜色。</li></ul><p><code>strokeStyle = color</code></p><p>color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。我们迟些再回头探讨渐变和图案对象。默认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。</p><p>备注： 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这些 fillStyle 的值均为 &#39;橙色&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.fillStyle = &quot;orange&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.fillStyle = &quot;#FFA500&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.fillStyle = &quot;rgb(255,165,0)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.fillStyle = &quot;rgba(255,165,0,1)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// </span></span>
<span class="line"><span style="color:#A6ACCD;"> ctx.fillStyle = &#39;rgba(255,200,200, .4)&#39;  // 填充颜色</span></span>
<span class="line"><span style="color:#A6ACCD;"> ctx.fill(heartPath)</span></span>
<span class="line"><span style="color:#A6ACCD;"> ctx.strokeStyle = &#39;green&#39;  // 轮廓颜色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="globalalpha" tabindex="-1">globalAlpha <a class="header-anchor" href="#globalalpha" aria-label="Permalink to &quot;globalAlpha&quot;">​</a></h2><ul><li>设置全局通用的透明度</li></ul><p><code>ctx.globalAlpha = 0.5</code></p><ul><li>示例: 在这个例子里，将用四色格作为背景，设置 globalAlpha 为 0.2 后，在上面画一系列半径递增的半透明圆。最终结果是一个径向渐变效果。圆叠加得越更多，原先所画的圆的透明度会越低。通过增加循环次数，画更多的圆，从中心到边缘部分，背景图会呈现逐渐消失的效果。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function draw() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var ctx = document.getElementById(&#39;canvas&#39;).getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 画背景</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = &#39;#FD0&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillRect(0,0,75,75);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = &#39;#6C0&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillRect(75,0,75,75);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = &#39;#09F&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillRect(0,75,75,75);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = &#39;#F30&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillRect(75,75,75,75);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = &#39;#FFF&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 设置透明度值</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.globalAlpha = 0.2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 画半透明圆</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (var i=0;i&lt;7;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx.arc(75,75,10+10*i,0,Math.PI*2,true);</span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx.fill();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667122746594-d65213b9-8b1b-4bc1-9bde-9d949af11d8d.png" alt=""></p><h2 id="线性渐变" tabindex="-1">线性渐变 <a class="header-anchor" href="#线性渐变" aria-label="Permalink to &quot;线性渐变&quot;">​</a></h2><ul><li><code>CanvasRenderingContext2D.createLinearGradient()</code>：定义线性渐变样式。</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createLinearGradient</span><span style="color:#A6ACCD;">(x0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y1)</span></span>
<span class="line"></span></code></pre></div><p><code>ctx.createLinearGradient(x0, y0, x1, y1)</code>方法接受四个参数：x0和y0是起点的横坐标和纵坐标，x1和y1是终点的横坐标和纵坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。</p><ul><li>该方法的返回值是一个<code>CanvasGradient</code>对象，该对象只有一个<code>addColorStop()方向</code>，用来指定渐变点的颜色。<code>addColorStop()</code>方法接受两个参数，第一个参数是0到1之间的一个位置量，0表示起点，1表示终点，第二个参数是一个字符串，表示 CSS 颜色。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  var canvas = document.getElementById(&#39;myCanvas&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  var gradient = ctx.createLinearGradient(0, 0, 200, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  gradient.addColorStop(0, &#39;pink&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  gradient.addColorStop(1, &#39;skyblue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillStyle = gradient</span></span>
<span class="line"><span style="color:#A6ACCD;">  ctx.fillRect(10, 10, 200, 100)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://camo.githubusercontent.com/debbc73d7a83e4371100424fa9df82fb65adc9c45345c4b2171bfebc9a1db6bf/68747470733a2f2f69302e6864736c622e636f6d2f6266732f616c62756d2f376138353733323930336436616334663533393734613637613661333166346366393365623734392e706e67" alt=""></p><p>上面代码中，定义了渐变样式gradient以后，将这个样式指定给fillStyle属性，然后fillRect()就会生成以这个样式填充的矩形区域。</p><p><b>例子2: 一帧一帧渐变</b></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearRect</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">600</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">600</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">linearGradient</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createLinearGradient</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">500</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">linearGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">linearGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">linearGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">linearGradient</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">300</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 动画帧</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#A6ACCD;">(render)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"></span></code></pre></div><p><img src="http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-7-25/Snipaste_2023-07-25_13-35-14.png" alt=""></p><h2 id="径向渐变" tabindex="-1">径向渐变 <a class="header-anchor" href="#径向渐变" aria-label="Permalink to &quot;径向渐变&quot;">​</a></h2><p><code>CanvasRenderingContext2D.createRadialGradient()</code>：定义辐射渐变样式。</p><p>createRadialGradient()方法定义一个辐射渐变，需要指定两个圆。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>createRadialGradient()</code>方法接受六个参数，<code>x0</code>和<code>y0</code>是辐射起始的圆的圆心坐标，<code>r0</code>是起始圆的半径，<code>x1和y1</code>是辐射终止的圆的圆心坐标，<code>r1</code>是终止圆的半径。</p><ul><li>例子(模拟3d球)</li></ul><p><img src="https://yaoxiaoxue-1310903949.cos.ap-nanjing.myqcloud.com/image%2FSnipaste_2023-07-25_11-28-01.png" alt=""></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1.找到画布</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> c1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">c1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getContext) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">当前浏览器不支持</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 3.绘制图形</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> radioGradient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRadialGradient</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">250</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#A6ACCD;"> )</span></span>
<span class="line"><span style="color:#A6ACCD;">      radioGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ffccff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      radioGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> radioGradient</span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arc</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI </span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="圆锥渐变" tabindex="-1">圆锥渐变 <a class="header-anchor" href="#圆锥渐变" aria-label="Permalink to &quot;圆锥渐变&quot;">​</a></h2><p><code>createConicGradient(角度, 位置x, 位置y)</code></p><p>列子:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> coneGradient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createConicGradient</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        coneGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        coneGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        coneGradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> coneGradient</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="pattern模式" tabindex="-1">pattern模式 <a class="header-anchor" href="#pattern模式" aria-label="Permalink to &quot;pattern模式&quot;">​</a></h2><ul><li>创建图案对象</li></ul><p><code>ctx.createPattern(图片对象(可以是Image对象,canvas对象), no-repeat) </code></p><p>重复方式: no-repeat不重复 , repeat, repeat-y, repeat-x</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // 3.创建图片pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">       let img = new Image()</span></span>
<span class="line"><span style="color:#A6ACCD;">       img.src = &#39;./logo.png&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       img.onload = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 创建图案对象 ctx.createPattern(图片对象(可以是Image对象,canvas对象), 重复方式) no-repeat不重复 , repeat, repeat-y, repeat-x</span></span>
<span class="line"><span style="color:#A6ACCD;">           let pattern = ctx.createPattern(img, &#39;repeat-y&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">           ctx.fillStyle = pattern</span></span>
<span class="line"><span style="color:#A6ACCD;">           ctx.fillRect(0, 0, 600, 400)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="线型-line-styles" tabindex="-1">线型 line Styles <a class="header-anchor" href="#线型-line-styles" aria-label="Permalink to &quot;线型 line Styles&quot;">​</a></h2><h3 id="line-width" tabindex="-1">line Width <a class="header-anchor" href="#line-width" aria-label="Permalink to &quot;line Width&quot;">​</a></h3><ul><li>设置线条样式, 默认1px <code>lineWidth</code></li></ul><h3 id="linecap" tabindex="-1">lineCap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;lineCap&quot;">​</a></h3><ul><li>设置线条端点样式, 默认1px <code>lineCap: butt 平齐; round 半圆; square 正方形</code></li></ul><h3 id="linejoin" tabindex="-1">lineJoin <a class="header-anchor" href="#linejoin" aria-label="Permalink to &quot;lineJoin&quot;">​</a></h3><ul><li>设置2个线段连接处的样式, 默认1px <code>lineJoin: mitter 外侧相连的角; round 角圆滑; bevel 连接处的角磨平</code></li></ul><h3 id="miterlimit" tabindex="-1">miterLimit <a class="header-anchor" href="#miterlimit" aria-label="Permalink to &quot;miterLimit&quot;">​</a></h3><ul><li>斜截面的限制 <code>ctx.miterLimit= 5</code></li></ul><h2 id="虚线" tabindex="-1">虚线 <a class="header-anchor" href="#虚线" aria-label="Permalink to &quot;虚线&quot;">​</a></h2><p>用 <code>setLineDash</code> 方法和 <code>lineDashOffset</code> 属性来制定虚线样式。setLineDash 方法接受一个数组，来指定线段与间隙的交替；lineDashOffset 属性设置起始偏移量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  // 1.找到画布</span></span>
<span class="line"><span style="color:#A6ACCD;">      let c1 = document.getElementById(&#39;c1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">      let ctx = c1.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      function render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.clearRect(0, 0, 600, 400)</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (index &gt; 400) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.moveTo(250, 150)</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineTo(300, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineTo(350, 150)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 设置线条样式, 默认1px</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineWidth = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 设置线条端点样式, butt 平齐  round 半圆    square  正方形</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineCap = &#39;square&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 设置2个线段连接处的样式, mitter 外侧相连的角    round 角被磨平了   bevel</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineJoin = &#39;mitter&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 斜截面的限制</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.miterLimit= 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 设置虚线</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.setLineDash([10,5])</span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.lineDashOffset = index</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">          ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;">          requestAnimationFrame(render)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      render()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,57),e=[o];function t(c,r,C,y,i,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
