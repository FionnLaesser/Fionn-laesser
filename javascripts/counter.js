(function () {
  // Aktuellen Wert holen
  let count = Number(localStorage.getItem("pageViews") || 0);
  
  count++;

  // Speichern
  localStorage.setItem("pageViews", count);

  // In die Box schreiben
  const box = document.getElementById("pageCounter");
  if (box) {
    box.textContent = "Seitenaufrufe: " + count;
  }
})();
