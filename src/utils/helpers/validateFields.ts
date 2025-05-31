export function areValidFields(fields: unknown[]): boolean {
  return fields.every((field) => {
    if (typeof field === "string") {
      return field.trim() !== "";
    }
    return field !== null && field !== undefined;
  });
}
