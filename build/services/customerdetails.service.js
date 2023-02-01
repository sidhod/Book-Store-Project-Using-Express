"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDetails = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _customerdetail = _interopRequireDefault(require("../models/customerdetail.model"));
//add customer details
var addDetails = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var updateCustomerDetails, findCustomer, addCustomerDetails, createNewCustomer;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updateCustomerDetails = {
              name: body.name,
              phoneNumber: body.phoneNumber,
              addressType: body.addressType,
              fullAddress: body.fullAddress,
              city: body.city,
              landmark: body.landmark,
              state: body.state,
              pinCode: body.pinCode,
              locality: body.locality
            };
            _context.next = 3;
            return _customerdetail["default"].findOne({
              userId: body.userId
            });
          case 3:
            findCustomer = _context.sent;
            if (!(findCustomer != null)) {
              _context.next = 11;
              break;
            }
            _context.next = 7;
            return _customerdetail["default"].findOneAndUpdate({
              _id: findCustomer._id
            }, {
              $push: {
                customer: updateCustomerDetails
              }
            }, {
              "new": true
            });
          case 7:
            addCustomerDetails = _context.sent;
            return _context.abrupt("return", addCustomerDetails);
          case 11:
            _context.next = 13;
            return _customerdetail["default"].create({
              userId: body.userId,
              customer: [updateCustomerDetails]
            });
          case 13:
            createNewCustomer = _context.sent;
            return _context.abrupt("return", createNewCustomer);
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function addDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.addDetails = addDetails;