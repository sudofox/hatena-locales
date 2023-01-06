#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

# Pull locale files from Hatena

# Blog
echo "Pulling blog locale files..."
curl -s https://cdn.blog.st-hatena.com/js/texts-en.js > $DIR/../original/cdn.blog.st-hatena.com/js/texts-en.js
curl -s https://cdn.blog.st-hatena.com/js/texts-ja.js > $DIR/../original/cdn.blog.st-hatena.com/js/texts-ja.js

JSON_JP=$(tail -n1 $DIR/../original/cdn.blog.st-hatena.com/js/texts-ja.js | grep -Po "{.*" | sed 's/;$//')
JSON_EN=$(tail -n1 $DIR/../original/cdn.blog.st-hatena.com/js/texts-en.js | grep -Po "{.*" | sed 's/;$//')

# prettify the jsons and put them into ./base/<lang>.json
echo "$JSON_JP" | jq . > $DIR/../base/ja.json
echo "$JSON_EN" | jq . > $DIR/../base/en.json