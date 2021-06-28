function genHTML(json) {
  if (!json || !json.tag) return "";
  const attr = getAttributes(json);
  if (isSelfCloseTag(json)) return `<${json.tag}${attr}/>`;
  const children = getChildren(json);
  return `<${json.tag}${attr}>${children}</${json.tag}>`;
}

function getAttributes(json) {
  if (!json.attributes) return "";
  let result = "";
  const keys = Object.keys(json.attributes);
  for (const key in keys)
    ({}.hasOwnProperty.call(keys, key) &&
      (result += ` ${keys[key]}="${json.attributes[keys[key]]}"`)); // attr='value'
  return result;
}

function getChildren(json) {
  if (!json.children) return "";
  let result = "";
  for (const key in json.children)
    ({}.hasOwnProperty.call(json.children, key) &&
      ("object" == typeof json.children[key]
        ? (result += genHTML(json.children[key]))
        : (result += json.children[key])));
  return result;
}

function isSelfCloseTag(json) {
  const selfCloseTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
    "command",
    "keygen",
    "menuitem",
  ];
  return selfCloseTags.indexOf(json.tag) > -1;
}

function getI18n(json, langFile) {
  let jsonString = JSON.stringify(json); //json to string

  for (const [key, value] of Object.entries(langFile)) {
    jsonString = jsonString.replace(key, value); //search key and replace to value
  }
  return JSON.parse(jsonString); //string to json
}
