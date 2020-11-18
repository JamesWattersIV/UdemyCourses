import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const customMap = new Map("map");
customMap.addMarker(user);
customMap.addMarker(company);
