// 1.输出 console
Blockly.JavaScript['output'] = function(block) {
    var value_output = Blockly.JavaScript.valueToCode(block, 'output', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
        console.log(${value_output});
    `;
    return code;
  };