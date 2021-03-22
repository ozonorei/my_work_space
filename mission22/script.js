function caclulate() {
    fetch('items.json')
        .then(res => res.json())
        .then(data => (document.body.innerHTML = data[0].text))
        ;
}

caclulate();