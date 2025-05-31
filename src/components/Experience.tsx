
const Experience = () => {
  const experiences = [
    {
      title: "Freelance IT Consultant",
      company: "Kamama Consulting Solutions",
      location: "Nairobi, Kenya",
      period: "Apr 2020 – Present",
      achievements: [
        "Designed PostgreSQL clusters with streaming replication, achieving 99.9% uptime for 500,000+ transactions",
        "Deployed 10+ cloud applications (AWS, Vercel, Heroku) with GraphQL APIs, enhancing scalability",
        "Automated workflows for 5 NGOs, reducing report generation time by 20%",
        "Developed blockchain-based file management system improving audit transparency by 35%"
      ],
      current: true
    },
    {
      title: "Facilities Management & Transportation Section Intern",
      company: "United Nations Office at Nairobi (UNON)",
      location: "Nairobi, Kenya",
      period: "Jan 2025 – Jul 2025",
      achievements: [
        "Optimized PostgreSQL database; improved accessibility by 20%",
        "Automated data entry with Python; reduced processing time by 15%",
        "Trained 55+ staff on Microsoft Teams and digital tools, achieving 40% adoption",
        "Streamlined appraisal workflows; cut processing time by 25%"
      ],
      current: false
    },
    {
      title: "ICT and E-Government Intern",
      company: "Nakuru County Government",
      location: "Nakuru, Kenya",
      period: "May 2022 – Jul 2022",
      achievements: [
        "Digitized 520+ records into PostgreSQL, reducing retrieval time by 30%",
        "Automated queries with Python; improved execution speed by 15%",
        "Configured security systems; reduced vulnerabilities by 20%",
        "Trained 100+ staff on digital tools, achieving 40% adoption in 8 weeks"
      ],
      current: false
    }
  ];

  const education = [
    {
      degree: "Bachelor of Business Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      location: "Nairobi, Kenya",
      period: "2019–2023",
      details: "Capstone: Developed React/PostgreSQL/Tableau analytics system; reduced processing time by 25%"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      location: "Nairobi, Kenya",
      period: "2017–2019",
      details: "Capstone: Built network monitoring dashboard with Python, JavaScript, MySQL"
    }
  ];

  const certifications = [
    { name: "Google Data Analytics Professional Certificate", status: "In Progress", completion: "Expected Jun 2025" },
    { name: "AWS Certified Solutions Architect – Associate", status: "In Progress", completion: "Expected Dec 2025" },
    { name: "Cisco Cybersecurity Essentials", status: "Completed", completion: "Mar 2025" },
    { name: "Blockchain Fundamentals, Coursera", status: "Completed", completion: "Apr 2025" },
    { name: "Project Management Essentials, Coursera", status: "Completed", completion: "2023" }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          
          {/* Experience Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center space-x-3 mt-2 md:mt-0">
                      <span className="text-slate-300 font-medium">{exp.period}</span>
                      {exp.current && (
                        <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-3">{edu.location} | {edu.period}</p>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === "Completed"
                        ? "bg-green-600/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">{cert.name}</h4>
                  <p className="text-slate-400 text-xs">{cert.completion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
