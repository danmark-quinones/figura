/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ (() => {

eval("const openMenuButton = document.querySelector(\"#open-menu\")\r\nconst closeMenuButton = document.querySelector(\"#close-menu\")\r\nconst menuContainer = document.querySelector(\"#mobile-menu\")\r\n\r\ncloseMenuButton.style.display=\"none\"\r\n\r\nopenMenuButton.addEventListener(\"click\" , function(){\r\n    menuContainer.classList.add(\"show\")\r\n    menuContainer.classList.remove(\"hide\")\r\n    openMenuButton.style.display=\"none\"\r\n    closeMenuButton.style.display=\"block\"\r\n})\r\n\r\ncloseMenuButton.addEventListener(\"click\" , function(){\r\n    menuContainer.classList.add(\"hide\")\r\n    menuContainer.classList.remove(\"show\")\r\n    openMenuButton.style.display=\"block\"\r\n    closeMenuButton.style.display=\"none\"\r\n})\r\n\r\nlet inventoryHash = document.querySelectorAll('[inventorymanagment]'); \r\n\r\nArray.from(inventoryHash).forEach( \r\n    (Selectedvariant)=>{ \r\n\r\n      if(Selectedvariant.dataset.id == variant.id){ \r\n\r\n        if(Selectedvariant.dataset.inventory > 0) \r\n        { \r\n          $(\"#variant-inventory\").html(\"We have \"+ Selectedvariant.dataset.inventory +\" in stock\"); \r\n\r\n        } \r\n        else{ \r\n          $(\"#variant-inventory\").html(\"Sold out!\"); \r\n\r\n        } \r\n      } \r\n    } \r\n  );\r\n  \r\n  function instantBuy(){\r\n    var $ = jQuery;\r\n    var formParams = $('form.cart').serialize();\r\n    $.ajax({\r\n     url: \"/cart/add\",\r\n     type: \"post\",\r\n     data: formParams,\r\n     success: function(){\r\n      window.location.href = \"/checkout\";\r\n     },\r\n     error: function(){\r\n     }\r\n    })\r\n   }\r\n\r\n   function addToCart(){\r\n    $('form.cart').submit();\r\n   }\r\n\n\n//# sourceURL=webpack://figura-theme/./src/application.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ (() => {

eval("const notif = document.querySelector(\"cart-notification\");\r\nconst openNotif = document.querySelector(\".open-notif\");\r\nconst addCart = document.querySelector(\".add-cart\");\r\nconst quantity = document.querySelector(\".qty-field\");\r\n\r\nfunction setData(data) {\r\n  const dataObject = {\r\n    title: data.title,\r\n    price: data.price,\r\n    image: data.image,\r\n    qty: data.qty,\r\n  };\r\n\r\n  console.log(dataObject);\r\n  notif.open({ data: dataObject });\r\n}\r\n\r\n// openNotif.addEventListener('click', (e)=>setData(e))\r\n\r\nfunction addToCart() {\r\n  var payload = {\r\n    id: addCart.getAttribute(\"data-pid\"),\r\n    quantity: quantity.value,\r\n  };\r\n\r\n  // console.log(payload)\r\n\r\n  fetch(\"/cart/add.js\", {\r\n    method: \"POST\",\r\n    credentials: \"same-origin\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Accept: \"application/json\",\r\n      \"X-Requested-With\": \"XMLHttpRequest\",\r\n    },\r\n    body: JSON.stringify(payload),\r\n  })\r\n    .then((res) => {\r\n      // console.log(res)\r\n      return res.json();\r\n    })\r\n    .then((res) => {\r\n      // console.log(res.data)\r\n      updateCart();\r\n    })\r\n    .catch((er) => {\r\n      console.log(er);\r\n    });\r\n}\r\n\r\nfunction updateCart() {\r\n  fetch(\"/cart/update.js\", {\r\n    method: \"POST\",\r\n    credentials: \"same-origin\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Accept: \"application/json\",\r\n      \"X-Requested-With\": \"XMLHttpRequest\",\r\n    },\r\n    body: \"{}\",\r\n  })\r\n    .then((res) => {\r\n      // console.log(res)\r\n      return res.json();\r\n    })\r\n    .then((res) => {\r\n      console.log(\"COUNTER\", res.items[0].featured_image.url);\r\n      document.querySelector(\".cart-count-container\").innerHTML =\r\n        res.item_count;\r\n      setData({\r\n        title: res.items[0].title,\r\n        price: (res.items[0].price / 100) * quantity.value,\r\n        image: res.items[0].featured_image.url,\r\n        qty: res.items[0].quantity,\r\n      });\r\n    })\r\n    .catch((er) => {\r\n      console.log(er);\r\n    });\r\n}\r\n\r\naddCart.addEventListener(\"click\", (e) => addToCart(e));\r\n\n\n//# sourceURL=webpack://figura-theme/./src/cart.js?");

/***/ }),

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sayHello() {\r\n  return \"HELLO WORLD FROM INDEX\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sayHello);\r\n\n\n//# sourceURL=webpack://figura-theme/./src/hello.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello.js */ \"./src/hello.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.js */ \"./src/cart.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cart_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application.js */ \"./src/application.js\");\n/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_application_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web_components_cart_notification_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-components/cart-notification.js */ \"./src/web-components/cart-notification.js\");\n/* harmony import */ var _web_components_cart_notification_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web_components_cart_notification_js__WEBPACK_IMPORTED_MODULE_3__);\n//HELPERS\r\n\r\n\r\n\r\n//WEB COMPONENTS\r\n\r\n//STYLES\r\n// import \"./styles/main.css\";\r\n// import \"./styles/navigation.css\";\r\n// import \"./styles/home.css\";\r\n// import \"./styles/cart.css\";\r\n// import \"./styles/product.css\";\r\n\r\nconsole.log((0,_hello_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\n\n//# sourceURL=webpack://figura-theme/./src/index.js?");

/***/ }),

/***/ "./src/web-components/cart-notification.js":
/*!*************************************************!*\
  !*** ./src/web-components/cart-notification.js ***!
  \*************************************************/
/***/ (() => {

eval("const template = document.createElement('template')\r\n\r\ntemplate.innerHTML=`\r\n    <style>\r\n    .cart-notif-container{\r\n        display:none;\r\n        background:#f2f2f2;\r\n        width:330px;\r\n        height:auto;\r\n        padding:10px;\r\n        margin:10px;\r\n        box-shadow:2px 2px 5px lightgray;\r\n        z-index:15;\r\n    }\r\n    h3{\r\n        color:goldenrod\r\n    }\r\n    .product-img{\r\n        height:100px;\r\n        width:100px;\r\n    }\r\n    .details{\r\n        display:flex;\r\n        align-items:center;\r\n    }\r\n    .img-container{\r\n        margin-right:10px;\r\n    }\r\n    .product-name{\r\n        color:goldenrod;\r\n        font-weight:800;\r\n    }\r\n    </style>\r\n    <div class=\"cart-notif-container\">\r\n        <div id=\"close-notif\">\r\n            <slot name=\"close-icon\"/>\r\n        </div>\r\n        <div class=\"details\">\r\n            <div class=\"img-container\">\r\n                <img class=\"product-img\"/>\r\n            </div>\r\n            <div>\r\n                <p class=\"product-name\"><slot  name=\"name\"/></p>\r\n                <p class=\"product-price\"><slot name=\"final-computation\"/></p>\r\n            </div>\r\n        </div>\r\n        <slot id=\"view-cart\" name=\"view-cart\"/>\r\n        \r\n    </div>\r\n    <div>\r\n        <slot id=\"show-notif\" name=\"show-notif\"/>\r\n    </div>\r\n`\r\nclass CartNotification extends HTMLElement {\r\n    constructor(){\r\n        super()\r\n        this.attachShadow({mode:'open'});\r\n        this.shadowRoot.appendChild(template.content.cloneNode(true));\r\n    }\r\n\r\n    viewCart(){\r\n        console.log(\"HEY\")\r\n    }\r\n\r\n    open(product){\r\n        console.log(product)\r\n        const notifContainer = this.shadowRoot.querySelector('.cart-notif-container')\r\n        this.shadowRoot.querySelector('.product-name').innerText = product.data.title;\r\n        this.shadowRoot.querySelector('.product-price').innerText = `Qty: ${product.data.qty} - Total Price : $ ${product.data.price.toLocaleString()}`;\r\n        this.shadowRoot.querySelector('.product-img').src = product.data.image;\r\n        notifContainer.style.display = 'block';\r\n        setTimeout(()=>{\r\n            this.close()\r\n        },[5000])\r\n    }\r\n\r\n    close(){\r\n        const notifContainer = this.shadowRoot.querySelector('.cart-notif-container')\r\n        this.shadowRoot.querySelector('.product-name').innerText = '';\r\n        this.shadowRoot.querySelector('.product-price').innerText = '';\r\n        this.shadowRoot.querySelector('.product-img').src = '';\r\n        notifContainer.style.display = 'none';\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.shadowRoot.querySelector('#view-cart').addEventListener('click', ()=> this.viewCart())\r\n        this.shadowRoot.querySelector('#show-notif').addEventListener('click', ()=> this.open())\r\n        this.shadowRoot.querySelector('#close-notif').addEventListener('click', ()=> this.close())\r\n    }\r\n\r\n    disconnectedCallback(){\r\n        this.shadowRoot.querySelector('#view-cart').removeEventListener()\r\n        this.shadowRoot.querySelector('#show-notif').removeEventListener()\r\n        this.shadowRoot.querySelector('#close-notif').removeEventListener()\r\n    }\r\n}\r\n\r\nwindow.customElements.define('cart-notification' , CartNotification)\n\n//# sourceURL=webpack://figura-theme/./src/web-components/cart-notification.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;