import { Description, ExecuteContext } from "../@types";

export function runProgram(description: Description, input: string) {
  const executeContext: ExecuteContext = {
    // constants
    input,
    description,
    // variables
    head: 0,
    memory: input.split(""),
    state: description.initial,
  }
  void executeContext
}