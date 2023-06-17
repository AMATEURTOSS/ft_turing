export class ForbiddenTransitionFieldError extends Error {
  constructor(fieldName: string, allowedTransitionFieldList: string[]) {
    super(
      `Forbidden transition field: {${fieldName}}\n` +
        `Allowed transition field list: [${allowedTransitionFieldList}]`
    );
  }
}
