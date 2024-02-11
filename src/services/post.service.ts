import Post from "../common/common";

const db = require("../db-config/database");

export default class PostsService {
    public async getAllPosts(request: any) {
        const sql = "select * from post"
        const params: [] = [];
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err: Object, rows: Object) => {
                if (err) {
                    reject(err)
                }
                resolve({
                    "message": "success",
                    "data": rows
                })
            });
        })
    }


    public async createPost(params: Post) {
        var insertQuery = 'INSERT INTO post (title, content) VALUES (?,?)'
        const { title, content } = params;
        return new Promise((resolve, reject) => {
            db.run(insertQuery, [title, content], function (err: { message: any; }) {
                if (err) {
                    reject(err.message);
                }
                resolve("done");
            })
        })
    }


    public async updatePost(params: Post) {
        var insertQuery = 'UPDATE INTO post (title, content) VALUES (?,?)'
        const { title, content } = params;
        // return new Promise((resolve, reject) => {
        //     db.run(insertQuery, [title, content], function (err: { message: any; }) {
        //         if (err) {
        //             reject(err.message);
        //         }
        //         resolve("done");
        //     })
        // })
    }

    public async deletePost(params: Post) {
        var insertQuery = 'INSERT INTO post (title, content) VALUES (?,?)'
        const { title, content } = params;
        // return new Promise((resolve, reject) => {
        //     db.run(insertQuery, [title, content], function (err: { message: any; }) {
        //         if (err) {
        //             reject(err.message);
        //         }
        //         resolve("done");
        //     })
        // })
    }
}