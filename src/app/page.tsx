"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Page() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));
  return (
    <div className="p-4 max-w-7xl max-auto ">
      <Button
        onClick={() => {
          invoke.mutate({ text: "yahya" });
        }}
      >
        invocke background job
      </Button>
    </div>
  );
}
