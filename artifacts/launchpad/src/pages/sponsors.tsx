import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Handshake,
  Users,
  Megaphone,
  Gift,
  CheckCircle2,
  ArrowRight,
  Building2,
  Zap,
  Target,
} from "lucide-react";

const tiers = [
  {
    name: "Founding Partner",
    amount: "$25,000+",
    color: "bg-amber-50 border-amber-300",
    badge: "bg-amber-100 text-amber-900 border-amber-300",
    icon: "🏛️",
    prizes: [
      "Title naming right for one annual event (e.g., \"The [Partner] Innovation Festival\")",
      "Named award: $5,000 Founding Partner Prize at Sunstone",
      "Premier logo placement across all program materials, signage, and digital channels",
      "Featured speaker or judge slot at Ideathon and Innovation Festival",
      "First access to student talent and venture pipeline each semester",
      "Annual impact report with venture outcomes and student metrics",
      "Dedicated partnership liaison and quarterly program briefing",
    ],
  },
  {
    name: "Catalyst Sponsor",
    amount: "$10,000",
    color: "bg-slate-50 border-slate-300",
    badge: "bg-slate-100 text-slate-900 border-slate-300",
    icon: "⚡",
    prizes: [
      "Named award: $2,500 Catalyst Prize at Innovation Festival",
      "Logo placement on program website, event materials, and venue signage",
      "One featured judge seat at Innovation Festival",
      "Invitation to venture showcase and mentor mixer",
      "Semester impact summary with team progress and outcomes",
    ],
  },
  {
    name: "Builder Sponsor",
    amount: "$5,000",
    color: "bg-white border-slate-200",
    badge: "bg-blue-50 text-blue-800 border-blue-200",
    icon: "🔧",
    prizes: [
      "Named award: $1,000 Builder Prize for best early-stage team",
      "Logo placement on program digital materials and event programs",
      "Invitation to spring Innovation Festival and networking reception",
      "Recognition in semester impact summary",
    ],
  },
  {
    name: "Community Supporter",
    amount: "$1,000–$2,500",
    color: "bg-white border-slate-200",
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    icon: "🌱",
    prizes: [
      "Name recognition in program materials and annual report",
      "Invitation to Innovation Festival as a community partner",
      "Thank-you acknowledgment at events",
    ],
  },
];

const recognitionRows = [
  { benefit: "Event title naming right", founding: true, catalyst: false, builder: false, community: false },
  { benefit: "Named prize at Sunstone or Innovation Festival", founding: true, catalyst: true, builder: true, community: false },
  { benefit: "Premier logo placement (digital + print + venue)", founding: true, catalyst: true, builder: false, community: false },
  { benefit: "Logo in digital materials only", founding: true, catalyst: true, builder: true, community: true },
  { benefit: "Featured judge or speaker slot", founding: true, catalyst: true, builder: false, community: false },
  { benefit: "Invitation to venture showcase + networking", founding: true, catalyst: true, builder: true, community: true },
  { benefit: "First access to student talent pipeline", founding: true, catalyst: false, builder: false, community: false },
  { benefit: "Annual impact report", founding: true, catalyst: true, builder: false, community: false },
  { benefit: "Quarterly partnership briefing", founding: true, catalyst: false, builder: false, community: false },
];

const whySponsor = [
  {
    icon: GraduationCap,
    title: "Talent Pipeline",
    body: "Meet motivated, cross-disciplinary students before they graduate. Identify future hires early.",
  },
  {
    icon: Zap,
    title: "Innovation Access",
    body: "See early-stage ideas across every industry. Connect with teams that may solve your sector's problems.",
  },
  {
    icon: Users,
    title: "Community Leadership",
    body: "Demonstrate your commitment to local innovation, education, and the next generation of builders.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    body: "Reach hundreds of students, faculty, alumni, and community members across two semesters of events.",
  },
  {
    icon: Target,
    title: "Named Impact",
    body: "Your support is attributed directly to prizes, workshops, or events — not a general fund.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    body: "Build a multi-year relationship with the Smith Center and a growing community of ventures.",
  },
];

const namedOpportunities = [
  { name: "Ideathon Title Sponsor", value: "$15,000+", description: "Name the fall launch event. Your brand opens every student's first entrepreneurship experience." },
  { name: "Innovation Festival Title Sponsor", value: "$20,000+", description: "Name the flagship spring event. Hundreds of attendees, judges, and alumni in the room." },
  { name: "Sunstone Prize Sponsor", value: "$10,000+", description: "Fund the top prize at the advanced venture competition. Your name goes to the winning team." },
  { name: "Prototype & Microgrant Fund", value: "$5,000+", description: "Fuel student builds. Teams use your grant to build, test, and validate ideas semester to semester." },
  { name: "Mentor Pod Sponsor", value: "$3,000+", description: "Sponsor a cohort of mentors for one semester. Named recognition in every mentor communication." },
  { name: "Workshop Series Sponsor", value: "$2,500+", description: "Fund a skill-building workshop series (e.g., customer discovery, pitch coaching, IP basics)." },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20 border-0 text-sm font-medium px-4 py-1">
            Smith Center &bull; Sponsor Prospectus
          </Badge>
          <h1 className="text-5xl font-serif font-black mb-5 leading-tight">
            Invest in the Next Generation of Builders.
          </h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Startup Launchpad is a four-semester innovation program at the Smith Center. Your sponsorship funds prizes, workshops, mentors, and prototype grants — and puts your name at the center of the university's venture pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#tiers"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              See Sponsorship Tiers <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#named"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Named Prize Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Why Partner With Launchpad?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Your investment creates direct, visible impact — for students, for your brand, and for the local innovation ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {whySponsor.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="shadow-sm border border-slate-100">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 text-primary rounded-lg p-2 inline-flex mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="tiers" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Sponsorship Tiers</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Every tier includes named recognition tied directly to prizes, events, or program elements — not generic acknowledgment.
            </p>
          </div>
          <div className="space-y-6">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`border-2 ${tier.color} shadow-sm`}>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className="text-3xl">{tier.icon}</span>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">{tier.name}</h3>
                      <Badge variant="outline" className={`text-sm font-bold mt-1 ${tier.badge}`}>
                        {tier.amount}
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tier.prizes.map((prize) => (
                      <li key={prize} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {prize}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Plan Table */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Recognition Plan at a Glance</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              All sponsor recognition is delivered at the start of each semester and documented in the program's annual impact report.
            </p>
          </div>
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-semibold text-slate-700">Benefit</TableHead>
                  <TableHead className="text-center font-semibold text-amber-700">Founding</TableHead>
                  <TableHead className="text-center font-semibold text-slate-700">Catalyst</TableHead>
                  <TableHead className="text-center font-semibold text-blue-700">Builder</TableHead>
                  <TableHead className="text-center font-semibold text-emerald-700">Community</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recognitionRows.map((row, i) => (
                  <TableRow key={row.benefit} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <TableCell className="text-sm text-slate-700">{row.benefit}</TableCell>
                    <TableCell className="text-center">{row.founding ? <CheckCircle2 className="h-4 w-4 text-amber-500 mx-auto" /> : <span className="text-slate-300 text-lg">—</span>}</TableCell>
                    <TableCell className="text-center">{row.catalyst ? <CheckCircle2 className="h-4 w-4 text-slate-500 mx-auto" /> : <span className="text-slate-300 text-lg">—</span>}</TableCell>
                    <TableCell className="text-center">{row.builder ? <CheckCircle2 className="h-4 w-4 text-blue-500 mx-auto" /> : <span className="text-slate-300 text-lg">—</span>}</TableCell>
                    <TableCell className="text-center">{row.community ? <CheckCircle2 className="h-4 w-4 text-emerald-500 mx-auto" /> : <span className="text-slate-300 text-lg">—</span>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Named Prize Opportunities */}
      <section id="named" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Named Prize & Program Opportunities</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              In addition to sponsorship tiers, partners can fund specific program elements with their name attached. These can be added to any tier or purchased as standalone gifts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {namedOpportunities.map((opp) => (
              <Card key={opp.name} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-slate-900">{opp.name}</h3>
                    <Badge className="bg-primary/10 text-primary border-0 font-bold text-xs flex-shrink-0">{opp.value}</Badge>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{opp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Invitation CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Building2 className="h-10 w-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-serif font-bold mb-4">Become a Launchpad Partner</h2>
            <p className="text-primary-foreground/85 text-lg leading-relaxed max-w-xl mx-auto">
              We invite forward-thinking companies, alumni, foundations, and community organizations to partner with Startup Launchpad. All partnerships are tailored — reach out to discuss a structure that fits your goals.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <p className="text-3xl font-black font-serif mb-1">4</p>
                <p className="text-primary-foreground/70 text-sm">Semesters of programming</p>
              </div>
              <div>
                <p className="text-3xl font-black font-serif mb-1">5</p>
                <p className="text-primary-foreground/70 text-sm">Milestone events per year</p>
              </div>
              <div>
                <p className="text-3xl font-black font-serif mb-1">∞</p>
                <p className="text-primary-foreground/70 text-sm">Opportunities to connect</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
                <Gift className="h-4 w-4" /> Request a Partnership Brief
              </div>
              <div className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <Handshake className="h-4 w-4" /> Schedule a Conversation
              </div>
            </div>
            <p className="text-center mt-5 text-primary-foreground/60 text-sm">
              Contact: advancement@smithcenter.edu &bull; Smith Center, Room 200
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
