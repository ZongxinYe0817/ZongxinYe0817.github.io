function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

$('input[type="button"]').click(function (e) {
    $(this).closest('tr').remove()
})

function removefunction() {
    var td = event.target.parentNode; 
    var tr = td.parentNode; 
    tr.parentNode.removeChild(tr);
}