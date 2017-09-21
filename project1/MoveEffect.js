var id = function(el) {          return document.getElementById(el);        },
       c = id('photo-list');
   if(c) {
       var ul = id('scroll'),
           lis = ul.getElementsByTagName('li'),
           itemCount = lis.length,
           width = lis[0].offsetWidth, //获得每个img容器的宽度
           marquee = function() {
               c.scrollLeft += 2;
               if(c.scrollLeft % width <= 1){  //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                   ul.appendChild(ul.getElementsByTagName('li')[0]);
                   c.scrollLeft = 0;
               };
           },
           speed = 1000; //数值越大越慢
       ul.style.width = width*itemCount + 'px'; //加载完后设置容器长度        
       var timer = setInterval(marquee, speed);
       c.onmouseover = function() {
           clearInterval(timer);
       };
       c.onmouseout = function() {
           timer = setInterval(marquee, speed);
       };
   };

   //文字横向滚动
function ScrollImgLeft(){ 
 var speed=1;  //数值越大越慢
  var MyMar = null;
 var scroll_begin = document.getElementById("scroll_begin"); 
 var scroll_end = document.getElementById("scroll_end"); 
 var scroll_div = document.getElementById("scroll_div"); 
 scroll_end.innerHTML=scroll_begin.innerHTML; 
 function Marquee(){ 
  if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) 
   scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
  else
   scroll_div.scrollLeft++; 
  } 
  MyMar=setInterval(Marquee,speed); 
  scroll_div.onmouseover = function(){
　　　　　　　clearInterval(MyMar);
　　　　　}
 　　　　scroll_div.onmouseout = function(){
　　　　　　　MyMar = setInterval(Marquee,speed); 　　　　
　　　　　}  
}
ScrollImgLeft();

//JS图片自适应
/*
function resizeimg(obj,maxW,maxH)
{
         var imgW=obj.width;
         var imgH=obj.height;
         if(imgW>maxW||imgH>maxH)
         {       
                  var ratioA=imgW/maxW;
                  var ratioB=imgH/maxH;               
                  if(ratioA>ratioB)
                  {
                           imgW=maxW;
                           imgH=maxW*(imgH/imgW);
                  }
                  else
                  {
                           imgH=maxH;
                           imgW=maxH*(imgW/imgH);
                  }  
                  obj.width=imgW;
                  obj.height=imgH;
         }
}
*/