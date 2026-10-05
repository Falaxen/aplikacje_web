(function () {
   var phoneInput = document.getElementById("ex2_text");
  var phoneContent = document.getElementById("ex2_content");

  phoneInput.addEventListener("input", function () {
    var phoneNumber = phoneInput.value;

    if (/\p{L}/u.test(phoneNumber)) {
      phoneContent.textContent = "Numer nie może zawierać liter";
    } else if (/[^0-9\p{L}]/u.test(phoneNumber)) {
      phoneContent.textContent = "Numer nie może zawierać znaków specjalnych";
    } else if (phoneNumber.length !== 9) {
      phoneContent.textContent = "Długość numeru musi być równa 9";
    } else if (/^[0-9]{9}$/.test(phoneNumber)) {
      phoneContent.textContent = "Numer telefonu jest poprawny";
    }
  });
})();