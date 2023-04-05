"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBookFromWishList = exports.getAllBooks = exports.addTowishList = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));
var _books = _interopRequireDefault(require("../models/books.model"));
//get all books
var getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _wishlist["default"].find();
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

//add Book In wishlist
exports.getAllBooks = getAllBooks;
var addTowishList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body, _id) {
    var findBook, bookMatchFound, updateBookDetails, findInWishList, createNewCart, addBookInCart;
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
              discountPrice: findBook.discountPrice
            };
            if (!(findBook != null)) {
              _context2.next = 29;
              break;
            }
            if (!(findBook.quantity >= 1)) {
              _context2.next = 26;
              break;
            }
            _context2.next = 9;
            return _wishlist["default"].findOne({
              userId: body.userId
            });
          case 9:
            findInWishList = _context2.sent;
            console.log(findInWishList);
            if (!(findInWishList == null)) {
              _context2.next = 18;
              break;
            }
            _context2.next = 14;
            return _wishlist["default"].create({
              userId: body.userId,
              books: [updateBookDetails]
            });
          case 14:
            createNewCart = _context2.sent;
            return _context2.abrupt("return", createNewCart);
          case 18:
            findInWishList.books.forEach(function (object) {
              console.log("pass====>" + _id);
              console.log('product id==>' + object.productId);
              if (object.productId == _id) {
                throw new Error("Book Is Present In Wish List");
              }
              bookMatchFound = true;
            });
            if (!(bookMatchFound === true)) {
              _context2.next = 24;
              break;
            }
            _context2.next = 22;
            return _wishlist["default"].findOneAndUpdate({
              _id: findInWishList._id
            }, {
              $push: {
                books: [updateBookDetails]
              }
            }, {
              "new": true
            });
          case 22:
            addBookInCart = _context2.sent;
            return _context2.abrupt("return", addBookInCart);
          case 24:
            _context2.next = 27;
            break;
          case 26:
            throw new Error("slot is negative");
          case 27:
            _context2.next = 30;
            break;
          case 29:
            throw new Error("Slot of Book is not found!!!");
          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function addTowishList(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

//remove book from wish list
exports.addTowishList = addTowishList;
var removeBookFromWishList = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body, _id) {
    var bookMatchFound, findInWishList, _removeBookFromWishList;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bookMatchFound = false;
            _context3.next = 3;
            return _wishlist["default"].findOne({
              userId: body.userId
            });
          case 3:
            findInWishList = _context3.sent;
            if (!(findInWishList != null)) {
              _context3.next = 16;
              break;
            }
            findInWishList.books.forEach(function (object) {
              if (object.productId == _id) {
                findInWishList.books.splice(findInWishList.books.indexOf(object), 1);
                bookMatchFound = true;
              }
            });
            if (!(bookMatchFound == true)) {
              _context3.next = 13;
              break;
            }
            _context3.next = 9;
            return _wishlist["default"].findOneAndUpdate({
              _id: findInWishList._id
            }, {
              books: findInWishList.books
            }, {
              "new": true
            });
          case 9:
            _removeBookFromWishList = _context3.sent;
            return _context3.abrupt("return", _removeBookFromWishList);
          case 13:
            throw new Error("Book does not exist in Wish List");
          case 14:
            _context3.next = 17;
            break;
          case 16:
            throw new Error("Wish List does not exist!!!");
          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function removeBookFromWishList(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.removeBookFromWishList = removeBookFromWishList;