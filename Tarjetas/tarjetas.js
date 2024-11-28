// Selección de elementos
const form = document.getElementById('expense-form');
const cardsContainer = document.getElementById('cards-container');

// Manejar el envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recargar la página

  // Obtener valores de los campos
  const descripcion = document.getElementById('descripcion').value;
  const monto = document.getElementById('monto').value;
  const fecha = document.getElementById('fecha').value;
  const categoria = document.getElementById('categoria').value;
  const metodoPago = document.getElementById('metodo-pago').value;

  // Crear tarjeta
  const card = document.createElement('div');
  card.classList.add('card');

  // Asignar ícono según categoría
  let icon;
  switch (categoria) {
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
  switch (metodoPago) {
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
    <h3>${categoria}</h3>
    <p><strong>${descripcion}</strong></p>
    <p>Monto: <span>$${monto}</span></p>
    <p>Fecha: ${fecha}</p>
    <p>Método de Pago: <strong>${metodoPagoTexto}</strong></p>
    <button class="delete-btn">Eliminar</button>
  `;

  // Agregar evento al botón "Eliminar"
  const deleteButton = card.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    cardsContainer.removeChild(card); // Eliminar la tarjeta del contenedor
  });

  // Agregar tarjeta al contenedor
  cardsContainer.appendChild(card);

  // Limpiar formulario
  form.reset();
});
