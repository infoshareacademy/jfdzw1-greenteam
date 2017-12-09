let scarf= {
    season:'winter',
    url:'',
    points: 10
}

let winterCap= {
    season:'winter',
    url:'',
    points: 10
}

let gloves = {
    season:'winter',
    url:'',
    points: 10
}

let sunglasses = {
    season:'summer',
    url:'',
    points: 10
}

let swimsuit = {
    season:'summer',
    url:'',
    points: 10
}
let hat = {
    season:'summer',
    url:'',
    points: 10
}

let flipFlops = {
    season:'summer',
    url:'',
    points: 10
}

let raincoat = {
    season:'autumn',
    url:'',
    points: 10
}

let umbrella = {
    season:'autumn',
    url:'',
    points: 10
}

let wellingtons= {
    season:'autumn',
    url:'',
    points: 10
}


$ (document).ready (function () {

    $('#startGame').click(function (e) {
        e.preventDefault();

        var $gameStatus = {
            currnetSeason: gameboard.getRandomBoard(),
            playerName: $playerName,
            playerScore: 0,
            timeToEnd: '',
            items:[scarf,sunglasses,winterCap,gloves,hat,swimsuit,flipFlops,raincoat,umbrella,wellingtons],
            getRandomItem: function getRandomItem () {
                let randomIntem = Math.floor(Math.random() * this.items.length);

                return items[randomIntem];
            }
        };

        $('body').addClass($gameStatus.currnetSeason.className);

        $('#startGame').addClass("hidden");
        $('.button').addClass("hidden");

        $('#player').empty().text('Player name');
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


