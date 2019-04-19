// 1.毫秒延时
Blockly.Blocks['delay_ms'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("delay");
      this.appendValueInput("X")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("ms");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 2.帧延时
Blockly.Blocks['delay_frame'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("delay");
      this.appendValueInput("X")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("frame");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };