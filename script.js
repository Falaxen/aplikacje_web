(function () {
  var button = document.getElementById("ex1_button");
  var content1 = document.getElementById("ex1_content");

  button.addEventListener("click", function () {
    content1.textContent = Array.from({ length: 10 }, function (_, index) {
      return index;
    }).join(",");
  });
})();