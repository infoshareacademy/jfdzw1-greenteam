$ (document).ready (function () {

    $('#startGame').click(function (e) {
        e.preventDefault();

        var $gameStatus = {
            currnetSeason: gameboard.getRandomBoard(),
            playerName: $playerName,
            playerScore: 0,
            timeToEnd: ''
        };

        $('body').addClass($gameStatus.currnetSeason.className);

        $('#startGame').css('display', 'none');
        $('.button').css('display', 'none');

        $('#player').empty().text('Player name');
        $('#playerScore').css('display', 'inline');
        $('#currentScore').css('display', 'inline').text('0');

    });


    function initGame () {

    }

    // get player name form scr
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var $playerName = getParameterByName('name');

    let $object = $('#currentPlayer').empty();

    $(`<b>${$playerName}</b>`)
        .prependTo('#currentPlayer');

});


