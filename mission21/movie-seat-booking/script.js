const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const titketPrice = +movieSelect.value;


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    ;

    const selectedSeatsCount = selectedSeats.length;

    console.log(selectedSeatsCount);
}


container.addEventListener('click',e => {
    if(
    e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});



