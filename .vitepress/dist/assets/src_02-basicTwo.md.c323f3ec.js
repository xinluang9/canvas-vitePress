import{_ as s,o as a,c as n,U as l}from"./chunks/framework.a3e4ade3.js";const d=JSON.parse('{"title":"canvas绘制基本图形","description":"","frontmatter":{},"headers":[],"relativePath":"src/02-basicTwo.md"}'),p={name:"src/02-basicTwo.md"},e=l(`<h1 id="canvas绘制基本图形" tabindex="-1">canvas绘制基本图形 <a class="header-anchor" href="#canvas绘制基本图形" aria-label="Permalink to &quot;canvas绘制基本图形&quot;">​</a></h1><p>既然我们已经设置了 canvas 环境，我们可以深入了解如何在 canvas 上绘制。到本文的最后，你将学会如何绘制矩形，三角形，直线，圆弧和曲线，变得熟悉这些基本的形状。绘制物体到 Canvas 前，需掌握路径，我们看看到底怎么做。</p><h2 id="栅格" tabindex="-1">栅格 <a class="header-anchor" href="#栅格" aria-label="Permalink to &quot;栅格&quot;">​</a></h2><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667121349188-0130b309-19cf-49db-a6bb-c02ea6c317ed.png" alt=""></p><p>在我们开始画图之前，我们需要了解一下画布栅格（canvas grid）以及坐标空间。上一页中的 HTML 模板中有个宽 150px, 高 150px 的 canvas 元素。如右图所示，canvas 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 canvas 元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素（坐标为（x,y））。在课程的最后我们会平移原点到不同的坐标上，旋转网格以及缩放。现在我们还是使用原来的设置。</p><h2 id="绘制矩形" tabindex="-1">绘制矩形 <a class="header-anchor" href="#绘制矩形" aria-label="Permalink to &quot;绘制矩形&quot;">​</a></h2><p>不同于 SVG，canvas 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。</p><p>首先，我们回到矩形的绘制中。canvas 提供了三种方法绘制矩形：</p><h3 id="_1-绘制一个填充的矩形-填充模式" tabindex="-1">1.绘制一个填充的矩形 (填充模式) <a class="header-anchor" href="#_1-绘制一个填充的矩形-填充模式" aria-label="Permalink to &quot;1.绘制一个填充的矩形 (填充模式)&quot;">​</a></h3><p><code>fillRect(x, y, width, height)</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // 1.找到画布</span></span>
<span class="line"><span style="color:#A6ACCD;">        let c1 = document.getElementById(&#39;c1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">        let ctx = c1.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!c1.getContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;当前浏览器不支持&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3.绘制图形</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fillRect(100,150, 300, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-绘制一个矩形的边框-路径模式" tabindex="-1">2.绘制一个矩形的边框 (路径模式) <a class="header-anchor" href="#_2-绘制一个矩形的边框-路径模式" aria-label="Permalink to &quot;2.绘制一个矩形的边框 (路径模式)&quot;">​</a></h3><p><code>strokeRect(x, y, width, height)</code></p><ul><li>beginPath()</li></ul><p>新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。</p><ul><li>closePath()</li></ul><p>闭合路径之后图形绘制命令又重新指向到上下文中。</p><ul><li>stroke()</li></ul><p>通过线条来绘制图形轮廓。</p><ul><li>fill()</li></ul><p>通过填充路径的内容区域生成实心的图形。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">       // 1.找到画布   </span></span>
<span class="line"><span style="color:#A6ACCD;">         ...略</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">         ...略</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. 绘制路径矩形 strokeRect(位置x, 位置y , 宽度, 高度)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ctx.strokeRect(100, 150, 266, 166)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 拆分写法</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.rect(100, 150, 266, 166) // 画一个矩形,只写这一步什么都看不到</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()  // 绘制路径</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-清除指定矩形区域-让清除部分完全透明-清除模式" tabindex="-1">3.清除指定矩形区域，让清除部分完全透明 (清除模式) <a class="header-anchor" href="#_3-清除指定矩形区域-让清除部分完全透明-清除模式" aria-label="Permalink to &quot;3.清除指定矩形区域，让清除部分完全透明 (清除模式)&quot;">​</a></h3><p><code>clearRect(x, y, width, height)</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // 3.绘制图形</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3.1 绘制路径矩形 strokeRect(位置x, 位置y , 宽度, 高度)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // beginPath和closePath 可以完成路径分段</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ctx.strokeRect(100, 150, 266, 166)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ctx.fillRect(180, 230, 266, 166);</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 拆分写法</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()  // 开始下笔</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.rect(100, 150, 266, 166)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()   // 抬笔, 不停顿会一笔画完,都被填充颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()  // 又下笔</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.rect(180, 230, 266, 166)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fill()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()   // 停止作画</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。</p><p>下面的 draw() 函数是前一页中取得的，现在就来使用上面的三个函数。</p><h3 id="矩形-rectangular-例子" tabindex="-1">矩形（Rectangular）例子 <a class="header-anchor" href="#矩形-rectangular-例子" aria-label="Permalink to &quot;矩形（Rectangular）例子&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function draw() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (canvas.getContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillRect(25, 25, 100, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.clearRect(45, 45, 60, 60);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.strokeRect(50, 50, 50, 50);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667121532600-d949eddb-9dba-42db-82c2-0aa93b1fe19e.png" alt=""></p><p>fillRect()函数绘制了一个边长为 100px 的黑色正方形。clearRect()函数从正方形的中心开始擦除了一个 6060px 的正方形，接着strokeRect()在清除区域内生成一个 5050 的正方形边框。</p><p>接下来我们能够看到 clearRect() 的两个可选方法，然后我们会知道如何改变渲染图形的填充颜色及描边颜色。</p><p>不同于下一节所要介绍的路径函数（path function），以上的三个函数绘制之后会马上显现在 canvas 上，即时生效。</p><h2 id="线" tabindex="-1">线 <a class="header-anchor" href="#线" aria-label="Permalink to &quot;线&quot;">​</a></h2><p><code>lineTo(x, y)</code></p><ul><li><p>绘制一条从当前位置到指定 x 以及 y 位置的直线。</p></li><li><p>该方法有两个参数：x 以及 y，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过moveTo()函数改变。</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">         // 画直线</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(300,200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(400,250)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 画三角形</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(320,260)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(450,300)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(500,400)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(320,260)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 画三角形</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(320,160)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(450,200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(500,300)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.lineTo(320,160)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fill()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如图:</p><p><img src="http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-23/Snipaste_2023-06-23_15-47-01.png" alt=""></p><h2 id="圆弧" tabindex="-1">圆弧 <a class="header-anchor" href="#圆弧" aria-label="Permalink to &quot;圆弧&quot;">​</a></h2><p>绘制圆弧或者圆，我们使用<code>arc()方法</code>。当然可以使用<code>arcTo()</code>，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。</p><p><code>arc(x, y, radius, startAngle, endAngle, anticlockwise)</code></p><ul><li>弧度=(Math.PI/180)*角度。 Math.PI = 180deg</li><li>x,y为绘制圆弧所在圆上的圆心坐标</li><li>startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。</li><li>参数anticlockwise为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // arc是绘制圆弧的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        //  ctx.arc(圆心x, 圆心y, 半径, 开始的角度, 结束的角度, 逆时针还是顺时针(默认顺时针false))</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.arc(300, 200, 60, 0, Math.PI / 2, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ctx.fill</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="绘制笑脸" tabindex="-1">绘制笑脸 <a class="header-anchor" href="#绘制笑脸" aria-label="Permalink to &quot;绘制笑脸&quot;">​</a></h3><p><img src="http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-23/Snipaste_2023-06-23_15-36-21.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // arc是绘制圆弧的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        //  ctx.arc(圆心x, 圆心y, 半径, 开始的角度, 结束的角度, 逆时针还是顺时针(默认顺时针false))</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 画个笑脸</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.arc(300, 200, 80, 0, Math.PI * 2 )   </span></span>
<span class="line"><span style="color:#A6ACCD;">        // 使用moveTo可以绘制一条不连续的线</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(343.3, 225 )  // 下一次下笔的起点</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 嘴巴</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.arc(300, 200, 50, Math.PI / 6, Math.PI * 5 / 6)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(275, 180 )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 眼睛</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.arc(270, 180, 5, 0, Math.PI * 2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(325, 180 )</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.arc(320, 180, 5, 0, Math.PI * 2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="使用arcto方法" tabindex="-1">使用arcTo方法 <a class="header-anchor" href="#使用arcto方法" aria-label="Permalink to &quot;使用arcTo方法&quot;">​</a></h3><p>这是一段绘制圆弧的简单的代码片段。基础点是蓝色的，两个控制点是红色的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    var canvas = document.getElementById(&quot;canvas&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var ctx = canvas.getContext(&quot;2d&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.setLineDash([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.moveTo(150, 20);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.arcTo(150,100,50,20,30);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // base point</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillRect(150, 20, 10, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // control point one</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillRect(150, 100, 10, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // control point two</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.fillRect(50, 20, 10, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.setLineDash([5,5])</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.moveTo(150, 20);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.lineTo(150,100);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.lineTo(50, 20);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.beginPath();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.arc(120,38,30,0,2*Math.PI);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ctx.stroke();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667149844431-6d0f587b-e7e9-426f-b651-9a77a9bc0758.png" alt=""></p><h2 id="二次贝塞尔曲线及三次贝塞尔曲线" tabindex="-1">二次贝塞尔曲线及三次贝塞尔曲线 <a class="header-anchor" href="#二次贝塞尔曲线及三次贝塞尔曲线" aria-label="Permalink to &quot;二次贝塞尔曲线及三次贝塞尔曲线&quot;">​</a></h2><p>下一个十分有用的路径类型就是<span style="color:#007AFF;">贝塞尔曲线</span>。二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。</p><p>quadraticCurveTo(cp1x, cp1y, x, y)</p><p>绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。</p><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667150886162-f5d91ebd-e23a-4468-9749-f20c62dbd7d1.gif" alt=""></p><p>bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)</p><p>绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。</p><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667150992425-4cd7f759-76d7-466d-836a-1be44e801f83.gif" alt=""></p><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667122134189-e9cef021-bf64-4c7f-8bac-15f594a61899.png" alt=""></p><p>右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。</p><p>参数 x、y 在这两个方法中都是结束点坐标。cp1x,cp1y为坐标中的第一个控制点，cp2x,cp2y为坐标中的第二个控制点。</p><p>使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 Adobe Illustrators 这样的矢量软件，我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。</p><p>下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。</p><h3 id="二次贝塞尔曲线" tabindex="-1">二次贝塞尔曲线 <a class="header-anchor" href="#二次贝塞尔曲线" aria-label="Permalink to &quot;二次贝塞尔曲线&quot;">​</a></h3><p>这个例子使用多个贝塞尔曲线来渲染对话气泡。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // 1.找到画布</span></span>
<span class="line"><span style="color:#A6ACCD;">        let c1 = document.getElementById(&#39;c1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">        let ctx = c1.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!c1.getContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;当前浏览器不支持&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(250, 250)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ctx.quadraticCurveTo(cpx, cpy, x, y);</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo(150, 250, 150, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo(150, 100, 300, 100)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo( 450,100, 450, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo( 450, 250, 300, 250)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo( 300, 330, 180, 330)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.quadraticCurveTo( 250, 300, 250, 250 )</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-27/%E7%81%AB%E7%A0%81%E5%BA%97%E6%8E%8C%E6%9F%9Cv2.png" alt=""></p><h3 id="三次贝塞尔曲线" tabindex="-1">三次贝塞尔曲线 <a class="header-anchor" href="#三次贝塞尔曲线" aria-label="Permalink to &quot;三次贝塞尔曲线&quot;">​</a></h3><p>这个例子使用贝塞尔曲线绘制心形。 <img src="http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-27/Snipaste_2023-06-27_16-54-44.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // 1.找到画布</span></span>
<span class="line"><span style="color:#A6ACCD;">        let c1 = document.getElementById(&#39;c1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2.绘制画笔 </span></span>
<span class="line"><span style="color:#A6ACCD;">        let ctx = c1.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(ctx);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!c1.getContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;当前浏览器不支持&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 爱心</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.beginPath()</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.moveTo(300, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 两个控制点, 一个终点</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.bezierCurveTo(350, 150, 400, 200, 300, 270)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.bezierCurveTo(200, 200, 250, 150, 300, 200)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.closePath()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="path2d-对象" tabindex="-1">Path2D 对象 <a class="header-anchor" href="#path2d-对象" aria-label="Permalink to &quot;Path2D 对象&quot;">​</a></h2><p>正如我们在前面例子中看到的，你可以使用一系列的路径和绘画命令来把对象“画”在画布上。为了简化代码和提高性能，Path2D对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。</p><p><b>怎样产生一个 Path2D 对象呢？</b></p><p>Path2D()</p><p>Path2D()会返回一个新初始化的 Path2D 对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含 SVG path 数据的字符串作为变量）。</p><p>所有的路径方法比如moveTo, rect, arc或quadraticCurveTo等，如我们前面见过的，都可以在 Path2D 中使用。</p><p>Path2D API 添加了 addPath作为将path结合起来的方法。当你想要从几个元素中来创建对象时，这将会很实用。比如：</p><p>Path2D.addPath(path [, transform])</p><p>添加了一条路径到当前路径（可能添加了一个变换矩阵）。</p><h2 id="path2d-示例" tabindex="-1">Path2D 示例 <a class="header-anchor" href="#path2d-示例" aria-label="Permalink to &quot;Path2D 示例&quot;">​</a></h2><p>在这个例子中，我们创造了一个矩形和一个圆。它们都被存为 Path2D 对象，后面再派上用场。随着新的 Path2D API 产生，几种方法也相应地被更新来使用 Path2D 对象而不是当前路径。在这里，带路径参数的stroke和fill可以把对象画在画布上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    function draw() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (canvas.getContext){</span></span>
<span class="line"><span style="color:#A6ACCD;">        var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        var rectangle = new Path2D();</span></span>
<span class="line"><span style="color:#A6ACCD;">        rectangle.rect(10, 10, 50, 50);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        var circle = new Path2D();</span></span>
<span class="line"><span style="color:#A6ACCD;">        circle.moveTo(125, 35);</span></span>
<span class="line"><span style="color:#A6ACCD;">        circle.arc(100, 35, 25, 0, 2 * Math.PI);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.stroke(rectangle);</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx.fill(circle);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667122399198-5dbffae0-64b1-4130-912a-dfef2786941e.png" alt=""></p><h2 id="使用-svg-paths" tabindex="-1">使用 SVG paths <a class="header-anchor" href="#使用-svg-paths" aria-label="Permalink to &quot;使用 SVG paths&quot;">​</a></h2><p>新的 Path2D API 有另一个强大的特点，就是使用 SVG path data 来初始化 canvas 上的路径。这将使你获取路径时可以以 SVG 或 canvas 的方式来重用它们。</p><p>这条路径将先 <code>移动到点 (M10 10) </code> 然后再<code>水平移动 80 个单位(h 80)</code>，然后<code>下移 80 个单位 (v 80)</code>，接着<code>左移 80 个单位 (h -80)</code>，再<code>回到起点处 (z)</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var p = new Path2D(&quot;M10 10 h 80 v 80 h -80 Z&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,88),c=[e];function o(t,i,r,C,A,y){return a(),n("div",null,c)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};
