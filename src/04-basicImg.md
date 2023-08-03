# 绘制图片和视频

## 绘制图片

Canvas API 允许将图像文件写入画布，做法是读取图片后，使用`drawImage()`方法将这张图片放上画布。

`CanvasRenderingContext2D.drawImage()`有三种使用格式。
```
ctx.drawImage(image, dx, dy);
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

各个参数的含义如下。

* image：图像元素
* sx：图像内部的横坐标，用于映射到画布的放置点上。
* sy：图像内部的纵坐标，用于映射到画布的放置点上。
* sWidth：图像在画布上的宽度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的宽度。
* sHeight：图像在画布上的高度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的高度。
* dx：画布内部的横坐标，用于放置图像的左上角
* dy：画布内部的纵坐标，用于放置图像的右上角
* dWidth：图像在画布内部的宽度，会产生缩放效果。
* dHeight：图像在画布内部的高度，会产生缩放效果。

### 方式一
第一种绘制图片的方式, 参数1为图片对象, 参数2为将图片渲染到画布的水平位置, 参数2为将图片渲染到画布的垂直位置

 `ctx.drawImage(img, 0, 0)`

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230801/dd93b2263cfb4c25.png)
### 方式二
 第二种绘制图片的方式, 参数1为图片对象, 参数2为将图片渲染到画布的水平位置, 参数2为将图片渲染到画布的垂直位置,参数4,5将图片缩放到对应的宽度 高度

 `ctx.drawImage(img, 0, 0, 600, 400)`

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230801/ed6be9af7e278e8e.png)
### 方式三
 第三种绘制图片的方式, img参数后面的四个参数分别为源图片上面 要裁剪的起点位置和矩形的宽高, 后面的四个参数分别为画布的位置和要渲染的矩形宽高

 `ctx.drawImage(img, 1000, 500, 1920, 1080, 0, 0, 600, 400 )`

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230801/f266c92e2449cf01.png)

## 绘制视频

` ctx.drawImage(video, 0, 0, 600, 400)`

列子:

```javascript

   // 3.拿到元素
    let video = document.querySelector('video')
    let btn = document.querySelector('button')
    let img = new Image()
    img.src = './imgs/tupian.png'
    // 点击按钮播放
    btn.onclick = function() {
        video.play()
        render()
    }

    function render() {
        // 把视频和图片都放到canvas
        ctx.drawImage(video, 0, 0, 600, 400)
        ctx.drawImage(img, 500, 350, 100, 50)
        // 一帧一帧变换
        requestAnimationFrame(render)
    }

```