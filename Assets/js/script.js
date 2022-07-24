let timeBlocks = $("textarea");
let buttonParent = document.querySelector(".container");
// pull from local storage on page load
let old9 = localStorage.getItem("9AM");
let old10 = localStorage.getItem("10AM");
let old11 = localStorage.getItem("11AM");
let old12 = localStorage.getItem("12PM");
let old13 = localStorage.getItem("1PM");
let old14 = localStorage.getItem("2PM");
let old15 = localStorage.getItem("3PM");
let old16 = localStorage.getItem("4PM");
let old17 = localStorage.getItem("5PM");


// Add time and date at top of page using moment.js
function time() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));
};


//compare current time with timeblock time
//create for loop to go through each timeblock
//create if statement to add color to text area using add class
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

//set interval to check the time every 1 mins to update colors
setInterval(function(){
    time();
    checkTime();
}, 60000);

function display(){
    // get from local storage and post in correct Textarea
    
    if (old9 != ""){
        timeBlocks[0].textContent = old9;
    }
    if (old10 != ""){
        timeBlocks[1].textContent = old10;
    }
    if (old11 != ""){
        timeBlocks[2].textContent = old11;
    }
    if (old12 != ""){
        timeBlocks[3].textContent = old12;
    }
    if (old13 != ""){
        timeBlocks[4].textContent = old13;
    }
    if (old14 != ""){
        timeBlocks[5].textContent = old14;
    }
    if (old15 != ""){
        timeBlocks[6].textContent = old15;
    }
    if (old16 != ""){
        timeBlocks[7].textContent = old16;
    }
    if (old17 != ""){
        timeBlocks[8].textContent = old17;
    }
}

// add event listener to all save buttons
    //save data to local storage
$(".saveBtn").on("click", function(event){
    localStorage.setItem(event.target.parentNode.children[0].innerText, event.target.previousElementSibling.value);
    display();
})

time();
checkTime();
display();