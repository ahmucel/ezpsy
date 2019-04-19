var toolbox=document.getElementById("toolbox");
var options = { 
    toolbox : toolbox, 
    collapse : true, 
    comments : true, 
    disable : true, 
    maxBlocks : Infinity, 
    trashcan : true, 
    horizontalLayout : false, 
    toolboxPosition : 'start', 
    css : true, 
    grid:
        {  spacing: 20,
           length: 3,
           colour: '#ccc',
           snap: true
        },
    zoom:
        { controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
    media : 'media/', 
    rtl : false, 
    scrollbars : true, 
    sounds : false, 
    oneBasedIndex : true
  };
let workspace = Blockly.inject('blocklyDiv',options);
var btn2=document.getElementById('load');
btn2.addEventListener('click',function(){
	Blockly.Xml.domToWorkspace(document.getElementById('toolbox1'), workspace);
});
var runJs=document.getElementById('run');
 runJs.addEventListener('click',function(){
	// Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    //将工作空间的模块转译成JS代码，Blockly.JavaScript.workspaceToCode需要引入javascript_compressed.js
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code='(async function(){'+'\n'+code+'\n'+'}())';
    //放入系统缓存
    sessionStorage.setItem('key',code);
	  window.open("experment.html?key");
});
// js监听
function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code_area').innerText = code;
}
workspace.addChangeListener(myUpdateFunction);