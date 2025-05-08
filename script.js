// history-sec-----------------
document.getElementById("history").addEventListener('click', function() {
    document.getElementById("history").classList.remove("btn-outline");
    document.getElementById("donation").classList.add("btn-outline");

    document.getElementById("donation-section").classList.add("hidden");

    document.getElementById("history-section").classList.remove("hidden");
  });

// donation-sec----------------------
document.getElementById("donation").addEventListener('click', function() {
    document.getElementById("donation").classList.remove("btn-outline");
    document.getElementById("history").classList.add("btn-outline");

    document.getElementById("donation-section").classList.remove("hidden");

    document.getElementById("history-section").classList.add("hidden");
  });


// --donate-button---
function donate(input,button,coin) {

  // coin calculation-----------------------
  document.getElementById(button).addEventListener("click", function() {
    var capital = document.getElementById("capital").innerText;
    var amount = document.getElementById(input).value;
    coin_amount = document.getElementById(coin).innerText;
    if (amount === "") {
      alert("Please enter an amount to donate.");
      return;
    }
    document.getElementById("capital").innerText =  parseInt(capital) - parseInt(amount);
    document.getElementById(coin).innerText =  parseInt(coin_amount) + parseInt(amount);
    my_modal_1.showModal();

    

});
}

// donate---------------------------
donate("noakhali-input","noakhali-donate","noakhali-coin");
donate("feni-input","feni-donate","feni-coin");
donate("quata-input","quata-donate","quata-coin");

