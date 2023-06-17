export class DescriptionFieldMissingError extends Error {
  constructor(fieldName: string, requiredType: string) {
    super(`Missing field: ${fieldName} <${requiredType}>`);
  }
}
