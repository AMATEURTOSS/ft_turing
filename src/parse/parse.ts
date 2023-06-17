import { getDescription } from "./get-description";
import { ensureInput } from "./ensure-input";
import { ensureDescription } from "./ensure-description";

export function parse(descriptionPath: string, input: string) {
  const description = getDescription(descriptionPath);

  ensureDescription(description);
  ensureInput(description, input);

  return {
    description,
    input,
  };
}
