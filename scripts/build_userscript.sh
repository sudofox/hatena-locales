#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

cat $DIR/../base/hatena-blog-english-template.user.js > $DIR/../out/hatena-blog-english.user.js
cat $DIR/../out/en.json >> $DIR/../out/hatena-blog-english.user.js

echo "Written to out/hatena-blog-english.user.js"