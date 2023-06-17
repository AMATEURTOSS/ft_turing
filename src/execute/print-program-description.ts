import { forEach } from "lodash";
import { Description } from "@types";
import { printPartition } from "@utils";

function printAlphabet(alphabet: string[]): void {
  console.log(`Alphabet: [ ${alphabet} ]`);
}

function printStates(states: string[]): void {
  console.log(`States: [ ${states} ]`);
}

function printInitial(initial: string): void {
  console.log(`Initial: ${initial}`);
}

function printFinals(finals: string[]): void {
  console.log(`Finals: [ ${finals} ]`);
}

function printTransitions(transitions: Description["transitions"]): void {
  forEach(transitions, (transition, key) => {
    forEach(transition, (desc) => {
      console.log(
        `(${key}, ${desc.read}) => (${desc.toState}, ${desc.write}, ${desc.action})`
      );
    });
  });
}

export function printProgramDescription(description: Description) {
  printAlphabet(description.alphabet);
  printStates(description.states);
  printInitial(description.initial);
  printFinals(description.finals);
  printTransitions(description.transitions);
  printPartition();
}
