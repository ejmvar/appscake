
$(function() {
    $("[name=toggler]").click(function(){
        $('.toHide').hide();
        $("#blk-"+$(this).val()).show('slow');
    });
});


$(document).ready(function () {
    $('.box').hide();
    $('#simple').show();
    $('#select-required').change(function () {
        $('.box').hide();
        $('#'+$(this).val()).show();
    });
});



$(function() {
    var options = {
        min: 1,
        max: 8,
        values: [1],
        slide: function(event, ui) {
            $("#amount").val(ui.value);
        }
    }, min;

    $("#slider-range").slider(options);
    min = $("#slider-range").slider("values", 0);

    $("#amount").val("" + min );

});



