$(function () {
    var win_width=$(window).width();

    
    // header 네비게이션 클릭시 이동
    $("header nav ul li:first-child a").click(function(e) {   
    e.preventDefault();
    $('.mobile_gnb').animate({
        right:'-100%'
    });
    if(win_width>480){
        $('html, body').animate({
            scrollTop : 850    
            }, 500);
    }else{
        $('html, body').animate({
            scrollTop : 800
        },500);
        $('#nav-icon4').removeClass('open');
        sw=0;
    }
        return false;
    });
    $("header nav ul li:nth-child(2) a").click(function(e) {   
    e.preventDefault();
    $('.mobile_gnb').animate({
        right:'-100%'
    });
    if(win_width>480){
        $('html, body').animate({
            scrollTop : 1700    
            }, 500);
    }else{
        $('html, body').animate({
            scrollTop : 1920
        }, 500);
        $('#nav-icon4').removeClass('open');
        sw=0;
    }          // 속도 500
        return false;
    });
    $("header nav ul li:nth-child(3)").click(function(e) {   
    e.preventDefault();
    $('.mobile_gnb').animate({
        right:'-100%'
    });
    if(win_width>480){
        $('html, body').animate({
            scrollTop : 2550    
            }, 500);
    }else{
        $('html, body').animate({
            scrollTop : 3000
        }, 500);
        $('#nav-icon4').removeClass('open');
        sw=0;
    }            // 속도 500
        return false;
    });
    $("header nav ul li:last-child").click(function(e) {   
    e.preventDefault();
    $('.mobile_gnb').animate({
        right:'-100%'
    });
    $('html, body').animate({
        scrollTop : 5300    // 0 까지 animation 이동합니다.
        }, 500);
        $('#nav-icon4').removeClass('open');
        sw=0;
        return false;
    });

    // pdf 파일열기
    $('.a2 .a2_box .a2_center ul li:first-child p').click(function(){
        window.open('PORTFOLIO.pdf');
    });
    $('.a2 .a2_box .a2_center ul li:last-child p').click(function(){
        window.open('sdh.pdf');
    });


    function initparticles() {
    hearts();
    }
        
    function hearts() {
    $.each($(".particletext.hearts"), function () {
        var heartcount = $(this).width() / 50 * 5;
        for (var i = 0; i <= heartcount; i++) {if (window.CP.shouldStopExecution(1)) break;
        var size = $.rnd(60, 120) / 10;
        $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + $.rnd(0, 30) / 10 + 's;"></span>');
        }window.CP.exitedLoop(1);
    });
    }
    
    jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
    };
    
    initparticles();



    if(win_width>480){
        // $('.top').hide();
        // top버튼 보이기 | 숨기기
        $(window).scroll(function() {
        if ($(this).scrollTop() > 3400) { // 넘으면 버튼이 보여짐니다.
            $('.top').fadeIn();
            } else {
            $('.top').hide();
        }
        });
        $(".top").click(function() {   
        $('html, body').animate({
            scrollTop : 0    // 0 까지 animation 이동합니다.
            }, 500);          // 속도 500
            return false;
        });
    }

    
    // $('.secondeye a').click(function(e){
    //     e.preventDefault();
    // });

    // pc pop
    $('.close').hide();
    $('.secondeye').hide();
    $('.secondeye_mobile').hide();
    // 세컨아이즈 버튼 클릭시 보이게 하기
    $('.a4 .a4_top ul li:first-child button ').click(function(){
        if(win_width>480){
            $('.secondeye').fadeIn();
        }else{
            $('.secondeye_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.secondeye').fadeOut();
        }else{
            $('.secondeye_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.piegon').hide();
    $('.piegon_mobile').hide();
    $('.a4 .a4_top ul li:nth-child(2) button ').click(function(){
        if(win_width>480){
            $('.piegon').fadeIn();
        }else{
            $('.piegon_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.piegon').fadeOut();
        }else{
            $('.piegon_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.asiana').hide();
    $('.asiana_mobile').hide();
    $('.a4 .a4_top ul li:nth-child(3) button ').click(function(){
        if(win_width>480){
            $('.asiana').fadeIn();
        }else{
            $('.asiana_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.asiana').fadeOut();
        }else{
            $('.asiana_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.mega').hide();
    $('.mega_mobile').hide();
    $('.a4 .a4_top ul li:last-child button ').click(function(){
        if(win_width>480){
            $('.mega').fadeIn();
        }else{
            $('.mega_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.mega').fadeOut();
        }else{
            $('.mega_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.trip').hide();
    $('.trip_mobile').hide();
    $('.a4 .a4_center > div > div > div:first-child').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.trip').fadeIn();
        }else{
            $('.trip_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.trip').fadeOut();
        }else{
            $('.trip_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.brochure').hide();
    $('.brochure_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(2)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.brochure').fadeIn();
        }else{
            $('.brochure_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.brochure').fadeOut();
        }else{
            $('.brochure_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.detailpage1').hide();
    $('.detailpage1_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(3)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.detailpage1').fadeIn();
        }else{
            $('.detailpage1_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.detailpage1').fadeOut();
        }else{
            $('.detailpage1_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.detailpage2').hide();
    $('.detailpage2_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(4)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.detailpage2').fadeIn();
        }else{
            $('.detailpage2_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.detailpage2').fadeOut();
        }else{
            $('.detailpage2_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.package').hide();
    $('.package_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(5)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.package').fadeIn();
        }else{
            $('.package_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.package').fadeOut();
        }else{
            $('.package_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.needly').hide();
    $('.needly_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(6)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.needly').fadeIn();
        }else{
            $('.needly_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.needly').fadeOut();
        }else{
            $('.needly_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.rico').hide();
    $('.rico_mobile').hide();
    $('.a4 .a4_center > div > div > div:nth-child(7)').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.rico').fadeIn();
        }else{
            $('.rico_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.rico').fadeOut();
        }else{
            $('.rico_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    $('.starbucks').hide();
    $('.starbucks_mobile').hide();
    $('.a4 .a4_center > div > div > div:last-child').click(function(e){
        e.preventDefault();
        if(win_width>480){
            $('.starbucks').fadeIn();
        }else{
            $('.starbucks_mobile').fadeIn();
        }
        $('.close').fadeIn();
        $('html,body').css('overflow-y','hidden');
    });
    $('.close').click(function(){
        if(win_width>480){
            $('.starbucks').fadeOut();
        }else{
            $('.starbucks_mobile').fadeOut();
        }
        $('.close').fadeOut();
        $('html,body').css('overflow-y','visible');
    });

    // 팝업창을 클릭하고 닫기 버튼을 누르지 않고 배경을 클릭하여도 팝업이 사라지게 하기
    $('.window_pop').click(function(e){
        if( !$('.window_pop > div').has(e.target).length ) $('.window_pop > div ').hide();
        $('html,body').css('overflow-y','visible');
        $('.close').fadeOut();
    });

    $('.mobile_pop').click(function(e){
        if( !$('.mobile_pop > div').has(e.target).length ) $('.mobile_pop > div ').hide();
        $('html,body').css('overflow-y','visible');
        $('.close').fadeOut();
    });

    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() > 2250) { // 넘으면 버튼이 보여짐니다.
        $('.a4 .a4_top ul li').addClass('active');
        } else {
        $('.a4 .a4_top ul li').removeClass('active');
        }
    });



    
    // 모바일
    var sw=0;
    // 햄버거 메뉴 버튼
    $('#nav-icon4').click(function(){
		if(sw==0){
            sw=1;
            $(this).addClass('open');
            $('.mobile_gnb').animate({
                right:0
            });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.mobile_gnb').animate({
                right:'-100%'
            });
        }
	});
});