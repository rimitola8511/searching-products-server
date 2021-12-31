const axios = require("../plugins/axios");
const Response = require("../builder/Response");

const findCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await axios(`/categories/${id}`);
    const { path_from_root } = response.data;

    if (response.data) {
      const responseBuilder = new Response()
        .setCategories(path_from_root.map((category) => category.name))
        .build();
      return res.status(200).json(responseBuilder);
    }
  } catch (error) {
    const { status, data } = error.response;
    next(createCustomError(data.error, status));
  }
};

module.exports = { findCategoryById };
