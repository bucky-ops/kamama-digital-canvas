
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Collaborate?</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  I'm always excited to work on innovative projects that leverage technology for 
                  positive impact. Whether you need database optimization, cloud architecture, 
                  or digital transformation consulting, let's discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <Mail className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">kamamamuchiri@yahoo.com</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <span className="h-5 w-5 text-blue-400 group-hover:text-blue-300 flex items-center justify-center text-sm transition-colors">📱</span>
                    <span className="text-slate-300 group-hover:text-white transition-colors">+254 700 845 084</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <span className="h-5 w-5 text-blue-400 group-hover:text-blue-300 flex items-center justify-center text-sm transition-colors">📍</span>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="mailto:kamamamuchiri@yahoo.com"
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-4">Areas of Expertise</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="hover:text-white transition-colors cursor-default">• Database Architecture & Optimization</li>
                  <li className="hover:text-white transition-colors cursor-default">• Cloud Infrastructure Design</li>
                  <li className="hover:text-white transition-colors cursor-default">• Digital Transformation Consulting</li>
                  <li className="hover:text-white transition-colors cursor-default">• Automation & Process Improvement</li>
                  <li className="hover:text-white transition-colors cursor-default">• Team Training & Mentorship</li>
                  <li className="hover:text-white transition-colors cursor-default">• Sustainable Development Solutions</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/bucky-ops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 text-center hover:scale-105 border border-slate-600/30 hover:border-blue-500/50"
                  >
                    <Github className="h-6 w-6 text-slate-300 mx-auto mb-2 hover:text-white transition-colors" />
                    <span className="text-sm text-slate-300 hover:text-white transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/muchiri-kamama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 text-center hover:scale-105 border border-slate-600/30 hover:border-blue-500/50"
                  >
                    <Linkedin className="h-6 w-6 text-slate-300 mx-auto mb-2 hover:text-white transition-colors" />
                    <span className="text-sm text-slate-300 hover:text-white transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:kamamamuchiri@yahoo.com"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300 text-center hover:scale-105 border border-slate-600/30 hover:border-blue-500/50"
                  >
                    <Mail className="h-6 w-6 text-slate-300 mx-auto mb-2 hover:text-white transition-colors" />
                    <span className="text-sm text-slate-300 hover:text-white transition-colors">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
        <p className="text-slate-400">
          © 2025 Muchiri Collins Kamama. Building the future, one solution at a time.
        </p>
      </div>
    </section>
  );
};

export default Contact;
