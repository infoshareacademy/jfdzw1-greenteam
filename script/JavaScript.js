
$(document).ready(function()
                 {
    weatherWidget.defaultImage = "img/dribbbbleeeeee.jpg"
    weatherWidget.weatherWidgetObject = $('#containerForweatherWidget');
    weatherWidget.viewWeatherWidget();
})
$(window).scroll(()=>{
  if($(document).scrollTop() >1400){
    $('.return-button-to-start_hide').removeClass().addClass('return-button-to-start');
  }else{
    $('.return-button-to-start').removeClass().addClass('return-button-to-start_hide');
  }
})
$("#return-button").on("click",function(){
  $("body,html").animate({ scrollTop: 0 }, 1200);
})




