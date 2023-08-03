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
坐标系进行了拉伸