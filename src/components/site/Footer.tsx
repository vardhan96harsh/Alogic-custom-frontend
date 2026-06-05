export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold tracking-tight text-foreground">Alogic</span>
            <span
              className="text-base font-bold tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Data
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
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
