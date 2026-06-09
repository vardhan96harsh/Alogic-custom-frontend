import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const COMPANY_WEBSITE = "https://alogicdata.com";

export function Header() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border/60 shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={COMPANY_WEBSITE}
          target="_blank"
          rel="noreferrer"
          className="flex items-baseline gap-1.5"
          aria-label="Alogic Data"
        >
          <span className="text-xl font-bold tracking-tight" style={{ color: "oklch(0.18 0.06 256)" }}>
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
            variant="outline"
            onClick={scrollTo("courses")}
            className="hidden sm:inline-flex border-primary/30 text-primary hover:bg-primary/5"
          >
            Visit Our LMS
          </Button>
          <Button
            size="sm"
            onClick={scrollTo("cta")}
            className="hidden md:inline-flex text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            Get LMS Demo
          </Button>
          <Button
            size="sm"
            onClick={scrollTo("cta")}
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
