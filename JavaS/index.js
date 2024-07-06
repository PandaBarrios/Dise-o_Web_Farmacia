// Array para almacenar los farmacos del carrito
let cart = [];

// Función para actualizar la visualización del carrito
function updateCart() {

  // Obtiene referencias a los elementos del carrito en el DOM
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Limpia el contenido del carrito para no duplicar
  cartItems.innerHTML = '';
  let total = 0;

  // Recorre todos los elementos en el carrito
  cart.forEach(item => {

    // Se crea un elemento de lista para mostrar cada elemento del carrito
    const li = document.createElement('li');

    // Muestra el nombre, cantidad y precio del producto en el elemento de lista
    li.textContent = `${item.name} x ${item.quantity} - ₡${item.price * item.quantity}`;

    // Creamos un botón para eliminar el producto del carrito
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => removeFromCart(item));
    
    // Agregamos el botón de eliminar al elemento de lista y luego añadimos la lista al carrito
    li.appendChild(removeButton);
    cartItems.appendChild(li);

    // Se calcula el total acumulando el precio total de todos los farmacos en el carrito
    total += item.price * item.quantity;
  });

  // Actualiza el total del carrito en la página
  cartTotal.textContent = `₡${total}`;
}

// Función para agregar un farmaco al carrito
function addToCart(name, price) {

  // Buscamos si el farmaco ya está en el carrito
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {

    // Si el farmaco ya está en el carrito, incrementamos su cantidad
    existingItem.quantity++;
  } else {

    // Si el farmaco no está en el carrito, lo añadimos con cantidad 1
    cart.push({ name, price, quantity: 1 });
  }

  // Actualiza el carrito en la página y almacena el carrito en el almacenamiento local
  updateCart();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para eliminar un farmaco del carrito
function removeFromCart(item) {

  // Buscamos el índice del farmaco en el carrito
  const index = cart.indexOf(item);
  if (index !== -1) {

    // Si encontramos el farmaco, lo eliminamos del carrito
    cart.splice(index, 1);

    // Actualiza el carrito en la página y almacenamos el carrito en el almacenamiento local
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {

  // Obtenemos el carrito almacenado en el almacenamiento local
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {

    // Si hay un carrito almacenado, lo carga y actualiza la visualización del carrito en la página
    cart = JSON.parse(storedCart);
    updateCart();
  }

  // Obtiene todos los botones de "Agregar al carrito" en la página y añade un event listener a cada uno
  const addToCartButtons = document.querySelectorAll('.Producto .Agregar');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {

      // Al hacer clic en un botón de "Agregar al carrito", obtiene los datos del farmaco y lo agregamos al carrito
      const product = button.closest('.Producto');
      const name = product.getAttribute('data-name');
      const price = parseFloat(product.getAttribute('data-price'));
      addToCart(name, price);
    });
  });

  // Añadimos un event listener al botón de "Finalizar Compra" para mostrar un mensaje de compra finalizada y limpiar el carrito
  document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra finalizada. Total: ' + document.getElementById('cart-total').textContent);
    cart = [];
    updateCart();
    localStorage.removeItem('cart');
  });
});
