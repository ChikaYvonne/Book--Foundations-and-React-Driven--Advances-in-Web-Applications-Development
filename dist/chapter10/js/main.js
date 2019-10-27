/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/chapter10/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chapter10/index.js":
/*!********************************!*\
  !*** ./src/chapter10/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/chapter10/tools.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(waitList);\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"The temperature is \", \" degrees centigrade. The day is \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar log = function log(output) {\n  document.getElementById(\"output\").innerHTML = output;\n}; //For illustration, call the function above to log an output\n\n\nlog(\"Welcome to Chapter 10!\");\n/*\r\nimport log1, {appName, dummyFunction} from './tools';\r\nlog1(`Welcome to Chapter 10! The application name is \"${appName}\".\r\nThere is a function that returns \"${dummyFunction()}\".`)\r\n*/\n\n\n/*\r\n…\r\n//leave the previous log() statements intact for reference.\r\n*/\n//Output Tagged template\n\nObject(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"weatherTag\"])(_templateObject(), 30));\n\nObject(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"genericFunction\"])(2, 3, 4, 6, 8, 9, 10.5, 12));\n\nvar person1 = new _tools__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](\"Pius\", \"Onobhayedo\", \"Male\", 1.7);\nvar person2 = new _tools__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](\"Mary\", \"Joseph\", \"Female\", undefined);\nperson1.firstName = \"peter\"; //here we have deliberately used lowercase for first letter\n\nperson2.firstName = \"maria\"; //here we have deliberately used lowercase for first letter\n\nObject(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Person 1 is \".concat(person1.getFirstName(), \" whose height is \").concat(person1.height, \". Person 2 is $\\n{person2.getFirstName()} whose height is \").concat(person2.height)); //using getFirstName() to get firstName.\n\n\nObject(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tools__WEBPACK_IMPORTED_MODULE_0__[\"CustomMath\"].sqrt(100));\n/*\r\nimport log7, {User} from './tools';\r\nlet user1 = new User(\"myusername\",\"mypassword\",\"Pius\",\"Onobhayedo\",\"Male\",undefined);\r\nlog7(`The username of ${user1.firstName} is ${user1.username}`)\r\n\r\nnew Promise((resolve, reject) => {\r\n    setTimeout(()=>{\r\n        resolve(\"Timeout is over\"); //send out a success feedback with data using resolve\r\n        }, 1000) //set timeout for 1000ms i.e. 1second.\r\n    }).then((data) => {\r\n        log7(`${data}`);//This should output \"Timeout is over\"\r\n    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.\r\n        log7(`${error}`);\r\n    });\r\n    //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.\r\nimport log7, {User} from './tools';      \r\nlet user1 = new User(\"myusername\",\"mypassword\",\"Pius\",\"Onobhayedo\",\"Male\",undefined);\r\nlog7(`The username of ${user1.firstName} is ${user1.username}`)\r\n\r\n*/\n\nnew Promise(function (resolve, reject) {\n  setTimeout(function () {\n    reject(\"Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!\"); //send out a rejectfeedback\n  }, 1000);\n}).then(function (data) {\n  Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\".concat(data)); //This should output \"Timeout is over\" if resolve(\"Timeout is over\") is invoked\n})[\"catch\"](function (error) {\n  //This will only be reached it the asynchronous function returned a reject statement.\n  Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Error message received: \".concat(error));\n}); //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.\n\n\nvar user1 = new _tools__WEBPACK_IMPORTED_MODULE_0__[\"User\"](\"myusername\", \"mypassword\", \"Pius\", \"Onobhayedo\", \"Male\", undefined);\nObject(_tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"The username of \".concat(user1.firstName, \" is \").concat(user1.username));\nnew Promise(function (resolve, reject) {\n  setTimeout(function () {\n    reject(\"Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I amsending a <em>reject</em> instead of a <em>resolve</em>!\"); //send out a reject feedback\n  }, 1000);\n}).then(function (data) {\n  log(\"\".concat(data)); //This should output \"Timeout is over\"\n})[\"catch\"](function (error) {\n  //This will only be reached it the asynchronous function returned a reject statement.\n  log(\"Error message received: \".concat(error));\n}).then(function () {\n  log(\"This function is executed after success or failure is returned\");\n});\nvar url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1\n\nfetch(url).then(function (response) {\n  return response.json();\n}) //convert data returned to json\n.then(function (data) {\n  return log(\"Data: Id = \".concat(data.id, \", Name = \").concat(data.name, \", Email = \").concat(data.email));\n}) //use the json data\n[\"catch\"](function (error) {\n  return log(\"Error: \".concat(error));\n}); //Define the function that will return new Promise that wraps the asynchronous call to setTimeout()\n\nvar promiseAwareTimeout = function promiseAwareTimeout() {\n  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n  //The function expects milliseconds to be passed. If notpassed, milliseconds parameter defaults to 1000\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      resolve(\"Timeout of \".concat(milliseconds, \" milliseconds is over\")); //send out a success feedback with data usingresolve\n    }, milliseconds); //set timeout for passed milliseconds. Defaults to 1000\n  });\n}; //define a function that uses our Promise executor\n\n\nvar usePromiseAwareTimeout =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(milliseconds) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            log('About to call timeout');\n            _context.prev = 1;\n            _context.t0 = log;\n            _context.next = 5;\n            return promiseAwareTimeout(milliseconds);\n\n          case 5:\n            _context.t1 = _context.sent;\n            (0, _context.t0)(_context.t1);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t2 = _context[\"catch\"](1);\n            log(_context.t2);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function usePromiseAwareTimeout(_x) {\n    return _ref.apply(this, arguments);\n  };\n}(); //call the async function.\n\n\nusePromiseAwareTimeout(3000);\n\nfunction waitList(list) {\n  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, person;\n\n  return regeneratorRuntime.wrap(function waitList$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _iteratorNormalCompletion = true;\n          _didIteratorError = false;\n          _iteratorError = undefined;\n          _context2.prev = 3;\n          _iterator = list[Symbol.iterator]();\n\n        case 5:\n          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n            _context2.next = 12;\n            break;\n          }\n\n          person = _step.value;\n          _context2.next = 9;\n          return person;\n\n        case 9:\n          _iteratorNormalCompletion = true;\n          _context2.next = 5;\n          break;\n\n        case 12:\n          _context2.next = 18;\n          break;\n\n        case 14:\n          _context2.prev = 14;\n          _context2.t0 = _context2[\"catch\"](3);\n          _didIteratorError = true;\n          _iteratorError = _context2.t0;\n\n        case 18:\n          _context2.prev = 18;\n          _context2.prev = 19;\n\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n\n        case 21:\n          _context2.prev = 21;\n\n          if (!_didIteratorError) {\n            _context2.next = 24;\n            break;\n          }\n\n          throw _iteratorError;\n\n        case 24:\n          return _context2.finish(21);\n\n        case 25:\n          return _context2.finish(18);\n\n        case 26:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked, null, [[3, 14, 18, 26], [19,, 21, 25]]);\n}\n\nvar myWaitList = waitList(['Peter', 'Mary', 'John']); //call waitList\n//Prepare the output.\n\nvar output = \"The first yielded value is: \".concat(myWaitList.next().value, \" <br/>\\n    Here is what is returned in the next call: \").concat(myWaitList.next().value, \" <br/>\\n    Hopefully we still have room for a next call. Here is the return: \").concat(myWaitList.next().value, \" <br/>\\n    What if we call again when there is no more value to yield. Here is what we get: \").concat(myWaitList.next().value);\nlog(output);\n\n//# sourceURL=webpack:///./src/chapter10/index.js?");

/***/ }),

/***/ "./src/chapter10/tools.js":
/*!********************************!*\
  !*** ./src/chapter10/tools.js ***!
  \********************************/
/*! exports provided: appName, dummyFunction, weatherTag, default, genericFunction1, genericFunction, Person, CustomMath, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appName\", function() { return appName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dummyFunction\", function() { return dummyFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherTag\", function() { return weatherTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericFunction1\", function() { return genericFunction1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericFunction\", function() { return genericFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomMath\", function() { return CustomMath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar llog = function llog(output) {\n  document.getElementById(\"output\").innerHTML = output;\n};\n/*\r\nvar log1 = function(output){\r\n    document.getElementById(\"output\").innerHTML = output;\r\n};\r\n\r\nexport var appName = \"Chapter 10 Code Illustrations\";\r\n\r\nexport var dummyFunction = function(){\r\n    return \"I am a dummy function\";\r\n}\r\n\r\nexport default log1;\r\n\r\nexport var weatherTag = function(string, temperature){\r\n    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.\r\n    //We can capture these two parts as array elements\r\n    var substring0 = string[0];\r\n    var substring1 = string[1];\r\n    var weatherCondition;\r\n    //Let us use the embedded expressions for some logic\r\n    if (temperature > 26){\r\n        weatherCondition = \"hot day\"\r\n    }else{\r\n        weatherCondition = \"cool day\"\r\n    }\r\n    return `${substring0}${temperature}${substring1}${weatherCondition}`\r\n}\r\n*/\n\n/*\r\nvar log3 = output => {\r\n    document.getElementById(\"output\").innerHTML = output;\r\n}\r\nexport var appName = \"Chapter 10 Code Illustrations\";\r\nexport var dummyFunction = () => {\r\n    return \"I am a dummy function\";\r\n}\r\nexport var weatherTag = (string, temperature) =>{\r\n    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.\r\n    //We can capture these two parts as array elements\r\n    var substring0 = string[0];\r\n    var substring1 = string[1];\r\n    var weatherCondition;\r\n    //Let us use the embedded expressions for some logic\r\n    if (temperature > 26){\r\n    weatherCondition = \"hot!\"\r\n    }else{\r\n    weatherCondition = \"cool!\"\r\n    }\r\n    return `${substring0}${temperature}${substring1}${weatherCondition}`\r\n}\r\nexport default log3;\r\n*/\n\n\nvar log3 = function log3(output) {\n  document.getElementById(\"output\").innerHTML = output;\n};\n\nvar appName = \"Chapter 10 Code Illustrations\";\nvar dummyFunction = function dummyFunction() {\n  return \"I am a dummy function\";\n};\nvar weatherTag = function weatherTag(string, temperature) {\n  //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions.\n  //We can capture these two parts as array elements\n  var substring0 = string[0];\n  var substring1 = string[1];\n  var weatherCondition; //Let us use the embedded expressions for some logic\n\n  if (temperature > 26) {\n    weatherCondition = \"hot!\";\n  } else {\n    weatherCondition = \"cool!\";\n  }\n\n  return \"\".concat(substring0).concat(temperature).concat(substring1).concat(weatherCondition);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (log3);\nvar genericFunction1 = function genericFunction1() {\n  var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements\n\n  var firstLang = languages[0],\n      secondLang = languages[1],\n      otherLanguages = languages.slice(2); //assign first element in languages array to firstLang and secondelement to secondLang.\n\n  return \"First language is \".concat(firstLang, \" and the second is \").concat(secondLang);\n};\nvar genericFunction = function genericFunction(m, c) {\n  for (var _len = arguments.length, x = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    x[_key - 2] = arguments[_key];\n  }\n\n  //This function returns an array of {x,y} objects for all the x arguments passed.\n  //Map the array of x into an array of {x,y} object, with the y value calculated each time.\n  var coordinates = x.map(function (x) {\n    return {\n      'x': x,\n      'y': m * x + c\n    };\n  }); //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below\n\n  var output = 'The (x,y) values are as follows: ';\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = coordinates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var coordinate = _step.value;\n      var xy = \"(\".concat(coordinate.x, \",\").concat(coordinate.y, \")\");\n      output += xy;\n    } //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)\n    //coordinates.forEach((coordinate)=>{\n    // let xy = `(${coordinate.x},${coordinate.y})`;\n    // output+=xy;\n    //})\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return output;\n}; //Create a function that will capitalize the first letter of a string.\n\nvar toTitleCase = function toTitleCase(str) {\n  str.toLowerCase(); //first set the whole string to lowercase in case\n\n  return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1); //replace the first character with its uppercase\n};\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(firstName, lastName, gender, height) {\n    _classCallCheck(this, Person);\n\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.gender = gender;\n    this.height = height;\n  }\n\n  _createClass(Person, [{\n    key: \"getFirstName\",\n    value: function getFirstName() {\n      return toTitleCase(this.firstName);\n    }\n  }]);\n\n  return Person;\n}();\n;\nvar CustomMath =\n/*#__PURE__*/\nfunction () {\n  function CustomMath() {\n    _classCallCheck(this, CustomMath);\n  }\n\n  _createClass(CustomMath, null, [{\n    key: \"sqrt\",\n    value: function sqrt(a) {\n      return Math.sqrt(a);\n    }\n  }, {\n    key: \"pow\",\n    value: function pow(a, b) {\n      return Math.pow(a, b);\n    }\n  }]);\n\n  return CustomMath;\n}();\nvar User =\n/*#__PURE__*/\nfunction (_Person) {\n  _inherits(User, _Person);\n\n  function User(username, password, firstName, lastName, gender, height) {\n    var _this;\n\n    _classCallCheck(this, User);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, firstName, lastName, gender, height));\n    _this.username = username;\n    _this.password = password;\n    return _this;\n  }\n\n  return User;\n}(Person);\n\n//# sourceURL=webpack:///./src/chapter10/tools.js?");

/***/ })

/******/ });