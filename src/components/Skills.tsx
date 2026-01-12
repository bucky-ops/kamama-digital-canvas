
const Skills = () => {
  const skillCategories = [
    {
      title: "Database Management",
      skills: [
        { name: "PostgreSQL", level: 95 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MS SQL Server", level: 75 }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS (EC2, S3, RDS, Lambda)", level: 90 },
        { name: "Azure", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "Heroku", level: 80 }
      ]
    },
    {
      title: "Programming & Automation",
      skills: [
        { name: "Python (Pandas, scikit-learn)", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 95 },
        { name: "Bash", level: 80 }
      ]
    },
    {
      title: "Analytics & Visualization",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "ArcGIS", level: 80 },
        { name: "Machine Learning (XGBoost)", level: 75 },
        { name: "Data Analysis", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative animate-in fade-in-50 duration-1000">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:animate-pulse transition-all duration-300">
              Technical Skills
            </span>
          </h2>
          
           <div className="grid md:grid-cols-2 gap-8">
             {skillCategories.map((category, index) => (
               <div
                 key={category.title}
                 className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-in slide-in-from-bottom-8 duration-1000`}
                 style={{ animationDelay: `${index * 200}ms` }}
               >
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 4 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

           <div className="mt-16 grid md:grid-cols-3 gap-8">
             <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center hover:border-blue-400/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group animate-in slide-in-from-bottom-8 duration-1000 delay-1200">
               <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Security & Compliance</h4>
               <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">SSL/TLS, JWT, Firewall Configuration</p>
             </div>
             <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 text-center hover:border-purple-400/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group animate-in slide-in-from-bottom-8 duration-1000 delay-1400">
               <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">DevOps & CI/CD</h4>
               <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Git, Docker, Cloud Deployments</p>
             </div>
             <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center hover:border-blue-400/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group animate-in slide-in-from-bottom-8 duration-1000 delay-1600">
               <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Professional Skills</h4>
               <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Leadership, Stakeholder Engagement, Process Optimization</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
