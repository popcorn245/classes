import sql from "../connect";

export default class Base<T = any> {
    constructor() {

    }

    async find(id: number) {
        return ((await sql`SELECT * FROM user_account WHERE id = ${id}`)?.[0]) as T || null;
    }

    async list(): Promise<T[]> {
        return sql`SELECT * FROM user_account` as any;
    }

    create() {

    }

    update() {

    }

    delete() {

    }
}