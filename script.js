var cors = "https://cors-anywhere.herokuapp.com/";
var gameQueryURL = "https://api-v3.igdb.com/games/?search=";
var gameImageURL = "https://images.igdb.com/igdb/image/upload/t_logo_med/";
var imageId;
var gameName = "";

//queryURL = apiURL + key;

$('.btn').on("click", function(event) {
    //event.preventDefault();
    gameName = $("#search-input").val().trim();
    // console.log(gameName);

    gameQueryURL = "https://api-v3.igdb.com/games/?search=" + gameName + "&fields=id,name,cover,platforms,genres,summary&limit=1";

    $.ajax({
        url: cors + gameQueryURL,//cors + queryURL + gameName,
        headers: {
            "user-key": "723e84ca4cb5bdd0d87cfb9d7e245b76"
        },
        method: "POST"
    }).then(function(gameResponse) {
        //console.log(gameResponse);
        localStorage.clear();
        localStorage.setItem("info", JSON.stringify(gameResponse));
        var a = localStorage.getItem("info");
        a = JSON.parse(a);
        console.log("Saved name " + a[0].name);

        //console.log("Description: " + response.)
        //var gameText = $("#game").text(JSON.stringify(response));
        //console.log(gameText);
        //$("#game").append(gameText);

        //Setting to Local Storage//
        localStorage.setItem("info", JSON.stringify(gameResponse));
        // console.log(gameResponse);
        // console.log(gameResponse[0].name);

        location.href = 'interal_page.html';
    });
});