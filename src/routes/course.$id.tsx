import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Eye, Loader2, Maximize, Minimize } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { CoursesAPI, assetUrl } from "@/lib/api";

export const Route = createFileRoute("/course/$id")({
  head: () => ({
    meta: [
      { title: "Course Player — Alogic Data" },
      { name: "description", content: "Play SCORM course content in the Alogic Data LMS." },
    ],
  }),
  component: CoursePlayerPage,
});

function CoursePlayerPage() {
  const { id } = Route.useParams();
  const { data: course, isLoading, error } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => (await CoursesAPI.get(id)).data,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to courses
        </Link>

        {isLoading ? (
          <div className="flex items-center justify-center py-24 text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Loading course…
          </div>
        ) : error || !course ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            Unable to load this course.
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {course.title}
                </h1>
                <p className="mt-2 max-w-2xl text-muted-foreground">{course.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 self-start rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                <Eye className="h-3.5 w-3.5" />
                {(course.views ?? 0).toLocaleString()} views
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
              {course.launchUrl ? (
                <iframe
                  src={assetUrl(course.launchUrl)}
                  title={course.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="block w-full"
                  style={{ height: 700, border: 0 }}
                />
              ) : (
                <div className="flex h-[700px] items-center justify-center text-muted-foreground">
                  This course does not have a launch URL configured.
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
