var a = localStorage.getItem("info");
a = JSON.parse(a);
console.log(a);

for (i = 0; i < a.length; i++){
    var gameImage = "https:" + a[i].cover.url;
    var highResImage = gameImage.replace("t_thumb", "t_720p");
    console.log(highResImage)
    $("#related-game-image-input" + (i + 1)).attr("src", highResImage)
    //$("#related-game-image-input" + (i + 1)).append(a);
    console.log('i: ' + i + ', image added');
}
$('.related-game').on("click", function (event) {
    event.preventDefault();

    // Fields
    // id - game ID
    // name - game name
    // cover.url - image of cover
    // date - date of release (must convert from timestamp to date using .toDateString())
    // game_modes.name - list of game modes
    // involved_companies.company.name - names of the companies/developers
    // platforms.abbreviation - abbreviated names of platforms
    // genres.name - names of genres
    // summary - description of game

    // USE EXPANDER
    gameQueryURL = "https://api-v3.igdb.com/games/?search=" + gameName + "&fields=id,name,cover.url,game_modes.name,involved_companies.company.name,platforms.abbreviation,genres.name,summary";

    $.ajax({
        url: cors + gameQueryURL,//cors + queryURL + gameName,
        headers: {
            "user-key": "0cc1bfecc2736937e59cd1a85bf85210"
        },
        method: "POST"
    }).then(function (gameResponse) {
        console.log(gameResponse);
        localStorage.setItem("infos", JSON.stringify(gameResponse));
    }).catch(function (error) {
        console.log(error);
    });
});
