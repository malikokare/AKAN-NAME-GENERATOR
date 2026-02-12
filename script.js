const form = document.getElementById("akanForm");
const resultCard = document.getElementById("result");
const resultText = document.getElementById("resultText");
const errorDiv = document.getElementById("error");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    errorDiv.textContent = "";
    resultCard.classList.add("hidden");

    if (!birthdate || !gender) {
        errorDiv.textContent = "Please select your birthdate and gender.";
        return;
    }

    const date = new Date(birthdate);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const akanName = gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    resultText.innerHTML = `
        You were born on <strong>${days[dayOfWeek]}</strong>.<br>
        Your Akan name is <strong>${akanName}</strong>.
    `;

    resultCard.classList.remove("hidden");
});

/* Clear button */
clearBtn.addEventListener("click", function() {
    form.reset();
    resultCard.classList.add("hidden");
    errorDiv.textContent = "";
});
