var Minecraft = {}
var currentTool="";

Minecraft.init = function(){
    Minecraft.currentTool = "pickaxe";
    Minecraft.createBoard();
    Minecraft.setBackGround();
    Minecraft.blocks = $(".block");
     Minecraft.blocks.on("click",Minecraft.play);
    $(".tool").on("click", Minecraft.selectTool);
}

Minecraft.createBoard = function(){
    var boardWidth = "800";
    var boardHeight = "600";

    var field = $("<div/>");
    field.css("margin" , "auto");
    var bWidt = parseInt(boardWidth)+100+"px";
    field.css("width" , bWidt);
    $("body").append(field);

    var gameboard = $("<div/>");
    gameboard.attr("id","gameboard");
    gameboard.css("width",boardWidth+"px");
    gameboard.css("height", boardHeight+"px");
    field.append(gameboard);

    var sidebar = $("<div/>");
    sidebar.attr("id","sidebar");
    field.append(sidebar);

    var toolbelt = $("<div/>");
    toolbelt.addClass("toolbelt");
    sidebar.append(toolbelt);

    var toolbox = ["pickaxe","shovel","axe"];
    for(var i = 0 ; i < toolbox.length ; i++){
        var tool = $("<div/>");
        tool.css("backgroundImage", "url('./images/" + toolbox[i] +".png')");
        tool.addClass("tool");
        tool.attr("id",toolbox[i]);
        tool.text(toolbox[i].toUpperCase());
        toolbelt.append(tool);
    }
    var active = $("<div/>");
    active.addClass("material");
    active.on('click',Minecraft.showInventory);
    toolbelt.append(active);

    var counter = 0;
    for (var i=0; i<boardHeight/50; i++){
        for(var j=0; j<boardWidth/50; j++){
            counter++;
            var block = $(document.createElement("div"));
            block.addClass("block");
            block.attr("id",counter);
            gameboard.append(block);
        }
    }
};

Minecraft.setBackGround = function(){
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
};
//select tool
Minecraft.selectTool = function(){
   if ($(this).attr("id") == "pickaxe"){
        Minecraft.currentTool = "pickaxe";
    }
    else if($(this).attr("id") == "shovel"){
        Minecraft.currentTool = "shovel";
    }
    else {
        Minecraft.currentTool = "axe";
    }
    console.log(Minecraft.currentTool);
};
Minecraft.play = function(event){   
    //for pickaxe and rock
    if((Minecraft.currentTool === "pickaxe") && ($(this).attr("class") === "block rock")){
        $(this).removeClass("rock");
        $(".material").addClass("rock");
    }
        //for shovel and dirt/grass
    else if((Minecraft.currentTool === "shovel") && ($(this).attr("class") === "block dirt")){
        $(this).removeClass("dirt");
        $(".material").addClass("dirt");
    }
    else if((Minecraft.currentTool === "shovel") && ($(this).attr("class") === "block grass")){
        $(this).removeClass("grass");
        $(".material").addClass("grass");
    }
        //for axe and tree/leaf
    else if((Minecraft.currentTool === "axe") && ($(this).attr("class") === "block tree")){
        $(this).removeClass("tree");
        $(".material").addClass("tree");
    }
    else if((Minecraft.currentTool === "axe") && $(this).attr("class") === "block leaf"){
            $(this).removeClass("leaf");
            $(".material").addClass("leaf");
    }
    else{
        $("Minecraft.currentTool").css("backgroundColor","red");
        console.log("flash red!!!");
    }

     /*function build(){
        //Minecraft.showInventory();
        $(".material").css("border","1px solid yellow");
        var currentMaterial=$(".material").classList.item(1);
        console.log(currentMaterial);
        $(".block").on("click",function(){
            if($(this).attr("backgroundImage")==="none"){
                $(this).addClass("backgroundImage",currentMaterial);
            }
        });
}
Minecraft.showInventory=function(){
    $("#inventory").css("display","block");
    $("#close").on("click",function(){
        ($("#inventory").css("display","none"));
    });
};*/


$(document).ready(function(){
    Minecraft.init();
});