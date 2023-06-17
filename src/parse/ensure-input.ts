import _ from "lodash";
import { Description } from "../@types";
import { InvalidInputError } from "../@errors";

// description.alphabet배열에 없는 알파벳이 input에 들어있는지 확인
export function ensureInput(description: Description, input: string): void {
  _.forEach(input, (char) => {
    if (!_.includes(description.alphabet, char))
      throw new InvalidInputError(input, char, description.alphabet);
  });
}
