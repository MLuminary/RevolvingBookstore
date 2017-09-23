; (function () {

  //获取的内容
  var mainbody = $('#mainbody'),
      footer = $('#footer'),
      container = $('#container'),
      content = $('.list'),
      buttons = $('.buttons'),
      joinBtn = $('.nav-join-link'),
      backTop = $('.nav-join .back');
      closeBtn = $('.close-box');

 // 与视频有关元素
  var videoBox = $('#video'),
      videoContent = $('#video video');

  // 根字体自适应
  var bodyWidth = 1980,
      fontSize = 100;


  $('html').css('font-size', $('body').width() * fontSize / bodyWidth + '%')
  $(window).resize(function () {
    $('html').css('font-size', $('body').width() * fontSize / bodyWidth  + '%')
  })

  

  //接受视频地址
  $.ajax({
    type : 'get',
    url : "http://www.kilingzhang.com/api/url.php?url_id=f05485j0nx5",
    dataType : "text",
    success : function(resultUrl) {
      // console.log(resultUrl);
      videoContent.attr("src",resultUrl);
    },
    error : function() {
      $('#video .msg').fadeIn();
    }
  })
  //点击视频全部控制暂停
  videoContent[0].onclick = function(){
    if(this.paused){
      this.play();
    }else{
      this.pause();
    }
  }

  //关闭视频
  $('.close').click(function(){
    closeBtn.fadeOut();
    videoBox.fadeOut();
    videoContent[0].pause();
  })

  $('.video').click(function(){
    closeBtn.fadeIn();
    videoBox.fadeIn();
    videoContent[0].play();
  })

})()