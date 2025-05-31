
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Muchiri Collins
              </span>
              <br />
              <span className="text-white">Kamama</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Dynamic IT Consultant & Database Solutions Architect
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              Delivering scalable database solutions and digital transformation for the United Nations, 
              NGOs, and government entities. Proven expertise in cloud technologies, automation, and 
              sustainable development initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/muchiri-kamama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200"
            >
              <Github className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/muchiri-kamama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
            <a
              href="mailto:kamamamuchiri@yahoo.com"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200"
            >
              <Mail className="h-6 w-6 text-slate-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
