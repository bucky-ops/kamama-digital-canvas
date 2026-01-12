
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Cpu, Zap, Network } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
      
       {/* Enhanced animated background particles */}
       <div className="absolute inset-0 overflow-hidden">
         {/* Floating particles with varied animations */}
         <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60 animate-bounce"></div>
         <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 delay-300 animate-ping"></div>
         <div className="absolute bottom-40 left-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-50 delay-700 animate-bounce"></div>
         <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-70 delay-1000 animate-ping"></div>

         {/* Additional floating elements */}
         <div className="absolute top-1/3 left-10 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-30 animate-spin"></div>
         <div className="absolute top-2/3 right-10 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse opacity-40 animate-bounce delay-500"></div>
         <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-50 animate-ping delay-700"></div>

         {/* Geometric shapes */}
         <div className="absolute top-16 right-1/4 w-4 h-4 border border-blue-400/30 rounded-lg rotate-45 animate-spin opacity-20" style={{animationDuration: '8s'}}></div>
         <div className="absolute bottom-32 left-1/3 w-3 h-3 border border-purple-400/30 rounded-full animate-pulse opacity-25 delay-1000"></div>
         <div className="absolute top-1/2 left-3/4 w-2 h-2 border border-cyan-400/30 rounded animate-bounce opacity-30" style={{animationDelay: '2s'}}></div>
       </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse hover:animate-bounce transition-all duration-500 block">
                Muchiri Collins
              </span>
              <span className="text-white relative hover:text-blue-200 transition-colors duration-300 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron block mt-1 md:mt-2">
                Kamama
                <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse hover:animate-pulse"></div>
                {/* Animated underline glow */}
                <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse opacity-0 hover:opacity-100 blur-sm"></div>
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-300 mb-4 md:mb-6 lg:mb-8 font-light px-1 sm:px-2 leading-relaxed">
              Dynamic IT Consultant & Database Solutions Architect
            </p>
            <p className="text-sm xs:text-base sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-12 leading-relaxed px-1 sm:px-2">
              Delivering scalable database solutions and digital transformation for the United Nations,
              NGOs, and government entities. Proven expertise in cloud technologies, automation, and
              sustainable development initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12 px-2 sm:px-4">
             <Button
               onClick={() => scrollToSection("projects")}
               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:rotate-1 transform-gpu"
             >
               View My Work
             </Button>
             <Button
               onClick={() => scrollToSection("contact")}
               variant="outline"
               className="border-slate-400 text-slate-300 hover:bg-slate-800/50 backdrop-blur-sm px-8 py-3 text-lg hover:scale-105 hover:-rotate-1 hover:border-blue-400/50 hover:text-white transition-all duration-300 transform-gpu"
             >
               Let's Connect
             </Button>
           </div>

           <div className="flex items-center justify-center space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 px-2 sm:px-4 flex-wrap gap-y-3">
             <a
               href="https://github.com/bucky-ops"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-500 hover:scale-110 hover:rotate-3 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <Github className="h-6 w-6 text-slate-300 group-hover:text-cyan-300 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
               <div className="absolute inset-0 rounded-xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
             </a>
             <a
               href="https://linkedin.com/in/muchiri-kamama"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-500 hover:scale-110 hover:-rotate-3 backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <Linkedin className="h-6 w-6 text-slate-300 group-hover:text-purple-300 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
               <div className="absolute inset-0 rounded-xl bg-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
             </a>
             <a
               href="mailto:kamamamuchiri@yahoo.com"
               className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-green-600/20 hover:to-teal-600/20 transition-all duration-500 hover:scale-110 hover:rotate-3 backdrop-blur-sm border border-slate-700/50 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <Mail className="h-6 w-6 text-slate-300 group-hover:text-green-300 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
               <div className="absolute inset-0 rounded-xl bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
             </a>
             <div className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-red-600/20 hover:to-orange-600/20 transition-all duration-500 hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-slate-700/50 hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-500/20 cursor-pointer">
               <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <Cpu className="h-6 w-6 text-slate-300 group-hover:text-red-300 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
               <div className="absolute inset-0 rounded-xl bg-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
             </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-2 xs:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 xs:w-5 xs:h-8 md:w-6 md:h-10 border-2 border-slate-400 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-1.5 xs:h-2 md:h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-1 xs:mt-1.5 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
