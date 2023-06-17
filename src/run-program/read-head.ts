import { find } from "lodash";
import { ExecuteContext } from "../@types";

export function readHead(this: ExecuteContext): ExecuteContext {
  const transition = this.description.transitions[this.state];

  this.nextBehavior = find(transition, { read: this.memory[this.head] })!;
  return this;
}