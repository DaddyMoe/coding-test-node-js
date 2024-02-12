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
        this.subPath = this.path + "/post/:id/";
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
        this.createAPost = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const post = request.body;
            try {
                let res = yield this.srvPost.createPost(post);
                response.send(res);
                ;
            }
            catch (err) {
                response.send(err);
            }
        });
        this.updatePost = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const post = request.body;
            post.id = Number(request.params.id);
            try {
                let res = yield this.srvPost.updatePost(post);
                response.send(res);
                ;
            }
            catch (err) {
                response.send(err);
            }
        });
        this.deletePost = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(request.params.id);
            try {
                let res = yield this.srvPost.deletePost(id);
                response.send(res);
                ;
            }
            catch (err) {
                response.send(err);
            }
        });
        this.intializeRoutes();
        this.srvPost = new post_service_1.default();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
        this.router.put(this.subPath, this.updatePost);
        this.router.delete(this.subPath, this.deletePost);
    }
}
exports.default = PostsController;
