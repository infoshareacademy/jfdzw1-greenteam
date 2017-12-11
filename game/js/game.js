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
            currentSeason: gameboard.getRandomBoard(),
            player: createPlayer ($playerName, 0),
            timeToEnd: timer (61),
            items:[scarf,sunglasses,winterCap,gloves,hat,swimsuit,flipFlops,raincoat,umbrella,wellingtons],
            getRandomItem: function getRandomItem () {
                let randomIntem = Math.floor(Math.random() * this.items.length);

                return items[randomIntem];
            }
        };

        // hide buttons
        $('.button').addClass("hidden");

        // change Welcome label
        $('#player').empty().text('Player name');

        // show currnet score and timer
        $('#playerScore').removeClass('hidden').addClass('show');
        $('#timer').removeClass('hidden').addClass('show');

        // show random gameboard
        $('body').addClass($gameStatus.currentSeason.className);

    });

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

    // show playerName 
    let $playerName = getParameterByName('name');

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


