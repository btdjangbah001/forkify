// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esArrayIncludesJs = require("core-js/modules/es.array.includes.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./view/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./view/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _promises = require("fs/promises");
var _resultsViewJs = require("./view/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./view/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./view/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./view/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
if (module.hot) module.hot.accept();
///////////////////////////////////////
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultPerPage());
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        await _modelJs.loadRecipe(id);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
    }
};
// recipeView.renderSearch();
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultsViewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResults(query);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPerPage());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        (0, _resultsViewJsDefault.default).renderError("Something went wrong. Try again.");
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPerPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServing) {
    _modelJs.updateServings(newServing);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmarks = function() {
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlUploads = async function(newRecipe) {
    try {
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        await _modelJs.uploadRecipe(newRecipe);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        (0, _addRecipeViewJsDefault.default).renderSuccess();
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // changing the url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        (0, _addRecipeViewJsDefault.default).renderError(err);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addRanderHandler(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmarks);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlUploads);
};
init();
const clearBookmarks = function() {
    localStorage.clear("bookmarks");
};
clearBookmarks();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","core-js/modules/es.array.includes.js":"dkJzX","core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./model.js":"Y4A21","./view/recipeView.js":"7Olh7","fs/promises":"jhUEF","./view/searchView.js":"blwqv","./view/resultsView.js":"46Nfk","./view/paginationView.js":"9Reww","./view/bookmarksView.js":"uOrlR","./view/addRecipeView.js":"bxpSm","./config.js":"k5Hzs"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dkJzX":[function(require,module,exports) {
"use strict";
var $ = require("../internals/export");
var $includes = require("../internals/array-includes").includes;
var fails = require("../internals/fails");
var addToUnscopables = require("../internals/add-to-unscopables");
// FF99+ bug
var BROKEN_ON_SPARSE = fails(function() {
    return !Array(1).includes();
});
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: "Array",
    proto: true,
    forced: BROKEN_ON_SPARSE
}, {
    includes: function includes(el /* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables("includes");

},{"../internals/export":"dIGt4","../internals/array-includes":"n5IsC","../internals/fails":"hL6D2","../internals/add-to-unscopables":"jx7ej"}],"dIGt4":[function(require,module,exports) {
var global = require("../internals/global");
var getOwnPropertyDescriptor = require("../internals/object-get-own-property-descriptor").f;
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var defineBuiltIn = require("../internals/define-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
var copyConstructorProperties = require("../internals/copy-constructor-properties");
var isForced = require("../internals/is-forced");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/define-built-in":"6XwEX","../internals/define-global-property":"ggjnO","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es-x/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var call = require("../internals/function-call");
var propertyIsEnumerableModule = require("../internals/object-property-is-enumerable");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
var toIndexedObject = require("../internals/to-indexed-object");
var toPropertyKey = require("../internals/to-property-key");
var hasOwn = require("../internals/has-own-property");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/function-call":"d7JlP","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has-own-property":"gC2Q5","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("../internals/fails");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"../internals/fails":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("../internals/indexed-object");
var requireObjectCoercible = require("../internals/require-object-coercible");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var fails = require("../internals/fails");
var classof = require("../internals/classof-raw");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"../internals/function-uncurry-this":"7GlkT","../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);
module.exports = NATIVE_BIND ? function(fn) {
    return fn && uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"fOR0B":[function(require,module,exports) {
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw $TypeError("Can't call method on " + it);
    return it;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("../internals/to-primitive");
var isSymbol = require("../internals/is-symbol");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("../internals/function-call");
var isObject = require("../internals/is-object");
var isSymbol = require("../internals/is-symbol");
var getMethod = require("../internals/get-method");
var ordinaryToPrimitive = require("../internals/ordinary-to-primitive");
var wellKnownSymbol = require("../internals/well-known-symbol");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function(argument) {
    return typeof argument == "function";
};

},{}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var isCallable = require("../internals/is-callable");
var isPrototypeOf = require("../internals/object-is-prototype-of");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es-x/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("../internals/native-symbol");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"../internals/native-symbol":"grUXC"}],"grUXC":[function(require,module,exports) {
/* eslint-disable es-x/no-symbol -- required for testing */ var V8_VERSION = require("../internals/engine-v8-version");
var fails = require("../internals/fails");
// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("../internals/global");
var userAgent = require("../internals/engine-user-agent");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("../internals/a-callable");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir"}],"gOMir":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var tryToString = require("../internals/try-to-string");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("../internals/function-call");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("../internals/global");
var shared = require("../internals/shared");
var hasOwn = require("../internals/has-own-property");
var uid = require("../internals/uid");
var NATIVE_SYMBOL = require("../internals/native-symbol");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/native-symbol":"grUXC","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("../internals/is-pure");
var store = require("../internals/shared-store");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.23.3",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("../internals/global");
var defineGlobalProperty = require("../internals/define-global-property");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/define-global-property":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("../internals/global");
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toObject = require("../internals/to-object");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("../internals/require-object-coercible");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
var createElement = require("../internals/document-create-element");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var definePropertyModule = require("../internals/object-define-property");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var anObject = require("../internals/an-object");
var toPropertyKey = require("../internals/to-property-key");
var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("../internals/is-object");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"../internals/is-object":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var definePropertyModule = require("../internals/object-define-property");
var makeBuiltIn = require("../internals/make-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"l3Kyn","../internals/object-define-property":"iJR4w","../internals/make-built-in":"cTB4k","../internals/define-global-property":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var DESCRIPTORS = require("../internals/descriptors");
var CONFIGURABLE_FUNCTION_NAME = require("../internals/function-name").CONFIGURABLE;
var inspectSource = require("../internals/inspect-source");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/descriptors":"92ZIi","../internals/function-name":"l6Kgd","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var hasOwn = require("../internals/has-own-property");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var isCallable = require("../internals/is-callable");
var store = require("../internals/shared-store");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("../internals/native-weak-map");
var global = require("../internals/global");
var uncurryThis = require("../internals/function-uncurry-this");
var isObject = require("../internals/is-object");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var hasOwn = require("../internals/has-own-property");
var shared = require("../internals/shared-store");
var sharedKey = require("../internals/shared-key");
var hiddenKeys = require("../internals/hidden-keys");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = uncurryThis(store.get);
    var wmhas = uncurryThis(store.has);
    var wmset = uncurryThis(store.set);
    set = function(it, metadata) {
        if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget(store, it) || {};
    };
    has = function(it) {
        return wmhas(store, it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"7LdJl","../internals/global":"i8HOC","../internals/function-uncurry-this":"7GlkT","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"7LdJl":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var inspectSource = require("../internals/inspect-source");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/inspect-source":"9jh7O"}],"eAjGz":[function(require,module,exports) {
var shared = require("../internals/shared");
var uid = require("../internals/uid");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("../internals/has-own-property");
var ownKeys = require("../internals/own-keys");
var getOwnPropertyDescriptorModule = require("../internals/object-get-own-property-descriptor");
var definePropertyModule = require("../internals/object-define-property");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"gC2Q5","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var uncurryThis = require("../internals/function-uncurry-this");
var getOwnPropertyNamesModule = require("../internals/object-get-own-property-names");
var getOwnPropertySymbolsModule = require("../internals/object-get-own-property-symbols");
var anObject = require("../internals/an-object");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/function-uncurry-this":"7GlkT","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("../internals/object-keys-internal");
var enumBugKeys = require("../internals/enum-bug-keys");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var hasOwn = require("../internals/has-own-property");
var toIndexedObject = require("../internals/to-indexed-object");
var indexOf = require("../internals/array-includes").indexOf;
var hiddenKeys = require("../internals/hidden-keys");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/has-own-property":"gC2Q5","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("../internals/to-indexed-object");
var toAbsoluteIndex = require("../internals/to-absolute-index");
var lengthOfArrayLike = require("../internals/length-of-array-like");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-absolute-index":"5yh27","../internals/length-of-array-like":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("../internals/math-trunc");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("../internals/to-length");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"jx7ej":[function(require,module,exports) {
var wellKnownSymbol = require("../internals/well-known-symbol");
var create = require("../internals/object-create");
var defineProperty = require("../internals/object-define-property").f;
var UNSCOPABLES = wellKnownSymbol("unscopables");
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"gTwyA","../internals/object-create":"duSQE","../internals/object-define-property":"iJR4w"}],"duSQE":[function(require,module,exports) {
/* global ActiveXObject -- old IE, WSH */ var anObject = require("../internals/an-object");
var definePropertiesModule = require("../internals/object-define-properties");
var enumBugKeys = require("../internals/enum-bug-keys");
var hiddenKeys = require("../internals/hidden-keys");
var html = require("../internals/html");
var documentCreateElement = require("../internals/document-create-element");
var sharedKey = require("../internals/shared-key");
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function() {};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument1) {
    activeXDocument1.write(scriptTag(""));
    activeXDocument1.close();
    var temp = activeXDocument1.parentWindow.Object;
    activeXDocument1 = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":"4isCr","../internals/object-define-properties":"duA6W","../internals/enum-bug-keys":"9RnJm","../internals/hidden-keys":"661m4","../internals/html":"2pze4","../internals/document-create-element":"4bOHl","../internals/shared-key":"eAjGz"}],"duA6W":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var definePropertyModule = require("../internals/object-define-property");
var anObject = require("../internals/an-object");
var toIndexedObject = require("../internals/to-indexed-object");
var objectKeys = require("../internals/object-keys");
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/v8-prototype-define-bug":"ka1Un","../internals/object-define-property":"iJR4w","../internals/an-object":"4isCr","../internals/to-indexed-object":"jLWwQ","../internals/object-keys":"kzBf4"}],"kzBf4":[function(require,module,exports) {
var internalObjectKeys = require("../internals/object-keys-internal");
var enumBugKeys = require("../internals/enum-bug-keys");
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("document", "documentElement");

},{"../internals/get-built-in":"6ZUSY"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("../modules/web.clear-immediate");
require("../modules/web.set-immediate");

},{"../modules/web.clear-immediate":"fOGFr","../modules/web.set-immediate":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var clearImmediate = require("../internals/task").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"7jDg7":[function(require,module,exports) {
var global = require("../internals/global");
var apply = require("../internals/function-apply");
var bind = require("../internals/function-bind-context");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var fails = require("../internals/fails");
var html = require("../internals/html");
var arraySlice = require("../internals/array-slice");
var createElement = require("../internals/document-create-element");
var validateArgumentsLength = require("../internals/validate-arguments-length");
var IS_IOS = require("../internals/engine-is-ios");
var IS_NODE = require("../internals/engine-is-node");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), location.protocol + "//" + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && location && location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/function-apply":"148ka","../internals/function-bind-context":"7vpmS","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/fails":"hL6D2","../internals/html":"2pze4","../internals/array-slice":"RsFXo","../internals/document-create-element":"4bOHl","../internals/validate-arguments-length":"b9O3D","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var aCallable = require("../internals/a-callable");
var NATIVE_BIND = require("../internals/function-bind-native");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/a-callable":"gOMir","../internals/function-bind-native":"i16Dq"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("../internals/engine-user-agent");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("../internals/classof-raw");
var global = require("../internals/global");
module.exports = classof(global.process) == "process";

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var setImmediate = require("../internals/task").set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err1) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultPerPage", ()=>getSearchResultPerPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "loadBookmarks", ()=>loadBookmarks);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultsPerPage: (0, _configJs.RES_PER_PAGE),
        page: 1
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        cookingTime: recipe.cooking_time,
        id: recipe.id,
        image: recipe.image_url,
        ingredients: recipe.ingredients,
        servings: recipe.servings,
        sourceUrl: recipe.source_url,
        publisher: recipe.publisher,
        title: recipe.title,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.API_KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing1)=>{
            const ingArr = ing1[1].split(",").map((ing)=>ing.trim());
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use specified format ;)");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            cooking_time: +newRecipe.cookingTime,
            image_url: newRecipe.image,
            ingredients,
            servings: +newRecipe.servings,
            source_url: newRecipe.sourceUrl,
            publisher: newRecipe.publisher
        };
        const data = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.API_KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
        console.log(state);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const results = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.API_KEY)}`);
        state.search.results = results.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const getSearchResultPerPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServing) {
    state.recipe.ingredients.forEach((ing)=>ing.quantity = ing.quantity * newServing / state.recipe.servings);
    state.recipe.servings = newServing;
};
const addBookmark = function(recipe) {
    state.bookmarks.push(recipe);
    state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    const index = state.bookmarks.findIndex((bookmark)=>bookmark.id === id);
    state.bookmarks.splice(index, 1);
    state.recipe.bookmarked = false;
    persistBookmarks();
};
const loadBookmarks = function() {
    const bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks) state.bookmarks = JSON.parse(bookmarks);
};
loadBookmarks();

},{"regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs","./helper.js":"lVRAz"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/`;
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const API_KEY = "83221883-8897-417e-8c03-9d8f32f455be";
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        // debugger;
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
} // export const getJSON = async function (url) {
 //     try {
 //         const fetchPro = fetch(url);
 //         const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
 //         const data = await res.json();
 //         if (!res.ok) throw new Error(`${data.message} (${res.status})`)
 //         return data;
 //     } catch (err) {
 //         throw err;
 //     }
 // }
 // export const sendJSON = async function (url, uploadData) {
 //     try {
 //         const fetchPro = fetch(url, {
 //             method: "POST",
 //             headers: {
 //                 "Content-Type": "application/json"
 //             },
 //             body: JSON.stringify(uploadData)
 //         })
 //         const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
 //         const data = await res.json();
 //         if (!res.ok) throw new Error(`${data.message} (${res.status})`)
 //         return data;
 //     } catch (err) {
 //         throw err;
 //     }
 // }
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config":"k5Hzs"}],"7Olh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//es-lint -> es6
var _regeneratorRuntime = require("regenerator-runtime");
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _successMessage = "Yuh!";
    addHandlerRender(handler) {
        const event1 = [
            "hashchange",
            "load"
        ];
        event1.forEach((event)=>window.addEventListener(event, handler));
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn__bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
            <figure class="recipe__fig">
                <img src="${this._data.image} " alt="${this._data.title} " class="recipe__img"/>
${`<h1 class="recipe__title">`}
<span>${this._data.title}</span>
${`</h1>
                </figure>`}

<div class="recipe__details">
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
            <button data-servings=${this._data.servings - 1} class="btn--tiny btn--update-servings">
                <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
            </button>
            <button data-servings=${this._data.servings + 1} class="btn--tiny btn--update-servings">
                <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
            </button>
        </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
        <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
        </svg>
    </div>

    <button class="btn--round btn__bookmark">
        <svg class="">
            <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
        </svg>
    </button>
</div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map((ing)=>this._generateIngredientMarkup(ing)).join("")}
                </ul>
    </div>
    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
                    <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
directions at their website.
                </p>
        <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </a>
    </div> 
    `;
    }
    addHandlerServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const newServing = +btn.dataset.servings;
            if (newServing > 0) handler(newServing);
        });
    }
}
exports.default = new RecipeView();

},{"regenerator-runtime":"dXNgZ","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","fractional":"3SU56","./View.js":"gAkKI"}],"loVOp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num)if (num % _factor === 0) {
        factors.push(_factor); // so keep it
        num = num / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num != 1) factors.push(num); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"gAkKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    renderSpinner() {
        const markup = `  
        <div class="spinner">
            <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
        </div>
         `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderSuccess(message = this._successMessage) {
        const markup = `
            <div class="message">
                <div>
                <svg>
                    <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    _generateIngredientMarkup(ing) {
        return `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ""}</div>
                <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                </div>
            </li>
            `;
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"blwqv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentElement = document.querySelector(".search");
    getQuery() {
        const query = this.#parentElement.querySelector(".search__field").value;
        this.#clearInput();
        return query;
    }
     #clearInput() {
        this.#parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this.#parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46Nfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _browserslist = require("browserslist");
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "Sorry, there are no recipes found for your query. Try again :)";
    _successMessage;
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View.js":"gAkKI","browserslist":"h32Zo","./previewView.js":"8eAfY"}],"h32Zo":[function(require,module,exports) {
var jsReleases = require("node-releases/data/processed/envs.json");
var agents = require("caniuse-lite/dist/unpacker/agents").agents;
var jsEOL = require("node-releases/data/release-schedule/release-schedule.json");
var path = require("path");
var e2c = require("electron-to-chromium/versions");
var BrowserslistError = require("./error");
var parse = require("./parse");
var env = require("./node") // Will load browser.js in webpack
;
var YEAR = 365.259641 * 86400000;
var ANDROID_EVERGREEN_FIRST = 37;
// Helpers
function isVersionsMatch(versionA, versionB) {
    return (versionA + ".").indexOf(versionB + ".") === 0;
}
function isEolReleased(name) {
    var version = name.slice(1);
    return browserslist.nodeVersions.some(function(i) {
        return isVersionsMatch(i, version);
    });
}
function normalize(versions) {
    return versions.filter(function(version) {
        return typeof version === "string";
    });
}
function normalizeElectron(version) {
    var versionToUse = version;
    if (version.split(".").length === 3) versionToUse = version.split(".").slice(0, -1).join(".");
    return versionToUse;
}
function nameMapper(name) {
    return function mapName(version) {
        return name + " " + version;
    };
}
function getMajor(version) {
    return parseInt(version.split(".")[0]);
}
function getMajorVersions(released, number) {
    if (released.length === 0) return [];
    var majorVersions = uniq(released.map(getMajor));
    var minimum = majorVersions[majorVersions.length - number];
    if (!minimum) return released;
    var selected = [];
    for(var i = released.length - 1; i >= 0; i--){
        if (minimum > getMajor(released[i])) break;
        selected.unshift(released[i]);
    }
    return selected;
}
function uniq(array) {
    var filtered = [];
    for(var i = 0; i < array.length; i++)if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
    return filtered;
}
function fillUsage(result, name, data) {
    for(var i in data)result[name + " " + i] = data[i];
}
function generateFilter(sign, version) {
    version = parseFloat(version);
    if (sign === ">") return function(v) {
        return parseFloat(v) > version;
    };
    else if (sign === ">=") return function(v) {
        return parseFloat(v) >= version;
    };
    else if (sign === "<") return function(v) {
        return parseFloat(v) < version;
    };
    else return function(v) {
        return parseFloat(v) <= version;
    };
}
function generateSemverFilter(sign, version) {
    version = version.split(".").map(parseSimpleInt);
    version[1] = version[1] || 0;
    version[2] = version[2] || 0;
    if (sign === ">") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) > 0;
    };
    else if (sign === ">=") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version) >= 0;
    };
    else if (sign === "<") return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) > 0;
    };
    else return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version, v) >= 0;
    };
}
function parseSimpleInt(x) {
    return parseInt(x);
}
function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function compareSemver(a, b) {
    return compare(parseInt(a[0]), parseInt(b[0])) || compare(parseInt(a[1] || "0"), parseInt(b[1] || "0")) || compare(parseInt(a[2] || "0"), parseInt(b[2] || "0"));
}
// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
    range = range.split(".").map(parseSimpleInt);
    if (typeof range[1] === "undefined") range[1] = "x";
    // ignore any patch version because we only return minor versions
    // range[2] = 'x'
    switch(operator){
        case "<=":
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) <= 0;
            };
        case ">=":
        default:
            return function(version) {
                version = version.split(".").map(parseSimpleInt);
                return compareSemverLoose(version, range) >= 0;
            };
    }
}
// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
    if (version[0] !== range[0]) return version[0] < range[0] ? -1 : 1;
    if (range[1] === "x") return 0;
    if (version[1] !== range[1]) return version[1] < range[1] ? -1 : 1;
    return 0;
}
function resolveVersion(data, version) {
    if (data.versions.indexOf(version) !== -1) return version;
    else if (browserslist.versionAliases[data.name][version]) return browserslist.versionAliases[data.name][version];
    else return false;
}
function normalizeVersion(data, version) {
    var resolved = resolveVersion(data, version);
    if (resolved) return resolved;
    else if (data.versions.length === 1) return data.versions[0];
    else return false;
}
function filterByYear(since, context) {
    since = since / 1000;
    return Object.keys(agents).reduce(function(selected, name) {
        var data = byName(name, context);
        if (!data) return selected;
        var versions = Object.keys(data.releaseDate).filter(function(v) {
            var date = data.releaseDate[v];
            return date !== null && date >= since;
        });
        return selected.concat(versions.map(nameMapper(data.name)));
    }, []);
}
function cloneData(data) {
    return {
        name: data.name,
        versions: data.versions,
        released: data.released,
        releaseDate: data.releaseDate
    };
}
function mapVersions(data, map) {
    data.versions = data.versions.map(function(i) {
        return map[i] || i;
    });
    data.released = data.released.map(function(i) {
        return map[i] || i;
    });
    var fixedDate = {};
    for(var i1 in data.releaseDate)fixedDate[map[i1] || i1] = data.releaseDate[i1];
    data.releaseDate = fixedDate;
    return data;
}
function byName(name, context) {
    name = name.toLowerCase();
    name = browserslist.aliases[name] || name;
    if (context.mobileToDesktop && browserslist.desktopNames[name]) {
        var desktop = browserslist.data[browserslist.desktopNames[name]];
        if (name === "android") return normalizeAndroidData(cloneData(browserslist.data[name]), desktop);
        else {
            var cloned = cloneData(desktop);
            cloned.name = name;
            if (name === "op_mob") cloned = mapVersions(cloned, {
                "10.0-10.1": "10"
            });
            return cloned;
        }
    }
    return browserslist.data[name];
}
function normalizeAndroidVersions(androidVersions, chromeVersions) {
    var firstEvergreen = ANDROID_EVERGREEN_FIRST;
    var last = chromeVersions[chromeVersions.length - 1];
    return androidVersions.filter(function(version) {
        return /^(?:[2-4]\.|[34]$)/.test(version);
    }).concat(chromeVersions.slice(firstEvergreen - last - 1));
}
function normalizeAndroidData(android, chrome) {
    android.released = normalizeAndroidVersions(android.released, chrome.released);
    android.versions = normalizeAndroidVersions(android.versions, chrome.versions);
    return android;
}
function checkName(name, context) {
    var data = byName(name, context);
    if (!data) throw new BrowserslistError("Unknown browser " + name);
    return data;
}
function unknownQuery(query) {
    return new BrowserslistError("Unknown browser query `" + query + "`. " + "Maybe you are using old Browserslist or made typo in query.");
}
function filterAndroid(list, versions, context) {
    if (context.mobileToDesktop) return list;
    var released = browserslist.data.android.released;
    var last = released[released.length - 1];
    var diff = last - ANDROID_EVERGREEN_FIRST - versions;
    if (diff > 0) return list.slice(-1);
    else return list.slice(diff - 1);
}
function resolve(queries, context) {
    return parse(QUERIES, queries).reduce(function(result, node, index) {
        if (node.not && index === 0) throw new BrowserslistError("Write any browsers query (for instance, `defaults`) before `" + node.query + "`");
        var type = QUERIES[node.type];
        var array = type.select.call(browserslist, context, node).map(function(j) {
            var parts = j.split(" ");
            if (parts[1] === "0") return parts[0] + " " + byName(parts[0], context).versions[0];
            else return j;
        });
        if (node.compose === "and") {
            if (node.not) return result.filter(function(j) {
                return array.indexOf(j) === -1;
            });
            else return result.filter(function(j) {
                return array.indexOf(j) !== -1;
            });
        } else {
            if (node.not) {
                var filter = {};
                array.forEach(function(j) {
                    filter[j] = true;
                });
                return result.filter(function(j) {
                    return !filter[j];
                });
            }
            return result.concat(array);
        }
    }, []);
}
function prepareOpts(opts) {
    if (typeof opts === "undefined") opts = {};
    if (typeof opts.path === "undefined") opts.path = path.resolve ? path.resolve(".") : ".";
    return opts;
}
function prepareQueries(queries, opts) {
    if (typeof queries === "undefined" || queries === null) {
        var config = browserslist.loadConfig(opts);
        if (config) queries = config;
        else queries = browserslist.defaults;
    }
    return queries;
}
function checkQueries(queries) {
    if (!(typeof queries === "string" || Array.isArray(queries))) throw new BrowserslistError("Browser queries must be an array or string. Got " + typeof queries + ".");
}
var cache = {};
function browserslist(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    var context = {
        ignoreUnknownVersions: opts.ignoreUnknownVersions,
        dangerousExtend: opts.dangerousExtend,
        mobileToDesktop: opts.mobileToDesktop,
        path: opts.path,
        env: opts.env
    };
    env.oldDataWarning(browserslist.data);
    var stats = env.getStat(opts, browserslist.data);
    if (stats) {
        context.customUsage = {};
        for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
    }
    var cacheKey = JSON.stringify([
        queries,
        context
    ]);
    if (cache[cacheKey]) return cache[cacheKey];
    var result = uniq(resolve(queries, context)).sort(function(name1, name2) {
        name1 = name1.split(" ");
        name2 = name2.split(" ");
        if (name1[0] === name2[0]) {
            // assumptions on caniuse data
            // 1) version ranges never overlaps
            // 2) if version is not a range, it never contains `-`
            var version1 = name1[1].split("-")[0];
            var version2 = name2[1].split("-")[0];
            return compareSemver(version2.split("."), version1.split("."));
        } else return compare(name1[0], name2[0]);
    });
    cache[cacheKey] = result;
    return result;
}
browserslist.parse = function(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    return parse(QUERIES, queries);
};
// Will be filled by Can I Use data below
browserslist.cache = {};
browserslist.data = {};
browserslist.usage = {
    global: {},
    custom: null
};
// Default browsers query
browserslist.defaults = [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead"
];
// Browser names aliases
browserslist.aliases = {
    fx: "firefox",
    ff: "firefox",
    ios: "ios_saf",
    explorer: "ie",
    blackberry: "bb",
    explorermobile: "ie_mob",
    operamini: "op_mini",
    operamobile: "op_mob",
    chromeandroid: "and_chr",
    firefoxandroid: "and_ff",
    ucandroid: "and_uc",
    qqandroid: "and_qq"
};
// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
browserslist.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    android: "chrome" // has extra processing logic
};
// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {};
browserslist.clearCaches = env.clearCaches;
browserslist.parseConfig = env.parseConfig;
browserslist.readConfig = env.readConfig;
browserslist.findConfig = env.findConfig;
browserslist.loadConfig = env.loadConfig;
browserslist.coverage = function(browsers, stats) {
    var data;
    if (typeof stats === "undefined") data = browserslist.usage.global;
    else if (stats === "my stats") {
        var opts = {};
        opts.path = path.resolve ? path.resolve(".") : ".";
        var customStats = env.getStat(opts);
        if (!customStats) throw new BrowserslistError("Custom usage statistics was not provided");
        data = {};
        for(var browser in customStats)fillUsage(data, browser, customStats[browser]);
    } else if (typeof stats === "string") {
        if (stats.length > 2) stats = stats.toLowerCase();
        else stats = stats.toUpperCase();
        env.loadCountry(browserslist.usage, stats, browserslist.data);
        data = browserslist.usage[stats];
    } else {
        if ("dataByBrowser" in stats) stats = stats.dataByBrowser;
        data = {};
        for(var name in stats)for(var version in stats[name])data[name + " " + version] = stats[name][version];
    }
    return browsers.reduce(function(all, i) {
        var usage = data[i];
        if (usage === undefined) usage = data[i.replace(/ \S+$/, " 0")];
        return all + (usage || 0);
    }, 0);
};
function nodeQuery(context, node) {
    var matched = browserslist.nodeVersions.filter(function(i) {
        return isVersionsMatch(i, node.version);
    });
    if (matched.length === 0) {
        if (context.ignoreUnknownVersions) return [];
        else throw new BrowserslistError("Unknown version " + node.version + " of Node.js");
    }
    return [
        "node " + matched[matched.length - 1]
    ];
}
function sinceQuery(context, node) {
    var year = parseInt(node.year);
    var month = parseInt(node.month || "01") - 1;
    var date = parseInt(node.date || "01");
    return filterByYear(Date.UTC(year, month, date, 0, 0, 0), context);
}
function coverQuery(context, node) {
    var coverage = parseFloat(node.coverage);
    var usage = browserslist.usage.global;
    if (node.place) {
        if (node.place.match(/^my\s+stats$/i)) {
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            usage = context.customUsage;
        } else {
            var place;
            if (node.place.length === 2) place = node.place.toUpperCase();
            else place = node.place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            usage = browserslist.usage[place];
        }
    }
    var versions = Object.keys(usage).sort(function(a, b) {
        return usage[b] - usage[a];
    });
    var coveraged = 0;
    var result = [];
    var version;
    for(var i = 0; i < versions.length; i++){
        version = versions[i];
        if (usage[version] === 0) break;
        coveraged += usage[version];
        result.push(version);
        if (coveraged >= coverage) break;
    }
    return result;
}
var QUERIES = {
    last_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = getMajorVersions(data.released, node.versions);
                list = list.map(nameMapper(data.name));
                if (data.name === "android") list = filterAndroid(list, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.released.slice(-node.versions);
                list = list.map(nameMapper(data.name));
                if (data.name === "android") list = filterAndroid(list, node.versions, context);
                return selected.concat(list);
            }, []);
        }
    },
    last_electron_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
        select: function(context, node) {
            var validVersions = getMajorVersions(Object.keys(e2c), node.versions);
            return validVersions.map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_major_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
        select: function(context, node) {
            return getMajorVersions(browserslist.nodeVersions, node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_major_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var validVersions = getMajorVersions(data.released, node.versions);
            var list = validVersions.map(nameMapper(data.name));
            if (data.name === "android") list = filterAndroid(list, node.versions, context);
            return list;
        }
    },
    last_electron_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
        select: function(context, node) {
            return Object.keys(e2c).slice(-node.versions).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    last_node_versions: {
        matches: [
            "versions"
        ],
        regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.slice(-node.versions).map(function(version) {
                return "node " + version;
            });
        }
    },
    last_browser_versions: {
        matches: [
            "versions",
            "browser"
        ],
        regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var list = data.released.slice(-node.versions).map(nameMapper(data.name));
            if (data.name === "android") list = filterAndroid(list, node.versions, context);
            return list;
        }
    },
    unreleased_versions: {
        matches: [],
        regexp: /^unreleased\s+versions$/i,
        select: function(context) {
            return Object.keys(agents).reduce(function(selected, name) {
                var data = byName(name, context);
                if (!data) return selected;
                var list = data.versions.filter(function(v) {
                    return data.released.indexOf(v) === -1;
                });
                list = list.map(nameMapper(data.name));
                return selected.concat(list);
            }, []);
        }
    },
    unreleased_electron_versions: {
        matches: [],
        regexp: /^unreleased\s+electron\s+versions?$/i,
        select: function() {
            return [];
        }
    },
    unreleased_browser_versions: {
        matches: [
            "browser"
        ],
        regexp: /^unreleased\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            return data.versions.filter(function(v) {
                return data.released.indexOf(v) === -1;
            }).map(nameMapper(data.name));
        }
    },
    last_years: {
        matches: [
            "years"
        ],
        regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
        select: function(context, node) {
            return filterByYear(Date.now() - YEAR * node.years, context);
        }
    },
    since_y: {
        matches: [
            "year"
        ],
        regexp: /^since (\d+)$/i,
        select: sinceQuery
    },
    since_y_m: {
        matches: [
            "year",
            "month"
        ],
        regexp: /^since (\d+)-(\d+)$/i,
        select: sinceQuery
    },
    since_y_m_d: {
        matches: [
            "year",
            "month",
            "day"
        ],
        regexp: /^since (\d+)-(\d+)-(\d+)$/i,
        select: sinceQuery
    },
    popularity: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var usage = browserslist.usage.global;
            return Object.keys(usage).reduce(function(result, version) {
                if (node.sign === ">") {
                    if (usage[version] > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (usage[version] < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (usage[version] <= popularity) result.push(version);
                } else if (usage[version] >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_my_stats: {
        matches: [
            "sign",
            "popularity"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_config_stats: {
        matches: [
            "sign",
            "popularity",
            "config"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var stats = env.loadStat(context, node.config, browserslist.data);
            if (stats) {
                context.customUsage = {};
                for(var browser in stats)fillUsage(context.customUsage, browser, stats[browser]);
            }
            if (!context.customUsage) throw new BrowserslistError("Custom usage statistics was not provided");
            var usage = context.customUsage;
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    popularity_in_place: {
        matches: [
            "sign",
            "popularity",
            "place"
        ],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
        select: function(context, node) {
            var popularity = parseFloat(node.popularity);
            var place = node.place;
            if (place.length === 2) place = place.toUpperCase();
            else place = place.toLowerCase();
            env.loadCountry(browserslist.usage, place, browserslist.data);
            var usage = browserslist.usage[place];
            return Object.keys(usage).reduce(function(result, version) {
                var percentage = usage[version];
                if (percentage == null) return result;
                if (node.sign === ">") {
                    if (percentage > popularity) result.push(version);
                } else if (node.sign === "<") {
                    if (percentage < popularity) result.push(version);
                } else if (node.sign === "<=") {
                    if (percentage <= popularity) result.push(version);
                } else if (percentage >= popularity) result.push(version);
                return result;
            }, []);
        }
    },
    cover: {
        matches: [
            "coverage"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
        select: coverQuery
    },
    cover_in: {
        matches: [
            "coverage",
            "place"
        ],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
        select: coverQuery
    },
    supports: {
        matches: [
            "feature"
        ],
        regexp: /^supports\s+([\w-]+)$/,
        select: function(context, node) {
            env.loadFeature(browserslist.cache, node.feature);
            var features = browserslist.cache[node.feature];
            return Object.keys(features).reduce(function(result, version) {
                var flags = features[version];
                if (flags.indexOf("y") >= 0 || flags.indexOf("a") >= 0) result.push(version);
                return result;
            }, []);
        }
    },
    electron_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var fromToUse = normalizeElectron(node.from);
            var toToUse = normalizeElectron(node.to);
            var from = parseFloat(node.from);
            var to = parseFloat(node.to);
            if (!e2c[fromToUse]) throw new BrowserslistError("Unknown version " + from + " of electron");
            if (!e2c[toToUse]) throw new BrowserslistError("Unknown version " + to + " of electron");
            return Object.keys(e2c).filter(function(i) {
                var parsed = parseFloat(i);
                return parsed >= from && parsed <= to;
            }).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_range: {
        matches: [
            "from",
            "to"
        ],
        regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(semverFilterLoose(">=", node.from)).filter(semverFilterLoose("<=", node.to)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_range: {
        matches: [
            "browser",
            "from",
            "to"
        ],
        regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
            var data = checkName(node.browser, context);
            var from = parseFloat(normalizeVersion(data, node.from) || node.from);
            var to = parseFloat(normalizeVersion(data, node.to) || node.to);
            function filter(v) {
                var parsed = parseFloat(v);
                return parsed >= from && parsed <= to;
            }
            return data.released.filter(filter).map(nameMapper(data.name));
        }
    },
    electron_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            return Object.keys(e2c).filter(generateFilter(node.sign, versionToUse)).map(function(i) {
                return "chrome " + e2c[i];
            });
        }
    },
    node_ray: {
        matches: [
            "sign",
            "version"
        ],
        regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
            return browserslist.nodeVersions.filter(generateSemverFilter(node.sign, node.version)).map(function(v) {
                return "node " + v;
            });
        }
    },
    browser_ray: {
        matches: [
            "browser",
            "sign",
            "version"
        ],
        regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
        select: function(context, node) {
            var version = node.version;
            var data = checkName(node.browser, context);
            var alias = browserslist.versionAliases[data.name][version];
            if (alias) version = alias;
            return data.released.filter(generateFilter(node.sign, version)).map(function(v) {
                return data.name + " " + v;
            });
        }
    },
    firefox_esr: {
        matches: [],
        regexp: /^(firefox|ff|fx)\s+esr$/i,
        select: function() {
            return [
                "firefox 91"
            ];
        }
    },
    opera_mini_all: {
        matches: [],
        regexp: /(operamini|op_mini)\s+all/i,
        select: function() {
            return [
                "op_mini all"
            ];
        }
    },
    electron_version: {
        matches: [
            "version"
        ],
        regexp: /^electron\s+([\d.]+)$/i,
        select: function(context, node) {
            var versionToUse = normalizeElectron(node.version);
            var chrome = e2c[versionToUse];
            if (!chrome) throw new BrowserslistError("Unknown version " + node.version + " of electron");
            return [
                "chrome " + chrome
            ];
        }
    },
    node_major_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+)$/i,
        select: nodeQuery
    },
    node_minor_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+)$/i,
        select: nodeQuery
    },
    node_patch_version: {
        matches: [
            "version"
        ],
        regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
        select: nodeQuery
    },
    current_node: {
        matches: [],
        regexp: /^current\s+node$/i,
        select: function(context) {
            return [
                env.currentNode(resolve, context)
            ];
        }
    },
    maintained_node: {
        matches: [],
        regexp: /^maintained\s+node\s+versions$/i,
        select: function(context) {
            var now = Date.now();
            var queries = Object.keys(jsEOL).filter(function(key) {
                return now < Date.parse(jsEOL[key].end) && now > Date.parse(jsEOL[key].start) && isEolReleased(key);
            }).map(function(key) {
                return "node " + key.slice(1);
            });
            return resolve(queries, context);
        }
    },
    phantomjs_1_9: {
        matches: [],
        regexp: /^phantomjs\s+1.9$/i,
        select: function() {
            return [
                "safari 5"
            ];
        }
    },
    phantomjs_2_1: {
        matches: [],
        regexp: /^phantomjs\s+2.1$/i,
        select: function() {
            return [
                "safari 6"
            ];
        }
    },
    browser_version: {
        matches: [
            "browser",
            "version"
        ],
        regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
        select: function(context, node) {
            var version = node.version;
            if (/^tp$/i.test(version)) version = "TP";
            var data = checkName(node.browser, context);
            var alias = normalizeVersion(data, version);
            if (alias) version = alias;
            else {
                if (version.indexOf(".") === -1) alias = version + ".0";
                else alias = version.replace(/\.0$/, "");
                alias = normalizeVersion(data, alias);
                if (alias) version = alias;
                else if (context.ignoreUnknownVersions) return [];
                else throw new BrowserslistError("Unknown version " + version + " of " + node.browser);
            }
            return [
                data.name + " " + version
            ];
        }
    },
    browserslist_config: {
        matches: [],
        regexp: /^browserslist config$/i,
        select: function(context) {
            return browserslist(undefined, context);
        }
    },
    extends: {
        matches: [
            "config"
        ],
        regexp: /^extends (.+)$/i,
        select: function(context, node) {
            return resolve(env.loadQueries(context, node.config), context);
        }
    },
    defaults: {
        matches: [],
        regexp: /^defaults$/i,
        select: function(context) {
            return resolve(browserslist.defaults, context);
        }
    },
    dead: {
        matches: [],
        regexp: /^dead$/i,
        select: function(context) {
            var dead = [
                "Baidu >= 0",
                "ie <= 11",
                "ie_mob <= 11",
                "bb <= 10",
                "op_mob <= 12.1",
                "samsung 4"
            ];
            return resolve(dead, context);
        }
    },
    unknown: {
        matches: [],
        regexp: /^(\w+)$/i,
        select: function(context, node) {
            if (byName(node.query, context)) throw new BrowserslistError("Specify versions in Browserslist query for browser " + node.query);
            else throw unknownQuery(node.query);
        }
    }
};
(function() {
    for(var name in agents){
        var browser = agents[name];
        browserslist.data[name] = {
            name: name,
            versions: normalize(agents[name].versions),
            released: normalize(agents[name].versions.slice(0, -3)),
            releaseDate: agents[name].release_date
        };
        fillUsage(browserslist.usage.global, name, browser.usage_global);
        browserslist.versionAliases[name] = {};
        for(var i = 0; i < browser.versions.length; i++){
            var full = browser.versions[i];
            if (!full) continue;
            if (full.indexOf("-") !== -1) {
                var interval = full.split("-");
                for(var j = 0; j < interval.length; j++)browserslist.versionAliases[name][interval[j]] = full;
            }
        }
    }
    browserslist.versionAliases.op_mob["59"] = "58";
    browserslist.nodeVersions = jsReleases.map(function(release) {
        return release.version;
    });
})();
module.exports = browserslist;

},{"node-releases/data/processed/envs.json":"qrnUB","caniuse-lite/dist/unpacker/agents":"1o0P3","node-releases/data/release-schedule/release-schedule.json":"b7Kzh","path":"jhUEF","electron-to-chromium/versions":"i95xm","./error":"4GzM4","./parse":"a4Lkh","./node":"hteYL"}],"qrnUB":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false}]');

},{}],"1o0P3":[function(require,module,exports) {
"use strict";
const browsers = require("./browsers").browsers;
const versions = require("./browserVersions").browserVersions;
const agentsData = require("../../data/agents");
function unpackBrowserVersions(versionsData) {
    return Object.keys(versionsData).reduce((usage, version)=>{
        usage[versions[version]] = versionsData[version];
        return usage;
    }, {});
}
module.exports.agents = Object.keys(agentsData).reduce((map, key)=>{
    let versionsData = agentsData[key];
    map[browsers[key]] = Object.keys(versionsData).reduce((data, entry)=>{
        if (entry === "A") data.usage_global = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "C") data.versions = versionsData[entry].reduce((list, version)=>{
            if (version === "") list.push(null);
            else list.push(versions[version]);
            return list;
        }, []);
        else if (entry === "D") data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
        else if (entry === "E") data.browser = versionsData[entry];
        else if (entry === "F") data.release_date = Object.keys(versionsData[entry]).reduce((map2, key2)=>{
            map2[versions[key2]] = versionsData[entry][key2];
            return map2;
        }, {});
        else // entry is B
        data.prefix = versionsData[entry];
        return data;
    }, {});
    return map;
}, {});

},{"./browsers":"1klRD","./browserVersions":"gSgrO","../../data/agents":"dwIbB"}],"1klRD":[function(require,module,exports) {
module.exports.browsers = require("../../data/browsers");

},{"../../data/browsers":"dD80h"}],"dD80h":[function(require,module,exports) {
module.exports = {
    A: "ie",
    B: "edge",
    C: "firefox",
    D: "chrome",
    E: "safari",
    F: "opera",
    G: "ios_saf",
    H: "op_mini",
    I: "android",
    J: "bb",
    K: "op_mob",
    L: "and_chr",
    M: "and_ff",
    N: "ie_mob",
    O: "and_uc",
    P: "samsung",
    Q: "and_qq",
    R: "baidu",
    S: "kaios"
};

},{}],"gSgrO":[function(require,module,exports) {
module.exports.browserVersions = require("../../data/browserVersions");

},{"../../data/browserVersions":"jocZZ"}],"jocZZ":[function(require,module,exports) {
module.exports = {
    "0": "31",
    "1": "32",
    "2": "33",
    "3": "34",
    "4": "35",
    "5": "36",
    "6": "37",
    "7": "38",
    "8": "39",
    "9": "40",
    A: "10",
    B: "11",
    C: "12",
    D: "7",
    E: "8",
    F: "9",
    G: "15",
    H: "101",
    I: "4",
    J: "6",
    K: "13",
    L: "14",
    M: "16",
    N: "17",
    O: "18",
    P: "79",
    Q: "80",
    R: "81",
    S: "83",
    T: "84",
    U: "85",
    V: "86",
    W: "87",
    X: "102",
    Y: "64",
    Z: "88",
    a: "89",
    b: "90",
    c: "91",
    d: "92",
    e: "93",
    f: "94",
    g: "95",
    h: "96",
    i: "97",
    j: "98",
    k: "99",
    l: "100",
    m: "103",
    n: "5",
    o: "19",
    p: "20",
    q: "21",
    r: "22",
    s: "23",
    t: "24",
    u: "25",
    v: "26",
    w: "27",
    x: "28",
    y: "29",
    z: "30",
    AB: "41",
    BB: "42",
    CB: "43",
    DB: "44",
    EB: "45",
    FB: "46",
    GB: "47",
    HB: "48",
    IB: "49",
    JB: "50",
    KB: "51",
    LB: "52",
    MB: "53",
    NB: "54",
    OB: "55",
    PB: "56",
    QB: "57",
    RB: "58",
    SB: "60",
    TB: "62",
    UB: "63",
    VB: "65",
    WB: "66",
    XB: "67",
    YB: "68",
    ZB: "69",
    aB: "70",
    bB: "71",
    cB: "72",
    dB: "73",
    eB: "74",
    fB: "75",
    gB: "76",
    hB: "77",
    iB: "78",
    jB: "11.1",
    kB: "12.1",
    lB: "16.0",
    mB: "3",
    nB: "59",
    oB: "61",
    pB: "82",
    qB: "3.2",
    rB: "10.1",
    sB: "15.2-15.3",
    tB: "15.4",
    uB: "15.5",
    vB: "11.5",
    wB: "4.2-4.3",
    xB: "5.5",
    yB: "2",
    zB: "3.5",
    "0B": "3.6",
    "1B": "104",
    "2B": "105",
    "3B": "106",
    "4B": "3.1",
    "5B": "5.1",
    "6B": "6.1",
    "7B": "7.1",
    "8B": "9.1",
    "9B": "13.1",
    AC: "14.1",
    BC: "15.1",
    CC: "TP",
    DC: "9.5-9.6",
    EC: "10.0-10.1",
    FC: "10.5",
    GC: "10.6",
    HC: "11.6",
    IC: "4.0-4.1",
    JC: "5.0-5.1",
    KC: "6.0-6.1",
    LC: "7.0-7.1",
    MC: "8.1-8.4",
    NC: "9.0-9.2",
    OC: "9.3",
    PC: "10.0-10.2",
    QC: "10.3",
    RC: "11.0-11.2",
    SC: "11.3-11.4",
    TC: "12.0-12.1",
    UC: "12.2-12.5",
    VC: "13.0-13.1",
    WC: "13.2",
    XC: "13.3",
    YC: "13.4-13.7",
    ZC: "14.0-14.4",
    aC: "14.5-14.8",
    bC: "15.0-15.1",
    cC: "all",
    dC: "2.1",
    eC: "2.2",
    fC: "2.3",
    gC: "4.1",
    hC: "4.4",
    iC: "4.4.3-4.4.4",
    jC: "12.12",
    kC: "5.0-5.4",
    lC: "6.2-6.4",
    mC: "7.2-7.4",
    nC: "8.2",
    oC: "9.2",
    pC: "11.1-11.2",
    qC: "12.0",
    rC: "13.0",
    sC: "14.0",
    tC: "15.0",
    uC: "17.0",
    vC: "10.4",
    wC: "7.12",
    xC: "2.5"
};

},{}],"dwIbB":[function(require,module,exports) {
module.exports = {
    A: {
        A: {
            J: 0.0131217,
            D: 0.00621152,
            E: 0.0166941,
            F: 0.038953,
            A: 0.00556471,
            B: 0.8514,
            xB: 0.009298
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "xB",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE",
        F: {
            xB: 962323200,
            J: 998870400,
            D: 1161129600,
            E: 1237420800,
            F: 1300060800,
            A: 1346716800,
            B: 1381968000
        }
    },
    B: {
        A: {
            C: 0.007734,
            K: 0.004267,
            L: 0.004268,
            G: 0.058005,
            M: 0.003867,
            N: 0.007734,
            O: 0.023202,
            P: 0,
            Q: 0.004298,
            R: 0.00944,
            S: 0.004043,
            T: 0.007734,
            U: 0.007734,
            V: 0.003867,
            W: 0.011601,
            Z: 0.004318,
            a: 0.007734,
            b: 0.004118,
            c: 0.003939,
            d: 0.007734,
            e: 0.004118,
            f: 0.003939,
            g: 0.007734,
            h: 0.011601,
            i: 0.015468,
            j: 0.015468,
            k: 0.054138,
            l: 0.212685,
            H: 3.52284,
            X: 0,
            m: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "H",
            "X",
            "m",
            "",
            "",
            ""
        ],
        E: "Edge",
        F: {
            C: 1438128000,
            K: 1447286400,
            L: 1470096000,
            G: 1491868800,
            M: 1508198400,
            N: 1525046400,
            O: 1542067200,
            P: 1579046400,
            Q: 1581033600,
            R: 1586736000,
            S: 1590019200,
            T: 1594857600,
            U: 1598486400,
            V: 1602201600,
            W: 1605830400,
            Z: 1611360000,
            a: 1614816000,
            b: 1618358400,
            c: 1622073600,
            d: 1626912000,
            e: 1630627200,
            f: 1632441600,
            g: 1634774400,
            h: 1637539200,
            i: 1641427200,
            j: 1643932800,
            k: 1646265600,
            l: 1649635200,
            H: 1651190400,
            X: 1653955200,
            m: 1655942400
        },
        D: {
            C: "ms",
            K: "ms",
            L: "ms",
            G: "ms",
            M: "ms",
            N: "ms",
            O: "ms"
        }
    },
    C: {
        A: {
            "0": 0.008928,
            "1": 0.004471,
            "2": 0.009284,
            "3": 0.004707,
            "4": 0.009076,
            "5": 0.003867,
            "6": 0.004783,
            "7": 0.004271,
            "8": 0.004783,
            "9": 0.00487,
            yB: 0.004118,
            mB: 0.004271,
            I: 0.019335,
            n: 0.004879,
            J: 0.020136,
            D: 0.005725,
            E: 0.004525,
            F: 0.00533,
            A: 0.004283,
            B: 0.007734,
            C: 0.004471,
            K: 0.004486,
            L: 0.00453,
            G: 0.008322,
            M: 0.004417,
            N: 0.004425,
            O: 0.004161,
            o: 0.004443,
            p: 0.004283,
            q: 0.008322,
            r: 0.013698,
            s: 0.004161,
            t: 0.008786,
            u: 0.004118,
            v: 0.004317,
            w: 0.004393,
            x: 0.004418,
            y: 0.008834,
            z: 0.008322,
            AB: 0.005029,
            BB: 0.0047,
            CB: 0.023202,
            DB: 0.007734,
            EB: 0.003867,
            FB: 0.004525,
            GB: 0.004293,
            HB: 0.003867,
            IB: 0.004538,
            JB: 0.008282,
            KB: 0.011601,
            LB: 0.069606,
            MB: 0.011601,
            NB: 0.007734,
            OB: 0.015468,
            PB: 0.011601,
            QB: 0.011601,
            RB: 0.003939,
            nB: 0.007734,
            SB: 0.003867,
            oB: 0.004356,
            TB: 0.004425,
            UB: 0.008322,
            Y: 0.00415,
            VB: 0.004267,
            WB: 0.003867,
            XB: 0.004267,
            YB: 0.007734,
            ZB: 0.00415,
            aB: 0.004293,
            bB: 0.004425,
            cB: 0.003867,
            dB: 0.00415,
            eB: 0.00415,
            fB: 0.004318,
            gB: 0.004356,
            hB: 0.003867,
            iB: 0.042537,
            P: 0.007734,
            Q: 0.007734,
            R: 0.011601,
            pB: 0.007734,
            S: 0.003867,
            T: 0.003867,
            U: 0.004268,
            V: 0.003867,
            W: 0.011601,
            Z: 0.011601,
            a: 0.007734,
            b: 0.007734,
            c: 0.096675,
            d: 0.003867,
            e: 0.007734,
            f: 0.03867,
            g: 0.011601,
            h: 0.015468,
            i: 0.015468,
            j: 0.034803,
            k: 0.421503,
            l: 1.84456,
            H: 0.023202,
            X: 0,
            m: 0,
            zB: 0.008786,
            "0B": 0.00487
        },
        B: "moz",
        C: [
            "yB",
            "mB",
            "zB",
            "0B",
            "I",
            "n",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "nB",
            "SB",
            "oB",
            "TB",
            "UB",
            "Y",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "P",
            "Q",
            "R",
            "pB",
            "S",
            "T",
            "U",
            "V",
            "W",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "H",
            "X",
            "m",
            ""
        ],
        E: "Firefox",
        F: {
            "0": 1405987200,
            "1": 1409616000,
            "2": 1413244800,
            "3": 1417392000,
            "4": 1421107200,
            "5": 1424736000,
            "6": 1428278400,
            "7": 1431475200,
            "8": 1435881600,
            "9": 1439251200,
            yB: 1161648000,
            mB: 1213660800,
            zB: 1246320000,
            "0B": 1264032000,
            I: 1300752000,
            n: 1308614400,
            J: 1313452800,
            D: 1317081600,
            E: 1317081600,
            F: 1320710400,
            A: 1324339200,
            B: 1327968000,
            C: 1331596800,
            K: 1335225600,
            L: 1338854400,
            G: 1342483200,
            M: 1346112000,
            N: 1349740800,
            O: 1353628800,
            o: 1357603200,
            p: 1361232000,
            q: 1364860800,
            r: 1368489600,
            s: 1372118400,
            t: 1375747200,
            u: 1379376000,
            v: 1386633600,
            w: 1391472000,
            x: 1395100800,
            y: 1398729600,
            z: 1402358400,
            AB: 1442880000,
            BB: 1446508800,
            CB: 1450137600,
            DB: 1453852800,
            EB: 1457395200,
            FB: 1461628800,
            GB: 1465257600,
            HB: 1470096000,
            IB: 1474329600,
            JB: 1479168000,
            KB: 1485216000,
            LB: 1488844800,
            MB: 1492560000,
            NB: 1497312000,
            OB: 1502150400,
            PB: 1506556800,
            QB: 1510617600,
            RB: 1516665600,
            nB: 1520985600,
            SB: 1525824000,
            oB: 1529971200,
            TB: 1536105600,
            UB: 1540252800,
            Y: 1544486400,
            VB: 1548720000,
            WB: 1552953600,
            XB: 1558396800,
            YB: 1562630400,
            ZB: 1567468800,
            aB: 1571788800,
            bB: 1575331200,
            cB: 1578355200,
            dB: 1581379200,
            eB: 1583798400,
            fB: 1586304000,
            gB: 1588636800,
            hB: 1591056000,
            iB: 1593475200,
            P: 1595894400,
            Q: 1598313600,
            R: 1600732800,
            pB: 1603152000,
            S: 1605571200,
            T: 1607990400,
            U: 1611619200,
            V: 1614038400,
            W: 1616457600,
            Z: 1618790400,
            a: 1622505600,
            b: 1626134400,
            c: 1628553600,
            d: 1630972800,
            e: 1633392000,
            f: 1635811200,
            g: 1638835200,
            h: 1641859200,
            i: 1644364800,
            j: 1646697600,
            k: 1649116800,
            l: 1651536000,
            H: 1653955200,
            X: null,
            m: null
        }
    },
    D: {
        A: {
            "0": 0.008596,
            "1": 0.004566,
            "2": 0.004118,
            "3": 0.007734,
            "4": 0.007878,
            "5": 0.004335,
            "6": 0.004464,
            "7": 0.019335,
            "8": 0.003867,
            "9": 0.019335,
            I: 0.004706,
            n: 0.004879,
            J: 0.004879,
            D: 0.005591,
            E: 0.005591,
            F: 0.005591,
            A: 0.004534,
            B: 0.004464,
            C: 0.010424,
            K: 0.0083,
            L: 0.004706,
            G: 0.015087,
            M: 0.004393,
            N: 0.004393,
            O: 0.008652,
            o: 0.008322,
            p: 0.004393,
            q: 0.004317,
            r: 0.007734,
            s: 0.008786,
            t: 0.003939,
            u: 0.004461,
            v: 0.004141,
            w: 0.004326,
            x: 0.0047,
            y: 0.004538,
            z: 0.008322,
            AB: 0.007734,
            BB: 0.007734,
            CB: 0.011601,
            DB: 0.003867,
            EB: 0.003867,
            FB: 0.003867,
            GB: 0.015468,
            HB: 0.023202,
            IB: 0.061872,
            JB: 0.003867,
            KB: 0.007734,
            LB: 0.007734,
            MB: 0.015468,
            NB: 0.003867,
            OB: 0.007734,
            PB: 0.027069,
            QB: 0.007734,
            RB: 0.011601,
            nB: 0.007734,
            SB: 0.015468,
            oB: 0.015468,
            TB: 0.015468,
            UB: 0.015468,
            Y: 0.007734,
            VB: 0.015468,
            WB: 0.027069,
            XB: 0.023202,
            YB: 0.007734,
            ZB: 0.046404,
            aB: 0.019335,
            bB: 0.011601,
            cB: 0.019335,
            dB: 0.007734,
            eB: 0.023202,
            fB: 0.058005,
            gB: 0.073473,
            hB: 0.011601,
            iB: 0.030936,
            P: 0.204951,
            Q: 0.042537,
            R: 0.03867,
            S: 0.131478,
            T: 0.081207,
            U: 0.088941,
            V: 0.092808,
            W: 0.104409,
            Z: 0.019335,
            a: 0.058005,
            b: 0.034803,
            c: 0.081207,
            d: 0.065739,
            e: 0.054138,
            f: 0.061872,
            g: 0.042537,
            h: 0.143079,
            i: 0.143079,
            j: 0.204951,
            k: 0.351897,
            l: 4.17636,
            H: 15.4487,
            X: 1.5468,
            m: 0.015468,
            "1B": 0.007734,
            "2B": 0,
            "3B": 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "I",
            "n",
            "J",
            "D",
            "E",
            "F",
            "A",
            "B",
            "C",
            "K",
            "L",
            "G",
            "M",
            "N",
            "O",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "nB",
            "SB",
            "oB",
            "TB",
            "UB",
            "Y",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "H",
            "X",
            "m",
            "1B",
            "2B",
            "3B"
        ],
        E: "Chrome",
        F: {
            "0": 1384214400,
            "1": 1389657600,
            "2": 1392940800,
            "3": 1397001600,
            "4": 1400544000,
            "5": 1405468800,
            "6": 1409011200,
            "7": 1412640000,
            "8": 1416268800,
            "9": 1421798400,
            I: 1264377600,
            n: 1274745600,
            J: 1283385600,
            D: 1287619200,
            E: 1291248000,
            F: 1296777600,
            A: 1299542400,
            B: 1303862400,
            C: 1307404800,
            K: 1312243200,
            L: 1316131200,
            G: 1316131200,
            M: 1319500800,
            N: 1323734400,
            O: 1328659200,
            o: 1332892800,
            p: 1337040000,
            q: 1340668800,
            r: 1343692800,
            s: 1348531200,
            t: 1352246400,
            u: 1357862400,
            v: 1361404800,
            w: 1364428800,
            x: 1369094400,
            y: 1374105600,
            z: 1376956800,
            AB: 1425513600,
            BB: 1429401600,
            CB: 1432080000,
            DB: 1437523200,
            EB: 1441152000,
            FB: 1444780800,
            GB: 1449014400,
            HB: 1453248000,
            IB: 1456963200,
            JB: 1460592000,
            KB: 1464134400,
            LB: 1469059200,
            MB: 1472601600,
            NB: 1476230400,
            OB: 1480550400,
            PB: 1485302400,
            QB: 1489017600,
            RB: 1492560000,
            nB: 1496707200,
            SB: 1500940800,
            oB: 1504569600,
            TB: 1508198400,
            UB: 1512518400,
            Y: 1516752000,
            VB: 1520294400,
            WB: 1523923200,
            XB: 1527552000,
            YB: 1532390400,
            ZB: 1536019200,
            aB: 1539648000,
            bB: 1543968000,
            cB: 1548720000,
            dB: 1552348800,
            eB: 1555977600,
            fB: 1559606400,
            gB: 1564444800,
            hB: 1568073600,
            iB: 1571702400,
            P: 1575936000,
            Q: 1580860800,
            R: 1586304000,
            S: 1589846400,
            T: 1594684800,
            U: 1598313600,
            V: 1601942400,
            W: 1605571200,
            Z: 1611014400,
            a: 1614556800,
            b: 1618272000,
            c: 1621987200,
            d: 1626739200,
            e: 1630368000,
            f: 1632268800,
            g: 1634601600,
            h: 1637020800,
            i: 1641340800,
            j: 1643673600,
            k: 1646092800,
            l: 1648512000,
            H: 1650931200,
            X: 1653350400,
            m: 1655769600,
            "1B": null,
            "2B": null,
            "3B": null
        }
    },
    E: {
        A: {
            I: 0,
            n: 0.008322,
            J: 0.004656,
            D: 0.004465,
            E: 0.004356,
            F: 0.004891,
            A: 0.004425,
            B: 0.004318,
            C: 0.003867,
            K: 0.034803,
            L: 0.158547,
            G: 0.058005,
            "4B": 0,
            qB: 0.008692,
            "5B": 0.007734,
            "6B": 0.00456,
            "7B": 0.004283,
            "8B": 0.015468,
            rB: 0.007734,
            jB: 0.023202,
            kB: 0.046404,
            "9B": 0.266823,
            AC: 0.491109,
            BC: 0.108276,
            sB: 0.108276,
            tB: 1.67054,
            uB: 0.189483,
            lB: 0,
            CC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "4B",
            "qB",
            "I",
            "n",
            "5B",
            "J",
            "6B",
            "D",
            "7B",
            "E",
            "F",
            "8B",
            "A",
            "rB",
            "B",
            "jB",
            "C",
            "kB",
            "K",
            "9B",
            "L",
            "AC",
            "G",
            "BC",
            "sB",
            "tB",
            "uB",
            "lB",
            "CC",
            ""
        ],
        E: "Safari",
        F: {
            "4B": 1205798400,
            qB: 1226534400,
            I: 1244419200,
            n: 1275868800,
            "5B": 1311120000,
            J: 1343174400,
            "6B": 1382400000,
            D: 1382400000,
            "7B": 1410998400,
            E: 1413417600,
            F: 1443657600,
            "8B": 1458518400,
            A: 1474329600,
            rB: 1490572800,
            B: 1505779200,
            jB: 1522281600,
            C: 1537142400,
            kB: 1553472000,
            K: 1568851200,
            "9B": 1585008000,
            L: 1600214400,
            AC: 1619395200,
            G: 1632096000,
            BC: 1635292800,
            sB: 1639353600,
            tB: 1647216000,
            uB: 1652745600,
            lB: null,
            CC: null
        }
    },
    F: {
        A: {
            "0": 0.003867,
            "1": 0.005152,
            "2": 0.005014,
            "3": 0.009758,
            "4": 0.004879,
            "5": 0.003867,
            "6": 0.004283,
            "7": 0.004367,
            "8": 0.004534,
            "9": 0.007734,
            F: 0.0082,
            B: 0.016581,
            C: 0.004317,
            G: 0.00685,
            M: 0.00685,
            N: 0.00685,
            O: 0.005014,
            o: 0.006015,
            p: 0.004879,
            q: 0.006597,
            r: 0.006597,
            s: 0.013434,
            t: 0.006702,
            u: 0.006015,
            v: 0.005595,
            w: 0.004393,
            x: 0.007734,
            y: 0.004879,
            z: 0.004879,
            AB: 0.004227,
            BB: 0.004418,
            CB: 0.004161,
            DB: 0.004227,
            EB: 0.004725,
            FB: 0.011601,
            GB: 0.008942,
            HB: 0.004707,
            IB: 0.004827,
            JB: 0.004707,
            KB: 0.004707,
            LB: 0.004326,
            MB: 0.008922,
            NB: 0.014349,
            OB: 0.004425,
            PB: 0.00472,
            QB: 0.004425,
            RB: 0.004425,
            SB: 0.00472,
            TB: 0.004532,
            UB: 0.004566,
            Y: 0.02283,
            VB: 0.00867,
            WB: 0.004656,
            XB: 0.004642,
            YB: 0.003867,
            ZB: 0.00944,
            aB: 0.004293,
            bB: 0.003867,
            cB: 0.004298,
            dB: 0.096692,
            eB: 0.004201,
            fB: 0.004141,
            gB: 0.004257,
            hB: 0.003939,
            iB: 0.008236,
            P: 0.003939,
            Q: 0.003939,
            R: 0.008514,
            pB: 0.003939,
            S: 0.003939,
            T: 0.007734,
            U: 0.448572,
            V: 0.475641,
            W: 0.027069,
            DC: 0.00685,
            EC: 0,
            FC: 0.008392,
            GC: 0.004706,
            jB: 0.006229,
            vB: 0.004879,
            HC: 0.008786,
            kB: 0.00472
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "F",
            "DC",
            "EC",
            "FC",
            "GC",
            "B",
            "jB",
            "vB",
            "HC",
            "C",
            "kB",
            "G",
            "M",
            "N",
            "O",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "AB",
            "BB",
            "CB",
            "DB",
            "EB",
            "FB",
            "GB",
            "HB",
            "IB",
            "JB",
            "KB",
            "LB",
            "MB",
            "NB",
            "OB",
            "PB",
            "QB",
            "RB",
            "SB",
            "TB",
            "UB",
            "Y",
            "VB",
            "WB",
            "XB",
            "YB",
            "ZB",
            "aB",
            "bB",
            "cB",
            "dB",
            "eB",
            "fB",
            "gB",
            "hB",
            "iB",
            "P",
            "Q",
            "R",
            "pB",
            "S",
            "T",
            "U",
            "V",
            "W",
            "",
            ""
        ],
        E: "Opera",
        F: {
            "0": 1438646400,
            "1": 1442448000,
            "2": 1445904000,
            "3": 1449100800,
            "4": 1454371200,
            "5": 1457308800,
            "6": 1462320000,
            "7": 1465344000,
            "8": 1470096000,
            "9": 1474329600,
            F: 1150761600,
            DC: 1223424000,
            EC: 1251763200,
            FC: 1267488000,
            GC: 1277942400,
            B: 1292457600,
            jB: 1302566400,
            vB: 1309219200,
            HC: 1323129600,
            C: 1323129600,
            kB: 1352073600,
            G: 1372723200,
            M: 1377561600,
            N: 1381104000,
            O: 1386288000,
            o: 1390867200,
            p: 1393891200,
            q: 1399334400,
            r: 1401753600,
            s: 1405987200,
            t: 1409616000,
            u: 1413331200,
            v: 1417132800,
            w: 1422316800,
            x: 1425945600,
            y: 1430179200,
            z: 1433808000,
            AB: 1477267200,
            BB: 1481587200,
            CB: 1486425600,
            DB: 1490054400,
            EB: 1494374400,
            FB: 1498003200,
            GB: 1502236800,
            HB: 1506470400,
            IB: 1510099200,
            JB: 1515024000,
            KB: 1517961600,
            LB: 1521676800,
            MB: 1525910400,
            NB: 1530144000,
            OB: 1534982400,
            PB: 1537833600,
            QB: 1543363200,
            RB: 1548201600,
            SB: 1554768000,
            TB: 1561593600,
            UB: 1566259200,
            Y: 1570406400,
            VB: 1573689600,
            WB: 1578441600,
            XB: 1583971200,
            YB: 1587513600,
            ZB: 1592956800,
            aB: 1595894400,
            bB: 1600128000,
            cB: 1603238400,
            dB: 1613520000,
            eB: 1612224000,
            fB: 1616544000,
            gB: 1619568000,
            hB: 1623715200,
            iB: 1627948800,
            P: 1631577600,
            Q: 1633392000,
            R: 1635984000,
            pB: 1638403200,
            S: 1642550400,
            T: 1644969600,
            U: 1647993600,
            V: 1650412800,
            W: null
        },
        D: {
            F: "o",
            B: "o",
            C: "o",
            DC: "o",
            EC: "o",
            FC: "o",
            GC: "o",
            jB: "o",
            vB: "o",
            HC: "o",
            kB: "o"
        }
    },
    G: {
        A: {
            E: 0,
            qB: 0.00303644,
            IC: 0,
            wB: 0.00151822,
            JC: 0.00455466,
            KC: 0.00455466,
            LC: 0.0167004,
            MC: 0.00759111,
            NC: 0.0197369,
            OC: 0.0774293,
            PC: 0.013664,
            QC: 0.0926115,
            RC: 0.0379555,
            SC: 0.0318826,
            TC: 0.0303644,
            UC: 0.57996,
            VC: 0.0288462,
            WC: 0.0121458,
            XC: 0.0607288,
            YC: 0.189778,
            ZC: 0.592106,
            aC: 1.50911,
            bC: 0.513159,
            sB: 1.20395,
            tB: 10.1478,
            uB: 0,
            lB: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "qB",
            "IC",
            "wB",
            "JC",
            "KC",
            "LC",
            "E",
            "MC",
            "NC",
            "OC",
            "PC",
            "QC",
            "RC",
            "SC",
            "TC",
            "UC",
            "VC",
            "WC",
            "XC",
            "YC",
            "ZC",
            "aC",
            "bC",
            "sB",
            "tB",
            "uB",
            "lB",
            "",
            ""
        ],
        E: "Safari on iOS",
        F: {
            qB: 1270252800,
            IC: 1283904000,
            wB: 1299628800,
            JC: 1331078400,
            KC: 1359331200,
            LC: 1394409600,
            E: 1410912000,
            MC: 1413763200,
            NC: 1442361600,
            OC: 1458518400,
            PC: 1473724800,
            QC: 1490572800,
            RC: 1505779200,
            SC: 1522281600,
            TC: 1537142400,
            UC: 1553472000,
            VC: 1568851200,
            WC: 1572220800,
            XC: 1580169600,
            YC: 1585008000,
            ZC: 1600214400,
            aC: 1619395200,
            bC: 1632096000,
            sB: 1639353600,
            tB: 1647216000,
            uB: 1652659200,
            lB: null
        }
    },
    H: {
        A: {
            cC: 0.998688
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "cC",
            "",
            "",
            ""
        ],
        E: "Opera Mini",
        F: {
            cC: 1426464000
        }
    },
    I: {
        A: {
            mB: 0,
            I: 0.0149357,
            H: 0,
            dC: 0,
            eC: 0,
            fC: 0,
            gC: 0.0199142,
            wB: 0.0597426,
            hC: 0,
            iC: 0.328584
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "dC",
            "eC",
            "fC",
            "mB",
            "I",
            "gC",
            "wB",
            "hC",
            "iC",
            "H",
            "",
            "",
            ""
        ],
        E: "Android Browser",
        F: {
            dC: 1256515200,
            eC: 1274313600,
            fC: 1291593600,
            mB: 1298332800,
            I: 1318896000,
            gC: 1341792000,
            wB: 1374624000,
            hC: 1386547200,
            iC: 1401667200,
            H: 1651017600
        }
    },
    J: {
        A: {
            D: 0,
            A: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "D",
            "A",
            "",
            "",
            ""
        ],
        E: "Blackberry Browser",
        F: {
            D: 1325376000,
            A: 1359504000
        }
    },
    K: {
        A: {
            A: 0,
            B: 0,
            C: 0,
            Y: 0.0111391,
            jB: 0,
            vB: 0,
            kB: 0
        },
        B: "o",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "jB",
            "vB",
            "C",
            "kB",
            "Y",
            "",
            "",
            ""
        ],
        E: "Opera Mobile",
        F: {
            A: 1287100800,
            B: 1300752000,
            jB: 1314835200,
            vB: 1318291200,
            C: 1330300800,
            kB: 1349740800,
            Y: 1613433600
        },
        D: {
            Y: "webkit"
        }
    },
    L: {
        A: {
            X: 41.3354
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "X",
            "",
            "",
            ""
        ],
        E: "Chrome for Android",
        F: {
            X: 1653350400
        }
    },
    M: {
        A: {
            H: 0.30665
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "H",
            "",
            "",
            ""
        ],
        E: "Firefox for Android",
        F: {
            H: 1653955200
        }
    },
    N: {
        A: {
            A: 0.0115934,
            B: 0.022664
        },
        B: "ms",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "A",
            "B",
            "",
            "",
            ""
        ],
        E: "IE Mobile",
        F: {
            A: 1340150400,
            B: 1353456000
        }
    },
    O: {
        A: {
            jC: 0.766625
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "jC",
            "",
            "",
            ""
        ],
        E: "UC Browser for Android",
        F: {
            jC: 1471392000
        },
        D: {
            jC: "webkit"
        }
    },
    P: {
        A: {
            I: 0.209346,
            kC: 0.0103543,
            lC: 0.010304,
            mC: 0.0628037,
            nC: 0.0103584,
            oC: 0.0104673,
            rB: 0.0105043,
            pC: 0.0418691,
            qC: 0.0209346,
            rC: 0.0942055,
            sC: 0.0942055,
            tC: 0.0942055,
            lB: 0.889718,
            uC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "I",
            "kC",
            "lC",
            "mC",
            "nC",
            "oC",
            "rB",
            "pC",
            "qC",
            "rC",
            "sC",
            "tC",
            "lB",
            "uC",
            "",
            "",
            ""
        ],
        E: "Samsung Internet",
        F: {
            I: 1461024000,
            kC: 1481846400,
            lC: 1509408000,
            mC: 1528329600,
            nC: 1546128000,
            oC: 1554163200,
            rB: 1567900800,
            pC: 1582588800,
            qC: 1593475200,
            rC: 1605657600,
            sC: 1618531200,
            tC: 1629072000,
            lB: 1640736000,
            uC: 1651708800
        }
    },
    Q: {
        A: {
            vC: 0.153325
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "vC",
            "",
            "",
            ""
        ],
        E: "QQ Browser",
        F: {
            vC: 1589846400
        }
    },
    R: {
        A: {
            wC: 0
        },
        B: "webkit",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "wC",
            "",
            "",
            ""
        ],
        E: "Baidu Browser",
        F: {
            wC: 1491004800
        }
    },
    S: {
        A: {
            xC: 0.073596
        },
        B: "moz",
        C: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "xC",
            "",
            "",
            ""
        ],
        E: "KaiOS Browser",
        F: {
            xC: 1527811200
        }
    }
};

},{}],"b7Kzh":[function(require,module,exports) {
module.exports = JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2024-04-30","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":""},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":""}}');

},{}],"i95xm":[function(require,module,exports) {
module.exports = {
    "0.20": "39",
    "0.21": "41",
    "0.22": "41",
    "0.23": "41",
    "0.24": "41",
    "0.25": "42",
    "0.26": "42",
    "0.27": "43",
    "0.28": "43",
    "0.29": "43",
    "0.30": "44",
    "0.31": "45",
    "0.32": "45",
    "0.33": "45",
    "0.34": "45",
    "0.35": "45",
    "0.36": "47",
    "0.37": "49",
    "1.0": "49",
    "1.1": "50",
    "1.2": "51",
    "1.3": "52",
    "1.4": "53",
    "1.5": "54",
    "1.6": "56",
    "1.7": "58",
    "1.8": "59",
    "2.0": "61",
    "2.1": "61",
    "3.0": "66",
    "3.1": "66",
    "4.0": "69",
    "4.1": "69",
    "4.2": "69",
    "5.0": "73",
    "6.0": "76",
    "6.1": "76",
    "7.0": "78",
    "7.1": "78",
    "7.2": "78",
    "7.3": "78",
    "8.0": "80",
    "8.1": "80",
    "8.2": "80",
    "8.3": "80",
    "8.4": "80",
    "8.5": "80",
    "9.0": "83",
    "9.1": "83",
    "9.2": "83",
    "9.3": "83",
    "9.4": "83",
    "10.0": "85",
    "10.1": "85",
    "10.2": "85",
    "10.3": "85",
    "10.4": "85",
    "11.0": "87",
    "11.1": "87",
    "11.2": "87",
    "11.3": "87",
    "11.4": "87",
    "11.5": "87",
    "12.0": "89",
    "12.1": "89",
    "12.2": "89",
    "13.0": "91",
    "13.1": "91",
    "13.2": "91",
    "13.3": "91",
    "13.4": "91",
    "13.5": "91",
    "13.6": "91",
    "14.0": "93",
    "14.1": "93",
    "14.2": "93",
    "15.0": "94",
    "15.1": "94",
    "15.2": "94",
    "15.3": "94",
    "15.4": "94",
    "15.5": "94",
    "16.0": "96",
    "16.1": "96",
    "16.2": "96",
    "17.0": "98",
    "17.1": "98",
    "17.2": "98",
    "17.3": "98",
    "17.4": "98",
    "18.0": "100",
    "18.1": "100",
    "18.2": "100",
    "18.3": "100",
    "19.0": "102",
    "20.0": "104"
};

},{}],"4GzM4":[function(require,module,exports) {
function BrowserslistError(message) {
    this.name = "BrowserslistError";
    this.message = message;
    this.browserslist = true;
    if (Error.captureStackTrace) Error.captureStackTrace(this, BrowserslistError);
}
BrowserslistError.prototype = Error.prototype;
module.exports = BrowserslistError;

},{}],"a4Lkh":[function(require,module,exports) {
var AND_REGEXP = /^\s+and\s+(.*)/i;
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
function flatten(array) {
    if (!Array.isArray(array)) return [
        array
    ];
    return array.reduce(function(a, b) {
        return a.concat(flatten(b));
    }, []);
}
function find(string, predicate) {
    for(var n = 1, max = string.length; n <= max; n++){
        var parsed = string.substr(-n, n);
        if (predicate(parsed, n, max)) return string.slice(0, -n);
    }
    return "";
}
function matchQuery(all, query) {
    var node = {
        query: query
    };
    if (query.indexOf("not ") === 0) {
        node.not = true;
        query = query.slice(4);
    }
    for(var name in all){
        var type = all[name];
        var match = query.match(type.regexp);
        if (match) {
            node.type = name;
            for(var i = 0; i < type.matches.length; i++)node[type.matches[i]] = match[i + 1];
            return node;
        }
    }
    node.type = "unknown";
    return node;
}
function matchBlock(all, string, qs) {
    var node;
    return find(string, function(parsed, n, max) {
        if (AND_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
            node.compose = "and";
            qs.unshift(node);
            return true;
        } else if (OR_REGEXP.test(parsed)) {
            node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
            node.compose = "or";
            qs.unshift(node);
            return true;
        } else if (n === max) {
            node = matchQuery(all, parsed.trim());
            node.compose = "or";
            qs.unshift(node);
            return true;
        }
        return false;
    });
}
module.exports = function parse(all, queries) {
    if (!Array.isArray(queries)) queries = [
        queries
    ];
    return flatten(queries.map(function(block) {
        var qs = [];
        do block = matchBlock(all, block, qs);
        while (block);
        return qs;
    }));
};

},{}],"hteYL":[function(require,module,exports) {
var BrowserslistError = require("./error");
function noop() {}
module.exports = {
    loadQueries: function loadQueries() {
        throw new BrowserslistError("Sharable configs are not supported in client-side build of Browserslist");
    },
    getStat: function getStat(opts) {
        return opts.stats;
    },
    loadConfig: function loadConfig(opts) {
        if (opts.config) throw new BrowserslistError("Browserslist config are not supported in client-side build");
    },
    loadCountry: function loadCountry() {
        throw new BrowserslistError("Country statistics are not supported in client-side build of Browserslist");
    },
    loadFeature: function loadFeature() {
        throw new BrowserslistError("Supports queries are not available in client-side build of Browserslist");
    },
    currentNode: function currentNode(resolve, context) {
        return resolve([
            "maintained node versions"
        ], context)[0];
    },
    parseConfig: noop,
    readConfig: noop,
    findConfig: noop,
    clearCaches: noop,
    oldDataWarning: noop
};

},{"./error":"4GzM4"}],"8eAfY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _browserslist = require("browserslist");
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return ` 
            <li class="preview">
                <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                        <img src="${this._data.image}" alt="${this._data.title}"/>
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
                            <svg>
                                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            `;
    }
}
exports.default = new PreviewView;

},{"url:../../img/icons.svg":"loVOp","./View.js":"gAkKI","browserslist":"h32Zo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Reww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // page 1 and others
        if (curPage === 1 && numPages > 1) return this._generateMarkupButton(curPage + 1, "next");
        // last page
        if (curPage === numPages && numPages > 1) return this._generateMarkupButton(curPage - 1, "prev");
        // other page
        if (curPage < numPages) return this._generateMarkupButton(curPage + 1, "next") + this._generateMarkupButton(curPage - 1, "prev");
        // only 1 page
        if (curPage === 1) return "";
    }
    _generateMarkupButton(pageNum, direction) {
        if (direction === "next") return `
            <button data-goto=${pageNum} class="btn--inline pagination__btn--${direction}">
                <span>Page ${pageNum}</span>
                <svg class="search__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
        if (direction === "prev") return `
            <button data-goto=${pageNum} class="btn--inline pagination__btn--${direction}">
                <svg class="search__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${pageNum}</span>
            </button>
        `;
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"./View.js":"gAkKI","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"uOrlR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _browserslist = require("browserslist");
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    _successMessage;
    addRanderHandler(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView;

},{"./View.js":"gAkKI","browserslist":"h32Zo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView.js":"8eAfY"}],"bxpSm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddRecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload");
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    _successMessage = "You have succesfully uploading your own recipe ;)";
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._window.classList.toggle("hidden");
        this._overlay.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
}
exports.default = new AddRecipeView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View":"gAkKI"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
