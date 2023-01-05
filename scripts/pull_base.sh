#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

# Pull locale files from Hatena

# Blog
echo "Pulling blog locale files..."
curl -s https://cdn.blog.st-hatena.com/js/texts-en.js > $DIR/../base/cdn.blog.st-hatena.com/js/texts-en.js
curl -s https://cdn.blog.st-hatena.com/js/texts-ja.js > $DIR/../base/cdn.blog.st-hatena.com/js/texts-ja.js
