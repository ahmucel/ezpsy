Blockly.JavaScript['guide'] = function(block) {
    var value_imageurl = Blockly.JavaScript.valueToCode(block, 'imageUrl', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `guide(${value_imageurl})`;
    return code;
  };