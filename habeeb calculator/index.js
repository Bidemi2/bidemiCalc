document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const numbs = document.querySelectorAll(".numb");
  const operator = document.getElementsByClassName("operator");
  const clear = document.getElementById("clear");
  const equal = document.getElementById("equal");
  const del = document.getElementById("del");
  const plusMinus = document.getElementById("plusMinus");

  let currentValue = "";
  let previousValue = "";
  let oprand = "";
  let result;

  for (num of numbs) {
    num.addEventListener("click", function (e) {
      if (e.target.innerText === "." && currentValue.includes(".")) {
        return;
      }

      currentValue += e.target.innerText;
      display.innerText = currentValue;
    });
  }
  for (operators of operator) {
    operators.addEventListener("click", function (e) {
      if (currentValue === "") return;
      else {
        oprand = e.target.innerHTML;
        previousValue = currentValue;
        currentValue = "";
      }
      display.innerHTML = oprand;
    });
  }
  equal.addEventListener("click", function (e) {
    if (currentValue === "" || previousValue === "" || oprand === "") return;

    //let result;
    switch (oprand) {
      case "+":
        result = Number(previousValue) + Number(currentValue);

        break;
      case "-":
        result = Number(previousValue) - Number(currentValue);

        break;
      case "*":
        result = eval(currentValue * previousValue).toFixed(1);

        break;
      case "/":
        result = (Number(previousValue) / Number(currentValue)).toFixed(1);

        break;

      case "%":
        result =
          (Number(previousValue) / 100) * Number(currentValue).toFixed(2);

        break;

      default:
        return;
    }
    display.innerHTML = result;
    currentValue = result;
    previousValue = "";
    oprand = "";
  });
  clear.addEventListener("click", function () {
    currentValue = "";
    previousValue = "";
    oprand = "";
    display.innerText = "0";
  });
  plusMinus.addEventListener("click", function () {
    currentValue = (Number(currentValue) * -1).toString();
    display.innerHTML = currentValue;
  });

  del.addEventListener("click", function () {
    if (display.innerHTML.length < 2) {
      display.innerHTML = "0";
      currentValue = "";
      return;
    }
    currentValue = currentValue.slice(0, -1);

    display.innerHTML = currentValue;
  });
  // let displays = window.getComputedStyle(display);
  // let displayFS = displays.getPropertyValue("font-size");
  // console.log(displayFS);
});
