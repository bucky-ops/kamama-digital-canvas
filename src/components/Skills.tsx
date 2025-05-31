
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
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Security & Compliance</h4>
              <p className="text-slate-300">SSL/TLS, JWT, Firewall Configuration</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">DevOps & CI/CD</h4>
              <p className="text-slate-300">Git, Docker, Cloud Deployments</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Professional Skills</h4>
              <p className="text-slate-300">Leadership, Stakeholder Engagement, Process Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
