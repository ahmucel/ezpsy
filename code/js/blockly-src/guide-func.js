// 1.用户指引
function guide(url) {
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
        swal.fire({
           title:  '请集中注意力',
           text: '2秒后自动关闭弹窗实验开始',
            timer:2000
        } 
        );
    })
}