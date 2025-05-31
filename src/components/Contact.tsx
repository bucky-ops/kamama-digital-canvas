
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
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Collaborate?</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  I'm always excited to work on innovative projects that leverage technology for 
                  positive impact. Whether you need database optimization, cloud architecture, 
                  or digital transformation consulting, let's discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">kamamamuchiri@yahoo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="h-5 w-5 text-blue-400 flex items-center justify-center text-sm">📱</span>
                    <span className="text-slate-300">+254 700 845 084</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="h-5 w-5 text-blue-400 flex items-center justify-center text-sm">📍</span>
                    <span className="text-slate-300">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="mailto:kamamamuchiri@yahoo.com"
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                <h4 className="text-xl font-bold text-white mb-4">Areas of Expertise</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Database Architecture & Optimization</li>
                  <li>• Cloud Infrastructure Design</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• Automation & Process Improvement</li>
                  <li>• Team Training & Mentorship</li>
                  <li>• Sustainable Development Solutions</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/muchiri-kamama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-colors duration-200 text-center"
                  >
                    <Github className="h-6 w-6 text-slate-300 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/muchiri-kamama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-colors duration-200 text-center"
                  >
                    <Linkedin className="h-6 w-6 text-slate-300 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:kamamamuchiri@yahoo.com"
                    className="flex-1 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-colors duration-200 text-center"
                  >
                    <Mail className="h-6 w-6 text-slate-300 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">Email</span>
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
