function calculateAge() {
    var birthYear = parseInt(document.getElementById("birthYear").value);
    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    var birthDay = parseInt(document.getElementById("birthDay").value);

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
        age--;
    } else if (currentMonth === birthMonth && currentDay < birthDay) {
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is " + age + " years.";
}