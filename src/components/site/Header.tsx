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
          className="flex items-baseline "
          aria-label="AlogicData"
        >
       <img
  src="/logo.png"
  alt="ALogicData"
  className="h-8 w-auto sm:h-14"
/>
        </a>

     <nav className="flex items-center gap-2 sm:gap-3">
  <Button
    asChild
    variant="outline"
    size="sm"
    className="h-9 px-3 text-xs sm:px-4 sm:text-sm"
  >
    <a href="mailto:alogicdatavidisha@gmail.com">
      Contact Us
    </a>
  </Button>

  <ScheduleMeetingDialog
    trigger={
      <Button
        size="sm"
        className="h-9 border-0 px-3 text-xs text-primary-foreground shadow-[var(--shadow-soft)] sm:px-4 sm:text-xs"
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