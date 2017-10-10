let weatherWidget = {

    defaultImage: "",
    weatherWidgetObject: {},
    viewWeatherWidget: function () {

        let weatherIcons = [
        "plug-ins/current-weather/img/clear.png",
        "plug-ins/current-weather/img/cloud.png",
        "plug-ins/current-weather/img/dust.png",
        "plug-ins/current-weather/img/mist.png",
        "plug-ins/current-weather/img/rain.png",
        "plug-ins/current-weather/img/smog.png",
        "plug-ins/current-weather/img/snow.png",
        "plug-ins/current-weather/img/thunderstorm.png"
    ];

        this.weatherWidgetObject.empty();

        let tempWidget = $("<div id='weatherWidget'><img src='" + this.defaultImage + "'/><p></p></div>");


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                let lat = Math.floor(position.coords.latitude * 100) / 100;
                let lon = Math.floor(position.coords.longitude * 100) / 100;

                $.ajax({
                    type: "GET",
                    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=544acc97ad41e1c817efb0487429e01b",
                    dataType: 'json'
                }).done(function (data) {
                    console.log(data);
                    var temp = Math.floor((data.main.temp - 273.15) * 100 / 100);
                    tempWidget.find("p").html("Temp: " + temp + "&#176; C");

                    if (data.weather[0].main == "Clear") {
                        tempWidget.find("img").attr("src", weatherIcons[0]);
                    } else if (data.weather[0].main == "Cloud") {
                        tempWidget.find("img").attr("src", weatherIcons[1]);
                    } else if (data.weather[0].main == "Dust" && data.weather[0].main == "Sand") {
                        tempWidget.find("img").attr("src", weatherIcons[2]);
                    } else if (data.weather[0].main == "Mist" && data.weather[0].main == "Haze" && data.weather[0].main == "Fog") {
                        tempWidget.find("img").attr("src", weatherIcons[3]);
                    } else if (data.weather[0].main == "Rain") {
                        tempWidget.find("img").attr("src", weatherIcons[4]);
                    } else if (data.weather[0].main == "Smog") {
                        tempWidget.find("img").attr("src", weatherIcons[5]);
                    } else if (data.weather[0].main == "Snow") {
                        tempWidget.find("img").attr("src", weatherIcons[6]);
                    } else if (data.weather[0].main == "Thunderstorm") {
                        tempWidget.find("img").attr("src", weatherIcons[7]);
                    }

                });


            });
        }


        this.weatherWidgetObject.append(tempWidget);

    }


}

