"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  description: {
    type: String
  },
  discountPrice: {
    type: Number
  },
  bookImage: {
    type: String
  },
  bookName: {
    type: String
  },
  author: {
    type: String
  },
  quantity: {
    type: Number,
    "default": 1
  },
  price: {
    type: Number
  }
});
var _default = (0, _mongoose.model)('Book', userSchema, 'Books');
exports["default"] = _default;