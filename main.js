const gallery = document.getElementsByClassName("gallery")[0];
const boxes = gallery.getElementsByClassName("box");
const totalprice = document.getElementById("total-price");

let total = 708;

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const plus = box.getElementsByClassName("plus")[0];
    const minus = box.getElementsByClassName("minus")[0];
    const quantity = box.querySelector("input.quantity");
    const deleteBtn = box.getElementsByClassName("deleteBtn")[0];
    const heartIcon = box.querySelector(".fa-regular.fa-heart");
    const price = parseInt(box.getElementsByClassName("price")[0].innerText);

    plus.addEventListener("click", () => {
        quantity.value++;
        total += price;
        updateTotalPrice();
    });

    minus.addEventListener("click", () => {
        if (quantity.value > 0) {
            quantity.value--;
            total -= price;
            updateTotalPrice();
        }
    });

    deleteBtn.addEventListener("click", () => {
        box.remove();
        total -= price * quantity.value;
        updateTotalPrice();
    });

    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("fa-heart");
        heartIcon.classList.toggle("fa-regular");
    });
}


// total price and alert if the shopping card is empty
function updateTotalPrice() {
    if (total === 0) {
        alert("Shopping cart is empty!");
    }
    totalprice.innerText = `Total Price: ${total} dt`;
}



// this section i add it form chatgbt just to add the function cooler !!! :)
$(document).ready(function() {
    const quantityInputs = document.querySelectorAll('.quantity');
    const quantity1 = document.querySelector('.quantity1');

    // Update quantity1 span initially
    updateQuantity1();

    // Add event listeners to all quantity inputs
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateQuantity1);
    });

    // Add event listeners to plus and minus buttons to update quantity1
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach(button => {
        button.addEventListener('click', updateQuantity1);
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', updateQuantity1);
    });

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the parent container of the deleted item
            button.parentElement.remove();
            // Update the total quantity
            updateQuantity1();
        });
    });

    function updateQuantity1() {
        let sum = 0;
        quantityInputs.forEach(input => {
            sum += parseInt(input.value);
        });
        quantity1.innerText = sum;
    }
});