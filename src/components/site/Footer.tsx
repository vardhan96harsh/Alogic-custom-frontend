import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <GraduationCap className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground">Alogic Data</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alogic Data. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
