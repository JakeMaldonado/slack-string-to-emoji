const emojis = require("./emojis");

module.exports = stringToEmoji;

function stringToEmoji(emojiString) {
  return emojis[emojiString] || "";
}
