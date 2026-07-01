import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Eye, Loader2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CoursesAPI, assetUrl } from "@/lib/api";

export const Route = createFileRoute("/course/$id")({
  head: () => ({
    meta: [
      { title: "Course Player — ALogicData" },
      {
        name: "description",
        content: "Play SCORM course content in the ALogicData LMS.",
      },
    ],
  }),
  component: CoursePlayerPage,
});

function CoursePlayerPage() {
  const { id } = Route.useParams();

  const { data: course, isLoading, error } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await CoursesAPI.get(id);
      // Return only the course object from backend response
      return res.data.course;
    },
  });

  return (
<div className="flex h-screen w-full max-w-full flex-col overflow-hidden bg-background">
  <main className="flex h-full w-full max-w-full flex-col overflow-hidden px-3 py-3 sm:px-6 lg:px-8">
    <Link
      to="/"
      className="mb-3 inline-flex shrink-0 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to courses
    </Link>

    {isLoading ? (
      <div className="flex flex-1 items-center justify-center text-muted-foreground">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Loading course…
      </div>
    ) : error || !course ? (
      <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground sm:p-10">
        Unable to load this course.
      </div>
    ) : (
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-elevated)] sm:rounded-2xl">
        {course.launchUrl ? (
          <iframe
            src={assetUrl(course.launchUrl)}
            title={course.title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
            This course does not have a launch URL configured.
          </div>
        )}
      </div>
    )}
  </main>
</div>
  );
}