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