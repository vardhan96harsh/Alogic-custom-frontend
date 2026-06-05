import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { assetUrl, CoursesAPI, type ApiCourse } from "@/lib/api";

export function CourseCard({ course }: { course: ApiCourse }) {
  const navigate = useNavigate();

  const handleStart = async () => {
    try {
      // Hits backend to increment views, then navigate to the player.
      await CoursesAPI.get(course._id);
    } catch {
      // Non-fatal: still navigate so the user can attempt to play.
    }
    navigate({ to: "/course/$id", params: { id: course._id } });
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {course.thumbnail ? (
          <img
            src={assetUrl(course.thumbnail)}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {course.title}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            <Eye className="h-3 w-3" />
            {(course.views ?? 0).toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {course.description}
        </p>
        <Button
          onClick={handleStart}
          className="mt-2 w-full text-primary-foreground border-0"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <Play className="mr-2 h-4 w-4" />
          Start Course
        </Button>
      </div>
    </article>
  );
}
