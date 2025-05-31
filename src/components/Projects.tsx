
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "High-Availability PostgreSQL Cluster",
      description: "Designed and implemented PostgreSQL clusters with streaming replication, achieving 99.9% uptime for 500,000+ transactions. Features automated failover and monitoring systems.",
      technologies: ["PostgreSQL", "AWS", "Docker", "Python", "Monitoring"],
      year: "2022-2024",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "99.9% uptime, 500K+ transactions"
    },
    {
      title: "Blockchain File Management System",
      description: "Developed a blockchain-based file management system for NGOs, improving audit transparency by 35%. Features immutable record keeping and smart contract automation.",
      technologies: ["Blockchain", "Smart Contracts", "Node.js", "React", "IPFS"],
      year: "2024",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "35% transparency improvement"
    },
    {
      title: "Predictive Analytics Model",
      description: "Built machine learning model for student performance analysis achieving 85% accuracy. Used for educational institutions to identify at-risk students early.",
      technologies: ["Python", "XGBoost", "Pandas", "scikit-learn", "Tableau"],
      year: "2023",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "85% prediction accuracy"
    },
    {
      title: "Full-Stack NGO Management Platform",
      description: "Developed comprehensive React/Node.js/PostgreSQL web application with JWT authentication. Includes automated reporting and workflow management features.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "GraphQL"],
      year: "2023-2024",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "20% faster report generation"
    },
    {
      title: "ArcGIS Environmental Analysis",
      description: "Conducted geospatial analysis for 1,500+ hectares in environmental restoration projects. Created detailed mapping solutions for conservation efforts.",
      technologies: ["ArcGIS", "Python", "GIS", "Spatial Analysis", "PostgreSQL"],
      year: "2022-2023",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "1,500+ hectares analyzed"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Deployed 10+ cloud applications with GraphQL APIs on AWS, Vercel, and Heroku. Implemented CI/CD pipelines and automated scaling solutions.",
      technologies: ["AWS", "Docker", "GraphQL", "CI/CD", "Terraform"],
      year: "2021-2024",
      github: "https://github.com/bucky-ops",
      live: "#",
      impact: "10+ applications deployed"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden group relative"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {project.year}
                    </span>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full border border-blue-500/30">
                      <span className="text-xs text-blue-300 font-medium">{project.impact}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs border border-slate-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <Link className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/bucky-ops"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
