var put=$('#main').find('.input .three');
var move=$('#main').find('.input .move');
var p=$('#main').find('.input p');

move.on('mousedown',function(ev){
   var L=ev.pageX-move.offset().left;
  $(document).on('mousemove',function(ev){
  	var nowL=ev.pageX-put.offset().left-L;
  	
  	if(nowL<0){
  		nowL=0;
     }
  	else if(nowL>put.width()-move.width()){
  		nowL=put.width()-move.width();
  	}
  	move.css('left',nowL);


  	$(document).on('mouseup',function(){
  		if(nowL<put.width()-move.width()){
  			move.css('left',0);
  		}
  		else if(nowL=put.width()-move.width()){
             move.css('left',put.width()-move.width());
             put.css('background','#2ca508');
             p.html('请求成功').css('color','white');
             move.off('mousedown');             
  		}
  		$(document).off('mousemove');
  		$(document).off('mouseup');
  	})
  })
})




//验证码
var input=$('#main').find('.four input');
var btn=$('#num');

btn.on('click',function(){
	
	var nums=60;
	btn.attr('disabled','true');
	btn.html(nums);
	var timer=setInterval(function(){
		btn.html(nums--);
		if(nums==-1){
			btn.html('获取验证码');
			clearInterval(timer);
			
		}
	}, 500)
})






var $num=$('#phonenum');
$num.on('blur',function(){
  
 var username=$num.val();
 getAjax('http://localhost/test/src/php/login.php','username='+username,function(data){
        // var json=JSON.parse(data);
        
        var $parent=$('#two');
        var $div=$('<div>'+data+'</div>');

        $parent.append($div);

        $div.animate({left:90},2000,'linear');

         
  })
})




function getAjax(url , data , cbFn){
    data = data ? '?'+data : '';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        cbFn(xhr.responseText);
      }
    };
    xhr.open('GET',url+data,true);
    xhr.send(null);
  } 