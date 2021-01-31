var bookingButton = document.getElementById('booking-button');
bookingButton.addEventListener('click', handleBooking);

function handleBooking(event){
    
    let bookingForm = document.getElementById('apply-form');
    let bookingContent = document.getElementById('bookings-content');
    bookingForm.style.display = "block";
    bookingContent.style.visibility = "hidden";
    bookingContent.style.height = "0px";

    let economyAdd = document.getElementById('economy-add');
    let economyMinus = document.getElementById("economy-minus");
    let businessAdd = document.getElementById('business-add')
    let businessMinus = document.getElementById('business-minus');
    let checkingUp = document.getElementById('checking-up');

    economyAdd.addEventListener('click',handleEconomyAddition)
    economyMinus.addEventListener('click',handleEconomyMinus)
    businessAdd.addEventListener('click',handleBusinessAddition)
    businessMinus.addEventListener('click',handleBusinessMinus)
    checkingUp.addEventListener('click',handleTicket)


}

function handleEconomyAddition(){
    let economyTicket = document.getElementById('economy-ticket');
    let value = parseInt(economyTicket.value) +1
    economyTicket.value = value;
    calculateCost();
}

function handleEconomyMinus(){
    let economyTicket = document.getElementById('economy-ticket');
    let value = parseInt(economyTicket.value) -1;
    if(value < 0){
        value = 0;
    }
    economyTicket.value = value;
    calculateCost();
}

function handleBusinessAddition(){
    let businessTicket = document.getElementById('business-ticket');
    let value = parseInt(businessTicket.value) +1
    businessTicket.value = value;
    calculateCost();
}

function handleBusinessMinus(){
    let businessTicket = document.getElementById('business-ticket');
    let value = parseInt(businessTicket.value) -1;
    if(value < 0){
        value = 0;
    }
    businessTicket.value = value;
    calculateCost();
}

function handleTicket(){
    let startPoint = document.getElementById('start-point').value;
    let endPoint = document.getElementById('end-point').value;
    let departTime = document.getElementById('depart').value;
    let returnTime = document.getElementById('return').value;
    let selectedOption = document.getElementById('select-option').value;
    let economyTicket = document.getElementById('economy-ticket').value;
    let businessTicket = document.getElementById('business-ticket').value;
    let subTotal = document.getElementById('subtotal').innerText;
    let vat = document.getElementById('vat').innerText;
    let total = document.getElementById('total').innerText;


    document.getElementById('apply-form').style.display = "none";
    document.getElementById('destination-detail').style.display = "block";
    document.getElementById('start-time').innerHTML = `
    <h3>${departTime}</h3> <h5>${startPoint}</h5><p><small>Vat $${vat}</small></p><p><small>QR Boeing ${Math.round(Math.random()*10000)}ER</small></p><p>Operated by Biman Bangaladesh</p>
    `
    document.getElementById('reach-time').innerHTML = `
    <h3>${returnTime}</h3> <h3>${selectedOption}</h3> <h5>${endPoint}</h5><p><small>QR Boeing ${Math.round(Math.random()*10000)}ER</small></p><p>Operated by Biman Bangaladesh</p>
    `
    document.getElementById('economy-cost').innerHTML = `
    <h3>Economy Ticket</h3> <h5>${parseInt(economyTicket)*100}$</h5><p>Operated by Biman Bangaladesh</p>
    `
    document.getElementById('business-cost').innerHTML = `
    <h3>Business Ticket</h3> <h5>${parseInt(businessTicket)*150}$</h5><p>Operated by Biman Bangaladesh</p>
    `

}

function calculateCost(){
    let subTotal = document.getElementById('subtotal');
    let vat = document.getElementById('vat');
    let total = document.getElementById('total')
    let businessTicket = document.getElementById('business-ticket');
    let economyTicket = document.getElementById('economy-ticket');
    let subTotalAmount = (parseInt(businessTicket.value) * 150 ) + (parseInt(economyTicket.value)*100);
    let vatAmount = subTotalAmount * .1;
    let totalAmount = subTotalAmount + vatAmount;
    subTotal.innerText = subTotalAmount;
    vat.innerText = vatAmount;
    total.innerText = totalAmount;
}