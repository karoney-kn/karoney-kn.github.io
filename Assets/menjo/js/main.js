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

// Simple theme toggle
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.theme-btn.active').classList.remove('active');
        this.classList.add('active');
        
        if (this.textContent.trim() === 'Dark') {
            document.documentElement.style.setProperty('--c-bg', 'hsl(0, 0%, 5%)');
            document.documentElement.style.setProperty('--c-text', 'hsl(0, 0%, 95%)');
        } else {
            document.documentElement.style.setProperty('--c-bg', 'hsl(0, 0%, 90%)');
            document.documentElement.style.setProperty('--c-text', 'hsl(0, 0%, 10%)');
        }
    });
});