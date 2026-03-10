import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RTypeDetails from "./pages/RTypeDetails";
import ZappyDetails from "./pages/ZappyDetails";
import PlatformerDetails from "./pages/PlatformerDetails";
import HorrorDetails from "./pages/HorrorDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/rtype" element={<RTypeDetails />} />
          <Route path="/projects/zappy" element={<ZappyDetails />} />
          <Route path="/projects/platformer" element={<PlatformerDetails />} />
          <Route path="/projects/horror" element={<HorrorDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
