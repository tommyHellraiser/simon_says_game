$(".button").on("mousedown", function(e) {
    $(this).addClass("button-active");
});

$(".button").on("mouseup", function(e) {
    $(this).removeClass("button-active");
});

$(".button").on("touchstart", function(e) {
    $(this).addClass("button-active");
});

$(".button").on("touchend", function(e) {
    $(this).removeClass("button-active button-hover");
});

if ($(window).width() > 768) {
    $(".button").on("mouseover", function(e) {
        $(this).addClass("button-hover");
    });

    $(".button").on("mouseout", function(e) {
        $(this).removeClass("button-hover");
    });
}