let timeBlocks = $("textarea");
let buttonParent = document.querySelector(".container");


// Add time and date at top of page using moment.js
function time() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));
};
time();

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
checkTime()

//set interval to check the time every x mins to update colors
setInterval(function(){
    time();
    checkTime();
}, 60000);

// add functionality to type in hour blocks and save text
//to local storage and on page
    // save button event listener. 
    //Add text from specific textarea to local storage.
    //Display back to page
let old9 = localStorage.getItem("9AM");
let old10 = localStorage.getItem("10AM");
let old11 = localStorage.getItem("11AM");
let old12 = localStorage.getItem("12PM");
let old13 = localStorage.getItem("1PM");
let old14 = localStorage.getItem("2PM");
let old15 = localStorage.getItem("3PM");
let old16 = localStorage.getItem("4PM");
let old17 = localStorage.getItem("5PM");

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
display();


$(".saveBtn").on("click", function(event){
    localStorage.setItem(event.target.parentNode.children[0].innerText, event.target.previousElementSibling.value);
    display();
})

// buttonParent.addEventListener("click", function(event){
//     localStorage.setItem(event.path[1].children[0].innerText, event.target.previousElementSibling.value);

//     //find where time is in logs
//     console.log(event.path[1].children[0].innerText);

//     //get the data from the text field
//     console.log(event.target.previousElementSibling.value);


//     // save();
// })

//create event listener around the parent
//from event listener use event keyword
//add id to buttons for event listener
//textarea.value of .sibling


//pull from local storage to print to screen