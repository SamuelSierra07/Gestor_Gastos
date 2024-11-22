let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0"; // Oculta el campo de nombre
    title.innerHTML = "Login"; // Cambia el título a "Login"
    signUp.classList.add("disable"); // Deshabilita el botón de registro
    signIn.classList.remove("disable"); // Habilita el botón de login
};

signUp.onclick = function () {
    nameInput.style.maxHeight = "60px"; // Muestra el campo de nombre
    title.innerHTML = "Registro"; // Cambia el título a "Registro"
    signUp.classList.remove("disable"); // Habilita el botón de registro
    signIn.classList.add("disable"); // Deshabilita el botón de login
};
