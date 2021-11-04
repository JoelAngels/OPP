class Product {
  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

//Renders are single product Element
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src = "${this.product.imageUrl}" alt = "${this.product.title}"/>
        <div class = "product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
    return prodEl;
  }
}
class ProductList {
  products = [
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
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
