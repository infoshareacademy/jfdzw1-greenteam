let scarf= {
    season:'winter',
    url: '../game/img/Scarf.png',
    points: 10
}

let winterCap= {
    season:'winter',
    url: '../game/img/winter cap.png',
    points: 10
}

let gloves = {
    season:'winter',
    url: '../game/img/gloves.png',
    points: 10
}

let sunglasses = {
    season:'summer',
    url: '../game/img/sunglasses.png',
    points: 10
}

let swimsuit = {
    season:'summer',
    url: '../game/img/swimsuit.png',
    points: 10
}
let hat = {
    season:'summer',
    url: '../game/img/hat.png',
    points: 10
}

let flipFlops = {
    season:'summer',
    url: '../game/img/flipflops.png',
    points: 10
}

let coat = {
    season:'autumn',
    url: '../game/img/darkcoat.png',
    points: 10
}

let umbrella = {
    season:'autumn',
    url: '../game/img/umbrella.png',
    points: 10
}

let wellingtons= {
    season:'autumn',
    url: '../game/img/wellingtons.png',
    points: 10
}
let dress = {
    season:'autumn',
    url: '../game/img/dress.png',
    points: 10
}

let raincoat = {
    season:'autumn',
    url: '../game/img/raincoat.png',
    points: 10
}

let jacket= {
    season:'autumn',
    url: '../game/img/jacket.png',
    points: 10
}

$ (function () {

    $('#startGame').click(function (e) {
        e.preventDefault();

        var $gameStatus = {
            currentSeason: gameboard.getRandomBoard(),
            player: createPlayer ($playerName, 0),
            timeToEnd: 61,
            items:[scarf,sunglasses,winterCap,gloves,hat,swimsuit,flipFlops,raincoat,umbrella,wellingtons,dress,jacket,coat],
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

        timer($gameStatus.timeToEnd);

        // create elements and remove it

        let totalGameTime = $gameStatus.timeToEnd;
        let interval = 2;

        let gameLoop = setInterval(function () {
            let $newItem = $('<div></div>');

            $newItem.css({
                'position': 'absolute',
                'top': `${Math.round(Math.random() * 600)}px`,
                'left': `${Math.round(Math.random() * 850)}px`,
                'width': '100px',
                'height': '100px',
                'background-image': 'url("img/umbrella.png")',
                'background-size': 'auto',
                'z-index': 100
            })

            $newItem.appendTo('body').delay(6000).queue(function() { $(this).remove();});

            console.log(totalGameTime)
            if ((totalGameTime -= interval) <= 0) {
                clearInterval(gameLoop)
            }

        }, interval*1000);

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


