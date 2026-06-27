import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { L as Label, I as Input } from "./label-BJaHSwYl.mjs";
import { A as AuthAPI } from "./router-BB7kjSup.mjs";
import { G as GraduationCap, L as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [errorMsg, setErrorMsg] = reactExports.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    try {
      const {
        data
      } = await AuthAPI.login(email, password);
      if (!data?.token) throw new Error("Invalid response from server");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user ?? {}));
      toast.success("Signed in successfully");
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      const message = err?.response?.data?.message ?? err?.message ?? "Login failed";
      setErrorMsg(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4 py-12", style: {
    backgroundImage: "var(--gradient-hero)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-8 flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground", style: {
        backgroundImage: "var(--gradient-primary)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-foreground", children: "Alogic Data" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Welcome back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to access your dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "you@company.com", value: email, onChange: (e) => setEmail(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), required: true })
        ] }),
        errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive", children: errorMsg }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full text-primary-foreground border-0 shadow-[var(--shadow-soft)]", style: {
          backgroundImage: "var(--gradient-primary)"
        }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Signing in…"
        ] }) : "Login" })
      ] })
    ] })
  ] }) });
}
export {
  LoginPage as component
};
