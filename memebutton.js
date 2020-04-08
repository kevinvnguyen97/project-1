//Game API, queryURL 
var cors = "https://cors-anywhere.herokuapp.com/";
var queryURL = "https://api-v3.igdb.com/games/?search=";
var gameName = "";

//Game search & key for game names 
$('#search-button').on("click", function() {
    gameName = $("#gsearch").val().trim();
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
        //var gameText = $("#game").text(JSON.stringify(response));
        //console.log(gameText);
        //$("#game").append(gameText);
    });
});

//PSEUDO CODE FOR MEME BUTTON  
    //*When you click the related meme button 
            //create an onclick event that triggers, visability and connects to game name API data, as well as new button to download the related memes 
        //*related memes row goes from being invisiable to visable 
        //*button to download related memes that pop up 
        //*all related memes that are connected to the main game popup 

//=========================================================================
    //*If there are no related memes to the game searched 
        //error message with a sad face icon pops up saying "Sorry there are no related memes for this game!"
    

//Meme API & queryURL 
var memes = ;
var memesqueryURL = ;
