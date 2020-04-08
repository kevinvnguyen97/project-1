var cors = "https://cors-anywhere.herokuapp.com/";
var gameQueryURL = "https://api-v3.igdb.com/games/?search=";
var gameName = "";

//queryURL = apiURL + key;

$('.btn').on("click", function(event) {
    event.preventDefault();
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
        localStorage.setItem("info", JSON.stringify(gameResponse));
        var a = localStorage.getItem("info");
        a = JSON.parse(a);
        console.log("Saved name " + a[0].name);

        console.log(gameResponse);
        console.log(gameResponse[0].name);
        console.log(gameResponse[0].summary);
        //.setItem("game", JSON.stringify(gameResponse));
        //console.log(localStorage.getItem("game"));
        //var savedGameDate = JSON.parse(localStorage.getItem("game"));
        //console.log(savedGameDate);
    });
});