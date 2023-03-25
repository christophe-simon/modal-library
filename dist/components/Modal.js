"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("../css/styles.css");
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onRequestClose = _ref.onRequestClose,
    children = _ref.children,
    closeText = _ref.closeText,
    closeClass = _ref.closeClass,
    showClose = _ref.showClose,
    fadeDuration = _ref.fadeDuration,
    fadeDelay = _ref.fadeDelay;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var modalRef = (0, _react.useRef)(null);
  var closeModal = function closeModal(event) {
    if (event) {
      event.preventDefault();
    }
    onRequestClose();
  };
  var handleDocumentKeydown = function handleDocumentKeydown(event) {
    if (event.which === 27) {
      closeModal();
    }
  };
  (0, _react.useEffect)(function () {
    if (isOpen) {
      setDisplay(true);
      document.addEventListener("keydown", handleDocumentKeydown);
    } else {
      setDisplay(false);
    }
    return function () {
      document.removeEventListener("keydown", handleDocumentKeydown);
    };
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    if (display) {
      var timer = setTimeout(function () {
        setShow(true);
      }, fadeDelay * fadeDuration);
      return function () {
        clearTimeout(timer);
      };
    } else {
      setShow(false);
    }
  }, [display, fadeDuration, fadeDelay]);
  var modalContentStyle = {
    transition: "opacity ".concat(fadeDuration, "ms ").concat(fadeDelay * fadeDuration, "ms")
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container ".concat(isOpen ? "open" : ""),
    onClick: closeModal,
    onKeyDown: handleDocumentKeydown
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content ".concat(show ? "show" : ""),
    ref: modalRef,
    style: modalContentStyle,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    onKeyDown: function onKeyDown(e) {
      return e.stopPropagation();
    }
  }, children, showClose && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "close-button ".concat(closeClass),
    onClick: closeModal,
    onKeyDown: handleDocumentKeydown
  }, /*#__PURE__*/_react["default"].createElement("span", null, closeText))));
}
Modal.defaultProps = {
  closeText: "x",
  closeClass: "",
  showClose: true,
  fadeDuration: 200,
  fadeDelay: 0.5
};
var _default = Modal;
exports["default"] = _default;