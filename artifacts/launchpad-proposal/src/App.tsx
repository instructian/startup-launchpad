import { Switch, Route, Router as WouterRouter } from "wouter";
import Proposal from "@/pages/Proposal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Proposal} />
      <Route path="/proposal" component={Proposal} />
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
