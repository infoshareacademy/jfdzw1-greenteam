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

        this.weatherWidgetObject.empty ();

        let tempWidget = $ ("<div id='weatherWidget'><img src='" + this.defaultImage + "'/><p></p></div>");


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (function (position) {

                let lat = Math.floor (position.coords.latitude * 100) / 100;
                let lon = Math.floor (position.coords.longitude * 100) / 100;

                $.ajax ({
                    type: "GET",
                    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=544acc97ad41e1c817efb0487429e01b",
                    dataType: 'json'
                }).done (function (data) {
                    console.log (data);
                    let temp = Math.floor ((data.main.temp - 273.15) * 100 / 100);
                    tempWidget.find ("p").html ("Temp: " + temp + "&#176; C");

                    switch (data.weather[0].main) {
                        case "Clear":
                            tempWidget.find ("img").attr ("src", weatherIcons[0]);
                            break;
                        case "Cloud":
                            tempWidget.find ("img").attr ("src", weatherIcons[1]);
                            break;
                        case "Clouds":
                            tempWidget.find ("img").attr ("src", weatherIcons[1]);
                            break;
                        case "Sand":
                            tempWidget.find ("img").attr ("src", weatherIcons[2]);
                            break;
                        case "Mist":
                            tempWidget.find ("img").attr ("src", weatherIcons[3]);
                            break;
                        case "Haze":
                            tempWidget.find ("img").attr ("src", weatherIcons[3]);
                            break;
                        case "Fog":
                            tempWidget.find ("img").attr ("src", weatherIcons[3]);
                            break;
                        case "Rain":
                            tempWidget.find ("img").attr ("src", weatherIcons[4]);
                            break;
                        case "Smog":
                            tempWidget.find ("img").attr ("src", weatherIcons[5]);
                            break;
                        case "Snow":
                            tempWidget.find ("img").attr ("src", weatherIcons[6]);
                            break;
                        case "Thunderstorm":
                            tempWidget.find ("img").attr ("src", weatherIcons[7]);
                            break;
                    }

                });


            });
        }


        this.weatherWidgetObject.append (tempWidget);

    }


}
