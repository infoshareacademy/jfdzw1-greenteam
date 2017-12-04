$ (document).ready (function () {

    function initGame ()
{

}
});

var $playerName = '';

$(function () {
    $('button').click(function (e) {
        e.preventDefault();

        $playerName = ($('#customerName').val());

        console.log($playerName);

    });
});


$('#modalGame').on('shown.bs.modal', function (e) {
    alert($playerName);
})

