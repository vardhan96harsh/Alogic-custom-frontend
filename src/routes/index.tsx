import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/site/Header";
// import { Footer } from "@/components/site/Footer";
import { ScormPreview } from "@/components/site/ScormPreview";
import { CourseCard } from "@/components/site/CourseCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Star,
  ShieldCheck,
  Users,
  TrendingUp,
  Loader2,
  Phone,

  Mail,
  Users2,
  Target,
  Sparkles,
} from "lucide-react";
import { CoursesAPI } from "@/lib/api";
import { ScheduleMeetingDialog } from "@/components/site/ScheduleMeetingDialog";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alogic Data — Interactive SCORM Learning Platform" },
      {
        name: "description",
        content:
          "Premium LMS course preview platform. Experience engaging digital learning through interactive SCORM-based courses.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {

  const [activeTab, setActiveTab] = useState("about");
  const { data: courses = [], isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await CoursesAPI.list();
      const data = res.data;

      if (Array.isArray(data)) return data;
      if (Array.isArray(data.courses)) return data.courses;
      if (Array.isArray(data.data)) return data.data;

      return [];
    },
  });

  const featured = courses?.[0] ?? null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />


      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-[11px] font-medium text-foreground shadow-[var(--shadow-soft)] sm:text-xs">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              SCORM-ready • Built for enterprise training
            </span>

            <h1 className="mt-4 text-[30px] font-bold tracking-tight text-foreground leading-[1.12] sm:text-5xl lg:mt-6 lg:text-5xl">
              Corporate Training Platform by{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Alogic Data
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-6 text-muted-foreground sm:text-lg lg:mt-5">
              Experience modern SCORM-based digital learning with a clean,
              engaging, and professional LMS interface.
            </p>

            <div className="mt-4 grid max-w-xl gap-3 sm:grid-cols-2 lg:mt-6">
              <div className="rounded-xl border border-primary/10 bg-white/75 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:rounded-2xl sm:px-5 sm:py-4">
                <div className="mb-2 h-1 w-9 rounded-full bg-primary sm:mb-3 sm:w-10" />
                <h3 className="text-[13px] font-bold leading-5 text-foreground lg:text-sm lg:leading-6">
                  Ready-Made Compliance &
                  <br />
                  Professional Development Courses
                </h3>
              </div>

              <div className="rounded-xl border border-primary/10 bg-white/75 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:rounded-2xl sm:px-5 sm:py-4">
                <div className="mb-2 h-1 w-9 rounded-full bg-primary sm:mb-3 sm:w-10" />
                <h3 className="text-[13px] font-bold leading-5 text-foreground lg:text-sm lg:leading-6">
                  Trusted by Companies to
                  <br />
                  Train Employees
                </h3>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 lg:mt-6">
              <div className="flex text-[oklch(0.78_0.18_85)]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-base sm:text-lg">
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground sm:text-base">
                4.8/5
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                (125+ Learners)
              </span>
            </div>

            <div className="mt-5 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-3 text-xs text-foreground sm:grid-cols-4 sm:text-sm lg:mt-7 lg:gap-x-8 lg:gap-y-4">
              {[
                { icon: ShieldCheck, label: "High Quality Content" },
                { icon: Users, label: "Engaging Learning" },
                { icon: Sparkles, label: "AI-Powered Learning" },
                { icon: TrendingUp, label: "Measurable Results" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 lg:mt-0">
            <ScormPreview course={featured} />
          </div>
        </div>
      </section>


      {featured && (
        <section className="bg-white mx-4 sm:mx-6 lg:mx-20 my-6">
          {/* Tabs */}
          <div className="flex gap-6 sm:gap-8 overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-4">
            {[
              { id: "about", label: "About" },
              { id: "outcomes", label: "Outcomes" },
              { id: "curriculum", label: "Curriculum" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 pb-3 sm:pb-4 text-sm font-semibold ${activeTab === tab.id
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-700"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ABOUT TAB */}
          {activeTab === "about" && (
            <>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
                  {featured.description}
                </p>
              </div>

              {featured.whatYouWillLearn?.length > 0 && (
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                    What you'll learn
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-5">
                    {featured.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex gap-3 sm:gap-4">
                        <span className="text-green-600 font-bold shrink-0">✓</span>
                        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {featured.skills?.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Skills you'll gain
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {featured.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-lg lg:rounded-full  text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* OUTCOMES TAB */}
          {activeTab === "outcomes" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                Outcomes
              </h3>

              <div className="space-y-4">
                {featured.outcomes?.map((outcome, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CURRICULUM TAB */}
          {activeTab === "curriculum" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                Course Curriculum
              </h3>

              <div className="space-y-4">
                {featured.curriculum?.map((phase, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white hover:shadow-md transition"
                  >
                    <h4 className="text-sm sm:text-base font-bold mb-2 leading-snug">
                      Phase {idx + 1}: {phase.phaseTitle}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                      {phase.lessons?.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )
      }
      {/* Featured + Coming Soon */}
      <section id="courses" className="bg-background scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 py-10 lg:py-20 lg:grid-cols-2">
          {/* Featured */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground">
                Featured Courses
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Hand-picked SCORM modules ready to launch in your organization.
              </p>
            </div>

            <div>
              {isLoading ? (
                <div className="flex items-center justify-center py-12 text-muted-foreground">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading courses…
                </div>
              ) : error ? (
                <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
                  Unable to load courses. Make sure the backend is running.
                </div>
              ) : !courses || courses.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
                  <p className="font-medium text-foreground">No courses uploaded yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {courses.slice(0, 4).map((c) => (
                    <CourseCard key={c._id} course={c} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground">
                Coming Soon
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Exciting new courses launching soon.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ComingSoonCard
                title="Emotional Intelligence"
                description="Understand emotions and lead with empathy."
                gradient="linear-gradient(135deg, oklch(0.95 0.05 295), oklch(0.92 0.08 280))"
                iconBg="oklch(0.55 0.18 285)"
                Icon={Users2}
              />

              <ComingSoonCard
                title="Strategic Thinking"
                description="Make better decisions and drive business impact."
                gradient="linear-gradient(135deg, oklch(0.94 0.06 165), oklch(0.92 0.08 150))"
                iconBg="oklch(0.55 0.15 160)"
                Icon={Target}
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        id="cta"
        className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 backdrop-blur-md shadow-lg lg:scroll-mt-40 "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-soft)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Phone className="h-4 lg:h-5 w-4 lg:w-5" />
              </div>
              <div>
                <h3 className="text-xs md:text-lg  font-bold text-foreground">
                  Let's Build a Better Learning Experience Together
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Talk to our experts or schedule a meeting to see how we can help your organization.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-4  ">

              <Button
                asChild
                variant="outline"
                className="border-primary/30 text-primary text-xs  lg:text-lg hover:bg-primary/5"
              >
                <a href="tel:+919876543210">
                  <Phone className=" lg:mr-2 h-2 lg:h-4 w-2 lg:w-4 " />
                  +91 98765 43210
                </a>
              </Button>

              <Button variant="outline" className="border-border  hidden">
                <Mail className="lg:mr-2 h-2 lg:h-4 w-2 lg:w-4" />
                Contact Us
              </Button>
              {/* <Button asChild variant="outline" className="border-border text-xs lg:text-lg hidden lg:block flex">
                <a href="mailto:alogicdatavidisha@gmail.com">
                  <Mail className="lg:mr-2 h-2 lg:h-4 w-2 lg:w-4" />
                  Contact Us
                </a>
              </Button> */}
              <ScheduleMeetingDialog />
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

function ComingSoonCard({
  title,
  description,
  gradient,
  iconBg,
  Icon,
}: {
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div
        className="flex aspect-[16/10] items-center justify-center"
        style={{ backgroundImage: gradient }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/85 backdrop-blur shadow-[var(--shadow-soft)]">
          <Icon className="h-8 w-8" style={{ color: iconBg }} />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <span
          className="inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-medium"
          style={{ backgroundColor: "oklch(0.96 0.02 280)", color: "oklch(0.4 0.15 280)" }}
        >
          Coming Soon
        </span>
      </div>
    </article>
  );
}
