
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  As a dynamic IT Consultant with over 5 years of experience, I specialize in delivering 
                  scalable database solutions and driving digital transformation initiatives for prestigious 
                  organizations including the United Nations, NGOs, and government entities across Kenya.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  My expertise spans across PostgreSQL optimization, cloud architecture, and automation 
                  systems that have consistently delivered 99.9% system uptime and improved operational 
                  efficiency by up to 30%. I'm passionate about leveraging technology to support 
                  Sustainable Development Goals (SDGs) and creating meaningful impact.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Currently pursuing advanced certifications in AWS Solutions Architecture and Google 
                  Data Analytics, I'm committed to staying at the forefront of technological innovation 
                  while mentoring teams and driving sustainable digital solutions.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
                  <p className="text-slate-300">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                  <p className="text-slate-300">System Uptime</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
                  <p className="text-slate-300">Staff Trained</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                  <p className="text-slate-300">Cloud Applications</p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• AWS Solutions Architecture Certification</li>
                  <li>• Google Data Analytics Professional Certificate</li>
                  <li>• Blockchain & Cryptocurrency Technologies</li>
                  <li>• Sustainable Development Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
