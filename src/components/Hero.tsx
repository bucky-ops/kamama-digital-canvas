
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 delay-300"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-50 delay-700"></div>
        <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-70 delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Muchiri Collins
              </span>
              <br />
              <span className="text-white relative">
                Kamama
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Dynamic IT Consultant & Database Solutions Architect
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Delivering scalable database solutions and digital transformation for the United Nations, 
              NGOs, and government entities. Proven expertise in cloud technologies, automation, and 
              sustainable development initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-800/50 backdrop-blur-sm px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/bucky-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50"
            >
              <Github className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/muchiri-kamama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50"
            >
              <Linkedin className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="mailto:kamamamuchiri@yahoo.com"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50"
            >
              <Mail className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
