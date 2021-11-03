const productList = {
  products: [
    {
      title: "Apex legends Merchandise",
      imageUrl:
        "//cdn.shopify.com/s/files/1/0256/5505/0326/products/AL200112-1.jpg?v=1620743476",
      price: "$33:00",
      description: "APEX LEGENDS KNOCKDOWN HOODED PULLOVER",
    },
    {
      title: "Xbox Series X",
      imageUrl:
        "https://image.shutterstock.com/image-photo/ljubljana-slovenia-2020-march-18-600w-1677370546.jpg",
      price: "$500:00",
      description: "Microsoft Xbox Series X",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src = "${prod.imageUrl}" alt = "${prod.title}"/>
        <div class = "product-item__content">
            <h2> ${prod.title}</h2>
            <h2> ${prod.price}</h2>
            <p> ${prod.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
