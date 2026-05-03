import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

type Resource = {
  id: string;
  name: string;
  category: string;
  classification: "Essential" | "Recommended" | "Stretch";
  owner: string;
  timing: string;
  risk: string;
};

const rawData: Resource[] = [
  { id: "1", name: "Program Director / Lead", category: "Staffing", classification: "Essential", owner: "Smith Center", timing: "Year-round", risk: "Program lacks continuity and accountability" },
  { id: "2", name: "Student Ambassadors", category: "Staffing", classification: "Recommended", owner: "Program Director", timing: "Recruitment phases", risk: "Low peer-to-peer engagement" },
  { id: "3", name: "Event Budget", category: "Budget", classification: "Essential", owner: "Advancement/Center", timing: "Fall/Spring", risk: "Cannot host milestones" },
  { id: "4", name: "Microgrant Fund", category: "Budget", classification: "Recommended", owner: "Advancement", timing: "Spring Y1 onwards", risk: "Teams cannot afford prototypes" },
  { id: "5", name: "Launchpad Tool Admin", category: "Technology", classification: "Essential", owner: "Program Director", timing: "Year-round", risk: "Loss of evidence tracking layer" },
  { id: "6", name: "Makerspace / Design Lab Access", category: "Spaces", classification: "Essential", owner: "Engineering/Art", timing: "Spring Y1 onwards", risk: "No physical prototyping capability" },
  { id: "7", name: "Mentor Pool (Biz/Tech/Design)", category: "Mentors", classification: "Essential", owner: "Alumni Affairs", timing: "Year 2 primarily", risk: "Teams hit expertise walls" },
  { id: "8", name: "Judge Pool", category: "Judges", classification: "Essential", owner: "Program Director", timing: "Event weeks", risk: "No external validation/feedback" },
  { id: "9", name: "Workshop Facilitators", category: "Workshops", classification: "Recommended", owner: "Faculty Partners", timing: "Monthly", risk: "Lower skill acquisition rate" },
  { id: "10", name: "Communications Channels", category: "Marketing", classification: "Essential", owner: "University Comms", timing: "Year-round", risk: "Low recruitment and visibility" },
  { id: "11", name: "Legal / IP Clinic Access", category: "Mentors", classification: "Stretch", owner: "Law School", timing: "Spring Y2", risk: "Teams lack structure for incorporation" },
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState<string>("All");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = Array.from(new Set(rawData.map(r => r.category))).sort();

  const filteredData = rawData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.risk.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === "All" || item.classification === filterClass;
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    return matchesSearch && matchesClass && matchesCategory;
  });

  const getBadgeVariant = (classification: string) => {
    switch(classification) {
      case "Essential": return "destructive"; // Red-ish
      case "Recommended": return "default"; // Primary blue
      case "Stretch": return "secondary"; // Gray/Neutral
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Resources Manifest</h1>
        <p className="text-lg text-slate-600">Complete inventory of operational requirements for the Startup Launchpad program.</p>
      </div>

      <div className="bg-white p-4 rounded-xl border shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="text"
            placeholder="Search resources or risks..." 
            className="pl-9 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-testid="input-search-resources"
          />
        </div>
        
        <div className="w-full md:w-1/4">
          <Select value={filterClass} onValueChange={setFilterClass}>
            <SelectTrigger data-testid="select-classification">
              <SelectValue placeholder="Classification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Classifications</SelectItem>
              <SelectItem value="Essential">Essential</SelectItem>
              <SelectItem value="Recommended">Recommended</SelectItem>
              <SelectItem value="Stretch">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/4">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger data-testid="select-category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[250px]">Resource Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Classification</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Timing</TableHead>
              <TableHead className="hidden md:table-cell">Risk if Missing</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-slate-900">{item.name}</TableCell>
                  <TableCell className="text-slate-600">{item.category}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(item.classification)}>
                      {item.classification}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">{item.owner}</TableCell>
                  <TableCell className="text-slate-600">{item.timing}</TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-slate-500 italic">
                    {item.risk}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No resources found matching your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
