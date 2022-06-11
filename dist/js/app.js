/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ \"./src/js/library.js\");\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_library_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9saWJyYXJ5LmpzJ1xuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var larghezza;\n  var altezza;\n  var numCircles;\n\n  if (window.innerWidth < 768) {\n    altezza = 30;\n    larghezza = 17;\n    numCircles = 20;\n  } else {\n    altezza = 150;\n    larghezza = 100;\n    numCircles = 50;\n  }\n\n  var ground;\n  var wall1;\n  var wall2;\n  var content = document.querySelector('.container');\n  var elements = [];\n  var w = content.offsetWidth;\n  var h = content.offsetHeight;\n  window.addEventListener('resize', function (e) {\n    engine.render.canvas.width = w;\n    engine.render.canvas.height = h;\n    Matter.Body.setPosition(wall2, Matter.Vector.create(w + 30, h * .5));\n    Matter.Body.setPosition(ground, Matter.Vector.create(w * .5, h + 30));\n  }); // create a Matter.js engine\n\n  var engine = Matter.Engine.create(content, {\n    render: {\n      options: {\n        width: w,\n        height: h,\n        wireframes: false,\n        background: \"#FFFFFF00\"\n      }\n    }\n  });\n  window.engine = engine;\n  var mouseConstraint = Matter.MouseConstraint.create(engine, {\n    constraint: {\n      render: {\n        visible: false\n      }\n    }\n  });\n  var colours = [\"#D855DA\", \"#4FC0FD\", \"#279B5F\", \"#FFB325\"];\n\n  function makePattern(numero, w) {\n    var canvas = document.createElement(\"canvas\");\n    var ctx = canvas.getContext(\"2d\");\n    canvas.width = canvas.height = w || 10 + Math.random() * 20 >> 0;\n    console.log(numero, \"makepattern\");\n    ctx.fillStyle = colours[numero];\n\n    if (Math.random() * 2 < 1) {\n      ctx.arc(canvas.width / 2 >> 0, canvas.width / 2 >> 0, canvas.width * (Math.random() * 0.5), 0, 2 * Math.PI);\n      ctx.fill();\n    } else {\n      var half = canvas.width / 2;\n      var lineHeight = Math.random() * canvas.width >> 0;\n      ctx.translate(half, half);\n      ctx.rotate(Math.random() * 90 * Math.PI / 180);\n      ctx.fillRect(-canvas.width, -lineHeight / 2 >> 0, canvas.width * 2, lineHeight);\n    }\n\n    return ctx.createPattern(canvas, 'repeat');\n  }\n\n  for (var i = 0; i < numCircles; i++) {\n    var numero = Math.floor(Math.random() * 4);\n    console.log(numero, \"loop\");\n    var x = Math.random() * w;\n    var y = Math.random() * -h;\n    var rotation = Math.random() * 270;\n    var base = 100;\n    if (base < 5) base = 5;\n    if (base > 30) base = 30;\n    var multiplier = w / 10;\n    if (multiplier < 30) multiplier = 30;\n    if (multiplier > 200) multiplier = 200;\n    var r = base;\n    var rectangle = Matter.Bodies.rectangle(x, y, 100, 150, {\n      render: {\n        fillStyle: makePattern(numero),\n        strokeStyle: colours[numero],\n        lineWidth: 6\n      }\n    });\n    Matter.Body.rotate(rectangle, rotation);\n    elements.push(rectangle);\n  }\n\n  ground = Matter.Bodies.rectangle(w / 2, h + 30, w * 5., 60, {\n    isStatic: true\n  });\n  wall1 = Matter.Bodies.rectangle(-30, h / 2, 60, h * 2, {\n    isStatic: true\n  });\n  wall2 = Matter.Bodies.rectangle(w + 30, h / 2, 60, h * 2, {\n    isStatic: true\n  });\n  window.wall2 = wall2;\n  elements.push(ground);\n  elements.push(wall1);\n  elements.push(wall2);\n  Matter.World.add(engine.world, elements);\n  Matter.World.add(engine.world, mouseConstraint);\n  Matter.Engine.run(engine);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9saWJyYXJ5LmpzPzRmNWYiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibGFyZ2hlenphIiwiYWx0ZXp6YSIsIm51bUNpcmNsZXMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZ3JvdW5kIiwid2FsbDEiLCJ3YWxsMiIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHMiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwiZSIsImVuZ2luZSIsInJlbmRlciIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWF0dGVyIiwiQm9keSIsInNldFBvc2l0aW9uIiwiVmVjdG9yIiwiY3JlYXRlIiwiRW5naW5lIiwib3B0aW9ucyIsIndpcmVmcmFtZXMiLCJiYWNrZ3JvdW5kIiwibW91c2VDb25zdHJhaW50IiwiTW91c2VDb25zdHJhaW50IiwiY29uc3RyYWludCIsInZpc2libGUiLCJjb2xvdXJzIiwibWFrZVBhdHRlcm4iLCJudW1lcm8iLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsIk1hdGgiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiaGFsZiIsImxpbmVIZWlnaHQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmaWxsUmVjdCIsImNyZWF0ZVBhdHRlcm4iLCJpIiwiZmxvb3IiLCJ4IiwieSIsInJvdGF0aW9uIiwiYmFzZSIsIm11bHRpcGxpZXIiLCJyIiwicmVjdGFuZ2xlIiwiQm9kaWVzIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwdXNoIiwiaXNTdGF0aWMiLCJXb3JsZCIsImFkZCIsIndvcmxkIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMs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QWIsQ0FBaUJyRCxNQUFNLENBQUNzRCxLQUF4QixFQUErQjVELFFBQS9CO0FBQ0FXLEVBQUFBLE1BQU0sQ0FBQytDLEtBQVAsQ0FBYUMsR0FBYixDQUFpQnJELE1BQU0sQ0FBQ3NELEtBQXhCLEVBQStCeEMsZUFBL0I7QUFHQVQsRUFBQUEsTUFBTSxDQUFDSyxNQUFQLENBQWM2QyxHQUFkLENBQWtCdkQsTUFBbEI7QUFDRCxDQWpJRCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG5cblxuICBsZXQgbGFyZ2hlenphO1xuICBsZXQgYWx0ZXp6YTtcbiAgbGV0IG51bUNpcmNsZXM7XG5cbiAgaWYod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xuICAgIGFsdGV6emEgPSAzMDtcbiAgICBsYXJnaGV6emEgPSAxNztcbiAgICBudW1DaXJjbGVzID0gMjA7XG4gIH1lbHNle1xuICAgIGFsdGV6emEgPSAxNTA7XG4gICAgbGFyZ2hlenphID0gMTAwO1xuICAgIG51bUNpcmNsZXMgPSA1MDtcbiAgfVxuXG5cblxuICBsZXQgZ3JvdW5kO1xuICBsZXQgd2FsbDE7XG4gIGxldCB3YWxsMjtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGxldCB3ID0gY29udGVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IGggPSBjb250ZW50Lm9mZnNldEhlaWdodDtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcblxuICAgIGVuZ2luZS5yZW5kZXIuY2FudmFzLndpZHRoID0gdztcbiAgICBlbmdpbmUucmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgTWF0dGVyLkJvZHkuc2V0UG9zaXRpb24od2FsbDIsIE1hdHRlci5WZWN0b3IuY3JlYXRlKHcgKyAzMCwgaCAqIC41KSk7XG4gICAgTWF0dGVyLkJvZHkuc2V0UG9zaXRpb24oZ3JvdW5kLCBNYXR0ZXIuVmVjdG9yLmNyZWF0ZSh3ICogLjUsIGggKyAzMCkpO1xuXG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSBhIE1hdHRlci5qcyBlbmdpbmVcbiAgdmFyIGVuZ2luZSA9IE1hdHRlci5FbmdpbmUuY3JlYXRlKGNvbnRlbnQsIHtcbiAgICByZW5kZXI6IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRjAwXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbiAgd2luZG93LmVuZ2luZSA9IGVuZ2luZTtcblxuICB2YXIgbW91c2VDb25zdHJhaW50ID0gTWF0dGVyLk1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLCB7XG4gICAgY29uc3RyYWludDoge1xuICAgICAgcmVuZGVyOiB7XG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gIGxldCBjb2xvdXJzID0gW1wiI0Q4NTVEQVwiLCBcIiM0RkMwRkRcIiwgXCIjMjc5QjVGXCIsIFwiI0ZGQjMyNVwiXTtcblxuICBmdW5jdGlvbiBtYWtlUGF0dGVybihudW1lcm8sIHcpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gKHcgfHwgMTAgKyBNYXRoLnJhbmRvbSgpICogMjAgPj4gMCk7XG4gICAgY29uc29sZS5sb2cobnVtZXJvLCBcIm1ha2VwYXR0ZXJuXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvdXJzW251bWVyb107XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSAqIDIgPCAxKSB7XG4gICAgICBjdHguYXJjKGNhbnZhcy53aWR0aCAvIDIgPj4gMCwgY2FudmFzLndpZHRoIC8gMiA+PiAwLCBjYW52YXMud2lkdGggKiAoTWF0aC5yYW5kb20oKSAqIDAuNSksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIGN0eC5maWxsKClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhhbGYgPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgdmFyIGxpbmVIZWlnaHQgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoID4+IDA7XG4gICAgICBjdHgudHJhbnNsYXRlKGhhbGYsIGhhbGYpO1xuICAgICAgY3R4LnJvdGF0ZShNYXRoLnJhbmRvbSgpICogOTAgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgIGN0eC5maWxsUmVjdCgtY2FudmFzLndpZHRoLCAtbGluZUhlaWdodCAvIDIgPj4gMCwgY2FudmFzLndpZHRoICogMiwgbGluZUhlaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBjdHguY3JlYXRlUGF0dGVybihjYW52YXMsICdyZXBlYXQnKTtcbiAgfVxuXG5cbiAgZm9yKHZhciBpID0gMDsgaSA8IG51bUNpcmNsZXM7IGkrKylcbiAge1xuXG4gICAgbGV0IG51bWVybyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXG4gICAgY29uc29sZS5sb2cobnVtZXJvLCBcImxvb3BcIik7XG5cbiAgICB2YXIgeCA9IE1hdGgucmFuZG9tKCkgKiB3O1xuICAgIHZhciB5ID0gTWF0aC5yYW5kb20oKSAqIC0gaDtcbiAgICB2YXIgcm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMjcwO1xuICAgIHZhciBiYXNlID0gMTAwO1xuICAgIGlmKGJhc2UgPCA1KSBiYXNlID0gNVxuICAgIGlmKGJhc2UgPiAzMCkgYmFzZSA9IDMwXG4gICAgdmFyIG11bHRpcGxpZXIgPSB3IC8gMTBcbiAgICBpZihtdWx0aXBsaWVyIDwgMzApIG11bHRpcGxpZXIgPSAzMFxuICAgIGlmKG11bHRpcGxpZXIgPiAyMDApIG11bHRpcGxpZXIgPSAyMDBcbiAgICB2YXIgciA9IGJhc2VcbiAgICBsZXQgcmVjdGFuZ2xlID0gTWF0dGVyLkJvZGllcy5yZWN0YW5nbGUoeCwgeSwgMTAwLCAxNTAsIHtcbiAgICAgIHJlbmRlcjoge1xuICAgICAgICBmaWxsU3R5bGU6IG1ha2VQYXR0ZXJuKG51bWVybyksXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb2xvdXJzW251bWVyb10sXG4gICAgICAgIGxpbmVXaWR0aDogNixcbiAgICAgIH19KTtcbiAgICBNYXR0ZXIuQm9keS5yb3RhdGUocmVjdGFuZ2xlLCByb3RhdGlvbilcbiAgICBlbGVtZW50cy5wdXNoKHJlY3RhbmdsZSk7XG5cbiAgfVxuXG5cbiAgZ3JvdW5kID0gTWF0dGVyLkJvZGllcy5yZWN0YW5nbGUody8yLCBoKzMwLCB3KjUuLCA2MCwgeyBpc1N0YXRpYzogdHJ1ZSB9KTtcbiAgd2FsbDEgPSBNYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSgtMzAsIGgvMiwgNjAsIGgqMiwgeyBpc1N0YXRpYzogdHJ1ZSB9KTtcbiAgd2FsbDIgPSBNYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh3KzMwLCBoLzIsIDYwLCBoKjIsIHsgaXNTdGF0aWM6IHRydWUgfSk7XG5cbiAgd2luZG93LndhbGwyID0gd2FsbDI7XG4gIGVsZW1lbnRzLnB1c2goZ3JvdW5kKTtcbiAgZWxlbWVudHMucHVzaCh3YWxsMSk7XG4gIGVsZW1lbnRzLnB1c2god2FsbDIpO1xuXG4gIE1hdHRlci5Xb3JsZC5hZGQoZW5naW5lLndvcmxkLCBlbGVtZW50cyk7XG4gIE1hdHRlci5Xb3JsZC5hZGQoZW5naW5lLndvcmxkLCBtb3VzZUNvbnN0cmFpbnQpO1xuXG5cbiAgTWF0dGVyLkVuZ2luZS5ydW4oZW5naW5lKTtcbn0pO1xuIl0sImZpbGUiOiIuL3NyYy9qcy9saWJyYXJ5LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/library.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;