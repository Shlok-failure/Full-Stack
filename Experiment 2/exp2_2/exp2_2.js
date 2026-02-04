const products = [
    { name: "Wireless Headphones", price: "$129.99", category: "electronics" },
    { name: "Cotton T-Shirt", price: "$24.99", category: "clothing" },
    { name: "Bluetooth Speaker", price: "$89.99", category: "electronics" },
    { name: "Denim Jeans", price: "$59.99", category: "clothing" }
];

const grid = document.getElementById('productGrid');
const filter = document.getElementById('categoryFilter');

function displayProducts(filteredList) {
    grid.innerHTML = "";
    
    filteredList.forEach(item => {
        const card = `
            <div class="card">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <span class="tag ${item.category}">${item.category}</span>
            </div>
        `;
        grid.innerHTML += card;
    });
}

filter.addEventListener('change', (e) => {
    const selected = e.target.value;
    
    if (selected === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === selected);
        displayProducts(filtered);
    }
});


displayProducts(products);
