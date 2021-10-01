"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SVGChevronRight;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SVGChevronRight(props) {
  var _props$color;

  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  }));
}