var point = 0;
var increase = 1;
var multiplier = 10;
var progress = 0;
var holder = 0;

$("#point").text(point);
$(".content").hide();

$("#cookie").click(function() {
    point = point + increase;
    progress = progress + 1;
    $("#cookie").css("width", "90px");
    setTimeout(function() {
        $("#cookie").css("width", "100px");
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
    if (point >= multiplier) {
        point = point - multiplier;
        increase = increase * 2;
        multiplier = multiplier * increase;
        $("#point").text(point);
        $("#item1Text").text(`Multiplier - ${multiplier} points`);
    } else {
        alert("Not enough points to purchase!");
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
    if (point >= 140) {
    progress = 100;
    $("#progress").css("width", "100%");
    } 
    buy(point, 140);
});

$("#item5").click(function() {
    if (point >= 160) {
    point = 0;
    $("#point").text(point);
    increase = 1;
    multiplier = 10;
    $("#item1Text").text(`Multiplier - ${multiplier} points`);
    $("#cookie").attr("src", "http://www.pngall.com/wp-content/uploads/2016/07/Cookie-PNG.png");
    } else {
        alert("Not enough points to purchase!");
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
    alert("10x multiplier for 10 seconds!");
    progress = 0;
    $("#progress"). css("width", `${progress}%`);
    holder = increase;
    increase = increase * 10;
    setTimeout(function() {
        increase = holder;
    }, 10000);
}