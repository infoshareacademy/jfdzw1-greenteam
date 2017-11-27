
let firstA = $('#firtsAInNav');
let secondA = $('#secondAInNav');
let thirdA = $("#thirdAInNav");
let forthA = $("#fourthAInNav");
let scrollTop = $(document).scrollTop();
let heroHeaderOffsetTop = $('#hero-header')["0"].offsetTop;
let aboutAppOffsetTop = $('#about-app')["0"].offsetTop;
let descriptionOffsetTop = $('#description')["0"].offsetTop;
let teamOffsetTop = $('#team')["0"].offsetTop;
let newsletterOffsetTop = $('#newsletter')["0"].offsetTop;
let footerOffsetTop = $('#footer')["0"].offsetTop;
let portfoliosHide = $('.portfolio');



$(document).ready(() => {
  weatherWidget.defaultImage = "img/dribbbbleeeeee.jpg"
  weatherWidget.weatherWidgetObject = $('#containerForweatherWidget');
  weatherWidget.viewWeatherWidget();
})

$(window).scroll(() => {
  if ($(document).scrollTop() > 1400) {
    $('.return-button-to-start_hide').removeClass().addClass('return-button-to-start');
  } else {
    $('.return-button-to-start').removeClass().addClass('return-button-to-start_hide');
  }
})

$("#return-button").on("click", () => {
  $("body,html").animate({
    scrollTop: 0
  }, 1200);
})

$(window).scroll(() => {
  firstA = $('#firtsAInNav');
  secondA = $('#secondAInNav');
  thirdA = $("#thirdAInNav");
  forthA = $("#fourthAInNav");
  scrollTop = $(document).scrollTop();
  heroHeaderOffsetTop = $('#hero-header')["0"].offsetTop;
  aboutAppOffsetTop = $('#about-app')["0"].offsetTop;
  descriptionOffsetTop = $('#description')["0"].offsetTop;
  teamOffsetTop = $('#team')["0"].offsetTop;
  newsletterOffsetTop = $('#newsletter')["0"].offsetTop;
  footerOffsetTop = $('#footer')["0"].offsetTop;
  portfoliosHide = $('.portfolio');

  if (scrollTop > aboutAppOffsetTop - aboutAppOffsetTop / 2 && scrollTop < descriptionOffsetTop - descriptionOffsetTop / 5) {
    firstA.removeClass().addClass('position-on-page');
  } else {
    firstA.removeClass().addClass('link-menu');
  }

  if (scrollTop > descriptionOffsetTop - descriptionOffsetTop / 5 && scrollTop < teamOffsetTop - teamOffsetTop / 5) {
    secondA.removeClass().addClass('position-on-page');
  } else {
    secondA.removeClass().addClass('link-menu');
  }

  if (scrollTop > teamOffsetTop - teamOffsetTop / 5 && scrollTop < newsletterOffsetTop - newsletterOffsetTop / 10) {
    thirdA.removeClass().addClass('position-on-page');
  } else {
    thirdA.removeClass().addClass('link-menu');
  }

  if (scrollTop > newsletterOffsetTop - newsletterOffsetTop / 10 && scrollTop < footerOffsetTop - footerOffsetTop / 10) {
    forthA.removeClass().addClass('position-on-page');
  } else {
    forthA.removeClass().addClass('link-menu');
  }
  
  
  test(scrollTop, teamOffsetTop,newsletterOffsetTop, portfoliosHide);

})

function test (scrollTop, teamOffsetTop,newsletterOffsetTop, portfoliosHide) {



  if(scrollTop > teamOffsetTop - teamOffsetTop / 5 && scrollTop < newsletterOffsetTop - newsletterOffsetTop / 8){
    portfoliosHide.show( "fold", 2000 );
  }else{
    portfoliosHide.hide( "size", { direction: "up" }, "slow" );
  }
}


  
  
=======
 let firstA = $('#firtsAInNav');
 let secondA = $('#secondAInNav');
 let thirdA = $("#thirdAInNav");
 let forthA = $("#fourthAInNav");
 let firstAInFooter = $("#firtsAInFooter");
 let secondAInFooter = $("#secondAInFooter");
 let thirdAInFooter = $("#thirdAInFooter");
 let forthAInFooter = $("#forthAInFooter");


 $(document).ready(() => {
   weatherWidget.defaultImage = "img/dribbbbleeeeee.jpg"
   weatherWidget.weatherWidgetObject = $('#containerForweatherWidget');
   weatherWidget.viewWeatherWidget();
 })

 $(window).scroll(() => {
   if ($(document).scrollTop() > 1400) {
     $('.return-button-to-start_hide').removeClass().addClass('return-button-to-start');
   } else {
     $('.return-button-to-start').removeClass().addClass('return-button-to-start_hide');
   }
 })

 $("#return-button").on("click", () => {
   $("body,html").animate({
     scrollTop: 0
   }, 1200);
 })


 $(window).scroll(() => {

   let scrollTop = $(document).scrollTop();
   let heroHeaderOffsetTop = $('#hero-header')["0"].offsetTop;
   let aboutAppOffsetTop = $('#about-app')["0"].offsetTop;
   let descriptionOffsetTop = $('#description')["0"].offsetTop;
   let teamOffsetTop = $('#team')["0"].offsetTop;
   let newsletterOffsetTop = $('#newsletter')["0"].offsetTop;
   let footerOffsetTop = $('#footer')["0"].offsetTop;
   let portfoliosHide = $('.portfolio');

   if (scrollTop > aboutAppOffsetTop - aboutAppOffsetTop / 2 && scrollTop < descriptionOffsetTop - descriptionOffsetTop / 5) {
     firstA.removeClass().addClass('position-on-page');
   } else {
     firstA.removeClass().addClass('link-menu');
   }

   if (scrollTop > descriptionOffsetTop - descriptionOffsetTop / 5 && scrollTop < teamOffsetTop - teamOffsetTop / 5) {
     secondA.removeClass().addClass('position-on-page');
   } else {
     secondA.removeClass().addClass('link-menu');
   }

   if (scrollTop > teamOffsetTop - teamOffsetTop / 5 && scrollTop < newsletterOffsetTop - newsletterOffsetTop / 10) {
     thirdA.removeClass().addClass('position-on-page');
   } else {
     thirdA.removeClass().addClass('link-menu');
   }

   if (scrollTop > newsletterOffsetTop - newsletterOffsetTop / 10 && scrollTop < footerOffsetTop - footerOffsetTop / 10) {
     forthA.removeClass().addClass('position-on-page');
   } else {
     forthA.removeClass().addClass('link-menu');
   }



  if (scrollTop > teamOffsetTop - teamOffsetTop / 5 && scrollTop < newsletterOffsetTop - newsletterOffsetTop / 8) {
     $('.panel_group1').css("transform", "rotateY("+180+"deg)");
     $('.panel_group2').css("transform", "rotateY("+180+"deg)");
     $('.panel_group3').css("transform", "rotateY("+180+"deg)");
   } else {
     $('.panel_group1').css("transform", "rotateY("+360+"deg)");
     $('.panel_group2').css("transform", "rotateY("+360+"deg)");
     $('.panel_group3').css("transform", "rotateY("+360+"deg)");
   }

 })

 firstA.click(function () {
   firstA.blur();
   $('html, body').animate({
     scrollTop: $('#about-app')["0"].offsetTop
   }, 900)
 })

 secondA.click(function () {
   secondA.blur();
   $('html, body').animate({
     scrollTop: $('#description')["0"].offsetTop
   }, 900)
 })

 thirdA.click(function () {
   thirdA.blur();
   $('html, body').animate({
     scrollTop: $('#team')["0"].offsetTop
   }, 900)
 })

 forthA.click(function () {
   forthA.blur();
   $('html, body').animate({
     scrollTop: $('#newsletter')["0"].offsetTop
   }, 900)
 })

firstAInFooter.click(function () {
   forthA.blur();
   $('html, body').animate({
     scrollTop: $('#about-app')["0"].offsetTop
   }, 900)
 })

 secondAInFooter.click(function () {
   secondA.blur();
   $('html, body').animate({
     scrollTop: $('#description')["0"].offsetTop
   }, 900)
 })

 thirdAInFooter.click(function () {
   thirdA.blur();
   $('html, body').animate({
     scrollTop: $('#team')["0"].offsetTop
   }, 900)
 })

 forthAInFooter.click(function () {
   forthA.blur();
   $('html, body').animate({
     scrollTop: $('#newsletter')["0"].offsetTop
   }, 900)
 })


/*preloader*/
 let preoladeEl = document.querySelector('#preloader');


 window.addEventListener('load', function ()
 {
     preoladeEl.classList.add('preloader-hiding');
     preoladeEl.addEventListener('transitionend', function ()
     {
         this.classList.add('preloader-hidden');
         this.classList.remove('preloader-hiding');
     });
 });



