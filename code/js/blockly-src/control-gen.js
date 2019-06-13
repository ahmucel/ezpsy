// 1.随机函数
Blockly.JavaScript['randomfunc'] = function(block) {
  var statements_func1 = Blockly.JavaScript.statementToCode(block, 'Func1');
  var statements_func2 = Blockly.JavaScript.statementToCode(block, 'Func2');
  // TODO: Assemble JavaScript into code variable.
  var code =`
  (function (){
    let t=Math.random();
    if(t<0.5)
       { ${statements_func1}}
    else
       { ${statements_func2}}
  }())
  `;
  return code;
}; 
// 2.单按键控制
Blockly.JavaScript['key1'] = function(block) {
  var value_keycode = Blockly.JavaScript.valueToCode(block, 'keyCode', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func = Blockly.JavaScript.statementToCode(block, 'func');
  // TODO: Assemble JavaScript into code variable.
  var code = `
        await keyCodeWait(${value_keycode}).then( async function(value){
         ${statements_func}
        });\n`;
  return code;
};
//3.双按键控制
Blockly.JavaScript['key2'] = function(block) {
  var value_keydown1 = Blockly.JavaScript.valueToCode(block, 'keydown1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func1 = Blockly.JavaScript.statementToCode(block, 'func1');
  var value_keydown2 = Blockly.JavaScript.valueToCode(block, 'keydown2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func2 = Blockly.JavaScript.statementToCode(block, 'func2');
  // TODO: Assemble JavaScript into code variable.
  var code =`
  function keyCodeWait(){
    return  new Promise( function(resolve,reject){
         listener.simple_combo(${value_keydown1},async function(){
             ${statements_func1}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
         })
         listener.simple_combo(${value_keydown2},async function(){
             ${statements_func2}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
         })
     })
 }
 await keyCodeWait();\n
  `;
  return code;
};
//4.三按键控制
Blockly.JavaScript['key3'] = function(block) {
  var value_keydown1 = Blockly.JavaScript.valueToCode(block, 'keydown1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func1 = Blockly.JavaScript.statementToCode(block, 'func1');
  var value_keydown2 = Blockly.JavaScript.valueToCode(block, 'keydown2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func2 = Blockly.JavaScript.statementToCode(block, 'func2');
  var value_keydown3 = Blockly.JavaScript.valueToCode(block, 'keydown3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func3 = Blockly.JavaScript.statementToCode(block, 'func3');
  // TODO: Assemble JavaScript into code variable.
  var code =`
  function keyCodeWait(){
    return  new Promise( function(resolve,reject){
         listener.simple_combo(${value_keydown1},async function(){
             ${statements_func1}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
             listener.unregister_combo(${value_keydown3});
         })
         listener.simple_combo(${value_keydown2},async function(){
             ${statements_func2}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
             listener.unregister_combo(${value_keydown3});
         })
         listener.simple_combo(${value_keydown3},async function(){
            ${statements_func3}
            resolve();
            listener.unregister_combo(${value_keydown1});
            listener.unregister_combo(${value_keydown2});
            listener.unregister_combo(${value_keydown3});
      })
     })
 }
 await keyCodeWait();\n
  `;
  return code;
};
// 5.开始计时
Blockly.JavaScript['starttiming'] = function(block) {
  var value_starttiming = Blockly.JavaScript.valueToCode(block, 'startTiming', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.time(${value_starttiming});\n`;
  return code;
};
// 6.结束计时
Blockly.JavaScript['endtiming'] = function(block) {
  var value_endtiming = Blockly.JavaScript.valueToCode(block, 'endTiming', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.timeEnd(${value_endtiming});\n`;
  return code;
};
// 7.四按键控制
Blockly.JavaScript['key4'] = function(block) {
  var value_keydown1 = Blockly.JavaScript.valueToCode(block, 'keydown1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func1 = Blockly.JavaScript.statementToCode(block, 'func1');
  var value_keydown2 = Blockly.JavaScript.valueToCode(block, 'keydown2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func2 = Blockly.JavaScript.statementToCode(block, 'func2');
  var value_keydown3 = Blockly.JavaScript.valueToCode(block, 'keydown3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func3 = Blockly.JavaScript.statementToCode(block, 'func3');
  var value_keydown4 = Blockly.JavaScript.valueToCode(block, 'keydown4', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_func4 = Blockly.JavaScript.statementToCode(block, 'func4');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  function keyCodeWait(){
    return  new Promise( function(resolve,reject){
         listener.simple_combo(${value_keydown1},async function(){
             ${statements_func1}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
             listener.unregister_combo(${value_keydown3});
             listener.unregister_combo(${value_keydown4});
         })
         listener.simple_combo(${value_keydown2},async function(){
             ${statements_func2}
             resolve();
             listener.unregister_combo(${value_keydown1});
             listener.unregister_combo(${value_keydown2});
             listener.unregister_combo(${value_keydown3});
             listener.unregister_combo(${value_keydown4});
         })
         listener.simple_combo(${value_keydown3},async function(){
            ${statements_func3}
            resolve();
            listener.unregister_combo(${value_keydown1});
            listener.unregister_combo(${value_keydown2});
            listener.unregister_combo(${value_keydown3});
            listener.unregister_combo(${value_keydown4});
        })
        listener.simple_combo(${value_keydown4},async function(){
            ${statements_func4}
            resolve();
            listener.unregister_combo(${value_keydown1});
            listener.unregister_combo(${value_keydown2});
            listener.unregister_combo(${value_keydown3});
            listener.unregister_combo(${value_keydown4});
        })
     })
 }
 await keyCodeWait();\n
  `;
  return code;
};