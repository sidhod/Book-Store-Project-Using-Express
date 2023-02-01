"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    firstName: _joi["default"].string().min(5).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(4).max(10).required(),
    mobileNumber: _joi["default"].string().min(10).required()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: "".concat(error)
    });
  } else {
    req.validatedBody = value;
    console.log(value);
    next();
  }
};
exports.newUserValidator = newUserValidator;