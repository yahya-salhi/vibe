import { Sandbox } from "@e2b/code-interpreter";

export async function getSandbox(snadboxId: string) {
  const sandbox = await Sandbox.connect(snadboxId);
  return sandbox;
}
