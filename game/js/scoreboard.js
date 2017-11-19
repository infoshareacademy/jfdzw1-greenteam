var scoreboard = [];

function initScoreboard(scoreboard) {
    // check if scoreboard is empty, if empty insert five initial players using insertPlayer function
    var scoreboardLn = scoreboard.length;
    if (scoreboardLn === 0) {
        var i = 1;
        var initPlayerName;
        var initPlayerScore;
        var initPlayer;

        while (i < 6) {
            initPlayerName = "Jan" + i;
            initPlayerScore = i*1000;
            initPlayer = createPlayer(initPlayerName,initPlayerScore);
            insertPlayer(initPlayer);
            i++;
        }
    }
}


function createPlayer() {

}

function insertPlayer() {

}

function getResults() {

}

