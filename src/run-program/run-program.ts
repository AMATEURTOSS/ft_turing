import { Description, ExecuteContext } from "../@types";
import { readHead } from "./read-head";
import { printProgramStatus } from "../print/print-program-status";

export function runProgram(description: Description, input: string) {
  const executeContext: ExecuteContext = {
    // constants
    input,
    description,
    // variables
    head: 0,
    memory: input.split(""),
    state: description.initial,
    nextBehavior: null,
    // methods
    readHead,
    printProgramStatus,
  }

  executeContext
    .readHead()
    .printProgramStatus()
}