
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skills3DBackground from "@/components/Skills3DBackground";
import AIChatAssistant from "@/components/AIChatAssistant";
import AIProjectRecommendations from "@/components/AIProjectRecommendations";
import AIAnalyticsDashboard from "@/components/AIAnalyticsDashboard";
import AIContentGenerator from "@/components/AIContentGenerator";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 3D Skills Background */}
      <ErrorBoundary>
        <Skills3DBackground />
      </ErrorBoundary>

      {/* Enhanced background with parallax layers */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none z-10"></div>

      {/* Parallax background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-30">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 rounded-full w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 animate-in fade-in-50 duration-300"
          size="icon"
        >
          <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      )}

      {/* AI Chat Assistant */}
      <AIChatAssistant />

      {/* AI Project Recommendations */}
      <AIProjectRecommendations />

      {/* AI Analytics Dashboard */}
      <AIAnalyticsDashboard />

      {/* AI Content Generator */}
      <AIContentGenerator />
    </div>
  );
};

export default Index;
