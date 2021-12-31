const { CustomAPIError } = require("../errors/CustomError");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: true, msg: err.message });
  }
  return res
    .status(500)
    .json({ error: true, msg: "Something went wrong, please try again!" });
};

module.exports = errorHandlerMiddleware;
