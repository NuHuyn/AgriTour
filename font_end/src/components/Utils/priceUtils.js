export function parsePrice(priceString) {
  return Number(priceString.replace(/[^\d]/g, ""));
}

export const formatPrice = (value) => {
  if (isNaN(value)) return "$0";
  return `$${value.toLocaleString("en-US")}`;
};


export function calcPriceFromBase(basePrice) {
  return {
    adult: basePrice,
    child: Math.round(basePrice * 0.6),
    smallChild: Math.round(basePrice * 0.3),
    infant: 0
  };
}
