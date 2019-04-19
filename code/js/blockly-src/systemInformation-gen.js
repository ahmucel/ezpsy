//1.浏览器信息
Blockly.JavaScript['broswerversion'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code =`broswerVersion()`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
// 2.显示器信息
Blockly.JavaScript['screeninformation'] = function(block) {
    var dropdown_information = block.getFieldValue('information');
    // TODO: Assemble JavaScript into code variable.
    var code = `screenInformation(${dropdown_information})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };