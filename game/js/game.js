$ (document).ready (function () {

    $('#startGame').click(function (e) {
        e.preventDefault();

        let $board = gameboard.getRandomBoard();
        $('body').addClass($board.className);

        $('#player').empty();
        $('#startGame').addClass("hidden");
        $('.button').addClass("hidden");

        $('#player').text('Player name');
        $('#playerScore').css('display', 'inline');
        $('#currentScore').css('display', 'inline').text('0');
        $('#timer').removeClass('hidden').addClass('show');
        timer (11);

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


    let time = document.getElementById("time");


    function timer (timeToEnd) {
      if (timeToEnd === 0) {
        return;
      }

      timeToEnd = timeToEnd -1;

      if(timeToEnd < 10){
        time.innerHTML = "0" + timeToEnd;
      }else{
        time.innerHTML = timeToEnd;
      }


      setTimeout(function() {
        timer(timeToEnd);
      }, 1000);
    }


});


