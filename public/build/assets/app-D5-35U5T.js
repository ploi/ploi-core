const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConfirmTwoFactorAuthentication-DrNO90so.js","assets/TextDivider-CL8xB3Bn.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/FormInput-Bs_ifW0x.js","assets/Button-0Ed1072L.js","assets/Container-EuHAUh3h.js","assets/Email-BQOmBAwI.js","assets/notification-BN58Miv9.js","assets/Login-C6xt95Ek.js","assets/PasswordCreation-DpmNxyid.js","assets/Register-D6IFpGux.js","assets/Reset-Tl7gXKvN.js","assets/InstallationIncomplete-CLpvpVct.js","assets/Index-CVyK-kdx.js","assets/TopBar-CQjfQbyS.js","assets/TabBar-DB2oos2Z.js","assets/MainLayout-BZWcrUEI.js","assets/IconStorage-BvvMTsrR.js","assets/Article-CybjCiVg.js","assets/TopBar-C2tIOMFl.js","assets/EmptyImage-Bw9ahsy7.js","assets/ModalContainer-DBowiEai.js","assets/Form-Qi93-WYo.js","assets/FormTextarea-Bj_6rzOF.js","assets/SettingsSegment-DOUGBpjr.js","assets/SettingsLayout-CPMnYBNV.js","assets/Tabs-Dp_xQgvi.js","assets/Index-BZrmF3M1.js","assets/Show-DMTZPKBX.js","assets/403-ClD4KL_u.js","assets/404-BOXc_jNi.js","assets/Privacy-DXWUli6r.js","assets/Terms-CNXwR8c8.js","assets/Billing-CtTvssrK.js","assets/TopBar-BhQpUwMC.js","assets/IconArrowDown-Bzzgmxdk.js","assets/FormSelect-Dj1RweYJ.js","assets/TableData-BpYwfCyG.js","assets/confirm-DZk0atxQ.js","assets/BillingError-gSAC0_DW.js","assets/Index-oMteJjgO.js","assets/Integrations-BpVFZ027.js","assets/Security--hJlP1OV.js","assets/TwoFactorAuthentication-C8Yf3anS.js","assets/Settings-Dp9W34Y4.js","assets/Index-BTHnYt3h.js","assets/TopBar-CGk52dsv.js","assets/DropdownListItemButton-DxHG3O-A.js","assets/Settings-R9bgfWXI.js","assets/Pagination-Buyxx4pV.js","assets/Tabs-DyZH76rg.js","assets/Show-CW6DgWhF.js","assets/Aliases-DCWJX6is.js","assets/TopBar-BPOfBYb-.js","assets/Tabs-DHTFy1N1.js","assets/Apps-DQ69W_VE.js","assets/Certificates-CPeWAAQU.js","assets/Cronjobs-CR8PraGp.js","assets/Databases-CIt7SJQ4.js","assets/Dns-eGztZgND.js","assets/Index-Cj4g0-ex.js","assets/Redirects-CbXVAzxv.js","assets/Settings-LVHqC43J.js","assets/Show-D-WqYb75.js","assets/Closed-BG1g6WQD.js","assets/TopBar-BUWoAsGy.js","assets/Index-ChwnjOmS.js","assets/Show-uLoxEU6h.js"])))=>i.map(i=>d[i]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/build/" + dep;
};
const seen$2 = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p$1) => Promise.resolve(p$1).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen$2) return;
      seen$2[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k2) {
    var d = Object.getOwnPropertyDescriptor(n, k2);
    Object.defineProperty(a, k2, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k2];
      }
    });
  });
  return a;
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect) return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString2 = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag2 = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen2) {
    var opts = options || {};
    if (has2(opts, "quoteStyle") && !has2(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray2(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen2 === "undefined") {
      seen2 = [];
    } else if (indexOf(seen2, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen2 = $arrSlice.call(seen2);
        seen2.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has2(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen2);
      }
      return inspect_(value, opts, depth + 1, seen2);
    }
    if (typeof obj === "function" && !isRegExp2(obj)) {
      var name = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol2(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
      }
      s += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s += "...";
      }
      s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s;
    }
    if (isArray2(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap2(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key2) {
          mapParts.push(inspect(key2, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet2(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber2(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean2(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString2(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate2(obj) && !isRegExp2(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag2 = !isPlainObject2 && toStringTag2 && Object(obj) === obj && toStringTag2 in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag2 || protoTag ? "[" + $join.call($concat.call([], stringTag2 || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag2 || !(typeof obj === "object" && (toStringTag2 in obj || typeof obj[toStringTag2] !== "undefined"));
  }
  function isArray2(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate2(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp2(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString2(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber2(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean2(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol2(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  var hasOwn2 = Object.prototype.hasOwnProperty || function(key2) {
    return key2 in this;
  };
  function has2(obj, key2) {
    return hasOwn2.call(obj, key2);
  }
  function toStr(obj) {
    return objectToString2.call(obj);
  }
  function nameOf(f) {
    if (f.name) {
      return f.name;
    }
    var m2 = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m2) {
      return m2[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap2(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isSet2(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m2) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {
    }
    return false;
  }
  function isElement(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
  }
  function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray2(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has2(obj, i) ? inspect(obj[i], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k2 = 0; k2 < syms.length; k2++) {
        symMap["$" + syms[k2]] = syms[k2];
      }
    }
    for (var key2 in obj) {
      if (!has2(obj, key2)) {
        continue;
      }
      if (isArr && String(Number(key2)) === key2 && key2 < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key2] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key2)) {
        xs.push(inspect(key2, obj) + ": " + inspect(obj[key2], obj));
      } else {
        xs.push(key2 + ": " + inspect(obj[key2], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList) return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key2, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key2) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key2) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key2);
    return node && node.value;
  };
  var listSet = function(objects, key2, value) {
    var node = listGetNode(objects, key2);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key: key2,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key2) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key2);
  };
  var listDelete = function(objects, key2) {
    if (objects) {
      return listGetNode(objects, key2, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        var root = $o && $o.next;
        var deletedNode = listDelete($o, key2);
        if (deletedNode && root && root === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key2) {
        return listGet($o, key2);
      },
      has: function(key2) {
        return listHas($o, key2);
      },
      set: function(key2, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          /** @type {NonNullable<typeof $o>} */
          $o,
          key2,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref$1;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref$1;
  hasRequiredRef = 1;
  ref$1 = ReferenceError;
  return ref$1;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b2) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b2.length; j += 1) {
      arr[j + a.length] = b2[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind2 = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind2.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind2 = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind2, $call, args);
  };
  return callBindApplyHelpers;
}
var get$1;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get$1;
  hasRequiredGet = 1;
  var callBind = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get$1 = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get$1;
}
var getProto$1;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto$1;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto$1 = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto$1;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind2 = requireFunctionBind();
  hasown = bind2.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind2 = requireFunctionBind();
  var hasOwn2 = /* @__PURE__ */ requireHasown();
  var $concat = bind2.call($call, Array.prototype.concat);
  var $spliceApply = bind2.call($apply, Array.prototype.splice);
  var $replace = bind2.call($call, String.prototype.replace);
  var $strSlice = bind2.call($call, String.prototype.slice);
  var $exec = bind2.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn2(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn2(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn2(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn2(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap) return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
  function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        if ($m) {
          var result = $mapDelete($m, key2);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key2) {
        if ($m) {
          return $mapGet($m, key2);
        }
      },
      has: function(key2) {
        if ($m) {
          return $mapHas($m, key2);
        }
        return false;
      },
      set: function(key2, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key2, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? (
    /** @type {Exclude<import('.'), false>} */
    function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key2) {
          if (!channel.has(key2)) {
            throw new $TypeError("Side channel does not contain " + inspect(key2));
          }
        },
        "delete": function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key2);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key2);
            }
          }
          return false;
        },
        get: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key2);
            }
          }
          return $m && $m.get(key2);
        },
        has: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key2);
            }
          }
          return !!$m && $m.has(key2);
        },
        set: function(key2, value) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key2, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key2, value);
          }
        }
      };
      return channel;
    }
  ) : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel) return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key2) {
        if (!channel.has(key2)) {
          throw new $TypeError("Side channel does not contain " + inspect(key2));
        }
      },
      "delete": function(key2) {
        return !!$channelData && $channelData["delete"](key2);
      },
      get: function(key2) {
        return $channelData && $channelData.get(key2);
      },
      has: function(key2) {
        return !!$channelData && $channelData.has(key2);
      },
      set: function(key2, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key2, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var formats;
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  formats = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return formats;
}
var utils$2;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils$2;
  hasRequiredUtils = 1;
  var formats2 = /* @__PURE__ */ requireFormats();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var hexTable = function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    }
    return array;
  }();
  var compactQueue = function compactQueue2(queue4) {
    while (queue4.length > 1) {
      var item = queue4.pop();
      var obj = item.obj[item.prop];
      if (isArray2(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== "undefined") {
            compacted.push(obj[j]);
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject2 = function arrayToObject3(source, options) {
    var obj = options && options.plainObjects ? { __proto__: null } : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== "undefined") {
        obj[i] = source[i];
      }
    }
    return obj;
  };
  var merge2 = function merge3(target, source, options) {
    if (!source) {
      return target;
    }
    if (typeof source !== "object" && typeof source !== "function") {
      if (isArray2(target)) {
        target.push(source);
      } else if (target && typeof target === "object") {
        if (options && (options.plainObjects || options.allowPrototypes) || !has2.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      return [target].concat(source);
    }
    var mergeTarget = target;
    if (isArray2(target) && !isArray2(source)) {
      mergeTarget = arrayToObject2(target, options);
    }
    if (isArray2(target) && isArray2(source)) {
      source.forEach(function(item, i) {
        if (has2.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i] = merge3(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function(acc, key2) {
      var value = source[key2];
      if (has2.call(acc, key2)) {
        acc[key2] = merge3(acc[key2], value, options);
      } else {
        acc[key2] = value;
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key2) {
      acc[key2] = source[key2];
      return acc;
    }, target);
  };
  var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var limit = 1024;
  var encode2 = function encode3(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var j = 0; j < string.length; j += limit) {
      var segment = string.length >= limit ? string.slice(j, j + limit) : string;
      var arr = [];
      for (var i = 0; i < segment.length; ++i) {
        var c = segment.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats2.RFC1738 && (c === 40 || c === 41)) {
          arr[arr.length] = segment.charAt(i);
          continue;
        }
        if (c < 128) {
          arr[arr.length] = hexTable[c];
          continue;
        }
        if (c < 2048) {
          arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
          continue;
        }
        if (c < 55296 || c >= 57344) {
          arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
        arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      out += arr.join("");
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue4 = [{ obj: { o: value }, prop: "o" }];
    var refs = [];
    for (var i = 0; i < queue4.length; ++i) {
      var item = queue4[i];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);
      for (var j = 0; j < keys.length; ++j) {
        var key2 = keys[j];
        var val = obj[key2];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue4.push({ obj, prop: key2 });
          refs.push(val);
        }
      }
    }
    compactQueue(queue4);
    return value;
  };
  var isRegExp2 = function isRegExp3(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer2 = function isBuffer3(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a, b2) {
    return [].concat(a, b2);
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray2(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped.push(fn(val[i]));
      }
      return mapped;
    }
    return fn(val);
  };
  utils$2 = {
    arrayToObject: arrayToObject2,
    assign,
    combine,
    compact,
    decode,
    encode: encode2,
    isBuffer: isBuffer2,
    isRegExp: isRegExp2,
    maybeMap,
    merge: merge2
  };
  return utils$2;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify_1;
  hasRequiredStringify = 1;
  var getSideChannel = requireSideChannel();
  var utils2 = /* @__PURE__ */ requireUtils();
  var formats2 = /* @__PURE__ */ requireFormats();
  var has2 = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key2) {
      return prefix + "[" + key2 + "]";
    },
    repeat: function repeat2(prefix) {
      return prefix;
    }
  };
  var isArray2 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats2["default"];
  var defaults2 = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: utils2.encode,
    encodeValuesOnly: false,
    filter: void 0,
    format: defaultFormat,
    formatter: formats2.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
    return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter2 === "function") {
      obj = filter2(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
      obj = utils2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === "undefined") {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray2(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils2.maybeMap(obj, encoder);
      }
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else if (isArray2(filter2)) {
      objKeys = filter2;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
    if (allowEmptyArrays && isArray2(obj) && obj.length === 0) {
      return adjustedPrefix + "[]";
    }
    for (var j = 0; j < objKeys.length; ++j) {
      var key2 = objKeys[j];
      var value = typeof key2 === "object" && key2 && typeof key2.value !== "undefined" ? key2.value : obj[key2];
      if (skipNulls && value === null) {
        continue;
      }
      var encodedKey = allowDots && encodeDotInKeys ? String(key2).replace(/\./g, "%2E") : String(key2);
      var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
      sideChannel2.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel2);
      pushToArray(values, stringify2(
        value,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        allowEmptyArrays,
        strictNullHandling,
        skipNulls,
        encodeDotInKeys,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
        filter2,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults2.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats2["default"];
    if (typeof opts.format !== "undefined") {
      if (!has2.call(formats2.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format = opts.format;
    }
    var formatter = formats2.formatters[format];
    var filter2 = defaults2.filter;
    if (typeof opts.filter === "function" || isArray2(opts.filter)) {
      filter2 = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if ("indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = defaults2.arrayFormat;
    }
    if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      arrayFormat,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      commaRoundTrip: !!opts.commaRoundTrip,
      delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
      encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults2.encodeDotInKeys,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
      filter: filter2,
      format,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
    };
  };
  stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter2;
    if (typeof options.filter === "function") {
      filter2 = options.filter;
      obj = filter2("", obj);
    } else if (isArray2(options.filter)) {
      filter2 = options.filter;
      objKeys = filter2;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel2 = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key2 = objKeys[i];
      var value = obj[key2];
      if (options.skipNulls && value === null) {
        continue;
      }
      pushToArray(keys, stringify(
        value,
        key2,
        generateArrayPrefix,
        commaRoundTrip,
        options.allowEmptyArrays,
        options.strictNullHandling,
        options.skipNulls,
        options.encodeDotInKeys,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel2
      ));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return stringify_1;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var utils2 = /* @__PURE__ */ requireUtils();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var defaults2 = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils2.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
      throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(
      options.delimiter,
      options.throwOnLimitExceeded ? limit + 1 : limit
    );
    if (options.throwOnLimitExceeded && parts.length > limit) {
      throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
    }
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf("utf8=") === 0) {
          if (parts[i] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key2;
      var val;
      if (pos === -1) {
        key2 = options.decoder(part, defaults2.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key2 = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
        val = utils2.maybeMap(
          parseArrayValue(
            part.slice(pos + 1),
            options,
            isArray2(obj[key2]) ? obj[key2].length : 0
          ),
          function(encodedVal) {
            return options.decoder(encodedVal, defaults2.decoder, charset, "value");
          }
        );
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(String(val));
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray2(val) ? [val] : val;
      }
      var existing = has2.call(obj, key2);
      if (existing && options.duplicates === "combine") {
        obj[key2] = utils2.combine(obj[key2], val);
      } else if (!existing || options.duplicates === "last") {
        obj[key2] = val;
      }
    }
    return obj;
  };
  var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === "[]") {
      var parentKey = chain.slice(0, -1).join("");
      currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root = chain[i];
      if (root === "[]" && options.parseArrays) {
        obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils2.combine([], leaf);
      } else {
        obj = options.plainObjects ? { __proto__: null } : {};
        var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
        var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
        var index2 = parseInt(decodedRoot, 10);
        if (!options.parseArrays && decodedRoot === "") {
          obj = { 0: leaf };
        } else if (!isNaN(index2) && root !== decodedRoot && String(index2) === decodedRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
          obj = [];
          obj[index2] = leaf;
        } else if (decodedRoot !== "__proto__") {
          obj[decodedRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var key2 = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets.exec(key2);
    var parent = segment ? key2.slice(0, segment.index) : key2;
    var keys = [];
    if (parent) {
      if (!options.plainObjects && has2.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(parent);
    }
    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key2)) !== null && i < options.depth) {
      i += 1;
      if (!options.plainObjects && has2.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }
    if (segment) {
      if (options.strictDepth === true) {
        throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
      }
      keys.push("[" + key2.slice(segment.index) + "]");
    }
    return parseObject(keys, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    }
    var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
    var duplicates = typeof opts.duplicates === "undefined" ? defaults2.duplicates : opts.duplicates;
    if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
      throw new TypeError("The duplicates option must be either combine, first, or last");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
      decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults2.decodeDotInKeys,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
      delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
      duplicates,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
      strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults2.strictDepth,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling,
      throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
    };
  };
  parse = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? { __proto__: null } : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? { __proto__: null } : {};
    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
      var key2 = keys[i];
      var newObj = parseKeys(key2, tempObj[key2], options, typeof str === "string");
      obj = utils2.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils2.compact(obj);
  };
  return parse;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var stringify = /* @__PURE__ */ requireStringify();
  var parse2 = /* @__PURE__ */ requireParse();
  var formats2 = /* @__PURE__ */ requireFormats();
  lib = {
    formats: formats2,
    parse: parse2,
    stringify
  };
  return lib;
}
var libExports = /* @__PURE__ */ requireLib();
function isSymbol$1(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}
function noop$1() {
}
function isPrimitive(value) {
  return value == null || typeof value !== "object" && typeof value !== "function";
}
function isTypedArray$1(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
const regexpTag = "[object RegExp]";
const stringTag = "[object String]";
const numberTag = "[object Number]";
const booleanTag = "[object Boolean]";
const argumentsTag = "[object Arguments]";
const symbolTag = "[object Symbol]";
const dateTag = "[object Date]";
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const functionTag = "[object Function]";
const arrayBufferTag = "[object ArrayBuffer]";
const objectTag = "[object Object]";
const errorTag = "[object Error]";
const dataViewTag = "[object DataView]";
const uint8ArrayTag = "[object Uint8Array]";
const uint8ClampedArrayTag = "[object Uint8ClampedArray]";
const uint16ArrayTag = "[object Uint16Array]";
const uint32ArrayTag = "[object Uint32Array]";
const bigUint64ArrayTag = "[object BigUint64Array]";
const int8ArrayTag = "[object Int8Array]";
const int16ArrayTag = "[object Int16Array]";
const int32ArrayTag = "[object Int32Array]";
const bigInt64ArrayTag = "[object BigInt64Array]";
const float32ArrayTag = "[object Float32Array]";
const float64ArrayTag = "[object Float64Array]";
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack2 = /* @__PURE__ */ new Map(), cloneValue = void 0) {
  const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack2);
  if (cloned !== void 0) {
    return cloned;
  }
  if (isPrimitive(valueToClone)) {
    return valueToClone;
  }
  if (stack2.has(valueToClone)) {
    return stack2.get(valueToClone);
  }
  if (Array.isArray(valueToClone)) {
    const result = new Array(valueToClone.length);
    stack2.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack2, cloneValue);
    }
    if (Object.hasOwn(valueToClone, "index")) {
      result.index = valueToClone.index;
    }
    if (Object.hasOwn(valueToClone, "input")) {
      result.input = valueToClone.input;
    }
    return result;
  }
  if (valueToClone instanceof Date) {
    return new Date(valueToClone.getTime());
  }
  if (valueToClone instanceof RegExp) {
    const result = new RegExp(valueToClone.source, valueToClone.flags);
    result.lastIndex = valueToClone.lastIndex;
    return result;
  }
  if (valueToClone instanceof Map) {
    const result = /* @__PURE__ */ new Map();
    stack2.set(valueToClone, result);
    for (const [key2, value] of valueToClone) {
      result.set(key2, cloneDeepWithImpl(value, key2, objectToClone, stack2, cloneValue));
    }
    return result;
  }
  if (valueToClone instanceof Set) {
    const result = /* @__PURE__ */ new Set();
    stack2.set(valueToClone, result);
    for (const value of valueToClone) {
      result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack2, cloneValue));
    }
    return result;
  }
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
    return valueToClone.subarray();
  }
  if (isTypedArray$1(valueToClone)) {
    const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
    stack2.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack2, cloneValue);
    }
    return result;
  }
  if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
    return valueToClone.slice(0);
  }
  if (valueToClone instanceof DataView) {
    const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
    stack2.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack2, cloneValue);
    return result;
  }
  if (typeof File !== "undefined" && valueToClone instanceof File) {
    const result = new File([valueToClone], valueToClone.name, {
      type: valueToClone.type
    });
    stack2.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack2, cloneValue);
    return result;
  }
  if (valueToClone instanceof Blob) {
    const result = new Blob([valueToClone], { type: valueToClone.type });
    stack2.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack2, cloneValue);
    return result;
  }
  if (valueToClone instanceof Error) {
    const result = new valueToClone.constructor();
    stack2.set(valueToClone, result);
    result.message = valueToClone.message;
    result.name = valueToClone.name;
    result.stack = valueToClone.stack;
    result.cause = valueToClone.cause;
    copyProperties(result, valueToClone, objectToClone, stack2, cloneValue);
    return result;
  }
  if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
    const result = Object.create(Object.getPrototypeOf(valueToClone));
    stack2.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack2, cloneValue);
    return result;
  }
  return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack2, cloneValue) {
  const keys = [...Object.keys(source), ...getSymbols(source)];
  for (let i = 0; i < keys.length; i++) {
    const key2 = keys[i];
    const descriptor = Object.getOwnPropertyDescriptor(target, key2);
    if (descriptor == null || descriptor.writable) {
      target[key2] = cloneDeepWithImpl(source[key2], key2, objectToClone, stack2, cloneValue);
    }
  }
}
function isCloneableObject(object) {
  switch (getTag(object)) {
    case argumentsTag:
    case arrayTag:
    case arrayBufferTag:
    case dataViewTag:
    case booleanTag:
    case dateTag:
    case float32ArrayTag:
    case float64ArrayTag:
    case int8ArrayTag:
    case int16ArrayTag:
    case int32ArrayTag:
    case mapTag:
    case numberTag:
    case objectTag:
    case regexpTag:
    case setTag:
    case stringTag:
    case symbolTag:
    case uint8ArrayTag:
    case uint8ClampedArrayTag:
    case uint16ArrayTag:
    case uint32ArrayTag: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function cloneDeep(obj) {
  return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
}
function isPlainObject$2(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  const hasObjectPrototype = proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null;
  if (!hasObjectPrototype) {
    return false;
  }
  return Object.prototype.toString.call(value) === "[object Object]";
}
function isUnsafeProperty(key2) {
  return key2 === "__proto__";
}
function eq(value, other) {
  return value === other || Number.isNaN(value) && Number.isNaN(other);
}
function isEqualWith(a, b2, areValuesEqual) {
  return isEqualWithImpl(a, b2, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b2, property, aParent, bParent, stack2, areValuesEqual) {
  const result = areValuesEqual(a, b2, property, aParent, bParent, stack2);
  if (result !== void 0) {
    return result;
  }
  if (typeof a === typeof b2) {
    switch (typeof a) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined": {
        return a === b2;
      }
      case "number": {
        return a === b2 || Object.is(a, b2);
      }
      case "function": {
        return a === b2;
      }
      case "object": {
        return areObjectsEqual(a, b2, stack2, areValuesEqual);
      }
    }
  }
  return areObjectsEqual(a, b2, stack2, areValuesEqual);
}
function areObjectsEqual(a, b2, stack2, areValuesEqual) {
  if (Object.is(a, b2)) {
    return true;
  }
  let aTag = getTag(a);
  let bTag = getTag(b2);
  if (aTag === argumentsTag) {
    aTag = objectTag;
  }
  if (bTag === argumentsTag) {
    bTag = objectTag;
  }
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case stringTag:
      return a.toString() === b2.toString();
    case numberTag: {
      const x = a.valueOf();
      const y = b2.valueOf();
      return eq(x, y);
    }
    case booleanTag:
    case dateTag:
    case symbolTag:
      return Object.is(a.valueOf(), b2.valueOf());
    case regexpTag: {
      return a.source === b2.source && a.flags === b2.flags;
    }
    case functionTag: {
      return a === b2;
    }
  }
  stack2 = stack2 ?? /* @__PURE__ */ new Map();
  const aStack = stack2.get(a);
  const bStack = stack2.get(b2);
  if (aStack != null && bStack != null) {
    return aStack === b2;
  }
  stack2.set(a, b2);
  stack2.set(b2, a);
  try {
    switch (aTag) {
      case mapTag: {
        if (a.size !== b2.size) {
          return false;
        }
        for (const [key2, value] of a.entries()) {
          if (!b2.has(key2) || !isEqualWithImpl(value, b2.get(key2), key2, a, b2, stack2, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case setTag: {
        if (a.size !== b2.size) {
          return false;
        }
        const aValues = Array.from(a.values());
        const bValues = Array.from(b2.values());
        for (let i = 0; i < aValues.length; i++) {
          const aValue = aValues[i];
          const index2 = bValues.findIndex((bValue) => {
            return isEqualWithImpl(aValue, bValue, void 0, a, b2, stack2, areValuesEqual);
          });
          if (index2 === -1) {
            return false;
          }
          bValues.splice(index2, 1);
        }
        return true;
      }
      case arrayTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag:
      case bigUint64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case bigInt64ArrayTag:
      case float32ArrayTag:
      case float64ArrayTag: {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(a) !== Buffer.isBuffer(b2)) {
          return false;
        }
        if (a.length !== b2.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (!isEqualWithImpl(a[i], b2[i], i, a, b2, stack2, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case arrayBufferTag: {
        if (a.byteLength !== b2.byteLength) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b2), stack2, areValuesEqual);
      }
      case dataViewTag: {
        if (a.byteLength !== b2.byteLength || a.byteOffset !== b2.byteOffset) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b2), stack2, areValuesEqual);
      }
      case errorTag: {
        return a.name === b2.name && a.message === b2.message;
      }
      case objectTag: {
        const areEqualInstances = areObjectsEqual(a.constructor, b2.constructor, stack2, areValuesEqual) || isPlainObject$2(a) && isPlainObject$2(b2);
        if (!areEqualInstances) {
          return false;
        }
        const aKeys = [...Object.keys(a), ...getSymbols(a)];
        const bKeys = [...Object.keys(b2), ...getSymbols(b2)];
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
          const propKey = aKeys[i];
          const aProp = a[propKey];
          if (!Object.hasOwn(b2, propKey)) {
            return false;
          }
          const bProp = b2[propKey];
          if (!isEqualWithImpl(aProp, bProp, propKey, a, b2, stack2, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      default: {
        return false;
      }
    }
  } finally {
    stack2.delete(a);
    stack2.delete(b2);
  }
}
function isEqual(a, b2) {
  return isEqualWith(a, b2, noop$1);
}
const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escape$1(str) {
  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator: iterator$1, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type2) => {
  type2 = type2.toLowerCase();
  return (thing) => kindOf(thing) === type2;
};
const typeOfTest = (type2) => (thing) => typeof thing === type2;
const { isArray: isArray$1 } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString$1 = typeOfTest("string");
const isFunction$1 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject$3 = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject$1 = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator$1 in val);
};
const isEmptyObject = (val) => {
  if (!isObject$3(val) || isBuffer$1(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate$1 = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject$3(val) && isFunction$1(val.pipe);
const isFormData$1 = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach$1(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray$1(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer$1(obj)) {
      return;
    }
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key2;
    for (i = 0; i < len; i++) {
      key2 = keys[i];
      fn.call(null, obj[key2], key2, obj);
    }
  }
}
function findKey(obj, key2) {
  if (isBuffer$1(obj)) {
    return null;
  }
  key2 = key2.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key2 === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue2 = (val, key2) => {
    const targetKey = caseless && findKey(result, key2) || key2;
    if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject$1(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray$1(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach$1(arguments[i], assignValue2);
  }
  return result;
}
const extend$1 = (a, b2, thisArg, { allOwnKeys } = {}) => {
  forEach$1(b2, (val, key2) => {
    if (thisArg && isFunction$1(val)) {
      a[key2] = bind(val, thisArg);
    } else {
      a[key2] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray$1(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator$1];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches2;
  const arr = [];
  while ((matches2 = regExp.exec(str)) !== null) {
    arr.push(matches2);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer2(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty$2 = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp$1 = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach$1(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator$1]);
}
const toJSONObject = (obj) => {
  const stack2 = new Array(10);
  const visit = (source, i) => {
    if (isObject$3(source)) {
      if (stack2.indexOf(source) >= 0) {
        return;
      }
      if (isBuffer$1(source)) {
        return source;
      }
      if (!("toJSON" in source)) {
        stack2[i] = source;
        const target = isArray$1(source) ? [] : {};
        forEach$1(source, (value, key2) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key2] = reducedValue);
        });
        stack2[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject$3(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction$1(_global.postMessage)
);
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$1(thing[iterator$1]);
const utils$1 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData: isFormData$1,
  isArrayBufferView,
  isString: isString$1,
  isNumber,
  isBoolean,
  isObject: isObject$3,
  isPlainObject: isPlainObject$1,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate: isDate$1,
  isFile,
  isBlob,
  isRegExp: isRegExp$1,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach: forEach$1,
  merge,
  extend: extend$1,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: hasOwnProperty$2,
  hasOwnProp: hasOwnProperty$2,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
function AxiosError$1(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError$1, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError$1.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError$1.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError$1.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key2) {
  return utils$1.endsWith(key2, "[]") ? key2.slice(0, -2) : key2;
}
function renderKey(path, key2, dots) {
  if (!path) return key2;
  return path.concat(key2).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key2, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key2, "{}")) {
        key2 = metaTokens ? key2 : key2.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key2, "[]")) && (arr = utils$1.toArray(value))) {
        key2 = removeBrackets(key2);
        arr.forEach(function each(el, index2) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key2], index2, dots) : indexes === null ? key2 : key2 + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key2, dots), convertValue(value));
    return false;
  }
  const stack2 = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack2.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack2.push(value);
    utils$1.forEach(value, function each(el, key2) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key2) ? key2.trim() : key2,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key2) : [key2]);
      }
    });
    stack2.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer2(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key2, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key2, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key2;
  for (i = 0; i < len; i++) {
    key2 = keys[i];
    obj[key2] = arr[key2];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index2) {
    let name = path[index2++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index2 >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index2);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData$1(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status2) {
    return status2 >= 200 && status2 < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key2;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key2 = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key2 || parsed[key2] && ignoreDuplicateOf[key2]) {
      return;
    }
    if (key2 === "set-cookie") {
      if (parsed[key2]) {
        parsed[key2].push(val);
      } else {
        parsed[key2] = [val];
      }
    } else {
      parsed[key2] = parsed[key2] ? parsed[key2] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key2 = utils$1.findKey(self2, lHeader);
      if (!key2 || self2[key2] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key2] !== false) {
        self2[key2 || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key2;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError("Object iterator must return a key-value pair");
        }
        obj[key2 = entry[0]] = (dest = obj[key2]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key2 = utils$1.findKey(this, header);
      if (key2) {
        const value = this[key2];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key2);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key2 = utils$1.findKey(this, header);
      return !!(key2 && this[key2] !== void 0 && (!matcher || matchHeaderValue(this, this[key2], key2, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key2 = utils$1.findKey(self2, _header);
        if (key2 && (!matcher || matchHeaderValue(self2, self2[key2], key2, matcher))) {
          delete self2[key2];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key2 = keys[i];
      if (!matcher || matchHeaderValue(this, this[key2], key2, matcher, true)) {
        delete this[key2];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key2 = utils$1.findKey(headers, header);
      if (key2) {
        self2[key2] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target) => computed2.set(target));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key2) => {
  let mapped = key2[0].toUpperCase() + key2.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform2(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError$1(message, config, request) {
  AxiosError$1.call(this, message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});
function settle(resolve2, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve2(response);
  } else {
    reject(new AxiosError$1(
      "Request failed with status code " + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min2) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min2 = min2 !== void 0 ? min2 : 1e3;
  return function push(chunkLength) {
    const now2 = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now2;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now2;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now2 - firstSampleTS < min2) {
      return;
    }
    const passed = startedAt && now2 - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now2 = Date.now()) => {
    timestamp = now2;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now2 = Date.now();
    const passed = now2 - timestamp;
    if (passed >= threshold) {
      invoke(args, now2);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push("path=" + path);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b2, prop, caseless) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(a, b2, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b2, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b2), prop, true)
  };
  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type2, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type2 || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve2, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done2() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve2(value);
        done2();
      }, function _reject(err) {
        reject(err);
        done2();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError2() {
      reject(new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key2) {
        request.setRequestHeader(key2, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1("Unsupported protocol " + protocol + ":", AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done: done2, value } = await reader.read();
      if (done2) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done2;
  let _onFinish = (e) => {
    if (!done2) {
      done2 = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done3, value } = await iterator2.next();
        if (done3) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator2.return();
    }
  }, {
    highWaterMark: 2
  });
};
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type2) => {
    !resolvers[type2] && (resolvers[type2] = utils$1.isFunction(res[type2]) ? (res2) => res2[type2]() : (_, config) => {
      throw new AxiosError$1(`Response type '${type2}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils$1.isBlob(body)) {
    return body.size;
  }
  if (utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils$1.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
const fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request, fetchOptions);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve2, reject) => {
      settle(resolve2, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError$1.from(err, err && err.code, config, request);
  }
});
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state2]) => `adapter ${id} ` + (state2 === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const VERSION$1 = "1.11.0";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type2, i) => {
  validators$1[type2] = function validator2(thing) {
    return typeof thing === type2 || "a" + (i < 1 ? "n " : " ") + type2;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1("option " + opt + " must be " + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack2 = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack2;
          } else if (stack2 && !String(err.stack).endsWith(stack2.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack2;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    if (config.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling("baseURL"),
      withXsrfToken: validators.spelling("withXSRFToken")
    }, true);
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve2) {
      resolvePromise = resolve2;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve2) => {
        token.subscribe(resolve2);
        _resolve = resolve2;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index2 = this._listeners.indexOf(listener);
    if (index2 !== -1) {
      this._listeners.splice(index2, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode$1).forEach(([key2, value]) => {
  HttpStatusCode$1[value] = key2;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn.apply(this, args), delay);
  };
}
function fireEvent(name, options) {
  return document.dispatchEvent(new CustomEvent(`inertia:${name}`, options));
}
var fireBeforeEvent = (visit) => {
  return fireEvent("before", { cancelable: true, detail: { visit } });
};
var fireErrorEvent = (errors) => {
  return fireEvent("error", { detail: { errors } });
};
var fireExceptionEvent = (exception) => {
  return fireEvent("exception", { cancelable: true, detail: { exception } });
};
var fireFinishEvent = (visit) => {
  return fireEvent("finish", { detail: { visit } });
};
var fireInvalidEvent = (response) => {
  return fireEvent("invalid", { cancelable: true, detail: { response } });
};
var fireNavigateEvent = (page2) => {
  return fireEvent("navigate", { detail: { page: page2 } });
};
var fireProgressEvent = (progress3) => {
  return fireEvent("progress", { detail: { progress: progress3 } });
};
var fireStartEvent = (visit) => {
  return fireEvent("start", { detail: { visit } });
};
var fireSuccessEvent = (page2) => {
  return fireEvent("success", { detail: { page: page2 } });
};
var firePrefetchedEvent = (response, visit) => {
  return fireEvent("prefetched", { detail: { fetchedAt: Date.now(), response: response.data, visit } });
};
var firePrefetchingEvent = (visit) => {
  return fireEvent("prefetching", { detail: { visit } });
};
var SessionStorage = class {
  static set(key2, value) {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key2, JSON.stringify(value));
    }
  }
  static get(key2) {
    if (typeof window !== "undefined") {
      return JSON.parse(window.sessionStorage.getItem(key2) || "null");
    }
  }
  static merge(key2, value) {
    const existing = this.get(key2);
    if (existing === null) {
      this.set(key2, value);
    } else {
      this.set(key2, { ...existing, ...value });
    }
  }
  static remove(key2) {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key2);
    }
  }
  static removeNested(key2, nestedKey) {
    const existing = this.get(key2);
    if (existing !== null) {
      delete existing[nestedKey];
      this.set(key2, existing);
    }
  }
  static exists(key2) {
    try {
      return this.get(key2) !== null;
    } catch (error) {
      return false;
    }
  }
  static clear() {
    if (typeof window !== "undefined") {
      window.sessionStorage.clear();
    }
  }
};
SessionStorage.locationVisitKey = "inertiaLocationVisit";
var encryptHistory = async (data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  const key2 = await getOrCreateKey(storedKey);
  if (!key2) {
    throw new Error("Unable to encrypt history");
  }
  const encrypted = await encryptData(iv, key2, data);
  return encrypted;
};
var historySessionStorageKeys = {
  key: "historyKey",
  iv: "historyIv"
};
var decryptHistory = async (data) => {
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  if (!storedKey) {
    throw new Error("Unable to decrypt history");
  }
  return await decryptData(iv, storedKey, data);
};
var encryptData = async (iv, key2, data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const textEncoder = new TextEncoder();
  const str = JSON.stringify(data);
  const encoded = new Uint8Array(str.length * 3);
  const result = textEncoder.encodeInto(str, encoded);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv
    },
    key2,
    encoded.subarray(0, result.written)
  );
};
var decryptData = async (iv, key2, data) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Decryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv
    },
    key2,
    data
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
};
var getIv = () => {
  const ivString = SessionStorage.get(historySessionStorageKeys.iv);
  if (ivString) {
    return new Uint8Array(ivString);
  }
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  SessionStorage.set(historySessionStorageKeys.iv, Array.from(iv));
  return iv;
};
var createKey = async () => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(null);
  }
  return window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
};
var saveKey = async (key2) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve();
  }
  const keyData = await window.crypto.subtle.exportKey("raw", key2);
  SessionStorage.set(historySessionStorageKeys.key, Array.from(new Uint8Array(keyData)));
};
var getOrCreateKey = async (key2) => {
  if (key2) {
    return key2;
  }
  const newKey = await createKey();
  if (!newKey) {
    return null;
  }
  await saveKey(newKey);
  return newKey;
};
var getKeyFromSessionStorage = async () => {
  const stringKey = SessionStorage.get(historySessionStorageKeys.key);
  if (!stringKey) {
    return null;
  }
  const key2 = await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(stringKey),
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
  return key2;
};
var Scroll = class {
  static save() {
    history.saveScrollPositions(
      Array.from(this.regions()).map((region) => ({
        top: region.scrollTop,
        left: region.scrollLeft
      }))
    );
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    const anchorHash = typeof window !== "undefined" ? window.location.hash : null;
    if (!anchorHash) {
      window.scrollTo(0, 0);
    }
    this.regions().forEach((region) => {
      if (typeof region.scrollTo === "function") {
        region.scrollTo(0, 0);
      } else {
        region.scrollTop = 0;
        region.scrollLeft = 0;
      }
    });
    this.save();
    if (anchorHash) {
      setTimeout(() => {
        const anchorElement = document.getElementById(anchorHash.slice(1));
        anchorElement ? anchorElement.scrollIntoView() : window.scrollTo(0, 0);
      });
    }
  }
  static restore(scrollRegions) {
    this.restoreDocument();
    this.regions().forEach((region, index2) => {
      const scrollPosition = scrollRegions[index2];
      if (!scrollPosition) {
        return;
      }
      if (typeof region.scrollTo === "function") {
        region.scrollTo(scrollPosition.left, scrollPosition.top);
      } else {
        region.scrollTop = scrollPosition.top;
        region.scrollLeft = scrollPosition.left;
      }
    });
  }
  static restoreDocument() {
    const scrollPosition = history.getDocumentScrollPosition();
    if (typeof window !== "undefined") {
      window.scrollTo(scrollPosition.left, scrollPosition.top);
    }
  }
  static onScroll(event) {
    const target = event.target;
    if (typeof target.hasAttribute === "function" && target.hasAttribute("scroll-region")) {
      this.save();
    }
  }
  static onWindowScroll() {
    history.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
};
function hasFiles(data) {
  return data instanceof File || data instanceof Blob || data instanceof FileList && data.length > 0 || data instanceof FormData && Array.from(data.values()).some((value) => hasFiles(value)) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles(value));
}
var isFormData = (value) => value instanceof FormData;
function objectToFormData(source, form = new FormData(), parentKey = null) {
  source = source || {};
  for (const key2 in source) {
    if (Object.prototype.hasOwnProperty.call(source, key2)) {
      append2(form, composeKey(parentKey, key2), source[key2]);
    }
  }
  return form;
}
function composeKey(parent, key2) {
  return parent ? parent + "[" + key2 + "]" : key2;
}
function append2(form, key2, value) {
  if (Array.isArray(value)) {
    return Array.from(value.keys()).forEach((index2) => append2(form, composeKey(key2, index2.toString()), value[index2]));
  } else if (value instanceof Date) {
    return form.append(key2, value.toISOString());
  } else if (value instanceof File) {
    return form.append(key2, value, value.name);
  } else if (value instanceof Blob) {
    return form.append(key2, value);
  } else if (typeof value === "boolean") {
    return form.append(key2, value ? "1" : "0");
  } else if (typeof value === "string") {
    return form.append(key2, value);
  } else if (typeof value === "number") {
    return form.append(key2, `${value}`);
  } else if (value === null || value === void 0) {
    return form.append(key2, "");
  }
  objectToFormData(value, form, key2);
}
function hrefToUrl(href) {
  return new URL(href.toString(), typeof window === "undefined" ? void 0 : window.location.toString());
}
var transformUrlAndData = (href, data, method, forceFormData, queryStringArrayFormat) => {
  let url = typeof href === "string" ? hrefToUrl(href) : href;
  if ((hasFiles(data) || forceFormData) && !isFormData(data)) {
    data = objectToFormData(data);
  }
  if (isFormData(data)) {
    return [url, data];
  }
  const [_href, _data] = mergeDataIntoQueryString(method, url, data, queryStringArrayFormat);
  return [hrefToUrl(_href), _data];
};
function mergeDataIntoQueryString(method, href, data, qsArrayFormat = "brackets") {
  const hasHost = /^[a-z][a-z0-9+.-]*:\/\//i.test(href.toString());
  const hasAbsolutePath = hasHost || href.toString().startsWith("/");
  const hasRelativePath = !hasAbsolutePath && !href.toString().startsWith("#") && !href.toString().startsWith("?");
  const hasRelativePathWithDotPrefix = /^[.]{1,2}([/]|$)/.test(href.toString());
  const hasSearch = href.toString().includes("?") || method === "get" && Object.keys(data).length;
  const hasHash = href.toString().includes("#");
  const url = new URL(href.toString(), typeof window === "undefined" ? "http://localhost" : window.location.toString());
  if (method === "get" && Object.keys(data).length) {
    const parseOptions = { ignoreQueryPrefix: true, parseArrays: false };
    url.search = libExports.stringify(
      { ...libExports.parse(url.search, parseOptions), ...data },
      {
        encodeValuesOnly: true,
        arrayFormat: qsArrayFormat
      }
    );
    data = {};
  }
  return [
    [
      hasHost ? `${url.protocol}//${url.host}` : "",
      hasAbsolutePath ? url.pathname : "",
      hasRelativePath ? url.pathname.substring(hasRelativePathWithDotPrefix ? 0 : 1) : "",
      hasSearch ? url.search : "",
      hasHash ? url.hash : ""
    ].join(""),
    data
  ];
}
function urlWithoutHash(url) {
  url = new URL(url.href);
  url.hash = "";
  return url;
}
var setHashIfSameUrl = (originUrl, destinationUrl) => {
  if (originUrl.hash && !destinationUrl.hash && urlWithoutHash(originUrl).href === destinationUrl.href) {
    destinationUrl.hash = originUrl.hash;
  }
};
var isSameUrlWithoutHash = (url1, url2) => {
  return urlWithoutHash(url1).href === urlWithoutHash(url2).href;
};
var CurrentPage = class {
  constructor() {
    this.componentId = {};
    this.listeners = [];
    this.isFirstPageLoad = true;
    this.cleared = false;
  }
  init({ initialPage, swapComponent, resolveComponent: resolveComponent2 }) {
    this.page = initialPage;
    this.swapComponent = swapComponent;
    this.resolveComponent = resolveComponent2;
    return this;
  }
  set(page2, {
    replace = false,
    preserveScroll = false,
    preserveState = false
  } = {}) {
    this.componentId = {};
    const componentId = this.componentId;
    if (page2.clearHistory) {
      history.clear();
    }
    return this.resolve(page2.component).then((component2) => {
      if (componentId !== this.componentId) {
        return;
      }
      page2.rememberedState ?? (page2.rememberedState = {});
      const location = typeof window !== "undefined" ? window.location : new URL(page2.url);
      replace = replace || isSameUrlWithoutHash(hrefToUrl(page2.url), location);
      return new Promise((resolve2) => {
        replace ? history.replaceState(page2, () => resolve2(null)) : history.pushState(page2, () => resolve2(null));
      }).then(() => {
        const isNewComponent = !this.isTheSame(page2);
        this.page = page2;
        this.cleared = false;
        if (isNewComponent) {
          this.fireEventsFor("newComponent");
        }
        if (this.isFirstPageLoad) {
          this.fireEventsFor("firstLoad");
        }
        this.isFirstPageLoad = false;
        return this.swap({ component: component2, page: page2, preserveState }).then(() => {
          if (!preserveScroll) {
            Scroll.reset();
          }
          eventHandler.fireInternalEvent("loadDeferredProps");
          if (!replace) {
            fireNavigateEvent(page2);
          }
        });
      });
    });
  }
  setQuietly(page2, {
    preserveState = false
  } = {}) {
    return this.resolve(page2.component).then((component2) => {
      this.page = page2;
      this.cleared = false;
      history.setCurrent(page2);
      return this.swap({ component: component2, page: page2, preserveState });
    });
  }
  clear() {
    this.cleared = true;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(data) {
    this.page = { ...this.page, ...data };
  }
  setUrlHash(hash) {
    if (!this.page.url.includes(hash)) {
      this.page.url += hash;
    }
  }
  remember(data) {
    this.page.rememberedState = data;
  }
  swap({
    component: component2,
    page: page2,
    preserveState
  }) {
    return this.swapComponent({ component: component2, page: page2, preserveState });
  }
  resolve(component2) {
    return Promise.resolve(this.resolveComponent(component2));
  }
  isTheSame(page2) {
    return this.page.component === page2.component;
  }
  on(event, callback) {
    this.listeners.push({ event, callback });
    return () => {
      this.listeners = this.listeners.filter((listener) => listener.event !== event && listener.callback !== callback);
    };
  }
  fireEventsFor(event) {
    this.listeners.filter((listener) => listener.event === event).forEach((listener) => listener.callback());
  }
};
var page$1 = new CurrentPage();
var Queue = class {
  constructor() {
    this.items = [];
    this.processingPromise = null;
  }
  add(item) {
    this.items.push(item);
    return this.process();
  }
  process() {
    this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    }));
    return this.processingPromise;
  }
  processNext() {
    const next = this.items.shift();
    if (next) {
      return Promise.resolve(next()).then(() => this.processNext());
    }
    return Promise.resolve();
  }
};
var isServer = typeof window === "undefined";
var queue$1 = new Queue();
var isChromeIOS = !isServer && /CriOS/.test(window.navigator.userAgent);
var History = class {
  constructor() {
    this.rememberedState = "rememberedState";
    this.scrollRegions = "scrollRegions";
    this.preserveUrl = false;
    this.current = {};
    this.initialState = null;
  }
  remember(data, key2) {
    this.replaceState({
      ...page$1.get(),
      rememberedState: {
        ...page$1.get()?.rememberedState ?? {},
        [key2]: data
      }
    });
  }
  restore(key2) {
    if (!isServer) {
      return this.current[this.rememberedState] ? this.current[this.rememberedState]?.[key2] : this.initialState?.[this.rememberedState]?.[key2];
    }
  }
  pushState(page2, cb = null) {
    if (isServer) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue$1.add(() => {
      return this.getPageData(page2).then((data) => {
        const doPush = () => {
          this.doPushState({ page: data }, page2.url);
          cb && cb();
        };
        if (isChromeIOS) {
          setTimeout(doPush);
        } else {
          doPush();
        }
      });
    });
  }
  getPageData(page2) {
    return new Promise((resolve2) => {
      return page2.encryptHistory ? encryptHistory(page2).then(resolve2) : resolve2(page2);
    });
  }
  processQueue() {
    return queue$1.process();
  }
  decrypt(page2 = null) {
    if (isServer) {
      return Promise.resolve(page2 ?? page$1.get());
    }
    const pageData = page2 ?? window.history.state?.page;
    return this.decryptPageData(pageData).then((data) => {
      if (!data) {
        throw new Error("Unable to decrypt history");
      }
      if (this.initialState === null) {
        this.initialState = data ?? void 0;
      } else {
        this.current = data ?? {};
      }
      return data;
    });
  }
  decryptPageData(pageData) {
    return pageData instanceof ArrayBuffer ? decryptHistory(pageData) : Promise.resolve(pageData);
  }
  saveScrollPositions(scrollRegions) {
    queue$1.add(() => {
      return Promise.resolve().then(() => {
        if (!window.history.state?.page) {
          return;
        }
        this.doReplaceState(
          {
            page: window.history.state.page,
            scrollRegions
          }
        );
      });
    });
  }
  saveDocumentScrollPosition(scrollRegion) {
    queue$1.add(() => {
      return Promise.resolve().then(() => {
        if (!window.history.state?.page) {
          return;
        }
        this.doReplaceState(
          {
            page: window.history.state.page,
            documentScrollPosition: scrollRegion
          }
        );
      });
    });
  }
  getScrollRegions() {
    return window.history.state?.scrollRegions || [];
  }
  getDocumentScrollPosition() {
    return window.history.state?.documentScrollPosition || { top: 0, left: 0 };
  }
  replaceState(page2, cb = null) {
    page$1.merge(page2);
    if (isServer) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue$1.add(() => {
      return this.getPageData(page2).then((data) => {
        const doReplace = () => {
          this.doReplaceState({ page: data }, page2.url);
          cb && cb();
        };
        if (isChromeIOS) {
          setTimeout(doReplace);
        } else {
          doReplace();
        }
      });
    });
  }
  doReplaceState(data, url) {
    window.history.replaceState(
      {
        ...data,
        scrollRegions: data.scrollRegions ?? window.history.state?.scrollRegions,
        documentScrollPosition: data.documentScrollPosition ?? window.history.state?.documentScrollPosition
      },
      "",
      url
    );
  }
  doPushState(data, url) {
    window.history.pushState(data, "", url);
  }
  getState(key2, defaultValue) {
    return this.current?.[key2] ?? defaultValue;
  }
  deleteState(key2) {
    if (this.current[key2] !== void 0) {
      delete this.current[key2];
      this.replaceState(this.current);
    }
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    SessionStorage.remove(historySessionStorageKeys.key);
    SessionStorage.remove(historySessionStorageKeys.iv);
  }
  setCurrent(page2) {
    this.current = page2;
  }
  isValidState(state2) {
    return !!state2.page;
  }
  getAllState() {
    return this.current;
  }
};
if (typeof window !== "undefined" && window.history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}
var history = new History();
var EventHandler = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.handlePopstateEvent.bind(this));
      window.addEventListener("scroll", debounce(Scroll.onWindowScroll.bind(Scroll), 100), true);
    }
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", debounce(Scroll.onScroll.bind(Scroll), 100), true);
    }
  }
  onGlobalEvent(type2, callback) {
    const listener = (event) => {
      const response = callback(event);
      if (event.cancelable && !event.defaultPrevented && response === false) {
        event.preventDefault();
      }
    };
    return this.registerListener(`inertia:${type2}`, listener);
  }
  on(event, callback) {
    this.internalListeners.push({ event, listener: callback });
    return () => {
      this.internalListeners = this.internalListeners.filter((listener) => listener.listener !== callback);
    };
  }
  onMissingHistoryItem() {
    page$1.clear();
    this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(event) {
    this.internalListeners.filter((listener) => listener.event === event).forEach((listener) => listener.listener());
  }
  registerListener(type2, listener) {
    document.addEventListener(type2, listener);
    return () => document.removeEventListener(type2, listener);
  }
  handlePopstateEvent(event) {
    const state2 = event.state || null;
    if (state2 === null) {
      const url = hrefToUrl(page$1.get().url);
      url.hash = window.location.hash;
      history.replaceState({ ...page$1.get(), url: url.href });
      Scroll.reset();
      return;
    }
    if (!history.isValidState(state2)) {
      return this.onMissingHistoryItem();
    }
    history.decrypt(state2.page).then((data) => {
      if (page$1.get().version !== data.version) {
        this.onMissingHistoryItem();
        return;
      }
      router.cancelAll();
      page$1.setQuietly(data, { preserveState: false }).then(() => {
        window.requestAnimationFrame(() => {
          Scroll.restore(history.getScrollRegions());
        });
        fireNavigateEvent(page$1.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
};
var eventHandler = new EventHandler();
var NavigationType = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    if (typeof window === "undefined") {
      return "navigate";
    }
    if (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0) {
      return window.performance.getEntriesByType("navigation")[0].type;
    }
    return "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
};
var navigationType = new NavigationType();
var InitialVisit = class {
  static handle() {
    this.clearRememberedStateOnReload();
    const scenarios = [this.handleBackForward, this.handleLocation, this.handleDefault];
    scenarios.find((handler) => handler.bind(this)());
  }
  static clearRememberedStateOnReload() {
    if (navigationType.isReload()) {
      history.deleteState(history.rememberedState);
    }
  }
  static handleBackForward() {
    if (!navigationType.isBackForward() || !history.hasAnyState()) {
      return false;
    }
    const scrollRegions = history.getScrollRegions();
    history.decrypt().then((data) => {
      page$1.set(data, { preserveScroll: true, preserveState: true }).then(() => {
        Scroll.restore(scrollRegions);
        fireNavigateEvent(page$1.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!SessionStorage.exists(SessionStorage.locationVisitKey)) {
      return false;
    }
    const locationVisit = SessionStorage.get(SessionStorage.locationVisitKey) || {};
    SessionStorage.remove(SessionStorage.locationVisitKey);
    if (typeof window !== "undefined") {
      page$1.setUrlHash(window.location.hash);
    }
    history.decrypt(page$1.get()).then(() => {
      const rememberedState = history.getState(history.rememberedState, {});
      const scrollRegions = history.getScrollRegions();
      page$1.remember(rememberedState);
      page$1.set(page$1.get(), {
        preserveScroll: locationVisit.preserveScroll,
        preserveState: true
      }).then(() => {
        if (locationVisit.preserveScroll) {
          Scroll.restore(scrollRegions);
        }
        fireNavigateEvent(page$1.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  static handleDefault() {
    if (typeof window !== "undefined") {
      page$1.setUrlHash(window.location.hash);
    }
    page$1.set(page$1.get(), { preserveScroll: true, preserveState: true }).then(() => {
      if (navigationType.isReload()) {
        Scroll.restore(history.getScrollRegions());
      }
      fireNavigateEvent(page$1.get());
    });
  }
};
var Poll = class {
  constructor(interval, cb, options) {
    this.id = null;
    this.throttle = false;
    this.keepAlive = false;
    this.cbCount = 0;
    this.keepAlive = options.keepAlive ?? false;
    this.cb = cb;
    this.interval = interval;
    if (options.autoStart ?? true) {
      this.start();
    }
  }
  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  start() {
    if (typeof window === "undefined") {
      return;
    }
    this.stop();
    this.id = window.setInterval(() => {
      if (!this.throttle || this.cbCount % 10 === 0) {
        this.cb();
      }
      if (this.throttle) {
        this.cbCount++;
      }
    }, this.interval);
  }
  isInBackground(hidden) {
    this.throttle = this.keepAlive ? false : hidden;
    if (this.throttle) {
      this.cbCount = 0;
    }
  }
};
var Polls = class {
  constructor() {
    this.polls = [];
    this.setupVisibilityListener();
  }
  add(interval, cb, options) {
    const poll = new Poll(interval, cb, options);
    this.polls.push(poll);
    return {
      stop: () => poll.stop(),
      start: () => poll.start()
    };
  }
  clear() {
    this.polls.forEach((poll) => poll.stop());
    this.polls = [];
  }
  setupVisibilityListener() {
    if (typeof document === "undefined") {
      return;
    }
    document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((poll) => poll.isInBackground(document.hidden));
      },
      false
    );
  }
};
var polls = new Polls();
var objectsAreEqual = (obj1, obj2, excludeKeys) => {
  if (obj1 === obj2) {
    return true;
  }
  for (const key2 in obj1) {
    if (excludeKeys.includes(key2)) {
      continue;
    }
    if (obj1[key2] === obj2[key2]) {
      continue;
    }
    if (!compareValues(obj1[key2], obj2[key2])) {
      return false;
    }
  }
  return true;
};
var compareValues = (value1, value2) => {
  switch (typeof value1) {
    case "object":
      return objectsAreEqual(value1, value2, []);
    case "function":
      return value1.toString() === value2.toString();
    default:
      return value1 === value2;
  }
};
var conversionMap = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
};
var timeToMs = (time) => {
  if (typeof time === "number") {
    return time;
  }
  for (const [unit, conversion] of Object.entries(conversionMap)) {
    if (time.endsWith(unit)) {
      return parseFloat(time) * conversion;
    }
  }
  return parseInt(time);
};
var PrefetchedRequests = class {
  constructor() {
    this.cached = [];
    this.inFlightRequests = [];
    this.removalTimers = [];
    this.currentUseId = null;
  }
  add(params, sendFunc, { cacheFor }) {
    const inFlight = this.findInFlight(params);
    if (inFlight) {
      return Promise.resolve();
    }
    const existing = this.findCached(params);
    if (!params.fresh && existing && existing.staleTimestamp > Date.now()) {
      return Promise.resolve();
    }
    const [stale, expires] = this.extractStaleValues(cacheFor);
    const promise = new Promise((resolve2, reject) => {
      sendFunc({
        ...params,
        onCancel: () => {
          this.remove(params);
          params.onCancel();
          reject();
        },
        onError: (error) => {
          this.remove(params);
          params.onError(error);
          reject();
        },
        onPrefetching(visitParams) {
          params.onPrefetching(visitParams);
        },
        onPrefetched(response, visit) {
          params.onPrefetched(response, visit);
        },
        onPrefetchResponse(response) {
          resolve2(response);
        }
      });
    }).then((response) => {
      this.remove(params);
      this.cached.push({
        params: { ...params },
        staleTimestamp: Date.now() + stale,
        response: promise,
        singleUse: expires === 0,
        timestamp: Date.now(),
        inFlight: false
      });
      this.scheduleForRemoval(params, expires);
      this.inFlightRequests = this.inFlightRequests.filter((prefetching) => {
        return !this.paramsAreEqual(prefetching.params, params);
      });
      response.handlePrefetch();
      return response;
    });
    this.inFlightRequests.push({
      params: { ...params },
      response: promise,
      staleTimestamp: null,
      inFlight: true
    });
    return promise;
  }
  removeAll() {
    this.cached = [];
    this.removalTimers.forEach((removalTimer) => {
      clearTimeout(removalTimer.timer);
    });
    this.removalTimers = [];
  }
  remove(params) {
    this.cached = this.cached.filter((prefetched) => {
      return !this.paramsAreEqual(prefetched.params, params);
    });
    this.clearTimer(params);
  }
  extractStaleValues(cacheFor) {
    const [stale, expires] = this.cacheForToStaleAndExpires(cacheFor);
    return [timeToMs(stale), timeToMs(expires)];
  }
  cacheForToStaleAndExpires(cacheFor) {
    if (!Array.isArray(cacheFor)) {
      return [cacheFor, cacheFor];
    }
    switch (cacheFor.length) {
      case 0:
        return [0, 0];
      case 1:
        return [cacheFor[0], cacheFor[0]];
      default:
        return [cacheFor[0], cacheFor[1]];
    }
  }
  clearTimer(params) {
    const timer = this.removalTimers.find((removalTimer) => {
      return this.paramsAreEqual(removalTimer.params, params);
    });
    if (timer) {
      clearTimeout(timer.timer);
      this.removalTimers = this.removalTimers.filter((removalTimer) => removalTimer !== timer);
    }
  }
  scheduleForRemoval(params, expiresIn) {
    if (typeof window === "undefined") {
      return;
    }
    this.clearTimer(params);
    if (expiresIn > 0) {
      const timer = window.setTimeout(() => this.remove(params), expiresIn);
      this.removalTimers.push({
        params,
        timer
      });
    }
  }
  get(params) {
    return this.findCached(params) || this.findInFlight(params);
  }
  use(prefetched, params) {
    const id = `${params.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    this.currentUseId = id;
    return prefetched.response.then((response) => {
      if (this.currentUseId !== id) {
        return;
      }
      response.mergeParams({ ...params, onPrefetched: () => {
      } });
      this.removeSingleUseItems(params);
      return response.handle();
    });
  }
  removeSingleUseItems(params) {
    this.cached = this.cached.filter((prefetched) => {
      if (!this.paramsAreEqual(prefetched.params, params)) {
        return true;
      }
      return !prefetched.singleUse;
    });
  }
  findCached(params) {
    return this.cached.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  findInFlight(params) {
    return this.inFlightRequests.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  withoutPurposePrefetchHeader(params) {
    const newParams = cloneDeep(params);
    if (newParams.headers["Purpose"] === "prefetch") {
      delete newParams.headers["Purpose"];
    }
    return newParams;
  }
  paramsAreEqual(params1, params2) {
    return objectsAreEqual(
      this.withoutPurposePrefetchHeader(params1),
      this.withoutPurposePrefetchHeader(params2),
      [
        "showProgress",
        "replace",
        "prefetch",
        "onBefore",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async"
      ]
    );
  }
};
var prefetchedRequests = new PrefetchedRequests();
var RequestParams = class _RequestParams {
  constructor(params) {
    this.callbacks = [];
    if (!params.prefetch) {
      this.params = params;
    } else {
      const wrappedCallbacks = {
        onBefore: this.wrapCallback(params, "onBefore"),
        onStart: this.wrapCallback(params, "onStart"),
        onProgress: this.wrapCallback(params, "onProgress"),
        onFinish: this.wrapCallback(params, "onFinish"),
        onCancel: this.wrapCallback(params, "onCancel"),
        onSuccess: this.wrapCallback(params, "onSuccess"),
        onError: this.wrapCallback(params, "onError"),
        onCancelToken: this.wrapCallback(params, "onCancelToken"),
        onPrefetched: this.wrapCallback(params, "onPrefetched"),
        onPrefetching: this.wrapCallback(params, "onPrefetching")
      };
      this.params = {
        ...params,
        ...wrappedCallbacks,
        onPrefetchResponse: params.onPrefetchResponse || (() => {
        })
      };
    }
  }
  static create(params) {
    return new _RequestParams(params);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(cb) {
    this.params.onCancelToken({
      cancel: cb
    });
  }
  markAsFinished() {
    this.params.completed = true;
    this.params.cancelled = false;
    this.params.interrupted = false;
  }
  markAsCancelled({ cancelled = true, interrupted = false }) {
    this.params.onCancel();
    this.params.completed = false;
    this.params.cancelled = cancelled;
    this.params.interrupted = interrupted;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(response) {
    if (this.params.onPrefetchResponse) {
      this.params.onPrefetchResponse(response);
    }
  }
  all() {
    return this.params;
  }
  headers() {
    const headers = {
      ...this.params.headers
    };
    if (this.isPartial()) {
      headers["X-Inertia-Partial-Component"] = page$1.get().component;
    }
    const only = this.params.only.concat(this.params.reset);
    if (only.length > 0) {
      headers["X-Inertia-Partial-Data"] = only.join(",");
    }
    if (this.params.except.length > 0) {
      headers["X-Inertia-Partial-Except"] = this.params.except.join(",");
    }
    if (this.params.reset.length > 0) {
      headers["X-Inertia-Reset"] = this.params.reset.join(",");
    }
    if (this.params.errorBag && this.params.errorBag.length > 0) {
      headers["X-Inertia-Error-Bag"] = this.params.errorBag;
    }
    return headers;
  }
  setPreserveOptions(page2) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, page2);
    this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, page2);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name, args }) => {
      this.params[name](...args);
    });
  }
  merge(toMerge) {
    this.params = {
      ...this.params,
      ...toMerge
    };
  }
  wrapCallback(params, name) {
    return (...args) => {
      this.recordCallback(name, args);
      params[name](...args);
    };
  }
  recordCallback(name, args) {
    this.callbacks.push({ name, args });
  }
  resolvePreserveOption(value, page2) {
    if (typeof value === "function") {
      return value(page2);
    }
    if (value === "errors") {
      return Object.keys(page2.props.errors || {}).length > 0;
    }
    return value;
  }
};
var modal_default = {
  modal: null,
  listener: null,
  show(html) {
    if (typeof html === "object") {
      html = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
        html
      )}`;
    }
    const page2 = document.createElement("html");
    page2.innerHTML = html;
    page2.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_top"));
    this.modal = document.createElement("div");
    this.modal.style.position = "fixed";
    this.modal.style.width = "100vw";
    this.modal.style.height = "100vh";
    this.modal.style.padding = "50px";
    this.modal.style.boxSizing = "border-box";
    this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
    this.modal.style.zIndex = 2e5;
    this.modal.addEventListener("click", () => this.hide());
    const iframe = document.createElement("iframe");
    iframe.style.backgroundColor = "white";
    iframe.style.borderRadius = "5px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    this.modal.appendChild(iframe);
    document.body.prepend(this.modal);
    document.body.style.overflow = "hidden";
    if (!iframe.contentWindow) {
      throw new Error("iframe not yet ready.");
    }
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page2.outerHTML);
    iframe.contentWindow.document.close();
    this.listener = this.hideOnEscape.bind(this);
    document.addEventListener("keydown", this.listener);
  },
  hide() {
    this.modal.outerHTML = "";
    this.modal = null;
    document.body.style.overflow = "visible";
    document.removeEventListener("keydown", this.listener);
  },
  hideOnEscape(event) {
    if (event.keyCode === 27) {
      this.hide();
    }
  }
};
var queue2 = new Queue();
var Response$1 = class _Response {
  constructor(requestParams, response, originatingPage) {
    this.requestParams = requestParams;
    this.response = response;
    this.originatingPage = originatingPage;
  }
  static create(params, response, originatingPage) {
    return new _Response(params, response, originatingPage);
  }
  async handlePrefetch() {
    if (isSameUrlWithoutHash(this.requestParams.all().url, window.location)) {
      this.handle();
    }
  }
  async handle() {
    return queue2.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) {
      this.requestParams.all().prefetch = false;
      this.requestParams.all().onPrefetched(this.response, this.requestParams.all());
      firePrefetchedEvent(this.response, this.requestParams.all());
      return Promise.resolve();
    }
    this.requestParams.runCallbacks();
    if (!this.isInertiaResponse()) {
      return this.handleNonInertiaResponse();
    }
    await history.processQueue();
    history.preserveUrl = this.requestParams.all().preserveUrl;
    await this.setPage();
    const errors = page$1.get().props.errors || {};
    if (Object.keys(errors).length > 0) {
      const scopedErrors = this.getScopedErrors(errors);
      fireErrorEvent(scopedErrors);
      return this.requestParams.all().onError(scopedErrors);
    }
    fireSuccessEvent(page$1.get());
    await this.requestParams.all().onSuccess(page$1.get());
    history.preserveUrl = false;
  }
  mergeParams(params) {
    this.requestParams.merge(params);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      const locationUrl = hrefToUrl(this.getHeader("x-inertia-location"));
      setHashIfSameUrl(this.requestParams.all().url, locationUrl);
      return this.locationVisit(locationUrl);
    }
    const response = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (fireInvalidEvent(response)) {
      return modal_default.show(response.data);
    }
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(status2) {
    return this.response.status === status2;
  }
  getHeader(header) {
    return this.response.headers[header];
  }
  hasHeader(header) {
    return this.getHeader(header) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(url) {
    try {
      SessionStorage.set(SessionStorage.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === true
      });
      if (typeof window === "undefined") {
        return;
      }
      if (isSameUrlWithoutHash(window.location, url)) {
        window.location.reload();
      } else {
        window.location.href = url.href;
      }
    } catch (error) {
      return false;
    }
  }
  async setPage() {
    const pageResponse = this.getDataFromResponse(this.response.data);
    if (!this.shouldSetPage(pageResponse)) {
      return Promise.resolve();
    }
    this.mergeProps(pageResponse);
    await this.setRememberedState(pageResponse);
    this.requestParams.setPreserveOptions(pageResponse);
    pageResponse.url = history.preserveUrl ? page$1.get().url : this.pageUrl(pageResponse);
    return page$1.set(pageResponse, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState
    });
  }
  getDataFromResponse(response) {
    if (typeof response !== "string") {
      return response;
    }
    try {
      return JSON.parse(response);
    } catch (error) {
      return response;
    }
  }
  shouldSetPage(pageResponse) {
    if (!this.requestParams.all().async) {
      return true;
    }
    if (this.originatingPage.component !== pageResponse.component) {
      return true;
    }
    if (this.originatingPage.component !== page$1.get().component) {
      return false;
    }
    const originatingUrl = hrefToUrl(this.originatingPage.url);
    const currentPageUrl = hrefToUrl(page$1.get().url);
    return originatingUrl.origin === currentPageUrl.origin && originatingUrl.pathname === currentPageUrl.pathname;
  }
  pageUrl(pageResponse) {
    const responseUrl = hrefToUrl(pageResponse.url);
    setHashIfSameUrl(this.requestParams.all().url, responseUrl);
    return responseUrl.pathname + responseUrl.search + responseUrl.hash;
  }
  mergeProps(pageResponse) {
    if (!this.requestParams.isPartial() || pageResponse.component !== page$1.get().component) {
      return;
    }
    const propsToMerge = pageResponse.mergeProps || [];
    const propsToDeepMerge = pageResponse.deepMergeProps || [];
    const matchPropsOn = pageResponse.matchPropsOn || [];
    propsToMerge.forEach((prop) => {
      const incomingProp = pageResponse.props[prop];
      if (Array.isArray(incomingProp)) {
        pageResponse.props[prop] = this.mergeOrMatchItems(
          page$1.get().props[prop] || [],
          incomingProp,
          prop,
          matchPropsOn
        );
      } else if (typeof incomingProp === "object" && incomingProp !== null) {
        pageResponse.props[prop] = {
          ...page$1.get().props[prop] || [],
          ...incomingProp
        };
      }
    });
    propsToDeepMerge.forEach((prop) => {
      const incomingProp = pageResponse.props[prop];
      const currentProp2 = page$1.get().props[prop];
      const deepMerge = (target, source, currentKey) => {
        if (Array.isArray(source)) {
          return this.mergeOrMatchItems(target, source, currentKey, matchPropsOn);
        }
        if (typeof source === "object" && source !== null) {
          return Object.keys(source).reduce(
            (acc, key2) => {
              acc[key2] = deepMerge(target ? target[key2] : void 0, source[key2], `${currentKey}.${key2}`);
              return acc;
            },
            { ...target }
          );
        }
        return source;
      };
      pageResponse.props[prop] = deepMerge(currentProp2, incomingProp, prop);
    });
    pageResponse.props = { ...page$1.get().props, ...pageResponse.props };
  }
  mergeOrMatchItems(target, source, currentKey, matchPropsOn) {
    const matchOn = matchPropsOn.find((key2) => {
      const path = key2.split(".").slice(0, -1).join(".");
      return path === currentKey;
    });
    if (!matchOn) {
      return [...Array.isArray(target) ? target : [], ...source];
    }
    const uniqueProperty = matchOn.split(".").pop() || "";
    const targetArray = Array.isArray(target) ? target : [];
    const map = /* @__PURE__ */ new Map();
    targetArray.forEach((item) => {
      if (item && typeof item === "object" && uniqueProperty in item) {
        map.set(item[uniqueProperty], item);
      } else {
        map.set(Symbol(), item);
      }
    });
    source.forEach((item) => {
      if (item && typeof item === "object" && uniqueProperty in item) {
        map.set(item[uniqueProperty], item);
      } else {
        map.set(Symbol(), item);
      }
    });
    return Array.from(map.values());
  }
  async setRememberedState(pageResponse) {
    const rememberedState = await history.getState(history.rememberedState, {});
    if (this.requestParams.all().preserveState && rememberedState && pageResponse.component === page$1.get().component) {
      pageResponse.rememberedState = rememberedState;
    }
  }
  getScopedErrors(errors) {
    if (!this.requestParams.all().errorBag) {
      return errors;
    }
    return errors[this.requestParams.all().errorBag || ""] || {};
  }
};
var Request$1 = class _Request {
  constructor(params, page2) {
    this.page = page2;
    this.requestHasFinished = false;
    this.requestParams = RequestParams.create(params);
    this.cancelToken = new AbortController();
  }
  static create(params, page2) {
    return new _Request(params, page2);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: true }));
    fireStartEvent(this.requestParams.all());
    this.requestParams.onStart();
    if (this.requestParams.all().prefetch) {
      this.requestParams.onPrefetching();
      firePrefetchingEvent(this.requestParams.all());
    }
    const originallyPrefetch = this.requestParams.all().prefetch;
    return axios({
      method: this.requestParams.all().method,
      url: urlWithoutHash(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((response) => {
      this.response = Response$1.create(this.requestParams, response, this.page);
      return this.response.handle();
    }).catch((error) => {
      if (error?.response) {
        this.response = Response$1.create(this.requestParams, error.response, this.page);
        return this.response.handle();
      }
      return Promise.reject(error);
    }).catch((error) => {
      if (axios.isCancel(error)) {
        return;
      }
      if (fireExceptionEvent(error)) {
        return Promise.reject(error);
      }
    }).finally(() => {
      this.finish();
      if (originallyPrefetch && this.response) {
        this.requestParams.onPrefetchResponse(this.response);
      }
    });
  }
  finish() {
    if (this.requestParams.wasCancelledAtAll()) {
      return;
    }
    this.requestParams.markAsFinished();
    this.fireFinishEvents();
  }
  fireFinishEvents() {
    if (this.requestHasFinished) {
      return;
    }
    this.requestHasFinished = true;
    fireFinishEvent(this.requestParams.all());
    this.requestParams.onFinish();
  }
  cancel({ cancelled = false, interrupted = false }) {
    if (this.requestHasFinished) {
      return;
    }
    this.cancelToken.abort();
    this.requestParams.markAsCancelled({ cancelled, interrupted });
    this.fireFinishEvents();
  }
  onProgress(progress3) {
    if (this.requestParams.data() instanceof FormData) {
      progress3.percentage = progress3.progress ? Math.round(progress3.progress * 100) : 0;
      fireProgressEvent(progress3);
      this.requestParams.all().onProgress(progress3);
    }
  }
  getHeaders() {
    const headers = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": true
    };
    if (page$1.get().version) {
      headers["X-Inertia-Version"] = page$1.get().version;
    }
    return headers;
  }
};
var RequestStream = class {
  constructor({ maxConcurrent, interruptible }) {
    this.requests = [];
    this.maxConcurrent = maxConcurrent;
    this.interruptible = interruptible;
  }
  send(request) {
    this.requests.push(request);
    request.send().then(() => {
      this.requests = this.requests.filter((r) => r !== request);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: true }, false);
  }
  cancelInFlight() {
    this.cancel({ cancelled: true }, true);
  }
  cancel({ cancelled = false, interrupted = false } = {}, force) {
    if (!this.shouldCancel(force)) {
      return;
    }
    const request = this.requests.shift();
    request?.cancel({ interrupted, cancelled });
  }
  shouldCancel(force) {
    if (force) {
      return true;
    }
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
};
var Router = class {
  constructor() {
    this.syncRequestStream = new RequestStream({
      maxConcurrent: 1,
      interruptible: true
    });
    this.asyncRequestStream = new RequestStream({
      maxConcurrent: Infinity,
      interruptible: false
    });
  }
  init({ initialPage, resolveComponent: resolveComponent2, swapComponent }) {
    page$1.init({
      initialPage,
      resolveComponent: resolveComponent2,
      swapComponent
    });
    InitialVisit.handle();
    eventHandler.init();
    eventHandler.on("missingHistoryItem", () => {
      if (typeof window !== "undefined") {
        this.visit(window.location.href, { preserveState: true, preserveScroll: true, replace: true });
      }
    });
    eventHandler.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(url, data = {}, options = {}) {
    return this.visit(url, { ...options, method: "get", data });
  }
  post(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "post", data });
  }
  put(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "put", data });
  }
  patch(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "patch", data });
  }
  delete(url, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "delete" });
  }
  reload(options = {}) {
    if (typeof window === "undefined") {
      return;
    }
    return this.visit(window.location.href, {
      ...options,
      preserveScroll: true,
      preserveState: true,
      async: true,
      headers: {
        ...options.headers || {},
        "Cache-Control": "no-cache"
      }
    });
  }
  remember(data, key2 = "default") {
    history.remember(data, key2);
  }
  restore(key2 = "default") {
    return history.restore(key2);
  }
  on(type2, callback) {
    if (typeof window === "undefined") {
      return () => {
      };
    }
    return eventHandler.onGlobalEvent(type2, callback);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight();
    this.syncRequestStream.cancelInFlight();
  }
  poll(interval, requestOptions = {}, options = {}) {
    return polls.add(interval, () => this.reload(requestOptions), {
      autoStart: options.autoStart ?? true,
      keepAlive: options.keepAlive ?? false
    });
  }
  visit(href, options = {}) {
    const visit = this.getPendingVisit(href, {
      ...options,
      showProgress: options.showProgress ?? !options.async
    });
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    const requestStream = visit.async ? this.asyncRequestStream : this.syncRequestStream;
    requestStream.interruptInFlight();
    if (!page$1.isCleared() && !visit.preserveUrl) {
      Scroll.save();
    }
    const requestParams = {
      ...visit,
      ...events
    };
    const prefetched = prefetchedRequests.get(requestParams);
    if (prefetched) {
      reveal(prefetched.inFlight);
      prefetchedRequests.use(prefetched, requestParams);
    } else {
      reveal(true);
      requestStream.send(Request$1.create(requestParams, page$1.get()));
    }
  }
  getCached(href, options = {}) {
    return prefetchedRequests.findCached(this.getPrefetchParams(href, options));
  }
  flush(href, options = {}) {
    prefetchedRequests.remove(this.getPrefetchParams(href, options));
  }
  flushAll() {
    prefetchedRequests.removeAll();
  }
  getPrefetching(href, options = {}) {
    return prefetchedRequests.findInFlight(this.getPrefetchParams(href, options));
  }
  prefetch(href, options = {}, { cacheFor = 3e4 }) {
    if (options.method !== "get") {
      throw new Error("Prefetch requests must use the GET method");
    }
    const visit = this.getPendingVisit(href, {
      ...options,
      async: true,
      showProgress: false,
      prefetch: true
    });
    const visitUrl = visit.url.origin + visit.url.pathname + visit.url.search;
    const currentUrl = window.location.origin + window.location.pathname + window.location.search;
    if (visitUrl === currentUrl) {
      return;
    }
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    hide();
    this.asyncRequestStream.interruptInFlight();
    const requestParams = {
      ...visit,
      ...events
    };
    const ensureCurrentPageIsSet = () => {
      return new Promise((resolve2) => {
        const checkIfPageIsDefined = () => {
          if (page$1.get()) {
            resolve2();
          } else {
            setTimeout(checkIfPageIsDefined, 50);
          }
        };
        checkIfPageIsDefined();
      });
    };
    ensureCurrentPageIsSet().then(() => {
      prefetchedRequests.add(
        requestParams,
        (params) => {
          this.asyncRequestStream.send(Request$1.create(params, page$1.get()));
        },
        { cacheFor }
      );
    });
  }
  clearHistory() {
    history.clear();
  }
  decryptHistory() {
    return history.decrypt();
  }
  resolveComponent(component2) {
    return page$1.resolve(component2);
  }
  replace(params) {
    this.clientVisit(params, { replace: true });
  }
  push(params) {
    this.clientVisit(params);
  }
  clientVisit(params, { replace = false } = {}) {
    const current = page$1.get();
    const props = typeof params.props === "function" ? params.props(current.props) : params.props ?? current.props;
    const { onError, onFinish, onSuccess, ...pageParams } = params;
    page$1.set(
      {
        ...current,
        ...pageParams,
        props
      },
      {
        replace,
        preserveScroll: params.preserveScroll,
        preserveState: params.preserveState
      }
    ).then(() => {
      const errors = page$1.get().props.errors || {};
      if (Object.keys(errors).length === 0) {
        return onSuccess?.(page$1.get());
      }
      const scopedErrors = params.errorBag ? errors[params.errorBag || ""] || {} : errors;
      return onError?.(scopedErrors);
    }).finally(() => onFinish?.(params));
  }
  getPrefetchParams(href, options) {
    return {
      ...this.getPendingVisit(href, {
        ...options,
        async: true,
        showProgress: false,
        prefetch: true
      }),
      ...this.getVisitEvents(options)
    };
  }
  getPendingVisit(href, options, pendingVisitOptions = {}) {
    const mergedOptions = {
      method: "get",
      data: {},
      replace: false,
      preserveScroll: false,
      preserveState: false,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: false,
      queryStringArrayFormat: "brackets",
      async: false,
      showProgress: true,
      fresh: false,
      reset: [],
      preserveUrl: false,
      prefetch: false,
      ...options
    };
    const [url, _data] = transformUrlAndData(
      href,
      mergedOptions.data,
      mergedOptions.method,
      mergedOptions.forceFormData,
      mergedOptions.queryStringArrayFormat
    );
    const visit = {
      cancelled: false,
      completed: false,
      interrupted: false,
      ...mergedOptions,
      ...pendingVisitOptions,
      url,
      data: _data
    };
    if (visit.prefetch) {
      visit.headers["Purpose"] = "prefetch";
    }
    return visit;
  }
  getVisitEvents(options) {
    return {
      onCancelToken: options.onCancelToken || (() => {
      }),
      onBefore: options.onBefore || (() => {
      }),
      onStart: options.onStart || (() => {
      }),
      onProgress: options.onProgress || (() => {
      }),
      onFinish: options.onFinish || (() => {
      }),
      onCancel: options.onCancel || (() => {
      }),
      onSuccess: options.onSuccess || (() => {
      }),
      onError: options.onError || (() => {
      }),
      onPrefetched: options.onPrefetched || (() => {
      }),
      onPrefetching: options.onPrefetching || (() => {
      })
    };
  }
  loadDeferredProps() {
    const deferred = page$1.get()?.deferredProps;
    if (deferred) {
      Object.entries(deferred).forEach(([_, group]) => {
        this.reload({ only: group });
      });
    }
  }
};
var Renderer = {
  buildDOMElement(tag) {
    const template = document.createElement("template");
    template.innerHTML = tag;
    const node = template.content.firstChild;
    if (!tag.startsWith("<script ")) {
      return node;
    }
    const script = document.createElement("script");
    script.innerHTML = node.innerHTML;
    node.getAttributeNames().forEach((name) => {
      script.setAttribute(name, node.getAttribute(name) || "");
    });
    return script;
  },
  isInertiaManagedElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.getAttribute("inertia") !== null;
  },
  findMatchingElementIndex(element, elements) {
    const key2 = element.getAttribute("inertia");
    if (key2 !== null) {
      return elements.findIndex((element2) => element2.getAttribute("inertia") === key2);
    }
    return -1;
  },
  update: debounce(function(elements) {
    const sourceElements = elements.map((element) => this.buildDOMElement(element));
    const targetElements = Array.from(document.head.childNodes).filter(
      (element) => this.isInertiaManagedElement(element)
    );
    targetElements.forEach((targetElement) => {
      const index2 = this.findMatchingElementIndex(targetElement, sourceElements);
      if (index2 === -1) {
        targetElement?.parentNode?.removeChild(targetElement);
        return;
      }
      const sourceElement = sourceElements.splice(index2, 1)[0];
      if (sourceElement && !targetElement.isEqualNode(sourceElement)) {
        targetElement?.parentNode?.replaceChild(sourceElement, targetElement);
      }
    });
    sourceElements.forEach((element) => document.head.appendChild(element));
  }, 1)
};
function createHeadManager(isServer2, titleCallback, onUpdate) {
  const states = {};
  let lastProviderId = 0;
  function connect() {
    const id = lastProviderId += 1;
    states[id] = [];
    return id.toString();
  }
  function disconnect(id) {
    if (id === null || Object.keys(states).indexOf(id) === -1) {
      return;
    }
    delete states[id];
    commit2();
  }
  function reconnect(id) {
    if (Object.keys(states).indexOf(id) === -1) {
      states[id] = [];
    }
  }
  function update3(id, elements = []) {
    if (id !== null && Object.keys(states).indexOf(id) > -1) {
      states[id] = elements;
    }
    commit2();
  }
  function collect() {
    const title = titleCallback("");
    const defaults2 = {
      ...title ? { title: `<title inertia="">${title}</title>` } : {}
    };
    const elements = Object.values(states).reduce((carry, elements2) => carry.concat(elements2), []).reduce((carry, element) => {
      if (element.indexOf("<") === -1) {
        return carry;
      }
      if (element.indexOf("<title ") === 0) {
        const title2 = element.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        carry.title = title2 ? `${title2[1]}${titleCallback(title2[2])}${title2[3]}` : element;
        return carry;
      }
      const match = element.match(/ inertia="[^"]+"/);
      if (match) {
        carry[match[0]] = element;
      } else {
        carry[Object.keys(carry).length] = element;
      }
      return carry;
    }, defaults2);
    return Object.values(elements);
  }
  function commit2() {
    isServer2 ? onUpdate(collect()) : Renderer.update(collect());
  }
  commit2();
  return {
    forceUpdate: commit2,
    createProvider: function() {
      const id = connect();
      return {
        reconnect: () => reconnect(id),
        update: (elements) => update3(id, elements),
        disconnect: () => disconnect(id)
      };
    }
  };
}
var baseComponentSelector = "nprogress";
var progress;
var settings = {
  minimum: 0.08,
  easing: "linear",
  positionUsing: "translate3d",
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: true,
  template: [
    '<div class="bar" role="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner" role="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
};
var status = null;
var configure = (options) => {
  Object.assign(settings, options);
  if (settings.includeCSS) {
    injectCSS(settings.color);
  }
  progress = document.createElement("div");
  progress.id = baseComponentSelector;
  progress.innerHTML = settings.template;
};
var set$1 = (n) => {
  const started = isStarted();
  n = clamp(n, settings.minimum, 1);
  status = n === 1 ? null : n;
  const progress3 = render$1(!started);
  const bar = progress3.querySelector(settings.barSelector);
  const speed = settings.speed;
  const ease = settings.easing;
  progress3.offsetWidth;
  queue3((next) => {
    const barStyles = (() => {
      if (settings.positionUsing === "translate3d") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate3d(${toBarPercentage(n)}%,0,0)`
        };
      }
      if (settings.positionUsing === "translate") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate(${toBarPercentage(n)}%,0)`
        };
      }
      return { marginLeft: `${toBarPercentage(n)}%` };
    })();
    for (const key2 in barStyles) {
      bar.style[key2] = barStyles[key2];
    }
    if (n !== 1) {
      return setTimeout(next, speed);
    }
    progress3.style.transition = "none";
    progress3.style.opacity = "1";
    progress3.offsetWidth;
    setTimeout(() => {
      progress3.style.transition = `all ${speed}ms linear`;
      progress3.style.opacity = "0";
      setTimeout(() => {
        remove$1();
        progress3.style.transition = "";
        progress3.style.opacity = "";
        next();
      }, speed);
    }, speed);
  });
};
var isStarted = () => typeof status === "number";
var start = () => {
  if (!status) {
    set$1(0);
  }
  const work = function() {
    setTimeout(function() {
      if (!status) {
        return;
      }
      increaseByRandom();
      work();
    }, settings.trickleSpeed);
  };
  if (settings.trickle) {
    work();
  }
};
var done = (force) => {
  if (!force && !status) {
    return;
  }
  increaseByRandom(0.3 + 0.5 * Math.random());
  set$1(1);
};
var increaseByRandom = (amount) => {
  const n = status;
  if (n === null) {
    return start();
  }
  if (n > 1) {
    return;
  }
  amount = typeof amount === "number" ? amount : (() => {
    const ranges = {
      0.1: [0, 0.2],
      0.04: [0.2, 0.5],
      0.02: [0.5, 0.8],
      5e-3: [0.8, 0.99]
    };
    for (const r in ranges) {
      if (n >= ranges[r][0] && n < ranges[r][1]) {
        return parseFloat(r);
      }
    }
    return 0;
  })();
  return set$1(clamp(n + amount, 0, 0.994));
};
var render$1 = (fromStart) => {
  if (isRendered()) {
    return document.getElementById(baseComponentSelector);
  }
  document.documentElement.classList.add(`${baseComponentSelector}-busy`);
  const bar = progress.querySelector(settings.barSelector);
  const perc = fromStart ? "-100" : toBarPercentage(status || 0);
  const parent = getParent();
  bar.style.transition = "all 0 linear";
  bar.style.transform = `translate3d(${perc}%,0,0)`;
  if (!settings.showSpinner) {
    progress.querySelector(settings.spinnerSelector)?.remove();
  }
  if (parent !== document.body) {
    parent.classList.add(`${baseComponentSelector}-custom-parent`);
  }
  parent.appendChild(progress);
  return progress;
};
var getParent = () => {
  return isDOM(settings.parent) ? settings.parent : document.querySelector(settings.parent);
};
var remove$1 = () => {
  document.documentElement.classList.remove(`${baseComponentSelector}-busy`);
  getParent().classList.remove(`${baseComponentSelector}-custom-parent`);
  progress?.remove();
};
var isRendered = () => {
  return document.getElementById(baseComponentSelector) !== null;
};
var isDOM = (obj) => {
  if (typeof HTMLElement === "object") {
    return obj instanceof HTMLElement;
  }
  return obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string";
};
function clamp(n, min2, max2) {
  if (n < min2) {
    return min2;
  }
  if (n > max2) {
    return max2;
  }
  return n;
}
var toBarPercentage = (n) => (-1 + n) * 100;
var queue3 = /* @__PURE__ */ (() => {
  const pending = [];
  const next = () => {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1) {
      next();
    }
  };
})();
var injectCSS = (color) => {
  const element = document.createElement("style");
  element.textContent = `
    #${baseComponentSelector} {
      pointer-events: none;
    }

    #${baseComponentSelector} .bar {
      background: ${color};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${baseComponentSelector} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${baseComponentSelector} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${baseComponentSelector} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${color};
      border-left-color: ${color};
      border-radius: 50%;

      animation: ${baseComponentSelector}-spinner 400ms linear infinite;
    }

    .${baseComponentSelector}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .spinner,
    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .bar {
      position: absolute;
    }

    @keyframes ${baseComponentSelector}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(element);
};
var show = () => {
  if (progress) {
    progress.style.display = "";
  }
};
var hide2 = () => {
  if (progress) {
    progress.style.display = "none";
  }
};
var progress_component_default = {
  configure,
  isStarted,
  done,
  set: set$1,
  remove: remove$1,
  start,
  status,
  show,
  hide: hide2
};
var hideCount = 0;
var reveal = (force = false) => {
  hideCount = Math.max(0, hideCount - 1);
  if (force || hideCount === 0) {
    progress_component_default.show();
  }
};
var hide = () => {
  hideCount++;
  progress_component_default.hide();
};
function addEventListeners(delay) {
  document.addEventListener("inertia:start", (e) => start2(e, delay));
  document.addEventListener("inertia:progress", progress2);
}
function start2(event, delay) {
  if (!event.detail.visit.showProgress) {
    hide();
  }
  const timeout = setTimeout(() => progress_component_default.start(), delay);
  document.addEventListener("inertia:finish", (e) => finish(e, timeout), { once: true });
}
function progress2(event) {
  if (progress_component_default.isStarted() && event.detail.progress?.percentage) {
    progress_component_default.set(Math.max(progress_component_default.status, event.detail.progress.percentage / 100 * 0.9));
  }
}
function finish(event, timeout) {
  clearTimeout(timeout);
  if (!progress_component_default.isStarted()) {
    return;
  }
  if (event.detail.visit.completed) {
    progress_component_default.done();
  } else if (event.detail.visit.interrupted) {
    progress_component_default.set(0);
  } else if (event.detail.visit.cancelled) {
    progress_component_default.done();
    progress_component_default.remove();
  }
}
function setupProgress({
  delay = 250,
  color = "#29d",
  includeCSS = true,
  showSpinner = false
} = {}) {
  addEventListeners(delay);
  progress_component_default.configure({ showSpinner, includeCSS, color });
}
function shouldIntercept(event) {
  const isLink = event.currentTarget.tagName.toLowerCase() === "a";
  return !(event.target && (event?.target).isContentEditable || event.defaultPrevented || isLink && event.altKey || isLink && event.ctrlKey || isLink && event.metaKey || isLink && event.shiftKey || isLink && "button" in event && event.button !== 0);
}
var router = new Router();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
/**
* @vue/compat v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  for (const key2 of str.split(",")) map2[key2] = 1;
  return (val) => val in map2;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key2) => key2.charCodeAt(0) === 111 && key2.charCodeAt(1) === 110 && // uppercase letter
(key2.charCodeAt(2) > 122 || key2.charCodeAt(2) < 97);
const isModelListener = (key2) => key2.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key2) => hasOwnProperty$1.call(val, key2);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return (isObject$2(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key2) => isString(key2) && key2 !== "NaN" && key2[0] !== "-" && "" + parseInt(key2, 10) === key2;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key2, value, writable = false) => {
  Object.defineProperty(obj, key2, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function genCacheKey(source, options) {
  return source + JSON.stringify(
    options,
    (_, val) => typeof val === "function" ? val.toString() : val
  );
}
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key2 in normalized) {
          res[key2] = normalized[key2];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject$2(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$2(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a, b2) {
  if (a.length !== b2.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b2[i]);
  }
  return equal;
}
function looseEqual(a, b2) {
  if (a === b2) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b2.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b2);
  if (aValidType || bValidType) {
    return a === b2;
  }
  aValidType = isArray(a);
  bValidType = isArray(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b2) : false;
  }
  aValidType = isObject$2(a);
  bValidType = isObject$2(b2);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b2).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key2 in a) {
      const aHasKey = a.hasOwnProperty(key2);
      const bHasKey = b2.hasOwnProperty(key2);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key2], b2[key2])) {
        return false;
      }
    }
  }
  return String(a) === String(b2);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$2(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key2, val2], i) => {
          entries[stringifySymbol(key2, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$2(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v2) ? `Symbol(${(_a = v2.description) != null ? _a : i})` : v2
  );
};
function normalizeCssVarValue(value) {
  if (value == null) {
    return "initial";
  }
  if (typeof value === "string") {
    return value === "" ? " " : value;
  }
  return String(value);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const e = new ReactiveEffect(fn);
  if (options) {
    extend(e, options);
  }
  try {
    e.run();
  } catch (err) {
    e.stop();
    throw err;
  }
  const runner = e.run.bind(e);
  runner.effect = e;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
let Link$1 = class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link$1(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type2, key2) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key2);
    if (!dep) {
      depsMap.set(key2, dep = new Dep());
      dep.map = depsMap;
      dep.key = key2;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type2, key2, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type2 === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key2);
    if (targetIsArray && key2 === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key22) => {
        if (key22 === "length" || key22 === ARRAY_ITERATE_KEY || !isSymbol(key22) && key22 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key2 !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key2));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type2) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key2) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key2);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v2) => v2.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index2) {
        return fn.call(this, toReactive(item), index2, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index2) {
        return fn.call(this, item, index2, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, toReactive(item), index2, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, item, index2, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key2) => key2 !== "arguments" && key2 !== "caller").map((key2) => Symbol[key2]).filter(isSymbol)
);
function hasOwnProperty(key2) {
  if (!isSymbol(key2)) key2 = String(key2);
  const obj = toRaw(this);
  track(obj, "has", key2);
  return obj.hasOwnProperty(key2);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key2, receiver) {
    if (key2 === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_isShallow") {
      return isShallow2;
    } else if (key2 === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key2])) {
        return fn;
      }
      if (key2 === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key2,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol(key2) ? builtInSymbols.has(key2) : isNonTrackableKeys(key2)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key2);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key2) ? res : res.value;
    }
    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key2, value, receiver) {
    let oldValue = target[key2];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key2) ? Number(key2) < target.length : hasOwn(target, key2);
    const result = Reflect.set(
      target,
      key2,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key2, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key2, value);
      }
    }
    return result;
  }
  deleteProperty(target, key2) {
    const hadKey = hasOwn(target, key2);
    target[key2];
    const result = Reflect.deleteProperty(target, key2);
    if (result && hadKey) {
      trigger(target, "delete", key2, void 0);
    }
    return result;
  }
  has(target, key2) {
    const result = Reflect.has(target, key2);
    if (!isSymbol(key2) || !builtInSymbols.has(key2)) {
      track(target, "has", key2);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key2) {
    return true;
  }
  deleteProperty(target, key2) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done: done2 } = innerIterator.next();
        return done2 ? { value, done: done2 } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done2
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type2) {
  return function(...args) {
    return type2 === "delete" ? false : type2 === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key2) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key2);
      if (!readonly2) {
        if (hasChanged(key2, rawKey)) {
          track(rawTarget, "get", key2);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has: has2 } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key2)) {
        return wrap(target.get(key2));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key2);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key2) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key2);
      if (!readonly2) {
        if (hasChanged(key2, rawKey)) {
          track(rawTarget, "has", key2);
        }
        track(rawTarget, "has", rawKey);
      }
      return key2 === rawKey ? target.has(key2) : target.has(key2) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key2) => {
        return callback.call(thisArg, wrap(value), wrap(key2), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key2, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has: has2, get: get3 } = getProto(target);
        let hadKey = has2.call(target, key2);
        if (!hadKey) {
          key2 = toRaw(key2);
          hadKey = has2.call(target, key2);
        }
        const oldValue = get3.call(target, key2);
        target.set(key2, value);
        if (!hadKey) {
          trigger(target, "add", key2, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key2, value);
        }
        return this;
      },
      delete(key2) {
        const target = toRaw(this);
        const { has: has2, get: get3 } = getProto(target);
        let hadKey = has2.call(target, key2);
        if (!hadKey) {
          key2 = toRaw(key2);
          hadKey = has2.call(target, key2);
        }
        get3 ? get3.call(target, key2) : void 0;
        const result = target.delete(key2);
        if (hadKey) {
          trigger(target, "delete", key2, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key2, receiver) => {
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key2) && key2 in target ? instrumentations : target,
      key2,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$2(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$2(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function triggerRef(ref2) {
  if (ref2.dep) {
    {
      ref2.dep.trigger();
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key2, receiver) => key2 === "__v_raw" ? target : unref(Reflect.get(target, key2, receiver)),
  set: (target, key2, value, receiver) => {
    const oldValue = target[key2];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key2, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get: get3, set: set2 } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get3;
    this._set = set2;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key2 in object) {
    ret[key2] = propertyToRef(object, key2);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
  }
  get value() {
    const val = this._object[this._key];
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef(source, key2, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$2(source) && arguments.length > 1) {
    return propertyToRef(source, key2, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key2, defaultValue) {
  const val = source[key2];
  return isRef(val) ? val : new ObjectRefImpl(source, key2, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
  return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once: once2, scheduler, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once2 && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i) => hasChanged(v2, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen2) {
  if (depth <= 0 || !isObject$2(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen2);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, depth, seen2);
    });
  } else if (isPlainObject(value)) {
    for (const key2 in value) {
      traverse(value[key2], depth, seen2);
    }
    for (const key2 of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key2)) {
        traverse(value[key2], depth, seen2);
      }
    }
  }
  return value;
}
const stack$1 = [];
function pushWarningContext(vnode) {
  stack$1.push(vnode);
}
function popWarningContext() {
  stack$1.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack$1[stack$1.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key2) => {
    res.push(...formatProp(key2, props[key2]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key2, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key2}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key2}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key2, toRaw(value.value), true);
    return raw ? value : [`${key2}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key2}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key2}=`, value];
  }
}
function assertNumber(val, type2) {
  return;
}
const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER",
  "COMPONENT_UPDATE": 15,
  "15": "COMPONENT_UPDATE",
  "APP_UNMOUNT_CLEANUP": 16,
  "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type2, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type2);
  }
}
function callWithAsyncErrorHandling(fn, instance, type2, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type2, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type2);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type2, args));
    }
    return values;
  }
}
function handleError(err, instance, type2, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type2}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type2, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type2, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start3 = flushIndex + 1;
  let end = queue.length;
  while (start3 < end) {
    const middle = start3 + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start3 = middle + 1;
    } else {
      end = middle;
    }
  }
  return start3;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen2, i = flushIndex + 1) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b2) => getId(a) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen2) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let devtools$1;
let buffer = [];
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        buffer = [];
      }
    }, 3e3);
  } else {
    buffer = [];
  }
}
const DeprecationTypes$1 = {
  "GLOBAL_MOUNT": "GLOBAL_MOUNT",
  "GLOBAL_MOUNT_CONTAINER": "GLOBAL_MOUNT_CONTAINER",
  "GLOBAL_EXTEND": "GLOBAL_EXTEND",
  "GLOBAL_PROTOTYPE": "GLOBAL_PROTOTYPE",
  "GLOBAL_SET": "GLOBAL_SET",
  "GLOBAL_DELETE": "GLOBAL_DELETE",
  "GLOBAL_OBSERVABLE": "GLOBAL_OBSERVABLE",
  "GLOBAL_PRIVATE_UTIL": "GLOBAL_PRIVATE_UTIL",
  "CONFIG_SILENT": "CONFIG_SILENT",
  "CONFIG_DEVTOOLS": "CONFIG_DEVTOOLS",
  "CONFIG_KEY_CODES": "CONFIG_KEY_CODES",
  "CONFIG_PRODUCTION_TIP": "CONFIG_PRODUCTION_TIP",
  "CONFIG_IGNORED_ELEMENTS": "CONFIG_IGNORED_ELEMENTS",
  "CONFIG_WHITESPACE": "CONFIG_WHITESPACE",
  "CONFIG_OPTION_MERGE_STRATS": "CONFIG_OPTION_MERGE_STRATS",
  "INSTANCE_SET": "INSTANCE_SET",
  "INSTANCE_DELETE": "INSTANCE_DELETE",
  "INSTANCE_DESTROY": "INSTANCE_DESTROY",
  "INSTANCE_EVENT_EMITTER": "INSTANCE_EVENT_EMITTER",
  "INSTANCE_EVENT_HOOKS": "INSTANCE_EVENT_HOOKS",
  "INSTANCE_CHILDREN": "INSTANCE_CHILDREN",
  "INSTANCE_LISTENERS": "INSTANCE_LISTENERS",
  "INSTANCE_SCOPED_SLOTS": "INSTANCE_SCOPED_SLOTS",
  "INSTANCE_ATTRS_CLASS_STYLE": "INSTANCE_ATTRS_CLASS_STYLE",
  "OPTIONS_DATA_FN": "OPTIONS_DATA_FN",
  "OPTIONS_DATA_MERGE": "OPTIONS_DATA_MERGE",
  "OPTIONS_BEFORE_DESTROY": "OPTIONS_BEFORE_DESTROY",
  "OPTIONS_DESTROYED": "OPTIONS_DESTROYED",
  "WATCH_ARRAY": "WATCH_ARRAY",
  "PROPS_DEFAULT_THIS": "PROPS_DEFAULT_THIS",
  "V_ON_KEYCODE_MODIFIER": "V_ON_KEYCODE_MODIFIER",
  "CUSTOM_DIR": "CUSTOM_DIR",
  "ATTR_FALSE_VALUE": "ATTR_FALSE_VALUE",
  "ATTR_ENUMERATED_COERCION": "ATTR_ENUMERATED_COERCION",
  "TRANSITION_CLASSES": "TRANSITION_CLASSES",
  "TRANSITION_GROUP_ROOT": "TRANSITION_GROUP_ROOT",
  "COMPONENT_ASYNC": "COMPONENT_ASYNC",
  "COMPONENT_FUNCTIONAL": "COMPONENT_FUNCTIONAL",
  "COMPONENT_V_MODEL": "COMPONENT_V_MODEL",
  "RENDER_FUNCTION": "RENDER_FUNCTION",
  "FILTERS": "FILTERS",
  "PRIVATE_APIS": "PRIVATE_APIS"
};
function warnDeprecation$1(key2, instance, ...args) {
  {
    return;
  }
}
const globalCompatConfig = {
  MODE: 2
};
function configureCompat$1(config) {
  extend(globalCompatConfig, config);
}
function getCompatConfigForKey(key2, instance) {
  const instanceConfig = instance && instance.type.compatConfig;
  if (instanceConfig && key2 in instanceConfig) {
    return instanceConfig[key2];
  }
  return globalCompatConfig[key2];
}
function isCompatEnabled$1(key2, instance, enableForBuiltIn = false) {
  if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) {
    return false;
  }
  const rawMode = getCompatConfigForKey("MODE", instance) || 2;
  const val = getCompatConfigForKey(key2, instance);
  const mode = isFunction(rawMode) ? rawMode(instance && instance.type) : rawMode;
  if (mode === 2) {
    return val !== false;
  } else {
    return val === true || val === "suppress-warning";
  }
}
function assertCompatEnabled(key2, instance, ...args) {
  if (!isCompatEnabled$1(key2, instance)) {
    throw new Error(`${key2} compat has been disabled.`);
  }
}
function softAssertCompatEnabled(key2, instance, ...args) {
  return isCompatEnabled$1(key2, instance);
}
function checkCompatEnabled$1(key2, instance, ...args) {
  const enabled = isCompatEnabled$1(key2, instance);
  return enabled;
}
const eventRegistryMap = /* @__PURE__ */ new WeakMap();
function getRegistry(instance) {
  let events = eventRegistryMap.get(instance);
  if (!events) {
    eventRegistryMap.set(instance, events = /* @__PURE__ */ Object.create(null));
  }
  return events;
}
function on(instance, event, fn) {
  if (isArray(event)) {
    event.forEach((e) => on(instance, e, fn));
  } else {
    if (event.startsWith("hook:")) {
      assertCompatEnabled(
        "INSTANCE_EVENT_HOOKS",
        instance,
        event
      );
    } else {
      assertCompatEnabled("INSTANCE_EVENT_EMITTER", instance);
    }
    const events = getRegistry(instance);
    (events[event] || (events[event] = [])).push(fn);
  }
  return instance.proxy;
}
function once(instance, event, fn) {
  const wrapped = (...args) => {
    off(instance, event, wrapped);
    fn.apply(instance.proxy, args);
  };
  wrapped.fn = fn;
  on(instance, event, wrapped);
  return instance.proxy;
}
function off(instance, event, fn) {
  assertCompatEnabled("INSTANCE_EVENT_EMITTER", instance);
  const vm = instance.proxy;
  if (!event) {
    eventRegistryMap.set(instance, /* @__PURE__ */ Object.create(null));
    return vm;
  }
  if (isArray(event)) {
    event.forEach((e) => off(instance, e, fn));
    return vm;
  }
  const events = getRegistry(instance);
  const cbs = events[event];
  if (!cbs) {
    return vm;
  }
  if (!fn) {
    events[event] = void 0;
    return vm;
  }
  events[event] = cbs.filter((cb) => !(cb === fn || cb.fn === fn));
  return vm;
}
function emit$1(instance, event, args) {
  const cbs = getRegistry(instance)[event];
  if (cbs) {
    callWithAsyncErrorHandling(
      cbs.map((cb) => cb.bind(instance.proxy)),
      instance,
      6,
      args
    );
  }
  return instance.proxy;
}
const compatModelEventPrefix = `onModelCompat:`;
function convertLegacyVModelProps(vnode) {
  const { type: type2, shapeFlag, props, dynamicProps } = vnode;
  const comp = type2;
  if (shapeFlag & 6 && props && "modelValue" in props) {
    if (!isCompatEnabled$1(
      "COMPONENT_V_MODEL",
      // this is a special case where we want to use the vnode component's
      // compat config instead of the current rendering instance (which is the
      // parent of the component that exposes v-model)
      { type: type2 }
    )) {
      return;
    }
    const model = comp.model || {};
    applyModelFromMixins(model, comp.mixins);
    const { prop = "value", event = "input" } = model;
    if (prop !== "modelValue") {
      props[prop] = props.modelValue;
      delete props.modelValue;
    }
    if (dynamicProps) {
      dynamicProps[dynamicProps.indexOf("modelValue")] = prop;
    }
    props[compatModelEventPrefix + event] = props["onUpdate:modelValue"];
    delete props["onUpdate:modelValue"];
  }
}
function applyModelFromMixins(model, mixins2) {
  if (mixins2) {
    mixins2.forEach((m2) => {
      if (m2.model) extend(model, m2.model);
      if (m2.mixins) applyModelFromMixins(model, m2.mixins);
    });
  }
}
function compatModelEmit(instance, event, args) {
  if (!isCompatEnabled$1("COMPONENT_V_MODEL", instance)) {
    return;
  }
  const props = instance.vnode.props;
  const modelHandler = props && props[compatModelEventPrefix + event];
  if (modelHandler) {
    callWithErrorHandling(
      modelHandler,
      instance,
      6,
      args
    );
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  if (!currentScopeId) {
    currentScopeId = instance && instance.type._scopeId || null;
  }
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  if (isNonScopedSlot) {
    renderFnWithContext._ns = true;
  }
  return renderFnWithContext;
}
const legacyDirectiveHookMap = {
  beforeMount: "bind",
  mounted: "inserted",
  updated: ["update", "componentUpdated"],
  unmounted: "unbind"
};
function mapCompatDirectiveHook(name, dir, instance) {
  const mappedName = legacyDirectiveHookMap[name];
  if (mappedName) {
    if (isArray(mappedName)) {
      const hook = [];
      mappedName.forEach((mapped) => {
        const mappedHook = dir[mapped];
        if (mappedHook) {
          softAssertCompatEnabled(
            "CUSTOM_DIR",
            instance,
            mapped,
            name
          );
          hook.push(mappedHook);
        }
      });
      return hook.length ? hook : void 0;
    } else {
      if (dir[mappedName]) {
        softAssertCompatEnabled(
          "CUSTOM_DIR",
          instance,
          mappedName,
          name
        );
      }
      return dir[mappedName];
    }
  }
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (!hook) {
      hook = mapCompatDirectiveHook(name, binding.dir, instance);
    }
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type2) => type2.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state2 = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state2.isMounted = true;
  });
  onBeforeUnmount(() => {
    state2.isUnmounting = true;
  });
  return state2;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state2 = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state2.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state2,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state2,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state2.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state2.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state2,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
{
  BaseTransitionImpl.__isBuiltIn = true;
}
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state2, vnode) {
  const { leavingVNodes } = state2;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state2, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key2 = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state2, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done2 = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done2();
    } else if (hook.length <= 1) {
      done2();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state2.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key2];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state2.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done2 = el[enterCbKey$1] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done2]);
      } else {
        done2();
      }
    },
    leave(el, remove2) {
      const key22 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state2.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done2 = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key22] === vnode) {
          delete leavingVNodesCache[key22];
        }
      };
      leavingVNodesCache[key22] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done2]);
      } else {
        done2();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state2,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key2 = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key2)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key2 != null ? cloneVNode(child, { key: key2 }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function useTemplateRef(key2) {
  const i = getCurrentInstance();
  const r = shallowRef(null);
  if (i) {
    const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
    {
      Object.defineProperty(refs, key2, {
        enumerable: true,
        get: () => r.value,
        set: (val) => r.value = val
      });
    }
  }
  const ret = r;
  return ret;
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key2) => {
    return hasOwn(rawSetupState, key2);
  };
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (canSetSetupRef(ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (canSetSetupRef(ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate2 = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type: type2, ref: ref2, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type2) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode2(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode2(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else ;
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type: type2, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type2 === "input" || type2 === "option";
    if (forcePatch || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode2(el)) {
        needCallTransitionHooks = needTransition(
          null,
          // no need check parentSuspense in hydration
          transition
        ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          const cls = content.getAttribute("class");
          if (cls) content.$cls = cls;
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        while (next) {
          if (!isMismatchAllowed(
            el,
            1
            /* CHILDREN */
          )) {
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        if (el.textContent !== clientText) {
          if (!isMismatchAllowed(
            el,
            0
            /* TEXT */
          )) {
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (forcePatch || !optimized || patchFlag & (16 | 32)) {
          const isCustomElement = el.tagName.includes("-");
          for (const key2 in props) {
            if (forcePatch && (key2.endsWith("value") || key2 === "indeterminate") || isOn(key2) && !isReservedProp(key2) || // force hydrate v-bind with .prop modifiers
            key2[0] === "." || isCustomElement) {
              patchProp2(el, key2, null, props[key2], void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            void 0,
            parentComponent
          );
        } else if (patchFlag & 4 && isReactive(props.style)) {
          for (const key2 in props.style) props.style[key2];
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      const isText2 = vnode.type === Text;
      if (node) {
        if (isText2 && !optimized) {
          if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
            insert(
              createText(
                node.data.slice(vnode.children.length)
              ),
              container,
              nextSibling(node)
            );
            node.data = vnode.children;
          }
        }
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (isText2 && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(
          container,
          1
          /* CHILDREN */
        )) {
          logMismatchError();
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(
      node.parentElement,
      1
      /* CHILDREN */
    )) {
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode2 = (node) => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate2, hydrateNode];
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [
    0
    /* TEXT */
  ]: "text",
  [
    1
    /* CHILDREN */
  ]: "children",
  [
    2
    /* CLASS */
  ]: "class",
  [
    3
    /* STYLE */
  ]: "style",
  [
    4
    /* ATTRIBUTE */
  ]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 || allowedType === 1) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 && list.includes("children")) {
      return true;
    }
    return list.includes(MismatchTypeString[allowedType]);
  }
}
const requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
const cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4) => (hydrate2) => {
  const id = requestIdleCallback(hydrate2, { timeout });
  return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = (opts) => (hydrate2, forEach2) => {
  const ob = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      ob.disconnect();
      hydrate2();
      break;
    }
  }, opts);
  forEach2((el) => {
    if (!(el instanceof Element)) return;
    if (elementIsVisibleInViewport(el)) {
      hydrate2();
      ob.disconnect();
      return false;
    }
    ob.observe(el);
  });
  return () => ob.disconnect();
};
const hydrateOnMediaQuery = (query) => (hydrate2) => {
  if (query) {
    const mql = matchMedia(query);
    if (mql.matches) {
      hydrate2();
    } else {
      mql.addEventListener("change", hydrate2, { once: true });
      return () => mql.removeEventListener("change", hydrate2);
    }
  }
};
const hydrateOnInteraction = (interactions = []) => (hydrate2, forEach2) => {
  if (isString(interactions)) interactions = [interactions];
  let hasHydrated = false;
  const doHydrate = (e) => {
    if (!hasHydrated) {
      hasHydrated = true;
      teardown();
      hydrate2();
      e.target.dispatchEvent(new e.constructor(e.type, e));
    }
  };
  const teardown = () => {
    forEach2((el) => {
      for (const i of interactions) {
        el.removeEventListener(i, doHydrate);
      }
    });
  };
  forEach2((el) => {
    for (const i of interactions) {
      el.addEventListener(i, doHydrate, { once: true });
    }
  });
  return teardown;
};
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate2) {
      let patched2 = false;
      (instance.bu || (instance.bu = [])).push(() => patched2 = true);
      const performHydrate = () => {
        if (patched2) {
          return;
        }
        hydrate2();
      };
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(
          performHydrate,
          (cb) => forEachElement(el, cb)
        );
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : performHydrate;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          invokeArrayFns(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          invokeArrayFns(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter2) {
      cache.forEach((vnode, key2) => {
        const name = getComponentName(vnode.type);
        if (name && !filter2(name)) {
          pruneCacheEntry(key2);
        }
      });
    }
    function pruneCacheEntry(key2) {
      const cached = cache.get(key2);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key2);
      keys.delete(key2);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max: max2 } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        vnode.shapeFlag &= -257;
        current = vnode;
        return rawVNode;
      }
      const key2 = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key2);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key2;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key2);
        keys.add(key2);
      } else {
        keys.add(key2);
        if (max2 && keys.size > parseInt(max2, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const decorate$2 = (t) => {
  t.__isBuiltIn = true;
  return t;
};
const KeepAlive = /* @__PURE__ */ decorate$2(KeepAliveImpl);
function matches(pattern, name) {
  if (isArray(pattern)) {
    return pattern.some((p2) => matches(p2, name));
  } else if (isString(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type2, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type2, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type2, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
  const injected = injectHook(
    type2,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type2], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= -257;
  vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type2, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type2] || (target[type2] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset2 = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type2, args);
      reset2();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function getCompatChildren(instance) {
  assertCompatEnabled("INSTANCE_CHILDREN", instance);
  const root = instance.subTree;
  const children = [];
  if (root) {
    walk$1(root, children);
  }
  return children;
}
function walk$1(vnode, children) {
  if (vnode.component) {
    children.push(vnode.component.proxy);
  } else if (vnode.shapeFlag & 16) {
    const vnodes = vnode.children;
    for (let i = 0; i < vnodes.length; i++) {
      walk$1(vnodes[i], children);
    }
  }
}
function getCompatListeners(instance) {
  assertCompatEnabled("INSTANCE_LISTENERS", instance);
  const listeners = {};
  const rawProps = instance.vnode.props;
  if (!rawProps) {
    return listeners;
  }
  for (const key2 in rawProps) {
    if (isOn(key2)) {
      listeners[key2[2].toLowerCase() + key2.slice(3)] = rawProps[key2];
    }
  }
  return listeners;
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
const FILTERS = "filters";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component2) {
  if (isString(component2)) {
    return resolveAsset(COMPONENTS, component2, false) || component2;
  } else {
    return component2 || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveFilter$1(name) {
  return resolveAsset(FILTERS, name);
}
function resolveAsset(type2, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type2 === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type2] || Component[type2], name) || // global registration
      resolve(instance.appContext[type2], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function convertLegacyRenderFn(instance) {
  const Component = instance.type;
  const render2 = Component.render;
  if (!render2 || render2._rc || render2._compatChecked || render2._compatWrapped) {
    return;
  }
  if (render2.length >= 2) {
    render2._compatChecked = true;
    return;
  }
  if (checkCompatEnabled$1("RENDER_FUNCTION", instance)) {
    const wrapped = Component.render = function compatRender() {
      return render2.call(this, compatH);
    };
    wrapped._compatWrapped = true;
  }
}
function compatH(type2, propsOrChildren, children) {
  if (!type2) {
    type2 = Comment;
  }
  if (typeof type2 === "string") {
    const t = hyphenate(type2);
    if (t === "transition" || t === "transition-group" || t === "keep-alive") {
      type2 = `__compat__${t}`;
    }
    type2 = resolveDynamicComponent(type2);
  }
  const l = arguments.length;
  const is2ndArgArrayChildren = isArray(propsOrChildren);
  if (l === 2 || is2ndArgArrayChildren) {
    if (isObject$2(propsOrChildren) && !is2ndArgArrayChildren) {
      if (isVNode(propsOrChildren)) {
        return convertLegacySlots(createVNode(type2, null, [propsOrChildren]));
      }
      return convertLegacySlots(
        convertLegacyDirectives(
          createVNode(type2, convertLegacyProps(propsOrChildren, type2)),
          propsOrChildren
        )
      );
    } else {
      return convertLegacySlots(createVNode(type2, null, propsOrChildren));
    }
  } else {
    if (isVNode(children)) {
      children = [children];
    }
    return convertLegacySlots(
      convertLegacyDirectives(
        createVNode(type2, convertLegacyProps(propsOrChildren, type2), children),
        propsOrChildren
      )
    );
  }
}
const skipLegacyRootLevelProps = /* @__PURE__ */ makeMap(
  "staticStyle,staticClass,directives,model,hook"
);
function convertLegacyProps(legacyProps, type2) {
  if (!legacyProps) {
    return null;
  }
  const converted = {};
  for (const key2 in legacyProps) {
    if (key2 === "attrs" || key2 === "domProps" || key2 === "props") {
      extend(converted, legacyProps[key2]);
    } else if (key2 === "on" || key2 === "nativeOn") {
      const listeners = legacyProps[key2];
      for (const event in listeners) {
        let handlerKey = convertLegacyEventKey(event);
        if (key2 === "nativeOn") handlerKey += `Native`;
        const existing = converted[handlerKey];
        const incoming = listeners[event];
        if (existing !== incoming) {
          if (existing) {
            converted[handlerKey] = [].concat(existing, incoming);
          } else {
            converted[handlerKey] = incoming;
          }
        }
      }
    } else if (!skipLegacyRootLevelProps(key2)) {
      converted[key2] = legacyProps[key2];
    }
  }
  if (legacyProps.staticClass) {
    converted.class = normalizeClass([legacyProps.staticClass, converted.class]);
  }
  if (legacyProps.staticStyle) {
    converted.style = normalizeStyle([legacyProps.staticStyle, converted.style]);
  }
  if (legacyProps.model && isObject$2(type2)) {
    const { prop = "value", event = "input" } = type2.model || {};
    converted[prop] = legacyProps.model.value;
    converted[compatModelEventPrefix + event] = legacyProps.model.callback;
  }
  return converted;
}
function convertLegacyEventKey(event) {
  if (event[0] === "&") {
    event = event.slice(1) + "Passive";
  }
  if (event[0] === "~") {
    event = event.slice(1) + "Once";
  }
  if (event[0] === "!") {
    event = event.slice(1) + "Capture";
  }
  return toHandlerKey(event);
}
function convertLegacyDirectives(vnode, props) {
  if (props && props.directives) {
    return withDirectives(
      vnode,
      props.directives.map(({ name, value, arg, modifiers }) => {
        return [
          resolveDirective(name),
          value,
          arg,
          modifiers
        ];
      })
    );
  }
  return vnode;
}
function convertLegacySlots(vnode) {
  const { props, children } = vnode;
  let slots;
  if (vnode.shapeFlag & 6 && isArray(children)) {
    slots = {};
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const slotName = isVNode(child) && child.props && child.props.slot || "default";
      const slot = slots[slotName] || (slots[slotName] = []);
      if (isVNode(child) && child.type === "template") {
        slot.push(child.children);
      } else {
        slot.push(child);
      }
    }
    if (slots) {
      for (const key2 in slots) {
        const slotChildren = slots[key2];
        slots[key2] = () => slotChildren;
        slots[key2]._ns = true;
      }
    }
  }
  const scopedSlots = props && props.scopedSlots;
  if (scopedSlots) {
    delete props.scopedSlots;
    if (slots) {
      extend(slots, scopedSlots);
    } else {
      slots = scopedSlots;
    }
  }
  if (slots) {
    normalizeChildren(vnode, slots);
  }
  return vnode;
}
function defineLegacyVNodeProperties(vnode) {
  if (isCompatEnabled$1(
    "RENDER_FUNCTION",
    currentRenderingInstance,
    true
  ) && isCompatEnabled$1(
    "PRIVATE_APIS",
    currentRenderingInstance,
    true
  )) {
    const context = currentRenderingInstance;
    const getInstance = () => vnode.component && vnode.component.proxy;
    let componentOptions;
    Object.defineProperties(vnode, {
      tag: { get: () => vnode.type },
      data: { get: () => vnode.props || {}, set: (p2) => vnode.props = p2 },
      elm: { get: () => vnode.el },
      componentInstance: { get: getInstance },
      child: { get: getInstance },
      text: { get: () => isString(vnode.children) ? vnode.children : null },
      context: { get: () => context && context.proxy },
      componentOptions: {
        get: () => {
          if (vnode.shapeFlag & 4) {
            if (componentOptions) {
              return componentOptions;
            }
            return componentOptions = {
              Ctor: vnode.type,
              propsData: vnode.props,
              children: vnode.children
            };
          }
        }
      }
    });
  }
}
const normalizedFunctionalComponentMap = /* @__PURE__ */ new WeakMap();
const legacySlotProxyHandlers = {
  get(target, key2) {
    const slot = target[key2];
    return slot && slot();
  }
};
function convertLegacyFunctionalComponent(comp) {
  if (normalizedFunctionalComponentMap.has(comp)) {
    return normalizedFunctionalComponentMap.get(comp);
  }
  const legacyFn = comp.render;
  const Func = (props, ctx) => {
    const instance = getCurrentInstance();
    const legacyCtx = {
      props,
      children: instance.vnode.children || [],
      data: instance.vnode.props || {},
      scopedSlots: ctx.slots,
      parent: instance.parent && instance.parent.proxy,
      slots() {
        return new Proxy(ctx.slots, legacySlotProxyHandlers);
      },
      get listeners() {
        return getCompatListeners(instance);
      },
      get injections() {
        if (comp.inject) {
          const injections = {};
          resolveInjections(comp.inject, injections);
          return injections;
        }
        return {};
      }
    };
    return legacyFn(compatH, legacyCtx);
  };
  Func.props = comp.props;
  Func.displayName = comp.name;
  Func.compatConfig = comp.compatConfig;
  Func.inheritAttrs = false;
  normalizedFunctionalComponentMap.set(comp, Func);
  return Func;
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  const sourceIsArray = isArray(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
        i,
        void 0,
        cached && cached[i]
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$2(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key2 = keys[i];
        ret[i] = renderItem(source[key2], key2, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key2 in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key2) ? `on:${key2}` : toHandlerKey(key2)] = obj[key2];
  }
  return ret;
}
function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
function legacyBindObjectProps(data, _tag, value, _asProp, isSync) {
  if (value && isObject$2(value)) {
    if (isArray(value)) {
      value = toObject(value);
    }
    for (const key2 in value) {
      if (isReservedProp(key2)) {
        data[key2] = value[key2];
      } else if (key2 === "class") {
        data.class = normalizeClass([data.class, value.class]);
      } else if (key2 === "style") {
        data.style = normalizeClass([data.style, value.style]);
      } else {
        const attrs = data.attrs || (data.attrs = {});
        const camelizedKey = camelize(key2);
        const hyphenatedKey = hyphenate(key2);
        if (!(camelizedKey in attrs) && !(hyphenatedKey in attrs)) {
          attrs[key2] = value[key2];
          if (isSync) {
            const on2 = data.on || (data.on = {});
            on2[`update:${key2}`] = function($event) {
              value[key2] = $event;
            };
          }
        }
      }
    }
  }
  return data;
}
function legacyBindObjectListeners(props, listeners) {
  return mergeProps(props, toHandlers(listeners));
}
function legacyRenderSlot(instance, name, fallback, props, bindObject) {
  if (bindObject) {
    props = mergeProps(props, bindObject);
  }
  return renderSlot(instance.slots, name, props, fallback && (() => fallback));
}
function legacyresolveScopedSlots(fns, raw, hasDynamicKeys) {
  return createSlots(
    raw || { $stable: !hasDynamicKeys },
    mapKeyToName(fns)
  );
}
function mapKeyToName(slots) {
  for (let i = 0; i < slots.length; i++) {
    const fn = slots[i];
    if (fn) {
      if (isArray(fn)) {
        mapKeyToName(fn);
      } else {
        fn.name = fn.key || "default";
      }
    }
  }
  return slots;
}
const staticCacheMap = /* @__PURE__ */ new WeakMap();
function legacyRenderStatic(instance, index2) {
  let cache = staticCacheMap.get(instance);
  if (!cache) {
    staticCacheMap.set(instance, cache = []);
  }
  if (cache[index2]) {
    return cache[index2];
  }
  const fn = instance.type.staticRenderFns[index2];
  const ctx = instance.proxy;
  return cache[index2] = fn.call(ctx, null, ctx);
}
function legacyCheckKeyCodes(instance, eventKeyCode, key2, builtInKeyCode, eventKeyName, builtInKeyName) {
  const config = instance.appContext.config;
  const configKeyCodes = config.keyCodes || {};
  const mappedKeyCode = configKeyCodes[key2] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !configKeyCodes[key2]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key2;
  }
}
function isKeyNotMatch(expect, actual) {
  if (isArray(expect)) {
    return !expect.includes(actual);
  } else {
    return expect !== actual;
  }
}
function legacyMarkOnce(tree) {
  return tree;
}
function legacyBindDynamicKeys(props, values) {
  for (let i = 0; i < values.length; i += 2) {
    const key2 = values[i];
    if (typeof key2 === "string" && key2) {
      props[values[i]] = values[i + 1];
    }
  }
  return props;
}
function legacyPrependModifier(value, symbol) {
  return typeof value === "string" ? symbol + value : value;
}
function installCompatInstanceProperties(map2) {
  const set2 = (target, key2, val) => {
    target[key2] = val;
    return target[key2];
  };
  const del = (target, key2) => {
    delete target[key2];
  };
  extend(map2, {
    $set: (i) => {
      assertCompatEnabled("INSTANCE_SET", i);
      return set2;
    },
    $delete: (i) => {
      assertCompatEnabled("INSTANCE_DELETE", i);
      return del;
    },
    $mount: (i) => {
      assertCompatEnabled(
        "GLOBAL_MOUNT",
        null
      );
      return i.ctx._compat_mount || NOOP;
    },
    $destroy: (i) => {
      assertCompatEnabled("INSTANCE_DESTROY", i);
      return i.ctx._compat_destroy || NOOP;
    },
    // overrides existing accessor
    $slots: (i) => {
      if (isCompatEnabled$1("RENDER_FUNCTION", i) && i.render && i.render._compatWrapped) {
        return new Proxy(i.slots, legacySlotProxyHandlers);
      }
      return i.slots;
    },
    $scopedSlots: (i) => {
      assertCompatEnabled("INSTANCE_SCOPED_SLOTS", i);
      return i.slots;
    },
    $on: (i) => on.bind(null, i),
    $once: (i) => once.bind(null, i),
    $off: (i) => off.bind(null, i),
    $children: getCompatChildren,
    $listeners: getCompatListeners,
    // inject additional properties into $options for compat
    // e.g. vuex needs this.$options.parent
    $options: (i) => {
      if (!isCompatEnabled$1("PRIVATE_APIS", i)) {
        return resolveMergedOptions(i);
      }
      if (i.resolvedOptions) {
        return i.resolvedOptions;
      }
      const res = i.resolvedOptions = extend({}, resolveMergedOptions(i));
      Object.defineProperties(res, {
        parent: {
          get() {
            return i.proxy.$parent;
          }
        },
        propsData: {
          get() {
            return i.vnode.props;
          }
        }
      });
      return res;
    }
  });
  const privateAPIs = {
    // needed by many libs / render fns
    $vnode: (i) => i.vnode,
    // some private properties that are likely accessed...
    _self: (i) => i.proxy,
    _uid: (i) => i.uid,
    _data: (i) => i.data,
    _isMounted: (i) => i.isMounted,
    _isDestroyed: (i) => i.isUnmounted,
    // v2 render helpers
    $createElement: () => compatH,
    _c: () => compatH,
    _o: () => legacyMarkOnce,
    _n: () => looseToNumber,
    _s: () => toDisplayString,
    _l: () => renderList,
    _t: (i) => legacyRenderSlot.bind(null, i),
    _q: () => looseEqual,
    _i: () => looseIndexOf,
    _m: (i) => legacyRenderStatic.bind(null, i),
    _f: () => resolveFilter$1,
    _k: (i) => legacyCheckKeyCodes.bind(null, i),
    _b: () => legacyBindObjectProps,
    _v: () => createTextVNode,
    _e: () => createCommentVNode,
    _u: () => legacyresolveScopedSlots,
    _g: () => legacyBindObjectListeners,
    _d: () => legacyBindDynamicKeys,
    _p: () => legacyPrependModifier
  };
  for (const key2 in privateAPIs) {
    map2[key2] = (i) => {
      if (isCompatEnabled$1("PRIVATE_APIS", i)) {
        return privateAPIs[key2](i);
      }
    };
  }
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
{
  installCompatInstanceProperties(publicPropertiesMap);
}
const hasSetupBinding = (state2, key2) => state2 !== EMPTY_OBJ && !state2.__isScriptSetup && hasOwn(state2, key2);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key2) {
    if (key2 === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type: type2, appContext } = instance;
    let normalizedProps;
    if (key2[0] !== "$") {
      const n = accessCache[key2];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key2];
          case 2:
            return data[key2];
          case 4:
            return ctx[key2];
          case 3:
            return props[key2];
        }
      } else if (hasSetupBinding(setupState, key2)) {
        accessCache[key2] = 1;
        return setupState[key2];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key2)) {
        accessCache[key2] = 2;
        return data[key2];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key2)
      ) {
        accessCache[key2] = 3;
        return props[key2];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
        accessCache[key2] = 4;
        return ctx[key2];
      } else if (shouldCacheAccess) {
        accessCache[key2] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key2];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key2 === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type2.__cssModules) && (cssModule = cssModule[key2])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
      accessCache[key2] = 4;
      return ctx[key2];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key2)
    ) {
      {
        const desc = Object.getOwnPropertyDescriptor(globalProperties, key2);
        if (desc.get) {
          return desc.get.call(instance.proxy);
        } else {
          const val = globalProperties[key2];
          return isFunction(val) ? extend(val.bind(instance.proxy), val) : val;
        }
      }
    } else ;
  },
  set({ _: instance }, key2, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key2)) {
      setupState[key2] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key2)) {
      data[key2] = value;
      return true;
    } else if (hasOwn(instance.props, key2)) {
      return false;
    }
    if (key2[0] === "$" && key2.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key2] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key2) {
    let normalizedProps;
    return !!accessCache[key2] || data !== EMPTY_OBJ && hasOwn(data, key2) || hasSetupBinding(setupState, key2) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key2) || hasOwn(ctx, key2) || hasOwn(publicPropertiesMap, key2) || hasOwn(appContext.config.globalProperties, key2);
  },
  defineProperty(target, key2, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key2] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key2, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key2, descriptor);
  }
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
  get(target, key2) {
    if (key2 === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key2, target);
  },
  has(_, key2) {
    const has2 = key2[0] !== "_" && !isGloballyAllowed(key2);
    return has2;
  }
});
function deepMergeData(to, from) {
  for (const key2 in from) {
    const toVal = to[key2];
    const fromVal = from[key2];
    if (key2 in to && isPlainObject(toVal) && isPlainObject(fromVal)) {
      deepMergeData(toVal, fromVal);
    } else {
      to[key2] = fromVal;
    }
  }
  return to;
}
function defineProps() {
  return null;
}
function defineEmits() {
  return null;
}
function defineExpose(exposed) {
}
function defineOptions(options) {
}
function defineSlots() {
  return null;
}
function defineModel() {
}
function withDefaults(props, defaults2) {
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext(calledFunctionName) {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults2) {
  const props = normalizePropsOrEmits(raw);
  for (const key2 in defaults2) {
    if (key2.startsWith("__skip")) continue;
    let opt = props[key2];
    if (opt) {
      if (isArray(opt) || isFunction(opt)) {
        opt = props[key2] = { type: opt, default: defaults2[key2] };
      } else {
        opt.default = defaults2[key2];
      }
    } else if (opt === null) {
      opt = props[key2] = { default: defaults2[key2] };
    } else ;
    if (opt && defaults2[`__skip_${key2}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b2) {
  if (!a || !b2) return a || b2;
  if (isArray(a) && isArray(b2)) return a.concat(b2);
  return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b2));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key2 in props) {
    if (!excludedKeys.includes(key2)) {
      Object.defineProperty(ret, key2, {
        enumerable: true,
        get: () => props[key2]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if (isPromise$1(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key2 in methods) {
      const methodHandler = methods[key2];
      if (isFunction(methodHandler)) {
        {
          ctx[key2] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$2(data)) ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key2 in computedOptions) {
      const opt = computedOptions[key2];
      const get3 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get3,
        set: set2
      });
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v2) => c.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key2 in watchOptions) {
      createWatcher(watchOptions[key2], ctx, publicThis, key2);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key2) => {
      provide(key2, provides[key2]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register2(_hook.bind(publicThis)));
    } else if (hook) {
      register2(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  {
    if (beforeDestroy && softAssertCompatEnabled("OPTIONS_BEFORE_DESTROY", instance)) {
      registerLifecycleHook(onBeforeUnmount, beforeDestroy);
    }
    if (destroyed && softAssertCompatEnabled("OPTIONS_DESTROYED", instance)) {
      registerLifecycleHook(onUnmounted, destroyed);
    }
  }
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key2) => {
        Object.defineProperty(exposed, key2, {
          get: () => publicThis[key2],
          set: (val) => publicThis[key2] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (filters && isCompatEnabled$1("FILTERS", instance)) {
    instance.filters = filters;
  }
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key2 in injectOptions) {
    const opt = injectOptions[key2];
    let injected;
    if (isObject$2(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key2,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key2);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key2] = injected;
    }
  }
}
function callHook$1(hook, instance, type2) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type2
  );
}
function createWatcher(raw, ctx, publicThis, key2) {
  let getter = key2.includes(".") ? createPathGetter(publicThis, key2) : () => publicThis[key2];
  const options = {};
  {
    const instance = currentInstance && getCurrentScope() === currentInstance.scope ? currentInstance : null;
    const newValue = getter();
    if (isArray(newValue) && isCompatEnabled$1("WATCH_ARRAY", instance)) {
      options.deep = true;
    }
    const baseGetter = getter;
    getter = () => {
      const val = baseGetter();
      if (isArray(val) && checkCompatEnabled$1("WATCH_ARRAY", instance)) {
        traverse(val);
      }
      return val;
    };
  }
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler, options);
      }
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis), options);
    }
  } else if (isObject$2(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key2));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, extend(raw, options));
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins: mixins2, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins2 && !extendsOptions) {
    if (isCompatEnabled$1("PRIVATE_APIS", instance)) {
      resolved = extend({}, base);
      resolved.parent = instance.parent && instance.parent.proxy;
      resolved.propsData = instance.vnode.props;
    } else {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$2(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  if (isFunction(from)) {
    from = from.options;
  }
  const { mixins: mixins2, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins2) {
    mixins2.forEach(
      (m2) => mergeOptions(to, m2, strats, true)
    );
  }
  for (const key2 in from) {
    if (asMixin && key2 === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key2] || strats && strats[key2];
      to[key2] = strat ? strat(to[key2], from[key2]) : from[key2];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
{
  internalOptionMergeStrats.filters = mergeObjectOptions;
}
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return (isCompatEnabled$1("OPTIONS_DATA_MERGE", null) ? deepMergeData : extend)(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key2 in from) {
    merged[key2] = mergeAsArray$1(to[key2], from[key2]);
  }
  return merged;
}
function installLegacyOptionMergeStrats(config) {
  config.optionMergeStrategies = new Proxy({}, {
    get(target, key2) {
      if (key2 in target) {
        return target[key2];
      }
      if (key2 in internalOptionMergeStrats && softAssertCompatEnabled(
        "CONFIG_OPTION_MERGE_STRATS",
        null
      )) {
        return internalOptionMergeStrats[key2];
      }
    }
  });
}
let singletonApp;
let singletonCtor;
function createCompatVue$1(createApp2, createSingletonApp) {
  singletonApp = createSingletonApp({});
  const Vue2 = singletonCtor = function Vue22(options = {}) {
    return createCompatApp(options, Vue22);
  };
  function createCompatApp(options = {}, Ctor) {
    assertCompatEnabled("GLOBAL_MOUNT", null);
    const { data } = options;
    if (data && !isFunction(data) && softAssertCompatEnabled("OPTIONS_DATA_FN", null)) {
      options.data = () => data;
    }
    const app = createApp2(options);
    if (Ctor !== Vue2) {
      applySingletonPrototype(app, Ctor);
    }
    const vm = app._createRoot(options);
    if (options.el) {
      return vm.$mount(options.el);
    } else {
      return vm;
    }
  }
  Vue2.version = `2.6.14-compat:${"3.5.18"}`;
  Vue2.config = singletonApp.config;
  Vue2.use = (plugin2, ...options) => {
    if (plugin2 && isFunction(plugin2.install)) {
      plugin2.install(Vue2, ...options);
    } else if (isFunction(plugin2)) {
      plugin2(Vue2, ...options);
    }
    return Vue2;
  };
  Vue2.mixin = (m2) => {
    singletonApp.mixin(m2);
    return Vue2;
  };
  Vue2.component = (name, comp) => {
    if (comp) {
      singletonApp.component(name, comp);
      return Vue2;
    } else {
      return singletonApp.component(name);
    }
  };
  Vue2.directive = (name, dir) => {
    if (dir) {
      singletonApp.directive(name, dir);
      return Vue2;
    } else {
      return singletonApp.directive(name);
    }
  };
  Vue2.options = { _base: Vue2 };
  let cid = 1;
  Vue2.cid = cid;
  Vue2.nextTick = nextTick;
  const extendCache = /* @__PURE__ */ new WeakMap();
  function extendCtor(extendOptions = {}) {
    assertCompatEnabled("GLOBAL_EXTEND", null);
    if (isFunction(extendOptions)) {
      extendOptions = extendOptions.options;
    }
    if (extendCache.has(extendOptions)) {
      return extendCache.get(extendOptions);
    }
    const Super = this;
    function SubVue(inlineOptions) {
      if (!inlineOptions) {
        return createCompatApp(SubVue.options, SubVue);
      } else {
        return createCompatApp(
          mergeOptions(
            extend({}, SubVue.options),
            inlineOptions,
            internalOptionMergeStrats
          ),
          SubVue
        );
      }
    }
    SubVue.super = Super;
    SubVue.prototype = Object.create(Vue2.prototype);
    SubVue.prototype.constructor = SubVue;
    const mergeBase = {};
    for (const key2 in Super.options) {
      const superValue = Super.options[key2];
      mergeBase[key2] = isArray(superValue) ? superValue.slice() : isObject$2(superValue) ? extend(/* @__PURE__ */ Object.create(null), superValue) : superValue;
    }
    SubVue.options = mergeOptions(
      mergeBase,
      extendOptions,
      internalOptionMergeStrats
    );
    SubVue.options._base = SubVue;
    SubVue.extend = extendCtor.bind(SubVue);
    SubVue.mixin = Super.mixin;
    SubVue.use = Super.use;
    SubVue.cid = ++cid;
    extendCache.set(extendOptions, SubVue);
    return SubVue;
  }
  Vue2.extend = extendCtor.bind(Vue2);
  Vue2.set = (target, key2, value) => {
    assertCompatEnabled("GLOBAL_SET", null);
    target[key2] = value;
  };
  Vue2.delete = (target, key2) => {
    assertCompatEnabled("GLOBAL_DELETE", null);
    delete target[key2];
  };
  Vue2.observable = (target) => {
    assertCompatEnabled("GLOBAL_OBSERVABLE", null);
    return reactive(target);
  };
  Vue2.filter = (name, filter2) => {
    if (filter2) {
      singletonApp.filter(name, filter2);
      return Vue2;
    } else {
      return singletonApp.filter(name);
    }
  };
  const util = {
    warn: NOOP,
    extend,
    mergeOptions: (parent, child, vm) => mergeOptions(
      parent,
      child,
      vm ? void 0 : internalOptionMergeStrats
    ),
    defineReactive
  };
  Object.defineProperty(Vue2, "util", {
    get() {
      assertCompatEnabled("GLOBAL_PRIVATE_UTIL", null);
      return util;
    }
  });
  Vue2.configureCompat = configureCompat$1;
  return Vue2;
}
function installAppCompatProperties(app, context, render2) {
  installFilterMethod(app, context);
  installLegacyOptionMergeStrats(app.config);
  if (!singletonApp) {
    return;
  }
  installCompatMount(app, context, render2);
  installLegacyAPIs(app);
  applySingletonAppMutations(app);
}
function installFilterMethod(app, context) {
  context.filters = {};
  app.filter = (name, filter2) => {
    assertCompatEnabled("FILTERS", null);
    if (!filter2) {
      return context.filters[name];
    }
    context.filters[name] = filter2;
    return app;
  };
}
function installLegacyAPIs(app) {
  Object.defineProperties(app, {
    // so that app.use() can work with legacy plugins that extend prototypes
    prototype: {
      get() {
        return app.config.globalProperties;
      }
    },
    nextTick: { value: nextTick },
    extend: { value: singletonCtor.extend },
    set: { value: singletonCtor.set },
    delete: { value: singletonCtor.delete },
    observable: { value: singletonCtor.observable },
    util: {
      get() {
        return singletonCtor.util;
      }
    }
  });
}
function applySingletonAppMutations(app) {
  app._context.mixins = [...singletonApp._context.mixins];
  ["components", "directives", "filters"].forEach((key2) => {
    app._context[key2] = Object.create(singletonApp._context[key2]);
  });
  for (const key2 in singletonApp.config) {
    if (key2 === "isNativeTag") continue;
    if (isRuntimeOnly() && (key2 === "isCustomElement" || key2 === "compilerOptions")) {
      continue;
    }
    const val = singletonApp.config[key2];
    app.config[key2] = isObject$2(val) ? Object.create(val) : val;
    if (key2 === "ignoredElements" && isCompatEnabled$1("CONFIG_IGNORED_ELEMENTS", null) && !isRuntimeOnly() && isArray(val)) {
      app.config.compilerOptions.isCustomElement = (tag) => {
        return val.some((v2) => isString(v2) ? v2 === tag : v2.test(tag));
      };
    }
  }
  applySingletonPrototype(app, singletonCtor);
}
function applySingletonPrototype(app, Ctor) {
  const enabled = isCompatEnabled$1("GLOBAL_PROTOTYPE", null);
  if (enabled) {
    app.config.globalProperties = Object.create(Ctor.prototype);
  }
  for (const key2 of Object.getOwnPropertyNames(Ctor.prototype)) {
    if (key2 !== "constructor") {
      if (enabled) {
        Object.defineProperty(
          app.config.globalProperties,
          key2,
          Object.getOwnPropertyDescriptor(Ctor.prototype, key2)
        );
      }
    }
  }
}
function installCompatMount(app, context, render2) {
  let isMounted = false;
  app._createRoot = (options) => {
    const component2 = app._component;
    const vnode = createVNode(component2, options.propsData || null);
    vnode.appContext = context;
    const hasNoRender = !isFunction(component2) && !component2.render && !component2.template;
    const emptyRender = () => {
    };
    const instance = createComponentInstance(vnode, null, null);
    if (hasNoRender) {
      instance.render = emptyRender;
    }
    setupComponent(instance);
    vnode.component = instance;
    vnode.isCompatRoot = true;
    instance.ctx._compat_mount = (selectorOrEl) => {
      if (isMounted) {
        return;
      }
      let container;
      if (typeof selectorOrEl === "string") {
        const result = document.querySelector(selectorOrEl);
        if (!result) {
          return;
        }
        container = result;
      } else {
        container = selectorOrEl || document.createElement("div");
      }
      let namespace;
      if (container instanceof SVGElement) namespace = "svg";
      else if (typeof MathMLElement === "function" && container instanceof MathMLElement)
        namespace = "mathml";
      if (hasNoRender && instance.render === emptyRender) {
        instance.render = null;
        component2.template = container.innerHTML;
        finishComponentSetup(
          instance,
          false,
          true
          /* skip options */
        );
      }
      container.textContent = "";
      render2(vnode, container, namespace);
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      isMounted = true;
      app._container = container;
      container.__vue_app__ = app;
      return instance.proxy;
    };
    instance.ctx._compat_destroy = () => {
      if (isMounted) {
        render2(null, app._container);
        delete app._container.__vue_app__;
      } else {
        const { bum, scope, um } = instance;
        if (bum) {
          invokeArrayFns(bum);
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          instance.emit("hook:beforeDestroy");
        }
        if (scope) {
          scope.stop();
        }
        if (um) {
          invokeArrayFns(um);
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          instance.emit("hook:destroyed");
        }
      }
    };
    return instance.proxy;
  };
}
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
const patched = /* @__PURE__ */ new WeakSet();
function defineReactive(obj, key2, val) {
  if (isObject$2(val) && !isReactive(val) && !patched.has(val)) {
    const reactiveVal = reactive(val);
    if (isArray(val)) {
      methodsToPatch.forEach((m2) => {
        val[m2] = (...args) => {
          Array.prototype[m2].apply(reactiveVal, args);
        };
      });
    } else {
      Object.keys(val).forEach((key22) => {
        try {
          defineReactiveSimple(val, key22, val[key22]);
        } catch (e) {
        }
      });
    }
  }
  const i = obj.$;
  if (i && obj === i.proxy) {
    defineReactiveSimple(i.ctx, key2, val);
    i.accessCache = /* @__PURE__ */ Object.create(null);
  } else if (isReactive(obj)) {
    obj[key2] = val;
  } else {
    defineReactiveSimple(obj, key2, val);
  }
}
function defineReactiveSimple(obj, key2, val) {
  val = isObject$2(val) ? reactive(val) : val;
  Object.defineProperty(obj, key2, {
    enumerable: true,
    configurable: true,
    get() {
      track(obj, "get", key2);
      return val;
    },
    set(newVal) {
      val = isObject$2(newVal) ? reactive(newVal) : newVal;
      trigger(obj, "set", key2, newVal);
    }
  });
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate2) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$2(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) ;
        else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component2) {
        if (!component2) {
          return context.components[name];
        }
        context.components[name] = component2;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate2) {
            hydrate2(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key2, value) {
        context.provides[key2] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    {
      installAppCompatProperties(app, context, render2);
    }
    return app;
  };
}
let currentApp = null;
function provide(key2, value) {
  if (!currentInstance) ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key2] = value;
  }
}
function inject(key2, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key2 in provides) {
      return provides[key2];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
function hasInjectionContext() {
  return !!(getCurrentInstance() || currentApp);
}
function createPropsDefaultThis(instance, rawProps, propKey) {
  return new Proxy(
    {},
    {
      get(_, key2) {
        if (key2 === "$options") {
          return resolveMergedOptions(instance);
        }
        if (key2 in rawProps) {
          return rawProps[key2];
        }
        const injections = instance.type.inject;
        if (injections) {
          if (isArray(injections)) {
            if (injections.includes(key2)) {
              return inject(key2);
            }
          } else if (key2 in injections) {
            return inject(key2);
          }
        }
      }
    }
  );
}
function shouldSkipAttr(key2, instance) {
  if (key2 === "is") {
    return true;
  }
  if ((key2 === "class" || key2 === "style") && isCompatEnabled$1("INSTANCE_ATTRS_CLASS_STYLE", instance)) {
    return true;
  }
  if (isOn(key2) && isCompatEnabled$1("INSTANCE_LISTENERS", instance)) {
    return true;
  }
  if (key2.startsWith("routerView") || key2 === "registerRouteInstance") {
    return true;
  }
  return false;
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key2 in instance.propsOptions[0]) {
    if (!(key2 in props)) {
      props[key2] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key2 = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key2)) {
          continue;
        }
        const value = rawProps[key2];
        if (options) {
          if (hasOwn(attrs, key2)) {
            if (value !== attrs[key2]) {
              attrs[key2] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key2);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          {
            if (isOn(key2) && key2.endsWith("Native")) {
              key2 = key2.slice(0, -6);
            } else if (shouldSkipAttr(key2, instance)) {
              continue;
            }
          }
          if (value !== attrs[key2]) {
            attrs[key2] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key2 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key2) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key2)) === key2 || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key2] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key2] = resolvePropValue(
              options,
              rawCurrentProps,
              key2,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key2];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key2 in attrs) {
        if (!rawProps || !hasOwn(rawProps, key2) && !hasOwn(rawProps, key2 + "Native")) {
          delete attrs[key2];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key2 in rawProps) {
      if (isReservedProp(key2)) {
        continue;
      }
      {
        if (key2.startsWith("onHook:")) {
          softAssertCompatEnabled(
            "INSTANCE_EVENT_HOOKS",
            instance,
            key2.slice(2).toLowerCase()
          );
        }
        if (key2 === "inline-template") {
          continue;
        }
      }
      const value = rawProps[key2];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key2))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key2)) {
        {
          if (isOn(key2) && key2.endsWith("Native")) {
            key2 = key2.slice(0, -6);
          } else if (shouldSkipAttr(key2, instance)) {
            continue;
          }
        }
        if (!(key2 in attrs) || value !== attrs[key2]) {
          attrs[key2] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key2 = needCastKeys[i];
      props[key2] = resolvePropValue(
        options,
        rawCurrentProps,
        key2,
        castValues[key2],
        instance,
        !hasOwn(castValues, key2)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key2, value, instance, isAbsent) {
  const opt = options[key2];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key2 in propsDefaults) {
          value = propsDefaults[key2];
        } else {
          const reset2 = setCurrentInstance(instance);
          value = propsDefaults[key2] = defaultValue.call(
            isCompatEnabled$1("PROPS_DEFAULT_THIS", instance) ? createPropsDefaultThis(instance, props) : null,
            props
          );
          reset2();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key2, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key2))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      if (isFunction(raw2)) {
        raw2 = raw2.options;
      }
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key2 in raw) {
      const normalizedKey = camelize(key2);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key2];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index2 = 0; index2 < propType.length; ++index2) {
            const type2 = propType[index2];
            const typeName = isFunction(type2) && type2.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$2(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key2) {
  if (key2[0] !== "$" && !isReservedProp(key2)) {
    return true;
  }
  return false;
}
const isInternalKey = (key2) => key2 === "_" || key2 === "__" || key2 === "_ctx" || key2 === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key2, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key2 in rawSlots) {
    if (isInternalKey(key2)) continue;
    const value = rawSlots[key2];
    if (isFunction(value)) {
      slots[key2] = normalizeSlot(key2, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key2] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key2 in children) {
    if (optimized || !isInternalKey(key2)) {
      slots[key2] = children[key2];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const cacheIndexes = children.__;
    if (cacheIndexes) def(slots, "__", cacheIndexes, true);
    const type2 = children._;
    if (type2) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type2, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type2 = children._;
    if (type2) {
      if (optimized && type2 === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key2 in slots) {
      if (!isInternalKey(key2) && deletionComparisonTarget[key2] == null) {
        delete slots[key2];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type: type2, ref: ref2, shapeFlag } = n2;
    switch (type2) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type2.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type2.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref2 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key2 in props) {
        if (key2 !== "value" && !isReservedProp(key2)) {
          hostPatchProp(el, key2, null, props[key2], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start3 = 0) => {
    for (let i = start3; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key2 = propsToUpdate[i];
            const prev = oldProps[key2];
            const next = newProps[key2];
            if (next !== prev || key2 === "value") {
              hostPatchProp(el, key2, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key2 in oldProps) {
          if (!isReservedProp(key2) && !(key2 in newProps)) {
            hostPatchProp(
              el,
              key2,
              oldProps[key2],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key2 in newProps) {
        if (isReservedProp(key2)) continue;
        const next = newProps[key2];
        const prev = oldProps[key2];
        if (next !== prev && key2 !== "value") {
          hostPatchProp(el, key2, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const compatMountInstance = initialVNode.isCompatRoot && initialVNode.component;
    const instance = compatMountInstance || (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ));
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    if (!compatMountInstance) {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m: m2, parent, root, type: type2 } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          instance.emit("hook:beforeMount");
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type2.__asyncHydrate) {
            type2.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type2);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m2) {
          queuePostRenderEffect(m2, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          queuePostRenderEffect(
            () => instance.emit("hook:mounted"),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
            queuePostRenderEffect(
              () => instance.emit("hook:activated"),
              parentSuspense
            );
          }
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          instance.emit("hook:beforeUpdate");
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
          queuePostRenderEffect(
            () => instance.emit("hook:updated"),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update3 = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update3();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched2 = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched2 >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched2++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, fallback to el placeholder for unresolved async component
          anchorVNode.el || anchorVNode.placeholder
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type: type2, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type2.move(vnode, container, anchor, internals);
      return;
    }
    if (type2 === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type2 === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type: type2,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref2 != null) {
      pauseTracking();
      setRef(ref2, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type2 !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type2 === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type: type2, el, anchor, transition } = vnode;
    if (type2 === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type2 === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m: m2,
      a,
      parent,
      slots: { __: slotCacheKeys }
    } = instance;
    invalidateMount(m2);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    if (parent && isArray(slotCacheKeys)) {
      slotCacheKeys.forEach((v2) => {
        parent.renderCache[v2] = void 0;
      });
    }
    if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
      instance.emit("hook:beforeDestroy");
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    if (isCompatEnabled$1("INSTANCE_EVENT_HOOKS", instance)) {
      queuePostRenderEffect(
        () => instance.emit("hook:destroyed"),
        parentSuspense
      );
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start3 = 0) => {
    for (let i = start3; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate2;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate2, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate: hydrate2,
    createApp: createAppAPI(render2, hydrate2)
  };
}
function resolveChildrenNamespace({ type: type2, props }, currentNamespace) {
  return currentNamespace === "svg" && type2 === "foreignObject" || currentNamespace === "mathml" && type2 === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v2, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v2 = result.length - 1;
      while (u < v2) {
        c = u + v2 >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v2 = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v2 = result[u - 1];
  while (u-- > 0) {
    result[u] = v2;
    v2 = p2[v2];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watchPostEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "post" }
  );
}
function watchSyncEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "sync" }
  );
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once: once2 } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type2, args) => callWithAsyncErrorHandling(fn, instance, type2, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset2 = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset2();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function useModel(props, name, options = EMPTY_OBJ) {
  const i = getCurrentInstance();
  const camelizedName = camelize(name);
  const hyphenatedName = hyphenate(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = customRef((track2, trigger2) => {
    let localValue;
    let prevSetValue = EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger2();
      }
    });
    return {
      get() {
        track2();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
          return;
        }
        const rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger2();
        }
        i.emit(`update:${name}`, emittedValue);
        if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
          trigger2();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return { value: i2++ ? modifiers || EMPTY_OBJ : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isCompatModelListener = compatModelEventPrefix + event in props;
  const isModelListener2 = isCompatModelListener || event.startsWith("update:");
  const modifiers = isCompatModelListener ? props.modelModifiers : isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
  {
    compatModelEmit(instance, event, args);
    return emit$1(instance, event, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$2(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key2) => normalized[key2] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$2(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key2) {
  if (!options || !isOn(key2)) {
    return false;
  }
  if (key2.startsWith(compatModelEventPrefix)) {
    return true;
  }
  key2 = key2.slice(2).replace(/Once$/, "");
  return hasOwn(options, key2[0].toLowerCase() + key2.slice(1)) || hasOwn(options, hyphenate(key2)) || hasOwn(options, key2);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key2, receiver) {
          warn$1(
            `Property '${String(
              key2
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key2, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false) ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (isCompatEnabled$1("INSTANCE_ATTRS_CLASS_STYLE", instance) && vnode.shapeFlag & 4 && root.shapeFlag & (1 | 6)) {
    const { class: cls, style } = vnode.props || {};
    if (cls || style) {
      root = cloneVNode(
        root,
        {
          class: cls,
          style
        },
        false,
        true
      );
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key2 in attrs) {
    if (key2 === "class" || key2 === "style" || isOn(key2)) {
      (res || (res = {}))[key2] = attrs[key2];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key2 in attrs) {
    if (!isModelListener(key2) || !(key2.slice(9) in props)) {
      res[key2] = attrs[key2];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component: component2 } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component2.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key2 = dynamicProps[i];
        if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emits, key2)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key2 = nextKeys[i];
    if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emitsOptions, key2)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type2) => type2.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if (isFunction(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    namespace,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: { parentNode, remove: remove2 }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(
                pendingBranch,
                container2,
                anchor === initialAnchor ? next(activeBranch) : anchor,
                0
              );
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) === container2) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type2) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type2);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace,
          optimized2
        );
        if (placeholder) {
          remove2(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if (isFunction(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if (isArray(s)) {
    const singleChild = filterSingleRoot(s);
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}
const normalizedAsyncComponentMap = /* @__PURE__ */ new WeakMap();
function convertLegacyAsyncComponent(comp) {
  if (normalizedAsyncComponentMap.has(comp)) {
    return normalizedAsyncComponentMap.get(comp);
  }
  let resolve2;
  let reject;
  const fallbackPromise = new Promise((r, rj) => {
    resolve2 = r, reject = rj;
  });
  const res = comp(resolve2, reject);
  let converted;
  if (isPromise$1(res)) {
    converted = /* @__PURE__ */ defineAsyncComponent(() => res);
  } else if (isObject$2(res) && !isVNode(res) && !isArray(res)) {
    converted = /* @__PURE__ */ defineAsyncComponent({
      loader: () => res.component,
      loadingComponent: res.loading,
      errorComponent: res.error,
      delay: res.delay,
      timeout: res.timeout
    });
  } else if (res == null) {
    converted = /* @__PURE__ */ defineAsyncComponent(() => fallbackPromise);
  } else {
    converted = comp;
  }
  normalizedAsyncComponentMap.set(comp, converted);
  return converted;
}
function convertLegacyComponent(comp, instance) {
  if (comp.__isBuiltIn) {
    return comp;
  }
  if (isFunction(comp) && comp.cid) {
    if (comp.render) {
      comp.options.render = comp.render;
    }
    comp.options.__file = comp.__file;
    comp.options.__hmrId = comp.__hmrId;
    comp.options.__scopeId = comp.__scopeId;
    comp = comp.options;
  }
  if (isFunction(comp) && checkCompatEnabled$1("COMPONENT_ASYNC", instance, comp)) {
    return convertLegacyAsyncComponent(comp);
  }
  if (isObject$2(comp) && comp.functional && softAssertCompatEnabled(
    "COMPONENT_FUNCTIONAL",
    instance,
    comp
  )) {
    return convertLegacyFunctionalComponent(comp);
  }
  return comp;
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type2, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type2,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type2, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type2,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
function transformVNodeArgs(transformer) {
}
const normalizeKey = ({ key: key2 }) => key2 != null ? key2 : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type2 === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type2,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type2.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  {
    convertLegacyVModelProps(vnode);
    defineLegacyVNodeProperties(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type2 || type2 === NULL_DYNAMIC_COMPONENT) {
    type2 = Comment;
  }
  if (isVNode(type2)) {
    const cloned = cloneVNode(
      type2,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type2)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type2)) {
    type2 = type2.__vccOpts;
  }
  {
    type2 = convertLegacyComponent(type2, currentRenderingInstance);
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$2(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type2) ? 1 : isSuspense(type2) ? 128 : isTeleport(type2) ? 64 : isObject$2(type2) ? 4 : isFunction(type2) ? 2 : 0;
  return createBaseVNode(
    type2,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref2, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  {
    defineLegacyVNodeProperties(cloned);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type2 = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type2 = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type2 = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type2 = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type2 = 16;
      children = [createTextVNode(children)];
    } else {
      type2 = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type2;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key2 in toMerge) {
      if (key2 === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key2 === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key2)) {
        const existing = ret[key2];
        const incoming = toMerge[key2];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key2] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key2 !== "") {
        ret[key2] = toMerge[key2];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type2 = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type: type2,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type2, appContext),
    emitsOptions: normalizeEmitsOptions(type2, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type2.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key2, setter) => {
    let setters;
    if (!(setters = g[key2])) setters = g[key2] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1) setters.forEach((set2) => set2(v2));
      else setters[0](v2);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => currentInstance = v2
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => isInSSRComponentSetup = v2
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset2 = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise$1(setupResult);
    resetTracking();
    reset2();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$2(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance, isSSR);
}
let compile$1;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile$1 = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile$1;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  {
    convertLegacyRenderFn(instance);
  }
  if (!instance.render) {
    if (!isSSR && compile$1 && !Component.render) {
      const template = instance.vnode.props && instance.vnode.props["inline-template"] || Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        {
          finalCompilerOptions.compatConfig = Object.create(globalCompatConfig);
          if (Component.compatConfig) {
            extend(finalCompilerOptions.compatConfig, Component.compatConfig);
          }
        }
        Component.render = compile$1(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (!skipOptions) {
    const reset2 = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset2();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key2) {
    track(target, "get", "");
    return target[key2];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key2) {
        if (key2 in target) {
          return target[key2];
        } else if (key2 in publicPropertiesMap) {
          return publicPropertiesMap[key2](instance);
        }
      },
      has(target, key2) {
        return key2 in target || key2 in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key2 in registry) {
        if (registry[key2] === Component) {
          return key2;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type2, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$2(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type2, null, [propsOrChildren]);
      }
      return createVNode(type2, propsOrChildren);
    } else {
      return createVNode(type2, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type2, propsOrChildren, children);
  }
}
function initCustomFormatter() {
  {
    return;
  }
}
function withMemo(memo, render2, cache, index2) {
  const cached = cache[index2];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render2();
  ret.memo = memo.slice();
  ret.cacheIndex = index2;
  return cache[index2] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if (hasChanged(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}
const version = "3.5.18";
const warn = NOOP;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode,
  normalizeVNode,
  getComponentPublicInstance,
  ensureValidVNode,
  pushWarningContext,
  popWarningContext
};
const ssrUtils = _ssrUtils;
const resolveFilter = resolveFilter$1;
const _compatUtils = {
  warnDeprecation: warnDeprecation$1,
  createCompatVue: createCompatVue$1,
  isCompatEnabled: isCompatEnabled$1,
  checkCompatEnabled: checkCompatEnabled$1,
  softAssertCompatEnabled
};
const compatUtils = _compatUtils;
const DeprecationTypes = DeprecationTypes$1;
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start3, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start3 && (start3 === end || start3.nextSibling)) {
      while (true) {
        parent.insertBefore(start3.cloneNode(true), anchor);
        if (start3 === end || !(start3 = start3.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION$1 = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  {
    t.__isBuiltIn = true;
  }
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key2 in rawProps) {
    if (!(key2 in DOMTransitionPropsValidators)) {
      baseProps[key2] = rawProps[key2];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type: type2,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const legacyClassEnabled = compatUtils.isCompatEnabled("TRANSITION_CLASSES", null);
  let legacyEnterFromClass;
  let legacyAppearFromClass;
  let legacyLeaveFromClass;
  if (legacyClassEnabled) {
    const toLegacyClass = (cls) => cls.replace(/-from$/, "");
    if (!rawProps.enterFromClass) {
      legacyEnterFromClass = toLegacyClass(enterFromClass);
    }
    if (!rawProps.appearFromClass) {
      legacyAppearFromClass = toLegacyClass(appearFromClass);
    }
    if (!rawProps.leaveFromClass) {
      legacyLeaveFromClass = toLegacyClass(leaveFromClass);
    }
  }
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done2, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done2 && done2();
  };
  const finishLeave = (el, done2) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done2 && done2();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done2) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done2);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        if (legacyClassEnabled) {
          const legacyClass = isAppear ? legacyAppearFromClass : legacyEnterFromClass;
          if (legacyClass) {
            removeTransitionClass(el, legacyClass);
          }
        }
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type2, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      if (legacyClassEnabled && legacyEnterFromClass) {
        addTransitionClass(el, legacyEnterFromClass);
      }
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      if (legacyClassEnabled && legacyAppearFromClass) {
        addTransitionClass(el, legacyAppearFromClass);
      }
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done2) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done2);
      addTransitionClass(el, leaveFromClass);
      if (legacyClassEnabled && legacyLeaveFromClass) {
        addTransitionClass(el, legacyLeaveFromClass);
      }
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        if (legacyClassEnabled && legacyLeaveFromClass) {
          removeTransitionClass(el, legacyLeaveFromClass);
        }
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type2, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$2(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type: type2, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type2) {
    return resolve2();
  }
  const endEvent = type2 + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key2) => (styles[key2] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION$1}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION$1}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type2 = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION$1) {
    if (transitionTimeout > 0) {
      type2 = TRANSITION$1;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type2 = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type2 = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION$1 : ANIMATION : null;
    propCount = type2 ? type2 === TRANSITION$1 ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type2 === TRANSITION$1 && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION$1}Property`).toString()
  );
  return {
    type: type2,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}
const CSS_VAR_TEXT = Symbol("");
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  onBeforeUpdate(() => {
    queuePostFlushCb(setVars);
  });
  onMounted(() => {
    watch(setVars, NOOP, { flush: "post" });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key2 in vars) {
      const value = normalizeCssVarValue(vars[key2]);
      style.setProperty(`--${key2}`, value);
      cssText += `--${key2}: ${value};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key2 in prev) {
          if (next[key2] == null) {
            setStyle(style, key2, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key2 = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key2] == null) {
            setStyle(style, key2, "");
          }
        }
      }
    }
    for (const key2 in next) {
      if (key2 === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key2, next[key2]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key2, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key2)) {
  if (isSVG && key2.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key2.slice(6, key2.length));
    } else {
      el.setAttributeNS(xlinkNS, key2, value);
    }
  } else {
    if (compatCoerceAttr(el, key2, value, instance)) {
      return;
    }
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key2);
    } else {
      el.setAttribute(
        key2,
        isBoolean2 ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
const isEnumeratedAttr = /* @__PURE__ */ makeMap("contenteditable,draggable,spellcheck");
function compatCoerceAttr(el, key2, value, instance = null) {
  if (isEnumeratedAttr(key2)) {
    const v2CoercedValue = value === null ? "false" : typeof value !== "boolean" && value !== void 0 ? "true" : null;
    if (v2CoercedValue && compatUtils.softAssertCompatEnabled(
      "ATTR_ENUMERATED_COERCION",
      instance,
      key2,
      value,
      v2CoercedValue
    )) {
      el.setAttribute(key2, v2CoercedValue);
      return true;
    }
  } else if (value === false && !(el.tagName === "INPUT" && key2 === "value") && !isSpecialBooleanAttr(key2) && compatUtils.isCompatEnabled("ATTR_FALSE_VALUE", instance)) {
    compatUtils.warnDeprecation(
      "ATTR_FALSE_VALUE",
      instance,
      key2
    );
    el.removeAttribute(key2);
    return true;
  }
  return false;
}
function patchDOMProp(el, key2, value, parentComponent, attrName) {
  if (key2 === "innerHTML" || key2 === "textContent") {
    if (value != null) {
      el[key2] = key2 === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key2 === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key2);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type2 = typeof el[key2];
    if (type2 === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type2 === "string") {
      value = "";
      needRemove = true;
    } else if (type2 === "number") {
      value = 0;
      needRemove = true;
    }
  } else {
    if (value === false && compatUtils.isCompatEnabled(
      "ATTR_FALSE_VALUE",
      parentComponent
    )) {
      const type2 = typeof el[key2];
      if (type2 === "string" || type2 === "number") {
        value = type2 === "number" ? 0 : "";
        needRemove = true;
      }
    }
  }
  try {
    el[key2] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key2);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m2;
    while (m2 = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m2[0].length);
      options[m2[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key2) => key2.charCodeAt(0) === 111 && key2.charCodeAt(1) === 110 && // lowercase letter
key2.charCodeAt(2) > 96 && key2.charCodeAt(2) < 123;
const patchProp = (el, key2, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key2 === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key2 === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key2)) {
    if (!isModelListener(key2)) {
      patchEvent(el, key2, prevValue, nextValue, parentComponent);
    }
  } else if (key2[0] === "." ? (key2 = key2.slice(1), true) : key2[0] === "^" ? (key2 = key2.slice(1), false) : shouldSetAsProp(el, key2, nextValue, isSVG)) {
    patchDOMProp(el, key2, nextValue, parentComponent);
    if (!el.tagName.includes("-") && (key2 === "value" || key2 === "checked" || key2 === "selected")) {
      patchAttr(el, key2, nextValue, isSVG, parentComponent, key2 !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key2) || !isString(nextValue))
  ) {
    patchDOMProp(el, camelize(key2), nextValue, parentComponent, key2);
  } else {
    if (key2 === "true-value") {
      el._trueValue = nextValue;
    } else if (key2 === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key2, nextValue, isSVG, parentComponent);
  }
};
function shouldSetAsProp(el, key2, value, isSVG) {
  if (isSVG) {
    if (key2 === "innerHTML" || key2 === "textContent") {
      return true;
    }
    if (key2 in el && isNativeOn(key2) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key2 === "spellcheck" || key2 === "draggable" || key2 === "translate" || key2 === "autocorrect") {
    return false;
  }
  if (key2 === "form") {
    return false;
  }
  if (key2 === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key2 === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key2 === "width" || key2 === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key2) && isString(value)) {
    return false;
  }
  return key2 in el;
}
const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  const Comp = /* @__PURE__ */ defineComponent(options, extraOptions);
  if (isPlainObject(Comp)) extend(Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */
const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
  return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    this._instance = null;
    this._app = null;
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */ new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if (_def.shadowRoot !== false) {
        this.attachShadow({ mode: "open" });
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot && !this._resolved) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._mount(this._def);
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._inheritParentContext(parent);
    }
  }
  _inheritParentContext(parent = this._parent) {
    if (parent && this._app) {
      Object.setPrototypeOf(
        this._app._context.provides,
        parent._instance.provides
      );
    }
  }
  disconnectedCallback() {
    this._connected = false;
    nextTick(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver((mutations2) => {
      for (const m2 of mutations2) {
        this._setAttr(m2.attributeName);
      }
    });
    this._ob.observe(this, { attributes: true });
    const resolve2 = (def2, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const { props, styles } = def2;
      let numberProps;
      if (props && !isArray(props)) {
        for (const key2 in props) {
          const opt = props[key2];
          if (opt === Number || opt && opt.type === Number) {
            if (key2 in this._props) {
              this._props[key2] = toNumber(this._props[key2]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key2)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      this._resolveProps(def2);
      if (this.shadowRoot) {
        this._applyStyles(styles);
      }
      this._mount(def2);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then((def2) => {
        def2.configureApp = this._def.configureApp;
        resolve2(this._def = def2, true);
      });
    } else {
      resolve2(this._def);
    }
  }
  _mount(def2) {
    this._app = this._createApp(def2);
    this._inheritParentContext();
    if (def2.configureApp) {
      def2.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key2 in exposed) {
      if (!hasOwn(this, key2)) {
        Object.defineProperty(this, key2, {
          // unwrap ref to be consistent with public instance behavior
          get: () => unref(exposed[key2])
        });
      }
    }
  }
  _resolveProps(def2) {
    const { props } = def2;
    const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
    for (const key2 of Object.keys(this)) {
      if (key2[0] !== "_" && declaredPropKeys.includes(key2)) {
        this._setProp(key2, this[key2]);
      }
    }
    for (const key2 of declaredPropKeys.map(camelize)) {
      Object.defineProperty(this, key2, {
        get() {
          return this._getProp(key2);
        },
        set(val) {
          this._setProp(key2, val, true, true);
        }
      });
    }
  }
  _setAttr(key2) {
    if (key2.startsWith("data-v-")) return;
    const has2 = this.hasAttribute(key2);
    let value = has2 ? this.getAttribute(key2) : REMOVAL;
    const camelKey = camelize(key2);
    if (has2 && this._numberProps && this._numberProps[camelKey]) {
      value = toNumber(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key2) {
    return this._props[key2];
  }
  /**
   * @internal
   */
  _setProp(key2, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key2]) {
      if (val === REMOVAL) {
        delete this._props[key2];
      } else {
        this._props[key2] = val;
        if (key2 === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        ob && ob.disconnect();
        if (val === true) {
          this.setAttribute(hyphenate(key2), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute(hyphenate(key2), val + "");
        } else if (!val) {
          this.removeAttribute(hyphenate(key2));
        }
        ob && ob.observe(this, { attributes: true });
      }
    }
  }
  _update() {
    const vnode = this._createVNode();
    if (this._app) vnode.appContext = this._app._context;
    render(vnode, this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = createVNode(this._def, extend(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        const dispatch2 = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(
              event,
              isPlainObject(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }
            )
          );
        };
        instance.emit = (event, ...args) => {
          dispatch2(event, args);
          if (hyphenate(event) !== event) {
            dispatch2(hyphenate(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = (this._teleportTarget || this).querySelectorAll("slot");
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
  }
}
function useHost(caller) {
  const instance = getCurrentInstance();
  const el = instance && instance.ce;
  if (el) {
    return el;
  }
  return null;
}
function useShadowRoot() {
  const el = useHost();
  return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
  {
    const instance = getCurrentInstance();
    if (!instance) {
      return EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
      return EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
      return EMPTY_OBJ;
    }
    return mod;
  }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t) => {
  delete t.props.mode;
  {
    t.__isBuiltIn = true;
  }
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state2 = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      if (!rawProps.tag && compatUtils.checkCompatEnabled(
        "TRANSITION_GROUP_ROOT",
        instance.parent
      )) {
        tag = "span";
      }
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state2,
                instance
              )
            );
            positionMap.set(
              child,
              child.el.getBoundingClientRect()
            );
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state2, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || vnode.props["onModelCompat:input"];
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim: trim2, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim2) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = looseToNumber(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim2) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim: trim2, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim2 && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el[assignKey];
      if (isArray(modelValue)) {
        const index2 = looseIndexOf(modelValue, elementValue);
        const found = index2 !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index2, 1);
          assign(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? looseToNumber(getValue(o)) : getValue(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray(value);
  if (isMultiple && !isArrayValue && !isSet(value)) {
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v2) => String(v2) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key2 = checked ? "_trueValue" : "_falseValue";
  return key2 in el ? el[key2] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type2) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type2) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && looseEqual(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if (isArray(value)) {
      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if (isSet(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m2) => e[`${m2}Key`] && !modifiers.includes(m2))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  let globalKeyCodes;
  let instance = null;
  {
    instance = getCurrentInstance();
    if (compatUtils.isCompatEnabled("CONFIG_KEY_CODES", instance)) {
      if (instance) {
        globalKeyCodes = instance.appContext.config.keyCodes;
      }
    }
  }
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k2) => k2 === eventKey || keyNames[k2] === eventKey
    )) {
      return fn(event);
    }
    {
      const keyCode = String(event.keyCode);
      if (compatUtils.isCompatEnabled(
        "V_ON_KEYCODE_MODIFIER",
        instance
      ) && modifiers.some((mod) => mod == keyCode)) {
        return fn(event);
      }
      if (globalKeyCodes) {
        for (const mod of modifiers) {
          const codes = globalKeyCodes[mod];
          if (codes) {
            const matches2 = isArray(codes) ? codes.some((code) => String(code) === keyCode) : String(codes) === keyCode;
            if (matches2) {
              return fn(event);
            }
          }
        }
      }
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component2 = app._component;
    if (!isFunction(component2) && !component2.render && !component2.template) {
      component2.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};
var runtimeDom = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  DeprecationTypes,
  EffectScope,
  ErrorCodes,
  ErrorTypeStrings,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  TrackOpTypes,
  Transition,
  TransitionGroup,
  TriggerOpTypes,
  VueElement,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineCustomElement,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  defineProps,
  defineSSRCustomElement,
  defineSlots,
  devtools,
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getCurrentWatcher,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hydrate,
  hydrateOnIdle,
  hydrateOnInteraction,
  hydrateOnMediaQuery,
  hydrateOnVisible,
  initCustomFormatter,
  initDirectivesForSSR,
  inject,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  onWatcherCleanup,
  openBlock,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssVars,
  useHost,
  useId,
  useModel,
  useSSRContext,
  useShadowRoot,
  useSlots,
  useTemplateRef,
  useTransitionState,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId
});
function wrappedCreateApp(...args) {
  const app = createApp(...args);
  if (compatUtils.isCompatEnabled("RENDER_FUNCTION", null)) {
    app.component("__compat__transition", Transition);
    app.component("__compat__transition-group", TransitionGroup);
    app.component("__compat__keep-alive", KeepAlive);
    app._context.directives.show = vShow;
    app._context.directives.model = vModelDynamic;
  }
  return app;
}
function createCompatVue() {
  const Vue2 = compatUtils.createCompatVue(createApp, wrappedCreateApp);
  extend(Vue2, runtimeDom);
  return Vue2;
}
const FRAGMENT = Symbol(``);
const TELEPORT = Symbol(``);
const SUSPENSE = Symbol(``);
const KEEP_ALIVE = Symbol(``);
const BASE_TRANSITION = Symbol(
  ``
);
const OPEN_BLOCK = Symbol(``);
const CREATE_BLOCK = Symbol(``);
const CREATE_ELEMENT_BLOCK = Symbol(
  ``
);
const CREATE_VNODE = Symbol(``);
const CREATE_ELEMENT_VNODE = Symbol(
  ``
);
const CREATE_COMMENT = Symbol(
  ``
);
const CREATE_TEXT = Symbol(
  ``
);
const CREATE_STATIC = Symbol(
  ``
);
const RESOLVE_COMPONENT = Symbol(
  ``
);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(
  ``
);
const RESOLVE_DIRECTIVE = Symbol(
  ``
);
const RESOLVE_FILTER = Symbol(
  ``
);
const WITH_DIRECTIVES = Symbol(
  ``
);
const RENDER_LIST = Symbol(``);
const RENDER_SLOT = Symbol(``);
const CREATE_SLOTS = Symbol(``);
const TO_DISPLAY_STRING = Symbol(
  ``
);
const MERGE_PROPS = Symbol(``);
const NORMALIZE_CLASS = Symbol(
  ``
);
const NORMALIZE_STYLE = Symbol(
  ``
);
const NORMALIZE_PROPS = Symbol(
  ``
);
const GUARD_REACTIVE_PROPS = Symbol(
  ``
);
const TO_HANDLERS = Symbol(``);
const CAMELIZE = Symbol(``);
const CAPITALIZE = Symbol(``);
const TO_HANDLER_KEY = Symbol(
  ``
);
const SET_BLOCK_TRACKING = Symbol(
  ``
);
const PUSH_SCOPE_ID = Symbol(``);
const POP_SCOPE_ID = Symbol(``);
const WITH_CTX = Symbol(``);
const UNREF = Symbol(``);
const IS_REF = Symbol(``);
const WITH_MEMO = Symbol(``);
const IS_MEMO_SAME = Symbol(``);
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
const locStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function createRoot(children, source = "") {
  return {
    type: 0,
    source,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: locStub
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key2, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString(key2) ? createSimpleExpression(key2, true) : key2,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test2, consequent, alternate, newline = true) {
  return {
    type: 19,
    test: test2,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index2, value, needPauseTracking = false, inVOnce = false) {
  return {
    type: 20,
    index: index2,
    value,
    needPauseTracking,
    inVOnce,
    needArraySpread: false,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
const defaultDelimitersOpen = new Uint8Array([123, 123]);
const defaultDelimitersClose = new Uint8Array([125, 125]);
function isTagStartChar(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
  return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
  return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
  const ret = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
}
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Tokenizer {
  constructor(stack2, cbs) {
    this.stack = stack2;
    this.cbs = cbs;
    this.state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.inXML = false;
    this.inVPre = false;
    this.newlines = [];
    this.mode = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
    this.delimiterIndex = -1;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1;
    this.mode = 0;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.currentSequence = void 0;
    this.newlines.length = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(index2) {
    let line = 1;
    let column = index2 + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const newlineIndex = this.newlines[i];
      if (index2 > newlineIndex) {
        line = i + 2;
        column = index2 - newlineIndex;
        break;
      }
    }
    return {
      column,
      line,
      offset: index2
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(c) {
    if (c === 60) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!this.inVPre && c === this.delimiterOpen[0]) {
      this.state = 2;
      this.delimiterIndex = 0;
      this.stateInterpolationOpen(c);
    }
  }
  stateInterpolationOpen(c) {
    if (c === this.delimiterOpen[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const start3 = this.index + 1 - this.delimiterOpen.length;
        if (start3 > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, start3);
        }
        this.state = 3;
        this.sectionStart = start3;
      } else {
        this.delimiterIndex++;
      }
    } else if (this.inRCDATA) {
      this.state = 32;
      this.stateInRCDATA(c);
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInterpolation(c) {
    if (c === this.delimiterClose[0]) {
      this.state = 4;
      this.delimiterIndex = 0;
      this.stateInterpolationClose(c);
    }
  }
  stateInterpolationClose(c) {
    if (c === this.delimiterClose[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterClose.length - 1) {
        this.cbs.oninterpolation(this.sectionStart, this.index + 1);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else {
        this.delimiterIndex++;
      }
    } else {
      this.state = 3;
      this.stateInterpolation(c);
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.inRCDATA = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = 6;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62 || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        this.inRCDATA = false;
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
        if (!this.inVPre && c === this.delimiterOpen[0]) {
          this.state = 2;
          this.delimiterIndex = 0;
          this.stateInterpolationOpen(c);
        }
      } else if (this.fastForwardTo(60)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === 60);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = 28;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = 23;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length) {
      const cc = this.buffer.charCodeAt(this.index);
      if (cc === 10) {
        this.newlines.push(this.index);
      }
      if (cc === c) {
        return true;
      }
    }
    this.index = this.buffer.length - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index - 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index - 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = 1;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  startSpecial(sequence, offset) {
    this.enterRCDATA(sequence, offset);
    this.state = 31;
  }
  enterRCDATA(sequence, offset) {
    this.inRCDATA = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
  }
  stateBeforeTagName(c) {
    if (c === 33) {
      this.state = 22;
      this.sectionStart = this.index + 1;
    } else if (c === 63) {
      this.state = 24;
      this.sectionStart = this.index + 1;
    } else if (isTagStartChar(c)) {
      this.sectionStart = this.index;
      if (this.mode === 0) {
        this.state = 6;
      } else if (this.inSFCRoot) {
        this.state = 34;
      } else if (!this.inXML) {
        if (c === 116) {
          this.state = 30;
        } else {
          this.state = c === 115 ? 29 : 6;
        }
      } else {
        this.state = 6;
      }
    } else if (c === 47) {
      this.state = 8;
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.handleTagName(c);
    }
  }
  stateInSFCRootTagName(c) {
    if (isEndOfTagSection(c)) {
      const tag = this.buffer.slice(this.sectionStart, this.index);
      if (tag !== "template") {
        this.enterRCDATA(toCharCodes(`</` + tag), 0);
      }
      this.handleTagName(c);
    }
  }
  handleTagName(c) {
    this.cbs.onopentagname(this.sectionStart, this.index);
    this.sectionStart = -1;
    this.state = 11;
    this.stateBeforeAttrName(c);
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) ;
    else if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    } else {
      this.state = isTagStartChar(c) ? 9 : 27;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === 62 || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 10;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttrName(c) {
    if (c === 62) {
      this.cbs.onopentagend(this.index);
      if (this.inRCDATA) {
        this.state = 32;
      } else {
        this.state = 1;
      }
      this.sectionStart = this.index + 1;
    } else if (c === 47) {
      this.state = 7;
    } else if (c === 60 && this.peek() === 47) {
      this.cbs.onopentagend(this.index);
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!isWhitespace(c)) {
      this.handleAttrStart(c);
    }
  }
  handleAttrStart(c) {
    if (c === 118 && this.peek() === 45) {
      this.state = 13;
      this.sectionStart = this.index;
    } else if (c === 46 || c === 58 || c === 64 || c === 35) {
      this.cbs.ondirname(this.index, this.index + 1);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 12;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === 62) {
      this.cbs.onselfclosingtag(this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
      this.inRCDATA = false;
    } else if (!isWhitespace(c)) {
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
  }
  stateInAttrName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 58) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else if (c === 46) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDirArg(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 91) {
      this.state = 15;
    } else if (c === 46) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDynamicDirArg(c) {
    if (c === 93) {
      this.state = 14;
    } else if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index + 1);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirModifier(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 46) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.sectionStart = this.index + 1;
    }
  }
  handleAttrNameEnd(c) {
    this.sectionStart = this.index;
    this.state = 17;
    this.cbs.onattribnameend(this.index);
    this.stateAfterAttrName(c);
  }
  stateAfterAttrName(c) {
    if (c === 61) {
      this.state = 18;
    } else if (c === 47 || c === 62) {
      this.cbs.onattribend(0, this.sectionStart);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(0, this.sectionStart);
      this.handleAttrStart(c);
    }
  }
  stateBeforeAttrValue(c) {
    if (c === 34) {
      this.state = 19;
      this.sectionStart = this.index + 1;
    } else if (c === 39) {
      this.state = 20;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = 21;
      this.stateInAttrValueNoQuotes(c);
    }
  }
  handleInAttrValue(c, quote) {
    if (c === quote || this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        quote === 34 ? 3 : 2,
        this.index + 1
      );
      this.state = 11;
    }
  }
  stateInAttrValueDoubleQuotes(c) {
    this.handleInAttrValue(c, 34);
  }
  stateInAttrValueSingleQuotes(c) {
    this.handleInAttrValue(c, 39);
  }
  stateInAttrValueNoQuotes(c) {
    if (isWhitespace(c) || c === 62) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(1, this.index);
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (c === 39 || c === 60 || c === 61 || c === 96) {
      this.cbs.onerr(
        18,
        this.index
      );
    } else ;
  }
  stateBeforeDeclaration(c) {
    if (c === 91) {
      this.state = 26;
      this.sequenceIndex = 0;
    } else {
      this.state = c === 45 ? 25 : 23;
    }
  }
  stateInDeclaration(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === 45) {
      this.state = 28;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 23;
    }
  }
  stateInSpecialComment(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.oncomment(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    if (c === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (c === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    if (c === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (c === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(input) {
    this.buffer = input;
    while (this.index < this.buffer.length) {
      const c = this.buffer.charCodeAt(this.index);
      if (c === 10 && this.state !== 33) {
        this.newlines.push(this.index);
      }
      switch (this.state) {
        case 1: {
          this.stateText(c);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(c);
          break;
        }
        case 3: {
          this.stateInterpolation(c);
          break;
        }
        case 4: {
          this.stateInterpolationClose(c);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case 32: {
          this.stateInRCDATA(c);
          break;
        }
        case 26: {
          this.stateCDATASequence(c);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(c);
          break;
        }
        case 12: {
          this.stateInAttrName(c);
          break;
        }
        case 13: {
          this.stateInDirName(c);
          break;
        }
        case 14: {
          this.stateInDirArg(c);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(c);
          break;
        }
        case 16: {
          this.stateInDirModifier(c);
          break;
        }
        case 28: {
          this.stateInCommentLike(c);
          break;
        }
        case 27: {
          this.stateInSpecialComment(c);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(c);
          break;
        }
        case 6: {
          this.stateInTagName(c);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(c);
          break;
        }
        case 9: {
          this.stateInClosingTagName(c);
          break;
        }
        case 5: {
          this.stateBeforeTagName(c);
          break;
        }
        case 17: {
          this.stateAfterAttrName(c);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(c);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(c);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(c);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case 23: {
          this.stateInDeclaration(c);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case 25: {
          this.stateBeforeComment(c);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
    this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.sectionStart !== this.index) {
      if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === 19 || this.state === 20 || this.state === 21) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  finish() {
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === 28) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex);
      }
    } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
  }
}
function getCompatValue(key2, { compatConfig }) {
  const value = compatConfig && compatConfig[key2];
  if (key2 === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key2, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key2, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key2, context, loc, ...args) {
  const enabled = isCompatEnabled(key2, context);
  return enabled;
}
function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = `https://vuejs.org/error-reference/#compiler-${code}`;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
const isStaticExp = (p2) => p2.type === 4 && p2.isStatic;
function isCoreComponent(tag) {
  switch (tag) {
    case "Teleport":
    case "teleport":
      return TELEPORT;
    case "Suspense":
    case "suspense":
      return SUSPENSE;
    case "KeepAlive":
    case "keep-alive":
      return KEEP_ALIVE;
    case "BaseTransition":
    case "base-transition":
      return BASE_TRANSITION;
  }
}
const nonIdentifierRE = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
const isMemberExpressionBrowser = (exp) => {
  const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
  let state2 = 0;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state2) {
      case 0:
        if (char === "[") {
          stateStack.push(state2);
          state2 = 1;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state2);
          state2 = 2;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state2);
          state2 = 3;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state2 = stateStack.pop();
          }
        }
        break;
      case 2:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state2);
          state2 = 3;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state2 = stateStack.pop();
          }
        }
        break;
      case 3:
        if (char === currentStringType) {
          state2 = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpression = isMemberExpressionBrowser;
const fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
const isFnExpression = isFnExpressionBrowser;
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 7 && (allowEmpty || p2.exp) && (isString(name) ? p2.name === name : name.test(p2.name))) {
      return p2;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 6) {
      if (dynamicOnly) continue;
      if (p2.name === name && (p2.value || allowEmpty)) {
        return p2;
      }
    } else if (p2.name === "bind" && (p2.exp || allowEmpty) && isStaticArgOf(p2.arg, name)) {
      return p2;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p2) => p2.type === 7 && p2.name === "bind" && (!p2.arg || // v-bind="obj"
    p2.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p2.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVPre(p2) {
  return p2.type === 7 && p2.name === "pre";
}
function isVSlot(p2) {
  return p2.type === 7 && p2.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p2) => p2.key.type === 4 && p2.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type2) {
  return `_${type2}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
const defaultParserOptions = {
  parseMode: "base",
  ns: 0,
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  isVoidTag: NO,
  isPreTag: NO,
  isIgnoreNewlineTag: NO,
  isCustomElement: NO,
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false,
  prefixIdentifiers: false
};
let currentOptions = defaultParserOptions;
let currentRoot = null;
let currentInput = "";
let currentOpenTag = null;
let currentProp = null;
let currentAttrValue = "";
let currentAttrStartIndex = -1;
let currentAttrEndIndex = -1;
let inPre = 0;
let inVPre = false;
let currentVPreBoundary = null;
const stack = [];
const tokenizer = new Tokenizer(stack, {
  onerr: emitError,
  ontext(start3, end) {
    onText(getSlice(start3, end), start3, end);
  },
  ontextentity(char, start3, end) {
    onText(char, start3, end);
  },
  oninterpolation(start3, end) {
    if (inVPre) {
      return onText(getSlice(start3, end), start3, end);
    }
    let innerStart = start3 + tokenizer.delimiterOpen.length;
    let innerEnd = end - tokenizer.delimiterClose.length;
    while (isWhitespace(currentInput.charCodeAt(innerStart))) {
      innerStart++;
    }
    while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
      innerEnd--;
    }
    let exp = getSlice(innerStart, innerEnd);
    if (exp.includes("&")) {
      {
        exp = currentOptions.decodeEntities(exp, false);
      }
    }
    addNode({
      type: 5,
      content: createExp(exp, false, getLoc(innerStart, innerEnd)),
      loc: getLoc(start3, end)
    });
  },
  onopentagname(start3, end) {
    const name = getSlice(start3, end);
    currentOpenTag = {
      type: 1,
      tag: name,
      ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: getLoc(start3 - 1, end),
      codegenNode: void 0
    };
  },
  onopentagend(end) {
    endOpenTag(end);
  },
  onclosetag(start3, end) {
    const name = getSlice(start3, end);
    if (!currentOptions.isVoidTag(name)) {
      let found = false;
      for (let i = 0; i < stack.length; i++) {
        const e = stack[i];
        if (e.tag.toLowerCase() === name.toLowerCase()) {
          found = true;
          if (i > 0) {
            emitError(24, stack[0].loc.start.offset);
          }
          for (let j = 0; j <= i; j++) {
            const el = stack.shift();
            onCloseTag(el, end, j < i);
          }
          break;
        }
      }
      if (!found) {
        emitError(23, backTrack(start3, 60));
      }
    }
  },
  onselfclosingtag(end) {
    const name = currentOpenTag.tag;
    currentOpenTag.isSelfClosing = true;
    endOpenTag(end);
    if (stack[0] && stack[0].tag === name) {
      onCloseTag(stack.shift(), end);
    }
  },
  onattribname(start3, end) {
    currentProp = {
      type: 6,
      name: getSlice(start3, end),
      nameLoc: getLoc(start3, end),
      value: void 0,
      loc: getLoc(start3)
    };
  },
  ondirname(start3, end) {
    const raw = getSlice(start3, end);
    const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
    if (!inVPre && name === "") {
      emitError(26, start3);
    }
    if (inVPre || name === "") {
      currentProp = {
        type: 6,
        name: raw,
        nameLoc: getLoc(start3, end),
        value: void 0,
        loc: getLoc(start3)
      };
    } else {
      currentProp = {
        type: 7,
        name,
        rawName: raw,
        exp: void 0,
        arg: void 0,
        modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
        loc: getLoc(start3)
      };
      if (name === "pre") {
        inVPre = tokenizer.inVPre = true;
        currentVPreBoundary = currentOpenTag;
        const props = currentOpenTag.props;
        for (let i = 0; i < props.length; i++) {
          if (props[i].type === 7) {
            props[i] = dirToAttr(props[i]);
          }
        }
      }
    }
  },
  ondirarg(start3, end) {
    if (start3 === end) return;
    const arg = getSlice(start3, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += arg;
      setLocEnd(currentProp.nameLoc, end);
    } else {
      const isStatic = arg[0] !== `[`;
      currentProp.arg = createExp(
        isStatic ? arg : arg.slice(1, -1),
        isStatic,
        getLoc(start3, end),
        isStatic ? 3 : 0
      );
    }
  },
  ondirmodifier(start3, end) {
    const mod = getSlice(start3, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += "." + mod;
      setLocEnd(currentProp.nameLoc, end);
    } else if (currentProp.name === "slot") {
      const arg = currentProp.arg;
      if (arg) {
        arg.content += "." + mod;
        setLocEnd(arg.loc, end);
      }
    } else {
      const exp = createSimpleExpression(mod, true, getLoc(start3, end));
      currentProp.modifiers.push(exp);
    }
  },
  onattribdata(start3, end) {
    currentAttrValue += getSlice(start3, end);
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start3;
    currentAttrEndIndex = end;
  },
  onattribentity(char, start3, end) {
    currentAttrValue += char;
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start3;
    currentAttrEndIndex = end;
  },
  onattribnameend(end) {
    const start3 = currentProp.loc.start.offset;
    const name = getSlice(start3, end);
    if (currentProp.type === 7) {
      currentProp.rawName = name;
    }
    if (currentOpenTag.props.some(
      (p2) => (p2.type === 7 ? p2.rawName : p2.name) === name
    )) {
      emitError(2, start3);
    }
  },
  onattribend(quote, end) {
    if (currentOpenTag && currentProp) {
      setLocEnd(currentProp.loc, end);
      if (quote !== 0) {
        if (currentAttrValue.includes("&")) {
          currentAttrValue = currentOptions.decodeEntities(
            currentAttrValue,
            true
          );
        }
        if (currentProp.type === 6) {
          if (currentProp.name === "class") {
            currentAttrValue = condense(currentAttrValue).trim();
          }
          if (quote === 1 && !currentAttrValue) {
            emitError(13, end);
          }
          currentProp.value = {
            type: 2,
            content: currentAttrValue,
            loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
          };
          if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
            tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
          }
        } else {
          let expParseMode = 0;
          currentProp.exp = createExp(
            currentAttrValue,
            false,
            getLoc(currentAttrStartIndex, currentAttrEndIndex),
            0,
            expParseMode
          );
          if (currentProp.name === "for") {
            currentProp.forParseResult = parseForExpression(currentProp.exp);
          }
          let syncIndex = -1;
          if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
            (mod) => mod.content === "sync"
          )) > -1 && checkCompatEnabled(
            "COMPILER_V_BIND_SYNC",
            currentOptions,
            currentProp.loc,
            currentProp.arg.loc.source
          )) {
            currentProp.name = "model";
            currentProp.modifiers.splice(syncIndex, 1);
          }
        }
      }
      if (currentProp.type !== 7 || currentProp.name !== "pre") {
        currentOpenTag.props.push(currentProp);
      }
    }
    currentAttrValue = "";
    currentAttrStartIndex = currentAttrEndIndex = -1;
  },
  oncomment(start3, end) {
    if (currentOptions.comments) {
      addNode({
        type: 3,
        content: getSlice(start3, end),
        loc: getLoc(start3 - 4, end + 3)
      });
    }
  },
  onend() {
    const end = currentInput.length;
    for (let index2 = 0; index2 < stack.length; index2++) {
      onCloseTag(stack[index2], end - 1);
      emitError(24, stack[index2].loc.start.offset);
    }
  },
  oncdata(start3, end) {
    if (stack[0].ns !== 0) {
      onText(getSlice(start3, end), start3, end);
    } else {
      emitError(1, start3 - 9);
    }
  },
  onprocessinginstruction(start3) {
    if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
      emitError(
        21,
        start3 - 1
      );
    }
  }
});
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const createAliasExpression = (content, offset, asParam = false) => {
    const start3 = loc.start.offset + offset;
    const end = start3 + content.length;
    return createExp(
      content,
      false,
      getLoc(start3, end),
      0,
      asParam ? 1 : 0
      /* Normal */
    );
  };
  const result = {
    source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: false
  };
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(keyContent, keyOffset, true);
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          ),
          true
        );
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(valueContent, trimmedOffset, true);
  }
  return result;
}
function getSlice(start3, end) {
  return currentInput.slice(start3, end);
}
function endOpenTag(end) {
  if (tokenizer.inSFCRoot) {
    currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
  }
  addNode(currentOpenTag);
  const { tag, ns } = currentOpenTag;
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre++;
  }
  if (currentOptions.isVoidTag(tag)) {
    onCloseTag(currentOpenTag, end);
  } else {
    stack.unshift(currentOpenTag);
    if (ns === 1 || ns === 2) {
      tokenizer.inXML = true;
    }
  }
  currentOpenTag = null;
}
function onText(content, start3, end) {
  {
    const tag = stack[0] && stack[0].tag;
    if (tag !== "script" && tag !== "style" && content.includes("&")) {
      content = currentOptions.decodeEntities(content, false);
    }
  }
  const parent = stack[0] || currentRoot;
  const lastNode = parent.children[parent.children.length - 1];
  if (lastNode && lastNode.type === 2) {
    lastNode.content += content;
    setLocEnd(lastNode.loc, end);
  } else {
    parent.children.push({
      type: 2,
      content,
      loc: getLoc(start3, end)
    });
  }
}
function onCloseTag(el, end, isImplied = false) {
  if (isImplied) {
    setLocEnd(el.loc, backTrack(end, 60));
  } else {
    setLocEnd(el.loc, lookAhead(end, 62) + 1);
  }
  if (tokenizer.inSFCRoot) {
    if (el.children.length) {
      el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
    } else {
      el.innerLoc.end = extend({}, el.innerLoc.start);
    }
    el.innerLoc.source = getSlice(
      el.innerLoc.start.offset,
      el.innerLoc.end.offset
    );
  }
  const { tag, ns, children } = el;
  if (!inVPre) {
    if (tag === "slot") {
      el.tagType = 2;
    } else if (isFragmentTemplate(el)) {
      el.tagType = 3;
    } else if (isComponent(el)) {
      el.tagType = 1;
    }
  }
  if (!tokenizer.inRCDATA) {
    el.children = condenseWhitespace(children);
  }
  if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
    const first = children[0];
    if (first && first.type === 2) {
      first.content = first.content.replace(/^\r?\n/, "");
    }
  }
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre--;
  }
  if (currentVPreBoundary === el) {
    inVPre = tokenizer.inVPre = false;
    currentVPreBoundary = null;
  }
  if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
    tokenizer.inXML = false;
  }
  {
    const props = el.props;
    if (!tokenizer.inSFCRoot && isCompatEnabled(
      "COMPILER_NATIVE_TEMPLATE",
      currentOptions
    ) && el.tag === "template" && !isFragmentTemplate(el)) {
      const parent = stack[0] || currentRoot;
      const index2 = parent.children.indexOf(el);
      parent.children.splice(index2, 1, ...el.children);
    }
    const inlineTemplateProp = props.find(
      (p2) => p2.type === 6 && p2.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      currentOptions,
      inlineTemplateProp.loc
    ) && el.children.length) {
      inlineTemplateProp.value = {
        type: 2,
        content: getSlice(
          el.children[0].loc.start.offset,
          el.children[el.children.length - 1].loc.end.offset
        ),
        loc: inlineTemplateProp.loc
      };
    }
  }
}
function lookAhead(index2, c) {
  let i = index2;
  while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
  return i;
}
function backTrack(index2, c) {
  let i = index2;
  while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
  return i;
}
const specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function isFragmentTemplate({ tag, props }) {
  if (tag === "template") {
    for (let i = 0; i < props.length; i++) {
      if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
        return true;
      }
    }
  }
  return false;
}
function isComponent({ tag, props }) {
  if (currentOptions.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p2 = props[i];
    if (p2.type === 6) {
      if (p2.name === "is" && p2.value) {
        if (p2.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p2.loc
        )) {
          return true;
        }
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      p2.name === "bind" && isStaticArgOf(p2.arg, "is") && checkCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        currentOptions,
        p2.loc
      )
    ) {
      return true;
    }
  }
  return false;
}
function isUpperCase(c) {
  return c > 64 && c < 91;
}
const windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes) {
  const shouldCondense = currentOptions.whitespace !== "preserve";
  let removedWhitespace = false;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 2) {
      if (!inPre) {
        if (isAllWhitespace(node.content)) {
          const prev = nodes[i - 1] && nodes[i - 1].type;
          const next = nodes[i + 1] && nodes[i + 1].type;
          if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
            removedWhitespace = true;
            nodes[i] = null;
          } else {
            node.content = " ";
          }
        } else if (shouldCondense) {
          node.content = condense(node.content);
        }
      } else {
        node.content = node.content.replace(windowsNewlineRE, "\n");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isWhitespace(str.charCodeAt(i))) {
      return false;
    }
  }
  return true;
}
function hasNewlineChar(str) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 10 || c === 13) {
      return true;
    }
  }
  return false;
}
function condense(str) {
  let ret = "";
  let prevCharIsWhitespace = false;
  for (let i = 0; i < str.length; i++) {
    if (isWhitespace(str.charCodeAt(i))) {
      if (!prevCharIsWhitespace) {
        ret += " ";
        prevCharIsWhitespace = true;
      }
    } else {
      ret += str[i];
      prevCharIsWhitespace = false;
    }
  }
  return ret;
}
function addNode(node) {
  (stack[0] || currentRoot).children.push(node);
}
function getLoc(start3, end) {
  return {
    start: tokenizer.getPos(start3),
    // @ts-expect-error allow late attachment
    end: end == null ? end : tokenizer.getPos(end),
    // @ts-expect-error allow late attachment
    source: end == null ? end : getSlice(start3, end)
  };
}
function cloneLoc(loc) {
  return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end) {
  loc.end = tokenizer.getPos(end);
  loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
  const attr = {
    type: 6,
    name: dir.rawName,
    nameLoc: getLoc(
      dir.loc.start.offset,
      dir.loc.start.offset + dir.rawName.length
    ),
    value: void 0,
    loc: dir.loc
  };
  if (dir.exp) {
    const loc = dir.exp.loc;
    if (loc.end.offset < dir.loc.end.offset) {
      loc.start.offset--;
      loc.start.column--;
      loc.end.offset++;
      loc.end.column++;
    }
    attr.value = {
      type: 2,
      content: dir.exp.content,
      loc
    };
  }
  return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
  const exp = createSimpleExpression(content, isStatic, loc, constType);
  return exp;
}
function emitError(code, index2, message) {
  currentOptions.onError(
    createCompilerError(code, getLoc(index2, index2))
  );
}
function reset() {
  tokenizer.reset();
  currentOpenTag = null;
  currentProp = null;
  currentAttrValue = "";
  currentAttrStartIndex = -1;
  currentAttrEndIndex = -1;
  stack.length = 0;
}
function baseParse(input, options) {
  reset();
  currentInput = input;
  currentOptions = extend({}, defaultParserOptions);
  if (options) {
    let key2;
    for (key2 in options) {
      if (options[key2] != null) {
        currentOptions[key2] = options[key2];
      }
    }
  }
  tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
  tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
  const delimiters = options && options.delimiters;
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
    tokenizer.delimiterClose = toCharCodes(delimiters[1]);
  }
  const root = currentRoot = createRoot([], input);
  tokenizer.parse(currentInput);
  root.loc = getLoc(0, input.length);
  root.children = condenseWhitespace(root.children);
  currentRoot = null;
  return root;
}
function cacheStatic(root, context) {
  walk(
    root,
    void 0,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!getSingleElementRoot(root)
  );
}
function getSingleElementRoot(root) {
  const children = root.children.filter((x) => x.type !== 3);
  return children.length === 1 && children[0].type === 1 && !isSlotOutlet(children[0]) ? children[0] : null;
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
  const { children } = node;
  const toCache = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1;
          toCache.push(child);
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = codegenNode.patchFlag;
          if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType >= 2) {
        if (child.codegenNode.type === 14 && child.codegenNode.arguments.length > 0) {
          child.codegenNode.arguments.push(
            `-1`
          );
        }
        toCache.push(child);
        continue;
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, node, context, false, inFor);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, node, context, child.children.length === 1, true);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          node,
          context,
          child.branches[i2].children.length === 1,
          inFor
        );
      }
    }
  }
  let cachedAsArray = false;
  const slotCacheKeys = [];
  if (toCache.length === children.length && node.type === 1) {
    if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = getCacheExpression(
        createArrayExpression(node.codegenNode.children)
      );
      cachedAsArray = true;
    } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      const slot = getSlotNode(node.codegenNode, "default");
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
      const slotName = findDir(node, "slot", true);
      const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    }
  }
  if (!cachedAsArray) {
    for (const child of toCache) {
      slotCacheKeys.push(context.cached.length);
      child.codegenNode = context.cache(child.codegenNode);
    }
  }
  if (slotCacheKeys.length && node.type === 1 && node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
    node.codegenNode.children.properties.push(
      createObjectProperty(
        `__`,
        createSimpleExpression(JSON.stringify(slotCacheKeys), false)
      )
    );
  }
  function getCacheExpression(value) {
    const exp = context.cache(value);
    if (inFor && context.hmr) {
      exp.needArraySpread = true;
    }
    return exp;
  }
  function getSlotNode(node2, name) {
    if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
      const slot = node2.children.properties.find(
        (p2) => p2.key === name || p2.key.content === name
      );
      return slot && slot.value;
    }
  }
  if (toCache.length && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
        return 0;
      }
      if (codegenNode.patchFlag === void 0) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p2 = node.props[i];
            if (p2.type === 7 && p2.name === "bind" && p2.exp) {
              const expType = getConstantType(p2.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p2 = node.props[i];
            if (p2.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key: key2, value } = properties[i];
      const keyType = getConstantType(key2, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic = false,
  hmr = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = NOOP,
  isCustomElement = NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    filename,
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic,
    hmr,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: NOOP,
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode2 = false, inVOnce = false) {
      const cacheExp = createCacheExpression(
        context.cached.length,
        exp,
        isVNode2,
        inVOnce
      );
      context.cached.push(cacheExp);
      return cacheExp;
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    cacheStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  root.transformed = true;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const singleElementRootChild = getSingleElementRoot(root);
    if (singleElementRootChild && singleElementRootChild.codegenNode) {
      const codegenNode = singleElementRootChild.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = children[0];
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag,
      void 0,
      void 0,
      true,
      void 0,
      false
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString(child)) continue;
    context.grandParent = context.parent;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    // for container types, further traverse downwards
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches2 = isString(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches2(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
const PURE_ANNOTATION = `/*@__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key2) {
      return `_${helperNameMap[key2]}`;
    },
    push(code, newlineIndex = -2, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push(
      "\n" + `  `.repeat(n),
      0
      /* Start */
    );
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(
        `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
        -1
        /* End */
      );
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(
      `
`,
      0
      /* Start */
    );
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(
        `const _Vue = ${VueBinding}
`,
        -1
        /* End */
      );
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(
          `const { ${staticHelpers} } = _Vue
`,
          -1
          /* End */
        );
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type2, { helper, push, newline, isTS }) {
  const resolver = helper(
    type2 === "filter" ? RESOLVE_FILTER : type2 === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id, type2)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || false;
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString(node)) {
      push(
        node,
        -3
        /* Unknown */
      );
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString(node)) {
    context.push(
      node,
      -3
      /* Unknown */
    );
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(
    isStatic ? JSON.stringify(content) : content,
    -3,
    node
  );
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString(child)) {
      context.push(
        child,
        -3
        /* Unknown */
      );
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, -2, node);
  } else {
    push(`[${node.content}]`, -3, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(
    `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
    -3,
    node
  );
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2
  } = node;
  let patchFlagString;
  if (patchFlag) {
    {
      patchFlagString = String(patchFlag);
    }
  }
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, -2, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null) break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, -2, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, -2, node);
    return;
  }
  const multilines = properties.length > 1 || false;
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key: key2, value } = properties[i];
    genExpressionAsPropertyKey(key2, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, -2, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test: test2, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test2.type === 4) {
    const needsParens = !isSimpleIdentifier(test2.content);
    needsParens && push(`(`);
    genExpression(test2, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test2, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  const { needPauseTracking, needArraySpread } = node;
  if (needArraySpread) {
    push(`[...(`);
  }
  push(`_cache[${node.index}] || (`);
  if (needPauseTracking) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1`);
    if (node.inVOnce) push(`, true`);
    push(`),`);
    newline();
    push(`(`);
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (needPauseTracking) {
    push(`).cacheIndex = ${node.index},`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
  if (needArraySpread) {
    push(`)]`);
  }
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key2 = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key2 += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key2,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key2 + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: cloneLoc(node.loc),
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && sibling.type === 3) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit) onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
        '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag,
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
const transformBind = (dir, _node, context) => {
  const { modifiers, loc } = dir;
  const arg = dir.arg;
  let { exp } = dir;
  if (exp && exp.type === 4 && !exp.content.trim()) {
    {
      exp = void 0;
    }
  }
  if (!exp) {
    if (arg.type !== 4 || !arg.isStatic) {
      context.onError(
        createCompilerError(
          52,
          arg.loc
        )
      );
      return {
        props: [
          createObjectProperty(arg, createSimpleExpression("", true, loc))
        ]
      };
    }
    transformBindShorthand(dir);
    exp = dir.exp;
  }
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = arg.content ? `${arg.content} || ""` : `""`;
  }
  if (modifiers.some((mod) => mod.content === "camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = camelize(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.some((mod) => mod.content === "prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.some((mod) => mod.content === "attr")) {
      injectPrefix(arg, "^");
    }
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
const transformBindShorthand = (dir, context) => {
  const arg = dir.arg;
  const propName = camelize(arg.content);
  dir.exp = createSimpleExpression(propName, false, arg.loc);
};
const injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};
const transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`, false, true);
      const isDirKey = keyProp && keyProp.type === 7;
      if (isDirKey && !keyProp.exp) {
        transformBindShorthand(keyProp);
      }
      let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
      const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag,
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64,
            void 0,
            void 0,
            true,
            void 0,
            false
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached.length))
          );
          context.cached.push(null);
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = dir.forParseResult;
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  finalizeForParseResult(parseResult);
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key: key2, index: index2 } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key2,
    objectIndexAlias: index2,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}
function finalizeForParseResult(result, context) {
  if (result.finalized) return;
  result.finalized = true;
}
function createForLoopParams({ value, key: key2, index: index2 }, memoArgs = []) {
  return createParamsList([value, key2, index2, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i]) break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
const buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, void 0, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const vFor = findDir(slotElement, "for");
    const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
    let vIf;
    let vElse;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3 && isNonWhitespaceContent(prev)) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor) {
      hasDynamicSlots = true;
      const parseResult = vFor.forParseResult;
      if (parseResult) {
        finalizeForParseResult(parseResult);
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(
            32,
            vFor.loc
          )
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, void 0, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + ``,
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index2) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index2 != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index2), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent2 = node.tagType === 1;
    let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = isObject$2(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject" || tag === "math")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent2,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
      }
      const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type2 = child.type;
        const hasDynamicTextChild = type2 === 5 || type2 === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type2 === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (dynamicPropNames && dynamicPropNames.length) {
      vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      patchFlag === 0 ? void 0 : patchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent2,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(
    node,
    "is",
    false,
    true
    /* allow empty */
  );
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      let exp;
      if (isProp.type === 6) {
        exp = isProp.value && createSimpleExpression(isProp.value.content, true);
      } else {
        exp = isProp.exp;
        if (!exp) {
          exp = createSimpleExpression(`is`, false, isProp.arg.loc);
        }
      }
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr) context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg) mergeArgs.push(arg);
  };
  const pushRefVForMarker = () => {
    if (context.scopes.vFor > 0) {
      properties.push(
        createObjectProperty(
          createSimpleExpression("ref_for", true),
          createSimpleExpression("true")
        )
      );
    }
  };
  const analyzePatchFlag = ({ key: key2, value }) => {
    if (isStaticExp(key2)) {
      const name = key2.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (isEventHandler && value.type === 14) {
        value = value.arguments[0];
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, nameLoc, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        pushRefVForMarker();
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(name, true, nameLoc),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc, modifiers } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref")) {
        pushRefVForMarker();
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            {
              pushMergeArg();
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            pushRefVForMarker();
            pushMergeArg();
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
        patchFlag |= 32;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key2 = propsExpression.properties[i].key;
          if (isStaticExp(key2)) {
            if (key2.content === "class") {
              classKeyIndex = i;
            } else if (key2.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key2.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp) dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p2 = node.props[i];
    if (p2.type === 6) {
      if (p2.value) {
        if (p2.name === "name") {
          slotName = JSON.stringify(p2.value.content);
        } else {
          p2.name = camelize(p2.name);
          nonNameProps.push(p2);
        }
      }
    } else {
      if (p2.name === "bind" && isStaticArgOf(p2.arg, "name")) {
        if (p2.exp) {
          slotName = p2.exp;
        } else if (p2.arg && p2.arg.type === 4) {
          const name = camelize(p2.arg.content);
          slotName = p2.exp = createSimpleExpression(name, false, p2.arg.loc);
        }
      } else {
        if (p2.name === "bind" && p2.arg && isStaticExp(p2.arg)) {
          p2.arg.content = camelize(p2.arg.content);
        }
        nonNameProps.push(p2);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}
const transformOn$1 = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        toHandlerKey(camelize(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp);
    const isInlineStatement = !(isMemberExp || isFnExpression(exp));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p2) => p2.key.isHandlerKey = true);
  return ret;
};
const transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p2) => p2.type === 7 && !context.directiveTransforms[p2.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              `1`
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};
const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true,
          true
        );
      }
    };
  }
};
const transformModel$1 = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source.trim();
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  if (!expString.trim() || !isMemberExpression(exp) && true) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m2) => m2.content).map((m2) => (isSimpleIdentifier(m2) ? m2 : JSON.stringify(m2)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}
const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTERS", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  } else if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object") continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92) inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92) inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92) inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92) inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        // "
        case 39:
          inSingle = true;
          break;
        // '
        case 96:
          inTemplateString = true;
          break;
        // `
        case 40:
          paren++;
          break;
        // (
        case 41:
          paren--;
          break;
        // )
        case 91:
          square++;
          break;
        // [
        case 93:
          square--;
          break;
        // ]
        case 123:
          curly++;
          break;
        // {
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p2;
        for (; j >= 0; j--) {
          p2 = exp.charAt(j);
          if (p2 !== " ") break;
        }
        if (!p2 || !validDivisionCharRE.test(p2)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
    node.ast = void 0;
  }
}
function wrapFilter(exp, filter2, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter2.indexOf("(");
  if (i < 0) {
    context.filters.add(filter2);
    return `${toValidAssetId(filter2, "filter")}(${exp})`;
  } else {
    const name = filter2.slice(0, i);
    const args = filter2.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node)) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached.length)
        ]);
        context.cached.push(null);
      }
    };
  }
};
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...[],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn$1,
      bind: transformBind,
      model: transformModel$1
    }
  ];
}
function baseCompile(source, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(47));
    } else if (isModuleMode) {
      onError(createCompilerError(48));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(49));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(50));
  }
  const resolvedOptions = extend({}, options, {
    prefixIdentifiers
  });
  const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    extend({}, resolvedOptions, {
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(ast, resolvedOptions);
}
const noopDirectiveTransform = () => ({ props: [] });
const V_MODEL_RADIO = Symbol(``);
const V_MODEL_CHECKBOX = Symbol(
  ``
);
const V_MODEL_TEXT = Symbol(``);
const V_MODEL_SELECT = Symbol(
  ``
);
const V_MODEL_DYNAMIC = Symbol(
  ``
);
const V_ON_WITH_MODIFIERS = Symbol(
  ``
);
const V_ON_WITH_KEYS = Symbol(
  ``
);
const V_SHOW = Symbol(``);
const TRANSITION = Symbol(``);
const TRANSITION_GROUP = Symbol(
  ``
);
registerRuntimeHelpers({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
const parserOptions = {
  parseMode: "html",
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
  isPreTag: (tag) => tag === "pre",
  isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: (tag) => {
    if (tag === "Transition" || tag === "transition") {
      return TRANSITION;
    } else if (tag === "TransitionGroup" || tag === "transition-group") {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent, rootNamespace) {
    let ns = parent ? parent.ns : rootNamespace;
    if (parent && ns === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns = 0;
      }
    } else if (parent && ns === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns = 0;
      }
    }
    if (ns === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns;
  }
};
const transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p2, i) => {
      if (p2.type === 6 && p2.name === "style" && p2.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: createSimpleExpression(`style`, true, p2.loc),
          exp: parseInlineCSS(p2.value.content, p2.loc),
          modifiers: [],
          loc: p2.loc
        };
      }
    });
  }
};
const parseInlineCSS = (cssText, loc) => {
  const normalized = parseStringStyle(cssText);
  return createSimpleExpression(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};
function createDOMCompilerError(code, loc) {
  return createCompilerError(
    code,
    loc
  );
}
const transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(53, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`innerHTML`, true, loc),
        exp || createSimpleExpression("", true)
      )
    ]
  };
};
const transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`textContent`, true),
        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
          context.helperString(TO_DISPLAY_STRING),
          [exp],
          loc
        ) : createSimpleExpression("", true)
      )
    ]
  };
};
const transformModel = (dir, node, context) => {
  const baseResult = transformModel$1(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        58,
        dir.arg.loc
      )
    );
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type2 = findProp(node, `type`);
      if (type2) {
        if (type2.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type2.value) {
          switch (type2.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  59,
                  dir.loc
                )
              );
              break;
          }
        }
      } else if (hasDynamicKeyVBind(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else ;
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else ;
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        57,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p2) => !(p2.key.type === 4 && p2.key.content === "modelValue")
  );
  return baseResult;
};
const isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ makeMap(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
const isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
const resolveModifiers = (key2, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i].content;
    if (modifier === "native" && checkCompatEnabled(
      "COMPILER_V_ON_NATIVE",
      context
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if (isStaticExp(key2)) {
          if (isKeyboardEvent(key2.content.toLowerCase())) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
const transformClick = (key2, event) => {
  const isStaticClick = isStaticExp(key2) && key2.content.toLowerCase() === "onclick";
  return isStaticClick ? createSimpleExpression(event, true) : key2.type !== 4 ? createCompoundExpression([
    `(`,
    key2,
    `) === "onClick" ? "${event}" : (`,
    key2,
    `)`
  ]) : key2;
};
const transformOn = (dir, node, context) => {
  return transformOn$1(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length) return baseResult;
    let { key: key2, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key2, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key2 = transformClick(key2, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key2 = transformClick(key2, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!isStaticExp(key2) || isKeyboardEvent(key2.content.toLowerCase()))) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
      key2 = isStaticExp(key2) ? createSimpleExpression(`${key2.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key2, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [createObjectProperty(key2, handlerExp)]
    };
  });
};
const transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(61, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};
const ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
    context.removeNode();
  }
};
const DOMNodeTransforms = [
  transformStyle,
  ...[]
];
const DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  // override compiler-core
  on: transformOn,
  // override compiler-core
  show: transformShow
};
function compile(src, options = {}) {
  return baseCompile(
    src,
    extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
const compileCache = /* @__PURE__ */ Object.create(null);
function compileToFunction(template, options) {
  if (!isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      return NOOP;
    }
  }
  const key2 = genCacheKey(template, options);
  const cached = compileCache[key2];
  if (cached) {
    return cached;
  }
  if (template[0] === "#") {
    const el = document.querySelector(template);
    template = el ? el.innerHTML : ``;
  }
  const { code } = compile(
    template,
    extend(
      {
        hoistStatic: true,
        whitespace: "preserve",
        onError: void 0,
        onWarn: NOOP
      },
      options
    )
  );
  const render2 = new Function("Vue", code)(runtimeDom);
  render2._rc = true;
  return compileCache[key2] = render2;
}
registerRuntimeCompiler(compileToFunction);
const Vue = createCompatVue();
Vue.compile = compileToFunction;
Vue.configureCompat;
function isDeepKey(key2) {
  switch (typeof key2) {
    case "number":
    case "symbol": {
      return false;
    }
    case "string": {
      return key2.includes(".") || key2.includes("[") || key2.includes("]");
    }
  }
}
function toKey(value) {
  if (typeof value === "string" || typeof value === "symbol") {
    return value;
  }
  if (Object.is(value?.valueOf?.(), -0)) {
    return "-0";
  }
  return String(value);
}
function toPath(deepKey) {
  const result = [];
  const length = deepKey.length;
  if (length === 0) {
    return result;
  }
  let index2 = 0;
  let key2 = "";
  let quoteChar = "";
  let bracket = false;
  if (deepKey.charCodeAt(0) === 46) {
    result.push("");
    index2++;
  }
  while (index2 < length) {
    const char = deepKey[index2];
    if (quoteChar) {
      if (char === "\\" && index2 + 1 < length) {
        index2++;
        key2 += deepKey[index2];
      } else if (char === quoteChar) {
        quoteChar = "";
      } else {
        key2 += char;
      }
    } else if (bracket) {
      if (char === '"' || char === "'") {
        quoteChar = char;
      } else if (char === "]") {
        bracket = false;
        result.push(key2);
        key2 = "";
      } else {
        key2 += char;
      }
    } else {
      if (char === "[") {
        bracket = true;
        if (key2) {
          result.push(key2);
          key2 = "";
        }
      } else if (char === ".") {
        if (key2) {
          result.push(key2);
          key2 = "";
        }
      } else {
        key2 += char;
      }
    }
    index2++;
  }
  if (key2) {
    result.push(key2);
  }
  return result;
}
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (typeof path) {
    case "string": {
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        if (isDeepKey(path)) {
          return get(object, toPath(path), defaultValue);
        } else {
          return defaultValue;
        }
      }
      return result;
    }
    case "number":
    case "symbol": {
      if (typeof path === "number") {
        path = toKey(path);
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
    default: {
      if (Array.isArray(path)) {
        return getWithPath(object, path, defaultValue);
      }
      if (Object.is(path?.valueOf(), -0)) {
        path = "-0";
      } else {
        path = String(path);
      }
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  let current = object;
  for (let index2 = 0; index2 < path.length; index2++) {
    if (current == null) {
      return defaultValue;
    }
    if (isUnsafeProperty(path[index2])) {
      return defaultValue;
    }
    current = current[path[index2]];
  }
  if (current === void 0) {
    return defaultValue;
  }
  return current;
}
function isObject$1(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}
const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
  switch (typeof value) {
    case "number": {
      return Number.isInteger(value) && value >= 0 && value < length;
    }
    case "symbol": {
      return false;
    }
    case "string": {
      return IS_UNSIGNED_INTEGER.test(value);
    }
  }
}
function isArguments(value) {
  return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}
function has(object, path) {
  let resolvedPath;
  if (Array.isArray(path)) {
    resolvedPath = path;
  } else if (typeof path === "string" && isDeepKey(path) && object?.[path] == null) {
    resolvedPath = toPath(path);
  } else {
    resolvedPath = [path];
  }
  if (resolvedPath.length === 0) {
    return false;
  }
  let current = object;
  for (let i = 0; i < resolvedPath.length; i++) {
    const key2 = resolvedPath[i];
    if (current == null || !Object.hasOwn(current, key2)) {
      const isSparseIndex = (Array.isArray(current) || isArguments(current)) && isIndex(key2) && key2 < current.length;
      if (!isSparseIndex) {
        return false;
      }
    }
    current = current[key2];
  }
  return true;
}
const regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol$1(value)) {
    return true;
  }
  return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null && Object.hasOwn(object, value);
}
const assignValue = (object, key2, value) => {
  const objValue = object[key2];
  if (!(Object.hasOwn(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
    object[key2] = value;
  }
};
function updateWith(obj, path, updater, customizer) {
  if (obj == null && !isObject$1(obj)) {
    return obj;
  }
  const resolvedPath = isKey(path, obj) ? [path] : Array.isArray(path) ? path : typeof path === "string" ? toPath(path) : [path];
  let current = obj;
  for (let i = 0; i < resolvedPath.length && current != null; i++) {
    const key2 = toKey(resolvedPath[i]);
    if (isUnsafeProperty(key2)) {
      continue;
    }
    let newValue;
    if (i === resolvedPath.length - 1) {
      newValue = updater(current[key2]);
    } else {
      const objValue = current[key2];
      const customizerResult = customizer?.(objValue, key2, obj);
      newValue = customizerResult !== void 0 ? customizerResult : isObject$1(objValue) ? objValue : isIndex(resolvedPath[i + 1]) ? [] : {};
    }
    assignValue(current, key2, newValue);
    current = current[key2];
  }
  return obj;
}
function set(obj, path, value) {
  return updateWith(obj, path, () => value, () => void 0);
}
var remember = {
  created() {
    if (!this.$options.remember) {
      return;
    }
    if (Array.isArray(this.$options.remember)) {
      this.$options.remember = { data: this.$options.remember };
    }
    if (typeof this.$options.remember === "string") {
      this.$options.remember = { data: [this.$options.remember] };
    }
    if (typeof this.$options.remember.data === "string") {
      this.$options.remember = { data: [this.$options.remember.data] };
    }
    const rememberKey = this.$options.remember.key instanceof Function ? this.$options.remember.key.call(this) : this.$options.remember.key;
    const restored = router.restore(rememberKey);
    const rememberable = this.$options.remember.data.filter((key2) => {
      return !(this[key2] !== null && typeof this[key2] === "object" && this[key2].__rememberable === false);
    });
    const hasCallbacks = (key2) => {
      return this[key2] !== null && typeof this[key2] === "object" && typeof this[key2].__remember === "function" && typeof this[key2].__restore === "function";
    };
    rememberable.forEach((key2) => {
      if (this[key2] !== void 0 && restored !== void 0 && restored[key2] !== void 0) {
        hasCallbacks(key2) ? this[key2].__restore(restored[key2]) : this[key2] = restored[key2];
      }
      this.$watch(
        key2,
        () => {
          router.remember(
            rememberable.reduce(
              (data, key3) => ({
                ...data,
                [key3]: cloneDeep(hasCallbacks(key3) ? this[key3].__remember() : this[key3])
              }),
              {}
            ),
            rememberKey
          );
        },
        { immediate: true, deep: true }
      );
    });
  }
};
var remember_default = remember;
function useForm(rememberKeyOrData, maybeData) {
  const rememberKey = typeof rememberKeyOrData === "string" ? rememberKeyOrData : null;
  const data = (typeof rememberKeyOrData === "string" ? maybeData : rememberKeyOrData) ?? {};
  const restored = rememberKey ? router.restore(rememberKey) : null;
  let defaults2 = typeof data === "function" ? cloneDeep(data()) : cloneDeep(data);
  let cancelToken = null;
  let recentlySuccessfulTimeoutId = null;
  let transform2 = (data2) => data2;
  const form = reactive({
    ...restored ? restored.data : cloneDeep(defaults2),
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    processing: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    data() {
      return Object.keys(defaults2).reduce((carry, key2) => {
        return set(carry, key2, get(this, key2));
      }, {});
    },
    transform(callback) {
      transform2 = callback;
      return this;
    },
    defaults(fieldOrFields, maybeValue) {
      if (typeof data === "function") {
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      }
      if (typeof fieldOrFields === "undefined") {
        defaults2 = cloneDeep(this.data());
        this.isDirty = false;
      } else {
        defaults2 = typeof fieldOrFields === "string" ? set(cloneDeep(defaults2), fieldOrFields, maybeValue) : Object.assign({}, cloneDeep(defaults2), fieldOrFields);
      }
      return this;
    },
    reset(...fields) {
      const resolvedData = typeof data === "function" ? cloneDeep(data()) : cloneDeep(defaults2);
      const clonedData = cloneDeep(resolvedData);
      if (fields.length === 0) {
        defaults2 = clonedData;
        Object.assign(this, resolvedData);
      } else {
        fields.filter((key2) => has(clonedData, key2)).forEach((key2) => {
          set(defaults2, key2, get(clonedData, key2));
          set(this, key2, get(resolvedData, key2));
        });
      }
      return this;
    },
    setError(fieldOrFields, maybeValue) {
      Object.assign(this.errors, typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields);
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    clearErrors(...fields) {
      this.errors = Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
        }),
        {}
      );
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    resetAndClearErrors(...fields) {
      this.reset(...fields);
      this.clearErrors(...fields);
      return this;
    },
    submit(...args) {
      const objectPassed = typeof args[0] === "object";
      const method = objectPassed ? args[0].method : args[0];
      const url = objectPassed ? args[0].url : args[1];
      const options = (objectPassed ? args[1] : args[2]) ?? {};
      const data2 = transform2(this.data());
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          this.wasSuccessful = false;
          this.recentlySuccessful = false;
          clearTimeout(recentlySuccessfulTimeoutId);
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          this.processing = true;
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          this.progress = event;
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page2) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors();
          this.wasSuccessful = true;
          this.recentlySuccessful = true;
          recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
          const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
          defaults2 = cloneDeep(this.data());
          this.isDirty = false;
          return onSuccess;
        },
        onError: (errors) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors().setError(errors);
          if (options.onError) {
            return options.onError(errors);
          }
        },
        onCancel: () => {
          this.processing = false;
          this.progress = null;
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          this.processing = false;
          this.progress = null;
          cancelToken = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      if (method === "delete") {
        router.delete(url, { ..._options, data: data2 });
      } else {
        router[method](url, data2, _options);
      }
    },
    get(url, options) {
      this.submit("get", url, options);
    },
    post(url, options) {
      this.submit("post", url, options);
    },
    put(url, options) {
      this.submit("put", url, options);
    },
    patch(url, options) {
      this.submit("patch", url, options);
    },
    delete(url, options) {
      this.submit("delete", url, options);
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel();
      }
    },
    __rememberable: rememberKey === null,
    __remember() {
      return { data: this.data(), errors: this.errors };
    },
    __restore(restored2) {
      Object.assign(this, restored2.data);
      this.setError(restored2.errors);
    }
  });
  watch(
    form,
    (newValue) => {
      form.isDirty = !isEqual(form.data(), defaults2);
      if (rememberKey) {
        router.remember(cloneDeep(newValue.__remember()), rememberKey);
      }
    },
    { immediate: true, deep: true }
  );
  return form;
}
var component = ref(null);
var page = ref(null);
var layout = shallowRef(null);
var key = ref(null);
var headManager = null;
var App = /* @__PURE__ */ defineComponent({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: true
    },
    initialComponent: {
      type: Object,
      required: false
    },
    resolveComponent: {
      type: Function,
      required: false
    },
    titleCallback: {
      type: Function,
      required: false,
      default: (title) => title
    },
    onHeadUpdate: {
      type: Function,
      required: false,
      default: () => () => {
      }
    }
  },
  setup({ initialPage, initialComponent, resolveComponent: resolveComponent2, titleCallback, onHeadUpdate }) {
    component.value = initialComponent ? markRaw(initialComponent) : null;
    page.value = initialPage;
    key.value = null;
    const isServer2 = typeof window === "undefined";
    headManager = createHeadManager(isServer2, titleCallback, onHeadUpdate);
    if (!isServer2) {
      router.init({
        initialPage,
        resolveComponent: resolveComponent2,
        swapComponent: async (args) => {
          component.value = markRaw(args.component);
          page.value = args.page;
          key.value = args.preserveState ? key.value : Date.now();
        }
      });
      router.on("navigate", () => headManager.forceUpdate());
    }
    return () => {
      if (component.value) {
        component.value.inheritAttrs = !!component.value.inheritAttrs;
        const child = h(component.value, {
          ...page.value.props,
          key: key.value
        });
        if (layout.value) {
          component.value.layout = layout.value;
          layout.value = null;
        }
        if (component.value.layout) {
          if (typeof component.value.layout === "function") {
            return component.value.layout(h, child);
          }
          return (Array.isArray(component.value.layout) ? component.value.layout : [component.value.layout]).concat(child).reverse().reduce((child2, layout2) => {
            layout2.inheritAttrs = !!layout2.inheritAttrs;
            return h(layout2, { ...page.value.props }, () => child2);
          });
        }
        return child;
      }
    };
  }
});
var app_default = App;
var plugin = {
  install(app) {
    router.form = useForm;
    Object.defineProperty(app.config.globalProperties, "$inertia", { get: () => router });
    Object.defineProperty(app.config.globalProperties, "$page", { get: () => page.value });
    Object.defineProperty(app.config.globalProperties, "$headManager", { get: () => headManager });
    app.mixin(remember_default);
  }
};
async function createInertiaApp({
  id = "app",
  resolve: resolve2,
  setup,
  title,
  progress: progress3 = {},
  page: page2,
  render: render2
}) {
  const isServer2 = typeof window === "undefined";
  const el = isServer2 ? null : document.getElementById(id);
  const initialPage = page2 || JSON.parse(el.dataset.page);
  const resolveComponent2 = (name) => Promise.resolve(resolve2(name)).then((module) => module.default || module);
  let head = [];
  const vueApp = await Promise.all([
    resolveComponent2(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    return setup({
      el,
      App: app_default,
      props: {
        initialPage,
        initialComponent,
        resolveComponent: resolveComponent2,
        titleCallback: title,
        onHeadUpdate: isServer2 ? (elements) => head = elements : null
      },
      plugin
    });
  });
  if (!isServer2 && progress3) {
    setupProgress(progress3);
  }
  if (isServer2) {
    const body = await render2(
      createSSRApp({
        render: () => h("div", {
          id,
          "data-page": JSON.stringify(initialPage),
          innerHTML: vueApp ? render2(vueApp) : ""
        })
      })
    );
    return { head, body };
  }
}
var Head = /* @__PURE__ */ defineComponent({
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(node) {
      return [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(node.type) > -1;
    },
    renderTagStart(node) {
      node.props = node.props || {};
      node.props.inertia = node.props["head-key"] !== void 0 ? node.props["head-key"] : "";
      const attrs = Object.keys(node.props).reduce((carry, name) => {
        const value = String(node.props[name]);
        if (["key", "head-key"].includes(name)) {
          return carry;
        } else if (value === "") {
          return carry + ` ${name}`;
        } else {
          return carry + ` ${name}="${escape$1(value)}"`;
        }
      }, "");
      return `<${node.type}${attrs}>`;
    },
    renderTagChildren(node) {
      return typeof node.children === "string" ? node.children : node.children.reduce((html, child) => html + this.renderTag(child), "");
    },
    isFunctionNode(node) {
      return typeof node.type === "function";
    },
    isComponentNode(node) {
      return typeof node.type === "object";
    },
    isCommentNode(node) {
      return /(comment|cmt)/i.test(node.type.toString());
    },
    isFragmentNode(node) {
      return /(fragment|fgt|symbol\(\))/i.test(node.type.toString());
    },
    isTextNode(node) {
      return /(text|txt)/i.test(node.type.toString());
    },
    renderTag(node) {
      if (this.isTextNode(node)) {
        return node.children;
      } else if (this.isFragmentNode(node)) {
        return "";
      } else if (this.isCommentNode(node)) {
        return "";
      }
      let html = this.renderTagStart(node);
      if (node.children) {
        html += this.renderTagChildren(node);
      }
      if (!this.isUnaryTag(node)) {
        html += `</${node.type}>`;
      }
      return html;
    },
    addTitleElement(elements) {
      if (this.title && !elements.find((tag) => tag.startsWith("<title"))) {
        elements.push(`<title inertia>${this.title}</title>`);
      }
      return elements;
    },
    renderNodes(nodes) {
      return this.addTitleElement(
        nodes.flatMap((node) => this.resolveNode(node)).map((node) => this.renderTag(node)).filter((node) => node)
      );
    },
    resolveNode(node) {
      if (this.isFunctionNode(node)) {
        return this.resolveNode(node.type());
      } else if (this.isComponentNode(node)) {
        console.warn(`Using components in the <Head> component is not supported.`);
        return [];
      } else if (this.isTextNode(node) && node.children) {
        return node;
      } else if (this.isFragmentNode(node) && node.children) {
        return node.children.flatMap((child) => this.resolveNode(child));
      } else if (this.isCommentNode(node)) {
        return [];
      } else {
        return node;
      }
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var head_default = Head;
var Link2 = /* @__PURE__ */ defineComponent({
  name: "Link",
  props: {
    as: {
      type: String,
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      required: true
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      default: false
    },
    preserveState: {
      type: Boolean,
      default: null
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: false
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: false
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: (_visit) => {
      }
    },
    onProgress: {
      type: Function,
      default: () => {
      }
    },
    onFinish: {
      type: Function,
      default: () => {
      }
    },
    onBefore: {
      type: Function,
      default: () => {
      }
    },
    onCancel: {
      type: Function,
      default: () => {
      }
    },
    onSuccess: {
      type: Function,
      default: () => {
      }
    },
    onError: {
      type: Function,
      default: () => {
      }
    },
    onCancelToken: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(props, { slots, attrs }) {
    const inFlightCount = ref(0);
    const hoverTimeout = ref(null);
    const prefetchModes = computed(() => {
      if (props.prefetch === true) {
        return ["hover"];
      }
      if (props.prefetch === false) {
        return [];
      }
      if (Array.isArray(props.prefetch)) {
        return props.prefetch;
      }
      return [props.prefetch];
    });
    const cacheForValue = computed(() => {
      if (props.cacheFor !== 0) {
        return props.cacheFor;
      }
      if (prefetchModes.value.length === 1 && prefetchModes.value[0] === "click") {
        return 0;
      }
      return 3e4;
    });
    onMounted(() => {
      if (prefetchModes.value.includes("mount")) {
        prefetch();
      }
    });
    onUnmounted(() => {
      clearTimeout(hoverTimeout.value);
    });
    const method = computed(
      () => typeof props.href === "object" ? props.href.method : props.method.toLowerCase()
    );
    const as = computed(() => method.value !== "get" ? "button" : props.as.toLowerCase());
    const mergeDataArray = computed(
      () => mergeDataIntoQueryString(
        method.value,
        typeof props.href === "object" ? props.href.url : props.href || "",
        props.data,
        props.queryStringArrayFormat
      )
    );
    const href = computed(() => mergeDataArray.value[0]);
    const data = computed(() => mergeDataArray.value[1]);
    const elProps = computed(() => ({
      a: { href: href.value },
      button: { type: "button" }
    }));
    const baseParams = computed(() => ({
      data: data.value,
      method: method.value,
      replace: props.replace,
      preserveScroll: props.preserveScroll,
      preserveState: props.preserveState ?? method.value !== "get",
      only: props.only,
      except: props.except,
      headers: props.headers,
      async: props.async
    }));
    const visitParams = computed(() => ({
      ...baseParams.value,
      onCancelToken: props.onCancelToken,
      onBefore: props.onBefore,
      onStart: (event) => {
        inFlightCount.value++;
        props.onStart(event);
      },
      onProgress: props.onProgress,
      onFinish: (event) => {
        inFlightCount.value--;
        props.onFinish(event);
      },
      onCancel: props.onCancel,
      onSuccess: props.onSuccess,
      onError: props.onError
    }));
    const prefetch = () => {
      router.prefetch(href.value, baseParams.value, { cacheFor: cacheForValue.value });
    };
    const regularEvents = {
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      }
    };
    const prefetchHoverEvents = {
      onMouseenter: () => {
        hoverTimeout.value = setTimeout(() => {
          prefetch();
        }, 75);
      },
      onMouseleave: () => {
        clearTimeout(hoverTimeout.value);
      },
      onClick: regularEvents.onClick
    };
    const prefetchClickEvents = {
      onMousedown: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onMouseup: (event) => {
        event.preventDefault();
        router.visit(href.value, visitParams.value);
      },
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
        }
      }
    };
    return () => {
      return h(
        as.value,
        {
          ...attrs,
          ...elProps.value[as.value] || {},
          "data-loading": inFlightCount.value > 0 ? "" : void 0,
          ...(() => {
            if (prefetchModes.value.includes("hover")) {
              return prefetchHoverEvents;
            }
            if (prefetchModes.value.includes("click")) {
              return prefetchClickEvents;
            }
            return regularEvents;
          })()
        },
        slots
      );
    };
  }
});
var link_default = Link2;
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page2 = pages[p2];
    if (typeof page2 === "undefined") {
      continue;
    }
    return typeof page2 === "function" ? page2() : page2;
  }
  throw new Error(`Page not found: ${path}`);
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin2, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin2;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin2.settings) {
      for (const id in plugin2.settings) {
        const item = plugin2.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin2.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var storeKey = "store";
function useStore(key2) {
  if (key2 === void 0) key2 = null;
  return inject(key2 !== null ? key2 : storeKey);
}
function find(list, f) {
  return list.filter(f)[0];
}
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  var hit = find(cache, function(c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  cache.push({
    original: obj,
    copy
  });
  Object.keys(obj).forEach(function(key2) {
    copy[key2] = deepCopy(obj[key2], cache);
  });
  return copy;
}
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function(key2) {
    return fn(obj[key2], key2);
  });
}
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise(val) {
  return val && typeof val.then === "function";
}
function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function() {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store2, hot) {
  store2._actions = /* @__PURE__ */ Object.create(null);
  store2._mutations = /* @__PURE__ */ Object.create(null);
  store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
  store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var state2 = store2.state;
  installModule(store2, state2, [], store2._modules.root, true);
  resetStoreState(store2, state2, hot);
}
function resetStoreState(store2, state2, hot) {
  var oldState = store2._state;
  var oldScope = store2._scope;
  store2.getters = {};
  store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var wrappedGetters = store2._wrappedGetters;
  var computedObj = {};
  var computedCache = {};
  var scope = effectScope(true);
  scope.run(function() {
    forEachValue(wrappedGetters, function(fn, key2) {
      computedObj[key2] = partial(fn, store2);
      computedCache[key2] = computed(function() {
        return computedObj[key2]();
      });
      Object.defineProperty(store2.getters, key2, {
        get: function() {
          return computedCache[key2].value;
        },
        enumerable: true
        // for local getters
      });
    });
  });
  store2._state = reactive({
    data: state2
  });
  store2._scope = scope;
  if (store2.strict) {
    enableStrictMode(store2);
  }
  if (oldState) {
    if (hot) {
      store2._withCommit(function() {
        oldState.data = null;
      });
    }
  }
  if (oldScope) {
    oldScope.stop();
  }
}
function installModule(store2, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store2._modules.getNamespace(path);
  if (module.namespaced) {
    if (store2._modulesNamespaceMap[namespace] && false) ;
    store2._modulesNamespaceMap[namespace] = module;
  }
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store2._withCommit(function() {
      parentState[moduleName] = module.state;
    });
  }
  var local = module.context = makeLocalContext(store2, namespace, path);
  module.forEachMutation(function(mutation, key2) {
    var namespacedType = namespace + key2;
    registerMutation(store2, namespacedType, mutation, local);
  });
  module.forEachAction(function(action, key2) {
    var type2 = action.root ? key2 : namespace + key2;
    var handler = action.handler || action;
    registerAction(store2, type2, handler, local);
  });
  module.forEachGetter(function(getter, key2) {
    var namespacedType = namespace + key2;
    registerGetter(store2, namespacedType, getter, local);
  });
  module.forEachChild(function(child, key2) {
    installModule(store2, rootState, path.concat(key2), child, hot);
  });
}
function makeLocalContext(store2, namespace, path) {
  var noNamespace = namespace === "";
  var local = {
    dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type2 = args.type;
      if (!options || !options.root) {
        type2 = namespace + type2;
      }
      return store2.dispatch(type2, payload);
    },
    commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type2 = args.type;
      if (!options || !options.root) {
        type2 = namespace + type2;
      }
      store2.commit(type2, payload, options);
    }
  };
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function() {
        return store2.getters;
      } : function() {
        return makeLocalGetters(store2, namespace);
      }
    },
    state: {
      get: function() {
        return getNestedState(store2.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store2, namespace) {
  if (!store2._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store2.getters).forEach(function(type2) {
      if (type2.slice(0, splitPos) !== namespace) {
        return;
      }
      var localType = type2.slice(splitPos);
      Object.defineProperty(gettersProxy, localType, {
        get: function() {
          return store2.getters[type2];
        },
        enumerable: true
      });
    });
    store2._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store2._makeLocalGettersCache[namespace];
}
function registerMutation(store2, type2, handler, local) {
  var entry = store2._mutations[type2] || (store2._mutations[type2] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store2, local.state, payload);
  });
}
function registerAction(store2, type2, handler, local) {
  var entry = store2._actions[type2] || (store2._actions[type2] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store2, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store2.getters,
      rootState: store2.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store2._devtoolHook) {
      return res.catch(function(err) {
        store2._devtoolHook.emit("vuex:error", err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store2, type2, rawGetter, local) {
  if (store2._wrappedGetters[type2]) {
    return;
  }
  store2._wrappedGetters[type2] = function wrappedGetter(store22) {
    return rawGetter(
      local.state,
      // local state
      local.getters,
      // local getters
      store22.state,
      // root state
      store22.getters
      // root getters
    );
  };
}
function enableStrictMode(store2) {
  watch(function() {
    return store2._state.data;
  }, function() {
  }, { deep: true, flush: "sync" });
}
function getNestedState(state2, path) {
  return path.reduce(function(state22, key2) {
    return state22[key2];
  }, state2);
}
function unifyObjectStyle(type2, payload, options) {
  if (isObject(type2) && type2.type) {
    options = payload;
    payload = type2;
    type2 = type2.type;
  }
  return { type: type2, payload, options };
}
var LABEL_VUEX_BINDINGS = "vuex bindings";
var MUTATIONS_LAYER_ID = "vuex:mutations";
var ACTIONS_LAYER_ID = "vuex:actions";
var INSPECTOR_ID = "vuex";
var actionId = 0;
function addDevtools(app, store2) {
  setupDevtoolsPlugin(
    {
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    },
    function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(
            getStoreModule(store2._modules, modulePath),
            modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
            modulePath
          );
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state2) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state2;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state2) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state2;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state2) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state2;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    }
  );
}
var COLOR_LIME_500 = 8702998;
var COLOR_DARK = 6710886;
var COLOR_WHITE = 16777215;
var TAG_NAMESPACED = {
  label: "namespaced",
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};
function extractNameFromPath(path) {
  return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
}
function formatStoreForInspectorTree(module, path) {
  return {
    id: path || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(
      function(moduleName) {
        return formatStoreForInspectorTree(
          module._children[moduleName],
          path + moduleName + "/"
        );
      }
    )
  };
}
function flattenStoreForInspectorTree(result, module, filter2, path) {
  if (path.includes(filter2)) {
    result.push({
      id: path || "root",
      label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function(moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter2, path + moduleName + "/");
  });
}
function formatStoreForInspectorState(module, getters, path) {
  getters = path === "root" ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function(key2) {
      return {
        key: key2,
        editable: true,
        value: module.state[key2]
      };
    })
  };
  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function(key2) {
      return {
        key: key2.endsWith("/") ? extractNameFromPath(key2) : key2,
        editable: false,
        value: canThrow(function() {
          return tree[key2];
        })
      };
    });
  }
  return storeState;
}
function transformPathsToObjectTree(getters) {
  var result = {};
  Object.keys(getters).forEach(function(key2) {
    var path = key2.split("/");
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function(p2) {
        if (!target[p2]) {
          target[p2] = {
            _custom: {
              value: {},
              display: p2,
              tooltip: "Module",
              abstract: true
            }
          };
        }
        target = target[p2]._custom.value;
      });
      target[leafKey] = canThrow(function() {
        return getters[key2];
      });
    } else {
      result[key2] = canThrow(function() {
        return getters[key2];
      });
    }
  });
  return result;
}
function getStoreModule(moduleMap, path) {
  var names = path.split("/").filter(function(n) {
    return n;
  });
  return names.reduce(
    function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    },
    path === "root" ? moduleMap : moduleMap.root._children
  );
}
function canThrow(cb) {
  try {
    return cb();
  } catch (e) {
    return e;
  }
}
var Module = function Module2(rawModule, runtime) {
  this.runtime = runtime;
  this._children = /* @__PURE__ */ Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors$1 = { namespaced: { configurable: true } };
prototypeAccessors$1.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key2, module) {
  this._children[key2] = module;
};
Module.prototype.removeChild = function removeChild(key2) {
  delete this._children[key2];
};
Module.prototype.getChild = function getChild(key2) {
  return this._children[key2];
};
Module.prototype.hasChild = function hasChild(key2) {
  return key2 in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors$1);
var ModuleCollection = function ModuleCollection2(rawRootModule) {
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get2(path) {
  return path.reduce(function(module, key2) {
    return module.getChild(key2);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function(namespace, key2) {
    module = module.getChild(key2);
    return namespace + (module.namespaced ? key2 + "/" : "");
  }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update2([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0) runtime = true;
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function(rawChildModule, key2) {
      this$1$1.register(path.concat(key2), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key2 = path[path.length - 1];
  var child = parent.getChild(key2);
  if (!child) {
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key2);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key2 = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key2);
  }
  return false;
};
function update2(path, targetModule, newModule) {
  targetModule.update(newModule);
  if (newModule.modules) {
    for (var key2 in newModule.modules) {
      if (!targetModule.getChild(key2)) {
        return;
      }
      update2(
        path.concat(key2),
        targetModule.getChild(key2),
        newModule.modules[key2]
      );
    }
  }
}
function createStore(options) {
  return new Store(options);
}
var Store = function Store2(options) {
  var this$1$1 = this;
  if (options === void 0) options = {};
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;
  var devtools2 = options.devtools;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  this._scope = null;
  this._devtools = devtools2;
  var store2 = this;
  var ref2 = this;
  var dispatch2 = ref2.dispatch;
  var commit2 = ref2.commit;
  this.dispatch = function boundDispatch(type2, payload) {
    return dispatch2.call(store2, type2, payload);
  };
  this.commit = function boundCommit(type2, payload, options2) {
    return commit2.call(store2, type2, payload, options2);
  };
  this.strict = strict;
  var state2 = this._modules.root.state;
  installModule(this, state2, [], this._modules.root);
  resetStoreState(this, state2);
  plugins.forEach(function(plugin2) {
    return plugin2(this$1$1);
  });
};
var prototypeAccessors = { state: { configurable: true } };
Store.prototype.install = function install(app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;
  var useDevtools = this._devtools !== void 0 ? this._devtools : false;
  if (useDevtools) {
    addDevtools(app, this);
  }
};
prototypeAccessors.state.get = function() {
  return this._state.data;
};
prototypeAccessors.state.set = function(v2) {
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload, _options);
  var type2 = ref2.type;
  var payload = ref2.payload;
  var mutation = { type: type2, payload };
  var entry = this._mutations[type2];
  if (!entry) {
    return;
  }
  this._withCommit(function() {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice().forEach(function(sub) {
    return sub(mutation, this$1$1.state);
  });
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload);
  var type2 = ref2.type;
  var payload = ref2.payload;
  var action = { type: type2, payload };
  var entry = this._actions[type2];
  if (!entry) {
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(sub) {
      return sub.before;
    }).forEach(function(sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e) {
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function(resolve2, reject) {
    result.then(function(res) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.after;
        }).forEach(function(sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e) {
      }
      resolve2(res);
    }, function(error) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.error;
        }).forEach(function(sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e) {
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === "function" ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch$12(getter, cb, options) {
  var this$1$1 = this;
  return watch(function() {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, Object.assign({}, options));
};
Store.prototype.replaceState = function replaceState(state2) {
  var this$1$1 = this;
  this._withCommit(function() {
    this$1$1._state.data = state2;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  resetStoreState(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.unregister(path);
  this._withCommit(function() {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === "string") {
    path = [path];
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors);
var mapState = normalizeNamespace(function(namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function(ref2) {
    var key2 = ref2.key;
    var val = ref2.val;
    res[key2] = function mappedState() {
      var state2 = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, "mapState", namespace);
        if (!module) {
          return;
        }
        state2 = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === "function" ? val.call(this, state2, getters) : state2[val];
    };
    res[key2].vuex = true;
  });
  return res;
});
var mapMutations = normalizeNamespace(function(namespace, mutations2) {
  var res = {};
  normalizeMap(mutations2).forEach(function(ref2) {
    var key2 = ref2.key;
    var val = ref2.val;
    res[key2] = function mappedMutation() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      var commit2 = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
        if (!module) {
          return;
        }
        commit2 = module.context.commit;
      }
      return typeof val === "function" ? val.apply(this, [commit2].concat(args)) : commit2.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
var mapGetters = normalizeNamespace(function(namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function(ref2) {
    var key2 = ref2.key;
    var val = ref2.val;
    val = namespace + val;
    res[key2] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
        return;
      }
      return this.$store.getters[val];
    };
    res[key2].vuex = true;
  });
  return res;
});
var mapActions = normalizeNamespace(function(namespace, actions2) {
  var res = {};
  normalizeMap(actions2).forEach(function(ref2) {
    var key2 = ref2.key;
    var val = ref2.val;
    res[key2] = function mappedAction() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      var dispatch2 = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, "mapActions", namespace);
        if (!module) {
          return;
        }
        dispatch2 = module.context.dispatch;
      }
      return typeof val === "function" ? val.apply(this, [dispatch2].concat(args)) : dispatch2.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
var createNamespacedHelpers = function(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function(key2) {
    return { key: key2, val: key2 };
  }) : Object.keys(map).map(function(key2) {
    return { key: key2, val: map[key2] };
  });
}
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}
function normalizeNamespace(fn) {
  return function(namespace, map) {
    if (typeof namespace !== "string") {
      map = namespace;
      namespace = "";
    } else if (namespace.charAt(namespace.length - 1) !== "/") {
      namespace += "/";
    }
    return fn(namespace, map);
  };
}
function getModuleByNamespace(store2, helper, namespace) {
  var module = store2._modulesNamespaceMap[namespace];
  return module;
}
function createLogger(ref2) {
  if (ref2 === void 0) ref2 = {};
  var collapsed = ref2.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter2 = ref2.filter;
  if (filter2 === void 0) filter2 = function(mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref2.transformer;
  if (transformer === void 0) transformer = function(state2) {
    return state2;
  };
  var mutationTransformer = ref2.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function(mut) {
    return mut;
  };
  var actionFilter = ref2.actionFilter;
  if (actionFilter === void 0) actionFilter = function(action, state2) {
    return true;
  };
  var actionTransformer = ref2.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function(act) {
    return act;
  };
  var logMutations = ref2.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref2.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref2.logger;
  if (logger === void 0) logger = console;
  return function(store2) {
    var prevState = deepCopy(store2.state);
    if (typeof logger === "undefined") {
      return;
    }
    if (logMutations) {
      store2.subscribe(function(mutation, state2) {
        var nextState = deepCopy(state2);
        if (filter2(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
          logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
          logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
          endMessage(logger);
        }
        prevState = nextState;
      });
    }
    if (logActions) {
      store2.subscribeAction(function(action, state2) {
        if (actionFilter(action, state2)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}
function startMessage(logger, message, collapsed) {
  var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
  try {
    startMessage2.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}
function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log("—— log end ——");
  }
}
function getFormattedTime() {
  var time = /* @__PURE__ */ new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
}
var index = {
  version: "4.1.0",
  Store,
  storeKey,
  createStore,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
};
const state$2 = () => ({
  isOpen: false,
  title: void 0,
  message: void 0,
  onConfirm: void 0,
  variant: "danger"
});
const PROMPT_CONFIRM_DELETE = "PROMPT_CONFIRM_DELETE";
const CANCEL_CONFIRM_DELETE = "CANCEL_CONFIRM_DELETE";
const mutations$2 = {
  [PROMPT_CONFIRM_DELETE](state2, payload) {
    Object.assign(state2, {
      ...state2,
      isOpen: true,
      ...payload
    });
  },
  [CANCEL_CONFIRM_DELETE](state2) {
    Object.assign(state2, {
      ...state2,
      isOpen: false
    });
  }
};
const actions$2 = {
  open({ dispatch: dispatch2, commit: commit2 }, payload) {
    dispatch2("backdrop/open", null, { root: true });
    commit2(PROMPT_CONFIRM_DELETE, payload);
  },
  close({ dispatch: dispatch2, commit: commit2 }) {
    dispatch2("backdrop/close", null, { root: true });
    commit2(CANCEL_CONFIRM_DELETE);
  }
};
const confirm = {
  namespaced: true,
  state: state$2,
  mutations: mutations$2,
  actions: actions$2
};
const state$1 = () => ({
  isOpen: false
});
const CLOSE_BACKDROP = "CLOSE_BACKDROP";
const OPEN_BACKDROP = "OPEN_BACKDROP";
const mutations$1 = {
  [OPEN_BACKDROP](state2) {
    Object.assign(state2, {
      ...state2,
      isOpen: true
    });
  },
  [CLOSE_BACKDROP](state2) {
    Object.assign(state2, {
      ...state2,
      isOpen: false
    });
  }
};
const actions$1 = {
  open({ commit: commit2 }, payload) {
    commit2(OPEN_BACKDROP, payload);
  },
  close({ commit: commit2 }) {
    commit2(CLOSE_BACKDROP);
  }
};
const backdrop = {
  namespaced: true,
  state: state$1,
  mutations: mutations$1,
  actions: actions$1
};
const state = () => ({
  notifications: []
});
const NOTIFY_NOTIFICATION = "NOTIFY_NOTIFICATION";
const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
const mutations = {
  [NOTIFY_NOTIFICATION](state2, payload) {
    state2.notifications.push(payload);
  },
  [CLOSE_NOTIFICATION](state2) {
    state2.notifications.shift();
  }
};
const actions = {
  notify({ commit: commit2 }, payload) {
    commit2(NOTIFY_NOTIFICATION, payload);
    setTimeout(() => commit2(CLOSE_NOTIFICATION), payload.timeout ?? 4e3);
  }
};
const notification = {
  namespaced: true,
  state,
  mutations,
  actions
};
Vue.use(index);
const store = new index.Store({
  modules: {
    confirm,
    backdrop,
    notification
  }
});
const m = Symbol("wormhole");
function w() {
  const e = inject(m);
  if (!e)
    throw new Error(`
    [portal-vue]: Necessary Injection not found. Make sur you installed the plugin properly.`);
  return e;
}
const v = typeof window < "u";
function k(e, t) {
  return e.map((n, l) => [l, n]).sort(function(n, l) {
    return t(n[1], l[1]) || n[0] - l[0];
  }).map((n) => n[1]);
}
function B(e, t) {
  const n = w();
  function l() {
    if (!v)
      return;
    const { to: c, name: o, order: r } = e;
    t.default ? n.open({
      to: c,
      from: o,
      order: r,
      content: t.default
    }) : s();
  }
  function s(c) {
    n.close({
      to: c ?? e.to,
      from: e.name
    });
  }
  onMounted(() => {
    e.disabled || l();
  }), onUpdated(() => {
    e.disabled ? s() : l();
  }), onBeforeUnmount(() => {
    s();
  }), watch(
    () => e.to,
    (c, o) => {
      e.disabled || (o && o !== c && s(o), l());
    }
  );
}
const W = /* @__PURE__ */ defineComponent({
  compatConfig: { MODE: 3 },
  name: "portal",
  props: {
    disabled: { type: Boolean },
    name: { type: [String, Symbol], default: () => Symbol() },
    order: { type: Number },
    slotProps: { type: Object, default: () => ({}) },
    to: {
      type: String,
      default: () => String(Math.round(Math.random() * 1e7))
    }
  },
  setup(e, { slots: t }) {
    return B(e, t), () => e.disabled && t.default ? t.default(e.slotProps) : null;
  }
}), E = (e, { slots: t }) => {
  var n;
  return (n = t.default) == null ? void 0 : n.call(t);
}, b = /* @__PURE__ */ defineComponent({
  compatConfig: { MODE: 3 },
  name: "portalTarget",
  props: {
    multiple: { type: Boolean, default: false },
    name: { type: String, required: true },
    slotProps: { type: Object, default: () => ({}) }
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n }) {
    const l = w(), s = computed(
      () => {
        const c = l.getContentForTarget(
          e.name,
          e.multiple
        ), o = n.wrapper, r = c.map((u) => u.content(e.slotProps)), a = o ? r.flatMap(
          (u) => u.length ? o(u) : []
        ) : r.flat(1);
        return {
          vnodes: a,
          vnodesFn: () => a
        };
      }
    );
    return watch(
      s,
      ({ vnodes: c }) => {
        const o = c.length > 0, r = l.transports.get(e.name), a = r ? [...r.keys()] : [];
        t("change", { hasContent: o, sources: a });
      },
      { flush: "post" }
    ), () => {
      var o;
      return s.value.vnodes.length ? [
        h("div", {
          style: "display: none",
          key: "__portal-vue-hacky-scoped-slot-repair__"
        }),
        h(E, s.value.vnodesFn)
      ] : (o = n.default) == null ? void 0 : o.call(n);
    };
  }
});
function I(e = true) {
  const t = reactive(/* @__PURE__ */ new Map());
  function n(o) {
    if (!v)
      return;
    const { to: r, from: a, content: u, order: i = 1 / 0 } = o;
    if (!r || !a || !u)
      return;
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const f = t.get(r), P = {
      to: r,
      from: a,
      content: u,
      order: i
    };
    f.set(a, P);
  }
  function l(o) {
    const { to: r, from: a } = o;
    if (!r || !a)
      return;
    const u = t.get(r);
    !u || (u.delete(a), u.size || t.delete(r));
  }
  function s(o, r) {
    const a = t.get(o);
    if (!a)
      return [];
    const u = Array.from((a == null ? void 0 : a.values()) || []);
    return r ? k(
      u,
      (i, f) => i.order - f.order
    ) : [u.pop()];
  }
  const c = {
    open: n,
    close: l,
    transports: t,
    getContentForTarget: s
  };
  return e ? readonly(c) : c;
}
const C = I();
function D(e, t = {}) {
  t.portalName !== false && e.component(t.portalName || "Portal", W), t.portalTargetName !== false && e.component(t.portalTargetName || "PortalTarget", b);
  const n = t.wormhole ?? C;
  e.provide(m, n);
}
var vClickOutside_umd$1 = { exports: {} };
var vClickOutside_umd = vClickOutside_umd$1.exports;
var hasRequiredVClickOutside_umd;
function requireVClickOutside_umd() {
  if (hasRequiredVClickOutside_umd) return vClickOutside_umd$1.exports;
  hasRequiredVClickOutside_umd = 1;
  (function(module, exports) {
    !function(e, n) {
      module.exports = n();
    }(vClickOutside_umd, function() {
      var e = "__v-click-outside", n = "undefined" != typeof window, t = "undefined" != typeof navigator, r = n && ("ontouchstart" in window || t && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"], i = function(e2) {
        var n2 = e2.event, t2 = e2.handler;
        (0, e2.middleware)(n2) && t2(n2);
      }, a = function(n2, t2) {
        var a2 = function(e2) {
          var n3 = "function" == typeof e2;
          if (!n3 && "object" != typeof e2) throw new Error("v-click-outside: Binding value must be a function or an object");
          return { handler: n3 ? e2 : e2.handler, middleware: e2.middleware || function(e3) {
            return e3;
          }, events: e2.events || r, isActive: !(false === e2.isActive), detectIframe: !(false === e2.detectIframe), capture: Boolean(e2.capture) };
        }(t2.value), o2 = a2.handler, d2 = a2.middleware, c = a2.detectIframe, u = a2.capture;
        if (a2.isActive) {
          if (n2[e] = a2.events.map(function(e2) {
            return { event: e2, srcTarget: document.documentElement, handler: function(e3) {
              return function(e4) {
                var n3 = e4.el, t3 = e4.event, r2 = e4.handler, a3 = e4.middleware, o3 = t3.path || t3.composedPath && t3.composedPath();
                (o3 ? o3.indexOf(n3) < 0 : !n3.contains(t3.target)) && i({ event: t3, handler: r2, middleware: a3 });
              }({ el: n2, event: e3, handler: o2, middleware: d2 });
            }, capture: u };
          }), c) {
            var l = { event: "blur", srcTarget: window, handler: function(e2) {
              return function(e3) {
                var n3 = e3.el, t3 = e3.event, r2 = e3.handler, a3 = e3.middleware;
                setTimeout(function() {
                  var e4 = document.activeElement;
                  e4 && "IFRAME" === e4.tagName && !n3.contains(e4) && i({ event: t3, handler: r2, middleware: a3 });
                }, 0);
              }({ el: n2, event: e2, handler: o2, middleware: d2 });
            }, capture: u };
            n2[e] = [].concat(n2[e], [l]);
          }
          n2[e].forEach(function(t3) {
            var r2 = t3.event, i2 = t3.srcTarget, a3 = t3.handler;
            return setTimeout(function() {
              n2[e] && i2.addEventListener(r2, a3, u);
            }, 0);
          });
        }
      }, o = function(n2) {
        (n2[e] || []).forEach(function(e2) {
          return e2.srcTarget.removeEventListener(e2.event, e2.handler, e2.capture);
        }), delete n2[e];
      }, d = n ? { beforeMount: a, updated: function(e2, n2) {
        var t2 = n2.value, r2 = n2.oldValue;
        JSON.stringify(t2) !== JSON.stringify(r2) && (o(e2), a(e2, { value: t2 }));
      }, unmounted: o } : {};
      return { install: function(e2) {
        e2.directive("click-outside", d);
      }, directive: d };
    });
  })(vClickOutside_umd$1);
  return vClickOutside_umd$1.exports;
}
var vClickOutside_umdExports = requireVClickOutside_umd();
const vClickOutside = /* @__PURE__ */ getDefaultExportFromCjs(vClickOutside_umdExports);
var vueClipboard = { exports: {} };
var clipboard_min$1 = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var clipboard_min = clipboard_min$1.exports;
var hasRequiredClipboard_min;
function requireClipboard_min() {
  if (hasRequiredClipboard_min) return clipboard_min$1.exports;
  hasRequiredClipboard_min = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(clipboard_min, function() {
      return n = { 686: function(t, e, n2) {
        n2.d(e, { default: function() {
          return b2;
        } });
        var e = n2(279), i = n2.n(e), e = n2(370), u = n2.n(e), e = n2(817), r2 = n2.n(e);
        function c(t2) {
          try {
            return document.execCommand(t2);
          } catch (t3) {
            return;
          }
        }
        var a = function(t2) {
          t2 = r2()(t2);
          return c("cut"), t2;
        };
        function o2(t2, e2) {
          var n3, o3, t2 = (n3 = t2, o3 = "rtl" === document.documentElement.getAttribute("dir"), (t2 = document.createElement("textarea")).style.fontSize = "12pt", t2.style.border = "0", t2.style.padding = "0", t2.style.margin = "0", t2.style.position = "absolute", t2.style[o3 ? "right" : "left"] = "-9999px", o3 = window.pageYOffset || document.documentElement.scrollTop, t2.style.top = "".concat(o3, "px"), t2.setAttribute("readonly", ""), t2.value = n3, t2);
          return e2.container.appendChild(t2), e2 = r2()(t2), c("copy"), t2.remove(), e2;
        }
        var f = function(t2) {
          var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body }, n3 = "";
          return "string" == typeof t2 ? n3 = o2(t2, e2) : t2 instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t2 ? void 0 : t2.type) ? n3 = o2(t2.value, e2) : (n3 = r2()(t2), c("copy")), n3;
        };
        function l(t2) {
          return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var s = function() {
          var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t2.action, n3 = void 0 === e2 ? "copy" : e2, o3 = t2.container, e2 = t2.target, t2 = t2.text;
          if ("copy" !== n3 && "cut" !== n3) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          if (void 0 !== e2) {
            if (!e2 || "object" !== l(e2) || 1 !== e2.nodeType) throw new Error('Invalid "target" value, use a valid Element');
            if ("copy" === n3 && e2.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if ("cut" === n3 && (e2.hasAttribute("readonly") || e2.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
          }
          return t2 ? f(t2, { container: o3 }) : e2 ? "cut" === n3 ? a(e2) : f(e2, { container: o3 }) : void 0;
        };
        function p2(t2) {
          return (p2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function d(t2, e2) {
          for (var n3 = 0; n3 < e2.length; n3++) {
            var o3 = e2[n3];
            o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t2, o3.key, o3);
          }
        }
        function y(t2, e2) {
          return (y = Object.setPrototypeOf || function(t3, e3) {
            return t3.__proto__ = e3, t3;
          })(t2, e2);
        }
        function h2(n3) {
          var o3 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t2) {
              return false;
            }
          }();
          return function() {
            var t2, e2 = v2(n3);
            return t2 = o3 ? (t2 = v2(this).constructor, Reflect.construct(e2, arguments, t2)) : e2.apply(this, arguments), e2 = this, !(t2 = t2) || "object" !== p2(t2) && "function" != typeof t2 ? function(t3) {
              if (void 0 !== t3) return t3;
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(e2) : t2;
          };
        }
        function v2(t2) {
          return (v2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function m2(t2, e2) {
          t2 = "data-clipboard-".concat(t2);
          if (e2.hasAttribute(t2)) return e2.getAttribute(t2);
        }
        var b2 = function() {
          !function(t3, e3) {
            if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && y(t3, e3);
          }(r3, i());
          var t2, e2, n3, o3 = h2(r3);
          function r3(t3, e3) {
            var n4;
            return function(t4) {
              if (!(t4 instanceof r3)) throw new TypeError("Cannot call a class as a function");
            }(this), (n4 = o3.call(this)).resolveOptions(e3), n4.listenClick(t3), n4;
          }
          return t2 = r3, n3 = [{ key: "copy", value: function(t3) {
            var e3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body };
            return f(t3, e3);
          } }, { key: "cut", value: function(t3) {
            return a(t3);
          } }, { key: "isSupported", value: function() {
            var t3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], t3 = "string" == typeof t3 ? [t3] : t3, e3 = !!document.queryCommandSupported;
            return t3.forEach(function(t4) {
              e3 = e3 && !!document.queryCommandSupported(t4);
            }), e3;
          } }], (e2 = [{ key: "resolveOptions", value: function() {
            var t3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = "function" == typeof t3.action ? t3.action : this.defaultAction, this.target = "function" == typeof t3.target ? t3.target : this.defaultTarget, this.text = "function" == typeof t3.text ? t3.text : this.defaultText, this.container = "object" === p2(t3.container) ? t3.container : document.body;
          } }, { key: "listenClick", value: function(t3) {
            var e3 = this;
            this.listener = u()(t3, "click", function(t4) {
              return e3.onClick(t4);
            });
          } }, { key: "onClick", value: function(t3) {
            var e3 = t3.delegateTarget || t3.currentTarget, n4 = this.action(e3) || "copy", t3 = s({ action: n4, container: this.container, target: this.target(e3), text: this.text(e3) });
            this.emit(t3 ? "success" : "error", { action: n4, text: t3, trigger: e3, clearSelection: function() {
              e3 && e3.focus(), window.getSelection().removeAllRanges();
            } });
          } }, { key: "defaultAction", value: function(t3) {
            return m2("action", t3);
          } }, { key: "defaultTarget", value: function(t3) {
            t3 = m2("target", t3);
            if (t3) return document.querySelector(t3);
          } }, { key: "defaultText", value: function(t3) {
            return m2("text", t3);
          } }, { key: "destroy", value: function() {
            this.listener.destroy();
          } }]) && d(t2.prototype, e2), n3 && d(t2, n3), r3;
        }();
      }, 828: function(t) {
        var e;
        "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t2, e2) {
          for (; t2 && 9 !== t2.nodeType; ) {
            if ("function" == typeof t2.matches && t2.matches(e2)) return t2;
            t2 = t2.parentNode;
          }
        };
      }, 438: function(t, e, n2) {
        var u = n2(828);
        function i(t2, e2, n3, o2, r2) {
          var i2 = (function(e3, n4, t3, o3) {
            return function(t4) {
              t4.delegateTarget = u(t4.target, n4), t4.delegateTarget && o3.call(e3, t4);
            };
          }).apply(this, arguments);
          return t2.addEventListener(n3, i2, r2), { destroy: function() {
            t2.removeEventListener(n3, i2, r2);
          } };
        }
        t.exports = function(t2, e2, n3, o2, r2) {
          return "function" == typeof t2.addEventListener ? i.apply(null, arguments) : "function" == typeof n3 ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t2 && (t2 = document.querySelectorAll(t2)), Array.prototype.map.call(t2, function(t3) {
            return i(t3, e2, n3, o2, r2);
          }));
        };
      }, 879: function(t, n2) {
        n2.node = function(t2) {
          return void 0 !== t2 && t2 instanceof HTMLElement && 1 === t2.nodeType;
        }, n2.nodeList = function(t2) {
          var e = Object.prototype.toString.call(t2);
          return void 0 !== t2 && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t2 && (0 === t2.length || n2.node(t2[0]));
        }, n2.string = function(t2) {
          return "string" == typeof t2 || t2 instanceof String;
        }, n2.fn = function(t2) {
          return "[object Function]" === Object.prototype.toString.call(t2);
        };
      }, 370: function(t, e, n2) {
        var f = n2(879), l = n2(438);
        t.exports = function(t2, e2, n3) {
          if (!t2 && !e2 && !n3) throw new Error("Missing required arguments");
          if (!f.string(e2)) throw new TypeError("Second argument must be a String");
          if (!f.fn(n3)) throw new TypeError("Third argument must be a Function");
          if (f.node(t2)) return c = e2, a = n3, (u = t2).addEventListener(c, a), { destroy: function() {
            u.removeEventListener(c, a);
          } };
          if (f.nodeList(t2)) return o2 = t2, r2 = e2, i = n3, Array.prototype.forEach.call(o2, function(t3) {
            t3.addEventListener(r2, i);
          }), { destroy: function() {
            Array.prototype.forEach.call(o2, function(t3) {
              t3.removeEventListener(r2, i);
            });
          } };
          if (f.string(t2)) return t2 = t2, e2 = e2, n3 = n3, l(document.body, t2, e2, n3);
          throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          var o2, r2, i, u, c, a;
        };
      }, 817: function(t) {
        t.exports = function(t2) {
          var e, n2 = "SELECT" === t2.nodeName ? (t2.focus(), t2.value) : "INPUT" === t2.nodeName || "TEXTAREA" === t2.nodeName ? ((e = t2.hasAttribute("readonly")) || t2.setAttribute("readonly", ""), t2.select(), t2.setSelectionRange(0, t2.value.length), e || t2.removeAttribute("readonly"), t2.value) : (t2.hasAttribute("contenteditable") && t2.focus(), n2 = window.getSelection(), (e = document.createRange()).selectNodeContents(t2), n2.removeAllRanges(), n2.addRange(e), n2.toString());
          return n2;
        };
      }, 279: function(t) {
        function e() {
        }
        e.prototype = { on: function(t2, e2, n2) {
          var o2 = this.e || (this.e = {});
          return (o2[t2] || (o2[t2] = [])).push({ fn: e2, ctx: n2 }), this;
        }, once: function(t2, e2, n2) {
          var o2 = this;
          function r2() {
            o2.off(t2, r2), e2.apply(n2, arguments);
          }
          return r2._ = e2, this.on(t2, r2, n2);
        }, emit: function(t2) {
          for (var e2 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[t2] || []).slice(), o2 = 0, r2 = n2.length; o2 < r2; o2++) n2[o2].fn.apply(n2[o2].ctx, e2);
          return this;
        }, off: function(t2, e2) {
          var n2 = this.e || (this.e = {}), o2 = n2[t2], r2 = [];
          if (o2 && e2) for (var i = 0, u = o2.length; i < u; i++) o2[i].fn !== e2 && o2[i].fn._ !== e2 && r2.push(o2[i]);
          return r2.length ? n2[t2] = r2 : delete n2[t2], this;
        } }, t.exports = e, t.exports.TinyEmitter = e;
      } }, r = {}, o.n = function(t) {
        var e = t && t.__esModule ? function() {
          return t.default;
        } : function() {
          return t;
        };
        return o.d(e, { a: e }), e;
      }, o.d = function(t, e) {
        for (var n2 in e) o.o(e, n2) && !o.o(t, n2) && Object.defineProperty(t, n2, { enumerable: true, get: e[n2] });
      }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, o(686).default;
      function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = { exports: {} };
        return n[t](e, e.exports, o), e.exports;
      }
      var n, r;
    });
  })(clipboard_min$1);
  return clipboard_min$1.exports;
}
var hasRequiredVueClipboard;
function requireVueClipboard() {
  if (hasRequiredVueClipboard) return vueClipboard.exports;
  hasRequiredVueClipboard = 1;
  (function(module, exports) {
    var Clipboard = requireClipboard_min();
    var VueClipboardConfig = {
      autoSetContainer: false,
      appendToBody: true
      // This fixes IE, see #50
    };
    var VueClipboard2 = {
      install: function(Vue2) {
        var globalPrototype = Vue2.version.slice(0, 2) === "3." ? Vue2.config.globalProperties : Vue2.prototype;
        globalPrototype.$clipboardConfig = VueClipboardConfig;
        globalPrototype.$copyText = function(text, container) {
          return new Promise(function(resolve2, reject) {
            var fakeElement = document.createElement("button");
            var clipboard = new Clipboard(fakeElement, {
              text: function() {
                return text;
              },
              action: function() {
                return "copy";
              },
              container: typeof container === "object" ? container : document.body
            });
            clipboard.on("success", function(e) {
              clipboard.destroy();
              resolve2(e);
            });
            clipboard.on("error", function(e) {
              clipboard.destroy();
              reject(e);
            });
            if (VueClipboardConfig.appendToBody) document.body.appendChild(fakeElement);
            fakeElement.click();
            if (VueClipboardConfig.appendToBody) document.body.removeChild(fakeElement);
          });
        };
        Vue2.directive("clipboard", {
          bind: function(el, binding, vnode) {
            if (binding.arg === "success") {
              el._vClipboard_success = binding.value;
            } else if (binding.arg === "error") {
              el._vClipboard_error = binding.value;
            } else {
              var clipboard = new Clipboard(el, {
                text: function() {
                  return binding.value;
                },
                action: function() {
                  return binding.arg === "cut" ? "cut" : "copy";
                },
                container: VueClipboardConfig.autoSetContainer ? el : void 0
              });
              clipboard.on("success", function(e) {
                var callback = el._vClipboard_success;
                callback && callback(e);
              });
              clipboard.on("error", function(e) {
                var callback = el._vClipboard_error;
                callback && callback(e);
              });
              el._vClipboard = clipboard;
            }
          },
          update: function(el, binding) {
            if (binding.arg === "success") {
              el._vClipboard_success = binding.value;
            } else if (binding.arg === "error") {
              el._vClipboard_error = binding.value;
            } else {
              el._vClipboard.text = function() {
                return binding.value;
              };
              el._vClipboard.action = function() {
                return binding.arg === "cut" ? "cut" : "copy";
              };
            }
          },
          unbind: function(el, binding) {
            if (!el._vClipboard) return;
            if (binding.arg === "success") {
              delete el._vClipboard_success;
            } else if (binding.arg === "error") {
              delete el._vClipboard_error;
            } else {
              el._vClipboard.destroy();
              delete el._vClipboard;
            }
          }
        });
      },
      config: VueClipboardConfig
    };
    {
      module.exports = VueClipboard2;
    }
  })(vueClipboard);
  return vueClipboard.exports;
}
var vueClipboardExports = requireVueClipboard();
const VueClipboard = /* @__PURE__ */ getDefaultExportFromCjs(vueClipboardExports);
const mixins = {
  methods: {
    /**
     * Translate the given key.
     */
    __(key2, replace) {
      let translation = this.$page.props.translations[key2] ? this.$page.props.translations[key2] : key2;
      _forEach(replace, (value, key3) => {
        translation = translation.replace(":" + key3, value);
      });
      return translation;
    },
    __choice(key2, total) {
      let translation = this.$page.props.translations[key2] ? this.$page.props.translations[key2] : key2;
      let splitted = translation.split("|");
      if (total > 1 || total === 0) {
        return splitted[1];
      }
      return splitted[0];
    },
    randomString() {
      let m2 = m2 || 20;
      let s = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < m2; i++) {
        s += r.charAt(Math.floor(Math.random() * r.length));
      }
      return s;
    },
    can(subject, permission) {
      return this.$page.props.auth.can[subject] ? this.$page.props.auth.can[subject][permission] : false;
    }
  }
};
var _arrayEach;
var hasRequired_arrayEach;
function require_arrayEach() {
  if (hasRequired_arrayEach) return _arrayEach;
  hasRequired_arrayEach = 1;
  function arrayEach(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  _arrayEach = arrayEach;
  return _arrayEach;
}
var _createBaseFor;
var hasRequired_createBaseFor;
function require_createBaseFor() {
  if (hasRequired_createBaseFor) return _createBaseFor;
  hasRequired_createBaseFor = 1;
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key2 = props[fromRight ? length : ++index2];
        if (iteratee(iterable[key2], key2, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  _createBaseFor = createBaseFor;
  return _createBaseFor;
}
var _baseFor;
var hasRequired_baseFor;
function require_baseFor() {
  if (hasRequired_baseFor) return _baseFor;
  hasRequired_baseFor = 1;
  var createBaseFor = require_createBaseFor();
  var baseFor = createBaseFor();
  _baseFor = baseFor;
  return _baseFor;
}
var _baseTimes;
var hasRequired_baseTimes;
function require_baseTimes() {
  if (hasRequired_baseTimes) return _baseTimes;
  hasRequired_baseTimes = 1;
  function baseTimes(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  _baseTimes = baseTimes;
  return _baseTimes;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol2 = root.Symbol;
  _Symbol = Symbol2;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString2(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString2;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString2 = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var _baseIsArguments;
var hasRequired_baseIsArguments;
function require_baseIsArguments() {
  if (hasRequired_baseIsArguments) return _baseIsArguments;
  hasRequired_baseIsArguments = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  _baseIsArguments = baseIsArguments;
  return _baseIsArguments;
}
var isArguments_1;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments_1;
  hasRequiredIsArguments = 1;
  var baseIsArguments = require_baseIsArguments(), isObjectLike = requireIsObjectLike();
  var objectProto = Object.prototype;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments2 = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  isArguments_1 = isArguments2;
  return isArguments_1;
}
var isArray_1;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray_1;
  hasRequiredIsArray = 1;
  var isArray2 = Array.isArray;
  isArray_1 = isArray2;
  return isArray_1;
}
var isBuffer = { exports: {} };
var stubFalse_1;
var hasRequiredStubFalse;
function requireStubFalse() {
  if (hasRequiredStubFalse) return stubFalse_1;
  hasRequiredStubFalse = 1;
  function stubFalse() {
    return false;
  }
  stubFalse_1 = stubFalse;
  return stubFalse_1;
}
isBuffer.exports;
var hasRequiredIsBuffer;
function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBuffer.exports;
  hasRequiredIsBuffer = 1;
  (function(module, exports) {
    var root = require_root(), stubFalse = requireStubFalse();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse;
    module.exports = isBuffer2;
  })(isBuffer, isBuffer.exports);
  return isBuffer.exports;
}
var _isIndex;
var hasRequired_isIndex;
function require_isIndex() {
  if (hasRequired_isIndex) return _isIndex;
  hasRequired_isIndex = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex2(value, length) {
    var type2 = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  _isIndex = isIndex2;
  return _isIndex;
}
var isLength_1;
var hasRequiredIsLength;
function requireIsLength() {
  if (hasRequiredIsLength) return isLength_1;
  hasRequiredIsLength = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  isLength_1 = isLength;
  return isLength_1;
}
var _baseIsTypedArray;
var hasRequired_baseIsTypedArray;
function require_baseIsTypedArray() {
  if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
  hasRequired_baseIsTypedArray = 1;
  var baseGetTag = require_baseGetTag(), isLength = requireIsLength(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]", arrayTag2 = "[object Array]", boolTag = "[object Boolean]", dateTag2 = "[object Date]", errorTag2 = "[object Error]", funcTag = "[object Function]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", objectTag2 = "[object Object]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag2] = typedArrayTags[arrayBufferTag2] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag2] = typedArrayTags[dateTag2] = typedArrayTags[errorTag2] = typedArrayTags[funcTag] = typedArrayTags[mapTag2] = typedArrayTags[numberTag2] = typedArrayTags[objectTag2] = typedArrayTags[regexpTag2] = typedArrayTags[setTag2] = typedArrayTags[stringTag2] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  _baseIsTypedArray = baseIsTypedArray;
  return _baseIsTypedArray;
}
var _baseUnary;
var hasRequired_baseUnary;
function require_baseUnary() {
  if (hasRequired_baseUnary) return _baseUnary;
  hasRequired_baseUnary = 1;
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  _baseUnary = baseUnary;
  return _baseUnary;
}
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
var hasRequired_nodeUtil;
function require_nodeUtil() {
  if (hasRequired_nodeUtil) return _nodeUtil.exports;
  hasRequired_nodeUtil = 1;
  (function(module, exports) {
    var freeGlobal = require_freeGlobal();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  })(_nodeUtil, _nodeUtil.exports);
  return _nodeUtil.exports;
}
var isTypedArray_1;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray_1;
  hasRequiredIsTypedArray = 1;
  var baseIsTypedArray = require_baseIsTypedArray(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  isTypedArray_1 = isTypedArray2;
  return isTypedArray_1;
}
var _arrayLikeKeys;
var hasRequired_arrayLikeKeys;
function require_arrayLikeKeys() {
  if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
  hasRequired_arrayLikeKeys = 1;
  var baseTimes = require_baseTimes(), isArguments2 = requireIsArguments(), isArray2 = requireIsArray(), isBuffer2 = requireIsBuffer(), isIndex2 = require_isIndex(), isTypedArray2 = requireIsTypedArray();
  var objectProto = Object.prototype;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key2 in value) {
      if ((inherited || hasOwnProperty2.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
      isIndex2(key2, length)))) {
        result.push(key2);
      }
    }
    return result;
  }
  _arrayLikeKeys = arrayLikeKeys;
  return _arrayLikeKeys;
}
var _isPrototype;
var hasRequired_isPrototype;
function require_isPrototype() {
  if (hasRequired_isPrototype) return _isPrototype;
  hasRequired_isPrototype = 1;
  var objectProto = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  _isPrototype = isPrototype;
  return _isPrototype;
}
var _overArg;
var hasRequired_overArg;
function require_overArg() {
  if (hasRequired_overArg) return _overArg;
  hasRequired_overArg = 1;
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  _overArg = overArg;
  return _overArg;
}
var _nativeKeys;
var hasRequired_nativeKeys;
function require_nativeKeys() {
  if (hasRequired_nativeKeys) return _nativeKeys;
  hasRequired_nativeKeys = 1;
  var overArg = require_overArg();
  var nativeKeys = overArg(Object.keys, Object);
  _nativeKeys = nativeKeys;
  return _nativeKeys;
}
var _baseKeys;
var hasRequired_baseKeys;
function require_baseKeys() {
  if (hasRequired_baseKeys) return _baseKeys;
  hasRequired_baseKeys = 1;
  var isPrototype = require_isPrototype(), nativeKeys = require_nativeKeys();
  var objectProto = Object.prototype;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key2 in Object(object)) {
      if (hasOwnProperty2.call(object, key2) && key2 != "constructor") {
        result.push(key2);
      }
    }
    return result;
  }
  _baseKeys = baseKeys;
  return _baseKeys;
}
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject2(value) {
    var type2 = typeof value;
    return value != null && (type2 == "object" || type2 == "function");
  }
  isObject_1 = isObject2;
  return isObject_1;
}
var isFunction_1;
var hasRequiredIsFunction;
function requireIsFunction() {
  if (hasRequiredIsFunction) return isFunction_1;
  hasRequiredIsFunction = 1;
  var baseGetTag = require_baseGetTag(), isObject2 = requireIsObject();
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  isFunction_1 = isFunction2;
  return isFunction_1;
}
var isArrayLike_1;
var hasRequiredIsArrayLike;
function requireIsArrayLike() {
  if (hasRequiredIsArrayLike) return isArrayLike_1;
  hasRequiredIsArrayLike = 1;
  var isFunction2 = requireIsFunction(), isLength = requireIsLength();
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  isArrayLike_1 = isArrayLike;
  return isArrayLike_1;
}
var keys_1;
var hasRequiredKeys;
function requireKeys() {
  if (hasRequiredKeys) return keys_1;
  hasRequiredKeys = 1;
  var arrayLikeKeys = require_arrayLikeKeys(), baseKeys = require_baseKeys(), isArrayLike = requireIsArrayLike();
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  keys_1 = keys;
  return keys_1;
}
var _baseForOwn;
var hasRequired_baseForOwn;
function require_baseForOwn() {
  if (hasRequired_baseForOwn) return _baseForOwn;
  hasRequired_baseForOwn = 1;
  var baseFor = require_baseFor(), keys = requireKeys();
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  _baseForOwn = baseForOwn;
  return _baseForOwn;
}
var _createBaseEach;
var hasRequired_createBaseEach;
function require_createBaseEach() {
  if (hasRequired_createBaseEach) return _createBaseEach;
  hasRequired_createBaseEach = 1;
  var isArrayLike = requireIsArrayLike();
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index2-- : ++index2 < length) {
        if (iteratee(iterable[index2], index2, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  _createBaseEach = createBaseEach;
  return _createBaseEach;
}
var _baseEach;
var hasRequired_baseEach;
function require_baseEach() {
  if (hasRequired_baseEach) return _baseEach;
  hasRequired_baseEach = 1;
  var baseForOwn = require_baseForOwn(), createBaseEach = require_createBaseEach();
  var baseEach = createBaseEach(baseForOwn);
  _baseEach = baseEach;
  return _baseEach;
}
var identity_1;
var hasRequiredIdentity;
function requireIdentity() {
  if (hasRequiredIdentity) return identity_1;
  hasRequiredIdentity = 1;
  function identity(value) {
    return value;
  }
  identity_1 = identity;
  return identity_1;
}
var _castFunction;
var hasRequired_castFunction;
function require_castFunction() {
  if (hasRequired_castFunction) return _castFunction;
  hasRequired_castFunction = 1;
  var identity = requireIdentity();
  function castFunction(value) {
    return typeof value == "function" ? value : identity;
  }
  _castFunction = castFunction;
  return _castFunction;
}
var forEach_1;
var hasRequiredForEach;
function requireForEach() {
  if (hasRequiredForEach) return forEach_1;
  hasRequiredForEach = 1;
  var arrayEach = require_arrayEach(), baseEach = require_baseEach(), castFunction = require_castFunction(), isArray2 = requireIsArray();
  function forEach2(collection, iteratee) {
    var func = isArray2(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
  }
  forEach_1 = forEach2;
  return forEach_1;
}
var forEachExports = requireForEach();
const forEach = /* @__PURE__ */ getDefaultExportFromCjs(forEachExports);
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
Vue.configureCompat({ RENDER_FUNCTION: false, COMPONENT_V_MODEL: false });
createInertiaApp({
  title: (title) => `${title}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmTwoFactorAuthentication.vue": () => __vitePreload(() => import("./ConfirmTwoFactorAuthentication-DrNO90so.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0), "./Pages/Auth/Email.vue": () => __vitePreload(() => import("./Email-BQOmBAwI.js"), true ? __vite__mapDeps([6,1,2,3,4,5,7]) : void 0), "./Pages/Auth/Login.vue": () => __vitePreload(() => import("./Login-C6xt95Ek.js"), true ? __vite__mapDeps([8,1,2,3,4,5]) : void 0), "./Pages/Auth/PasswordCreation.vue": () => __vitePreload(() => import("./PasswordCreation-DpmNxyid.js"), true ? __vite__mapDeps([9,1,2,3,4,5,7]) : void 0), "./Pages/Auth/Register.vue": () => __vitePreload(() => import("./Register-D6IFpGux.js"), true ? __vite__mapDeps([10,1,2,3,4,5,7]) : void 0), "./Pages/Auth/Reset.vue": () => __vitePreload(() => import("./Reset-Tl7gXKvN.js"), true ? __vite__mapDeps([11,1,2,3,4,5,7]) : void 0), "./Pages/Core/InstallationIncomplete.vue": () => __vitePreload(() => import("./InstallationIncomplete-CLpvpVct.js"), true ? __vite__mapDeps([12,1,2,3,4,5]) : void 0), "./Pages/Dashboard/Index.vue": () => __vitePreload(() => import("./Index-CVyK-kdx.js"), true ? __vite__mapDeps([13,14,15,5,2,16,7,4,17]) : void 0), "./Pages/Dashboard/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-CQjfQbyS.js"), true ? __vite__mapDeps([14,15,5,2]) : void 0), "./Pages/Documentation/Article.vue": () => __vitePreload(() => import("./Article-CybjCiVg.js"), true ? __vite__mapDeps([18,19,15,5,2,16,7,4,20,17,21,22,3,23,24,25,26]) : void 0), "./Pages/Documentation/Index.vue": () => __vitePreload(() => import("./Index-BZrmF3M1.js"), true ? __vite__mapDeps([27,19,15,5,2,16,7,4,20,17,21,22,3,23,24,25,26]) : void 0), "./Pages/Documentation/Show.vue": () => __vitePreload(() => import("./Show-DMTZPKBX.js"), true ? __vite__mapDeps([28,19,15,5,2,16,7,4,20,17,21,22,3,23,24,25,26]) : void 0), "./Pages/Documentation/Tabs.vue": () => __vitePreload(() => import("./Tabs-Dp_xQgvi.js"), true ? __vite__mapDeps([26,2]) : void 0), "./Pages/Documentation/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-C2tIOMFl.js"), true ? __vite__mapDeps([19,15,5,2]) : void 0), "./Pages/Errors/403.vue": () => __vitePreload(() => import("./403-ClD4KL_u.js"), true ? __vite__mapDeps([29,14,15,5,2,16,7,4]) : void 0), "./Pages/Errors/404.vue": () => __vitePreload(() => import("./404-BOXc_jNi.js"), true ? __vite__mapDeps([30,5,2,16,7,4]) : void 0), "./Pages/Pages/Privacy.vue": () => __vitePreload(() => import("./Privacy-DXWUli6r.js"), true ? __vite__mapDeps([31,1,2,3,4,5]) : void 0), "./Pages/Pages/Terms.vue": () => __vitePreload(() => import("./Terms-CNXwR8c8.js"), true ? __vite__mapDeps([32,1,2,3,4,5]) : void 0), "./Pages/Profile/Billing.vue": () => __vitePreload(() => import("./Billing-CtTvssrK.js"), true ? __vite__mapDeps([33,34,15,5,2,16,7,4,17,35,21,22,3,36,23,37,38]) : void 0), "./Pages/Profile/BillingError.vue": () => __vitePreload(() => import("./BillingError-gSAC0_DW.js"), true ? __vite__mapDeps([39,34,15,5,2,16,7,4,17,35,21,22]) : void 0), "./Pages/Profile/Index.vue": () => __vitePreload(() => import("./Index-oMteJjgO.js"), true ? __vite__mapDeps([40,34,15,5,2,16,7,4,17,21,22,3,36]) : void 0), "./Pages/Profile/Integrations.vue": () => __vitePreload(() => import("./Integrations-BpVFZ027.js"), true ? __vite__mapDeps([41,34,15,5,2,16,7,4,17,21,22,3,36,37,38]) : void 0), "./Pages/Profile/Security.vue": () => __vitePreload(() => import("./Security--hJlP1OV.js"), true ? __vite__mapDeps([42,34,15,5,2,16,7,4,17,21,22,3,36,24,43]) : void 0), "./Pages/Profile/Settings.vue": () => __vitePreload(() => import("./Settings-Dp9W34Y4.js"), true ? __vite__mapDeps([44,34,15,5,2,16,7,4,17,21,22,3,36,38]) : void 0), "./Pages/Profile/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-BhQpUwMC.js"), true ? __vite__mapDeps([34,15,5,2]) : void 0), "./Pages/Profile/components/TwoFactorAuthentication.vue": () => __vitePreload(() => import("./TwoFactorAuthentication-C8Yf3anS.js"), true ? __vite__mapDeps([43,4,2,3]) : void 0), "./Pages/Servers/Index.vue": () => __vitePreload(() => import("./Index-BTHnYt3h.js"), true ? __vite__mapDeps([45,46,15,5,2,16,7,4,17,47,20,21,22,3,36,38]) : void 0), "./Pages/Servers/Settings.vue": () => __vitePreload(() => import("./Settings-R9bgfWXI.js"), true ? __vite__mapDeps([48,46,15,5,2,16,7,4,17,47,20,21,22,3,25,24,49,50,37,38]) : void 0), "./Pages/Servers/Show.vue": () => __vitePreload(() => import("./Show-CW6DgWhF.js"), true ? __vite__mapDeps([51,46,15,5,2,16,7,4,17,47,20,21,22,3,25,24,49,50,37]) : void 0), "./Pages/Servers/Tabs.vue": () => __vitePreload(() => import("./Tabs-DyZH76rg.js"), true ? __vite__mapDeps([50,2]) : void 0), "./Pages/Servers/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-CGk52dsv.js"), true ? __vite__mapDeps([46,15,5,2]) : void 0), "./Pages/Sites/Aliases.vue": () => __vitePreload(() => import("./Aliases-DCWJX6is.js"), true ? __vite__mapDeps([52,53,15,5,2,16,7,4,25,24,3,36,23,22,49,20,38,54,37]) : void 0), "./Pages/Sites/Apps.vue": () => __vitePreload(() => import("./Apps-DQ69W_VE.js"), true ? __vite__mapDeps([55,53,15,5,2,16,7,4,25,24,3,22,54,37]) : void 0), "./Pages/Sites/Certificates.vue": () => __vitePreload(() => import("./Certificates-CPeWAAQU.js"), true ? __vite__mapDeps([56,53,15,5,2,16,7,4,25,24,3,36,23,22,49,20,38,54,37]) : void 0), "./Pages/Sites/Cronjobs.vue": () => __vitePreload(() => import("./Cronjobs-CR8PraGp.js"), true ? __vite__mapDeps([57,53,15,5,2,16,7,4,25,24,3,22,49,20,38,54,37]) : void 0), "./Pages/Sites/Databases.vue": () => __vitePreload(() => import("./Databases-CIt7SJQ4.js"), true ? __vite__mapDeps([58,53,15,5,2,16,7,4,25,24,3,22,49,20,38,54,37]) : void 0), "./Pages/Sites/Dns.vue": () => __vitePreload(() => import("./Dns-eGztZgND.js"), true ? __vite__mapDeps([59,53,15,5,2,16,7,4,25,24,3,22,49,38,54,37,20]) : void 0), "./Pages/Sites/Index.vue": () => __vitePreload(() => import("./Index-Cj4g0-ex.js"), true ? __vite__mapDeps([60,53,15,5,2,16,7,4,20,17,47,21,22,3,36,38,49]) : void 0), "./Pages/Sites/Redirects.vue": () => __vitePreload(() => import("./Redirects-CbXVAzxv.js"), true ? __vite__mapDeps([61,53,15,5,2,16,7,4,25,24,3,36,22,49,20,38,54,37]) : void 0), "./Pages/Sites/Settings.vue": () => __vitePreload(() => import("./Settings-LVHqC43J.js"), true ? __vite__mapDeps([62,53,15,5,2,16,7,4,25,24,3,22,38,54]) : void 0), "./Pages/Sites/Show.vue": () => __vitePreload(() => import("./Show-D-WqYb75.js"), true ? __vite__mapDeps([63,53,15,5,2,16,7,4,25,24,3,22,54,37,21]) : void 0), "./Pages/Sites/Tabs.vue": () => __vitePreload(() => import("./Tabs-DHTFy1N1.js"), true ? __vite__mapDeps([54,2]) : void 0), "./Pages/Sites/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-BPOfBYb-.js"), true ? __vite__mapDeps([53,15,5,2]) : void 0), "./Pages/Support/Closed.vue": () => __vitePreload(() => import("./Closed-BG1g6WQD.js"), true ? __vite__mapDeps([64,65,15,5,2,16,7,4,17,21,22,3]) : void 0), "./Pages/Support/Index.vue": () => __vitePreload(() => import("./Index-ChwnjOmS.js"), true ? __vite__mapDeps([66,65,15,5,2,16,7,4,17,21,22,3,23,20]) : void 0), "./Pages/Support/Show.vue": () => __vitePreload(() => import("./Show-uLoxEU6h.js"), true ? __vite__mapDeps([67,65,15,5,2,16,7,4,17,21,22,3,23]) : void 0), "./Pages/Support/components/TopBar.vue": () => __vitePreload(() => import("./TopBar-BUWoAsGy.js"), true ? __vite__mapDeps([65,15,5,2]) : void 0) })),
  setup({ el, App: App2, props, plugin: plugin2 }) {
    createApp({
      render: () => h(App2, props)
    }).use(plugin2).use(vClickOutside).use(VueClipboard).use(store).use(D).mixin({ methods: { route: window.route } }).mixin(mixins).component("InertiaLink", link_default).component("Head", head_default).mount(el);
  },
  progress: {
    delay: 250,
    color: "#1b8ae8",
    includeCSS: true,
    showSpinner: false
  }
});
window.axios = axios;
window._forEach = forEach;
const emitter = mitt();
window.eventBus = emitter;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
export {
  vShow as A,
  Fragment as F,
  Transition as T,
  createVNode as a,
  createBaseVNode as b,
  createElementBlock as c,
  withModifiers as d,
  createBlock as e,
  createCommentVNode as f,
  createTextVNode as g,
  withDirectives as h,
  renderList as i,
  renderSlot as j,
  createSlots as k,
  resolveDynamicComponent as l,
  resolveDirective as m,
  normalizeClass as n,
  openBlock as o,
  vModelText as p,
  TransitionGroup as q,
  resolveComponent as r,
  store as s,
  toDisplayString as t,
  normalizeProps as u,
  vModelCheckbox as v,
  withCtx as w,
  guardReactiveProps as x,
  link_default as y,
  vModelRadio as z
};
