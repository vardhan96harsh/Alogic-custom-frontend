import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { assetUrl, type ApiCourse } from "@/lib/api";

export function ScormPreview({ course }: { course?: ApiCourse | null }) {
  const navigate = useNavigate();
  const thumb = course?.thumbnail ? assetUrl(course.thumbnail) : null;
  const title = course?.title ?? "Leadership Excellence Program";

  return (
    <div className="relative w-full rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-elevated)]">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.2_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.18_80)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.18_145)]" />
        <span className="ml-3 text-sm font-medium text-foreground truncate">{title}</span>
      </div>

      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-xl"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        {thumb && (
          <img
            src={thumb}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Center play button */}
        <button
          onClick={() =>
            course && navigate({ to: "/course/$id", params: { id: course._id } })
          }
          disabled={!course}
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
          style={{ backgroundImage: "var(--gradient-primary)" }}
          aria-label="Play course"
        >
          <Play className="h-7 w-7 fill-current" />
        </button>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
          <h3 className="text-2xl font-bold drop-shadow hidden ">{title}</h3>
          <p className="mt-1 text-sm text-white/90 hidden md:block">
            Build skills. Inspire teams. Drive results.
          </p>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-sm">
            <span className="text-[oklch(0.85_0.18_85)]">★★★★★</span>
            <span className="font-semibold">4.8</span>
            <span className="text-white/80">({(course?.views ?? 125) + "+ Learners"})</span>
          </div>
          <Button
            onClick={() =>
              course && navigate({ to: "/course/$id", params: { id: course._id } })
            }
            disabled={!course}
            className="mt-4 text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Play className="mr-2 h-4 w-4" />
            Start Course
          </Button>
        </div>
      </div>
    </div>
  );
}
