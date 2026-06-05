import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import type { Course } from "@/lib/dummy-courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={course.thumbnail}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{course.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{course.description}</p>
        <Button
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
