import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

// NOTE: Update COMPANY_WEBSITE to your main marketing site URL.
const COMPANY_WEBSITE = "https://example.com";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={COMPANY_WEBSITE}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 group"
          aria-label="Go to main company website"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            LearnSphere
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-foreground">
              Login
            </Button>
          </Link>
          <Button
            size="sm"
            className="text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition-opacity border-0"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            asChild
          >
            <a href={COMPANY_WEBSITE} target="_blank" rel="noreferrer">
              Visit Our LMS
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
