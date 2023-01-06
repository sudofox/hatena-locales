#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

jq -s '.[0] * .[1]' $DIR/../base/en.json $DIR/../patch/en.json > $DIR/../out/en.json

echo "Written to out/en.json"