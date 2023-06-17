import * as fs from "fs";
import { Description } from "../@types";

export function getDescription(jsonFilePath: string): Description {
  const fd = fs.readFileSync(jsonFilePath);

  return JSON.parse(fd.toString("utf-8"));
}
