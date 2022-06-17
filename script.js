// Ebook: Head First Javascript - Exercise: Duncan's Just in Time Donuts

function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;
    var numCakeDonuts = parseDonuts(document.querySelector("#cakedonuts").value);
    var numGlazedDonuts = parseDonuts(document.querySelector("#glazeddonuts").value);
    if (isNaN(numCakeDonuts)){
        numCakeDonuts = 0;
    }
    if (isNaN(numGlazedDonuts)){
        numGlazedDonuts = 0;
    }
    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;
    document.querySelector("#subtotal").value = "$ " + subTotal.toFixed(2);
    document.querySelector("#tax").value = "$ " + tax.toFixed(2);
    document.querySelector("#total").value = "$ " + total.toFixed(2);
}

function parseDonuts(donutString) {
    numDonuts = parseInt(donutString);
    // verifica se a palavra 'dozen' aparece nos dados digitados
    if (donutString.indexOf("dozen") != -1){
        numDonuts *= 12;
    }
    return numDonuts;
}

function placeOrder(form) {
    if (document.querySelector("#name").value == "") {
        alert("Você precisa digitar um nome antes de enviar o pedido");
    } else if (document.querySelector("#pickupminute").value == "" || isNaN(document.querySelector("#pickupminute")).value) {
        alert("Você deve fornecer o número em minutos até a coleta antes de enviar o pedido")
    } else {
    // submit order to server
    form.submit();
    }
}

