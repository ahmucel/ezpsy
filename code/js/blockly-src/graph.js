//1. 直线
Blockly.Blocks['graph_line'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("line");
      this.appendValueInput("start_x")
          .setCheck("Number")
          .appendField("start_x");
      this.appendValueInput("start_y")
          .setCheck("Number")
          .appendField("start_y");
      this.appendValueInput("end_x")
          .setCheck("Number")
          .appendField("end_x");
      this.appendValueInput("end_y")
          .setCheck("Number")
          .appendField("end_y");
      this.appendValueInput("border_width")
          .setCheck("Number")
          .appendField("border_width");
      this.appendValueInput("color")
          .setCheck(null)
          .appendField("color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
// 2.空心矩形
Blockly.Blocks['graph_strokerect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("strokeRect");
      this.appendValueInput("start_x")
          .setCheck("Number")
          .appendField("start_x");
      this.appendValueInput("start_y")
          .setCheck("Number")
          .appendField("start_y");
      this.appendValueInput("width")
          .setCheck("Number")
          .appendField("width");
      this.appendValueInput("height")
          .setCheck("Number")
          .appendField("height");
      this.appendValueInput("border_width")
          .setCheck("Number")
          .appendField("border_width");
      this.appendValueInput("border_color")
          .setCheck(null)
          .appendField("border_color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 3.实心矩形
Blockly.Blocks['graph_fillrect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fillRect");
      this.appendValueInput("start_x")
          .setCheck("Number")
          .appendField("start_x");
      this.appendValueInput("start_y")
          .setCheck("Number")
          .appendField("start_y");
      this.appendValueInput("width")
          .setCheck("Number")
          .appendField("width");
      this.appendValueInput("height")
          .setCheck("Number")
          .appendField("height");
      this.appendValueInput("fill_color")
          .setCheck(null)
          .appendField("fill_color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 4.三角形
Blockly.Blocks['graph_triangle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("triangle");
      this.appendValueInput("top_x")
          .setCheck("Number")
          .appendField("top_x");
      this.appendValueInput("top_y")
          .setCheck("Number")
          .appendField("top_y");
      this.appendValueInput("left_x")
          .setCheck("Number")
          .appendField("left_x");
      this.appendValueInput("left_y")
          .setCheck("Number")
          .appendField("left_y");
      this.appendValueInput("right_x")
          .setCheck("Number")
          .appendField("right_x");
      this.appendValueInput("right_y")
          .setCheck("Number")
          .appendField("right_y");
      this.appendValueInput("border_color")
          .setCheck(null)
          .appendField("border_color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 5.空心圆
Blockly.Blocks['graph_strokecircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("strokeCircle");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField("X");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField("Y");
      this.appendValueInput("r")
          .setCheck("Number")
          .appendField("R");
      this.appendValueInput("border_color")
          .setCheck(null)
          .appendField("border_color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 6.填充圆
Blockly.Blocks['graph_fillcircle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fillCircle");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField("X");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField("Y");
      this.appendValueInput("r")
          .setCheck("Number")
          .appendField("R");
      this.appendValueInput("fill_color")
          .setCheck(null)
          .appendField("fill_color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
//7. 文本
Blockly.Blocks['graph_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("text");
      this.appendValueInput("content")
          .setCheck("String")
          .appendField("content");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField("X");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField("Y");
      this.appendValueInput("fontSize")
          .setCheck("Number")
          .appendField("fontSize");
      this.appendDummyInput()
          .appendField("fontWeight")
          .appendField(new Blockly.FieldDropdown([["'normal'","'normal'"], ["'bold'","'bold'"]]), "fontWeight");
      this.appendDummyInput()
          .appendField("fontStyle")
          .appendField(new Blockly.FieldDropdown([["'normal'","'normal'"], ["'italic'","'italic'"]]), "fontStyle");
      this.appendValueInput("fontFamily")
          .setCheck("String")
          .appendField("fontFamily");
      this.appendValueInput("color")
          .setCheck(null)
          .appendField("color");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 8.图片
Blockly.Blocks['image'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("image");
      this.appendValueInput("URL")
          .setCheck(null)
          .appendField("URL");
      this.appendValueInput("ID")
          .setCheck(null)
          .appendField("ID");
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
      this.setColour(60);
   this.setTooltip("dfdf");
   this.setHelpUrl("www.taobao.com");
    }
  };
// 9.光栅
Blockly.Blocks['grating'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("grating");
      this.appendValueInput("x")
          .setCheck(null)
          .appendField("x");
      this.appendValueInput("y")
          .setCheck(null)
          .appendField("y");
      this.appendValueInput("width")
          .setCheck(null)
          .appendField("width");
      this.appendValueInput("height")
          .setCheck(null)
          .appendField("height");
      this.appendValueInput("v")
          .setCheck(null)
          .appendField("v");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };