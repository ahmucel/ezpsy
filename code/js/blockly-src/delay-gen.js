// 1.毫秒延时
Blockly.JavaScript['delay_ms'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // var code =`await delay_ms(${value_x});\n`;
    var code=`await delay_ms(${value_x});\n`
    return code;
  };
// 2.帧延时
Blockly.JavaScript['delay_frame'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `await delay_frame(${value_x});\n`;
    return code;
  };
