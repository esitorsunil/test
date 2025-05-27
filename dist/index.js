"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  NotificationsPanel: true
};
Object.defineProperty(exports, "NotificationsPanel", {
  enumerable: true,
  get: function get() {
    return _NotificationsPanel.NotificationsPanel;
  }
});
var _NotificationsPanel = require("./notification/NotificationsPanel");
var _notificationsSlice = require("./notification/notificationsSlice");
Object.keys(_notificationsSlice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _notificationsSlice[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notificationsSlice[key];
    }
  });
});