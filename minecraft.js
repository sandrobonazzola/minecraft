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

var toolbox=["pickaxe","axe","shovel"];
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
        console.log(counter);
        gameboard.appendChild(block);
    }
}