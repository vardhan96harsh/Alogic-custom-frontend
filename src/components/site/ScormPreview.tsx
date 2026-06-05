import { Play, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { assetUrl, type ApiCourse } from "@/lib/api";

export function ScormPreview({ course }: { course?: ApiCourse | null }) {
  const navigate = useNavigate();
  const thumb = course?.thumbnail ? assetUrl(course.thumbnail) : null;

  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-elevated)]">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
        <span className="ml-3 text-xs text-muted-foreground">
          {course ? `${course.title.toLowerCase().replace(/\s+/g, "-")}.scorm` : "course-preview.scorm"}
        </span>
      </div>
      <div
        className="relative aspect-video w-full overflow-hidden rounded-2xl"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        {thumb && (
          <img
            src={thumb}
            alt={course?.title}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-6">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-elevated)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <MonitorPlay className="h-8 w-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-semibold text-foreground">
              {course?.title ?? "SCORM Course Preview"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {course?.description ?? "Your uploaded course will play here."}
            </p>
          </div>
          <Button
            size="lg"
            onClick={() =>
              course
                ? navigate({ to: "/course/$id", params: { id: course._id } })
                : undefined
            }
            disabled={!course}
            className="text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Play className="mr-2 h-4 w-4" />
            {course ? "Play Course" : "Play Preview"}
          </Button>
        </div>
      </div>
    </div>
  );
}
