import { UserObject, VetObject } from "../types";
import Base from "./Base";
import User from "./User";

export default class Vet extends Base<VetObject> {
    constructor() {
        super({tableName: "vet"});
    }

    async withIntegrator({id}: {id: number}) {
        const results = await this.find(id) as VetObject & {integrator: UserObject | null};
        const users = new User();
        if (id && results?.integrator_id) {
            results.integrator = await users.find(results.integrator_id);
        }
        return results;
    }
}