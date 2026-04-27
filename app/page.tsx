import { HeroAuthButtons, CtaSignUpButton } from "@/components/auth-buttons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link2, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Shorten Any URL",
    description:
      "Paste any long URL and get a clean, compact short link in seconds. Share it anywhere with confidence.",
  },
  {
    icon: BarChart3,
    title: "Track Every Click",
    description:
      "See exactly how many times your links are clicked. Make data-driven decisions with real-time analytics.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your links are protected and always available. We handle uptime so your audience never hits a dead end.",
  },
  {
    icon: Zap,
    title: "Instant Redirects",
    description:
      "Lightning-fast redirects keep your audience moving. No delays, no friction — just seamless navigation.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Link2 className="size-3" />
            Free to use · No credit card required
          </span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Shorten links.
            <br />
            <span className="text-muted-foreground">Track results.</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Create short, memorable links in seconds and gain insights into
            every click. The simplest way to manage and share your URLs.
          </p>
        </div>

        <HeroAuthButtons />
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Everything you need to manage your links
            </h2>
            <p className="max-w-lg text-muted-foreground">
              A focused set of features to help you shorten, share, and
              understand your links — nothing more, nothing less.
            </p>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground">
            Join today and start creating short links in under a minute.
          </p>
          <CtaSignUpButton />
        </div>
      </section>
    </div>
  );
}
