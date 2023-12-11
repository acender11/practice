function visualize_password() {
    let image = document.querySelector("img");
    let input = document.querySelector("#password");

    if (image.getAttribute("src") === "/hidden.png") {
        image.setAttribute("src", "/visible.png");
        input.setAttribute("type", "text");
    } else {
        image.setAttribute("src", "/hidden.png");
        input.setAttribute("type", "password");
    }
}

function validate_email() {
    let inputEmail = document.getElementById("email")
    let email = inputEmail.value;

    let validation = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let isValid = validation.test(email);

    if (isValid) {
        alert(inputEmail.style.borderBottomColor)
        inputEmail.style.borderBottomColor = "#7fff00";
        inputEmail.insertAdjacentHTML('afterend', '<div class="success">Получено успешно</div>')
    } else {
        alert("Адрес электронной почты введен неверно")
    }
}
