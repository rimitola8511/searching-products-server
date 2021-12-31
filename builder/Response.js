const Item = require("./Item");

class Response {
  AUTHOR_DATA = {
    author: {
      name: "Ricardo",
      lastName: "Imitola R.",
    },
  };
  constructor() {}

  setCategories(categories) {
    this.categories = categories;
    return this;
  }

  setItems(items) {
    const formattedItems = items.map(
      ({
        address,
        condition,
        currency_id,
        id,
        price,
        title,
        thumbnail,
        shipping,
      }) =>
        new Item()
          .setId(id)
          .setTitle(title)
          .setPrice({ currency_id, price })
          .setPicture(thumbnail)
          .setCondition(condition)
          .setFreeShepping(shipping.free_shipping)
          .setAddress(!!address ? address.state_name : "")
    );
    this.items = formattedItems;
    return this;
  }

  setItem({
    condition,
    currency_id,
    id,
    price,
    title,
    thumbnail,
    shipping,
    sold_quantity,
    category_id,
    description,
  }) {
    this.item = new Item()
      .setId(id)
      .setTitle(title)
      .setPrice({ currency_id, price })
      .setPicture(thumbnail)
      .setCondition(condition)
      .setFreeShepping(shipping.free_shipping)
      .setSoldQuantity(sold_quantity)
      .setCategory(category_id)
      .setDescription(description);
    return this;
  }

  build() {
    return {
      AUTHOR_DATA: this.AUTHOR_DATA,
      categories: this.categories,
      items: this.items,
      item: this.item,
    };
  }
}

module.exports = Response;
