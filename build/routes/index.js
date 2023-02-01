"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.route"));
var _books = _interopRequireDefault(require("./books.route"));
var _cart = _interopRequireDefault(require("./cart.route"));
var _wishlist = _interopRequireDefault(require("./wishlist.route"));
var _customerdetail = _interopRequireDefault(require("./customerdetail.route"));
var router = _express["default"].Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/books', _books["default"]);
  router.use('/cart', _cart["default"]);
  router.use('/wishlist', _wishlist["default"]);
  router.use('/customerdetails', _customerdetail["default"]);
  return router;
};
var _default = routes;
exports["default"] = _default;