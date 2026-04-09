import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import ObjectsPage from "./pages/ObjectsPage";
import StagesPage from "./pages/StagesPage";
import AdvantagesPage from "./pages/AdvantagesPage";
import BusinessPage from "./pages/BusinessPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ContactsPage from "./pages/ContactsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/objects" element={<ObjectsPage />} />
          <Route path="/stages" element={<StagesPage />} />
          <Route path="/advantages" element={<AdvantagesPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
