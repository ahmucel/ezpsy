// 1.输出 console
Blockly.Blocks['output'] = {
    init: function() {
      this.appendValueInput("output")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("output");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };