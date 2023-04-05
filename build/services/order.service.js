"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBooksInOrder = exports.addToOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _order = _interopRequireDefault(require("../models/order.model"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var _books = _interopRequireDefault(require("../models/books.model"));
var getAllBooksInOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _order["default"].find();
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
  return function getAllBooksInOrder() {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllBooksInOrder = getAllBooksInOrder;
var addToOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body, _id) {
    var findBook, bookMatchFound, updateBookDetails, findCart, createNewCart, addToCart, addBookInCart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _books["default"].findOne({
              _id: _id
            });
          case 2:
            findBook = _context2.sent;
            bookMatchFound = false;
            updateBookDetails = {
              productId: findBook._id,
              description: findBook.description,
              bookName: findBook.bookName,
              bookImage: findBook.bookImage,
              author: findBook.author,
              price: findBook.price,
              discountPrice: findBook.discountPrice,
              quantity: findBook.quantity
              // date: `${name}`
            };
            if (!(findBook != null)) {
              _context2.next = 33;
              break;
            }
            _context2.next = 8;
            return _order["default"].findOne({
              userId: body.userId
            });
          case 8:
            findCart = _context2.sent;
            console.log(findCart);
            if (!(findCart == null)) {
              _context2.next = 17;
              break;
            }
            _context2.next = 13;
            return _order["default"].create({
              userId: body.userId,
              books: [updateBookDetails]
            });
          case 13:
            createNewCart = _context2.sent;
            return _context2.abrupt("return", createNewCart);
          case 17:
            findCart.books.forEach(function (object) {
              console.log("pass====>" + _id);
              console.log('product id==>' + object.productId);
              if (object.productId == _id) {
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context2.next = 26;
              break;
            }
            _context2.next = 21;
            return _order["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              books: findCart.books
            }, {
              "new": true
            });
          case 21:
            addToCart = _context2.sent;
            console.log(addToCart.books.length - 1);
            return _context2.abrupt("return", addToCart);
          case 26:
            _context2.next = 28;
            return _order["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              $push: {
                books: [updateBookDetails]
              }
            }, {
              "new": true
            });
          case 28:
            addBookInCart = _context2.sent;
            console.log(addBookInCart.books.length - 1);
            return _context2.abrupt("return", addBookInCart);
          case 31:
            _context2.next = 34;
            break;
          case 33:
            throw new Error("slot is negative");
          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function addToOrder(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addToOrder = addToOrder;