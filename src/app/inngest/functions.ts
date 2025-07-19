import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarize = createAgent({
      name: "summarizer",
      system: "You are an expert summarizer. You summarize content in 2 words",
      model: openai({
        model: "llama2", // Or any other model you have installed in Ollama
        baseUrl: "http://localhost:11434/v1",
      }),
    });
    const { output } = await summarize.run(`summarize ${event.data.value}`);
    return { output };
  }
);
export default helloWorld;
