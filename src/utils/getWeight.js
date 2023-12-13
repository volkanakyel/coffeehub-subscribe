const getWeight = (quantity) => {
  if (!quantity || typeof quantity !== "number") return "";
  return quantity < 1000 ? `${quantity}G` : `${quantity / 1000}KG`;
};
export default getWeight;
