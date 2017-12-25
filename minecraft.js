function setUp(){
    for(var i=192;i>160;i--){
        $('#'+i).addClass('dirt');
    }
    for(var i=160;i>144;i--){
        $('#'+i).addClass('grass');
    }
    $('#109,#125,#141').addClass('tree');
    $('#60,#61,#62,#76,#77,#78,#92,#93,#94').addClass('leaf');
    $('#114,#115,#130,#131').addClass('rock');
    $('#35,#36,#37,#38,#34,#52,#51,#53,#21,#22,#20,#39').css('backgroundColor','white');


}
function minecraft(){
    function mine(){
        //for pickaxe and rock
    }
    function dig(){
        //for shovel and dirt
    }
    function chop(){
        //for axe and tree/leaf
    }
    function build(){
        //take from inventory and place in new div
    }
}

var boardWidth="800";
var boardHeight="600";

var field=document.createElement('div');
field.style.margin="auto";
field.style.width=parseInt(boardWidth)+100+"px";
document.body.appendChild(field);

var gameboard=document.createElement('div');
gameboard.id="gameboard";
gameboard.style.width=boardWidth+"px";
gameboard.style.height=boardHeight+"px";
field.appendChild(gameboard);

var sidebar=document.createElement('div');
sidebar.id="sidebar";
field.appendChild(sidebar);

var toolbelt=document.createElement('div');
toolbelt.className="toolbelt";
sidebar.appendChild(toolbelt);

var toolbox=["pickaxe","shovel","axe"];
for(var i=0;i<toolbox.length;i++){
    var tool=document.createElement('div');
    tool.style.backgroundImage="url(./images/"+toolbox[i]+".png)";
    tool.className="tool";
    tool.id=toolbox[i];
    tool.innerHTML=toolbox[i].toUpperCase();
    toolbelt.appendChild(tool);
}
var active=document.createElement('div');
active.className="material";
toolbelt.appendChild(active);

var counter=0;
for (var i=0;i<boardHeight/50;i++){
    for(var j=0;j<boardWidth/50;j++){
        counter++;
        var block=document.createElement("div");
        block.className="block";
        block.id=counter;
        gameboard.appendChild(block);
    }
}

window.addEventListener("load",setUp);