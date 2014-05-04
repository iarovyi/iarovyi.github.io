$(function(){

    $.fn.scrollTo = function(duration, easing, complete){
        return $.each(this, function(){
            $('html, body').animate({ scrollTop: $(this).offset().top }, duration, easing, complete);
        })
    };

    $(document).on('click', '.btn-group button', function(){
        $(this).closest('.btn-group').find('button').toggleClass('active')
    });

    $(document).on('click', 'a[href^=#]', function(e){
        e.preventDefault();
        $($(this).attr('href')).scrollTo(600, 'swing');
    });

    $(document).on('click', '[data-hide]', function(){
        $($(this).attr('data-hide')).hide();
    });

    $(document).on('click', '[data-fadeIn]', function(){
        $($(this).attr('data-fadeIn')).fadeIn();
    });



    $('#skills-icons-list').html($('#logo-slider ul').html());

    $('.header li a').on('click', function(){
        $('#menu-toggle').trigger('click');
    });

    $('#menu-toggle').on('click', function(){
        $('.header ul').toggleClass('zero-height-xs');
    });

    $('body').on('activate.bs.scrollspy', function(e){
        $('.header').toggleClass('thin-header', $('a', e.target).attr('href') !== '#landing-page')
    });

    console && console.log('%cHi, curious man!', 'color: orange; font-size: 4em; border: 2px solid #8CC63F');
});