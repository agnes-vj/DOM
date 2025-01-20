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