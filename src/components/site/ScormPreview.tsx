import { Play, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Replace this placeholder card with a real SCORM player iframe.
// e.g. <iframe src={scormEntryUrl} className="h-full w-full" allowFullScreen />
export function ScormPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-4xl rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-elevated)]"
    >
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
        <span className="ml-3 text-xs text-muted-foreground">course-preview.scorm</span>
      </div>
      <div
        className="relative aspect-video w-full overflow-hidden rounded-2xl"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        {/* Placeholder iframe — wire SCORM entry HTML here later */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-6">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-elevated)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <MonitorPlay className="h-8 w-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-semibold text-foreground">SCORM Course Preview</h3>
            <p className="text-sm text-muted-foreground">Your uploaded course will play here.</p>
          </div>
          <Button
            size="lg"
            className="text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Play className="mr-2 h-4 w-4" />
            Play Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
