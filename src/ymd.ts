import { Clipboard, showHUD } from "@raycast/api";

export default async function Command() {
  const iso = new Date().toISOString().split("T")[0];

  await Clipboard.copy(iso);
  await showHUD(`Copied current date ${iso}`);
}
