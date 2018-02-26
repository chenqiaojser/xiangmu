var $btn=$('#btns');
var $hide=$('#main-header');

var onoff=true;
$btn.on('click',function(){
	if(onoff){
      $hide.attr('class','');
	}
	else{
		$hide.attr('class','hide');
	}
	onoff=!onoff;
})







var banner=$('#banner');

var iHeight=banner.offset().top;
var totop=$('#toTop');

$(window).on('scroll',function(){
	var nowHeight=$(window).scrollTop();
	if(nowHeight>=iHeight){
		banner.css('position','fixed').css('top',0);
	}
	else{
		banner.css('position','absolute').css('top',iHeight);
	}
	totop.on('click',function(){
		$(window).scrollTop('0');
	})
})

