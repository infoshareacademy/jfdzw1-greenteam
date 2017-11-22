var scoreboard = [];

let gameboard =
    {
        boards: [
            {
                tag: "winter",
                className: "winterboard"
            },
            {
                tag: "spring",
                className: "springboard"
            },
            {
                tag: "summer",
                className: "summerboard"
            },
            {
                tag: "autumn",
                className: "autumboard"
            }
        ],
        getRandomBoard: function () {
        }
    };

function initScoreboard (scoreboard) {
    // check if scoreboard is empty, if empty insert five initial players using insertPlayer function
    var scoreboardLn = scoreboard.length;
    if (scoreboardLn === 0) {
        var i = 1;
        var initPlayerName;
        var initPlayerScore;
        var initPlayer;

        while (i < 6) {
            initPlayerName = "Jan" + i;
            initPlayerScore = i * 1000;
            initPlayer = createPlayer (initPlayerName, initPlayerScore);
            insertPlayer (initPlayer);
            i++;
        }
    }
}

function createPlayer (text, number) {

    var player = {
        name: text,
        score: number
    };

    return player;
}

function insertPlayer (player) {
    scoreboard.push (player);
    scoreboard.sort (sortPlayers);
    scoreboard.length = 5;
}

function sortPlayers (pl1, pl2) {

    return pl2.score - pl1.score;
}


function getResults (arr) {

    let newArr = arr.slice (0, arr.length);
    return newArr;
}

function sample () {

    return initScoreboard (scoreboard);
}

