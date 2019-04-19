// 1.清屏
Blockly.Blocks['clearscreen'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clearScreen");
      this.appendValueInput("X")
          .setCheck(null)
          .appendField("X");
      this.appendValueInput("Y")
          .setCheck(null)
          .appendField("Y");
      this.appendValueInput("width")
          .setCheck(null)
          .appendField("width");
      this.appendValueInput("height")
          .setCheck(null)
          .appendField("height");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };