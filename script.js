function generateName() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.querySelector('input[name="gender"]:checked');

  if (day < 1 || day > 31) {
    alert("Invalid day");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Invalid month");
    return;
  }

  if (!gender) {
    alert("Please select gender");
    return;
  }

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let date = new Date(year, month - 1, day);
  let dayIndex = date.getDay();

  let akanName =
    gender.value === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  document.getElementById("result").innerHTML =
    `You were born on <b>${days[dayIndex]}</b><br>Your Akan name is <b>${akanName}</b>`;
}
