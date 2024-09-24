const cart = [];
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cart.push('Livro');
        cartCount++;
        document.querySelector('#cart-icon span').textContent = cartCount;
    });
});

document.querySelector('#cart-icon').addEventListener('click', () => {
    document.querySelector('#book-list').style.display = 'none';
    document.querySelector('#cart-page').style.display = 'block';
});

document.querySelector('#home-link').addEventListener('click', () => {
    document.querySelector('#book-list').style.display = 'block';
    document.querySelector('#cart-page').style.display = 'none';
});

document.querySelector('#purchase-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#success-message').style.display = 'block';
    cart.length = 0;
    cartCount = 0;
    document.querySelector('#cart-icon span').textContent = cartCount;
    setTimeout(() => {
        document.querySelector('#success-message').style.display = 'none';
    }, 3000);
});