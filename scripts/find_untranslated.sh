#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

JP_DATA=$(jq -r '. | keys[] as $k | "\($k), \(.[$k] | .value)"' base/ja.json | sort)
EN_DATA=$(jq -r '. | keys[] as $k | "\($k), \(.[$k] | .value)"' <(jq -s '.[0] * .[1]' base/en.json patch/en.json) | sort)

# with comm, find the keys that are in both files
comm -12 <(echo "$JP_DATA") <(echo "$EN_DATA")

