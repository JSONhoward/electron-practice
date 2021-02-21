"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var MainProcess_1 = __importDefault(require("./Main/MainProcess"));
MainProcess_1.default.start(electron_1.app);
//# sourceMappingURL=main.js.map