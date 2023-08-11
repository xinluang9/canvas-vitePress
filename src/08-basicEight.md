### 合成与剪裁
注: 详细查看mdn文档

## ImageData
`ImageData` 接口描述 `<canvas/>` 元素的一个隐含像素数据的区域。使用 `ImageData()` 构造函数创建或者使用和 `canvas` 在一起的 `CanvasRenderingContext2D` 对象的创建方法： `createImageData()` 和 `getImageData()`。也可以使用 `putImageData()` 设置 `canvas` 的一部分。

### 属性
`ImageData.data 只读`
`Uint8ClampedArray` 描述了一个一维数组，包含以 `RGBA` 顺序的数据，数据使用 `0 至 255`（包含）的整数表示。

## 像素例子

#### 给图片取反色

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230810/d38f4175d3956f11.png?imageView2/1/w/300/h/150)

```javascript
    // 获取图片
    let img = new Image()
    img.src = './imgs/iTab-0.jpg'
    img.onload = function () {    
        ctx.drawImage(img, 0, 0, 600, 400)
        let imageData = ctx.getImageData(0, 0, 600, 400);

        for (let i = 0; i < imageData.data.length; i+= 4) {
            imageData.data[i] = 255- imageData.data[i]
            imageData.data[i + 1] = 255 - imageData.data[i + 1]
            imageData.data[i + 2] = 255 - imageData.data[i + 2]
            imageData.data[i + 3] = 255 // 透明度
        }
        ctx.imageData.data[i + 2](imageData, 0, 0, 300, 200, 200, 200)
        // 起点坐标, 截取图片的位置坐标,以及截取长度
    }

```
<hr />

#### 求灰度

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230810/bcc15918e5b118ea.png?imageView2/1/w/300/h/150)

```javascript
    // 获取图片
    let img = new Image()
    img.src = './imgs/iTab-0.jpg'
    img.onload = function () {    
        ctx.drawImage(img, 0, 0, 600, 400)
        let imageData = ctx.getImageData(0, 0, 600, 400);

        for (let i = 0; i < imageData.data.length; i+= 4) {
            // 求灰度,平均值
            let avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3
            imageData.data[i] = avg
            imageData.data[i + 1] = avg
            imageData.data[i + 2] = avg
            imageData.data[i + 3] = 255 // 透明度
        }
        ctx.imageData.data[i + 2](imageData, 0, 0, 300, 200, 200, 200)
        // 起点坐标, 
    }

```
<hr />


#### 设置为红色

![](https://retailtest-1301158478.picsh.myqcloud.com/image/20230810/3579fb4953ad6bce.png?imageView2/1/w/300/h/150)

```javascript
     for (let i = 0; i < imageData.data.length; i+= 4) {
            // 求灰度,平均值
            let avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3

            imageData.data[i] = 255
            imageData.data[i + 1] = 0
            imageData.data[i + 2] = 0
            imageData.data[i + 3] = 255 // 透明度
        }
        ctx.putImageData(imageData, 0, 0)
```