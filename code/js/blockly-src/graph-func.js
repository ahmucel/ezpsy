// 1.直线
let line=function(start_x,start_y,end_x,end_y,border_width,color){
  ctx.lineWidth=border_width;
  ctx.moveTo(start_x,start_y);
  ctx.lineTo(end_x,end_y);
  ctx.strokeStyle=color;
  ctx.stroke();
}
// 2.空心矩形
let strokeRect=function(left,top,width,height,color,border_width){
  ctx.lineWidth=border_width+'px';
  ctx.strokeStyle=color;
  ctx.strokeRect(left,top,width,height);
}
// 3.实心矩形
let fillRect=function(left,top,width,height,color){
  ctx.fillStyle=color;
  ctx.fillRect(left,top,width,height);
}
// 4.三角形
let triangle=function(x1,y1,x2,y2,x3,y3,color){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineTo(x3,y3);
  ctx.closePath();
  ctx.strokeStyle=color;
  ctx.stroke();
}
// 5.空心圆
let stroke_circle=function(x,y,r,color){
  ctx.beginPath();
  ctx.arc(x,y,r,0,360*Math.PI/180,true);
  ctx.closePath();
  ctx.strokeStyle=color;
  ctx.stroke();
}
// 6.填充圆
let fill_circle=function(x,y,r,color){
  ctx.beginPath();
  ctx.arc(x,y,r,0,360*Math.PI/180,true);
  ctx.closePath();
  ctx.fillStyle=color;
  ctx.fill();
}
//7.文本
let text=function(font_style,font_weigth,font_size,font_family,color,value_text,value_x,value_y){
  ctx.font="font_style font_weigth font_size+'px' font_family";
  ctx.fillStyle=color;
  ctx.fillText(value_text,value_x,value_y);
}
// 8.图片
let image_url=function(url,id,x,y,width,height){
  let img=document.createElement('img');
  img.src=url;
  img.id=id;
  img.style="display:none";
  document.body.appendChild(img);
  img.onload=function(){
      ctx.drawImage(img,x-width/2,y-height/2,width,height);
  }
}
// 9.光栅
let grating=function (l,t,width,height,v) {
  var g1 = document.createElement("div");
  var g2 = document.createElement("div");
  g2.id ="Video";
  g2.style.width =width+'px';
  g2.style.height = height+'px';
  g2.style.left=l+'px';
  // g2.style.right=r;
  g2.style.top=t+'px';
  g2.style.position="absolute";
  g2.style.zIndex="30";
  g2.style.borderRadius="50%";
  g2.style.overflow="hidden";
  var g3 = document.createElement("canvas");
  var gt = g3.getContext("2d");
  g3.id ="Video";
  g3.style.width = width+'px';
  g3.style.height = height*2+'px';
  g3.style.left="0px";
  g3.style.top="0px";
  g3.style.background="#808080";
  g3.style.position="absolute";
  var R="FF";
  var G="FF";
  var B="FF";
  var sf=8;
  var r=parseInt(g3.style.height);
  for(var i=0;i <r;i++){
  var k = 128+127*Math.cos(i/40*sf*2*Math.PI+Math.PI/4);
  var t = Math.round(k);
  var z = t.toString(16);
  if(t<16){
      z="0"+z;
  }
  R=G=B=String(z);
  gt.fillStyle="#"+R+G+B;
  gt.fillRect(0,i,r,1);
  }
  document.body.appendChild(g2);
  document.body.appendChild(g3);
  g2.appendChild(g3);
  let tf=v;
  let speed = 2*2*v/3;
  function Displacement(){
  if(parseInt(g3.style.top)<=-parseInt(g3.style.height)/2){
      g3.style.top="0px";
  }
  else{
      g3.style.top = parseInt(g3.style.top)-speed+"px";
  }
  requestAnimationFrame(Displacement);
  }
  Displacement();
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
}