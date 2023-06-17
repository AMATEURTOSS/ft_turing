import { Description, ExecuteContext } from "../@types";
import { readHead } from "./read-head";
import { printProgramStatus } from "../print/print-program-status";
import { action } from "./action";
import { includes } from "lodash";

export function runProgram(description: Description, input: string) {
  const executeContext: ExecuteContext = {
    // constants
    input,
    description,
    // variables
    head: 0,
    memory: input.split(""),
    state: description.initial,
    nextBehavior: null as any,
    // methods
    readHead,
    printProgramStatus,
    action,
  }


  while (!includes(description.finals, executeContext.state)) {
    executeContext
      .readHead()
      .printProgramStatus()
      .action()
  }
}