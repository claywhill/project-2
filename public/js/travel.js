$(document).ready(function () {
        $(".submitTravel").on("click", function (event) {
          event.preventDefault();
          var search = $("#location").val().trim();
          convert(search)
        });

        function displayAttractions(lat, long) {
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&currency=USD&limit=30&distance=5&lang=en_US&"+ long + "&" + lat,
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
              "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
            }
          }
          $.ajax(settings).done(function (response) {
            console.log(response);
            var attractionDiv = $(".attractions")
                for (var i = 0; i < 5; i++) {
                  
                  var detailsDiv = $("<div id='detailsDiv'>")
                  // var attractionImg = $("<img>").addClass("attraction-img");
                  // attractionImg.attr("src", response.data[i].photo.images.thumbnail.url);
                  var name = $("<p>").text(response.data[i].name);
                  detailsDiv.append(name);
                  // detailsDiv.append(attractionImg);
                  attractionDiv.append(detailsDiv);
                };
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
            };  $.ajax(settings).done(function (response) {
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



        function displayMeetup(lat, long) {

          var settings = {
            "url": "https://api.meetup.com/find/locations/?&sign=true&photo-host=public&" + long + "&" + lat,
            "method": "GET",
            "timeout": 0,
          };
          $.ajax(settings).done(function (response) {
            console.log(response);
              
            var meetupDiv = $(".meetups")
            for (var i = 0; i < 5; i++) {
              
              var meetupCategoryDiv = $("<div id='meetupCategoryDiv'>")
              
              var meetupDetailsDiv = $("<div id='meetupDetailsDiv'>")
              // var restaurantImg = $("<img>").addClass("attraction-img");
              // restaurantImg.attr("src", response.data[i].photo.images.small.url);
              var name = $("<p>").text(response.data[i].name);
              var address = $("<p>").text(response.data[i].address);
        
              meetupDiv.append(meetupCategoryDiv);
                  meetupCategoryDiv.append(name);
                  meetupCategoryDiv.append(meetupDetailsDiv);
                        meetupDetailsDiv.append(address);
                         meetupDetailsDiv.append(name);
                        // restDetailsDiv.append(attractionImg);
                  }
        });
      };

      function convert(search) {
      var mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + search + ".json?country=us&access_token=pk.eyJ1Ijoic2tpcDExMTMiLCJhIjoiY2s4MjR3Y3p3MHdybTNlcmwxdGlia2Q3MCJ9.LueUgl63OO8XUk6Jh3r46Q"
      $.ajax({
        url: mapboxURL,
        method: "GET"
      }).then(function (calling) {
        var lat = calling.features[0].center[1];
        var long = calling.features[0].center[0];
        displayAttractions("latitude=" + lat, "longitude=" + long);
        displayRestaurants("latitude=" + lat, "longitude=" + long);
        displayMeetup("lat=" + lat, "ion=" + long);
      })
    }
  });
  
  