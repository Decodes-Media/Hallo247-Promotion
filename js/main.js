$(document).ready(function() {
    $("#carousel-1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        touchDrag: true,
        smartSpeed: 1500
    });
    $("#carousel-2").owlCarousel({
        loop: true,
        center: true,
        // margin: 30,
        nav: true,
        // items: 3,
        touchDrag: true,
        smartSpeed: 1500,
        responsive: {
            400: {
                items: 2,
                margin: 10
            },
            768: {
                items: 3,
                margin: 10
            },
            1024: {
                items: 3,
                margin: 30
            },
            1440: {
                items: 3,
                margin: 30
            }
        }
    });
    $("#carousel-3").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        responsive: {
            300: {
                items: 3,
                margin: 10
            },
            768: {
                items: 6,
                margin: 10
            },
            1024: {
                items: 7,
                margin: 5
            },
            1366: {
                items: 8,
                margin: 5
            }
        }
    });
});

var btn = $('#button');

$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show').fadeIn();
        } else {
            btn.removeClass('show').fadeOut();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '800');
    });

    AOS.init({
        duration: 1200,
    });

});
jQuery(document).ready(function($) {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();

        $('.process-model li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });

});

let mainNav = document.getElementById('js-menu');
let navBarToggler = document.getElementById('toggler-js-menu');

navBarToggler.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

document.getElementsByClassName('.single').addEventListener('click', function() {
    mainNav.removeClass('active')
})