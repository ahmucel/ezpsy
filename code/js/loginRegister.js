//注册登录页面
$('#button-register').click(function(){
    if($("input[type='checkbox']").is(':checked')===false){
        alert('您未勾选用户协议');
    }
})