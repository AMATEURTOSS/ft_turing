import { ExecuteContext } from "../@types";
import { forEach } from "lodash";

function memoryToString(memory: string[], head: number): string {
  let ret = ""

  forEach(memory, (char, idx) => {
    if (head === idx) ret += `<${char}>`
    else ret += char
  })

  return ret
}

export function printProgramStatus(this: ExecuteContext): ExecuteContext {
  console.log(
    `[${memoryToString(this.memory, this.head)}] (${this.state}, ${this.memory[this.head]}) ` +
    `=> (${this.nextBehavior.toState} ${this.nextBehavior.write} ${this.nextBehavior.action})`
  )
  return this
}