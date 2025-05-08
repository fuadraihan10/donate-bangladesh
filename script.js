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

    // history management --------------------------
    var title = `${amount} Taka donated to ${input.replace("-input", "")} , Bangladesh`;
    var history = document.createElement("div");
    history.classList.add( "flex", "items-start", "border-2", "border-gray-200", "py-2", "flex-col", "w-4/5", "gap-2","p-5", "rounded-lg");
    history.innerHTML = `
    <h1 class="text-3xl font-bold">${title}</h1>
    <p>Date: ${new Date().toString()}</p>

    `;
    document.getElementById("history-section").appendChild(history);

});
}

// donate---------------------------
donate("noakhali-input","noakhali-donate","noakhali-coin");
donate("feni-input","feni-donate","feni-coin");
donate("quata-input","quata-donate","quata-coin");

