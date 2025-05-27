"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNotification = exports.pushNotification = exports.notificationsReducer = exports.clearNotifications = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  items: []
};
var notificationsSlice = (0, _toolkit.createSlice)({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    pushNotification: function pushNotification(state, action) {
      state.items.push(action.payload);
    },
    removeNotification: function removeNotification(state, action) {
      state.items = state.items.filter(function (n) {
        return n.id !== action.payload;
      });
    },
    clearNotifications: function clearNotifications(state) {
      state.items = [];
    }
  }
});
var _notificationsSlice$a = notificationsSlice.actions,
  pushNotification = exports.pushNotification = _notificationsSlice$a.pushNotification,
  removeNotification = exports.removeNotification = _notificationsSlice$a.removeNotification,
  clearNotifications = exports.clearNotifications = _notificationsSlice$a.clearNotifications;
var notificationsReducer = exports.notificationsReducer = notificationsSlice.reducer;