var Minecraft = {}
var currentTool = "";
var leafCount = 0;
var treeCount = 0;
var rockCount = 0;
var dirtCount = 0;
var grassCount = 0;

Minecraft.init = function () {
    Minecraft.createBoard();
    Minecraft.setBackGround();
    Minecraft.blocks = $(".block");
    Minecraft.blocks.on("click", Minecraft.play);
    $(".tool").on("click", Minecraft.selectTool);
    $(".materials").on("click", Minecraft.selectTool);
    Minecraft.currentTool = "pickaxe";
    $("#"+Minecraft.currentTool).css("background-color", "blue");
};

Minecraft.createBoard = function () {
    var boardWidth = "800";
    var boardHeight = "600";

    var field = $("<div/>");
    field.css("margin", "auto");
    var bWidt = parseInt(boardWidth) + 100 + "px";
    field.css("width", bWidt);
    $("body").append(field);

    var gameboard = $("<div/>");
    gameboard.attr("id", "gameboard");
    gameboard.css("width", boardWidth + "px");
    gameboard.css("height", boardHeight + "px");
    field.append(gameboard);

    var sidebar = $("<div/>");
    sidebar.attr("id", "sidebar");
    field.append(sidebar);

    var toolbelt = $("<div/>");
    toolbelt.addClass("toolbelt");
    sidebar.append(toolbelt);

    var toolbox = ["pickaxe", "shovel", "axe","empty"];
    for (var i = 0; i < toolbox.length; i++) {
        var tool = $("<div/>");
        tool.css("backgroundImage", "url('./images/" + toolbox[i] + ".png')");
        tool.addClass("tool");
        tool.attr("id", toolbox[i]);
        tool.text(toolbox[i].toUpperCase());
        toolbelt.append(tool);
    }
    $("#empty").css("display","none");
    var inventory = ["tree", "leaf", "dirt", "grass", "rock"];
    var bank = $("<div/>");
    bank.addClass("bank");
    sidebar.append(bank);
    for (var i = 0; i < inventory.length; i++) {
        var element = $("<div/>");
        element.addClass("materials " + inventory[i]);
        bank.append(element);
    }
    $(".materials.tree").text(treeCount);
    $(".materials.tree").on("click", function () {
        if (treeCount > 0) {
            Minecraft.build("tree");
        }
    });
    $(".materials.leaf").text(leafCount);
    $(".materials.leaf").on("click", function () {
        if (leafCount > 0) {
            Minecraft.build("leaf");
        }
    });
    $(".materials.rock").text(rockCount);
    $(".materials.rock").on("click", function () {
        if (rockCount > 0) {
            Minecraft.build("rock");
        }
    });
    $(".materials.dirt").text(dirtCount);
    $(".materials.dirt").on("click", function () {
        if (dirtCount > 0) {
            Minecraft.build("dirt");
        }
    });
    $(".materials.grass").text(grassCount);
    $(".materials.grass").on("click", function () {
        if (grassCount > 0) {
            Minecraft.build("grass");
        }
    });

    var counter = 0;
    for (var i = 0; i < boardHeight / 50; i++) {
        for (var j = 0; j < boardWidth / 50; j++) {
            counter++;
            var block = $(document.createElement("div"));
            block.addClass("block");
            block.attr("id", counter);
            gameboard.append(block);
        }
    }
};

//Default background on new game
Minecraft.setBackGround = function () {
    for (var i = 192; i > 160; i--) {
        $('#' + i).addClass('dirt');
    }
    for (var i = 160; i > 144; i--) {
        $('#' + i).addClass('grass');
    }
    $('#109,#125,#141').addClass('tree');
    $('#60,#61,#62,#76,#77,#78,#92,#93,#94').addClass('leaf');
    $('#114,#115,#130,#131').addClass('rock');
    $('#35,#36,#37,#38,#34,#52,#51,#53,#21,#22,#20,#39').css('backgroundColor', 'white');
};

//Build world
Minecraft.build = function (rawMaterial) {
    console.log(rawMaterial);
    $(".block").on("click", function () {
        if (rawMaterial === "leaf" && $(this).attr("class") === "block" && leafCount > 0) {
            $(this).addClass(rawMaterial);
            leafCount--;
            $(".materials.leaf").text(leafCount);
        } else if (rawMaterial === "tree" && $(this).attr("class") === "block" && treeCount > 0) {
            $(this).addClass(rawMaterial);
            treeCount--;
            $(".materials.tree").text(treeCount);
        } else if (rawMaterial === "rock" && $(this).attr("class") === "block" && rockCount > 0) {
            $(this).addClass(rawMaterial);
            rockCount--;
            $(".materials.rock").text(rockCount);
        } else if (rawMaterial === "dirt" && $(this).attr("class") === "block" && dirtCount > 0) {
            $(this).addClass(rawMaterial);
            dirtCount--;
            $(".materials.dirt").text(dirtCount);
        } else if (rawMaterial === "grass" && $(this).attr("class") === "block" && grassCount > 0) {
            $(this).addClass(rawMaterial);
            grassCount--;
            $(".materials.grass").text(grassCount);
        }
    });
};
//select tool
Minecraft.selectTool = function () {
    $("#"+Minecraft.currentTool).css("background-color", "black");
    if ($(this).attr("id") == "pickaxe") {
        Minecraft.currentTool = "pickaxe";
    }
    else if ($(this).attr("id") == "shovel") {
        Minecraft.currentTool = "shovel";
    }
    else if ($(this).attr("id") == "axe"){
        Minecraft.currentTool = "axe";
    }
    else{
        Minecraft.currentTool="empty";
    }
     $("#"+Minecraft.currentTool).css("background-color", "blue");
};

Minecraft.play = function (event) {
    //for pickaxe and rock
    if ((Minecraft.currentTool === "pickaxe") && ($(this).attr("class") === "block rock")) {
        $(this).removeClass("rock");
        $(".material").css("backgroundImage", "url('./images/rock.png')");
        rockCount++;
        $(".materials.rock").text(rockCount);
    }
    //for shovel and dirt/grass
    else if ((Minecraft.currentTool === "shovel") && ($(this).attr("class") === "block dirt")) {
        $(this).removeClass("dirt");
        $(".material").css("backgroundImage", "url('./images/dirt.png')");
        dirtCount++;
        $(".materials.dirt").text(dirtCount);
    }
    else if ((Minecraft.currentTool === "shovel") && ($(this).attr("class") === "block grass")) {
        $(this).removeClass("grass");
        $(".material").css("backgroundImage", "url('./images/grass.png')");
        grassCount++;
        $(".materials.grass").text(grassCount);
    }
    //for axe and tree/leaf
    else if ((Minecraft.currentTool === "axe") && ($(this).attr("class") === "block tree")) {
        $(this).removeClass("tree");
        $(".material").css("backgroundImage", "url('./images/tree.png')");
        treeCount++;
        $(".materials.tree").text(treeCount);
    }
    else if ((Minecraft.currentTool === "axe") && $(this).attr("class") === "block leaf") {
        $(this).removeClass("leaf");
        $(".material").css("backgroundImage", "url('./images/leaf.png')");
        leafCount++;
        $(".materials.leaf").text(leafCount);
    }
    else {
        var flashCounter = 0;
        var flashTimer = setInterval(function(){   
            $("#"+Minecraft.currentTool).css("background-color", "red");
            setTimeout(function(){
                $("#"+Minecraft.currentTool).css("background-color", "blue")
            },250);
            flashCounter++;
            if(flashCounter >2){
                clearInterval(flashTimer);
            } 
        },500);
    }
};

$(document).ready(function () {
    Minecraft.init();
});