$(function(){
    $('.header-menu').on('click', 'li:not(.selected-item)', function(){
        $('.header-menu .selected-item').removeClass('selected-item');
        $(this).addClass('selected-item')
    });


    console && console.log('%cHi, curious man!', 'color: orange; font-size: 4em; border: 2px solid #8CC63F');
});