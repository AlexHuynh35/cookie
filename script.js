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

})

