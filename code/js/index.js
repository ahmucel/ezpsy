//设置nav导航栏的鼠标进入与离开事件
// $('ul.nav.nav-tabs.nav-justifid').mouseenter(function(){
//     $(this).css("background","rgba(0,0,0,0.3)");
// })
// $('ul.nav.nav-tabs.nav-justifid').mouseleave(function(){
//     $(this).css("background","#2D313B");
// })
//设置轮播图滚动时间
$(function(){
    $('.carousel').carousel({
        interval:3000
    });
});
//设置轮播点击跳转
$('#carousel1').click(function(){
    $("#myCarousel").carousel(0);
})
$('#carousel2').click(function(){
    $("#myCarousel").carousel(1);
})
$('#carousel3').click(function(){
    $("#myCarousel").carousel(2);
})
