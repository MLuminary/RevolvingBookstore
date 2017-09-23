;(function(){
  //获取内容
  var mainbody = $('#mainbody'),
  footer = $('#footer'),
  container = $('#container'),
  content = $('.list'),
  buttons = $('.buttons'),
  joinBtn = $('.nav-join-link'),
  backTop = $('.nav-join .back');

  //加载
  var imgList = [
    './images/backimage.jpg',
    './images/backjoin.jpg',
    './images/m-page1.jpg',
    './images/m-page2.png',
    './images/m-page3-l.png',
    './images/page3-m.png',
    './images/m-page3-r.png',
    './images/m-page4.png',
    './images/m-page5.jpg'
  ]
//loading加载

$('.loadingNum').loadingTool(function(){
  $('.text').fadeIn();
  $('.loadingNum').fadeOut(function(){
    $('#loading').fadeOut(800);
    $('#video video')[0].play();
  }); 
  $('#container').fadeIn();
},imgList)


//join us
joinBtn.click(function () {
  mainbody.fadeOut();
  footer.fadeOut();
  container.css({'background-image':'url(./images/m-backjoin.jpg)','height':"100%"});
})

// 返回首页
backTop.click(function(){
  mainbody.fadeIn();
  footer.fadeIn();
  container.css({'background-image':'url(./images/m-backimage.jpg)','height':'auto'})
})


})()