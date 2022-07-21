
// Add 1 hour time blocks from 9-5pm
// color code time blocks based on current time
// add functionality to type in hour blocks and save text
    //to local storage and on page

// Add time and date at top of page using moment.js
    function time (){
        var today = moment();
        $("#currentDay").text(today.format("dddd, MMM Do"));
    };
    time();
    // setInterval(function(){
    //     time();
    // }, 1000);