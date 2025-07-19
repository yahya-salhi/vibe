"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Page() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));
  const [value, setValue] = useState("");
  return (
    <div className="p-4 max-w-7xl max-auto ">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={() => {
          invoke.mutate({ value: value });
        }}
      >
        invocke background job
      </Button>
    </div>
  );
}
