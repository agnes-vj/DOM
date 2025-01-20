var lastClick;
var currentClick;
let isMatch;
let isSecondImg = false;


const apple1 = document.getElementById("apple1");
apple1.addEventListener("click", function(){
    apple1.src = "./images/apple.png";
    if(!isSecondImg)
    {
        lastClick = apple1.id;
        isSecondImg = true;
    }
    else{
        currentClick = apple1.id;
        checkMatch(currentClick, lastClick)
    }
})

