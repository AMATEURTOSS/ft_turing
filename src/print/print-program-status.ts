import { ExecuteContext } from "../@types";

export function printProgramStatus(this: ExecuteContext): ExecuteContext {
  console.log(
    `[${this.memory}] (${this.state}, ${this.memory[this.head]}) ` +
    `=> (${this.nextBehavior?.toState} ${this.nextBehavior?.write} ${this.nextBehavior?.action})`
  )
  return this
}