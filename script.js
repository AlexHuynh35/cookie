var point = 0;
var increase = 1;
var multiplier = 10;

$("#point").text(point);
$(".content").hide();

$("#cookie").click(function(){
    point = point + increase;
    $("#point").text(point);
    $("#cookie").css("width", "90px");
    setTimeout(function(){
        $("#cookie").css("width", "100px");
    }, 100);
});

$("#openShop").click(function(){
    if($(".content").is(":visible")){
        $(".content").hide();
    }else{
        $(".content").show();
    }
});

$("#item1").click(function(){
    if (point >= multiplier) {
        increase = increase * 2;
        multiplier = multiplier * 2;
        $("#item1Text").text(`Multiplier - ${multiplier} points`);
    }
});

function buy(money, cost) {
    if (money >= cost) {
        point = point - cost;
        $("#point").text(point);
    } else {
        alert("Not enough points to purchase!")
    }
}

function changeSize() {
    $("#cookie").css("width", "100px");
}


