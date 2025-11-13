 const display = document.getElementById("calcDisplay");

    function press(val) {
      display.value += val;
    }

    function clearCalc() {
      display.value = "";
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Fehler";
      }
    }