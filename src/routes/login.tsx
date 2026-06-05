import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — LearnSphere" },
      { name: "description", content: "Sign in to your LearnSphere admin dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real auth call (e.g. supabase.auth.signInWithPassword)
    void email;
    void password;
    navigate({ to: "/dashboard" });
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-12"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold text-foreground">LearnSphere</span>
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to access your dashboard</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Login
            </Button>
          </form>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Demo only — any credentials will sign you in.
          </p>
        </div>
      </div>
    </div>
  );
}
