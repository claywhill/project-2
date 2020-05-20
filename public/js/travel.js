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
            "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c",
          }
        };
        $.ajax(settings).done(function (response) {
          console.log(response);

          var attractionDiv = $(".attractions")
          for (var i = 0; i < 5; i++) {
          var categoryDiv = $("<div id='categoryDiv'>")
          var detailsDiv = $("<div id='detailsDiv'>")
          // var attractionImg = $("<img>").addClass("attraction-img");
          // attractionImg.attr("src", response.data[i].photo.images.small.url);
          var name = $("<p>").text(response.data[i].name);
          var caption = $("<p>").text(response.data[i].photo.caption);
          var address = $("<p>").text(response.data[i].address);
          categoryDiv.append(name);
          categoryDiv.append(detailsDiv);
          detailsDiv.append(caption);
          detailsDiv.append(address);
          // detailsDiv.append(attractionImg);
          attractionDiv.append(categoryDiv);
        }
      });
};

    function displayRestaurants(lat, long) {

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&" + long + "&" + lat,
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);

        var restaurantDiv = $(".restaurants")
          for (var i = 0; i < 5; i++) {
            
            var restCategoryDiv = $("<div id='restCategoryDiv'>")
            
            var restDetailsDiv = $("<div id='restDetailsDiv'>")
            // var restaurantImg = $("<img>").addClass("attraction-img");
            // restaurantImg.attr("src", response.data[i].photo.images.small.url);
            var name = $("<p>").text(response.data[i].name);
            var address = $("<p>").text(response.data[i].address);
      
            restaurantDiv.append(restCategoryDiv);
                restCategoryDiv.append(name);
                  restCategoryDiv.append(restDetailsDiv);
                      restDetailsDiv.append(address);
                      restDetailsDiv.append(name);
                      // restDetailsDiv.append(attractionImg);
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
    });
  };
}); // end document