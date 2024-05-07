"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    isOpen,
    onClose,
    title,
    modalButtonText,
    modalButtonClose,
    modalBackgroundColor = "#fff",
    modalTextColor = "#000",
    modalBorderRadius = "15",
    modalBorderStyle = "solid",
    modalBorderWidth = "1",
    modalBorderColor = "#000",
    modalButtonBackgroundColor = "#fff",
    modalButtonTextColor = "#000",
    modalButtonRadius = "5",
    modalButtonBorderStyle = "solid",
    modalButtonBorderWidth = "1",
    modalButtonBorderColor = "000",
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "darkBG"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "centered"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: {
      background: modalBackgroundColor,
      borderRadius: modalBorderRadius + 'px',
      borderStyle: modalBorderStyle,
      borderWidth: modalBorderWidth + 'px',
      borderColor: modalBorderColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalHeader"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modalHeading",
    style: {
      color: modalTextColor
    }
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    className: "closeButton",
    onClick: onClose,
    style: {
      color: modalTextColor
    }
  }, "x")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent",
    style: {
      color: modalTextColor
    }
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalActions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: modalButtonClose,
    style: {
      background: modalButtonBackgroundColor,
      color: modalButtonTextColor,
      borderRadius: modalButtonRadius + 'px',
      borderStyle: modalButtonBorderStyle,
      borderWidth: modalButtonBorderWidth + 'px',
      borderColor: modalButtonBorderColor
    }
  }, modalButtonText))))));
}
var _default = exports.default = Modal;