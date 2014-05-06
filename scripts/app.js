$(function(){

    Date.prototype.hoursDifference = function(other){
        return Math.floor((Math.abs(this - other))/(1000*60*60));
    }

    $.fn.animateNumbers = function(o){
        return $.each(this, function(){
            var $element = $(this);
            $({countNum: Number(o.from) || 0}).animate({countNum: o.to}, {
                duration: o.duration || 600,
                easing: o.easing || 'linear',
                step: function(num, animation) {
                    $element.html(Math.floor(this.countNum));
                },
                complete: function() {
                    $element.html(o.to);
                }
            });
        });
    };

    $.fn.scrollTo = function(duration, easing, complete){
        return $.each(this, function(){
            $('html, body').animate({ scrollTop: $(this).offset().top }, duration, easing, complete);
        })
    };

    $.getURLParameter = function(name){
        return decodeURIComponent(
            (location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1] || ""
        );
    };

    $.wait = function(delay) {
        var deferred = $.Deferred();
        setTimeout(deferred.resolve, delay);
        return deferred;
    };

    $(document).on('click', '.btn-group button:not(.active)', function(){
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

    $(document).one('appear', '[data-animate-to]', function(){
        $.wait(20).then(function(){
            $('[data-animate-to]').each(function(){
                $(this).animateNumbers({ to: $(this).data('animate-to'), duration: $(this).data('animate-duration') });
            });
        });
    });



    $('.header li a').on('click', function(){
        $('#menu-toggle').trigger('click');
    });

    $('#menu-toggle').on('click', function(){
        $('.header ul').toggleClass('zero-height-xs');
    });

    $('body').on('activate.bs.scrollspy', function(e){
        $('.header').toggleClass('thin-header', $('a', e.target).attr('href') !== '#landing-page')
    });





    function updateSkills() {
        $('#skills-icons-list').html($('#logo-slider ul').html()).find('li a').removeAttr('href target');
        if ("text" === $.getURLParameter('skills')) {
            $('#textSkills').trigger('click');
        }
    }

    function navigate() {
        var section = $.getURLParameter('section');
        if (section) {
            $('#' + section).scrollTo();
        }
    }

    function calculateSkillsHours(){
        var factor = 5/7 * 8/24,
            workingHours = new Date(2011,3,01).hoursDifference(new Date()) * factor,
            learnHours = new Date(2005,9,01).hoursDifference(new Date(2010,9,01)) * factor + Math.round(workingHours / 6);

        $('#hoursCount').attr('data-animate-to', Math.round(workingHours));
        $('#learningCount').attr('data-animate-to', Math.round(learnHours));
    }



    console && console.log('%cHi, curious man!', 'color: orange; font-size: 4em; border: 2px solid #8CC63F');
    $('[data-animate-to]').appear();
    calculateSkillsHours();
    updateSkills();
    navigate();

});