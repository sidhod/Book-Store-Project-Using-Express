"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  firstName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;