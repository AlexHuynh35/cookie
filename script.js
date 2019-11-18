var point = 0;
var increase = 1;
var multiplier = 10;
var progress = 0;

$("#point").text(point);
$(".content").hide();

$("#cookie").click(function(){
    point = point + increase;
    progress = progress + 1;
    $("#point").text(point);
    $("#cookie").css("width", "90px");
    setTimeout(function(){
        $("#cookie").css("width", "100px");
    }, 100);
    $("#progress").attr("value", progress);
});

multiplyBy10(progress);

$("#openShop").click(function(){
    $(".content").slideToggle();
});

$("#item1").click(function(){
    if (point >= multiplier) {
        point = point - multiplier;
        increase = increase * 2;
        multiplier = multiplier * increase;
        $("#point").text(point);
        $("#item1Text").text(`Multiplier - ${multiplier} points`);
    } else {
        alert("Not enough points to purchase!")
    }
});

$("#item2").click(function(){
    buy(point, 100);
})

$("#item3").click(function(){
    buy(point, 120);
})

function buy(money, cost) {
    if (money >= cost) {
        point = point - cost;
        $("#point").text(point);
    } else {
        alert("Not enough points to purchase!")
    }
}

function mutiplyBy10 (progressValue) {
    if (progressValue >= 100) {
        alert("Points x10 next 10 seconds");
        setTimeout(function() {
            $("#cookie").attr("id", "opCookie");
            $("#opCookie").click(function(){
                point = point + (10 * increase);
            });
        }, 10000);
    }
    progress = 0;
    $("#progress").attr("value", progress);
    $("#opCookie").attr("id", "cookie");
}