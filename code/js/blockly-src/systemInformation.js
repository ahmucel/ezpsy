// 1.浏览器信息
Blockly.Blocks['broswerversion'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("broswerVersion");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
//2.显示器信息
Blockly.Blocks['screeninformation'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("screeninformation")
          .appendField(new Blockly.FieldDropdown([["height","'height'"], ["width","'width'"]]), "information");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };