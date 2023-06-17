import { program } from "commander";
import { parse } from "./parse";

function main() {
  program
    .argument("jsonFile", "json description of the machine")
    .argument("input", "input of the machine")
    .parse();

  const { description, input } = parse(program.args[0], program.args[1]);
}

try {
  main();
} catch (e) {
  if (e instanceof Error) console.error(e.message);
  else console.error(e);
}
