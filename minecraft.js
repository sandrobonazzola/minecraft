var boardWidth="800";
var boardHeight="600";

var gameboard=document.createElement("div");
gameboard.id="gameboard";
gameboard.style.width=boardWidth+"px";
gameboard.style.height=boardHeight+"px";
document.body.appendChild(gameboard);


for (var i=0;i<boardHeight/50;i++){
    for(var j=0;j<boardWidth/50;j++){
        var block=document.createElement("div");
        block.className="block";
        gameboard.appendChild(block);
    }
}