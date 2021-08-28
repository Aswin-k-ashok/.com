$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing Animation
    var typed = new Typed(".typing",{
        strings:["websites","web apps","softwares","pancakes","and other things."],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });

    // owl carousel script

    $('.carousel').owlCarousel({
         margin: 20,
         loop: true,
         autoplayTimeOut:2000,
         autoplayHoverPause:true,
         responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwXeVmwLhtq1AKnCptOBsgljiIrFCW3XMeCAPdbWhsMvaRy030T8QE8cPXO14Bh_jJnRA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Hey there,Thank you for reaching out!…")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
        }
    })
})
