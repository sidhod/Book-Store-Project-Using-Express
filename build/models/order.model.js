"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  books: [{
    productId: {
      type: String
    },
    description: {
      type: String
    },
    bookName: {
      type: String
    },
    bookImage: {
      type: String
    },
    author: {
      type: String
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    },
    discountPrice: {
      type: Number
    }
    // date: {
    //     type: String
    // }
  }]
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Order', userSchema);
exports["default"] = _default;