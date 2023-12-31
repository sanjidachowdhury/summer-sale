let total = 0;

function handleClick(element) {
    const selectedProductsContainer = document.getElementById('selected-products');

    // Find the h2 element within the clicked card
    const productTitleElement = element.querySelector('.product-title');

    // Get the inner text of the h2 element
    const productTitle = productTitleElement.innerText;

    // Create a new list item and add the product title to it
    const li = document.createElement('li');
    li.innerText = productTitle;

    // Append the list item to the selected products container
    selectedProductsContainer.appendChild(li);


    // price part------------------------------------------

    const priceElement = element.querySelector('.price-amount')
    const price = priceElement.innerText

    total = parseInt(total) + parseInt(price)

    //    store value in total price 

    const firstTotal = document.getElementById('total').innerText = total;


    // Calculate discount and update total price with discount
    const discountThreshold = 200;
    const discountPercentage = 0.2; // 20%

    if (total > discountThreshold) {
        const discountAmount = total * discountPercentage;
        const discountedTotal = total - discountAmount;

        // Display discount and discounted total
        const discountElement = document.getElementById('discount');
        const discountedTotalElement = document.getElementById('discounted-total');

        discountElement.innerText = discountAmount.toFixed(2) + ' TK';
        discountedTotalElement.innerText = discountedTotal.toFixed(2) + ' TK';
    } else {
        // No discount, reset discount and discounted total
        const discountElement = document.getElementById('discount');
        const discountedTotalElement = document.getElementById('discounted-total');

        discountElement.innerText = '00.00 TK';
        discountedTotalElement.innerText = total.toFixed(2) + ' TK';
    }

    // Enable or disable buttons based on total price
    const applyButton = document.querySelector('.apply-button');
    const purchaseButton = document.querySelector('.purchase-button');

    if (total > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }

    if (total > discountThreshold) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
}



// home page from modal

function goToHomePage() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

// Add event listener to the "Go Home" button
const goHomeButton = document.getElementById('home-page');
goHomeButton.addEventListener('click', goToHomePage);
