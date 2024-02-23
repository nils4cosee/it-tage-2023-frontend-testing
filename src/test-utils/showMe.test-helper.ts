import { debug } from "vitest-preview";
import "@/main.scss";

// Use this small wrapper to avoid exhaustive auto-completion for the debug command
// of vitest-preview.
// It also imports all relevant css, which is usually not needed.
export function showMe() {
  debug();
}
