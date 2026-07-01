import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { assetUrl, type ApiCourse } from "@/lib/api";

export function ScormPreview({ course }: { course?: ApiCourse | null }) {
  const navigate = useNavigate();

  const thumb = course?.thumbnail ? assetUrl(course.thumbnail) : null;
  const title = course?.title ?? "Leadership Excellence Program";

  const handleStart = () => {
    if (!course) return;
    navigate({ to: "/course/$id", params: { id: course._id } });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-elevated)] sm:rounded-2xl sm:p-3">
      {/* Browser top bar */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[oklch(0.7_0.2_25)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[oklch(0.8_0.18_80)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[oklch(0.75_0.18_145)] sm:h-3 sm:w-3" />

        {/* <span className="ml-2 min-w-0 flex-1 truncate text-xs font-medium text-foreground sm:ml-3 sm:text-sm">
          {title}
        </span> */}
      </div>

      <div
        className="relative aspect-video w-full overflow-hidden rounded-lg sm:aspect-[16/10] sm:rounded-xl"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        {thumb && (
          <img
            src={thumb}
            alt={title}
            className="absolute inset-0 h-full w-full object-contain bg-black sm:object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Center play button */}
        {/* <button
          onClick={handleStart}
          disabled={!course}
          className="absolute left-1/2 top-[42%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:w-14 lg:h-16 lg:w-16 lg:rounded-2xl"
          style={{ backgroundImage: "var(--gradient-primary)" }}
          aria-label="Play course"
        >
          <Play className="h-5 w-5 fill-current sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
        </button> */}

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-3 text-center text-white sm:p-4 lg:p-6">
          <h3 className="hidden line-clamp-1 text-sm font-bold drop-shadow sm:block sm:text-lg lg:text-2xl">
            {title}
          </h3>

          {/* <p className="mt-1 hidden text-sm text-white/90 sm:block">
            Build skills. Inspire teams. Drive results.
          </p> */}

          <div className="mt-1.5 hidden items-center justify-center gap-1 text-xs sm:mt-2 sm:flex sm:gap-1.5 sm:text-sm">
            <span className="text-[oklch(0.85_0.18_85)]">★★★★★</span>
            <span className="font-semibold">4.8</span>
            <span className="text-white/80">
              ({course?.views ?? 125}+ Learners)
            </span>
          </div>

          <Button
            onClick={handleStart}
            disabled={!course}
            size="sm"
            className="mt-2 h-8 rounded-lg border-0 px-3 text-xs text-primary-foreground shadow-[var(--shadow-soft)] sm:mt-4 sm:h-9 sm:px-4 sm:text-sm lg:h-10 "
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Play className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
            Start Course
          </Button>
        </div>
      </div>
    </div>
  );
}