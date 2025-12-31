import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Blog from "@/pages/Blog";
import Travel from "@/pages/Travel";
import TravelDetail from "@/pages/TravelDetail";
import Cat from "@/pages/Cat";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/cat" component={Cat} />
      <Route path="/blog" component={Blog} />
      <Route path="/travel" component={Travel} />
      <Route path="/travel/detail" component={TravelDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
