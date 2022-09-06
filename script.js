function func1() {
    var range = document.getElementById('range-1')
    var box_1 = document.getElementById('input-box-1')
    var box_2 = document.getElementById('input-box-2')
    var box_3 = document.getElementById('input-box-3')
    var price_1 = document.getElementById("input-price-box-1")
    var price_2 = document.getElementById("input-price-box-2")
    var price_3 = document.getElementById("input-price-box-3")
    document.getElementById('price').innerHTML = document.getElementById('range-1').value + '€'
    box_1.style.height = (range.value/500)*0.5 + 'px'
    box_2.style.height = (range.value/500)*1.25 + 'px'
    box_3.style.height = (range.value/500)*3.6 + 'px'
    price_1.innerHTML =  Math.floor(range.value/100) + '€'
    price_2.innerHTML = Math.floor((range.value/500)*12) + '€'
    price_3.innerHTML = Math.floor((range.value/500)*38) + '€'
}

