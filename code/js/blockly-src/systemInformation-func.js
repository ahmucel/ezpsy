//1.浏览器信息
let broswerVersion=function () {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.ie) return('IE: ' + Sys.ie);
    if (Sys.firefox) return('Firefox: ' + Sys.firefox);
    if (Sys.chrome) return('Chrome: ' + Sys.chrome);
    if (Sys.opera) return('Opera: ' + Sys.opera);
    if (Sys.safari) return('Safari: ' + Sys.safari);
}
//2.显示器参数
let screenInformation = function(obtion){
    if(obtion=='height'){
        return screen.height
    }
    else if( obtion="width"){
        return screen.width
    }
}