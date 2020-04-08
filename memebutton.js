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
var gameMemes ;

$('#meme-btn').on("click", function() {
    gameMemes = $("#meme-btn").val().trim();
    console.log("This button is being clicked on")
    console.log(gameMemes);

    var newGiphyURL = "http://api.giphy.com/v1/gifs/categories=" + gameMeme+ "&0AiaHLMFWwB2ItqPXky2ZMxPWnWy55HK";

    $.ajax({
        url: giphy + newGiphyURL, 
        headers: {
            "user-key": "0AiaHLMFWwB2ItqPXky2ZMxPWnWy55HK"
        },
        method: "GET"
    }).then(function(response) {
        console.log(response);

//if button is clicked then display memes by adding a row between button & suggested games 

display function(){
    if ($('#meme-btn').on("click", function()){
        //display all related memes 
    }
    else{
        //display error message 
    }
}