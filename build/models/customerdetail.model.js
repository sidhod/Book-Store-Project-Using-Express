"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var customerDetailsSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  customer: [{
    name: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    addressType: {
      type: String
    },
    fullAddress: {
      type: String
    },
    city: {
      type: String
    },
    landmark: {
      type: String
    },
    state: {
      type: String
    },
    pinCode: {
      type: String
    },
    locality: {
      type: String
    }
  }]
});
var _default = (0, _mongoose.model)('CustomerDetails', customerDetailsSchema);
exports["default"] = _default;