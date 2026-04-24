import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Link2,
  BarChart2,
  Tag,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in seconds — no sign-up required to try.",
  },
  {
    icon: BarChart2,
    title: "Click analytics",
    description:
      "Track how many times each link is clicked so you always know how your content is performing.",
  },
  {
    icon: Tag,
    title: "Custom aliases",
    description:
      "Choose your own memorable slug instead of a random code — great for branded campaigns.",
  },
  {
    icon: Link2,
    title: "Manage all your links",
    description:
      "View, edit, and delete every link you've created from one simple dashboard.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Zap className="size-3" />
            Fast, free &amp; easy
          </span>
          <h1 className="max-w-2xl text-5xl font-bold tracking-tight">
            Shorten links.{" "}
            <span className="text-muted-foreground">Track results.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Turn unwieldy URLs into clean, shareable links in one click. Monitor
            clicks, create custom aliases, and manage everything from one
            dashboard.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SignUpButton mode="modal">
            <Button size="lg" className="gap-2 px-6">
              Get started free
              <ArrowRight className="size-4" />
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-6">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="max-w-md text-muted-foreground">
              A focused set of tools that covers the full link-management
              workflow without the clutter.
            </p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="flex flex-col gap-0">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to tidy up your links?
          </h2>
          <p className="text-muted-foreground">
            Create your free account and start shortening in seconds.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" className="gap-2 px-8">
              Create free account
              <ArrowRight className="size-4" />
            </Button>
          </SignUpButton>
        </div>
      </section>
    </div>
  );
}
