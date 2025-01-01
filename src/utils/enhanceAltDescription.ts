export function enhanceAltDescription(string) {
  if (string.length <= 50) {
    return string;
  } else {
    const truncatedString = string.slice(0, 50 - 3) + "...";
    return truncatedString;
  }
}
