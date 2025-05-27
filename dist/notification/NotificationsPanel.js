"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsPanel = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _notificationsSlice = require("./notificationsSlice");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// NotificationsPanel.jsx

var NotificationsPanel = exports.NotificationsPanel = function NotificationsPanel() {
  var notifications = (0, _reactRedux.useSelector)(function (state) {
    return state.notifications.items;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'fixed',
      top: 10,
      right: 10,
      zIndex: 1000
    }
  }, notifications.map(function (n) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: n.id,
      style: {
        background: n.type === 'error' ? '#f44336' : n.type === 'success' ? '#4caf50' : '#2196f3',
        color: '#fff',
        padding: '10px 15px',
        marginBottom: 8,
        borderRadius: 4,
        minWidth: 200,
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }
    }, n.message, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return dispatch((0, _notificationsSlice.removeNotification)(n.id));
      },
      style: {
        marginLeft: 10,
        background: 'transparent',
        border: 'none',
        color: '#fff',
        cursor: 'pointer'
      }
    }, "\xD7"));
  }));
};