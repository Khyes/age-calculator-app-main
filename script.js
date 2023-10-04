function calculateAge() {
    const yearsInput = parseInt(document.getElementById("birthYear").value);
    const monthsInput = parseInt(document.getElementById("birthMonth").value);
    const daysInput = parseInt(document.getElementById("birthDay").value);

    const currentDate = new Date();
    const birthdate = new Date(currentDate.getFullYear() - yearsInput, currentDate.getMonth() - monthsInput, currentDate.getDate() - daysInput);

    const ageMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageMilliseconds);
  
    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() -1;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    
        if (ageDays < 0) {
          const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
          ).getDate();
          ageDays += lastDayOfMonth;
          ageMonths--;
        }
      }

    const yearsResultDiv = document.getElementById("yearsResult");
    const monthsResultDiv = document.getElementById("monthsResult");
    const daysResultDiv = document.getElementById("daysResult");

    yearsResultDiv.innerHTML = ageYears;
    monthsResultDiv.innerHTML = ageMonths;
    daysResultDiv.innerHTML = ageDays;

    console.log(currentDate);
    console.log(ageMilliseconds);
    console.log(ageDate);

}
