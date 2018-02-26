var put=$('#main').find('.input .three');
var move=$('#main').find('.input .move');
var p=$('#main').find('.input .nine p');

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