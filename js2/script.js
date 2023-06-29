setInterval(function () {
    var date = new Date();
    // присваиваем переменной текущую дату
    var size = document.documentElement.innerHTML.length;
    // присваиваем переменной размер файла
    console.log("Дата:", date);
    console.log("Размер документа:", size, "байт");
}, 5000);
// получили инфу о дате и размере документа и выводим каждые 5 секунд в консоль

// Получаем элемент, который будет удален
var element = document.getElementById("firstElement");
// Добавляем обработчик события на щелчок по элементу
element.addEventListener("click", function () {
    // Удаляем элемент
    element.parentNode.removeChild(element);
});

// Получаем элемент, на который будем вешать обработчик события
var elementScnd = document.getElementById("secondElement");
// Добавляем обработчик события на щелчок по элементу
elementScnd.addEventListener("click", function () {
    this.style.color = "red"; // Изменяем цвет текста на красный
    this.style.backgroundColor = "yellow"; //Изменяем background
    this.style.fontFamily = "Arial"; // Изменяем шрифт на Arial
    this.style.fontSize = "14px"; // Изменяем размер шрифта на 14px
    this.style.border = "2px solid blue"; // Добавляем границу синего цвета толщиной 2px
});

// Проверяем, включены ли cookie в браузере пользователя
var areCookiesEnabled = navigator.cookieEnabled;

// Создаем новое окно с информацией о cookie
var infoWindow = window.open("", "", "width=400,height=200");
infoWindow.document.write("<h2>Состояние cookie:</h2>");
infoWindow.document.write(
    "<p>" + (areCookiesEnabled ? "Включены" : "Выключены") + "</p>"
);

// Закрываем окно через 2 секунды
setTimeout(function () {
    infoWindow.close();
}, 2000);
