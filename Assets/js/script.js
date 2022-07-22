
// Add 1 hour time blocks from 9-5pm
// color code time blocks based on current time
// add functionality to type in hour blocks and save text
//to local storage and on page


let timeBlocks = $("textarea");
console.log(timeBlocks);

// Add time and date at top of page using moment.js
function time() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));
};
time();
// setInterval(function(){
//     time();
// }, 1000);


//compare current time with timeblock time
//create for loop to go through each timeblock
//create if statement to add color to text area
function checkTime() {
    let currentTime = moment().format("H");
    //remove old classes
    $("textarea").removeClass("present past future");
    
    for (let i = 0; i < timeBlocks.length; i++) {
        let calTime = timeBlocks[i].id;      
               
        if(currentTime < calTime){
            $(timeBlocks[i]).addClass("future");
        } else if(currentTime > calTime){
            $(timeBlocks[i]).addClass("past");
        } else{
            $(timeBlocks[i]).addClass("present");
        }
              
    }
}
checkTime()

//set interval to check the time every x mins to update colors
setInterval(function(){
    time();
    checkTime();
}, 60000);