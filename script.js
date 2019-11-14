var point = 0;
$("#point").text(point);
$(".content").hide();

$("#cookie").click(function(){
    point = point + 1;
    $("#point").text(point);
});

$("#openShop").click(function(){
    if($(".content").is(":visible")){
        $(".content").hide();
    }else{
        $(".content").show();
    }
});

$(".item1").click(function(){
buy(4,5);
})

function buy(point, cost) {
    if (point >== cost) {
        point = point - cost;
    }else {
        alert("Not enough points to purchase!")
    }
}


