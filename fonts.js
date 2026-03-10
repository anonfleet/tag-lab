/* Font loading - Google Fonts + custom upload */
(function (window) {
  var FONT_LIST = [];
  var loadedFonts = {};
  var customFonts = {};
  var FALLBACK_FONTS = ["Roboto","Open Sans","Lato","Montserrat","Oswald","Raleway","Poppins","Bebas Neue","Playfair Display","Source Sans Pro","Ubuntu","Nunito","Merriweather","Barlow","Inter","Fjalla One","Anton","Rubik","Work Sans","PT Sans","Roboto Condensed","Dancing Script","Pacifico","Lobster","Bangers","Righteous","Archivo","Noto Sans","Mukta","Quicksand","Karla","Inconsolata","Fira Sans","Oxygen","Crimson Text","Libre Baskerville","Libre Franklin","IBM Plex Sans","IBM Plex Serif","Space Grotesk","Space Mono","JetBrains Mono","DM Sans","DM Serif Display","Outfit","Syne","Sora","Clash Display","General Sans","Satoshi"];

  function parseFontMetadata(text) {
    try {
      var json = text;
      if (json.indexOf(")]}'\n") === 0) json = json.slice(5);
      else if (json.indexOf(")]}'") === 0) json = json.slice(4);
      var data = JSON.parse(json);
      var list = data.familyMetadataList || [];
      return list.map(function (f) { return f.family; }).filter(Boolean).sort();
    } catch (e) { return []; }
  }
  function loadGoogleFontsList() {
    var url = "https://fonts.google.com/metadata/fonts";
    return fetch(url).then(function (r) { return r.text(); }).then(parseFontMetadata)
      .then(function (list) {
        if (list && list.length > 0) { FONT_LIST = list; return list; }
        throw new Error("Empty list");
      })
      .catch(function () {
        return fetch("https://corsproxy.io/?" + encodeURIComponent(url))
          .then(function (r) { return r.text(); }).then(parseFontMetadata)
          .then(function (list) {
            if (list && list.length > 0) { FONT_LIST = list; return list; }
            throw new Error("Empty");
          })
          .catch(function () { FONT_LIST = FALLBACK_FONTS; return FONT_LIST; });
      });
  }

  function loadGoogleFont(family) {
    if (!family || loadedFonts[family]) return Promise.resolve();
    loadedFonts[family] = true;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(family).replace(/'/g, "%27") + ":wght@400;700&display=swap";
    document.head.appendChild(link);
    return new Promise(function (resolve) {
      link.onload = resolve;
      link.onerror = resolve;
      setTimeout(resolve, 2000);
    });
  }

  function loadCustomFont(file, familyName) {
    if (!file || !familyName) return;
    var url = URL.createObjectURL(file);
    var ext = (file.name || "").split(".").pop().toLowerCase();
    var format = "opentype";
    if (ext === "ttf") format = "truetype";
    else if (ext === "woff") format = "woff";
    else if (ext === "woff2") format = "woff2";
    var style = document.createElement("style");
    style.textContent = "@font-face{font-family:\"" + familyName.replace(/"/g, "\\\"") + "\";src:url(" + url + ") format(\"" + format + "\");font-weight:400 700;}";
    document.head.appendChild(style);
    customFonts[familyName] = url;
  }

  function getFontList() { return FONT_LIST; }
  function getCustomFonts() { return customFonts; }

  window.loadGoogleFontsList = loadGoogleFontsList;
  window.loadGoogleFont = loadGoogleFont;
  window.loadCustomFont = loadCustomFont;
  window.getFontList = getFontList;
  window.getCustomFonts = getCustomFonts;
})(window);
