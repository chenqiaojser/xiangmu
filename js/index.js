
var $p=$('#a1 p');
var $ul=$('#a2 ul');

var $p2=$('#b1 p');
var $ul2=$('#b2 ul');


/*for(var i=0;i<$p.length;i++){
	$p[i].index=i;

$p.mouseover(function(){
	for(var i=0;i<$p.length;i++){
		$p.eq(i).attr('class','');
		$ul.eq(i).attr('class','');

	}
	$p.eq(this.index).attr('class','active');
	$ul.eq(this.index).attr('class','show')
})
}




for(var i=0;i<$p2.length;i++){
	$p2[i].index=i;

$p2.mouseover(function(){
	for(var i=0;i<$p2.length;i++){
		$p2.eq(i).attr('class','');
		$ul2.eq(i).attr('class','');

	}
	$p2.eq(this.index).attr('class','active2');
	$ul2.eq(this.index).attr('class','show2')
})
}
*/

function mouseOver(p,ul){
	for(var i=0;i<p.length;i++){
	p[i].index=i;

    p.mouseover(function(){
	for(var i=0;i<p.length;i++){
		p.eq(i).attr('class','');
		ul.eq(i).attr('class','');

	}
	p.eq(this.index).attr('class','active');
	ul.eq(this.index).attr('class','show')
})
}
}











mouseOver($p,$ul);
mouseOver($p2,$ul2);

var totop=$('#toTop');


var banner=$('#banner');

var iHeight=banner.offset().top;
$(window).on('scroll',function(){
	var nowHeight=$(window).scrollTop();
	if(nowHeight>=iHeight){
		banner.css('position','fixed').css('top',0);
	}
	else{
		banner.css('position','absolute').css('top',iHeight)
	}

totop.on('click',function(){
  $(window).scrollTop(0);
})
})





/*============jsonp===========================*/


var input=$('#inputs');
var parent=$('#kuang');

input.on('input',function(){

	var val=input.val().trim();
	getJSON('https:sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&json=1&p=3&sid=1458_21126_17001_20927&req=2&csor=2&pwd=h&cb=foo',function(data){
		parent.html('');
		parent.css('display','none');
       if(data.status=='0'){
       	parent.css('display','block');
       	var list=data.s;
       	for(var i=0;i<list.length;i++){
       		var li=$('<li>'+list[i]+'</li>');
       		parent.append(li);
       	}
       }
	})
})





 function getJSON(url,cbFn){
		var script = document.createElement('script');
		var re = /cb=(\w+)/;
		url = url.replace( re , function(arg){
			return arg + String(Math.random()).replace(/\./,'');
		});
		var fnName = url.match(re)[1];
		window[fnName] = cbFn;
		script.src = url;
		script.onload = function(){
			document.body.removeChild(script);
			delete window[fnName];
		};
		document.body.appendChild(script);
	}






