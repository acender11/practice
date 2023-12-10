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