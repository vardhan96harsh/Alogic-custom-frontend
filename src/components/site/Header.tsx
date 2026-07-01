import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ScheduleMeetingDialog } from "@/components/site/ScheduleMeetingDialog";
import { useEffect } from "react";

const COMPANY_WEBSITE = "https://alogicdata.com";

export function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === ",") {
        e.preventDefault();
        navigate({ to: "/login" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-md">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-16">
        <a
          href={COMPANY_WEBSITE}
          target="_blank"
          rel="noreferrer"
          className="flex items-baseline gap-1.5"
          aria-label="Alogic Data"
        >
          <span
            className="text-lg font-bold tracking-tight sm:text-xl"
            style={{ color: "oklch(0.18 0.06 256)" }}
          >
            Alogic
          </span>

          <span
            className="bg-clip-text text-lg font-bold tracking-tight text-transparent sm:text-xl"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Data
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-3">
          <ScheduleMeetingDialog
            trigger={
              <Button
                size="sm"
                className="h-9 border-0 px-3 text-xs text-primary-foreground shadow-[var(--shadow-soft)] sm:px-4 sm:text-sm"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                <span className="sm:hidden">Demo</span>
                <span className="hidden sm:inline">Get LMS Demo</span>
              </Button>
            }
          />
        </nav>
      </div>
    </header>
  );
}