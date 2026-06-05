import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Users, BookOpen, Eye, Upload, GraduationCap, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dummyCourses } from "@/lib/dummy-courses";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Alogic Data" },
      { name: "description", content: "Manage courses, uploads, and platform analytics." },
    ],
  }),
  component: DashboardPage,
});

const stats = [
  { label: "Total Users", value: "2,481", icon: Users },
  { label: "Total Courses", value: "37", icon: BookOpen },
  { label: "Total Course Views", value: "18,902", icon: Eye },
];

function DashboardPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST multipart/form-data to /api/courses (thumbnail + SCORM zip)
    alert("Upload submitted (UI only).");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-foreground">Alogic Data Admin</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Alogic Data LMS Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Overview of your learning platform.</p>
        </div>

        {/* Stat cards */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{s.value}</p>
            </div>
          ))}
        </section>

        {/* Upload Course */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Upload className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Upload Course</h2>
              <p className="text-sm text-muted-foreground">Add a new SCORM course to the library.</p>
            </div>
          </div>
          <form onSubmit={handleUpload} className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="title">Course title</Label>
              <Input
                id="title"
                placeholder="e.g. Onboarding Essentials"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="thumb">Thumbnail</Label>
              <Input id="thumb" type="file" accept="image/*" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea
                id="desc"
                rows={3}
                placeholder="Brief overview of the course"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="scorm">SCORM zip file</Label>
              <Input id="scorm" type="file" accept=".zip" />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Course
              </Button>
            </div>
          </form>
        </section>

        {/* Course table */}
        <section className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden">
          <div className="border-b border-border p-6">
            <h2 className="text-xl font-semibold text-foreground">Uploaded Courses</h2>
            <p className="text-sm text-muted-foreground">Manage your published and draft courses.</p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyCourses.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium text-foreground">{c.title}</TableCell>
                    <TableCell className="text-muted-foreground">{c.uploadDate}</TableCell>
                    <TableCell className="text-muted-foreground">{c.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <span
                        className={
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium " +
                          (c.status === "Published"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground")
                        }
                      >
                        {c.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
