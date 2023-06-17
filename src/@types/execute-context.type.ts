import { Description } from "./description.type";

export type ExecuteContext = {
  // constants
  input: string
  description: Description

  // variables
  head: number;
  memory: string[];
  state: string;
  nextBehavior: Description["transitions"][string][number] | null;

  // methods
  readHead: () => ExecuteContext;
  printProgramStatus: () => ExecuteContext;
}