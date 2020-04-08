var cors = "https://cors-anywhere.herokuapp.com/";
var queryURL = "https://api-v3.igdb.com/games/?search=";
var gameName = "";
//queryURL = apiURL + key;

$('.btn').on("click", function() {
    gameName = $("#search-input").val().trim();
    console.log(gameName);

    var newURL = "https://api-v3.igdb.com/games/?search=" + gameName + "&fields=id,name,cover,platforms,genres,summary&limit=1";

    $.ajax({
        url: cors + newURL,//cors + queryURL + gameName,
        headers: {
            "user-key": "723e84ca4cb5bdd0d87cfb9d7e245b76"
        },
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response[0].name);
        console.log(response[0].summary);
        //console.log("Description: " + response.)
        //var gameText = $("#game").text(JSON.stringify(response));
        //console.log(gameText);
        //$("#game").append(gameText);
    });
});