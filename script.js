// history-sec-----------------
document.getElementById("history").addEventListener('click', function() {
    document.getElementById("history").classList.remove("btn-outline");
    document.getElementById("donation").classList.add("btn-outline");
  });

// donation-sec----------------------
document.getElementById("donation").addEventListener('click', function() {
    document.getElementById("donation").classList.remove("btn-outline");
    document.getElementById("history").classList.add("btn-outline");
  });