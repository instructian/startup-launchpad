import { Switch, Route, Router as WouterRouter } from "wouter";
import Proposal from "@/pages/Proposal";
import FAQ from "@/pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Proposal} />
      <Route path="/proposal" component={Proposal} />
      <Route path="/faq" component={FAQ} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
