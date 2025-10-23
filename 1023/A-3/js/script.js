$(function(){
        $('.gnb > li').mouseenter(function(){
            $(this).children('ul').stop().slideDown(270);
        });
        $('.gnb > li').mouseleave(function(){
            $(this).children('ul').stop().slideUp(270);
        });


});