var reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Visual)
/* harmony export */ });


class Visual {
    constructor(options) {
        this.target = options.element;
        this.updateCount = 0;
        this.columnIndices = [];
        for (let i = 1; i < 5; i++) {
            let name = "c" + i;
            this.columnIndices[name] = 0;
        }
    }
    update(options) {
        this.findColumns(options.dataViews[0].metadata.columns);
        let rows = options.dataViews[0].table.rows;
        let columns = options.dataViews[0].table.columns;
        let table = "<table> <thead>";
        table += `<tr> <th>${columns[0].displayName}</th> <th>${columns[1].displayName}</th> <th>${columns[2].displayName}</th> <th>${columns[3].displayName}</th> </tr>`;
        table += "</thead> <tbody>";
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            table += this.makeRowHTML(row, this.columnIndices["c1"], this.columnIndices["c2"], this.columnIndices["c3"], this.columnIndices["c4"]);
        }
        table += "</tbody> </table>";
        this.target.innerHTML = table;
    }
    makeRowHTML(row, c1Index, c2Index, c3Index, c4Index) {
        return `<tr><td>${(row[c1Index])}</td> <td>${(row[c2Index])}</td> <td>${(row[c3Index])}</td> <td>${(row[c4Index])}</td></tr>`;
    }
    findColumns(columns) {
        //iterate over defined column names
        for (let name in this.columnIndices) {
            //now iterate over available columns, note that not all columns may be assigned a data field yet
            for (let j = 0; j < columns.length; j++) {
                //defining the role attribute of the current column, more info in the data view appendix
                let columnRoles = columns[j].roles;
                //column name is the property name, so looking in there
                if (Object.keys(columnRoles).indexOf(name) >= 0) {
                    //setting the index of the column name to the index of the role
                    this.columnIndices[name] = j;
                    break;
                }
            }
        }
    }
}


/***/ }),

/***/ 738:
/***/ ((module) => {

module.exports = Function('return this')();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(886);
/* provided dependency */ var window = __webpack_require__(738);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG = {
    name: 'reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG',
    displayName: 'ReactCircleCard',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG"] = reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG);

})();

reactCircleCard17906D416F054F7EA117454CAC450FA7_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map