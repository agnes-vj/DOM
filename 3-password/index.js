const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("input", function(event){

    var length = event.target.value.length
    var progressBar = document.getElementById("progressBar");
    var progressDesc = document.getElementById("progressDescription");


    progressBar.style.accentColor = "red";
    progressDesc.innerText = "Should be longer";
    progressBar.value = length * 5;

    if(length > 8 && length < 12)
        {progressBar.style.accentColor = "orange";
            progressDesc.innerText = "Pretty good";
        };
    if(length >= 12) {
        progressBar.style.accentColor = "green";
        progressDesc.innerText = "Grrrreat!";
    };

    
    


})




