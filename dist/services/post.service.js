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
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db-config/database");
class PostsService {
    getAllPosts(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "select * from post";
            const params = [];
            return new Promise((resolve, reject) => {
                db.all(sql, params, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({
                        "message": "success",
                        "data": rows
                    });
                });
            });
        });
    }
    createPost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var insertQuery = 'INSERT INTO post (title, content) VALUES (?,?)';
            const { title, content } = params;
            return new Promise((resolve, reject) => {
                db.run(insertQuery, [title, content], function (err) {
                    if (err) {
                        reject(err.message);
                    }
                    resolve("done");
                });
            });
        });
    }
    updatePost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var updateQuery = 'UPDATE post SET title = ?, content = ? WHERE id = ?';
            const { title, content, id } = params;
            return new Promise((resolve, reject) => {
                db.run(updateQuery, [title, content, id], function (err) {
                    if (err) {
                        reject(err.message);
                    }
                    resolve("done");
                });
            });
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = 'DELETE FROM post WHERE id = ?';
            return new Promise((resolve, reject) => {
                db.run(query, [id], function (err) {
                    if (err) {
                        reject(err.message);
                    }
                    resolve("Post is deleted");
                });
            });
        });
    }
}
exports.default = PostsService;
