"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = padLeft;
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}
