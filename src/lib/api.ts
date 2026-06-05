import axios from "axios";

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach Bearer token from localStorage on every request.
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Build absolute URL for a backend-relative asset path (e.g. "/uploads/x.jpg" or "uploads/x.jpg").
export function assetUrl(path?: string | null): string {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

// ----- Domain types (match Node.js + MongoDB backend) -----
export type ApiCourse = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  launchUrl?: string;
  views?: number;
  status?: "Published" | "Draft";
  createdAt?: string;
};

export type DashboardStats = {
  totalUsers: number;
  totalCourses: number;
  totalViews: number;
};

// ----- API calls -----
export const AuthAPI = {
  login: (email: string, password: string) =>
    api.post<{ token: string; user: unknown }>("/api/auth/login", { email, password }),
};

export const CoursesAPI = {
  list: () => api.get<ApiCourse[]>("/api/courses"),
  get: (id: string) => api.get<ApiCourse>(`/api/courses/${id}`),
  stats: () => api.get<DashboardStats>("/api/courses/stats/dashboard"),
  upload: (data: FormData) =>
    api.post<ApiCourse>("/api/courses/upload", data, {
      // Let the browser set the multipart boundary automatically.
      headers: { "Content-Type": undefined as unknown as string },
    }),
};

// ----- Auth helpers -----
export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("token");
}

export function getStoredUser<T = Record<string, unknown>>(): T | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("user");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
}
