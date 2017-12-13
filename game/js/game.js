let scarf= {
    season:'winter',
    url: 'img/Scarf.png',
    points: 10
}

let winterCap= {
    season:'winter',
    url: 'img/winter cap.png',
    points: 10
}

let gloves = {
    season:'winter',
    url: 'img/gloves.png',
    points: 10
}

let sunglasses = {
    season:'summer',
    url: 'img/sunglasses.png',
    points: 10
}

let swimsuit = {
    season:'summer',
    url: 'img/swimsuit.png',
    points: 10
}
let hat = {
    season:'summer',
    url: 'img/hat.png',
    points: 10
}

let flipFlops = {
    season:'summer',
    url: 'img/flipflops.png',
    points: 10
}

let coat = {
    season:'autumn',
    url: 'img/darkcoat.png',
    points: 10
}

let umbrella = {
    season:'autumn',
    url: 'img/umbrella.png',
    points: 10
}

let wellingtons= {
    season:'autumn',
    url: 'img/wellingtons.png',
    points: 10
}

let dress = {
    season:'spring',
    url: 'img/dress.png',
    points: 10
}

let raincoat = {
    season:'spring',
    url: 'img/raincoat.png',
    points: 10
}

let jacket= {
    season:'spring',
    url: 'img/jacket.png',
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

                return $gameStatus.items[randomIntem];
            }

        };

        // hide buttons
        $('.button').addClass("hidden");

        // change Welcome label
        $('#player').empty().text('Player name');

        // show currnet score and timer
        $('#playerScore').removeClass('hidden').addClass('show');

        updateScore ();

        $('#timer').removeClass('hidden').addClass('show');

        // start timer
        timer($gameStatus.timeToEnd);

        // show random gameboard
        $('body').addClass($gameStatus.currentSeason.className);

        function updateScore () {
            $('#currentScore').html($gameStatus.player.score);
        }

        // create new random item
        function createNewGameItem (randomItem) {

            return (
                $('<div></div>').addClass('gameItem').css({
                    'top': `${Math.round(Math.random() * 550)}px`,
                    'left': `${Math.round(Math.random() * 800)}px`,
                    'background-image': `url("${randomItem.url}")`,
                }).addClass(`${randomItem.season}`)); // do usunięcia
        };

        // show item and hide it with dealay
        function showAndHideElement (newItem) {
            newItem.appendTo('body').delay(12000).queue(function() { $(this).remove();})
        };

        // count Points on click
        function countPointsOnClick (newItem, randomItem) {
            newItem.click(function (e) {
                $(this).hide();

                if (randomItem.season === $gameStatus.currentSeason.season) {
                    $gameStatus.player.score += randomItem.points;
                    updateScore ();
                }
                else {
                    $gameStatus.player.score -= randomItem.points;
                    updateScore ();
                }
            });
        }

        let totalGameTime = $gameStatus.timeToEnd;
        let interval = 1;

        // create new item by 1000ms, show and hide it, stop loop when gameTime is finished
        let gameLoop = setInterval(function () {

            let randomItem = $gameStatus.getRandomItem();
            let newItem = createNewGameItem(randomItem);

            showAndHideElement(newItem);
            countPointsOnClick(newItem, randomItem);

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
    $('#currentPlayer').html($playerName);

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


