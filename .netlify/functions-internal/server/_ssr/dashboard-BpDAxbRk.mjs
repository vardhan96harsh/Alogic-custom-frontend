import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button, c as cn } from "./button-DjOZMqFS.mjs";
import { L as Label, I as Input } from "./label-BJaHSwYl.mjs";
import { g as getStoredToken, C as CoursesAPI, c as clearAuth } from "./router-BB7kjSup.mjs";
import { U as Users, B as BookOpen, E as Eye, G as GraduationCap, a as LogOut, b as Upload, L as LoaderCircle, P as Play, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
function DashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  reactExports.useEffect(() => {
    if (!getStoredToken()) navigate({
      to: "/login"
    });
  }, [navigate]);
  const statsQuery = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => (await CoursesAPI.stats()).data
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
    }
  });
  const stats = [{
    label: "Total Users",
    value: statsQuery.data?.totalUsers ?? 0,
    icon: Users
  }, {
    label: "Total Courses",
    value: statsQuery.data?.totalCourses ?? 0,
    icon: BookOpen
  }, {
    label: "Total Course Views",
    value: statsQuery.data?.totalViews ?? 0,
    icon: Eye
  }];
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [thumbnail, setThumbnail] = reactExports.useState(null);
  const [scormFile, setScormFile] = reactExports.useState(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [showDemoRequests, setShowDemoRequests] = reactExports.useState(false);
  const [whatYouWillLearn, setWhatYouWillLearn] = reactExports.useState([]);
  const [skills, setSkills] = reactExports.useState([]);
  const [outcomes, setOutcomes] = reactExports.useState([]);
  const [targetAudience, setTargetAudience] = reactExports.useState([]);
  const [curriculum, setCurriculum] = reactExports.useState([]);
  const [editingCourse, setEditingCourse] = reactExports.useState(null);
  const [editTitle, setEditTitle] = reactExports.useState("");
  const [editDescription, setEditDescription] = reactExports.useState("");
  const [editThumbnail, setEditThumbnail] = reactExports.useState(null);
  const [editScormFile, setEditScormFile] = reactExports.useState(null);
  const [editWhatYouWillLearn, setEditWhatYouWillLearn] = reactExports.useState([]);
  const [editSkills, setEditSkills] = reactExports.useState([]);
  const [editOutcomes, setEditOutcomes] = reactExports.useState([]);
  const [editTargetAudience, setEditTargetAudience] = reactExports.useState([]);
  const [editCurriculum, setEditCurriculum] = reactExports.useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = reactExports.useState(false);
  const handleUpload = async (e) => {
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
      document.getElementById("thumb")?.value && (document.getElementById("thumb").value = "");
      document.getElementById("scorm")?.value && (document.getElementById("scorm").value = "");
      await Promise.all([queryClient.invalidateQueries({
        queryKey: ["courses"]
      }), queryClient.invalidateQueries({
        queryKey: ["dashboard-stats"]
      })]);
    } catch (err) {
      const message = err?.response?.data?.message ?? "Upload failed";
      toast.error(message);
    } finally {
      setUploading(false);
    }
  };
  const openEditModal = (course) => {
    setEditingCourse(course);
    setEditTitle(course.title);
    setEditDescription(course.description);
    setEditThumbnail(null);
    setEditScormFile(null);
    setEditWhatYouWillLearn(course.whatYouWillLearn || []);
    setEditSkills(course.skills || []);
    setEditOutcomes(course.outcomes || []);
    setEditTargetAudience(course.targetAudience || []);
    setEditCurriculum(course.curriculum || []);
    setIsEditModalOpen(true);
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
      queryClient.invalidateQueries({
        queryKey: ["courses"]
      });
      queryClient.invalidateQueries({
        queryKey: ["dashboard-stats"]
      });
      setEditingCourse(null);
    } catch (err) {
      toast.error("Failed to update course");
    }
  };
  const handleLogout = () => {
    clearAuth();
    toast.success("Signed out");
    navigate({
      to: "/login"
    });
  };
  useQuery({
    queryKey: ["demo-requests"],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/api/mail/requests`, {
        headers: {
          Authorization: `Bearer ${getStoredToken()}`
        }
      });
      const data = await res.json();
      return data.requests ?? [];
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground", style: {
          backgroundImage: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-foreground", children: "Alogic Data Admin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: handleLogout, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
        "Sign out"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight text-foreground", children: "Alogic Data LMS Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Overview of your learning platform." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground", style: {
            backgroundImage: "var(--gradient-primary)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-3xl font-bold tracking-tight text-foreground", children: statsQuery.isLoading ? "…" : Number(s.value).toLocaleString() })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground", style: {
            backgroundImage: "var(--gradient-primary)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Upload Course" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add a new SCORM course to the library." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleUpload, className: "grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "Course title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "title", placeholder: "e.g. Onboarding Essentials", value: title, onChange: (e) => setTitle(e.target.value), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "thumb", children: "Thumbnail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "thumb", type: "file", accept: "image/*", onChange: (e) => setThumbnail(e.target.files?.[0] ?? null), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "desc", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "desc", rows: 3, placeholder: "Brief overview of the course", value: description, onChange: (e) => setDescription(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "scorm", children: "SCORM zip file" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "scorm", type: "file", accept: ".zip", onChange: (e) => setScormFile(e.target.files?.[0] ?? null), required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "whatYouLearn", children: "What you'll learn (comma separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "whatYouLearn", placeholder: "e.g. Leadership, Communication", value: whatYouWillLearn.join(", "), onChange: (e) => setWhatYouWillLearn(e.target.value.split(",").map((s) => s.trim())) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "skills", children: "Skills you'll gain (comma separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "skills", placeholder: "e.g. Decision Making, Conflict Resolution", value: skills.join(", "), onChange: (e) => setSkills(e.target.value.split(",").map((s) => s.trim())) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "outcomes", children: "Expected Outcomes (comma separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "outcomes", placeholder: "e.g. Build high-performing teams", value: outcomes.join(", "), onChange: (e) => setOutcomes(e.target.value.split(",").map((s) => s.trim())) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "targetAudience", children: "Target Audience (comma separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "targetAudience", placeholder: "e.g. Team leaders, Managers", value: targetAudience.join(", "), onChange: (e) => setTargetAudience(e.target.value.split(",").map((s) => s.trim())) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Curriculum" }),
            curriculum.map((phase, pIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border p-2 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phase title", value: phase.phaseTitle, onChange: (e) => {
                const newCurr = [...curriculum];
                newCurr[pIdx].phaseTitle = e.target.value;
                setCurriculum(newCurr);
              } }),
              phase.lessons.map((lesson, lIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: `Lesson ${lIdx + 1}`, value: lesson, onChange: (e) => {
                const newCurr = [...curriculum];
                newCurr[pIdx].lessons[lIdx] = e.target.value;
                setCurriculum(newCurr);
              } }, lIdx)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: () => {
                const newCurr = [...curriculum];
                newCurr[pIdx].lessons.push("");
                setCurriculum(newCurr);
              }, children: "+ Add Lesson" })
            ] }, pIdx)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: () => setCurriculum([...curriculum, {
              phaseTitle: "",
              lessons: [""]
            }]), children: "+ Add Phase" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: uploading, className: "text-primary-foreground border-0 shadow-[var(--shadow-soft)]", style: {
            backgroundImage: "var(--gradient-primary)"
          }, children: uploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Uploading…"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
            "Upload Course"
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Uploaded Courses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage your published and draft courses." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Course Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Upload Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Views" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: coursesQuery.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { colSpan: 5, className: "py-10 text-center text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 inline h-4 w-4 animate-spin" }),
            "Loading courses…"
          ] }) }) : !coursesQuery.data || coursesQuery.data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "py-10 text-center text-muted-foreground", children: "No courses uploaded yet." }) }) : (coursesQuery.data ?? []).map((c) => {
            const status = c.status ?? "Published";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: (c.views ?? 0).toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium " + (status === "Published" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"), children: status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/course/$id", params: {
                  id: c._id
                }, className: "inline-flex items-center gap-1 text-sm text-primary hover:underline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5" }),
                  "Open Player"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: async () => {
                  const confirmDelete = window.confirm(`Are you sure you want to delete the course "${c.title}"?`);
                  if (!confirmDelete) return;
                  try {
                    await CoursesAPI.delete(c._id);
                    toast.success("Course deleted successfully");
                    queryClient.invalidateQueries({
                      queryKey: ["courses"]
                    });
                    queryClient.invalidateQueries({
                      queryKey: ["dashboard-stats"]
                    });
                  } catch (err) {
                    const message = err?.response?.data?.message ?? "Failed to delete course";
                    toast.error(message);
                  }
                }, className: "inline-flex items-center gap-1 text-sm text-red-600 hover:underline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                  "Delete"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: () => openEditModal(c), className: "inline-flex items-center gap-1 text-sm text-blue-600 hover:underline", children: "Edit" })
              ] }) })
            ] }, c._id);
          }) })
        ] }) })
      ] })
    ] }),
    isEditModalOpen && editingCourse && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black/40 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 w-full max-w-2xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold", children: [
        "Edit Course: ",
        editingCourse.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Title", value: editTitle, onChange: (e) => setEditTitle(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Description", value: editDescription, onChange: (e) => setEditDescription(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: "image/*", onChange: (e) => setEditThumbnail(e.target.files?.[0] ?? null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: ".zip", onChange: (e) => setEditScormFile(e.target.files?.[0] ?? null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "What you'll learn (comma separated)", value: editWhatYouWillLearn.join(", "), onChange: (e) => setEditWhatYouWillLearn(e.target.value.split(",").map((s) => s.trim())) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setIsEditModalOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleUpdate, children: "Save Changes" })
      ] })
    ] }) })
  ] });
}
export {
  DashboardPage as component
};
