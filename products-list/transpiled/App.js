"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productItemView = function productItemView(product) {
  return _react2.default.createElement(
    "li",
    { style: { padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px" } },
    _react2.default.createElement(
      "b",
      null,
      product
    ),
    " ",
    _react2.default.createElement("br", null),
    "$ ",
    (Math.random() * 100).toFixed(2),
    " ",
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      "button",
      null,
      "Buy"
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    "section",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Products"
    ),
    _react2.default.createElement(
      "ul",
      { style: { display: 'flex', padding: '0' } },
      ['Rice', 'Beans', 'Fries', 'Steak'].map(productItemView)
    )
  );
};