import User from "./models/User";
import Vet from "./models/Vet";

(async () => {
    const users = new User();
    const userList = await users.list();
    console.log(userList);
    const user = await users.find(1);
    console.log(user);
    const vets = new Vet();
    const vetList = await vets.list({limit: 1}); 
    console.log(vetList);
    const vet = await vets.withIntegrator({id: 1});
    console.log(vet);
    console.log("Hello World!!! ^_^");
})();

