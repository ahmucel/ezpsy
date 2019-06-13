// 1.用户指引
Blockly.Blocks['guide'] = {
    init: function() {
      this.appendValueInput("imageUrl")
          .setCheck(null)
          .appendField("Guide");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#3392FF');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
// 2.实验结束
Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("END");
    this.appendValueInput("ENDTEXT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#3392FF');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};