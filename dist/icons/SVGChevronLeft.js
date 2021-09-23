"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SVGChevronLeft;

function SVGChevronLeft(props) {
  var _props$color;

  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  }));
}