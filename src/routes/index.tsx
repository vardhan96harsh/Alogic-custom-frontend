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
    <div className="flex min-h-screen flex-col bg-background ">
      <Header />


      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid  items-center gap-5 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16">
          <div className="order-2 lg:order-1">
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

            <div className="mt-5 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-3 text-xs text-foreground sm:grid-cols-4 sm:text-sm lg:mt-7 lg:gap-x-8 lg:gap-y-4">
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

          <div className="order-1 mx-auto mt-2 w-[100%] max-w-sm lg:order-2 lg:mt-0 lg:w-full lg:max-w-none">
            <ScormPreview course={featured} />
          </div>
        </div>
      </section>


      {featured && (
        <section className="mx-4 my-8 rounded-2xl border border-gray-200 bg-white p-5 sm:mx-6 sm:p-6 lg:mx-16 lg:p-8">
          {/* Tabs */}
          <div className="mb-8 flex gap-8 overflow-x-auto border-b border-gray-200">
            {[
              { id: "about", label: "About" },
              { id: "outcomes", label: "Outcomes" },
              { id: "audience", label: "Who this is for" },
              { id: "curriculum", label: "Curriculum" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 pb-4 text-sm font-bold transition ${activeTab === tab.id
                    ? "border-b-4 border-blue-700 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "about" && (
            <div>
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="max-w-4xl text-sm leading-7 text-gray-600 sm:text-base">
                  {featured.description}
                </p>
              </div>

              {featured.whatYouWillLearn?.length > 0 && (
                <div className="mb-8 rounded-xl border border-gray-200 p-5 sm:p-6">
                  <h3 className="mb-5 text-xl font-bold text-gray-950">
                    What you'll learn
                  </h3>

                  <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
                    {featured.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="mt-0.5 text-base font-bold text-green-600">
                          ✓
                        </span>
                        <p className="text-sm leading-6 text-gray-700 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {featured.skills?.length > 0 && (
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-950">
                    Skills you'll gain
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {featured.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-800 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "outcomes" && (
            <div>
              <h3 className="mb-3 text-xl font-bold text-gray-950 sm:text-2xl">
                Outcomes
              </h3>

              <p className="mb-5 text-sm leading-6 text-gray-600 sm:text-base">
                By the end of this course, you'll be able to:
              </p>

              <ul className="list-disc space-y-3 pl-5">
                {featured.outcomes?.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-6 text-gray-700 sm:text-base"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "audience" && (
            <div>
              <h3 className="mb-3 text-xl font-bold text-gray-950 sm:text-2xl">
                Who this course is for
              </h3>

              <ul className="list-disc space-y-3 pl-5">
                {featured.targetAudience?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm leading-6 text-gray-700 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "curriculum" && (
            <div>
              <h3 className="mb-5 text-xl font-bold text-gray-950 sm:text-2xl">
                Course Curriculum
              </h3>

              <div className="space-y-4">
                {featured.curriculum?.map((phase, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <h4 className="mb-2 text-base font-bold text-gray-950 sm:text-lg">
                      {phase.phaseTitle}
                    </h4>

                    {phase.subtitle && (
                      <p className="mb-3 text-sm font-medium leading-6 text-gray-700 sm:text-base">
                        {phase.subtitle}
                      </p>
                    )}

                    {phase.goal && (
                      <p className="mb-4 rounded-lg bg-gray-50 p-3 text-sm leading-6 text-gray-700 sm:text-base">
                        <span className="font-bold text-gray-950">Goal:</span>{" "}
                        {phase.goal}
                      </p>
                    )}

                    {phase.topics?.length > 0 && (
                      <ul className="list-disc space-y-2 pl-5">
                        {phase.topics.map((topic, topicIdx) => (
                          <li
                            key={topicIdx}
                            className="text-sm leading-6 text-gray-700 sm:text-base"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      )
      }
<section id="courses" className="w-full overflow-hidden bg-background">
  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-16 lg:py-12">
    {/* Featured */}
    <div className="min-w-0">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-3xl">
          Featured Courses
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Hand-picked SCORM modules ready to launch in your organization.
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center rounded-xl bg-muted/40 py-12 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Loading courses…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-muted/40 p-6 text-center text-sm text-muted-foreground">
          Unable to load courses. Make sure the backend is running.
        </div>
      ) : !courses || courses.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center">
          <p className="font-medium text-foreground">No courses uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>

    {/* Coming Soon */}
    <div className="min-w-0">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-3xl">
          New Courses Coming Soon
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Fresh learning experiences are on the way to help teams build stronger skills.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
        className="w-full border-t border-border bg-background shadow-sm "
      ><div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
                <a href="tel:+918839833183">
                  <Phone className=" lg:mr-2 h-2 lg:h-4 w-2 lg:w-4 " />
                  +91 88398 33183
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
  <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

  <div
    className="relative flex aspect-[16/9] items-center justify-center overflow-hidden"
    style={{ backgroundImage: gradient }}
  >
    <div className="absolute inset-0 bg-white/10" />

    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/90 shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
      <Icon className="h-9 w-9" style={{ color: iconBg }} />
    </div>
  </div>

  <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
    <div className="space-y-2">
      <h3 className="text-lg font-bold leading-snug text-foreground">
        {title}
      </h3>

      <p className="text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>

    <div className="mt-auto pt-2">
      <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
        Coming Soon
      </span>
    </div>
  </div>
</article>
  );
}
