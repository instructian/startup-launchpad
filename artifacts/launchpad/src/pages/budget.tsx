import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type BudgetLine = {
  id: string;
  category: string;
  item: string;
  notes: string;
  low: number;
  mid: number;
  high: number;
  priority: "Essential" | "Recommended" | "Stretch";
};

type StaffRole = {
  role: string;
  type: string;
  hoursPerWeek: string;
  semestersActive: string;
  totalHours: string;
  notes: string;
};

const budgetLines: BudgetLine[] = [
  // Staffing
  { id: "s1", category: "Staffing", item: "Program Director (0.25 FTE)", notes: "Existing staff member with quarter-time allocation, or new hire shared with center", low: 15000, mid: 20000, high: 28000, priority: "Essential" },
  { id: "s2", category: "Staffing", item: "Student Ambassadors (2–4 students)", notes: "Hourly or stipend-based. Recruitment, peer outreach, event support", low: 2000, mid: 4000, high: 6000, priority: "Recommended" },
  { id: "s3", category: "Staffing", item: "Workshop Facilitators", notes: "Stipends for external guest facilitators for 6–8 workshops per year", low: 1500, mid: 3000, high: 5000, priority: "Recommended" },

  // Events
  { id: "e1", category: "Events", item: "Ideathon Production (Year 1 & 2)", notes: "Venue, AV, catering, marketing, logistics for 2 annual Ideathon events", low: 3000, mid: 5000, high: 8000, priority: "Essential" },
  { id: "e2", category: "Events", item: "Innovation Festival Production (Year 1 & 2)", notes: "Venue, AV, catering, judge coordination, prizes, marketing for 2 annual festivals", low: 4000, mid: 7000, high: 12000, priority: "Essential" },
  { id: "e3", category: "Events", item: "Sunstone Qualifier Support", notes: "Mock judging sessions, pitch coaching, application support for qualifying teams", low: 500, mid: 1000, high: 2000, priority: "Recommended" },
  { id: "e4", category: "Events", item: "Event Prize Pool (Ideathon + Festival)", notes: "Cash or in-kind prizes for winning teams at milestone events", low: 2000, mid: 4000, high: 8000, priority: "Recommended" },

  // Mentors & Judges
  { id: "m1", category: "Mentors & Judges", item: "Mentor Coordination & Appreciation", notes: "Onboarding, scheduling platform, thank-you stipends or gifts for mentor pool", low: 500, mid: 1500, high: 3000, priority: "Recommended" },
  { id: "m2", category: "Mentors & Judges", item: "Judge Honoraria", notes: "Optional recognition for external judges across 4 annual events", low: 0, mid: 500, high: 2000, priority: "Stretch" },
  { id: "m3", category: "Mentors & Judges", item: "Legal / IP Clinic Access", notes: "Law school partnership or contracted clinic time for advanced teams", low: 0, mid: 1000, high: 3000, priority: "Stretch" },

  // Technology & Tools
  { id: "t1", category: "Technology & Tools", item: "Launchpad Tool License", notes: "SaaS platform for project tracking, evidence capture, and pitch preparation", low: 500, mid: 1500, high: 4000, priority: "Essential" },
  { id: "t2", category: "Technology & Tools", item: "Communications & Scheduling Tools", notes: "Email platform, team messaging, calendar tools (may be covered by university IT)", low: 0, mid: 500, high: 1200, priority: "Essential" },
  { id: "t3", category: "Technology & Tools", item: "Design & Prototype Tools", notes: "Figma, Canva, or similar (many universities have site licenses)", low: 0, mid: 300, high: 800, priority: "Recommended" },
  { id: "t4", category: "Technology & Tools", item: "Video / Livestream Equipment", notes: "For recording festival pitches and creating student journey content", low: 0, mid: 500, high: 2000, priority: "Stretch" },

  // Microgrants & Prototype Fund
  { id: "g1", category: "Microgrants & Prototype Fund", item: "Pilot Microgrant Fund (Year 1)", notes: "Small grants ($200–$500) for early prototyping materials, user testing, hosting fees", low: 1000, mid: 2500, high: 5000, priority: "Recommended" },
  { id: "g2", category: "Microgrants & Prototype Fund", item: "Advanced Team Grants (Year 2)", notes: "Larger grants ($500–$2,000) for MVP build costs, market research, or pilot expenses", low: 0, mid: 3000, high: 8000, priority: "Stretch" },

  // Marketing & Recruitment
  { id: "k1", category: "Marketing & Recruitment", item: "Program Branding & Collateral", notes: "Logo, one-pagers, event flyers, social templates (one-time setup cost)", low: 500, mid: 1500, high: 3000, priority: "Essential" },
  { id: "k2", category: "Marketing & Recruitment", item: "Ongoing Marketing & Social", notes: "Paid promotion, print materials, recruitment campaigns across 2 years", low: 500, mid: 1000, high: 2500, priority: "Recommended" },
];

const staffRoles: StaffRole[] = [
  {
    role: "Program Director",
    type: "Staff (0.25 FTE)",
    hoursPerWeek: "10 hrs",
    semestersActive: "All 4 semesters + summers",
    totalHours: "~480 hrs/yr",
    notes: "Primary accountability. Manages events, mentors, judges, workshops, student teams, and reporting.",
  },
  {
    role: "Student Ambassador (×2–4)",
    type: "Hourly / Stipend",
    hoursPerWeek: "5–8 hrs each",
    semestersActive: "Fall & Spring semesters",
    totalHours: "200–400 hrs/yr total",
    notes: "Peer recruitment, team formation support, workshop logistics, social media, event day ops.",
  },
  {
    role: "Workshop Facilitator (×6–8 per year)",
    type: "Contract / Stipend",
    hoursPerWeek: "Variable",
    semestersActive: "Throughout year",
    totalHours: "4–8 hrs per workshop",
    notes: "External or faculty experts leading skill workshops (problem discovery, prototyping, pitch, finance, etc.).",
  },
  {
    role: "Mentor Pool (×10–20 mentors)",
    type: "Volunteer / Light Stipend",
    hoursPerWeek: "1–3 hrs",
    semestersActive: "Year 2 primarily",
    totalHours: "20–60 hrs/mentor/yr",
    notes: "Business, technical, design, and domain mentors. Matched to teams by skill and stage.",
  },
  {
    role: "Judge Pool (×5–10 per event)",
    type: "Volunteer",
    hoursPerWeek: "Event day only",
    semestersActive: "4 events/year",
    totalHours: "4–6 hrs per event",
    notes: "External reviewers for Ideathon and Innovation Festival. Sourced from alumni, industry, and faculty.",
  },
  {
    role: "Faculty Partner (×2–3)",
    type: "Existing Faculty Role",
    hoursPerWeek: "1–2 hrs",
    semestersActive: "Year-round",
    totalHours: "50–80 hrs/yr",
    notes: "Academic advisors, workshop co-leaders, assessment support. No additional cost if within faculty service.",
  },
];

const categories = Array.from(new Set(budgetLines.map(l => l.category)));

const priorityVariant = (p: string) => {
  switch (p) {
    case "Essential": return "destructive";
    case "Recommended": return "default";
    case "Stretch": return "secondary";
    default: return "outline";
  }
};

const fmt = (n: number) =>
  n === 0 ? "—" : `$${n.toLocaleString()}`;

const categoryTotals = (cat: string, field: "low" | "mid" | "high") =>
  budgetLines.filter(l => l.category === cat).reduce((s, l) => s + l[field], 0);

const grandTotal = (field: "low" | "mid" | "high") =>
  budgetLines.reduce((s, l) => s + l[field], 0);

const CATEGORY_COLOR: Record<string, string> = {
  "Staffing": "bg-blue-50",
  "Events": "bg-emerald-50",
  "Mentors & Judges": "bg-violet-50",
  "Technology & Tools": "bg-amber-50",
  "Microgrants & Prototype Fund": "bg-rose-50",
  "Marketing & Recruitment": "bg-slate-50",
};

export default function BudgetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Budget & Staffing Model</h1>
        <p className="text-lg text-slate-600">
          Pilot-year line-item budget estimates and staffing model for the Startup Launchpad program.
          Figures are presented as low / mid / high ranges based on institutional context.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {(["low", "mid", "high"] as const).map((tier) => (
          <Card key={tier} className={`shadow-sm text-center ${tier === "mid" ? "border-primary ring-1 ring-primary/20" : ""}`}>
            <CardContent className="pt-5 pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                {tier === "low" ? "Conservative" : tier === "mid" ? "Recommended" : "Full Build"}
              </p>
              <p className="text-3xl font-bold font-serif text-slate-900">{fmt(grandTotal(tier))}</p>
              <p className="text-xs text-slate-400 mt-1">Pilot Year Total ({tier})</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 mb-8 text-sm text-sky-900">
        <strong>Note:</strong> Staffing costs assume partial reallocation of an existing staff position. If a new hire is required, staffing costs will be higher. Many technology tools may be covered by existing university licenses.
      </div>

      {/* Budget Table by Category */}
      <Card className="shadow-sm mb-10">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-serif">Line-Item Budget Estimates</CardTitle>
          <CardDescription>All figures are annual estimates for the pilot year. Ranges reflect low (minimal launch), mid (recommended), and high (full program build) scenarios.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="w-[200px] pl-5">Category / Item</TableHead>
                  <TableHead className="w-[260px] hidden md:table-cell">Notes</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Low</TableHead>
                  <TableHead className="text-right">Mid</TableHead>
                  <TableHead className="text-right pr-5">High</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((cat) => {
                  const lines = budgetLines.filter(l => l.category === cat);
                  return [
                    <TableRow key={`cat-${cat}`} className={`${CATEGORY_COLOR[cat] || "bg-slate-50"}`}>
                      <TableCell colSpan={6} className="font-bold text-slate-700 text-xs uppercase tracking-wide pl-5 py-2 border-t-2 border-slate-200">
                        {cat}
                      </TableCell>
                    </TableRow>,
                    ...lines.map((line) => (
                      <TableRow key={line.id} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-800 pl-5 text-sm">{line.item}</TableCell>
                        <TableCell className="text-xs text-slate-500 hidden md:table-cell">{line.notes}</TableCell>
                        <TableCell>
                          <Badge variant={priorityVariant(line.priority)} className="text-xs">
                            {line.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-slate-600 text-sm">{fmt(line.low)}</TableCell>
                        <TableCell className="text-right font-medium text-slate-800 text-sm">{fmt(line.mid)}</TableCell>
                        <TableCell className="text-right text-slate-600 text-sm pr-5">{fmt(line.high)}</TableCell>
                      </TableRow>
                    )),
                    <TableRow key={`subtotal-${cat}`} className={`${CATEGORY_COLOR[cat] || "bg-slate-50"} border-b-2 border-slate-200`}>
                      <TableCell className="pl-5 text-xs font-semibold text-slate-600 py-1.5" colSpan={3}>
                        Subtotal — {cat}
                      </TableCell>
                      <TableCell className="text-right text-xs font-semibold text-slate-600">{fmt(categoryTotals(cat, "low"))}</TableCell>
                      <TableCell className="text-right text-xs font-semibold text-slate-800">{fmt(categoryTotals(cat, "mid"))}</TableCell>
                      <TableCell className="text-right text-xs font-semibold text-slate-600 pr-5">{fmt(categoryTotals(cat, "high"))}</TableCell>
                    </TableRow>,
                  ];
                })}
                <TableRow className="bg-slate-900 text-white">
                  <TableCell className="pl-5 font-bold text-white py-3" colSpan={3}>
                    TOTAL — Pilot Year Estimate
                  </TableCell>
                  <TableCell className="text-right font-bold text-white">{fmt(grandTotal("low"))}</TableCell>
                  <TableCell className="text-right font-bold text-white text-base">{fmt(grandTotal("mid"))}</TableCell>
                  <TableCell className="text-right font-bold text-white pr-5">{fmt(grandTotal("high"))}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Staffing Model */}
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-serif">Staffing Model</CardTitle>
          <CardDescription>Roles, estimated weekly hours, and scope of involvement across the pilot year.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="pl-5 w-[180px]">Role</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Hrs / Week</TableHead>
                  <TableHead className="hidden sm:table-cell">Semesters Active</TableHead>
                  <TableHead className="hidden md:table-cell">Est. Total Hours</TableHead>
                  <TableHead className="hidden lg:table-cell pr-5">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffRoles.map((role, i) => (
                  <TableRow key={i} className="hover:bg-slate-50/50">
                    <TableCell className="font-semibold text-slate-800 pl-5 text-sm">{role.role}</TableCell>
                    <TableCell className="text-xs text-slate-600">
                      <span className="bg-slate-100 px-2 py-0.5 rounded-full">{role.type}</span>
                    </TableCell>
                    <TableCell className="text-sm text-slate-700">{role.hoursPerWeek}</TableCell>
                    <TableCell className="text-sm text-slate-600 hidden sm:table-cell">{role.semestersActive}</TableCell>
                    <TableCell className="text-sm font-medium text-slate-800 hidden md:table-cell">{role.totalHours}</TableCell>
                    <TableCell className="text-xs text-slate-500 hidden lg:table-cell pr-5">{role.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 bg-slate-50 border rounded-xl px-5 py-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-700 mb-1">Budget Notes & Assumptions</p>
        <ul className="list-disc list-inside space-y-1">
          <li>All figures are pilot-year estimates. Year 2 costs may increase as mentor pools, microgrant funds, and event production scale.</li>
          <li>Staffing costs assume partial reallocation of an existing Smith Center staff member. Dedicated hire would increase costs significantly.</li>
          <li>Event costs assume use of on-campus venues. Off-campus or rented venues would add $2,000–$5,000 per event.</li>
          <li>Technology tools may be covered by existing university licenses. Verify with IT before budgeting separately.</li>
          <li>Microgrant and prototype funds can be supplemented by sponsorship revenue or advancement gifts tied to the program.</li>
        </ul>
      </div>
    </div>
  );
}
