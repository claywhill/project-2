$(document).ready(function () {

  $(".submitTravel").on("click", function (event) {
    event.preventDefault();
    var search = $("#location").val().trim();
    convert(search)
  });

  function displayAttractions(lat, long) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=50&distance=50&lang=en_US&" + long + "&" + lat,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);

      var attractionDiv = $(".attractions")
      for (var i = 0; i < 20; i++) {

        var detailsDiv = $("<div>")
        var name = $("<h5>").text(response.data[i].name);
        var ranking = $("<p>").text(response.data[i].ranking);
        var address = $("<p>").text(response.data[i].address);

        attractionDiv.append(name, address, ranking);
        attractionDiv.append(detailsDiv);

      };
    });
  };

  function displayRestaurants(lat, long) {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=50&currency=USD&distance=50&lunit=km&lang=en_US&" + long + "&" + lat,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
      }
    }; $.ajax(settings).done(function (response) {
      console.log(response);

      var restaurantDiv = $(".restaurants")

      for (var i = 0; i < 20; i++) {

        var restDetailsDiv = $("<div>")
        var name = $("<h5>").text(response.data[i].name);
        var address = $("<p>").text(response.data[i].address);
        restDetailsDiv.append(name, address);
        restaurantDiv.append(restDetailsDiv);
      }
    });
  };


  function convert(search) {
    var mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + search + ".json?country=us&access_token=pk.eyJ1Ijoic2tpcDExMTMiLCJhIjoiY2s4MjR3Y3p3MHdybTNlcmwxdGlia2Q3MCJ9.LueUgl63OO8XUk6Jh3r46Q"
    $.ajax({
      url: mapboxURL,
      method: "GET"
    }).then(function (calling) {
      var lat = calling.features[0].center[1];
      var long = calling.features[0].center[0];
      displayAttractions("latitude=" + lat, "longitude=" + long);
      displayRestaurants("latitude=" + lat, "longitude=" + long);
    })
  }
});

