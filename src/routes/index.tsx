import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScormPreview } from "@/components/site/ScormPreview";
import { CourseCard } from "@/components/site/CourseCard";
import { Button } from "@/components/ui/button";
import {
  Star,
  ShieldCheck,
  Users,
  TrendingUp,
  Loader2,
  Phone,
  Calendar,
  Mail,
  Users2,
  Target,
} from "lucide-react";
import { CoursesAPI } from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alogic Data — Interactive SCORM Learning Platform" },
      {
        name: "description",
        content:
          "Premium LMS course preview platform. Experience engaging digital learning through interactive SCORM-based courses.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => (await CoursesAPI.list()).data,
  });

  const featured = courses?.[0] ?? null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              SCORM-ready • Built for enterprise training
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Interactive Learning Powered by{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Alogic Data
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Experience modern SCORM-based digital learning with a clean,
              engaging, and professional LMS interface.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-[oklch(0.78_0.18_85)]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-lg">{s}</span>
                ))}
              </div>
              <span className="font-semibold text-foreground">4.8/5</span>
              <span className="text-sm text-muted-foreground">(125+ Learners)</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                High Quality Content
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Engaging Learning
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Measurable Results
              </div>
            </div>
          </div>

          <div>
            <ScormPreview course={featured} />
          </div>
        </div>
      </section>

      {/* Featured + Coming Soon */}
      <section id="courses" className="bg-background scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 py-20 lg:grid-cols-2">
          {/* Featured */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Courses
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hand-picked SCORM modules ready to launch in your organization.
            </p>

            <div className="mt-8">
              {isLoading ? (
                <div className="flex items-center justify-center py-16 text-muted-foreground">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading courses…
                </div>
              ) : error ? (
                <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
                  Unable to load courses. Make sure the backend is running.
                </div>
              ) : !courses || courses.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                  <p className="font-medium text-foreground">No courses uploaded yet.</p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  {courses.slice(0, 4).map((c) => (
                    <CourseCard key={c._id} course={c} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Coming Soon
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Exciting new courses launching soon.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <ComingSoonCard
                title="Emotional Intelligence"
                description="Understand emotions and lead with empathy."
                gradient="linear-gradient(135deg, oklch(0.95 0.05 295), oklch(0.92 0.08 280))"
                iconBg="oklch(0.55 0.18 285)"
                Icon={Users2}
              />
              <ComingSoonCard
                title="Strategic Thinking"
                description="Make better decisions and drive business impact."
                gradient="linear-gradient(135deg, oklch(0.94 0.06 165), oklch(0.92 0.08 150))"
                iconBg="oklch(0.55 0.15 160)"
                Icon={Target}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-border bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-soft)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Let's Build a Better Learning Experience Together
                </h3>
                <p className="text-sm text-muted-foreground">
                  Talk to our experts or schedule a meeting to see how we can help your organization.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
              <Button
                className="text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Button>
              <Button variant="outline" className="border-border">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ComingSoonCard({
  title,
  description,
  gradient,
  iconBg,
  Icon,
}: {
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div
        className="flex aspect-[16/10] items-center justify-center"
        style={{ backgroundImage: gradient }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/85 backdrop-blur shadow-[var(--shadow-soft)]">
          <Icon className="h-8 w-8" style={{ color: iconBg }} />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <span
          className="inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-medium"
          style={{ backgroundColor: "oklch(0.96 0.02 280)", color: "oklch(0.4 0.15 280)" }}
        >
          Coming Soon
        </span>
      </div>
    </article>
  );
}
