(function () {
  var button = document.getElementById("ex1_button");
  var content = document.getElementById("ex1_content");

  button.addEventListener("click", function () {
    content.textContent = Array.from({ length: 10 }, function (_, index) {
      return index;
    }).join(",");
  });
})();