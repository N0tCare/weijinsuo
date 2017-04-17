'use strict';

$(function () {
	// body...
	function resize(){
		// 获取屏幕的宽度
		var windowWidth = $(window).width();
		// 判断屏幕是大还是小
		// 根据大小为界面上的每一个div设置背景
		var isSmallScreen = windowWidth < 768;
		// 获取div元素，获取到的是一个数组，有多个元素
		$("#main_ad > .carousel-inner > .item").each(function (i,item) {
			// 将DOM对象转换成JQuery对象  item是变量不需要加上“”
			var $item = $(item);
			var imgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");
			// 设置背景图片
			$item.css("backgroundImage","url('"+imgSrc+"')");
			// 当时小图的时候我们就用img标签，能够自动缩放，当时大图的时候就使用背景
			if(isSmallScreen){
				$item.html("<img src='"+ imgSrc +"'/>");
			}else{
				$item.empty();
			}
		});
	}

	$(window).on("resize",resize).trigger("resize");

	// 让window对象立即触发一下resize
	// $(window).trigger("resize");

	// 初始化tooltip插件
  	$('[data-toggle="tooltip"]').tooltip();

  	// 控制标签的宽度
  	var $ulContainer = $(".nav-tabs");
  	// 获取所有子元素的宽度的和
  	var width = 30;
  	// 遍历子元素
  	$ulContainer.children().each(function (index,element) {
  		width += element.clientWidth;
  	});
  	// 此时width的宽度总和就是li的总和
  	// 判断当前ul的宽是否超出了屏幕的宽度，如果超出就显示横向滚动条
  	if (width > $(window).width()) {
    	$ulContainer
      	.css('width', width)
      	.parent().css('overflow-x', 'scroll');
  	} else {
        $ulContainer
        .css("width", "auto")
        .parent().css("overflow-x","hidden");
      }


      // a点击注册事件
      var $newTitle = $(".news-title");
      $("#news .nav-pills a").on("click",function () {
      	// 获取当前点击元素
      	var $this = $(this);
      	// 获取对应的title值
      	var title = $this.data("title");
      	// 将title设置到相应的位置
      	$newTitle.text(title);
      });

      
 
});