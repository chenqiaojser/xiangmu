var $pic1=$('#pieceleft').find('dt .pic1');
var $glass=$('#glass');
var $glasses=$('#glasses');
var $put=$('#put');


$pic1.on('mouseover',function(){
   $put.css('display','block');
   $glasses.css('display','block');

})

$(document).on('mousemove',function(ev){
  var x = ev.pageX;
  var y = ev.pageY;
  var L = $pic1.offset().left;
  var T = $pic1.offset().top;

  var $nowL=x-L-$put.width()/2;
  var $nowT=y-T-$put.height()/2;

  
  if($nowL<0){
        $nowL=0;

      }
      else if($nowL>$pic1.width()-$put.width()){
        $nowL=$nowL>$pic1.width()-$put.width();
      }
      if($nowT<0){
        $nowT=0;
      }
      else if($nowT>$pic1.height()-$put.height()){
        $nowT=$nowT>$pic1.height()-$put.height();
      }
      $put.css('left',$nowL);
      $put.css('top',$nowT);

      if(x<$pic1.offset().left){
        $put.css('display','none');
        $glasses.css('display','none');
      }
      else if(y<$pic1.offset().top){
        $put.css('display','none');
        $glasses.css('display','none');

      }
      else if(y>$pic1.offset().top+$pic1.height()){
        $put.css('display','none');
        $glasses.css('display','none');

      }
      else if(x>$pic1.offset().left+$pic1.width()){
        $put.css('display','none');
        $glasses.css('display','none');

      }

      var scale1=$nowL/($pic1.width()-$put.width());
      var scale2=$nowT/($pic1.height()-$put.height());
      var aL=$glass.width()-$glasses.width();
      var aT=$glass.height()-$glasses.height();
      $glasses.css('left',scale1*aL);
      $glasses.css('top',scale2*aT);
 
})




/*====================turnpic===========================*/

var btn1=$('#button1');
var btn2=$('#button2');
var bigpic=$('#turnpic');
var list=$('#list');

btn1.on('click',function(){
  list.animate({left:-bigpic.width()},2000,'linear');
})

btn2.on('click',function(){
  list.animate({left:0},2000,'linear');
})





/*==========返回顶部=============================*/

var totop=$('#toTop');

totop.on('click',function(){
    $(window).scrollTop('0')
  })


/*=======================================*/

var btn11=$('#btn1');
var btn22=$('#btn2');
var input=$('#type');
var num=input.val();
btn22.click(function(){
  input.val(++num);
  
})

btn11.click(function(){
  if(num>1){
    input.val(--num);
  }
})



