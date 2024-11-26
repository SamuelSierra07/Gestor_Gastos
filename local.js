// Obtener referencias a los elementos del formulario
const form = document.getElementById("form-gasto");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");

// Escuchar el evento de envío del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Obtener los valores ingresados
    const descripcion = document.getElementById("descripcion").value;
    const monto = document.getElementById("monto").value;
    const fecha = document.getElementById("fecha").value;
    const categoria = document.getElementById("categoria").value;

    // Validar que los campos no estén vacíos
    if (!descripcion || !monto || !fecha || !categoria) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear un objeto con los datos del gasto
    const nuevoGasto = {
        id: Date.now(),
        descripcion,
        monto: parseFloat(monto),
        fecha,
        categoria,
    };

    // Guardar el gasto en localStorage
    guardarGasto(nuevoGasto);

    // Mostrar el modal de éxito
    modal.style.display = "block";
});

// Función para guardar el gasto en localStorage
function guardarGasto(gasto) {
    // Recuperar los datos existentes
    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    gastos.push(gasto); // Agregar el nuevo gasto
    localStorage.setItem("gastos", JSON.stringify(gastos)); // Guardar en localStorage
    console.log("Gasto guardado:", gasto);
}

// Cerrar el modal
cerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
    form.reset(); // Reiniciar el formulario
});

// Función para listar los gastos (puedes usarla para mostrar en pantalla)
function listarGastos() {
    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    console.log("Gastos registrados:", gastos);
}
