export function formatToHex(r, g, b) {
  let rHex = r < 10 ? '0' + r.toString(16) : r.toString(16);
  let gHex = g < 10 ? '0' + g.toString(16) : g.toString(16);
  let bHex = b < 10 ? '0' + b.toString(16) : b.toString(16);
  return '#' + rHex + gHex + bHex;
}

export function isLight(r, g, b) {
  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance > 0.5) {
    return false;
  } else {
    return true;
  }
}

export function formatDate(date) {
  return date.toDateString();
}

export function convertCentimetersToMeters(value) {
  return value / 100;
}

export function randomBetween2Values(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
