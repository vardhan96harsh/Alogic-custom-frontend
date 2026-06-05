import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

// Public corporate site for "Alogic Data" — update when the real URL is known.
const COMPANY_WEBSITE = "https://alogicdata.com";

export function Header() {
  const handleVisitLms = (e: React.MouseEvent) => {
    // Scroll to the Featured Courses section on the home page if present.
    if (typeof document === "undefined") return;
    const target = document.getElementById("courses");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={COMPANY_WEBSITE}
          target="_blank"
          rel="noreferrer"
          className="group flex items-baseline gap-1"
          aria-label="Alogic Data — visit company website"
        >
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Alogic
          </span>
          <span
            className="text-xl font-bold tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Data
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
            onClick={handleVisitLms}
            className="text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition-opacity border-0"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            asChild
          >
            <a href="#courses">Visit Our LMS</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
