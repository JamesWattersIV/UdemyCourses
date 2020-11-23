import { User } from "./Models/User";

const user = new User({ name: "Jimbo", age: 99 });

user.save();
