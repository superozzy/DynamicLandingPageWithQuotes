//DOM Elements
const time = document.getElementById('time'),
     greeting =document.getElementById('greeting'),
     name =document.getElementById('name'),
     Focus =document.getElementById('focus');
     let quotes = ['The Greek word for "return" is nostos. Algos means "suffering." So nostalgia is the suffering caused by an unappeased yearning to return.― Milan Kundera, Ignorance',
    'One day I will find the right words, and they all will be simple.- Jack Kerouac, The Dharma Bums', 'A quote from Winnie-the-Pooh poem:A bear, however hard he tries, grows tubby without exercise.',
    'If you loved someone, you loved him, and when you had nothing else to give, you still gave him love.- George Orwell, 1984','With Great Power Comes Great Responsibility.-Uncle Ben',
    'Love is the longing for the half of ourselves we have lost.― Milan Kundera, The Unbearable Lightness of Being','We need never be ashamed of our tears.-Charles Dickens',
    'Not all those who wander are lost.-J.R.R Tolkien'
    ]


//Show Time

function showTime(){
    let day = new Date();
    let hours =day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

// Set AM or PM
const amPm = hours >= 12 ? "PM" : "AM";

// 12hr Format
 hours = hours%12 || 12;
 
//  call the addZero()
    seconds=addZero(seconds);
    minutes = addZero(minutes);
    


//  Output Time
time.innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;

setTimeout(showTime,1000);
}
// set bg and greeting
 
function setBgGreet(){
    let day = new Date(),
    hours = day.getHours();

    if(hours < 12){
        // Morning
        document.body.style.backgroundImage = "url(../images/goodmorning.jpg)";
        greeting.textContent = "Good Morning";
        document.body.style.color = "white";
        document.body.style.backgroundSize = "cover"
    }
    else if(hours < 18){
        // Afterrnoon
        document.body.style.backgroundImage = "url(../images/forest.jpg)";
        document.body.style.backgroundSize = "cover"
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";
       
        

    }
    else{
        // night
        document.body.style.backgroundImage = "url(../images/morning-sky.jpg)";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
        document.body.style.backgroundSize = "cover"
       
    }
}



//  add zeros
function addZero(i){
 
    if(i<10){
        i= "0" + i;
    }
    return i;
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('Focus') === null){
        Focus.textContent = "[Enter Focus]";
    }else{
        Focus.textContent = localStorage.getItem('Focus');
    }

}

// set Name
function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode ==13){
        localStorage.setItem('Focus',e.target.innerText);
        Focus.blur();
        }

    }else{
        localStorage.setItem('Focus',e.target.innerText);
    }
}


// Math random 
function newQuote(e){
    let randomQuote = Math.floor(Math.random()*(quotes.length));
    let enterQuote = document.getElementById('quotes').innerHTML = quotes[randomQuote];
    // if(e === 'blur'){
    //     if(e.which == 13 || e.keyCode ==13){
    //         enterQuote;

    //     }
    //     else{"Please press enter"}
    // }
    
    
    }

Focus.addEventListener('keypress',setName);
Focus.addEventListener('blur',setName);
Focus.addEventListener('blur',newQuote);
// Run
showTime();
setBgGreet()
getFocus();
// newQuote();
