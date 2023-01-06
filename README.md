# sudofox/hatena-locales

Some tools to try to make Hatena sites (currently, only Hatena Blog) more usable.

It's my hope that I can package up localizations in a way that's easy for Hatena to import.

A few times over the years, I've written in asking if they'd be willing to let me submit localization updates, but I generally get turned down with the justification that they are no longer targeting an international audience.

But to heck with it, I'll do it anyway.

## usage

Most of this repo works with some clever `jq` commands I've written. The translated stuff can be found in `patch/en.json`.

- `./scripts/pull_original.sh` will pull the active Hatena Blog locale files, and then parse them to extract the JSON data.
- `./scripts/find_untranslated.sh` will compare the English and Japanese locale files, merge in any object with the same top-level key in patch/en.json, and then find any keys that are present in the English file but not the Japanese file.

