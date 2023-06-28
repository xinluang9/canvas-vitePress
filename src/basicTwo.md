# canvas绘制基本图形
既然我们已经设置了 canvas 环境，我们可以深入了解如何在 canvas 上绘制。到本文的最后，你将学会如何绘制矩形，三角形，直线，圆弧和曲线，变得熟悉这些基本的形状。绘制物体到 Canvas 前，需掌握路径，我们看看到底怎么做。

## 栅格
![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667121349188-0130b309-19cf-49db-a6bb-c02ea6c317ed.png)

在我们开始画图之前，我们需要了解一下画布栅格（canvas grid）以及坐标空间。上一页中的 HTML 模板中有个宽 150px, 高 150px 的 canvas 元素。如右图所示，canvas 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 canvas 元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素（坐标为（x,y））。在课程的最后我们会平移原点到不同的坐标上，旋转网格以及缩放。现在我们还是使用原来的设置。

## 绘制矩形
不同于 SVG，canvas 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

首先，我们回到矩形的绘制中。canvas 提供了三种方法绘制矩形：

### 绘制一个填充的矩形 (填充模式)

```fillRect(x, y, width, height)```
```
        // 1.找到画布
        let c1 = document.getElementById('c1')
        // 2.绘制画笔 
        let ctx = c1.getContext('2d')
        if (!c1.getContext) {
            console.log('当前浏览器不支持')
        }
        // 3.绘制图形
        // 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)
        ctx.fillRect(100,150, 300, 200)
```

### 绘制一个矩形的边框 (路径模式)

```strokeRect(x, y, width, height)```

* beginPath()    

 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

* closePath()

闭合路径之后图形绘制命令又重新指向到上下文中。

* stroke()

通过线条来绘制图形轮廓。

* fill()

通过填充路径的内容区域生成实心的图形。
```
       // 1.找到画布   
         ...略
        // 2.绘制画笔 
         ...略
        // 3. 绘制路径矩形 strokeRect(位置x, 位置y , 宽度, 高度)
        // ctx.strokeRect(100, 150, 266, 166)

        // 拆分写法
        ctx.rect(100, 150, 266, 166) // 画一个矩形,只写这一步什么都看不到
        ctx.stroke()  // 绘制路径
```

### 清除指定矩形区域，让清除部分完全透明 (清除模式)

```clearRect(x, y, width, height)```

```
        // 3.绘制图形
        // 3.1 绘制路径矩形 strokeRect(位置x, 位置y , 宽度, 高度)
        // beginPath和closePath 可以完成路径分段
        // ctx.strokeRect(100, 150, 266, 166)
        // ctx.fillRect(180, 230, 266, 166);
          // 拆分写法
        ctx.beginPath()  // 开始下笔
        ctx.rect(100, 150, 266, 166)
        ctx.stroke()
        ctx.closePath()   // 抬笔, 不停顿会一笔画完,都被填充颜色
        
        ctx.beginPath()  // 又下笔
        ctx.rect(180, 230, 266, 166)
        ctx.fill()
        ctx.closePath()   // 停止作画

```



上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。

下面的 draw() 函数是前一页中取得的，现在就来使用上面的三个函数。


### 矩形（Rectangular）例子
```
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

```

![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667121532600-d949eddb-9dba-42db-82c2-0aa93b1fe19e.png)

fillRect()函数绘制了一个边长为 100px 的黑色正方形。clearRect()函数从正方形的中心开始擦除了一个 6060px 的正方形，接着strokeRect()在清除区域内生成一个 5050 的正方形边框。

接下来我们能够看到 clearRect() 的两个可选方法，然后我们会知道如何改变渲染图形的填充颜色及描边颜色。

不同于下一节所要介绍的路径函数（path function），以上的三个函数绘制之后会马上显现在 canvas 上，即时生效。

## 线
`lineTo(x, y)`

* 绘制一条从当前位置到指定 x 以及 y 位置的直线。

* 该方法有两个参数：x 以及 y，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过moveTo()函数改变。

```
         // 画直线
        ctx.beginPath()
        ctx.moveTo(300,200)
        ctx.lineTo(400,250)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        // 画三角形
        ctx.moveTo(320,260)
        ctx.lineTo(450,300)
        ctx.lineTo(500,400)
        ctx.lineTo(320,260)
        ctx.stroke()
        ctx.closePath()
        
        ctx.beginPath()
        // 画三角形
        ctx.moveTo(320,160)
        ctx.lineTo(450,200)
        ctx.lineTo(500,300)
        ctx.lineTo(320,160)
        ctx.fill()
        ctx.closePath()
```

如图:

![](http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-23/Snipaste_2023-06-23_15-47-01.png)


## 圆弧
绘制圆弧或者圆，我们使用`arc()方法`。当然可以使用`arcTo()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

`arc(x, y, radius, startAngle, endAngle, anticlockwise)`
* 弧度=(Math.PI/180)*角度。   Math.PI = 180deg
* x,y为绘制圆弧所在圆上的圆心坐标
* startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。
* 参数anticlockwise为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。

```
        // arc是绘制圆弧的方法
        //  ctx.arc(圆心x, 圆心y, 半径, 开始的角度, 结束的角度, 逆时针还是顺时针(默认顺时针false))
        ctx.arc(300, 200, 60, 0, Math.PI / 2, true)
        // ctx.fill
        
        ctx.stroke()
```

### 绘制笑脸
![](http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-23/Snipaste_2023-06-23_15-36-21.png)

```
 // arc是绘制圆弧的方法
        //  ctx.arc(圆心x, 圆心y, 半径, 开始的角度, 结束的角度, 逆时针还是顺时针(默认顺时针false))
        // 画个笑脸

        ctx.arc(300, 200, 80, 0, Math.PI * 2 )   
        // 使用moveTo可以绘制一条不连续的线

        ctx.moveTo(343.3, 225 )  // 下一次下笔的起点

        // 嘴巴
        ctx.arc(300, 200, 50, Math.PI / 6, Math.PI * 5 / 6)
        ctx.moveTo(275, 180 )

        // 眼睛
        ctx.arc(270, 180, 5, 0, Math.PI * 2)

        ctx.moveTo(325, 180 )
        ctx.arc(320, 180, 5, 0, Math.PI * 2)

        ctx.stroke()
```

### 使用arcTo方法
这是一段绘制圆弧的简单的代码片段。基础点是蓝色的，两个控制点是红色的。
```
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.setLineDash([])
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.arcTo(150,100,50,20,30);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    // base point
    ctx.fillRect(150, 20, 10, 10);

    ctx.fillStyle = 'red';
    // control point one
    ctx.fillRect(150, 100, 10, 10);
    // control point two
    ctx.fillRect(50, 20, 10, 10);
    //
    ctx.setLineDash([5,5])
    ctx.moveTo(150, 20);
    ctx.lineTo(150,100);
    ctx.lineTo(50, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(120,38,30,0,2*Math.PI);
    ctx.stroke();
  ```

  ![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667149844431-6d0f587b-e7e9-426f-b651-9a77a9bc0758.png)

 ## 二次贝塞尔曲线及三次贝塞尔曲线
下一个十分有用的路径类型就是<span style='color: #007AFF'>贝塞尔曲线</span>。二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

quadraticCurveTo(cp1x, cp1y, x, y)

绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667150886162-f5d91ebd-e23a-4468-9749-f20c62dbd7d1.gif)

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。

![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667150992425-4cd7f759-76d7-466d-836a-1be44e801f83.gif)

![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667122134189-e9cef021-bf64-4c7f-8bac-15f594a61899.png)

右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

参数 x、y 在这两个方法中都是结束点坐标。cp1x,cp1y为坐标中的第一个控制点，cp2x,cp2y为坐标中的第二个控制点。

使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 Adobe Illustrators 这样的矢量软件，我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。

下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。

### 二次贝塞尔曲线
这个例子使用多个贝塞尔曲线来渲染对话气泡。

```
        // 1.找到画布
        let c1 = document.getElementById('c1')
        // 2.绘制画笔 
        let ctx = c1.getContext('2d')
        if (!c1.getContext) {
            console.log('当前浏览器不支持')
        }
        ctx.moveTo(250, 250)
        // ctx.quadraticCurveTo(cpx, cpy, x, y);
        ctx.quadraticCurveTo(150, 250, 150, 200)
        ctx.quadraticCurveTo(150, 100, 300, 100)
        ctx.quadraticCurveTo( 450,100, 450, 200)
        ctx.quadraticCurveTo( 450, 250, 300, 250)
        ctx.quadraticCurveTo( 300, 330, 180, 330)
        ctx.quadraticCurveTo( 250, 300, 250, 250 )
        ctx.stroke()
```

![](http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-27/火码店掌柜v2.png)



### 三次贝塞尔曲线
这个例子使用贝塞尔曲线绘制心形。
![](http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-6-27/Snipaste_2023-06-27_16-54-44.png)
```
        // 1.找到画布
        let c1 = document.getElementById('c1')
        // 2.绘制画笔 
        let ctx = c1.getContext('2d')
        console.log(ctx);
        if (!c1.getContext) {
            console.log('当前浏览器不支持')
        }
        // 爱心
        ctx.beginPath()
        ctx.moveTo(300, 200)
        // 两个控制点, 一个终点
        ctx.bezierCurveTo(350, 150, 400, 200, 300, 270)
        ctx.bezierCurveTo(200, 200, 250, 150, 300, 200)
        ctx.stroke()

        ctx.closePath()
```