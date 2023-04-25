"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBookFromCart = exports.increaseBook = exports.getBookById = exports.getAllBooks = exports.decreaseBook = exports.addToCart = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var _books = _interopRequireDefault(require("../models/books.model"));
var _object = _interopRequireDefault(require("@hapi/joi/lib/types/object"));
var _logger = _interopRequireDefault(require("../config/logger"));
//get all books
var getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _cart["default"].find();
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
var getBookById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body, _id) {
    var findCart, arr;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 2:
            findCart = _context2.sent;
            if (!(findCart != null)) {
              _context2.next = 9;
              break;
            }
            _logger["default"].info("find===>" + findCart + _id);
            findCart.books.forEach(function (object) {
              if (object.productId == _id) {
                arr = findCart.books.slice(findCart.books.indexOf(object), 1);
              }
            });
            return _context2.abrupt("return", arr);
          case 9:
            throw new Error("slot is negative");
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getBookById(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBookById = getBookById;
var addToCart = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body, _id) {
    var findBook, bookMatchFound, updateBookDetails, findCart, createNewCart, _addToCart, addBookInCart;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _books["default"].findOne({
              _id: _id
            });
          case 2:
            findBook = _context3.sent;
            bookMatchFound = false;
            updateBookDetails = {
              productId: findBook._id,
              description: findBook.description,
              bookName: findBook.bookName,
              bookImage: findBook.bookImage,
              author: findBook.author,
              price: findBook.price,
              discountPrice: findBook.discountPrice
            };
            if (!(findBook != null)) {
              _context3.next = 30;
              break;
            }
            _context3.next = 8;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 8:
            findCart = _context3.sent;
            if (!(findCart == null)) {
              _context3.next = 16;
              break;
            }
            _context3.next = 12;
            return _cart["default"].create({
              userId: body.userId,
              books: [updateBookDetails]
            });
          case 12:
            createNewCart = _context3.sent;
            return _context3.abrupt("return", createNewCart);
          case 16:
            findCart.books.forEach(function (object) {
              _logger["default"].info('product id==>' + object.productId);
              if (object.productId == _id) {
                object.quantity += 1;
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context3.next = 24;
              break;
            }
            _context3.next = 20;
            return _cart["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              books: findCart.books
            }, {
              "new": true
            });
          case 20:
            _addToCart = _context3.sent;
            return _context3.abrupt("return", _addToCart.books[_addToCart.books.length - 1]);
          case 24:
            _context3.next = 26;
            return _cart["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              $push: {
                books: [updateBookDetails]
              }
            }, {
              "new": true
            });
          case 26:
            addBookInCart = _context3.sent;
            return _context3.abrupt("return", addBookInCart.books);
          case 28:
            _context3.next = 31;
            break;
          case 30:
            throw new Error("slot is negative");
          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function addToCart(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

//remove book from cart
exports.addToCart = addToCart;
var removeBookFromCart = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body, _id) {
    var bookMatchFound, findCart, _removeBookFromCart;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // console.log("id===>" + body)
            // const findBook = await Book.findOne({ _id: _id });
            bookMatchFound = false; // if (findBook != null) {
            _context4.next = 3;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 3:
            findCart = _context4.sent;
            if (!(findCart != null)) {
              _context4.next = 17;
              break;
            }
            _logger["default"].info("find===>" + findCart + _id);
            findCart.books.forEach(function (object) {
              if (object.productId == _id) {
                findCart.books.splice(findCart.books.indexOf(object), 1);
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context4.next = 14;
              break;
            }
            _context4.next = 10;
            return _cart["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              books: findCart.books
            }, {
              "new": true
            });
          case 10:
            _removeBookFromCart = _context4.sent;
            return _context4.abrupt("return", _removeBookFromCart);
          case 14:
            throw new Error("Book does not exist in cart");
          case 15:
            _context4.next = 18;
            break;
          case 17:
            throw new Error("Cart does not exist!!!");
          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function removeBookFromCart(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

//increase quntity of book
exports.removeBookFromCart = removeBookFromCart;
var increaseBook = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body, _id) {
    var bookMatchFound, findCart, increaseQuantity;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            bookMatchFound = false;
            _context5.next = 3;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 3:
            findCart = _context5.sent;
            if (!(findCart != null)) {
              _context5.next = 16;
              break;
            }
            findCart.books.forEach(function (object) {
              if (object.productId == _id) {
                object.quantity += 1;
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context5.next = 13;
              break;
            }
            _context5.next = 9;
            return _cart["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              books: findCart.books
            }, {
              "new": true
            });
          case 9:
            increaseQuantity = _context5.sent;
            return _context5.abrupt("return", increaseQuantity);
          case 13:
            throw new Error("Book does not exist in cart");
          case 14:
            _context5.next = 17;
            break;
          case 16:
            throw new Error("Cart does not exist!!!");
          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function increaseBook(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

// decrease quntity of book
exports.increaseBook = increaseBook;
var decreaseBook = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body, _id) {
    var bookMatchFound, findCart, increaseQuantity;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            bookMatchFound = false;
            _context6.next = 3;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 3:
            findCart = _context6.sent;
            _logger["default"].info("Find cart==>", findCart);
            if (!(findCart != null)) {
              _context6.next = 18;
              break;
            }
            console.log(_id);
            findCart.books.forEach(function (object) {
              if (object.productId == _id) {
                if (object.quantity <= 1) {
                  findCart.books.splice(findCart.books.indexOf(object), 1);
                } else {
                  object.quantity -= 1;
                }
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context6.next = 15;
              break;
            }
            _context6.next = 11;
            return _cart["default"].findOneAndUpdate({
              _id: findCart._id
            }, {
              books: findCart.books
            }, {
              "new": true
            });
          case 11:
            increaseQuantity = _context6.sent;
            return _context6.abrupt("return", increaseQuantity);
          case 15:
            throw new Error("Book does not exist in cart");
          case 16:
            _context6.next = 19;
            break;
          case 18:
            throw new Error("Cart does not exist!!!");
          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function decreaseBook(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
exports.decreaseBook = decreaseBook;