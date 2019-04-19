// 1.毫秒延时
var delay_ms = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};
// 2.帧延时
var delay_frame = function (num1) {
    let time_num=0;     
    return new Promise(function (resolve, reject) {
        (function raf(){
            time_num++;
            let id =window.requestAnimationFrame(raf);
        if( time_num==num1){
            window.cancelAnimationFrame(id);
            resolve(0);
        }
        }())
    })
};