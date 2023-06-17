export class InvalidInputError extends Error {
  constructor(input: string, char: string, allowedInputList: string[]) {
    super(
      `Invalid input: {${input}}\n` +
        `Character {${char}} is not allowed\n` +
        `Allowed character: [${allowedInputList}]`
    );
  }
}
