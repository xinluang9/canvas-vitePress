# 几何变换

canvas现在被大量地运用于游戏等动画领域，最主要的归功于它提供的一系列几何变换方法，使得动画更加地容易。所以其几何变换是非常重要的一节。

在本教程前面的部分中，我们已经了解了 Canvas 网格和坐标空间。到目前为止，我们只是根据我们的需要使用默认的网格，改变整个画布的大小。变形是一种更强大的方法，可以将原点移动到另一点、对网格进行旋转和缩放。

## translate 位移
`CanvasRenderingContext2D.translate()`方法用于平移图像。它接受两个参数，分别是 x 轴和 y 轴移动的距离（单位像素）。

<b>注: 平移的是坐标原点,会在前一次平移的基础上平移</b>

例: 

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230803/426a06a7f5ddc822.png)

```
    // 1.找到画布
    let c1 = document.getElementById('c1')
    console.log(c1);
    if (!c1.getContext) {
        window.prompt('当前浏览器不支持canvas, 请下载最新浏览器')
    }
    // 2.获取画笔
    let ctx = c1.getContext('2d')
    // 位移 水平 50, 垂直方向 50
    ctx.translate(50, 50)
    ctx.fillRect(0, 0, 50, 50)
    ctx.translate(50, 50)
    ctx.fillRect(0, 0, 50, 50)
    ctx.translate(50, 50)
    ctx.fillRect(0, 0, 50, 50)
    
```

## scale 拉伸
`CanvasRenderingContext2D.scale()`：图像缩放


<b>注: 坐标系进行了拉伸, 据原点的位置也会被拉伸</b>

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230803/b99f28d48172ab49.png?imageView2/1/w/100/h/100)

```
    // 1.找到画布
    let c1 = document.getElementById('c1')
    if (!c1.getContext) {
        window.prompt('当前浏览器不支持canvas, 请下载最新浏览器')
    } 
    // 2.获取画笔
    let ctx = c1.getContext('2d')
    // 位移 水平 50, 垂直方向 50
    // ctx.translate(50, 50)
    // x轴拉伸了5倍, y轴拉伸了2倍
    ctx.scale(5,2)
    ctx.fillRect(10, 10, 50, 50)
```
## rotate 拉伸
`CanvasRenderingContext2D.scale()`：图像缩放


<b>注: 坐标系进行了拉伸, 据原点的位置也会被拉伸</b>

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230803/b99f28d48172ab49.png?imageView2/1/w/100/h/100)

```
    // 1.找到画布
    let c1 = document.getElementById('c1')
    if (!c1.getContext) {
        window.prompt('当前浏览器不支持canvas, 请下载最新浏览器')
    } 
    // 2.获取画笔
    let ctx = c1.getContext('2d')
    // 位移 水平 50, 垂直方向 50
    // ctx.translate(50, 50)
    // x轴拉伸了5倍, y轴拉伸了2倍
    ctx.scale(5,2)
    ctx.fillRect(10, 10, 50, 50)
```

### 注意  rotate和scale, translate等一起使用时,顺序不同,效果也不一样

## transform()
`CanvasRenderingContext2D.transform()` 是 Canvas 2D API 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。你可以缩放、旋转、移动和倾斜上下文。

参见 setTransform() 方法，这个方法使用单位矩阵重新设置当前的变换并且会调用 transform()。

语法
void ctx.transform(a, b, c, d, e, f);

参数

`a (m11)`
水平缩放。

`b (m12)`
垂直倾斜。

`c (m21)`
水平倾斜。

`d (m22)`
垂直缩放。

`e (dx)`
水平移动。

`f (dy)`
垂直移动。

示例: 
倾斜形状
这是一段使用 transform 方法的简单的代码片段。

```javascript
  const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.transform(1, 0.2, 0.8, 1, 0, 0);
    ctx.fillRect(0, 0, 100, 100);
```

结果
        1![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230803/bdc3510e5fec8956.png?imageView2/1/w/100/h/100)


## globalCompositeOperation

Canvas 2D API 的` CanvasRenderingContext2D.globalCompositeOperation` 属性设置要在绘制新形状时应用的合成操作的类型，其中 type 是用于标识要使用的合成或混合模式操作的字符串。
语法: `ctx.globalCompositeOperation = type;`

类型: 参考mdn

https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

### 例子: 刮刮乐

js

```javascript
    // 1.找到画布
    let c1 = document.getElementById('c1')
    console.log(c1);
    if (!c1.getContext) {
        window.prompt('当前浏览器不支持canvas, 请下载最新浏览器')
    }
    // 2.获取画笔
    let ctx = c1.getContext('2d')
    let ggl = new Image()
    ggl.src = './pic.jpg'
    ggl.onload = function() {
        ctx.drawImage(ggl, 0, 0, 600, 400)
    }
    let mouseStatu = false
    document.onmousedown = function() {
        mouseStatu = true
    }
    document.onmouseup = function() {
        mouseStatu = false
    }

    document.onmousemove = function(e) {
        if (mouseStatu) {
            ctx.globalCompositeOperation='destination-out';
            ctx.arc(e.pageX, e.pageY, 20, 0, Math.PI * 2, true)
            ctx.fill()
            let txt = document.getElementById('txt')
        
        }
    }
    let num = Math.random()
    if (num < 0.5) {
        txt.innerText = '你中了一个亿!'
    }

```

```html
    <canvas id="c1" width="600" height="400" > </canvas>
    <div id="txt">谢谢惠顾!</div>
```

```css
        canvas {
            border: 1px solid #000;
            position: absolute;
            z-index: 10;
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 600px;
            height: 400px;
            line-height: 400px;
            text-align: center;
            font-size: 28px;
            color: red;
        }
```