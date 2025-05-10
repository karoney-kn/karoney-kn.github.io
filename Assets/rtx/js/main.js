$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times'); //this will change to cancel sign when in that size
        $('header').toggleClass('toggle');
    });


    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times'); 
        $('header').removeClass('toggle');

    });

    

    //smooth scrolling
    $('a[href *= "#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'

        );

    });

});