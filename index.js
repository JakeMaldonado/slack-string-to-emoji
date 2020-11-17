const emojis = require("./emojis");

module.exports = {
  stringToEmoji,
  formatString,
};

function stringToEmoji(emojiString) {
  return emojis[emojiString] || "";
}

function formatString(emojiString) {
  return emojiString
    .split(" ")
    .map((string) => {
      const emoji = stringToEmoji(string);
      return emoji === "" ? string : emoji;
    })
    .join(" ");
}
