const axios = require("../plugins/axios");
const { createCustomError } = require("../errors/CustomError");
const Response = require("../builder/Response");

const getItemsByQuery = async (req, res, next) => {
  const { q } = req.query;
  if (!q) return next(createCustomError("No existe parametro", 404));
  try {
    const response = await axios(`/sites/MLA/search?q=${q}`);
    const { results, filters } = response.data;

    if (!results.length) {
      return next(createCustomError(`No items`, 404));
    }

    const categories = getCategories(filters);
    const buildResponse = new Response()
      .setCategories(categories)
      .setItems(response.data.results)
      .build();
    return res.status(200).json(buildResponse);
  } catch (error) {
    const { status, data } = error.response;
    next(createCustomError(data.error, status));
  }
};

function getCategories(filters) {
  const categories = filters.find((filter) => filter.id === "category");
  return categories
    ? categories.values[0].path_from_root.map((category) => category.name)
    : [];
}

const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data: item } = await axios(`/items/${id}`);
    // no todos los productos tienen una descripción
    const { data } = await axios(`/items/${id}/description`);

    const buildResponse = new Response()
      .setItem({
        ...item,
        description: data.plain_text,
      })
      .build();

    res.json(buildResponse);
  } catch (error) {
    const { status, data } = error.response;
    return next(createCustomError(data.error, status));
  }
};

module.exports = { getItemsByQuery, getItemById };
