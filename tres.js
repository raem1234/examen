// Inicialización de variables para el carrito, la cantidad de productos en el carrito y el total del carrito.
let cart = [];
let cartCount = 0;
let cartTotal = 0;

/**
 * Función para agregar un producto al carrito.
 * @param {string} productName - Nombre del producto.
 * @param {number} productPrice - Precio del producto.
 */
function addToCart(productName, productPrice) {
    // Agrega un objeto con el nombre y el precio del producto al carrito.
    cart.push({ name: productName, price: productPrice });
    
    // Incrementa la cantidad de productos en el carrito.
    cartCount++;
    
    // Suma el precio del producto al total del carrito.
    cartTotal += productPrice;
    
    // Actualiza el contador del carrito en la interfaz de usuario.
    document.getElementById('cart-count').innerText = cartCount;
    
    // Muestra el modal de confirmación.
    showConfirmationModal();
}

/**
 * Función para mostrar el modal de confirmación.
 */
function showConfirmationModal() {
    // Muestra el modal quitando la clase 'hidden'.
    document.getElementById('confirmation-modal').classList.remove('hidden');
    
    // Cierra el modal después de 2 segundos.
    setTimeout(() => {
        closeConfirmationModal();
    }, 2000);
}

/**
 * Función para cerrar el modal de confirmación.
 */
function closeConfirmationModal() {
    // Oculta el modal agregando la clase 'hidden'.
    document.getElementById('confirmation-modal').classList.add('hidden');
}

// Agrega un evento de click al botón del carrito para mostrar el modal del carrito.
document.getElementById('cart-button').addEventListener('click', () => {
    showCartModal();
});

/**
 * Función para mostrar el modal del carrito.
 */
function showCartModal() {
    // Obtiene el contenedor de los elementos del carrito.
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Limpia el contenedor de los elementos del carrito.
    cartItemsContainer.innerHTML = '';
    
    // Itera sobre los elementos del carrito y crea elementos HTML para cada uno.
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        
        // Agrega el elemento del producto al contenedor del carrito.
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Actualiza el total del carrito en la interfaz de usuario.
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
    
    // Muestra el modal del carrito quitando la clase 'hidden'.
    document.getElementById('cart-modal').classList.remove('hidden');
}

/**
 * Función para cerrar el modal del carrito.
 */
function closeCartModal() {
    // Oculta el modal del carrito agregando la clase 'hidden'.
    document.getElementById('cart-modal').classList.add('hidden');
}

/**
 * Función para eliminar un producto del carrito.
 * @param {number} index - Índice del producto en el carrito.
 */
function removeFromCart(index) {
    // Resta el precio del producto del total del carrito.
    cartTotal -= cart[index].price;
    
    // Decrementa la cantidad de productos en el carrito.
    cartCount--;
    
    // Elimina el producto del carrito usando su índice.
    cart.splice(index, 1);
    
    // Actualiza el contador del carrito en la interfaz de usuario.
    document.getElementById('cart-count').innerText = cartCount;
    
    // Muestra el modal del carrito actualizado.
    showCartModal();
}
