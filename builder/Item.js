const {
  currencyFormatter,
  getDecimalPart,
  getEntirePart,
} = require("../utils");

class Item {
  constructor() {
    this.id = 0;
    this.title = "";
    this.price = {};
    this.picture = "";
    this.condition = "";
    this.free_shipping = false;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setPrice({ currency_id, price }) {
    this.price = {
      currency: currency_id,
      amount: getEntirePart(price),
      decimals: getDecimalPart(price),
    };
    return this;
  }

  setPicture(picture) {
    this.picture = picture;
    return this;
  }

  setCondition(condition) {
    this.condition = condition;
    return this;
  }

  setFreeShepping(free_shipping) {
    this.free_shipping = free_shipping;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setSoldQuantity(sold_quantity) {
    this.sold_quantity = sold_quantity;
    return this;
  }

  setCategory(category_id) {
    this.category_id = category_id;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  build() {
    return new Item({
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
      address,
      sold_quantity,
      category_id,
      description,
    });
  }
}

module.exports = Item;
