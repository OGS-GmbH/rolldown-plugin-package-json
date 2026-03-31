import { WithEnabled } from "./types";

function isEnabled<T extends boolean | WithEnabled<unknown> | undefined>(option: T): boolean {
  if (option === undefined) return false;

  if (typeof option === "boolean") return option;

  return option.enabled;
}

export { isEnabled };
