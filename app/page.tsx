import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Shorten your links instantly
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Create short, memorable links and track their performance — all in one
          place.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <Button size="lg" className="gap-2 px-6">
              Get started free
              <ArrowRight className="size-4" />
            </Button>
          </SignUpButton>
        </div>
      </main>
    </div>
  );
}
