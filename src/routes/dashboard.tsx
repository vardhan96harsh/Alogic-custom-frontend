import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Users, BookOpen, Eye, Upload, GraduationCap, LogOut, Loader2,Trash2, Play } from "lucide-react";
import { toast } from "sonner";
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
import { CoursesAPI, clearAuth, getStoredToken } from "@/lib/api";
import DemoRequests from "@/components/site/DemoRequests";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Alogic Data" },
      { name: "description", content: "Manage courses, uploads, and platform analytics." },
    ],
  }),
  // Client-side protection: bounce to /login if no token.
  beforeLoad: () => {
    if (typeof window !== "undefined" && !getStoredToken()) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Safety net in case beforeLoad was skipped during SSR.
  useEffect(() => {
    if (!getStoredToken()) navigate({ to: "/login" });
  }, [navigate]);

  const statsQuery = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => (await CoursesAPI.stats()).data,
  });

const coursesQuery = useQuery({
  queryKey: ["courses"],
  queryFn: async () => {
    const res = await CoursesAPI.list();
    const data = res.data;

    console.log("Courses API Response:", data);

    if (Array.isArray(data)) return data;
    if (Array.isArray(data.courses)) return data.courses;
    if (Array.isArray(data.data)) return data.data;

    return [];
  },
});

  const stats = [
    { label: "Total Users", value: statsQuery.data?.totalUsers ?? 0, icon: Users },
    { label: "Total Courses", value: statsQuery.data?.totalCourses ?? 0, icon: BookOpen },
    { label: "Total Course Views", value: statsQuery.data?.totalViews ?? 0, icon: Eye },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [scormFile, setScormFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showDemoRequests, setShowDemoRequests] = useState(false);
  const [whatYouWillLearn, setWhatYouWillLearn] = useState<string[]>([]);
const [skills, setSkills] = useState<string[]>([]);
const [outcomes, setOutcomes] = useState<string[]>([]);
const [targetAudience, setTargetAudience] = useState<string[]>([]);
const [curriculum, setCurriculum] = useState<any[]>([]);

const [editingCourse, setEditingCourse] = useState<ApiCourse | null>(null);
const [editTitle, setEditTitle] = useState("");
const [editDescription, setEditDescription] = useState("");
const [editThumbnail, setEditThumbnail] = useState<File | null>(null);
const [editScormFile, setEditScormFile] = useState<File | null>(null);
const [editWhatYouWillLearn, setEditWhatYouWillLearn] = useState<string[]>([]);
const [editSkills, setEditSkills] = useState<string[]>([]);
const [editOutcomes, setEditOutcomes] = useState<string[]>([]);
const [editTargetAudience, setEditTargetAudience] = useState<string[]>([]);
const [editCurriculum, setEditCurriculum] = useState<any[]>([]);
const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!thumbnail || !scormFile) {
      toast.error("Please choose a thumbnail and a SCORM zip file.");
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("description", description);
      fd.append("thumbnail", thumbnail);
      fd.append("scormFile", scormFile);
 fd.append("whatYouWillLearn", JSON.stringify(whatYouWillLearn ?? []));
fd.append("skills", JSON.stringify(skills ?? []));
fd.append("outcomes", JSON.stringify(outcomes ?? []));
fd.append("targetAudience", JSON.stringify(targetAudience ?? []));
fd.append("curriculum", JSON.stringify(curriculum ?? []));

      await CoursesAPI.upload(fd);
      toast.success("Course uploaded successfully");

      setTitle("");
      setDescription("");
      setThumbnail(null);
      setScormFile(null);
      (document.getElementById("thumb") as HTMLInputElement | null)?.value &&
        ((document.getElementById("thumb") as HTMLInputElement).value = "");
      (document.getElementById("scorm") as HTMLInputElement | null)?.value &&
        ((document.getElementById("scorm") as HTMLInputElement).value = "");

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["courses"] }),
        queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] }),
      ]);
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        "Upload failed";
      toast.error(message);
    } finally {
      setUploading(false);
    }
  };

  const openEditModal = (course: ApiCourse) => {
  setEditingCourse(course);

  // Prefill edit form fields
  setEditTitle(course.title);
  setEditDescription(course.description);
  setEditThumbnail(null);
  setEditScormFile(null);
  setEditWhatYouWillLearn(course.whatYouWillLearn || []);
  setEditSkills(course.skills || []);
  setEditOutcomes(course.outcomes || []);
  setEditTargetAudience(course.targetAudience || []);
  setEditCurriculum(course.curriculum || []);

  setIsEditModalOpen(true); // open the modal
};

  const handleUpdate = async () => {
  if (!editingCourse) return;
  const fd = new FormData();
  fd.append("title", editTitle);
  fd.append("description", editDescription);
  if (editThumbnail) fd.append("thumbnail", editThumbnail);
  if (editScormFile) fd.append("scormFile", editScormFile);
  fd.append("whatYouWillLearn", JSON.stringify(editWhatYouWillLearn));
  fd.append("skills", JSON.stringify(editSkills));
  fd.append("outcomes", JSON.stringify(editOutcomes));
  fd.append("targetAudience", JSON.stringify(editTargetAudience));
  fd.append("curriculum", JSON.stringify(editCurriculum));

  try {
    await CoursesAPI.update(editingCourse._id, fd);
    toast.success("Course updated successfully");
    queryClient.invalidateQueries({ queryKey: ["courses"] });
    queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
    setEditingCourse(null); // close modal
  } catch (err) {
    toast.error("Failed to update course");
  }
};

  const handleLogout = () => {
    clearAuth();
    toast.success("Signed out");
    navigate({ to: "/login" });
  };

  const demoRequestsQuery = useQuery({
  queryKey: ["demo-requests"],
  queryFn: async () => {
    const res = await fetch(`${API_BASE_URL}/api/mail/requests`, {
      headers: {
        Authorization: `Bearer ${getStoredToken()}`,
      },
    });
    const data = await res.json();
    return data.requests ?? [];
  },
});

  return (
    <div className="min-h-screen bg-muted/30">
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
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Alogic Data LMS Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Overview of your learning platform.</p>
        </div>

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
              <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                {statsQuery.isLoading ? "…" : Number(s.value).toLocaleString()}
              </p>
            </div>
          ))}
        </section>

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
            <div className="space-y-2">
              <Label htmlFor="title">Course title</Label>
              <Input
                id="title"
                placeholder="e.g. Onboarding Essentials"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="thumb">Thumbnail</Label>
              <Input
                id="thumb"
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files?.[0] ?? null)}
                required
              />
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
              <Input
                id="scorm"
                type="file"
                accept=".zip"
                onChange={(e) => setScormFile(e.target.files?.[0] ?? null)}
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
  <Label htmlFor="whatYouLearn">What you'll learn (comma separated)</Label>
  <Input
    id="whatYouLearn"
    placeholder="e.g. Leadership, Communication"
    value={whatYouWillLearn.join(", ")}
    onChange={(e) => setWhatYouWillLearn(e.target.value.split(",").map(s => s.trim()))}
  />
</div>

<div className="space-y-2 md:col-span-2">
  <Label htmlFor="skills">Skills you'll gain (comma separated)</Label>
  <Input
    id="skills"
    placeholder="e.g. Decision Making, Conflict Resolution"
    value={skills.join(", ")}
    onChange={(e) => setSkills(e.target.value.split(",").map(s => s.trim()))}
  />
</div>

<div className="space-y-2 md:col-span-2">
  <Label htmlFor="outcomes">Expected Outcomes (comma separated)</Label>
  <Input
    id="outcomes"
    placeholder="e.g. Build high-performing teams"
    value={outcomes.join(", ")}
    onChange={(e) => setOutcomes(e.target.value.split(",").map(s => s.trim()))}
  />
</div>

<div className="space-y-2 md:col-span-2">
  <Label htmlFor="targetAudience">Target Audience (comma separated)</Label>
  <Input
    id="targetAudience"
    placeholder="e.g. Team leaders, Managers"
    value={targetAudience.join(", ")}
    onChange={(e) => setTargetAudience(e.target.value.split(",").map(s => s.trim()))}
  />
</div>
<div className="space-y-4 md:col-span-2">
  <Label>Curriculum</Label>
  {curriculum.map((phase, pIdx) => (
    <div key={pIdx} className="border p-2 rounded">
      <Input
        placeholder="Phase title"
        value={phase.phaseTitle}
        onChange={(e) => {
          const newCurr = [...curriculum];
          newCurr[pIdx].phaseTitle = e.target.value;
          setCurriculum(newCurr);
        }}
      />
      {phase.lessons.map((lesson, lIdx) => (
        <Input
          key={lIdx}
          placeholder={`Lesson ${lIdx + 1}`}
          value={lesson}
          onChange={(e) => {
            const newCurr = [...curriculum];
            newCurr[pIdx].lessons[lIdx] = e.target.value;
            setCurriculum(newCurr);
          }}
        />
      ))}
      <Button
        type="button"
        onClick={() => {
          const newCurr = [...curriculum];
          newCurr[pIdx].lessons.push("");
          setCurriculum(newCurr);
        }}
      >
        + Add Lesson
      </Button>
    </div>
  ))}
  <Button
    type="button"
    onClick={() => setCurriculum([...curriculum, { phaseTitle: "", lessons: [""] }])}
  >
    + Add Phase
  </Button>
</div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={uploading}
                className="text-primary-foreground border-0 shadow-[var(--shadow-soft)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading…
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Course
                  </>
                )}
              </Button>
            </div>
          </form>
        </section>

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
                {coursesQuery.isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                      <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                      Loading courses…
                    </TableCell>
                  </TableRow>
                ) : !coursesQuery.data || coursesQuery.data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                      No courses uploaded yet.
                    </TableCell>
                  </TableRow>
             ) : (
  (coursesQuery.data ?? []).map((c) => {
                    const status = c.status ?? "Published";
                    return (
                      <TableRow key={c._id}>
                        <TableCell className="font-medium text-foreground">{c.title}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {(c.views ?? 0).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <span
                            className={
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium " +
                              (status === "Published"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground")
                            }
                          >
                            {status}
                          </span>
                        </TableCell>
                     <TableCell className="text-right">
  <div className="flex justify-end gap-3">
    <Link
      to="/course/$id"
      params={{ id: c._id }}
      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
    >
      <Play className="h-3.5 w-3.5" />
      Open Player
    </Link>

    <button
      type="button"
      onClick={async () => {
        const confirmDelete = window.confirm(
          `Are you sure you want to delete the course "${c.title}"?`
        );
        if (!confirmDelete) return;

        try {
          await CoursesAPI.delete(c._id);
          toast.success("Course deleted successfully");
          queryClient.invalidateQueries({ queryKey: ["courses"] });
          queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
        } catch (err: unknown) {
          const message =
            (err as { response?: { data?: { message?: string } } })?.response?.data
              ?.message ?? "Failed to delete course";
          toast.error(message);
        }
      }}
      className="inline-flex items-center gap-1 text-sm text-red-600 hover:underline"
    >
      <Trash2 className="h-3.5 w-3.5" />
      Delete
    </button>
<Button
  type="button"
  onClick={() => openEditModal(c)}
  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
>
  Edit
</Button>
  </div>
</TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>

      {isEditModalOpen && editingCourse && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-2xl space-y-4">
      <h2 className="text-xl font-bold">Edit Course: {editingCourse.title}</h2>

      <Input
        placeholder="Title"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <Textarea
        placeholder="Description"
        value={editDescription}
        onChange={(e) => setEditDescription(e.target.value)}
      />

      {/* Optional: thumbnail and SCORM file */}
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setEditThumbnail(e.target.files?.[0] ?? null)}
      />
      <Input
        type="file"
        accept=".zip"
        onChange={(e) => setEditScormFile(e.target.files?.[0] ?? null)}
      />

      {/* Example: What you'll learn */}
      <Input
        placeholder="What you'll learn (comma separated)"
        value={editWhatYouWillLearn.join(", ")}
        onChange={(e) =>
          setEditWhatYouWillLearn(e.target.value.split(",").map((s) => s.trim()))
        }
      />

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={() => setIsEditModalOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleUpdate}>Save Changes</Button>
      </div>
    </div>
  </div>
)}
    </div>
    
  );
}
