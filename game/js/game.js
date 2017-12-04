$ (document).ready (function () {

    function initGame ()
{

}
});

var $playerName = '';

// save player name form newsletter form
$(function () {
    $('button').click(function (e) {
        e.preventDefault();

        $playerName = ($('#customerName').val());

    });
});


$('#modalGame').on('shown.bs.modal', function (e) {
    e.preventDefault();

    console.log($playerName);

    $('<i>TEST</i>').appendTo($('#currentPlayer'));

});

