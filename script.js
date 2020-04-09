var cors = "https://cors-anywhere.herokuapp.com/";
var gameQueryURL = "https://api-v3.igdb.com/games/?search=";
var gameImageURL = "https://images.igdb.com/igdb/image/upload/t_logo_med/";
var imageId;
var gameName = "";

//queryURL = apiURL + key;

$('.btn').on("click", function(event) {
    //event.preventDefault();
    gameName = $("#search-input").val().trim();
    
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
        location.href = 'interal_page.html';
    });
});