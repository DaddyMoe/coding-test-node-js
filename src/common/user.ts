export default interface User {
    _id?: number;
    name: string;
    email: string;
    token?: string;
    password: string;
};