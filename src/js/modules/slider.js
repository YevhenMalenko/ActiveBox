import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'slider__dots',
        autoplay: true,
        autoplaySpeed: 6000,
    });
    
});   