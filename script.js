var point = 0;
var increase = 1;
var multiplier = 10;
var progress = 0;
var holder = 0;
var restrict = 0;

$("#point").text(point);
$("#increase").text(increase);
$(".content").hide();

$("#cookie").click(function() {
    point = point + increase;
    progress = progress + 1;
    $("#cookie").css("width", "190px");
    setTimeout(function() {
        $("#cookie").css("width", "200px");
    }, 100);
    $("#point").text(point);
    $("#progress"). css("width", `${progress}%`);
    if (progress >= 100) {
        mutiplyBy10();
    }
});

$(".shop").hover(function() {
    if ($(".content").is(':visible')) {
        $(".content").slideUp();
    } else {
        $(".content").slideDown();
    }
});

$("#item1").click(function() {
    if (restrict === 0) {
        if (point >= multiplier) {
            point = point - multiplier;
            increase = increase * 2;
            multiplier = multiplier * increase;
            $("#point").text(point);
            $("#increase").text(increase);
            $("#item1Text").text(`Multiplier - ${multiplier} points`);
        } else {
            alert("Not enough points to purchase!");
        }
    } else {
        alert("You cannot buy multiplier while 10x boost is on!")
    }
});

$("#item2").click(function() {
    if (point >= 100) {
        $("#cookie").attr("src", $("#item2").attr("src"));
    }
    buy(point, 100);
});

$("#item3").click(function() {
    if (point >= 120) {
        $("#cookie").attr("src", $("#item3").attr("src"));
    }
    buy(point, 120);
});

$("#item4").click(function() {
    if (restrict === 0) {
        if (point >= 140) {
        progress = 100;
        $("#progress").css("width", "100%");
        } 
        buy(point, 140);
    } else {
        alert("You cannot buy fill while 10x boost is on!")
    }
});

$("#item5").click(function() {
    if (restrict === 0) {
        if (point >= 160) {
        point = 0;
        $("#point").text(point);
        increase = 1;
        $("#increase").text(increase);
        multiplier = 10;
        $("#item1Text").text(`Multiplier - ${multiplier} points`);
        progress = 0;
        $("#progress").css("width", "0%");
        $("#cookie").attr("src", "http://www.pngall.com/wp-content/uploads/2016/07/Cookie-PNG.png");
        }  else {
            alert("Not enough points to purchase!");
        }
    } else {
        alert("You cannot reset while 10x boost is on!")
    }
});

function buy(money, cost) {
    if (money >= cost) {
        point = point - cost;
        $("#point").text(point);
    } else {
        alert("Not enough points to purchase!");
    }
}

function mutiplyBy10() {
    alert("10x multiplier for 5 seconds!");
    progress = 0;
    $("#progress"). css("width", `${progress}%`);
    holder = increase;
    restrict = 1;
    increase = increase * 10;
    $("#increase").text(increase);
    setTimeout(function() {
        increase = holder;
        restrict = 0;
        $("#increase").text(increase);
    }, 5000);
}