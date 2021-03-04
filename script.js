$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }

    });
    // toggle menu/navabarscript
    $('.checkbtn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.checkbtn i').toggleClass("active");
    });
});