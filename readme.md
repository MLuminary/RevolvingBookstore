# 旋转书苑众筹页面

这个页面说实话写了四五天，bug多如牛毛，再次将这个项目的一些耗时点整理一下。

## 字体自适应

我一开始想法是根据高度来确定根字体的大小，然后在宽度缩小的情况下出了很多问题。

```js
$('html').css('font-size', $('body').width() * fontSize / bodyWidth + '%')
  $(window).resize(function () {
    $('html').css('font-size', $('body').width() * fontSize / bodyWidth  + '%')
  })
```

这样的写的话，页面中的元素用``rem``就会跟随浏览器宽度自适应变化。

