import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { a as assetUrl, C as CoursesAPI, M as MailAPI } from "./router-BB7kjSup.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import "../_libs/sonner.mjs";
import { S as Star, c as ShieldCheck, U as Users, d as Sparkles, e as TrendingUp, L as LoaderCircle, f as UsersRound, g as Target, h as Phone, M as Mail, C as Calendar, P as Play, E as Eye, X, i as User, j as Building2, k as MessageSquare } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "util";
import "stream";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "crypto";
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
import "async_hooks";
const COMPANY_WEBSITE = "https://alogicdata.com";
function Header() {
  const scrollTo = (id) => (e) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border/60 shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: COMPANY_WEBSITE,
        target: "_blank",
        rel: "noreferrer",
        className: "flex items-baseline gap-1.5",
        "aria-label": "Alogic Data",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold tracking-tight", style: { color: "oklch(0.18 0.06 256)" }, children: "Alogic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xl font-bold tracking-tight bg-clip-text text-transparent",
              style: { backgroundImage: "var(--gradient-primary)" },
              children: "Data"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: scrollTo("cta"),
          className: "hidden md:inline-flex text-primary-foreground border-0 shadow-[var(--shadow-soft)]",
          style: { backgroundImage: "var(--gradient-primary)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-1.5 h-3.5 w-3.5" }),
            "Get LMS Demo"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          size: "sm",
          className: "bg-foreground text-background hover:bg-foreground/90",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:alogicdatavidisha@gmail.com", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-1.5 h-3.5 w-3.5" }),
            "Contact Us"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "text-foreground", children: "Login" }) })
    ] })
  ] }) });
}
function ScormPreview({ course }) {
  const navigate = useNavigate();
  const thumb = course?.thumbnail ? assetUrl(course.thumbnail) : null;
  const title = course?.title ?? "Leadership Excellence Program";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-elevated)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.7_0.2_25)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.8_0.18_80)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.75_0.18_145)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-sm font-medium text-foreground truncate", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative aspect-[16/10] w-full overflow-hidden rounded-xl",
        style: { backgroundImage: "var(--gradient-hero)" },
        children: [
          thumb && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: thumb,
              alt: title,
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => course && navigate({ to: "/course/$id", params: { id: course._id } }),
              disabled: !course,
              className: "absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform",
              style: { backgroundImage: "var(--gradient-primary)" },
              "aria-label": "Play course",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-7 w-7 fill-current" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 text-center text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold drop-shadow", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/90", children: "Build skills. Inspire teams. Drive results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-center gap-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.85_0.18_85)]", children: "★★★★★" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4.8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/80", children: [
                "(",
                (course?.views ?? 125) + "+ Learners",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => course && navigate({ to: "/course/$id", params: { id: course._id } }),
                disabled: !course,
                className: "mt-4 text-primary-foreground border-0 shadow-[var(--shadow-soft)]",
                style: { backgroundImage: "var(--gradient-primary)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 h-4 w-4" }),
                  "Start Course"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function CourseCard({ course }) {
  const navigate = useNavigate();
  const handleStart = async () => {
    try {
      await CoursesAPI.get(course._id);
    } catch {
    }
    navigate({ to: "/course/$id", params: { id: course._id } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
      course.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: assetUrl(course.thumbnail),
          alt: course.title,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full w-full",
          style: { backgroundImage: "var(--gradient-hero)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight text-foreground", children: course.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex shrink-0 items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
          (course.views ?? 0).toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 flex-1", children: course.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleStart,
          className: "mt-2 w-full text-primary-foreground border-0",
          style: { backgroundImage: "var(--gradient-primary)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 h-4 w-4" }),
            "Start Course"
          ]
        }
      )
    ] })
  ] });
}
function ScheduleMeetingDialog({
  buttonText = "Schedule a Meeting"
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [company, setCompany] = reactExports.useState("");
  const [date, setDate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !company || !date || !time) {
      alert("Please fill all required fields");
      return;
    }
    try {
      await MailAPI.sendDemoRequest({
        name: fullName,
        email,
        organization: company,
        date,
        time,
        message
      });
      alert("Your demo request has been sent!");
      setFullName("");
      setPhone("");
      setEmail("");
      setCompany("");
      setDate("");
      setTime("");
      setMessage("");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to send demo request. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: () => setOpen(true),
        className: "text-primary-foreground border-0 shadow-[var(--shadow-soft)]",
        style: { backgroundImage: "var(--gradient-primary)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-2 h-4 w-4" }),
          buttonText
        ]
      }
    ),
    open && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-6 sm:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl max-h-[calc(100vh-48px)] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpen(false),
            className: "absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 pr-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Schedule a Meeting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Fill your details and our team will contact you shortly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Full Name",
                  required: true,
                  value: fullName,
                  onChange: (e) => setFullName(e.target.value),
                  className: "w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  placeholder: "Mobile Number",
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  className: "w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "Email Address",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Company / Organization",
                required: true,
                value: company,
                onChange: (e) => setCompany(e.target.value),
                className: "w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                required: true,
                value: date,
                onChange: (e) => setDate(e.target.value),
                className: "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                required: true,
                value: time,
                onChange: (e) => setTime(e.target.value),
                className: "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                placeholder: "Meeting Purpose / Message",
                rows: 4,
                value: message,
                onChange: (e) => setMessage(e.target.value),
                className: "w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setOpen(false),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "text-primary-foreground border-0",
                style: { backgroundImage: "var(--gradient-primary)" },
                children: "Submit Request"
              }
            )
          ] })
        ] })
      ] }) }),
      document.body
    )
  ] });
}
function LandingPage() {
  const [activeTab, setActiveTab] = reactExports.useState("about");
  const {
    data: courses = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await CoursesAPI.list();
      const data = res.data;
      if (Array.isArray(data)) return data;
      if (Array.isArray(data.courses)) return data.courses;
      if (Array.isArray(data.data)) return data.data;
      return [];
    }
  });
  const featured = courses?.[0] ?? null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", style: {
      backgroundImage: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 py-16 lg:grid-cols-2 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }),
          "SCORM-ready • Built for enterprise training"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight", children: [
          "Corporate Training Platform by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "var(--gradient-primary)"
          }, children: "Alogic Data" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl", children: "Experience modern SCORM-based digital learning with a clean, engaging, and professional LMS interface." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid max-w-xl gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/10 bg-white/75 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 h-1 w-10 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold leading-6 text-foreground", children: [
              "Ready-Made Compliance &",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Professional Development Courses"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/10 bg-white/75 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 h-1 w-10 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold leading-6 text-foreground", children: [
              "Trusted by Companies to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Train Employees"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-[oklch(0.78_0.18_85)]", children: "★★★★★".split("").map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: s }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "4.8/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "(125+ Learners)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 text-sm text-foreground sm:grid-cols-4", children: [{
          icon: ShieldCheck,
          label: "High Quality Content"
        }, {
          icon: Users,
          label: "Engaging Learning"
        }, {
          icon: Sparkles,
          label: "AI-Powered Learning"
        }, {
          icon: TrendingUp,
          label: "Measurable Results"
        }].map(({
          icon: Icon,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium leading-tight", children: label })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScormPreview, { course: featured }) })
    ] }) }),
    featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white mx-20 my-4 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 border-b border-gray-200 mb-4", children: [{
        id: "about",
        label: "About"
      }, {
        id: "outcomes",
        label: "Outcomes"
      }, {
        id: "curriculum",
        label: "Curriculum"
      }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab(tab.id), className: `pb-4 text-sm font-semibold ${activeTab === tab.id ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`, children: tab.label }, tab.id)) }),
      activeTab === "about" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground mb-3", children: featured.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-3xl leading-relaxed", children: featured.description })
        ] }),
        featured.whatYouWillLearn?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", children: "What you'll learn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5", children: featured.whatYouWillLearn.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 leading-relaxed", children: item })
          ] }, idx)) })
        ] }),
        featured.skills?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Skills you'll gain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: featured.skills.map((skill, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium", children: skill }, idx)) })
        ] })
      ] }),
      activeTab === "outcomes" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", children: "Outcomes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: featured.outcomes?.map((outcome, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: outcome })
        ] }, idx)) })
      ] }),
      activeTab === "curriculum" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-5", children: "Course Curriculum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: featured.curriculum?.map((phase, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2", children: [
            "Phase ",
            idx + 1,
            ": ",
            phase.phaseTitle
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: phase.lessons?.join(" · ") })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "courses", className: "bg-background scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 py-20 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: "Featured Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Hand-picked SCORM modules ready to launch in your organization." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center py-16 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }),
          "Loading courses…"
        ] }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", children: "Unable to load courses. Make sure the backend is running." }) : !courses || courses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No courses uploaded yet." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: courses.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(CourseCard, { course: c }, c._id)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: "Coming Soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Exciting new courses launching soon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonCard, { title: "Emotional Intelligence", description: "Understand emotions and lead with empathy.", gradient: "linear-gradient(135deg, oklch(0.95 0.05 295), oklch(0.92 0.08 280))", iconBg: "oklch(0.55 0.18 285)", Icon: UsersRound }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoonCard, { title: "Strategic Thinking", description: "Make better decisions and drive business impact.", gradient: "linear-gradient(135deg, oklch(0.94 0.06 165), oklch(0.92 0.08 150))", iconBg: "oklch(0.55 0.15 160)", Icon: Target })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 backdrop-blur-md shadow-lg scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-soft)]", style: {
          backgroundImage: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Let's Build a Better Learning Experience Together" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Talk to our experts or schedule a meeting to see how we can help your organization." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-primary/30 text-primary hover:bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919876543210", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
          "+91 98765 43210"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleMeetingDialog, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:alogicdatavidisha@gmail.com", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mr-2 h-4 w-4" }),
          "Contact Us"
        ] }) })
      ] })
    ] }) }) })
  ] });
}
function ComingSoonCard({
  title,
  description,
  gradient,
  iconBg,
  Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex aspect-[16/10] items-center justify-center", style: {
      backgroundImage: gradient
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/85 backdrop-blur shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8", style: {
      color: iconBg
    } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-medium", style: {
        backgroundColor: "oklch(0.96 0.02 280)",
        color: "oklch(0.4 0.15 280)"
      }, children: "Coming Soon" })
    ] })
  ] });
}
export {
  LandingPage as component
};
