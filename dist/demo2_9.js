"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = padLeft;
// 在字符串左边加指定数量空格的方法
function padLeft(value, padding) {
    if (typeof padding === "number") {
        var n = Math.max(0, Math.floor(padding));
        return " ".repeat(n) + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}
