var str=window.location.search; //location.search是从当前URL的?号开始的字符串
arr=str.split("?");
key = arr[1];
eval(sessionStorage.getItem('key'));
// console.log(sessionStorage.getItem('key'));