### 合成与剪裁

## CanvasRenderingContext2D.clip()

`CanvasRenderingContext2D.clip()` 是 Canvas 2D API 将当前创建的路径设置为当前剪切路径的方法。

### 语法

```
void ctx.clip();
void ctx.clip(fillRule);
void ctx.clip(path, fillRule);
```

参数

* `fillRule`
这个算法判断一个点是在路径内还是在路径外。 允许的值：

 `nonzero`
非零环绕原则，默认的原则。

`evenodd`
奇偶环绕原则。

* `path`
需要剪切的 Path2D 路径。

例子: 
```javascript
        // 1.找到画布
        let c1 = document.getElementById('c1')
        // 2.绘制画笔 
        let ctx = c1.getContext('2d')
        console.log(ctx);
        if (!c1.getContext) {
            console.log('当前浏览器不支持')
        }

        // 爱心
        let heartPath = new Path2D()
        heartPath.moveTo(300, 200)
        // 两个控制点, 一个终点
        heartPath.bezierCurveTo(350, 150, 400, 200, 300, 270)
        heartPath.bezierCurveTo(200, 200, 250, 150, 300, 200)
        ctx.stroke(heartPath)

        ctx.clip(heartPath) // 剪切路径

        let img = new Image()
        img.src = '../19-变换/pic.jpg'
        img.onload = function () {
            ctx.drawImage(img, 0, 0)
        }

        ctx.stroke(polyline)
``` 