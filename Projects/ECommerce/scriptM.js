document.addEventListener("DOMContentLoaded", function () {
    const url = 'https://api.freeapi.app/api/v1/public/randomproducts/product/random';
    let username = new URLSearchParams(window.location.search).get("username");
    const greeting = document.querySelector(".greeting");
    
    const products = document.querySelector(".products");
    const cartAdded = document.querySelector(".cartAdded");
    const cartH1 = document.querySelector(".cartH1");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const closeCart = document.querySelector(".closeCart");
    const cartCheckout = document.querySelector(".CartCheckout");

    greeting.textContent = `Welcome ${username} to Our ECommerce Store`;


    // Navigation
    document.querySelector(".home").onclick = () => window.location.href = `indexM.html?username=${username}`;
    document.querySelector(".productsNav").onclick = () => window.location.href = `products.html?username=${username}`;
    document.querySelector(".cartNav").onclick = () => window.location.href = `cart.html?username=${username}`;
    document.querySelector(".aboutNav").onclick = () => window.location.href = `about.html?username=${username}`;
    document.querySelector(".contactNav").onclick = () => window.location.href = `contact.html?username=${username}`;
    document.querySelector(".privacyPolicy").onclick = () => window.location.href = `privacy.html?username=${username}`;
    document.querySelector(".terms").onclick = () => window.location.href = `terms.html?username=${username}`;

    let loginLogout = document.querySelector(".loginLogout");
    const nameDrop = document.querySelector(".nameDrop");
    const menu = document.querySelector(".dropBtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const loadMore = document.querySelector(".loadMore");

    // Dropdown menu

    menu.addEventListener("click", function () {
        const dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

    });
    nameDrop.textContent = username ? "Welcome " + username : "Welcome Guest";
    loginLogout.textContent = username ? "Logout" : "Login";
    loginLogout.addEventListener("click", function () {
        if (username) {
            // Logout logic
            username = null;
            window.location.href = "index.html";
        } else {
            // Redirect to login page
            window.location.href = "index.html";
        }
    });
    document.addEventListener("click", function (event) {
        const dropdownContent = document.querySelector(".dropdown-content");
        if (!event.target.closest(".dropdown") && dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });


    // Cart data
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartfind = cart.find(item => item.username === username);

    // Hide cart modal initially
    cartAdded.style.display = "none";

    // Helper: Show modal
    function showCartModal(message) {
        header.style.filter = "blur(5px)";
        main.style.filter = "blur(5px)";
        footer.style.filter = "blur(5px)";
        cartAdded.style.display = "flex";
        cartH1.textContent = message;
    }

    // Helper: Hide modal
    function hideCartModal() {
        header.style.filter = "none";
        main.style.filter = "none";
        footer.style.filter = "none";
        cartAdded.style.display = "none";
    }

    // Modal button listeners (only once)
    cartCheckout.onclick = () => window.location.href = `cart.html?username=${username}`;
    closeCart.onclick = hideCartModal;

    // Render products
    for (let i = 0; i < 12; i++) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(dat => {
                const data = dat.data;
                // Create product card
                const productCard = document.createElement("div");
                productCard.className = "productCard";
                productCard.tabIndex = 0; // For accessibility

                // Product image
                const productThumbnail = document.createElement("img");
                productThumbnail.src = data.thumbnail;
                productThumbnail.alt = data.title;

                // Product info
                const productName = document.createElement("h3");
                productName.textContent = data.title;

                const productBrand = document.createElement("p");
                productBrand.className = "productBrand";
                productBrand.textContent = `Brand: ${data.brand}`;

                const productCategory = document.createElement("p");
                productCategory.className = "productCategory";
                productCategory.textContent = `Category: ${data.category}`;

                const productPrice = document.createElement("p");
                productPrice.className = "productPrice";
                productPrice.textContent = `Price: $${data.price}`;

                // Add to cart button
                const addToCart = document.createElement("button");
                addToCart.className = "addToCart";
                addToCart.textContent = "Add To Cart";

                // Assemble card
                productCard.append(
                    productThumbnail,
                    productName,
                    productBrand,
                    productCategory,
                    productPrice,
                    addToCart
                );
                products.appendChild(productCard);

                // Card click handler
                productCard.addEventListener("click", function (event) {
                    event.preventDefault();
                    // Add to cart
                    if (event.target.classList.contains("addToCart")) {
                        showCartModal("Product Added to Cart");
                        // Update cart
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        let userCart = cart.find(item => item.username === username);
                        if (userCart) {
                            userCart.id.push(data.id);
                        } else {
                            cart.push({ username, id: [data.id] });
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                    } else {
                        // Go to product details
                        window.location.href = `productDetails.html?username=${username}&id=${data.id}`;
                    }
                });
            })
            .catch(error => {
                // Optionally, show a user-friendly error message
                console.error("Error fetching product:", error);
            });
    }
});