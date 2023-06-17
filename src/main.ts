import { program } from "commander";
import { parse } from "./parse";
import { printTitle, printProgramDescription } from "./print";
import { runProgram } from "./run-program";

function main() {
  program
    .argument("jsonFile", "json description of the machine")
    .argument("input", "input of the machine")
    .parse();

  const { description, input } = parse(program.args[0], program.args[1]);

  printTitle(description.name)
  printProgramDescription(description)

  runProgram(description, input)
}

try {
  main();
} catch (e) {
  if (e instanceof Error) console.error(e.message);
  else console.error(e);
}
