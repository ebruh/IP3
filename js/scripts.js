var num = function (input) {
    numbers = [];
    for (i = 1; i <= input; i++) {
        numbers.push(i);
    };
    output = numbers.map(function (number) {
        if (number % 15 == 0) {
            return 'pingpong'
        } else if (number % 3 == 0) {
            return 'ping'
        } else if (number % 5 == 0) {
            return 'pong'
        } else {
            return number
        }
    })
    return output
}




$('document').ready(function () {
    $('#ping').submit(function (event) {
        event.preventDefault();
        $(".output").empty();
        var typed = $('#pingInput').val();
        $('#pingInput').val('');
        var outp = num(typed);
        outp.forEach(function (element) {
            $('.output').append('<li>' + element + '</li>');
        });
    })
})