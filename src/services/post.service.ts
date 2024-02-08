const db = require("../db-config/database");

export default class PostsService {
    public async getAllPosts(request: any) {
        const sql = "select * from post"
        const params: [] = [];
        return new Promise((resolve, reject) =>
        {
            db.all(sql, params, (err: Object, rows: Object) => {
                if (err) {
                    reject(err)
                }
                resolve ({
                    "message": "success",
                    "data": rows
                })
            });
        })
    }
}