function caclulate() {
    fetch('items.json')
        .then(res => res.json())
        .then(data =>console.log(data));
}

caclulate();