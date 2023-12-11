function visualizePassword() {
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

function visualizePasswordAccept() {
    let image = document.querySelector(".password-image-accept > img");
    let input = document.querySelector("#password_accept");

    if (image.getAttribute("src") === "/hidden.png") {
        image.setAttribute("src", "/visible.png");
        input.setAttribute("type", "text");
    } else {
        image.setAttribute("src", "/hidden.png");
        input.setAttribute("type", "password");
    }
}

function validateEmail() {
    let inputEmail = document.getElementById("email")
    let email = inputEmail.value;

    let validation = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let isValid = validation.test(email);

    if (!document.querySelector(".success")) {
        if (isValid) {
            inputEmail.style.borderBottomColor = "rgb(6, 177, 20)";
            inputEmail.insertAdjacentHTML('afterend', '<div class="success">Получено успешно</div>')
            inputEmail.style.marginBottom = 0;
        } else {
            alert("Адрес электронной почты введен неверно")
        }
    }
}
