const formManual = document.getElementById("akanFormManual");
const resultCard = document.getElementById("resultManual");
const resultText = document.getElementById("resultTextManual");
const errorDiv = document.getElementById("errorManual");
const clearBtn = document.getElementById("clearManual");

formManual.addEventListener("submit", function(e){
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Reset previous messages
    errorDiv.textContent = "";
    resultCard.classList.add("hidden");

    // Validation
    if(!day || !month || !year || !gender) {
        errorDiv.textContent = "Please fill in all fields correctly.";
        return;
    }
    if(day < 1 || day > 31) {
        errorDiv.textContent = "Day must be between 1 and 31.";
        return;
    }
    if(month < 1 || month > 12) {
        errorDiv.textContent = "Month must be between 1 and 12.";
        return;
    }

    // Calculate day of the week
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    resultText.innerHTML = `
        You were born on <strong>${days[dayOfWeek]}</strong>.<br>
        Your Akan name is <strong>${akanName}</strong>.
    `;

    resultCard.classList.remove("hidden");
});

// Clear button
clearBtn.addEventListener("click", function(){
    formManual.reset();
    resultCard.classList.add("hidden");
    errorDiv.textContent = "";
});
