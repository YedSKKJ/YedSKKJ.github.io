function goToBooking() {
    window.location.assign("bookingform.html") ;
}

function goToAbout() {
    window.location.assign("about.html") ;
}

function process() {
    var package = parseFloat(document.getElementById('package').value); 
    var num_of_people = parselInt(document.getElementById('num-of-people').value);
    var totalPayment= package * num_of_people;
    document.getElementById('total').textContent = totalPayment.toFixed(2);

    setTimeout(() => {
        alert('Thank You!');
        window.location.assign('about.html');
    }, 1000);
}