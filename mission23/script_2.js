const rich_one = document.getElementById('currency-one');
const rich_one_1 = document.getElementById('amount-one');
const rich_two = document.getElementById('currency-two');
const rich_two_1 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function text() {
    const rich_one_value = rich_one.value;
    const rich_two_value = rich_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${rich_one_value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.rates[rich_two_value];

        rateEl.innerText = `1 ${rich_one_value} = ${rate} ${rich_two_value}`; 

        rich_two_1.value = (rich_one_1.value * rate).toFixed(3);
    });
}






rich_one.addEventListener('change',text);
rich_one_1.addEventListener('input',text);
rich_two.addEventListener('change',text);
rich_two_1.addEventListener('input',text);

swap.addEventListener('click',() => {
    const temp = rich_one.value;
    rich_one.value = rich_two.value;
    rich_two.value = temp;

    text();
});


text();