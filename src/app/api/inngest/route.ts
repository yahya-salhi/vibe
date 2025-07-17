import { serve } from "inngest/next";
// Update the import path to the correct location of the inngest client
import { inngest } from "../../inngest/client";
import { helloWorld } from "../../inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld,
  ],
});
