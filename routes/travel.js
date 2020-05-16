function tripAdvisor(queryCategory) {
        
    var getTripInfo = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&nights=2&location_id=293919&adults=1&rooms=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "781fdf3fcemsh0941f7659dcee8bp1ef9acjsn031795ec154c"
        }
    }

    $.ajax(tripAdvisor).done(function (response) {
        console.log(response);

    })
};