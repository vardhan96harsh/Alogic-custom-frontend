// Dummy course data. Replace with API fetch (e.g. GET /api/courses) later.
export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  uploadDate: string;
  views: number;
  status: "Published" | "Draft";
};

export const dummyCourses: Course[] = [
  {
    id: "c1",
    title: "Workplace Safety Essentials",
    description: "An interactive course covering OSHA basics, hazard awareness, and emergency response.",
    thumbnail:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60",
    uploadDate: "2025-04-12",
    views: 1248,
    status: "Published",
  },
  {
    id: "c2",
    title: "Effective Communication at Work",
    description: "Master active listening, clear writing, and confident speaking in a corporate setting.",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
    uploadDate: "2025-05-03",
    views: 932,
    status: "Published",
  },
  {
    id: "c3",
    title: "Cybersecurity Fundamentals",
    description: "Learn to recognize phishing, secure passwords, and protect company data.",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    uploadDate: "2025-05-21",
    views: 564,
    status: "Draft",
  },
];
