/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _questions = __webpack_require__(1);
	
	var _questions2 = _interopRequireDefault(_questions);
	
	var _questionsGenerator = __webpack_require__(2);
	
	var _User = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var questionsIt = (0, _questionsGenerator.generateQuestions)(_questions2.default, new _User.User());
	
	document.getElementById('sendButton').addEventListener('click', function () {
	  var _document$getElementB = document.getElementById('textBox');
	
	  var text = _document$getElementB.value;
	
	
	  if (Commands.isValidCommand(text)) {
	    Commands.executeCommand(text);
	    return;
	  }
	
	  var _questionsIt$next = questionsIt.next(text);
	
	  var reply = _questionsIt$next.value;
	  var done = _questionsIt$next.done;
	
	
	  if (Array.isArray(reply)) {
	    var answers = reply.reduce(function (initial, answer) {
	      return initial == "" ? answer : initial + ', ' + answer;
	    }, '');
	    console.log('I didn\'t understand... [' + answers + ']');
	  } else if (done) {} else document.getElementById('chat').appendChild(reply);
	});
	
	document.getElementById('chat').appendChild(questionsIt.next().value);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  id: 1,
	  text: "Hello, how are you?",
	  answers: [{ text: "fine", goto: 2 }, { text: "bad", goto: 3 }]
	}, {
	  id: 2,
	  text: "Great! Is it sunny where you leave?",
	  answers: [{ text: 'yes', goto: 4 }, { text: 'no', goto: 4 }]
	}, {
	  id: 3,
	  text: "What happened?",
	  answers: [{ text: "bad day", goto: 4 }]
	}, {
	  id: 4,
	  text: "What is your firstname?",
	  answerMapTo: { property: "firstname", goto: 5 }
	}, {
	  id: 5,
	  text: "What is your lastname?",
	  answerMapTo: { property: "lastname", goto: 6 }
	}, {
	  id: 6,
	  text: "What is your job title?",
	  answerMapTo: { property: "jobTitle", goto: 7 }
	}, {
	  id: 7,
	  text: "What is you badge number?",
	  answerMapTo: { property: "badgeNumber" }
	}];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.generateQuestions = generateQuestions;
	
	var _marked = [generateQuestions].map(regeneratorRuntime.mark);
	
	function generateQuestions() {
	  var _this = this;
	
	  var questions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var user = arguments[1];
	
	  var question, answer, _ret, _ret2;
	
	  return regeneratorRuntime.wrap(function generateQuestions$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          if (!(questions.length == 0)) {
	            _context3.next = 2;
	            break;
	          }
	
	          return _context3.abrupt("return");
	
	        case 2:
	          question = questions[0];
	          _context3.next = 5;
	          return question.text;
	
	        case 5:
	          answer = _context3.sent;
	
	        case 6:
	          if (false) {
	            _context3.next = 21;
	            break;
	          }
	
	          if (!question.answerMapTo) {
	            _context3.next = 14;
	            break;
	          }
	
	          return _context3.delegateYield(regeneratorRuntime.mark(function _callee() {
	            var _question$answerMapTo, property, goto;
	
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _question$answerMapTo = question.answerMapTo;
	                    property = _question$answerMapTo.property;
	                    goto = _question$answerMapTo.goto;
	
	                    user[property] = answer;
	
	                    if (goto) {
	                      _context.next = 8;
	                      break;
	                    }
	
	                    return _context.abrupt("return", {
	                      v: user
	                    });
	
	                  case 8:
	                    question = questions.find(function (_ref) {
	                      var id = _ref.id;
	                      return id == goto;
	                    });
	                    _context.next = 11;
	                    return question.text;
	
	                  case 11:
	                    answer = _context.sent;
	
	                  case 12:
	                  case "end":
	                    return _context.stop();
	                }
	              }
	            }, _callee, _this);
	          })(), "t0", 9);
	
	        case 9:
	          _ret = _context3.t0;
	
	          if (!((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object")) {
	            _context3.next = 12;
	            break;
	          }
	
	          return _context3.abrupt("return", _ret.v);
	
	        case 12:
	          _context3.next = 19;
	          break;
	
	        case 14:
	          if (!question.answers) {
	            _context3.next = 19;
	            break;
	          }
	
	          return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
	            var foundAnswer;
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	              while (1) {
	                switch (_context2.prev = _context2.next) {
	                  case 0:
	                    foundAnswer = question.answers.find(function (_ref2) {
	                      var text = _ref2.text;
	                      return text.toLowerCase() == answer.toLowerCase();
	                    });
	
	                    if (foundAnswer) {
	                      _context2.next = 7;
	                      break;
	                    }
	
	                    _context2.next = 4;
	                    return question.answers.map(function (_ref3) {
	                      var text = _ref3.text;
	                      return text;
	                    });
	
	                  case 4:
	                    answer = _context2.sent;
	                    _context2.next = 15;
	                    break;
	
	                  case 7:
	                    if (foundAnswer.goto) {
	                      _context2.next = 11;
	                      break;
	                    }
	
	                    return _context2.abrupt("return", {
	                      v: user
	                    });
	
	                  case 11:
	                    question = questions.find(function (_ref4) {
	                      var id = _ref4.id;
	                      return id == foundAnswer.goto;
	                    });
	                    _context2.next = 14;
	                    return question.text;
	
	                  case 14:
	                    answer = _context2.sent;
	
	                  case 15:
	                  case "end":
	                    return _context2.stop();
	                }
	              }
	            }, _callee2, _this);
	          })(), "t1", 16);
	
	        case 16:
	          _ret2 = _context3.t1;
	
	          if (!((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object")) {
	            _context3.next = 19;
	            break;
	          }
	
	          return _context3.abrupt("return", _ret2.v);
	
	        case 19:
	          _context3.next = 6;
	          break;
	
	        case 21:
	        case "end":
	          return _context3.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.User = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Person2 = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var User = exports.User = function (_Person) {
	  _inherits(User, _Person);
	
	  function User() {
	    _classCallCheck(this, User);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this));
	
	    _this.badgeNumber = '';
	    _this.jobTitle = '';
	    return _this;
	  }
	
	  _createClass(User, [{
	    key: 'getJobCard',
	    value: function getJobCard() {
	      return this.badgeNumber + ' : ' + this.getFullname() + ', ' + this.jobTitle;
	    }
	  }]);

	  return User;
	}(_Person2.Person);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Person = exports.Person = function () {
	  function Person() {
	    _classCallCheck(this, Person);
	
	    this.firstname = '';
	    this.lastname = '';
	  }
	
	  _createClass(Person, [{
	    key: 'getFullname',
	    value: function getFullname() {
	      return this.firstname + ' ' + this.lastname;
	    }
	  }]);

	  return Person;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map