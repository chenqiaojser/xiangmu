 var btn1=$('#button1');
 var btn2=$('#button2');
 var type=$('#type');
 var num=type.val();
 var price=$('#price');
 var money=price.html();
 var allprice=$('#allprice');


 btn1.on('click',function(){
 	if(num>1){
 	
 	var aa=price.html();
   price.html(aa-money/2);
   allprice.html('￥'+(aa-money/2));

   type.val(--num);
}
})
 btn2.on('click',function(){

 	type.val(++num);
   price.html(num/2*money);
   allprice.html('￥'+num/2*money);
 })