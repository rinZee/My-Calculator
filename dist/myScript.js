function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  document.getElementById("output-value").innerText = num;
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    var output = getOutput();
    if (this.id != "=") {
      var output = getOutput();
      output = output + this.id;
      printOutput(output);
    }
    console.log(output);
    if (this.id == "=") {
      console.log("pressed equals");
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = getOutput();

    output = output + this.id;
    printOutput(output);
  });
}
