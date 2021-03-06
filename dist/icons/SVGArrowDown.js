"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SVGArrowDown;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SVGArrowDown(props) {
  var _props$color;

  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : "currentColor",
    className: "bi bi-arrow-down",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
  }));
}