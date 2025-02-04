import User from "./models/User";

(async () => {
    const users = new User();
    const userList = await users.list();
    console.log(userList);
    const user = await users.find(1);
    console.log(user);
    console.log("Hello World!!! ^_^");
})();

