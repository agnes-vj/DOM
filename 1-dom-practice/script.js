const paragraph = document.getElementById("targetParagraph");
paragraph.addEventListener("click",function(){
	paragraph.innerText = "this is the new paragraph on click";
})
paragraph.addEventListener("mouseover", function(){
	paragraph.innerText = "mouse is hovering over...";
    paragraph.style.color = "red";
})

const button = document.getElementById("changeContentButton");
button.addEventListener("click", function(){
    alert("You clicked a button!");
})

const appendButton = document.getElementById("appendButton");
appendButton.addEventListener("click", function(){
    const newNode = document.createElement("h2");
    newNode.innerText = "This heading was added dynamically by clicking a button!";
    document.body.appendChild(newNode);
})

const deleteFirstHeading = document.getElementById("deleteFirstHeading");
deleteFirstHeading.addEventListener("click", function(){
const firstH2Element = document.querySelector("h2");
document.body.removeChild(firstH2Element);
});


const deleteAllHeading = document.getElementById("deleteAllHeadings");
deleteAllHeading.addEventListener("click", function(){
    const allH2Elements = document.querySelectorAll("h2")
                                  .forEach(e =>  document.body.removeChild(e))   
});
