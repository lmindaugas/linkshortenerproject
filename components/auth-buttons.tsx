"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroAuthButtons() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <SignUpButton mode="modal">
        <button className={cn(buttonVariants({ size: "lg" }), "gap-2 px-6")}>
          Get started free
          <ArrowRight className="size-4" />
        </button>
      </SignUpButton>
      <SignInButton mode="modal">
        <button className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}>
          Sign in
        </button>
      </SignInButton>
    </div>
  );
}

export function CtaSignUpButton() {
  return (
    <SignUpButton mode="modal">
      <button className={cn(buttonVariants({ size: "lg" }), "gap-2 px-8")}>
        Create your free account
        <ArrowRight className="size-4" />
      </button>
    </SignUpButton>
  );
}
