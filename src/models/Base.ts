import sql from "../connect";

export default class Base<T = any> {
    tableName: string;
    limit = 15;

    constructor({tableName, limit}: {tableName: string; limit?: number}) {
        this.tableName = tableName;
        if (limit) this.limit = limit;
    }

    async find(id: number) {
        return ((await sql`SELECT * FROM ${sql(this.tableName)} WHERE id = ${id}`)?.[0]) as T || null;
    }

    async list({limit}: {limit?: number} = {}): Promise<T[]> {
        const currentLimit = limit || this.limit;
        return sql`SELECT * FROM ${sql(this.tableName)} ${currentLimit ? sql`LIMIT ${currentLimit}` : ''}` as any;
    }

    create() {

    }

    update() {

    }

    delete() {

    }
}