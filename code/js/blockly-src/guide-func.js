// 1.用户指引
function guide(url) {
    return new Promise(function(resolve,reject){
            swal.fire({
        text: '请仔细阅读用户引导',
        // type: 'warning',
        imageUrl:url,
        width:960,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '开始实验',
    }).then(function () {
        document.documentElement.requestFullscreen();
        resolve();
    })
    })
}
// 2.实验结束
function end(endtext) {
    return new Promise(function(resolve,reject){
            swal.fire(
                endtext,
    ).then(function () {
        resolve();
    })
    })
}