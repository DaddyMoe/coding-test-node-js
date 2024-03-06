import User from "../common/user";
const db = require("../db-config/database");

export default class UserService {
    public async createUser(params: User) {
        var insertQuery = 'INSERT INTO users (name, email, tokens) VALUES (?,?,?)'
        const { name, email, token } = params;
        return new Promise((resolve, reject) => {
            db.run(insertQuery, [name, email, token], function (err: { message: any; }) {
                if (err) {
                    reject(err.message);
                }
                resolve(token);
            })
        })
    }

    public async loginUser(params: User) {
        const token = params.email + "-token-" + params.password;
        var query = `SELECT id, name, email, tokens from users WHERE tokens = ?`;
        return new Promise(async (resolve, reject) => {
            await db.each(query, [token], (err: any, rows: any) => {
                if (err) {
                    reject(err.message);
                }
                resolve(rows);
            })
        })
    }

    public async getUsers() {
        var query = 'SELECT * from users';
        return new Promise(async (resolve, reject) => {
            await db.each(query, function (err: { message: any; }, row: any) {
                if (err) {
                    reject(err.message);
                }
                console.log("rows", row)
                resolve(row);
            })
        })
    }
}