// 1.随机函数
Blockly.Blocks['randomfunc'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("randomFunc");
      this.appendStatementInput("Func1")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Func1");
      this.appendStatementInput("Func2")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Func2");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
// 2.单按键控制
  Blockly.Blocks['key1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("key1");
      this.appendValueInput("keyCode")
          .setCheck(null);
      this.appendStatementInput("func")
          .setCheck(null)
          .appendField("func1");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
//3.双按键控制
Blockly.Blocks['key2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("key2");
      this.appendValueInput("keydown1")
          .setCheck(null)
          .appendField("keydown1");
      this.appendStatementInput("func1")
          .setCheck(null)
          .appendField("func1");
      this.appendValueInput("keydown2")
          .setCheck(null)
          .appendField("keydown2");
      this.appendStatementInput("func2")
          .setCheck(null)
          .appendField("func2");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("asdd");
   this.setHelpUrl("www.taobao.com");
    }
  };
//4.三按键控制
Blockly.Blocks['key3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("key3");
      this.appendValueInput("keydown1")
          .setCheck(null)
          .appendField("keydown1");
      this.appendStatementInput("func1")
          .setCheck(null)
          .appendField("func1");
      this.appendValueInput("keydown2")
          .setCheck(null)
          .appendField("keydown2");
      this.appendStatementInput("func2")
          .setCheck(null)
          .appendField("func2");
      this.appendValueInput("keydown3")
          .setCheck(null)
          .appendField("keydown3");
      this.appendStatementInput("func3")
          .setCheck(null)
          .appendField("func3");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("asdd");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 5.开始计时
Blockly.Blocks['starttiming'] = {
    init: function() {
      this.appendValueInput("startTiming")
          .setCheck(null)
          .appendField("startTiming");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("asdd");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 6.结束计时
Blockly.Blocks['endtiming'] = {
    init: function() {
      this.appendValueInput("endTiming")
          .setCheck(null)
          .appendField("endTiming");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("asdd");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 7.四按键控制
Blockly.Blocks['key4'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("key4");
      this.appendValueInput("keydown1")
          .setCheck(null);
      this.appendStatementInput("func1")
          .setCheck(null)
          .appendField("func1");
      this.appendValueInput("keydown2")
          .setCheck(null);
      this.appendStatementInput("func2")
          .setCheck(null)
          .appendField("func2");
      this.appendValueInput("keydown3")
          .setCheck(null);
      this.appendStatementInput("func3")
          .setCheck(null)
          .appendField("func3");
      this.appendValueInput("keydown4")
          .setCheck(null);
      this.appendStatementInput("func4")
          .setCheck(null)
          .appendField("func4");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };