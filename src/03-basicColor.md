# 样式和颜色控制
在绘制图形的章节里，只用到默认的线条和填充样式。而在这一章里，我们将会探讨 canvas 全部的可选项，来绘制出更加吸引人的内容。
![](https://t9.baidu.com/it/u=3062716621,2780390909&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=19843C7A13F5539045E5715F00009063&sec=1690995600&t=8a69c63ed9cbd3bd1453b72b767ee9c5)

## <span style='color: skyblue'> 色彩 Colors </span>
到目前为止，我们只看到过绘制内容的方法。如果我们想要给图形上色，有两个重要的属性可以做到：<b>fillStyle </b> 和 <b> strokeStyle。</b>

* 设置图形的填充颜色。

`fillStyle = color`

* 设置图形轮廓的颜色。

`strokeStyle = color`

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。我们迟些再回头探讨渐变和图案对象。默认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

备注： 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。

```
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";

// 
 ctx.fillStyle = 'rgba(255,200,200, .4)'  // 填充颜色
 ctx.fill(heartPath)
 ctx.strokeStyle = 'green'  // 轮廓颜色
```
## globalAlpha
* 设置全局通用的透明度

`ctx.globalAlpha = 0.5`

* 示例: 
在这个例子里，将用四色格作为背景，设置 globalAlpha 为 0.2 后，在上面画一系列半径递增的半透明圆。最终结果是一个径向渐变效果。圆叠加得越更多，原先所画的圆的透明度会越低。通过增加循环次数，画更多的圆，从中心到边缘部分，背景图会呈现逐渐消失的效果。

```
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // 画背景
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,75,75);
  ctx.fillStyle = '#FFF';

  // 设置透明度值
  ctx.globalAlpha = 0.2;

  // 画半透明圆
  for (var i=0;i<7;i++){
      ctx.beginPath();
      ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
      ctx.fill();
  }
}
```

![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667122746594-d65213b9-8b1b-4bc1-9bde-9d949af11d8d.png)

## 线性渐变
* `CanvasRenderingContext2D.createLinearGradient()`：定义线性渐变样式。
<!-- CanvasRenderingContext2D.createRadialGradient()：定义辐射渐变样式。
CanvasRenderingContext2D.createPattern()：定义图像填充样式。
createLinearGradient()方法按照给定直线，生成线性渐变的样式。 -->

```javascript
ctx.createLinearGradient(x0, y0, x1, y1)
```

`ctx.createLinearGradient(x0, y0, x1, y1)`方法接受四个参数：x0和y0是起点的横坐标和纵坐标，x1和y1是终点的横坐标和纵坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。

 * 该方法的返回值是一个`CanvasGradient`对象，该对象只有一个`addColorStop()方向`，用来指定渐变点的颜色。`addColorStop()`方法接受两个参数，第一个参数是0到1之间的一个位置量，0表示起点，1表示终点，第二个参数是一个字符串，表示 CSS 颜色。

```
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  var gradient = ctx.createLinearGradient(0, 0, 200, 0)
  gradient.addColorStop(0, 'pink')
  gradient.addColorStop(1, 'skyblue')
  ctx.fillStyle = gradient
  ctx.fillRect(10, 10, 200, 100)
```
![](https://camo.githubusercontent.com/debbc73d7a83e4371100424fa9df82fb65adc9c45345c4b2171bfebc9a1db6bf/68747470733a2f2f69302e6864736c622e636f6d2f6266732f616c62756d2f376138353733323930336436616334663533393734613637613661333166346366393365623734392e706e67)

上面代码中，定义了渐变样式gradient以后，将这个样式指定给fillStyle属性，然后fillRect()就会生成以这个样式填充的矩形区域。



<b>例子2: 一帧一帧渐变</b>
```javascript
  // 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)
        ctx.fillRect(100,200, 300, 300)
        let index = 0
        function render() {
            ctx.clearRect(0, 0, 600, 600)
            index += 0.01
            if (index > 1) {
                index = 0
            }
            let linearGradient = ctx.createLinearGradient(100, 200, 400, 500)
            linearGradient.addColorStop(0, "red")
            linearGradient.addColorStop(index, "yellow")
            linearGradient.addColorStop(1, 'blue')
            ctx.fillStyle = linearGradient
            // 3.1 绘制矩形fillRect(位置x, 位置y , 宽度, 高度)
            ctx.fillRect(100,200, 300, 300)
            requestAnimationFrame(render)
        }
        // 动画帧
        requestAnimationFrame(render)
        
```
![](http://zxjp-dzg-1301158478.cos.ap-shanghai.myqcloud.com/Image/2023-7-25/Snipaste_2023-07-25_13-35-14.png)



## 径向渐变 
`CanvasRenderingContext2D.createRadialGradient()`：定义辐射渐变样式。

createRadialGradient()方法定义一个辐射渐变，需要指定两个圆。

```
ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
```

`createRadialGradient()`方法接受六个参数，`x0`和`y0`是辐射起始的圆的圆心坐标，`r0`是起始圆的半径，`x1和y1`是辐射终止的圆的圆心坐标，`r1`是终止圆的半径。


* 例子(模拟3d球)

![](https://yaoxiaoxue-1310903949.cos.ap-nanjing.myqcloud.com/image%2FSnipaste_2023-07-25_11-28-01.png)


```javascript
    // 1.找到画布
      let c1 = document.getElementById('c1')
      // 2.绘制画笔 
      let ctx = c1.getContext('2d')
      if (!c1.getContext) {
          console.log('当前浏览器不支持')
      }
      // 3.绘制图形
      let radioGradient = ctx.createRadialGradient(250, 150, 15, 300, 200, 150 )
      radioGradient.addColorStop(0, '#ffccff');
      radioGradient.addColorStop(1, 'red');
      
      ctx.fillStyle = radioGradient
      ctx.arc(300, 200, 150, 0, Math.PI *2)
      ctx.fill()
```

## 圆锥渐变
`createConicGradient(角度, 位置x, 位置y)`

列子: 
```javascript
      let coneGradient = ctx.createConicGradient(Math.PI / 4, 300, 200)
        coneGradient.addColorStop(0, 'red');
        coneGradient.addColorStop(0.5, 'pink')
        coneGradient.addColorStop(1, 'blue');
        ctx.fillStyle = coneGradient
        ctx.fillRect(0, 0, 600, 400)
```

## pattern模式
* 创建图案对象 

 `ctx.createPattern(图片对象(可以是Image对象,canvas对象), no-repeat) `

 重复方式: no-repeat不重复 , repeat, repeat-y, repeat-x

 ```
  // 3.创建图片pattern
        let img = new Image()
        img.src = './logo.png'
        img.onload = function () {
            console.log(1);
            // 创建图案对象 ctx.createPattern(图片对象(可以是Image对象,canvas对象), 重复方式) no-repeat不重复 , repeat, repeat-y, repeat-x
            let pattern = ctx.createPattern(img, 'repeat-y')
            ctx.fillStyle = pattern
            ctx.fillRect(0, 0, 600, 400)
        }
 ```

 ## 线型 line Styles

 ### line Width
 * 设置线条样式, 默认1px `lineWidth`
 ### lineCap
 * 设置线条端点样式, 默认1px `lineCap:  butt 平齐; round 半圆; square  正方形`
 ### lineJoin
 * 设置2个线段连接处的样式, 默认1px `lineJoin: mitter 外侧相连的角; round 角圆滑; bevel 连接处的角磨平`
 ### miterLimit
 * 斜截面的限制  `ctx.miterLimit= 5`

  
  ## 虚线 
  用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式。setLineDash 方法接受一个数组，来指定线段与间隙的交替；lineDashOffset 属性设置起始偏移量。

  ```
    // 1.找到画布
        let c1 = document.getElementById('c1')
        // 2.绘制画笔 
        let ctx = c1.getContext('2d')
        let index = 0

        function render() {
            ctx.clearRect(0, 0, 600, 400)
            index++
            if (index > 400) {
                index = 0
            }
            ctx.moveTo(250, 150)
            ctx.lineTo(300, 200)
            ctx.lineTo(350, 150)
            // 设置线条样式, 默认1px
            ctx.lineWidth = 1
            // 设置线条端点样式, butt 平齐  round 半圆    square  正方形
            ctx.lineCap = 'square'
    
            // 设置2个线段连接处的样式, mitter 外侧相连的角    round 角被磨平了   bevel
            ctx.lineJoin = 'mitter'
    
            // 斜截面的限制
            ctx.miterLimit= 5;
    
            // 设置虚线
            ctx.setLineDash([10,5])
            ctx.lineDashOffset = index
            
            ctx.stroke()
            requestAnimationFrame(render)

        }

        render()
  ```


