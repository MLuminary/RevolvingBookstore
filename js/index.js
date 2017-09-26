; (function () {

  //如果是移动端就跳转
  var browser = {
    versions: function () {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {//移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }

  if (browser.versions.mobile || browser.versions.ios || browser.versions.android ||
    browser.versions.iPhone || browser.versions.iPad) {
    window.location.href = "mobilePage.html";
  }


  var icons = $('.buttons .normal'),
    content = $('.list'),
    buttons = $('.buttons');

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
    './images/page1.jpg',
    './images/page2.png',
    './images/page3-l.png',
    './images/page3-m.png',
    './images/page3-r.png',
    './images/page4.png',
    './images/page5.jpg',
    './images/page5-t.jpg'
  ]

  //loading加载

  $('.loadingNum').loadingTool(function () {
    $('.text').fadeIn();
    $('.loadingNum').fadeOut(function () {
      $('#loading').fadeOut(800);
      $('#video video')[0].play();
    });
    $('#container').fadeIn();
  }, imgList)

  //切换内容
  var currpage = 0;
  var index = 0;
  var timer;
  function nextPage() {
    if (currpage == 5) {
      content.css('left', '0');
      currpage = 0;
    }

    currpage++;
    index = (index + 1) % 5;
    iconChange(index);
    content.stop().animate({ 'left': '-' + currpage * 100 + '%' }, 800);

  }

  function iconChange(index) {
    icons.eq(index).addClass('on').siblings().removeClass('on');
  }

  function stop() {
    clearTimeout(timer);
  }

  function playV() {
    timer = setTimeout(function () {
      nextPage();
      playV();
    }, 5000);
  }

  playV();

  content.hover(stop, playV)

  buttons.on('click', function (e) {
    var $icon = $(e.target).parent();
    index = $icon.index();
    currpage = $icon.index();

    icons.eq(index).addClass('on').siblings().removeClass('on');
    content.stop().animate({ 'left': '-' + currpage * 100 + '%' }, 800);
  })

  //join us
  joinBtn.click(function () {
    mainbody.fadeOut();
    footer.fadeOut();
    container.css('background-image', 'url(./images/backjoin.jpg)');
  })

  // 返回首页
  backTop.click(function () {
    mainbody.fadeIn();
    footer.fadeIn();
    container.css('background-image', 'url(./images/backimage.jpg)')
  })

})()