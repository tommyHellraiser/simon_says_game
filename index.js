let game_status = "off";
const status_switch = {
    playing: "playing",
    off: "off",
    game_over: "game_over"
};
const level_switch = {
    0: "Press any Button to Start",
    1: "Level 1",
    2: "Level 2",
    3: "Level 3",
    4: "Level 4",
    5: "Level 5",
    6: "Level 6",
    7: "Level 7",
    8: "Level 8",
    9: "Level 9",
    10: "Level 10",
    11: "Congratulations, you won!!"
};
let sequence = [];
let sequence_counter = 0;
let level_counter = 0;
let button= {
    green: "sounds/green.mp3",
    red: "sounds/red.mp3",
    yellow: "sounds/yellow.mp3",
    blue: "sounds/blue.mp3"
};
let rick_roll = "sounds/rick_roll.mp3";

$("#level-number").text(level_switch[level_counter]);

for (let i = 0; i < 20; i++) {
    sequence.push(Math.floor(Math.random() * 4));
}

$(".green-button").on("mousedown", function() {
    $(this).addClass("green-button-active");
    setTimeout(function (){
        game_logic(button.green);
    }, 100);
}).on("touchstart", function() {
    $(this).addClass("green-button-active");
    setTimeout(function (){
        game_logic(button.green);
    }, 100);
}).on("mouseup", function() {
    $(this).removeClass("green-button-active");
}).on("touchend", function() {
    $(this).removeClass("green-button-active green-button-hover");
});

$(".red-button").on("mousedown", function() {
    $(this).addClass("red-button-active");
    setTimeout(function (){
        game_logic(button.red);
    }, 100);
}).on("touchstart", function() {
    $(this).addClass("red-button-active");
    setTimeout(function (){
        game_logic(button.red);
    }, 100);
}).on("mouseup", function() {
    $(this).removeClass("red-button-active");
}).on("touchend", function() {
    $(this).removeClass("red-button-active red-button-hover");
});

$(".yellow-button").on("mousedown", function() {
    $(this).addClass("yellow-button-active");
    setTimeout(function (){
        game_logic(button.yellow);
    }, 100);
}).on("touchstart", function() {
    $(this).addClass("yellow-button-active");
    setTimeout(function (){
        game_logic(button.yellow);
    }, 100);
}).on("mouseup", function() {
    $(this).removeClass("yellow-button-active");
}).on("touchend", function() {
    $(this).removeClass("yellow-button-active yellow-button-hover");
});

$(".blue-button").on("mousedown", function() {
    $(this).addClass("blue-button-active")
    setTimeout(function (){
        game_logic(button.blue);
    }, 100);
}).on("touchstart", function() {
    $(this).addClass("blue-button-active");
    setTimeout(function (){
        game_logic(button.blue);
    }, 100);
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
    if (input === sequence[sequence_counter]) {
        sequence_counter++;
        return true;
    } else {
        return false;
    }
}
function game_logic (button_pressed) {
    if (game_status === status_switch.off) {
        //switch_on_game();
    } else if (game_status === status_switch.playing) {
        
    } else if (game_status === status_switch.game_over) {
        
    } else {
        alert("Error: invalid game status");
    }
    level_counter++;
    if (1) {
        if (level_counter === 11) {
            game_status = status_switch.game_over;
            set_text_from_level_counter(level_counter);
            new Audio(rick_roll).play();
        } else if (level_counter >= 12) {
            level_counter = 0;
            set_text_from_level_counter(level_counter);
        } else {
            //level_counter++;
            set_text_from_level_counter(level_counter);
            //game_status = status_switch.playing;
        }
    }
    
    //play_audio(button_pressed);
    // if (button.hasOwnProperty(button_pressed)) {
    //     alert("Found property");
    //     //button_sounds[button_pressed].play();
    //     new Audio(button[button_pressed]).play();
    // }
}

function switch_on_game() {
    game_status = status_switch.playing;
    $("#level-number").text("Level 1");
}

function set_text_from_level_counter(level_counter) {
    $("#level-number").text(level_switch[level_counter]);
}

function play_audio (button_pressed) {
    if ($(window).width > 1000) {
        new Audio(button_pressed).play();
    }
}