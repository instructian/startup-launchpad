import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

import DiagramPage from "@/pages/diagram";
import ProposalPage from "@/pages/proposal";
import FAQPage from "@/pages/faq";
import ResourcesPage from "@/pages/resources";
import CalendarPage from "@/pages/calendar";
import RubricPage from "@/pages/rubric";
import BudgetPage from "@/pages/budget";
import StudentsPage from "@/pages/students";
import SponsorsPage from "@/pages/sponsors";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={DiagramPage} />
        <Route path="/proposal" component={ProposalPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/rubric" component={RubricPage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/students" component={StudentsPage} />
        <Route path="/sponsors" component={SponsorsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
