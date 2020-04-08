var cors = "https://cors-anywhere.herokuapp.com/";
var gameQueryURL = "https://api-v3.igdb.com/games/?search=";
var genreQueryURL = "https://api-v3.igdb.com/genres/?search=";
var platformQueryURL = "https://api-v3.igdb.com/platform/?search=";
var gameName = "";

//queryURL = apiURL + key;

$('.btn').on("click", function() {
    gameName = $("#search-input").val().trim();
    console.log(gameName);

    gameQueryURL = "https://api-v3.igdb.com/games/?search=" + gameName + "&fields=id,name,cover,platforms,genres,summary&limit=1";

    $.ajax({
        url: cors + gameQueryURL,//cors + queryURL + gameName,
        headers: {
            "user-key": "723e84ca4cb5bdd0d87cfb9d7e245b76"
        },
        method: "GET"
    }).then(function(gameResponse) {
        console.log(gameResponse);
        console.log(gameResponse[0].name);
        console.log(gameResponse[0].summary);

        //console.log("Description: " + response.)
        //var gameText = $("#game").text(JSON.stringify(response));
        //console.log(gameText);
        //$("#game").append(gameText);

        //Start of Yna Code//
        var gameTitle=$("<h4>").text(gameResponse[0].name);
        $("#title").empty();
        $("#title").append(gameTitle);
    });
});