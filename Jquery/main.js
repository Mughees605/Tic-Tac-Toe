$(document).ready(function () {

    $('.onsale').on('click','button', function () {
        var price = $(this).closest('.onsale').data('discount');
        var app = $("<button class='vacation'> from $"+price+" </button>");
        $(this).closest('.onsale').append(app);
        $(this).remove();
    })
$('#filters').on('click','.onsale-filter',function(){

$('.summer').filter('.onsale').removeClass('bright').addClass('highlight');

})

})