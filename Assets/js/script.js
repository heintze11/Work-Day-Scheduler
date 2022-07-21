
// Add 1 hour time blocks from 9-5pm
// color code time blocks based on current time
// add functionality to type in hour blocks and save text
    //to local storage and on page

// Add time and date at top of page using moment.js
let timeBlocks = $(".textarea");
let calTime = $("")

function time (){
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));
};
time();
    // setInterval(function(){
    //     time();
    // }, 1000);


//compare current time with timeblock time

//create for loop to go through each timeblock
//crete if statement to add color to text area
//set interval to check the time every x mins to update colors


function checkTime (){
    let currentTime = moment().format("H");

    if(currentTime < #id){
        $
    }
}