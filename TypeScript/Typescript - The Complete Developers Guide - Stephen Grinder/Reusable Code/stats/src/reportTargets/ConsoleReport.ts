import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  print(reprot: string): void {
    console.log(reprot);
  }
}
