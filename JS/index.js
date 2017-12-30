var logo=$("<img/>");
logo.attr("src","./images/logo.png");
logo.css({"width":"1000px","display":"block","margin":"150px auto 75px auto"});
$("body").append(logo);

var buttonArray=["Start","Tutorial"];
for(var i=0;i<buttonArray.length;i++){
    var btn=$("<button/>");
    btn.text(buttonArray[i]);
    btn.attr("class","button");
    btn.attr("id",buttonArray[i]);
    btn.css({"height":"100px","width":"250px","box-shadow":"5px 5px"});
    $("body").append(btn);
}

$("#Start").text("Start Game");
$("#Start").on("click",function(){
    window.location.href="minecraft.html";
});

$("#Tutorial").on("click",function(){
    $(".modal").css("display","block");
});
$("#close").on("click",function(){
    $(".modal").css("display","none");
});