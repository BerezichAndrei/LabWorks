function formuleUser() {
    let a = prompt('Введите a', 100);
    let b = prompt('Введите b', 100);
    let c = prompt('Введите c', 100);
    let result = b+Math.sqrt(Math.pow(b,2)+(4*a*c))/2*a - (Math.pow(a,3)*c + Math.pow(b,-2))
    document.writeln(result)
    return result
}

function TextDec() {
    let s1 = "Я люблю Беларусь"
    let s2 = "Я учусь в Политехническом колледже"

    document.writeln("Длинна строку S2: " + s2.length)
    document.writeln("Первый символ строки S1: " + s1[0])
    document.writeln("ASCII код первого символа  S1: " + s1[0].charCodeAt())
    document.writeln("Заменить слово Беларусь на Минск в строке S1: " + s1.replaceAll('Беларусь','Минск'))

    var newWindow = window.open("", "Информация", "width=400,height=200");
    if (navigator.cookieEnabled) {
    newWindow.document.write('<p>Cookie включены в браузере.</p>');
    } else {
    newWindow.document.write('<p>Cookie отключены в браузере.</p>');
    }
    setTimeout(function() {
    newWindow.close();
    }, 2000);
}

TextDec()


