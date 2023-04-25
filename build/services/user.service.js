"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.newUserRegistration = exports.loginUser = exports.getUser = exports.getAllUsers = exports.deleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _logger = _interopRequireDefault(require("../config/logger"));
//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].find();
          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

//create new user
exports.getAllUsers = getAllUsers;
var newUserRegistration = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var saltRounds, hash, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            saltRounds = 10;
            hash = _bcrypt["default"].hashSync(body.password, saltRounds);
            body.password = hash;
            _context2.next = 5;
            return _user["default"].create(body);
          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function newUserRegistration(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//login user
exports.newUserRegistration = newUserRegistration;
var loginUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var email, data, passwordvalidator, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _logger["default"].info("login:".concat(body.email));
            email = body.email;
            _context3.next = 4;
            return _user["default"].find({
              email: email
            });
          case 4:
            data = _context3.sent;
            if (!(data.length !== 0)) {
              _context3.next = 17;
              break;
            }
            _context3.next = 8;
            return _bcrypt["default"].compare(body.password, data[0].password);
          case 8:
            passwordvalidator = _context3.sent;
            if (!passwordvalidator) {
              _context3.next = 14;
              break;
            }
            token = _jsonwebtoken["default"].sign({
              email: data[0].email,
              firstName: data[0].firstName,
              id: data[0]._id
            }, process.env.SECRET_KEY);
            return _context3.abrupt("return", token);
          case 14:
            throw new Error('Password Is incorrect.....');
          case 15:
            _context3.next = 18;
            break;
          case 17:
            throw new Error('Email Is incorrect.....');
          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function loginUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

//update single user
exports.loginUser = loginUser;
var updateUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _user["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });
          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function updateUser(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

//delete single user
exports.updateUser = updateUser;
var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _user["default"].findByIdAndDelete(id);
          case 2:
            return _context5.abrupt("return", '');
          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

//get single user
exports.deleteUser = deleteUser;
var getUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _user["default"].findById(id);
          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data);
          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getUser(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getUser = getUser;