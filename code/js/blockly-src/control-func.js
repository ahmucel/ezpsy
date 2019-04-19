// 1.随机函数
function randomFunc(func1,func2){
    let t=Math.random();
    if(t<0.5)
        {  func1  }
    else
        {  func2  }
  }
// 2.单按键控制
function keyCodeWait(keyCodeNum){
    return  new Promise(function(resolve,reject){
         listener.simple_combo(keyCodeNum,async function(){
         resolve();
         listener.unregister_combo(keyCodeNum);
     });
   }) 
 }
//3.双按键控制

//4.三按键控制

// 5.开始计时

// 6.结束计时

