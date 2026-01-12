import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, TrendingUp, Clock, Target, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'database' | 'cloud' | 'analytics' | 'web' | 'automation';
  impact: string;
  relevance: number;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'High-Availability PostgreSQL Cluster',
    description: 'Designed and implemented PostgreSQL clusters with streaming replication, achieving 99.9% uptime for 500,000+ transactions.',
    technologies: ['PostgreSQL', 'AWS', 'Docker', 'Python', 'Monitoring'],
    category: 'database',
    impact: '99.9% uptime, 500K+ transactions',
    relevance: 0
  },
  {
    id: '2',
    title: 'Blockchain File Management System',
    description: 'Developed a blockchain-based file management system for NGOs, improving audit transparency by 35%.',
    technologies: ['Blockchain', 'Smart Contracts', 'Node.js', 'React', 'IPFS'],
    category: 'web',
    impact: '35% transparency improvement',
    relevance: 0
  },
  {
    id: '3',
    title: 'Predictive Analytics Model',
    description: 'Built machine learning model for student performance analysis achieving 85% accuracy.',
    technologies: ['Python', 'XGBoost', 'Pandas', 'scikit-learn', 'Tableau'],
    category: 'analytics',
    impact: '85% prediction accuracy',
    relevance: 0
  },
  {
    id: '4',
    title: 'Cloud Infrastructure Automation',
    description: 'Deployed 10+ cloud applications with GraphQL APIs on AWS, Vercel, and Heroku.',
    technologies: ['AWS', 'Docker', 'GraphQL', 'CI/CD', 'Terraform'],
    category: 'cloud',
    impact: '10+ applications deployed',
    relevance: 0
  },
  {
    id: '5',
    title: 'Full-Stack NGO Management Platform',
    description: 'Developed comprehensive React/Node.js/PostgreSQL web application with JWT authentication.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'GraphQL'],
    category: 'web',
    impact: '20% faster report generation',
    relevance: 0
  },
  {
    id: '6',
    title: 'ArcGIS Environmental Analysis',
    description: 'Conducted geospatial analysis for 1,500+ hectares in environmental restoration projects.',
    technologies: ['ArcGIS', 'Python', 'GIS', 'Spatial Analysis', 'PostgreSQL'],
    category: 'analytics',
    impact: '1,500+ hectares analyzed',
    relevance: 0
  }
];

export default function AIProjectRecommendations() {
  const [recommendedProjects, setRecommendedProjects] = useState<Project[]>([]);
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate AI analysis based on user behavior
    const analyzeUserInterests = () => {
      // This would normally analyze scroll position, time spent, clicks, etc.
      const interests = ['database', 'cloud', 'analytics']; // Simulated interests
      setUserInterests(interests);

      // Calculate relevance scores based on user interests
      const scoredProjects = projects.map(project => ({
        ...project,
        relevance: calculateRelevance(project, interests)
      }));

      // Sort by relevance and take top 3
      const recommendations = scoredProjects
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 3);

      setRecommendedProjects(recommendations);
    };

    // Show recommendations after user has been on the site for a bit
    const timer = setTimeout(() => {
      analyzeUserInterests();
      setIsVisible(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const calculateRelevance = (project: Project, interests: string[]): number => {
    let score = 0;

    // Category match
    if (interests.includes(project.category)) {
      score += 30;
    }

    // Technology overlap
    const techOverlap = project.technologies.filter(tech =>
      interests.some(interest =>
        tech.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(tech.toLowerCase())
      )
    ).length;
    score += techOverlap * 10;

    // Add some randomness to make it feel more "AI-like"
    score += Math.random() * 10;

    return Math.min(score, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-6 z-40 max-w-sm">
      <Card className="bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-2xl animate-in slide-in-from-left-4 duration-500">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                AI Recommendations
              </h3>
              <p className="text-xs text-slate-400">Based on your interests</p>
            </div>
          </div>

          <div className="space-y-3">
            {recommendedProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xs font-semibold text-white line-clamp-2">
                    {project.title}
                  </h4>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-cyan-500/20 text-cyan-300 border-cyan-500/30 ml-2"
                  >
                    {Math.round(project.relevance)}% match
                  </Badge>
                </div>

                <p className="text-xs text-slate-300 mb-2 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-1 py-0 border-slate-600 text-slate-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-400 flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    {project.impact}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-xs hover:bg-cyan-500/20 hover:text-cyan-300"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-700/30">
            <div className="flex items-center text-xs text-slate-400">
              <Clock className="h-3 w-3 mr-1" />
              Updated just now
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-xs h-6 px-2 hover:bg-slate-700/50"
            >
              Dismiss
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}