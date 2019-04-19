$('#context').mouseenter(function(){
    $("#my_project").css("background-color","rgb(161, 161, 161)")
})
$('#context').mouseleave(function(){
    $("#my_project").css("background-color","white")
})
$('#context').click(function(){
    window.open("./program-block.html")
})