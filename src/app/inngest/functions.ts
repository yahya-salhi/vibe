import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

import { Sandbox } from "@e2b/code-interpreter";

import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-nextjs-tes");

      return sandbox.sandboxId;
    });

    const summarize = createAgent({
      name: "summarizer",
      system: "You are an expert summarizer. You summarize content in 2 words",
      model: openai({
        model: "llama2", // Or any other model you have installed in Ollama
        baseUrl: "http://localhost:11434/v1",
      }),
    });
    const { output } = await summarize.run(`summarize ${event.data.value}`);
    const sanboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });
    return { output, sanboxUrl };
  }
);
export default helloWorld;
