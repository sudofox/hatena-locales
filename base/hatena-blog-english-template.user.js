// ==UserScript==
// @name        Inject updated Hatena Blog English locale strings
// @namespace   https://github.com/sudofox
// @match       https://blog.hatena.ne.jp/*
// @grant       none
// @version     1.02
// @author      sudofox
// @description 1/6/2023, 1:59:50 PM
// @run-at document-start
// ==/UserScript==

window.addEventListener("beforescriptexecute", function (event) {
  var originalScript = event.target;
  if (/\/texts-en\.js/.test(originalScript.src)) {
    originalScript.remove();
    injectLocales();
    event.preventDefault();
  }
});

function injectLocales() {
  window.__hatena_locale_texts__ = { en: newLocales };
}
newLocales = 