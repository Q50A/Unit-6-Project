$(".Part-Two-Yes").hide();
$(".yes-button").click(function() {
    $(".firstclass").hide();
    $(".Part-Two-Yes").fadeIn();
    
    
});

$(".no-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
  
});


$(".bye").dblclick(function(){
    $(".firstImage").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".help").show();
    $(".bye").hide();
    $(".restart").hide();
});
$(".map1").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("you beat the monster  ");
    $(".hide1").text("Hover Over the next mooster To hunt it down");
    $(".hide1").css("color", "darkblue");
    $(".hide").css("color", "white");
    $("body").css("background-image","url(https://b2058262.smushcdn.com/2058262/wp-content/uploads/2018/10/AdobeStock_128248745-scaled.jpeg?lossy=1&strip=1&webp=1");
    $(".fly").show();
});
$(".map2").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("You died ");
    $(".hide").css("color", "white");
    
   
    $("body").css("background-image","url(data:image/jpeg;base64,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)");
    $(".end").slideDown("slow");
    
});
$(".fly").mouseenter(function(){
    $(".hide").text("You Must Fight The Monster!");
    $(".hide1").text("*Double Click the Monster To Enter*");
    $("body").css("background-image","url(https://m.media-amazon.com/images/I/61vYCET6O5L._AC_UF894,1000_QL80_.jpg");
});
$(".fly").dblclick(function(){
    $(".hide").text("Shoot the monsters ");
    $(".hide1").text("Unhover Over the monster To Defeat");
    $("body").css("background-image","url(https://media.wired.com/photos/59324c1b9be5e55af6c2406c/master/w_1600%2Cc_limit/russia-10.jpg");
});
$(".fly").mouseleave(function(){
    $("body").css("background-image","url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX16338564.jpg");
    $(".fly").hide();
    $(".end").show();
    $(".hide1").text("Click Text above To Toggle win");
    $(".hide").text("YOU WIN CONGRATULATIONS!!!");
});
$(".hide").click(function(){
    $(".end").toggle();
});

$(".restart1").click(function() {
location.reload();
});

