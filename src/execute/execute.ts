import { Description } from "../@types";
import { printTitle } from "./print-title";
import { printProgramDescription } from "./print-program-description";

export function execute(description: Description, input: string): void {
  printTitle(description.name);
  printProgramDescription(description);
}
