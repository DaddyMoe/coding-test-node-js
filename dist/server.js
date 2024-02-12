"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const post_controller_1 = __importDefault(require("./controllers/post.controller"));
const app = new app_1.default([new post_controller_1.default()], 4000);
app.listen();
