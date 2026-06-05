import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScormPreview } from "@/components/site/ScormPreview";
import { CourseCard } from "@/components/site/CourseCard";
import { dummyCourses } from "@/lib/dummy-courses";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LearnSphere — Interactive SCORM Learning Platform" },
      {
        name: "description",
        content:
          "Premium LMS course preview platform. Experience engaging digital learning through interactive SCORM-based courses.",
      },
      { property: "og:title", content: "LearnSphere — Interactive SCORM Learning Platform" },
      {
        property: "og:description",
        content: "Experience engaging digital learning through interactive SCORM-based courses.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary shadow-[var(--shadow-soft)]">
              <Sparkles className="h-3.5 w-3.5" />
              SCORM-ready • Built for enterprise training
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn Smarter with Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Interactive LMS
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Experience engaging digital learning through interactive SCORM-based courses.
            </p>
          </div>

          <div className="mt-14">
            <ScormPreview />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hand-picked SCORM modules ready to launch in your organization.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
