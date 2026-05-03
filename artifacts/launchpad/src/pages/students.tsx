import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  Rocket,
  Wrench,
  Trophy,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Compass,
  Zap,
  Star,
  FlaskConical,
} from "lucide-react";

const tracks = [
  {
    icon: Compass,
    name: "Explorer Track",
    when: "Fall Year 1",
    tagline: "No idea? No problem.",
    description:
      "Start with curiosity. We give you challenge prompts, structured discovery sessions, and a team-matching mixer to help you find a problem worth solving.",
    good_for: ["First-year students", "Open-minded learners", "Anyone curious about entrepreneurship"],
    color: "bg-sky-50 border-sky-200 text-sky-700",
    badge: "bg-sky-100 text-sky-800",
  },
  {
    icon: Users,
    name: "Joiner Track",
    when: "Spring Year 1 or Rolling",
    tagline: "Find a team that needs your skills.",
    description:
      "Join an existing team as a business, design, engineering, content, research, or operations contributor. Rolling entry is always open.",
    good_for: ["Students with a specific skill", "Late entrants", "Anyone who wants real project experience"],
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: FlaskConical,
    name: "Accelerator Track",
    when: "Fall Year 2",
    tagline: "Already have a prototype or idea?",
    description:
      "Skip the basics. Bring your capstone project, research result, or early prototype and get direct support on customer validation, go-to-market planning, and pitch readiness.",
    good_for: ["Students with a prototype", "Capstone and research teams", "Returning participants"],
    color: "bg-violet-50 border-violet-200 text-violet-700",
    badge: "bg-violet-100 text-violet-800",
  },
  {
    icon: Wrench,
    name: "Contributor Track",
    when: "Any Entry Point",
    tagline: "Build something real with your major.",
    description:
      "Bring your major to life. Whether you study business, CS, design, communications, or anything else, your skills are exactly what teams need.",
    good_for: ["Business & strategy students", "Designers & storytellers", "Engineers & researchers"],
    color: "bg-amber-50 border-amber-200 text-amber-700",
    badge: "bg-amber-100 text-amber-800",
  },
];

const roadmap = [
  {
    level: "Level 1",
    semester: "Fall Y1",
    theme: "Discover",
    mission: "Find a meaningful problem and form a team.",
    deliverable: "Problem brief, user segment, rough solution thesis",
    event: "Ideathon — 90-second idea pitch",
  },
  {
    level: "Level 2",
    semester: "Spring Y1",
    theme: "Validate",
    mission: "Prove someone has the problem and wants a solution.",
    deliverable: "Customer interviews, prototype, evidence record",
    event: "Innovation Festival — 3-minute validation pitch",
  },
  {
    level: "Level 3",
    semester: "Fall Y2",
    theme: "Build",
    mission: "Turn validation into a working MVP or pilot.",
    deliverable: "MVP/pilot, business model, traction target",
    event: "Advanced Ideathon — 5-minute progress pitch",
  },
  {
    level: "Level 4",
    semester: "Spring Y2",
    theme: "Launch",
    mission: "Demonstrate readiness for external support.",
    deliverable: "Business plan, traction, go-to-market strategy",
    event: "Innovation Festival — 7–10 min Sunstone qualifier",
  },
];

const benefits = [
  { icon: GraduationCap, text: "Real entrepreneurship experience that complements any major" },
  { icon: Users, text: "Cross-disciplinary team with real roles and real stakes" },
  { icon: Lightbulb, text: "Mentor access across business, design, engineering, and law" },
  { icon: Trophy, text: "Visible milestones: Ideathon, Innovation Festival, and Sunstone" },
  { icon: Rocket, text: "Workshops in discovery, prototyping, validation, and pitching" },
  { icon: Zap, text: "Prototype fund access and makerspace support" },
  { icon: Star, text: "Portfolio-ready work: interviews, evidence, pitches, and traction" },
  { icon: CheckCircle2, text: "A potential pathway to Sunstone, the advanced venture competition" },
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20 border-0 text-sm font-medium px-4 py-1">
            Smith Center &bull; Startup Launchpad
          </Badge>
          <h1 className="text-5xl font-serif font-black mb-5 leading-tight">
            Turn Your Curiosity Into a Venture.
          </h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Startup Launchpad is a four-semester program that takes you from idea discovery to venture-ready — whether you have an idea or not. Join a team, build something real, and pitch it at our annual events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Find Your Track <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              See the Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">What You Get Out of Launchpad</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              This is not a class. It is a two-year, hands-on program with real stakes, real mentors, and real outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="bg-primary/10 text-primary rounded-lg p-2 flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Tracks */}
      <section id="tracks" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Four Ways to Join</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              You do not need a startup idea. You need a willingness to learn and contribute. Pick the track that fits where you are today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <Card key={track.name} className={`border-2 ${track.color.split(" ").find(c => c.startsWith("border-"))} shadow-sm`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-lg ${track.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{track.name}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${track.badge}`}>{track.when}</span>
                      </div>
                    </div>
                    <p className="font-semibold text-slate-800 mb-2 italic">{track.tagline}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{track.description}</p>
                    <div className="space-y-1">
                      {track.good_for.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Your Semester-by-Semester Roadmap</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Each semester builds on the last. You move from curious explorer to venture-ready founder over four structured stages.
            </p>
          </div>
          <div className="space-y-4">
            {roadmap.map((stage, i) => (
              <div key={stage.level} className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </div>
                  {i < roadmap.length - 1 && <div className="w-0.5 bg-primary/20 flex-1 mt-2" style={{ minHeight: "2rem" }} />}
                </div>
                <Card className="flex-1 shadow-sm">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <span className="font-bold text-slate-900">{stage.semester}</span>
                      <Badge variant="outline" className="text-xs">{stage.theme}</Badge>
                    </div>
                    <p className="text-slate-700 text-sm font-medium mb-1">{stage.mission}</p>
                    <p className="text-slate-500 text-xs mb-2">Deliverables: {stage.deliverable}</p>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                      <Trophy className="h-3.5 w-3.5" />
                      {stage.event}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-primary-foreground/85 text-lg mb-8 leading-relaxed">
            Applications open each fall. Rolling contributor entry is available year-round. Complete the intake form to get matched with a track, a team, and your first workshop.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/90 transition-colors cursor-pointer">
            Apply to Launchpad <ArrowRight className="h-5 w-5" />
          </div>
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Questions? Contact the Smith Center &bull; launchpad@smithcenter.edu
          </p>
        </div>
      </section>
    </div>
  );
}
