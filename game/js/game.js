$ (document).ready (function () {

    function initGame ()
    {

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


