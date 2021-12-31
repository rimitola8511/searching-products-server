const currencyFormatter = ({ value, ISOLanguageCode, style, currency }) => {
  const formatter = new Intl.NumberFormat(ISOLanguageCode, {
    style,
    currency,
  });
  const formatterValue = formatter.format(Number(value));
  return formatterValue.slice(0, formatterValue.indexOf(","));
};

const getDecimalPart = (number) => {
  const numberAsString = number + "";
  const decimal = numberAsString.includes(".")
    ? Number(numberAsString.split(".")[1].substring(0, 2))
    : 0;
  return decimal;
};

const getEntirePart = (number) => Math.floor(number);

module.exports = { currencyFormatter, getDecimalPart, getEntirePart };
