
import { Button } from "@/components/ui/button";
import { Github, Link, Star, GitFork, Calendar } from "lucide-react";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";

const Projects = () => {
  const { repos, loading, error } = useGitHubRepos("bucky-ops");

  if (loading) {
    return (
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="text-center py-20">
              <p className="text-slate-400">Failed to load GitHub repositories. Please try again later.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "text-yellow-400",
      TypeScript: "text-blue-400",
      Python: "text-green-400",
      Java: "text-orange-400",
      Go: "text-cyan-400",
      Rust: "text-red-400",
      HTML: "text-orange-300",
      CSS: "text-blue-300",
      Shell: "text-gray-400",
      Dockerfile: "text-blue-500",
    };
    return colors[language || ""] || "text-slate-400";
  };

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
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden group relative"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {formatDate(repo.created_at)}
                    </span>
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center space-x-1">
                          <GitFork className="h-3 w-3" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 capitalize">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 min-h-[60px]">
                    {repo.description || "No description available for this repository."}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.language && (
                      <span
                        className={`px-3 py-1 bg-slate-700/50 rounded-full text-xs border border-slate-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 ${getLanguageColor(repo.language)}`}
                      >
                        {repo.language}
                      </span>
                    )}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs border border-slate-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={repo.html_url}
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
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-slate-500 text-slate-300 hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                          <Link className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center text-xs text-slate-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
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
