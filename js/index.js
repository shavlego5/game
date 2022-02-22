

let game = $("#game");
let points1 = $(".count");
let sec = $(".sec");
let secs;

let mouseenterCounts = 100;
let timer = 0;
let transition = 0.5;

game.mouseenter(() => {
    let x = window.innerWidth - 50;
    let y = window.innerHeight - 50;

    let bottom = Math.floor((Math.random() * y) + 1) + "px";
    let right = Math.floor((Math.random() * x) + 1) + "px";
    let smile = "images/smile/smile-" + Math.floor((Math.random() * 50) + 1) + ".png";

    game.css({ "bottom": bottom, "right": right });
    game.attr("src", smile);

    transition += .05;
    game.css("transition", transition + "s");

    if (mouseenterCounts === 0) {
        mouseenterCounts = 100;
        points1.html(mouseenterCounts);
        alert("თქვენ წააგეთ. კიდევ სცადეთ")

    } else {
        mouseenterCounts--;
        points1.html(mouseenterCounts);
    }
});



game.hover(function () {
    secs = setInterval(() => {
        timer += 100;
        sec.html(timer / 1000);
        if (timer === 5000) {
            alert("თქვენ მოიგეთ. ქულა : " + mouseenterCounts);
            resetGame();
            sec.html(timer / 1000);
        }
    }, 100);
}, function () {
    clearInterval(secs);
    timer = 0;
});

let onOff = $(".on-off");

let start = "start";

onOff.click(() => {
    if (start === "start") {
        game.show();
        $("#points").show();
        resetGame();
        sec.html(timer / 1000);
        start = "end";
        onOff.html("დასრულება").css({ "color": "red", "margin-left": "3px" });

    } else {
        game.hide();
        $("#points").hide();
        resetGame();
        sec.html(timer / 1000);
        start = "start";
        onOff.html("დაწყება").css({ "color": "green", "margin-left": "15px" });
    }
})

function resetGame() {
    timer = 0;
    mouseenterCounts = 100;
    transition = 0.5;
    points1.html(mouseenterCounts);
    game.css("transition", transition + "s");
}

