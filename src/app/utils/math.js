function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPostShape() {
  return `${getRandomInt(10, 20)}% ${getRandomInt(20, 30)}% ${getRandomInt(
    20,
    30
  )}% ${getRandomInt(10, 20)}% / ${getRandomInt(10, 20)}% ${getRandomInt(
    10,
    20
  )}% ${getRandomInt(20, 30)}% ${getRandomInt(20, 30)}%`;
}

export function getRandomLogoShape() {
  return `${getRandomInt(20, 30)}% ${getRandomInt(30, 70)}% ${getRandomInt(
    30,
    70
  )}% ${getRandomInt(20, 30)}% / ${getRandomInt(20, 30)}% ${getRandomInt(
    20,
    30
  )}% ${getRandomInt(30, 70)}% ${getRandomInt(30, 70)}%`;
}
