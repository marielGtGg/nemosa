export default function formatPrice(value, inCents) {
  if (inCents) value = value / 100
  return parseFloat(value).toFixed(2) +'$'
}