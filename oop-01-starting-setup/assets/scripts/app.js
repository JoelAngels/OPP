class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "PS5",
      "https://cdn.vox-cdn.com/thumbor/nEmwnn3PJyXqoKcr37D3T1o8AiQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21991383/vpavic_4261_20201023_0058.jpg",
      "PS5 ON 50% OFF SALE !!!0",
      `$500`
    ),
    new Product(
      "Apex legends Merchandise",
      "//cdn.shopify.com/s/files/1/0256/5505/0326/products/AL200112-1.jpg?v=1620743476",
      "PS5 ON 50% OFF SALE !!!0",
      `$33`,
      "APEX LEGENDS KNOCKDOWN HOODED PULLOVER"
    ),
    new Product(
      "Xbox Series X",
      "https://image.shutterstock.com/image-photo/ljubljana-slovenia-2020-march-18-600w-1677370546.jpg",
      "PS5 ON 50% OFF SALE !!!0",
      `$500`,
      "Microsoft Xbox Series X"
    ),
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
