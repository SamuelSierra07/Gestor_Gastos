// Obtener los elementos del DOM
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const nameInput = document.getElementById('nameInput');

// Agregar evento de clic al botón de registro
signUpBtn.addEventListener('click', () => {
    // Obtener los valores de los campos de entrada
    const name = nameInput.querySelector('input').value;
    const email = document.querySelector('.input-field:nth-child(2) input').value;
    const password = document.querySelector('.input-field:nth-child(3) input').value;

    // Validar los campos de entrada
    if (!name || !email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto con los datos del usuario
    const user = {
        name,
        email,
        password
    };

    // Guardar los datos del usuario en el almacenamiento local
    localStorage.setItem('user', JSON.stringify(user));

    // Redirigir a la página de registrar gastos
    window.location.href = 'tarjetas.html'; // Redirigir a registrar gastos
});

// Agregar evento de clic al botón de inicio de sesión
signInBtn.addEventListener('click', () => {
    // Obtener los datos del usuario del almacenamiento local
    const user = JSON.parse(localStorage.getItem('user'));

    // Verificar si hay un usuario registrado
    if (!user) {
        alert('No hay usuario registrado.');
        return;
    }

    // Verificar las credenciales
    const email = document.querySelector('.input-field:nth-child(2) input').value;
    const password = document.querySelector('.input-field:nth-child(3) input').value;

    if (email === user.email && password === user.password) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'tarjetas.html'; // Redirigir a registrar gastos
    } else {
        alert('Credenciales incorrectas.');
    }
});
