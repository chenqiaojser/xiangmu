var $hour=$('#span1');
var $minute=$('#span2');
var $second=$('#span3');


var date=new Date('February 12,2020 15:00:00');
setInterval(function(){

   var nowDate=new Date();
   var num = Math.floor((date.getTime()-nowDate.getTime())/1000);
   var iD=Math.floor(num/86400);
   var iH=Math.floor(num%86400/3600);
   var iM=Math.floor(num%86400%3600/60);
   var iS=Math.floor(num%60);
   $hour.html(toZero(iH));
   $minute.html(toZero(iM));
   $second.html(toZero(iS));
 


}, 1000)



function toZero(num){
  if(num<10){
  	return '0'+num;
  }
  else{
  	return ''+num;
  }
}



var $top=$('#top');
var totop=$('#toTop');

var nowHeight=$top.offset().top;

$(window).on('scroll',function(){

var iHeight=$(window).scrollTop();
if(iHeight>nowHeight){
	$top.css('position','fixed').css('top',0).css('z-index','3');

}
else{

	$top.css('position','absolute').css('top',nowHeight);
}

totop.on('click',function(){
  $(window).scrollTop(0);
})

})

