import { ExecuteContext } from "../@types";

export function action(this: ExecuteContext): ExecuteContext {
  const behavior = this.nextBehavior

  this.state = behavior.toState
  this.memory[this.head] = behavior.write
  if (behavior.action === "RIGHT") ++this.head
  else --this.head

  // head가 메모리보다 큰 경우 메모리 확장
  if (this.head >= this.memory.length) this.memory = [...this.memory, this.description.blank]

  // head가 음수인 경우 index[0]에 blank를 만들고 head를 0으로 바꿈
  if (this.head < 0) {
    this.memory = [this.description.blank, ...this.memory]
    this.head = 0
  }

  return this
}