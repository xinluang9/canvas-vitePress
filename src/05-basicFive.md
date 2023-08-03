# 绘制文字
* `fillText('文本', 文本起点x, 文本起点y, 绘制文字最大的宽度)`
   在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。

   ![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667105790357-823d37a9-cd8d-420e-99cd-c86a03368c82.png)
* `strokeText('文本', 文本起点x, 文本起点y, 绘制文字最大的宽度)`
   在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

   ![](https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/1667105810468-4de7261e-5a6e-4f3e-b0aa-46907bc005ea.png)

## 文本对齐选项 
`textAlign`

 属性:  start(默认), end, left, right, center


## 文本基线对齐
`textBaseline`

属性:  top, bottom, alphabetic, middle

例:    `ctx.textBaseline = 'alphabetic'`

## 文本的方向
   ` ctx.direction = 'rtl'`

## 预测量文本宽度
`let text = ctx.measureText('hi!')`