"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var autosSchema = new _mongoose.Schema({
  marca: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  modelo: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Auto", autosSchema);
exports["default"] = _default;