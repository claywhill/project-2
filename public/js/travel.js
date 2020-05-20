$(document).ready({



  // Click events for the edit and delete buttons
  $(".submitTravel").on("click", function (event) {
    event.preventDefault();

 var search = $("#location").val().trim();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor1.p.rapidapi.com/hotels/list?" + search + "offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&nights=2&location_id=293919&adults=1&rooms=1",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
      }
    }
    $.ajax(settings).then(function (response) {
      console.log(response);

      for (var j = 0; j < 5; j++) {
        console.log(response);

        // // Transfer content to HTML
        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".temp").text("Temperature (F) " + response.main.temp);

        // // Log the data in the console as well
        // console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.main.humidity);
        // console.log("Temperature (F): " + response.main.temp);


      };
    });

}

  // // Click events for the edit and delete buttons
  // $(".get-attractions").on("click", function (event) {
  //   event.preventDefault();

  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://tripadvisor1.p.rapidapi.com/attractions/get-details?currency=USD&lang=en_US&location_id=1451754",
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
  //       "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
  //     }
  //   }

  //   $.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });



//   for (var j = 0; j < 5; j++) {
//     var brewDiv = $("<div id='brewId'>")
//     var breweryName = $("<p>").text(result[j].name);
//     var street = $("<p>").text(result[j].street);
//     var brewery_type = $("<p>").text("Type: " + result[j].brewery_type);
//     var phone = $("<p>").text(result[j].phone);
//     var website_url = $("<a>").text(result[j].website_url);
//     website_url.attr("href", result[j].website_url);
//     brewImage = $("<img src=https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/10/09/USATODAY/usatsports/247WallSt.com-247WS-497973-beer-cover-photo-1.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp>").addClass("brewImage");
//     brewDiv.append(brewImage);
//     brewDiv.append(breweryName);
//     brewDiv.append(street);
//     brewDiv.append(brewery_type);
//     brewDiv.append(phone);
//     brewDiv.append(website_url);
//     $("#brews-here").prepend(brewDiv);


// });
  // });




//   // Click events for the edit and delete buttons
//   $(".get-ideas").on("click", function (event) {
//     event.preventDefault();

//     var queryURL = "http://bucketlist.org/api/"

//       // Performing our AJAX GET request
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {


//       });
//   });


// function convert(search) {
//     var mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + citySearch + ".json?country=us&access_token=pk.eyJ1Ijoic2tpcDExMTMiLCJhIjoiY2s4MjR3Y3p3MHdybTNlcmwxdGlia2Q3MCJ9.LueUgl63OO8XUk6Jh3r46Q"
//     $.ajax({
//         url: mapboxURL,
//         method: "GET"
//     }).then(function (calling) {
//         var lat = calling.features[0].center[1];
//         var long = calling.features[0].center[0];
//         displayTrails("lat=" + lat, "lon=" + long);
//     })
// }

// $("#add-search").on("click", function (event) {
//     event.preventDefault();
//     $("#img-here").empty();
//     $("#brews-here").empty();
//     var citySearch = $("#input-search").val().trim();
//     displayBrewery(citySearch);
//     convert(citySearch);
// });

// });
