// 1.直线
Blockly.JavaScript['graph_line'] = function(block) {
    var value_start_x = Blockly.JavaScript.valueToCode(block, 'start_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_start_y = Blockly.JavaScript.valueToCode(block, 'start_y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_end_x = Blockly.JavaScript.valueToCode(block, 'end_x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_end_y = Blockly.JavaScript.valueToCode(block, 'end_y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_border_width = Blockly.JavaScript.valueToCode(block, 'border_width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
      line(${value_start_x},${value_start_y},${value_end_x},${value_end_x},${value_border_width},${value_color});\n
    `;
    return code;
  };
// 2.空心矩形
Blockly.JavaScript['graph_strokerect'] = function(block) {
  var value_start_x = Blockly.JavaScript.valueToCode(block, 'start_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_start_y = Blockly.JavaScript.valueToCode(block, 'start_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_border_width = Blockly.JavaScript.valueToCode(block, 'border_width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_border_color = Blockly.JavaScript.valueToCode(block, 'border_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
    strokeRect(${value_start_x},${value_start_y},${value_width},${value_height},${value_border_width},${value_border_color});\n
  `;
  return code;
};
// 3.实心矩形
Blockly.JavaScript['graph_fillrect'] = function(block) {
  var value_start_x = Blockly.JavaScript.valueToCode(block, 'start_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_start_y = Blockly.JavaScript.valueToCode(block, 'start_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_color = Blockly.JavaScript.valueToCode(block, 'fill_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  fillRect(${value_start_x},${value_start_y},${value_width},${value_height},${value_fill_color});\n
  `;
  return code;
};
// 4.三角形
Blockly.JavaScript['graph_triangle'] = function(block) {
  var value_top_x = Blockly.JavaScript.valueToCode(block, 'top_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_y = Blockly.JavaScript.valueToCode(block, 'top_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_x = Blockly.JavaScript.valueToCode(block, 'left_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_y = Blockly.JavaScript.valueToCode(block, 'left_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_x = Blockly.JavaScript.valueToCode(block, 'right_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_y = Blockly.JavaScript.valueToCode(block, 'right_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_border_color = Blockly.JavaScript.valueToCode(block, 'border_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
  triangle(${value_top_x},${value_top_y},${value_left_x},${value_left_y},${value_right_x},${value_right_y},${value_border_color});\n
  `;
  return code;
};
// 5.空心圆
Blockly.JavaScript['graph_strokecircle'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_border_color = Blockly.JavaScript.valueToCode(block, 'border_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
  stroke_circle(${value_x},${value_y},${value_r},${value_border_color});\n
  `;
  return code;
};
// 6.填充圆
Blockly.JavaScript['graph_fillcircle'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_color = Blockly.JavaScript.valueToCode(block, 'fill_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
    fill_circle(${value_x},${value_y},${value_r},${value_fill_color});\n
  `;
  return code;
};
//7. 文本
Blockly.JavaScript['graph_text'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize = Blockly.JavaScript.valueToCode(block, 'fontSize', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_fontweight = block.getFieldValue('fontWeight');
  var dropdown_fontstyle = block.getFieldValue('fontStyle');
  var value_fontfamily = Blockly.JavaScript.valueToCode(block, 'fontFamily', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
    (function(){
      ctx.font="${dropdown_fontstyle} ${dropdown_fontweight} ${value_fontsize}px ${value_fontfamily}";
      ctx.fillStyle=${value_color};
      ctx.fillText(${value_content},${value_x},${value_y});
    }())\n`;
  return code;
};
// 8.图片
Blockly.JavaScript['image'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
    image_url(${value_url},${value_id},${value_x},${value_y},${value_width},${value_height});\n
  `;
  return code;
};
// 9.光栅
Blockly.JavaScript['grating'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =`
    grating(${value_x},${value_y},${value_width},${value_height},${value_v})
  `;
  return code;
};