"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_service_1 = __importDefault(require("../services/post.service"));
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = (0, express_1.Router)();
        this.srvPost = new post_service_1.default();
        this.getAllPosts = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.srvPost.getAllPosts(request);
                response.send(res);
            }
            catch (err) {
                response.send(err);
            }
        });
        this.createAPost = (request, response) => {
            const post = request.body;
            // this.posts.push(post);
            response.send(post);
        };
        this.intializeRoutes();
        this.srvPost = new post_service_1.default();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PostsController;
