const btn = document.querySelectorAll('.add-to-cart');
const cartBtn = document.querySelector('.shopping-cart');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.js-cart-close');

btn.forEach(function(button, index) {
    button.addEventListener('click', function(e) {
        var btnItem = e.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector('img').src;
        var productName = product.querySelector('.product-item-text a p').innerText;
        var productPrice = product.querySelector('.product-item-text span').innerText;
        // console.log(productImg, productName, productPrice);
        addCart(productImg, productName, productPrice);
    });
});

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement('tr');
    var cartItems = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItems.length; i++) {
        var productN = document.querySelectorAll('.product-title');
        if (productN[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã tồn tại trong giỏ hàng.");
            return;
        }
    }
    alert("Thêm sản phẩm vào giỏ hàng thành công!");
    var trContent = '<tr><td style="display: flex; align-items: center;"><img width="70px" src="' + productImg + '" alt="Áo con mèo"><span class="product-title">' + productName + '</span></td><td><span class="product-price">' + productPrice + '</span> <u>đ</u></td><td><input style="width: 30px; outline: none; text-align: center;" type="number" value="1" min="1"></td><td class="cart-delete" style="cursor: pointer; text-align: center; text-decoration: underline">Xóa</td></tr>';
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector('tbody');
    cartTable.append(addTr);

    totalPrice();
    deleteCart();
}

function totalPrice() {
    var cartItems = document.querySelectorAll('tbody tr');
    // console.log(cartItems);
    totalB = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var inputVal = cartItems[i].querySelector('input').value;
        var productPrice = cartItems[i].querySelector('.product-price').innerText;
        // console.log(inputVal, productPrice);
        totalA = inputVal * productPrice * 1000;
        totalB += totalA;
    }
    var total = document.querySelector('.price-total span');
    total.innerHTML = totalB.toLocaleString('de-DE');
    inputQuantityChange();
}

function inputQuantityChange() {
    var cartItems = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItems.length; i++) {
        var inputQuantityVal = cartItems[i].querySelector('input');
        inputQuantityVal.addEventListener('change', function() {
            totalPrice();
        })
        inputQuantityVal.addEventListener('keyup', function() {
            totalPrice();
        })
    }
}

function deleteCart() {
    var cartItems = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItems.length; i++) {
        var deleteItemBtn = document.querySelectorAll('.cart-delete');
        deleteItemBtn[i].addEventListener('click', function(e) {
            var cartDelItem = e.target;
            var cartDelItemR = cartDelItem.parentElement;
            cartDelItemR.remove();
            totalPrice();
        });
    }
}

function showCart() {
    cart.classList.add('open');
}

function hideCart() {
    cart.classList.remove('open');
}

cartBtn.addEventListener('click', showCart);
cartClose.addEventListener('click', hideCart);