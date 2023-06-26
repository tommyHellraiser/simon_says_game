let game_status = "off";
let sequence = [];
let player_sequence_counter = 0;
let button= {
    green: "green",
    red: "red",
    yellow: "yellow",
    blue: "blue"
};

let button_sounds = {
    "green": new Audio("sounds/green.mp3"),
    "red": new Audio("sounds/red.mp3"),
    "yellow": new Audio("sounds/yellow.mp3"),
    "blue": new Audio("sounds/blue.mp3")
};

for (let i = 0; i < 20; i++) {
    sequence.push(Math.floor(Math.random() * 4));
}

$(".green-button").on("mousedown", function() {
    $(this).addClass("green-button-active");
    game_logic(button.green);
}).on("touchstart", function() {
    $(this).addClass("green-button-active");
    game_logic(button.green);
}).on("mouseup", function() {
    $(this).removeClass("green-button-active");
}).on("touchend", function() {
    $(this).removeClass("green-button-active green-button-hover");
});

$(".red-button").on("mousedown", function() {
    $(this).addClass("red-button-active");
    game_logic(button.red);
}).on("touchstart", function() {
    $(this).addClass("red-button-active");
    game_logic(button.red);
}).on("mouseup", function() {
    $(this).removeClass("red-button-active");
}).on("touchend", function() {
    $(this).removeClass("red-button-active red-button-hover");
});

$(".yellow-button").on("mousedown", function() {
    $(this).addClass("yellow-button-active");
    game_logic(button.yellow);
}).on("touchstart", function() {
    $(this).addClass("yellow-button-active");
    game_logic(button.yellow);
}).on("mouseup", function() {
    $(this).removeClass("yellow-button-active");
}).on("touchend", function() {
    $(this).removeClass("yellow-button-active yellow-button-hover");
});

$(".blue-button").on("mousedown", function() {
    $(this).addClass("blue-button-active");
    game_logic(button.blue);
}).on("touchstart", function() {
    $(this).addClass("blue-button-active");
    game_logic(button.blue);
}).on("mouseup", function() {
    $(this).removeClass("blue-button-active");
}).on("touchend", function() {
    $(this).removeClass("blue-button-active blue-button-hover");
});

if ($(window).width() > 768) {
    $(".green-button").on("mouseover", function() {
        $(this).addClass("green-button-hover");
    }).on("mouseout", function() {
        $(this).removeClass("green-button-hover");
    });

    $(".red-button").on("mouseover", function() {
        $(this).addClass("red-button-hover");
    }).on("mouseout", function() {
        $(this).removeClass("red-button-hover");
    });

    $(".yellow-button").on("mouseover", function() {
        $(this).addClass("yellow-button-hover");
    }).on("mouseout", function() {
        $(this).removeClass("yellow-button-hover");
    });

    $(".blue-button").on("mouseover", function() {
        $(this).addClass("blue-button-hover");
    }).on("mouseout", function() {
        $(this).removeClass("blue-button-hover");
    });
}

function validate_sequence (input) {
    if (input === sequence[player_sequence_counter]) {
        player_sequence_counter++;
        return true;
    } else {
        return false;
    }
}
function game_logic (button_pressed) {
    if (button_sounds.hasOwnProperty(button_pressed)) {
        button_sounds[button_pressed].play();
    }
}