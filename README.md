# Slack string to Emoji

### Install

Install using this command

```bash
npm i slack-emoji-to-ios
```

### Usage

stringToEmoji accepts valid slack emoji strings as params. If an emoji is not found then an empty string is returned.

```js
const stringToEmoji = require("slack-string-to-emoji");

const emoji = stringToEmoji(":smile:"); // will return 😄
const emoji = stringToEmoji(":abcdefg:"); // will return ""
```

### Emoji's not included

:person_with_pouting_face:  
:person_with_pouting_face:  
:person_frowning:  
:person_frowning:
:person_with_blond_hair:
