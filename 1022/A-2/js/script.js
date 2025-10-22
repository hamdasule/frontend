$(function(){
    $('.gnb').mouseenter(function(){
        $('.gnb > li > ul, .nav_bg').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.gnb > li > ul, .nav_bg').stop().slideUp();
    });

    var i =0;
    setInterval(function(){
        i++;
        if(i==3){
            i = 0;
        }
        $('.slides li').eq(i).css('left','100%').animate({'left':0},600);
        $('.slides li').eq(i-1).css('left','0').animate({'left':'-100%'},600);
           
    },3000);

    $('.contents .notice table tr:nth-child(1)').click(function(){
        $('#pop').stop().show();
    });
    $('#pop .popup button').click(function(){
        $('#pop').stop().hide();
    });

    // $('.contents .notice table tr:first-child').click(function(){
    //     $('#pop').fadeIn();
    // });
    // $('#pop .popup button').click(function(){
    //     $('#pop').fadeOut();
    // });


});