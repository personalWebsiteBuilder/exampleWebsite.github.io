export function capitalizeAllFirstLetters(str) {
  let text = str;
  text = text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  return text;
}

export function capitalizeFistLetter(str) {
  let word = str;
  word = word.substring(0, 1).toUpperCase() + word.substring(1, str.length);
  return word;
}

export function capitalizeAllLetters(str) {
  return str.toUpperCase();
}
