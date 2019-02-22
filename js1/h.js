window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
$('#myBtn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
 });

  $("#serve1,#serve2,#serve3,#service").click(function() {
    $('html, body').animate({
        scrollTop: $("#myservice").offset().top
    }, 2000);
});

  $("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#us").offset().top
    }, 2000);
});
  $("#upload").click(function() {
    $('html, body').animate({
        scrollTop: $("#details").offset().top
    }, 2000);
});
   $("#service1,#service2,#service3,#service4,#service5,#service6,#service7,#service8,#service9,#service10,#service11").click(function() {
    $('html, body').animate({
        scrollTop: $("#details").offset().top
    }, 2000);
});
   $(document).ready(function(){
  $(window).scroll(function() {
    if (($(document).scrollTop() > 30)) {
       $("#arc1").stop().animate({left: '-1500px'},"slow");
    } else {
       $("#arc1").stop().animate({left: '0px'},"slow");
    }
  });
});


 

   $(document).ready(function(){
  $(window).scroll(function() {
    if (($(document).scrollTop() > 30) && ($(window).scrollTop() + $(window).height() != $(document).height())) {
       $("#arc2").stop().animate({right: '-1500px'},"slow");
    } else {
       $("#arc2").stop().animate({right: '0px'},"slow");
    }
  });
});

$("#example").typer({
            strings: [
                "We Inspire you",
                "We Help You Improve Your  Performance",
                "We develop your career skills",
                "We take you to greater heights",
                "We help you to get placed",
                "Transperancy and faith are our stregths",
                "Build your career with us"
            ]
        });
