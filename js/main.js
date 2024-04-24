let products = new Map();
products.set('phone', 'мобильный телефон');
products.set('charger', 'зарядное устройство');
products.set('case', 'защитный чехол');

function checkFirstName() {
    let firstname = document.getElementById("firstname").value;

    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    if (regex.test(firstname)) {
        return true;
    }

    alert("Имя должно состоять из 2-15 букв!");
    return false;
}

function checkLastName() {
    let lastname = document.getElementById("lastname").value;

    let regex = /^[а-яА-Яa-zA-Z\-\s]{2,15}$/;
    if (regex.test(lastname)) {
        return true;
    }

    alert("Фамилия должна состоять из 2-15 букв!");
    return false;
}

function checkPhone() {
    let phone = document.getElementById("phone").value;

    let regex = /^(\+7|8)\s?[\(-]?[0-9]{3}[\)-]?([\-\s]?[0-9]){7}$/;
    if (regex.test(phone)) {
        return true;
    }

    alert("Номер телефона должен соответствовать формату +7-xxx-xxx-xx-xx!");
    return false;
}

function checkQuantity() {
    let quantity = parseInt(document.getElementById("quantity").value);

    if (quantity > 0 && quantity <= 100) {
        return true;
    }

    alert("Количество товара не может быть меньше 1 или больше 100!");
    return false;
}

function checkOrderInformation() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;

    let summaryMessage = document.getElementById("order__summary");

    summaryMessage.style.display = "block";

    if (checkFirstName()
        & checkLastName()
        & checkPhone()
        & checkQuantity()) {
        summaryMessage.style.color = "white";
        summaryMessage.style.textShadow = "none";
        summaryMessage.innerHTML = `Добрый день, ${firstname}${lastname.length > 1 ? " " + lastname : ""}!`;
        summaryMessage.innerHTML += "<p>Ваш заказ успешно размещён. Мы свяжемся с вами в ближайшее время.</p>";
        summaryMessage.innerHTML += "<p>Вы можете ознакомиться с реквизитами заказа ниже:</br>";
        summaryMessage.innerHTML += `Номер телефона: ${phone}.</br>`;
        summaryMessage.innerHTML += `Товар: ${products.get(product)}.</br>`;
        summaryMessage.innerHTML += `Количество товара: ${quantity} шт.</p>`;
        summaryMessage.innerHTML += `<p style='font-weight: bold;'>Спасибо, что вы с нами! 😉</p>`;
    }
    else {
        summaryMessage.style.color = "rgb(220, 0, 0)";
        summaryMessage.style.textShadow = "1px 1px 15px white, 1px 1px 15px white, 1px 1px 15px white";
        summaryMessage.innerHTML = "<p style='font-weight: bold;'>Проверьте заполнение полей заказа перед отправкой формы!<p>"
    }
}

window.onload = function () {
    let colorChangingTitle = document.getElementById("color__changer");
    setInterval(() => colorChangingTitle.style.color = "red", 600);
    setTimeout(() => setInterval(() => colorChangingTitle.style.color = "green", 600), 200);
    setTimeout(() => setInterval(() => colorChangingTitle.style.color = "blue", 600), 400);
}