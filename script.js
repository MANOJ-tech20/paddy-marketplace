
const searchBox = document.getElementById("paddySearch");
const products = document.querySelectorAll(".product");
const clearButton = document.getElementById("clearSearch");

// Search paddy products
searchBox.addEventListener("input", function () {
    const searchText = searchBox.value.toLowerCase().trim();

    products.forEach(function (product) {
        const productText = product.innerText.toLowerCase();

        if (productText.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// Clear the search
clearButton.addEventListener("click", function () {
    searchBox.value = "";

    products.forEach(function (product) {
        product.style.display = "block";
    });
});
