
$(".green-button").on("mousedown", function(e) {
    $(this).addClass("green-button-active");
}).on("mouseup", function(e) {
    $(this).removeClass("green-button-active");
}).on(".button").on("touchstart", function(e) {
    $(this).addClass("green-button-active");
}).on("touchend", function(e) {
    $(this).removeClass("green-button-active green-button-hover");
});

$(".red-button").on("mousedown", function(e) {
    $(this).addClass("red-button-active");
}).on("mouseup", function(e) {
    $(this).removeClass("red-button-active");
}).on(".button").on("touchstart", function(e) {
    $(this).addClass("red-button-active");
}).on("touchend", function(e) {
    $(this).removeClass("red-button-active red-button-hover");
});

$(".yellow-button").on("mousedown", function(e) {
    $(this).addClass("yellow-button-active");
}).on("mouseup", function(e) {
    $(this).removeClass("yellow-button-active");
}).on(".button").on("touchstart", function(e) {
    $(this).addClass("yellow-button-active");
}).on("touchend", function(e) {
    $(this).removeClass("yellow-button-active yellow-button-hover");
});

$(".blue-button").on("mousedown", function(e) {
    $(this).addClass("blue-button-active");
}).on("mouseup", function(e) {
    $(this).removeClass("blue-button-active");
}).on(".button").on("touchstart", function(e) {
    $(this).addClass("blue-button-active");
}).on("touchend", function(e) {
    $(this).removeClass("blue-button-active blue-button-hover");
});

if ($(window).width() > 768) {
    $(".green-button").on("mouseover", function(e) {
        $(this).addClass("green-button-hover");
    }).on("mouseout", function(e) {
        $(this).removeClass("green-button-hover");
    });

    $(".red-button").on("mouseover", function(e) {
        $(this).addClass("red-button-hover");
    }).on("mouseout", function(e) {
        $(this).removeClass("red-button-hover");
    });

    $(".yellow-button").on("mouseover", function(e) {
        $(this).addClass("yellow-button-hover");
    }).on("mouseout", function(e) {
        $(this).removeClass("yellow-button-hover");
    });

    $(".blue-button").on("mouseover", function(e) {
        $(this).addClass("blue-button-hover");
    }).on("mouseout", function(e) {
        $(this).removeClass("blue-button-hover");
    });
}