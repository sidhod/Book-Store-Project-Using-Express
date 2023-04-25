"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortondateBooks = exports.sortBooks = exports.searchBooks = exports.paginationBooks = exports.getAllBooks = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _books = _interopRequireDefault(require("../models/books.model"));
//get all users
var getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _books["default"].find();
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
  return function getAllBooks() {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllBooks = getAllBooks;
var paginationBooks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(currentPage) {
    var booksPerPage, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            booksPerPage = 4;
            _context2.next = 3;
            return _books["default"].find().limit(booksPerPage).skip(currentPage * booksPerPage);
          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function paginationBooks(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.paginationBooks = paginationBooks;
var searchBooks = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _books["default"].find({
              bookName: {
                $regex: "".concat(body.search),
                $options: "i"
              }
            });
          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function searchBooks(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
exports.searchBooks = searchBooks;
var sortBooks = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _books["default"].find().sort({
              price: 1
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
  return function sortBooks() {
    return _ref4.apply(this, arguments);
  };
}();
exports.sortBooks = sortBooks;
var sortondateBooks = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _books["default"].find().sort({
              createdAt: 1
            });
          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data);
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function sortondateBooks() {
    return _ref5.apply(this, arguments);
  };
}();
exports.sortondateBooks = sortondateBooks;