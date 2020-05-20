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
          "url": "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=30&distance=5&lang=en_US&"+ long + "&" + lat,
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);

          var attractionDiv = $(".attractions")
              for (var i = 0; i < 5; i++) {
                var detailsDiv = $("<div id='detailsDiv'>")
                var attractionImg = $("<img>").addClass("attraction-img");
                attractionImg.attr("src", response.data[i].photo.images.thumbnail.url);
                var name = $("<p>").text(response.data[i].name);
                detailsDiv.append(name);
                detailsDiv.append(attractionImg);
                attractionDiv.append(detailsDiv);
              };
        });
      };

      function displayAttractions(lat, long) {

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=30&distance=5&lang=en_US&"+ long + "&" + lat,
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);

          var attractionDiv = $(".attractions")
              for (var i = 0; i < 5; i++) {
                
                var detailsDiv = $("<div id='detailsDiv'>")
                // var attractionImg = $("<img>").addClass("attraction-img");
                // attractionImg.attr("src", response.data[i].photo.images.thumbnail.url);
                var name = $("<p>").text(response.data[i].name);
                detailsDiv.append(name);
                // detailsDiv.append(attractionImg);
                attractionDiv.append(detailsDiv);
              };
        });
      };

      function displayHotels(lat, long) {

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://tripadvisor1.p.rapidapi.com/locations/search?"+ long + "&" + lat + "&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=pattaya",
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
          }
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response);
 
          var hotelDiv = $(".hotels")
              for (var i = 0; i < 5; i++) {
                var hotelDetailsDiv = $("<div id='hotelDetailsDiv'>")
                // var hotelImg = $("<img>").addClass("hotel-img");
                // hotelImg.attr("src", response.data[i].photo.result_object.photo.images.thumbnail.url);
                var name = $("<p>").text(response.data[i].restult_object.ancestors);
                hotelDetailsDiv.append(name);
                // hotelDetailsDiv.append(attractionImg);
                hotelDiv.append(hotelDetailsDiv);
              };
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
      displayHotels("latitude=" + lat, "longitude=" + long);
      displayMarker("minLat=" + lat, "minLon=" + long);
    })
  }

});