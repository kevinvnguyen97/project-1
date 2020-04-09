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
//api key for Giphy: 0AiaHLMFWwB2ItqPXky2ZMxPWnWy55HK
var giphy = "https://developers.giphy.com/docs/api";
var memesqueryURL = "http://api.giphy.com/v1/gifs/categories=";
var gameMemes;
var cors = "https://cors-anywhere.herokuapp.com/"

$('#meme-btn').on("click", function (event) {
    event.preventDefault()
    gameMemes = localStorage.getItem("info");
    console.log("This button is being clicked on")
    console.log(gameMemes);
    gameMemes = JSON.parse(gameMemes);
    console.log(gameMemes);

    var gameMeme = gameMemes[0].name;
    var apiKey = "0AiaHLMFWwB2ItqPXky2ZMxPWnWy55HK";
    var newGiphyURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + gameMeme;
    console.log(newGiphyURL);

    $.ajax({
        url: cors + newGiphyURL,
        // headers: {
        //     "user-key": "0AiaHLMFWwB2ItqPXky2ZMxPWnWy55HK"
        // },
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // var meme = $("#memes");
        // meme.css("display", "none");
        // if (meme === "none") {
        //     meme.css("display", "block");
        // } else {
        //     meme.css("display", "none");
        // }
        
        for (i = 0; i < response.data.length; i++) {
            if (i >= 11) {
                // break;
                // gifURL.append(data[i].url) 
                var gifLink = "https://media.giphy.com/media/" + response.data[i].id + "/giphy.gif"
                var a = $("<img>").attr("src", gifLink)
                $("#memes").append(a);
                console.log(response.data[i].id);
            // } else {
                // gifURL.append(data[i].url) 
                // var a = $("<img>").attr("src", response.data[i].url)
                // $("#memes").append(a);
                // console.log(response.data[i].url);
            }
        };
});

}); 

//accept array with memes 

    // if button is clicked then display memes by adding a row between button & suggested games 

    //     display function(){
    //         if ($('#meme-btn').on("click", function()){
    //             //display all related memes 
    //         }
    //         else{
    //             //display error message 
    //         }
    //     });

