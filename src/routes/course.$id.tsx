import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Eye, Loader2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CoursesAPI, assetUrl } from "@/lib/api";

export const Route = createFileRoute("/course/$id")({
  head: () => ({
    meta: [
      { title: "Course Player — Alogic Data" },
      {
        name: "description",
        content: "Play SCORM course content in the Alogic Data LMS.",
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
    <div className="flex min-h-screen flex-col bg-background">


      <main className="w-full  ">
        <Link
          to="/"
          className="mb-1 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
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


    </div>
  );
}