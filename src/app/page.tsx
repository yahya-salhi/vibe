import { trpc, getQueryClient } from "@/trpc/server";
import Client from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    trpc.createAi.queryOptions({ text: "world" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col items-center justify-center">
          <Client />
        </div>
      </Suspense>
    </HydrationBoundary>
  );
}
