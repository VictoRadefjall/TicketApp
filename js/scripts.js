if(localStorage.getItem('tickets')) {

    let data = localStorage.getItem('tickets');
    console.log(JSON.parse(data));
} else {
    console.error('det finns INGEN data!');
}
