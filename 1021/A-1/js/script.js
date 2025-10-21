$(function(){
    $(".gnb").mouseenter(function(){
        $(".gnb > li > ul, .nav-bg").stop().slideDown();
    });
     $(".gnb").mouseleave(function(){
        $(".gnb > li > ul, .nav-bg").stop().slideUp();
     });


     var i = 0;
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".slides li").eq(i).css("top","100%").animate({"top":0},600);
		$(".slides li").eq(i-1).css("top",0).animate({"top":"-100%"},600);
	},3000);


    $(".tab_title h2").click(function(){
        var k = $(this).index();
        $('.tab_list .list').css('display','none');
        $('.tab_list .list').eq(k).css('display','block');
        $(".tab_menu h2").removeClass('on').eq(k).addClass('on');

    });

    $('table tr:first-child').click(function(){
        $('.popup').fadeIn();
    });
    $('.popup button').click(function(){
        $('.popup').fadeOut();
    });





});