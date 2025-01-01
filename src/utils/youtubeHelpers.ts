export function getYoutubeVideoId(url) {
  // Extract the video ID from the URL using a regular expression
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);

  // If a match is found, return the video ID
  if (match && match[7].length === 11) {
    return match[7];
  } else {
    // If no match is found, return null or throw an error
    return null;
  }
}
