import { UserObject } from "../types";
import Base from "./Base";

export default class User extends Base<UserObject> {
    constructor() {
        super({tableName: "user_account"});
    }
}