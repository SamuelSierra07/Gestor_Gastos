// Selección de elementos
const form = document.getElementById('expense-form');
const cardsContainer = document.getElementById('cards-container');

// Verificar si hay un usuario registrado
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  alert('Por favor, inicie sesión primero.');
  window.location.href = 'index.html'; // Redirigir al login si no hay usuario
}

// Mostrar un mensaje de bienvenida en el título del documento
document.title = `Bienvenido, ${user.name}`;

// Función para guardar los datos de los gastos
function saveExpenses(expenses) {
  localStorage.setItem(`expenses_${user.email}`, JSON.stringify(expenses));
}

// Función para cargar los gastos del usuario
function loadExpenses() {
  return JSON.parse(localStorage.getItem(`expenses_${user.email}`)) || [];
}

// Manejar el envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recargar la página

  // Obtener valores de los campos
  const descripcion = document.getElementById('descripcion').value;
  const monto = document.getElementById('monto').value;
  const fecha = document.getElementById('fecha').value;
  const categoria = document.getElementById('categoria').value;
  const metodoPago = document.getElementById('metodo-pago').value;

  // Crear un objeto de gasto
  const expense = { descripcion, monto, fecha, categoria, metodoPago };

  // Guardar el gasto en localStorage
  const userExpenses = loadExpenses();
  userExpenses.push(expense);
  saveExpenses(userExpenses);

  // Agregar la tarjeta visualmente
  addExpenseCard(expense);

  // Limpiar formulario
  form.reset();
});

// Función para agregar una tarjeta de gasto al contenedor
function addExpenseCard(expense) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Asignar ícono según categoría
  let icon;
  switch (expense.categoria) {
    case 'transporte':
      icon = '🚗';
      break;
    case 'comida':
      icon = '🍔';
      break;
    default:
      icon = '🛒';
  }

  // Formatear el texto del método de pago
  let metodoPagoTexto = '';
  switch (expense.metodoPago) {
    case 'efectivo':
      metodoPagoTexto = 'Efectivo';
      break;
    case 'tarjeta-debito':
      metodoPagoTexto = 'Tarjeta de Débito';
      break;
    case 'tarjeta-credito':
      metodoPagoTexto = 'Tarjeta de Crédito';
      break;
  }

  // Contenido de la tarjeta
  card.innerHTML = `
    <div class="icon">${icon}</div>
    <h3>${expense.categoria}</h3>
    <p><strong>${expense.descripcion}</strong></p>
    <p>Monto: <span>$${expense.monto}</span></p>
    <p>Fecha: ${expense.fecha}</p>
    <p>Método de Pago: <strong>${metodoPagoTexto}</strong></p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Agregar evento al botón "Eliminar"
  const deleteButton = card.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    cardsContainer.removeChild(card); // Eliminar la tarjeta del contenedor

    // Eliminar el gasto del almacenamiento local
    const userExpenses = loadExpenses();
    const updatedExpenses = userExpenses.filter(exp => exp !== expense);
    saveExpenses(updatedExpenses);
  });

  // Agregar la tarjeta al contenedor
  cardsContainer.appendChild(card);
}

// Cargar y mostrar los gastos existentes al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const savedExpenses = loadExpenses();
  savedExpenses.forEach(expense => {
    addExpenseCard(expense);
  });
});

