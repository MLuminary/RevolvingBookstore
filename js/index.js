; (function () {
  //获取的内容
  var mainbody = $('#mainbody'),
      footer = $('#footer'),
      container = $('#container'),
      content = $('.list'),
      buttons = $('.buttons'),
      icons = $('.buttons .normal'),
      joinBtn = $('.nav-join-link'),
      backTop = $('.nav-join .back');

  // 根字体自适应
  var bodyWidth = 1980,
      fontSize = 100;


  $('html').css('font-size', $('body').width() * fontSize / bodyWidth + '%')
  $(window).resize(function () {
    $('html').css('font-size', $('body').width() * fontSize / bodyWidth  + '%')
  })

  //切换内容
  var currpage = 0;
  var index = 0;
  var timer;
  function nextPage() {
    if (currpage == 5) {
      $('.list').css('left', '0');
      currpage = 0;
    }

    currpage++;
    index = (index + 1) % 5;
    iconChange(index);
    $('.list').stop().animate({ 'left': '-' + currpage * 100 + '%' }, 800);

  }

  function iconChange(index) {
    icons.eq(index).addClass('on').siblings().removeClass('on');
  }

  function stop() {
    clearTimeout(timer);
  }

  function play() {
    timer = setTimeout(function () {
      nextPage();
      play();
    }, 5000);
  }

  play();

  content.hover(stop, play)

  buttons.on('click', function(e){
    var $icon = $(e.target).parent();
    index = $icon.index();
    currpage = $icon.index();

    icons.eq(index).addClass('on').siblings().removeClass('on');
    $('.list').stop().animate({ 'left': '-' + currpage * 100 + '%' }, 800);
  })


  //join us
  joinBtn.click(function () {
    mainbody.fadeOut();
    footer.fadeOut();
    container.css('background-image','url(./images/backjoin.jpg)');
  })

  // 返回首页
  backTop.click(function(){
    mainbody.fadeIn();
    footer.fadeIn();
    container.css('background-image','url(./images/backimage.jpg)')
  })



  //loading加载
  var imgList = [
    './images/backimage.jpg',
    './images/backjoin.jpg',
    './images/page1.jpg',
    './images/page2.png',
    './images/page3-l.png',
    './images/page3-m.png',
    './images/page3-r.png',
    './images/page4.png',
    './images/page5.jpg'
  ]

  $('.loadingNum').loadingTool(function(){
    $('.text').fadeIn();
    $('.loadingNum').fadeOut(function(){
      $('#loading').fadeOut(800);
    }); 
    container.fadeIn();
  },imgList)

})()