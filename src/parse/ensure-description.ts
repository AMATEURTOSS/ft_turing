import { forEach, includes } from "lodash";
import { Description } from "../@types";
import {
  DescriptionFieldMissingError,
  ForbiddenTransitionFieldError,
} from "../@errors";

function ensureDescriptionFieldList(description: Description) {
  if (!description.name)
    throw new DescriptionFieldMissingError("name", "string");
  if (!description.alphabet)
    throw new DescriptionFieldMissingError("alphabet", "string[]");
  if (!description.blank)
    throw new DescriptionFieldMissingError("blank", "string");
  if (!description.states)
    throw new DescriptionFieldMissingError("states", "string[]");
  if (!description.initial)
    throw new DescriptionFieldMissingError("initial", "string");
  if (!description.finals)
    throw new DescriptionFieldMissingError("finals", "string[]");
  if (!description.transitions)
    throw new DescriptionFieldMissingError("transitions", "object");
}

function ensureDescriptionFieldType(description: Description) {
  const allowedTransitionField = description.states;
  forEach(description.transitions, (_, key) => {
    if (!includes(allowedTransitionField, key))
      throw new ForbiddenTransitionFieldError(key, allowedTransitionField);
  });
}

export function ensureDescription(description: Description) {
  ensureDescriptionFieldList(description);
  ensureDescriptionFieldType(description);
}
