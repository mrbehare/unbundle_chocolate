const chocolates = [
    {
        "id": 1,
        "name": "Milk",
        "price": 10
      },
      {
        "id": 2,
        "name": "Dark",
        "price": 20
      },
      {
        "id": 3,
        "name": "Nuts",
        "price": 21
      },
      {
        "id": 4,
        "name": "Raisins",
        "price": 14
      },
      {
        "id": 5,
        "name": "Olive",
        "price": 17
      },
      {
        "id": 6,
        "name": "No-Sugar",
        "price": 25
      },
      {
        "id": 7,
        "name": "Mango",
        "price": 15
      },
      {
        "id": 8,
        "name": "Orange",
        "price": 13
      },
      {
        "id": 9,
        "name": "Pista",
        "price": 15
      },
      {
        "id": 10,
        "name": "Caramel",
        "price": 18
      },
      {
        "id": 11,
        "name": "Hazelnut",
        "price": 22
      },
      {
        "id": 12,
        "name": "Coconut",
        "price": 16
      },
      {
        "id": 13,
        "name": "White",
        "price": 19
      },
      {
        "id": 14,
        "name": "Almond",
        "price": 23
      },
      {
        "id": 15,
        "name": "Cherry",
        "price": 12
      },
      {
        "id": 16,
        "name": "Mint",
        "price": 24
      },
      {
        "id": 17,
        "name": "Peanut",
        "price": 18
      },
      {
        "id": 18,
        "name": "Raspberry",
        "price": 20
      },
      {
        "id": 19,
        "name": "Lavender",
        "price": 16
      },
      {
        "id": 20,
        "name": "Strawberry",
        "price": 14
      }
   
];

const chocolateList = document.getElementById("chocolate-list");
const selectedItems = [];

chocolates.forEach(chocolate => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card";
    cardWrapper.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlCnozm26NmMV1wCJJdWJ65IXif7pYzL5fQ&usqp=CAU" alt="Chocolate Image">
        <div class="card-content">
            <h3>${chocolate.name}</h3>
            <h3>$${chocolate.price}</h3>
        </div>
        <div class="card-actions">
            <button class="btn" id="add-chocolate-${chocolate.id}">Add</button>
            <button class="remove-button" style="display: none;">Remove</button>
        </div>
    `;

    const addButton = cardWrapper.querySelector(`#add-chocolate-${chocolate.id}`);
    addButton.addEventListener("click", () => {
        if (selectedItems.length >= 8) {
            alert("You can select only 8 Chocolates per Pack");
        } else {
            selectedItems.push(chocolate);
            updateCustomPack();
        }
    });

    chocolateList.appendChild(cardWrapper);
});



const checkoutButton = document.getElementById("checkout");

checkoutButton.addEventListener("click", () => {
    if (selectedItems.length === 8) {
        alert("Your Order is placed successfully");
        setTimeout(() => {
            location.reload(); 
        }, 800); 
    } else {
        
        alert("You can only checkout when you have selected 8 chocolates.");
    }
});




const removeAllButton = document.getElementById("remove-all");
const packList = document.getElementById("pack-list");

removeAllButton.addEventListener("click", () => {
    selectedItems.length = 0; // Clear the selected items array
    updateCustomPack();
});

function removeItem(index) {
    selectedItems.splice(index, 1); // Remove the item at the specified index
    updateCustomPack();
}

function updateCustomPack() {
    packList.innerHTML = "";
    let totalPrice = 0;

selectedItems.forEach((chocolate, index) => {
    const packItem = document.createElement("li");
    packItem.textContent = `${chocolate.name} - $${chocolate.price}`;
    packItem.classList.add("pack-item"); // Add a class for styling
    totalPrice += chocolate.price;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        removeItem(index);
    });
    removeButton.classList.add("btn");
    packItem.appendChild(removeButton);
    packList.appendChild(packItem);
});


    const packQuantity = selectedItems.length;
    const packTotal = totalPrice * packQuantity;

    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("pack-quantity").textContent = packQuantity;
    document.getElementById("pack-count").textContent = packQuantity;
    document.getElementById("pack-total").textContent = packTotal;
}

updateCustomPack();






