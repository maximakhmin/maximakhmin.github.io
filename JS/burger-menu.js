$(document).ready(function() {
    $('.burger-menu-span').click(function() {
        $('.burger-menu-span').toggleClass('open-menu');
        $('.burger-menu').toggleClass('open-menu');
    });

    $('.menu-buttons').click(function() {
        $('.burger-menu-span').toggleClass('open-menu', false);
        $('.burger-menu').toggleClass('open-menu', false);
    });
});

