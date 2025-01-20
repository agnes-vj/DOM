const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("input", function(){
    console.log("password input")
    var progressBar = document.getElementById("progressBar");
    progressBar.value += 5;
})