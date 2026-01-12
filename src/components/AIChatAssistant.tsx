import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Enhanced responses with GitHub/LinkedIn-style information
const aiResponses = [
  "Hello! I'm your AI assistant. I can help you learn more about Muchiri's expertise in database solutions, cloud technologies, and digital transformation.",
  "Muchiri specializes in PostgreSQL optimization, AWS cloud solutions, and implementing scalable database architectures for NGOs and government entities.",
  "His key skills include Python development, Docker containerization, and machine learning model deployment. He's also certified in Google Data Analytics.",
  "Muchiri has successfully delivered 99.9% uptime systems and improved operational efficiency by up to 30% for various organizations.",
  "He's passionate about leveraging technology for sustainable development and has trained over 150 staff members in various organizations.",
  "Feel free to ask about his projects, experience, or how he can help with your database and cloud infrastructure needs!",
  "Muchiri's current focus is on AWS Solutions Architecture certification and blockchain technologies for NGO transparency.",
  "He has extensive experience with geospatial analysis, having analyzed over 1,500 hectares for environmental restoration projects.",
];

// GitHub-like project data
const githubProjects = [
  {
    name: "kamama-digital-canvas",
    description: "A modern digital creativity platform for canvas-based applications, built with TypeScript, React, and Vite",
    stars: 12,
    forks: 3,
    language: "TypeScript",
    lastUpdated: "2 days ago"
  },
  {
    name: "postgres-optimizer",
    description: "Advanced PostgreSQL query optimization and performance monitoring tool",
    stars: 28,
    forks: 7,
    language: "Python",
    lastUpdated: "1 week ago"
  },
  {
    name: "aws-infrastructure-as-code",
    description: "Infrastructure as Code templates for AWS deployments with Terraform and CloudFormation",
    stars: 45,
    forks: 12,
    language: "HCL",
    lastUpdated: "3 days ago"
  },
  {
    name: "ml-student-predictor",
    description: "Machine learning model for predicting student performance using XGBoost and scikit-learn",
    stars: 67,
    forks: 23,
    language: "Python",
    lastUpdated: "5 days ago"
  }
];

// LinkedIn-like experience data
const linkedinExperience = [
  {
    title: "IT Consultant & Database Solutions Architect",
    company: "United Nations & NGOs",
    duration: "2021 - Present",
    description: "Leading digital transformation initiatives, implementing scalable database solutions, and providing technical consulting for sustainable development projects.",
    achievements: [
      "Delivered 99.9% uptime PostgreSQL clusters serving 500K+ transactions",
      "Optimized operational efficiency by 30% across multiple organizations",
      "Trained 150+ staff members in modern database technologies",
      "Implemented cloud infrastructure serving 10+ applications"
    ]
  },
  {
    title: "Senior Database Administrator",
    company: "Government Technology Services",
    duration: "2019 - 2021",
    description: "Managed enterprise database systems and led migration projects to cloud infrastructure.",
    achievements: [
      "Conducted geospatial analysis for 1,500+ hectares of environmental data",
      "Implemented automated backup and disaster recovery solutions",
      "Reduced system downtime by 95% through proactive monitoring"
    ]
  }
];

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI assistant. I can tell you about Muchiri's expertise in database solutions, cloud technologies, and digital transformation. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const maxVisibleMessages = 50; // Limit messages to prevent excessive height

  // Calculate dynamic height based on message count
  const getDynamicHeight = () => {
    const baseHeight = 320; // Base height in px
    const messageHeight = 60; // Approximate height per message
    const visibleMessages = Math.min(messages.length, maxVisibleMessages);
    const calculatedHeight = baseHeight + (visibleMessages * messageHeight);

    // Cap at max height to prevent excessive expansion
    return Math.min(calculatedHeight, 512); // Max 32rem (512px)
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // GitHub-related queries
    if (lowerMessage.includes('github') || lowerMessage.includes('repositories') || lowerMessage.includes('repos')) {
      if (lowerMessage.includes('show') || lowerMessage.includes('list')) {
        const projectList = githubProjects.slice(0, 3).map(p =>
          `• ${p.name} (${p.language}) - ⭐ ${p.stars} - ${p.description.substring(0, 50)}...`
        ).join('\n');
        return `Here are some of Muchiri's featured GitHub repositories:\n\n${projectList}\n\nVisit github.com/bucky-ops to see all his projects!`;
      }
      return "Muchiri has several open-source projects on GitHub, including database optimization tools, AWS infrastructure templates, and machine learning models. Would you like me to show you the most popular ones?";
    }

    if (lowerMessage.includes('stars') || lowerMessage.includes('popular')) {
      const topProject = githubProjects.sort((a, b) => b.stars - a.stars)[0];
      return `Muchiri's most starred project is "${topProject.name}" with ${topProject.stars} stars. It's a ${topProject.description.toLowerCase()}`;
    }

    // LinkedIn/Work experience queries
    if (lowerMessage.includes('linkedin') || lowerMessage.includes('work') || lowerMessage.includes('career')) {
      if (lowerMessage.includes('current') || lowerMessage.includes('now')) {
        const currentRole = linkedinExperience[0];
        return `Currently, Muchiri works as ${currentRole.title} at ${currentRole.company}. ${currentRole.description} His key achievements include: ${currentRole.achievements.slice(0, 2).join(', ')}.`;
      }
      if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
        const experience = linkedinExperience.map(exp =>
          `${exp.title} at ${exp.company} (${exp.duration})`
        ).join(', ');
        return `Muchiri's professional experience includes: ${experience}. He has over 5 years in IT consulting and database solutions.`;
      }
      return "Muchiri has extensive experience working with United Nations agencies, NGOs, and government entities. He's currently an IT Consultant specializing in database solutions and digital transformation.";
    }

    // Enhanced skill queries
    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies')) {
      return "Muchiri's technical skills include PostgreSQL, Python, AWS, Docker, React, Node.js, and various analytics tools. He also has expertise in GIS and machine learning. His GitHub repositories showcase his work in these technologies.";
    }

    // Projects with GitHub integration
    if (lowerMessage.includes('projects')) {
      return "Muchiri has worked on high-availability PostgreSQL clusters (99.9% uptime), blockchain-based NGO systems, geospatial analysis for 1,500+ hectares, and cloud infrastructure automation. Check his GitHub for detailed code examples and documentation.";
    }

    // Contact with social links
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('connect')) {
      return "📧 Email: kamamamuchiri@yahoo.com\n💼 LinkedIn: linkedin.com/in/muchiri-kamama\n🐙 GitHub: github.com/bucky-ops\n\nMuchiri is always interested in discussing new opportunities in database solutions, cloud architecture, and digital transformation!";
    }

    // Certifications and learning
    if (lowerMessage.includes('certification') || lowerMessage.includes('learning') || lowerMessage.includes('education')) {
      return "Muchiri is currently pursuing AWS Solutions Architecture certification and has completed Google Data Analytics Professional Certificate. He's also continuously learning about blockchain technologies and sustainable development solutions.";
    }

    // Connect all platforms
    if (lowerMessage.includes('connect') || lowerMessage.includes('social')) {
      return "You can connect with Muchiri on multiple platforms:\n• LinkedIn: Professional network and career updates\n• GitHub: Open-source projects and technical contributions\n• Email: Direct communication for opportunities\n\nEach platform showcases different aspects of his expertise!";
    }

    // Random response if no keywords match
    return aiResponses[Math.floor(Math.random() * aiResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Smooth scroll to bottom after message is added
    setTimeout(() => {
      scrollToBottom();
    }, 100);

    // Simulate AI thinking time with external data fetching
    const thinkingSteps = [
      "Analyzing query...",
      "Connecting to GitHub...",
      "Fetching LinkedIn data...",
      "Processing information...",
      "Generating response..."
    ];

    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < thinkingSteps.length - 1) {
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === 'ai' && lastMessage.content.includes('AI Assistant is')) {
            return prev.map((msg, index) =>
              index === prev.length - 1
                ? { ...msg, content: `AI Assistant is ${thinkingSteps[stepIndex + 1]}` }
                : msg
            );
          }
          return prev;
        });
        stepIndex++;
      } else {
        clearInterval(stepInterval);
      }
    }, 400);

    setTimeout(() => {
      clearInterval(stepInterval);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      // Scroll to bottom after AI response
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }, 2000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110 group"
        >
          <Bot className="h-6 w-6 text-white group-hover:animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className="w-80 bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-2xl flex flex-col transition-all duration-300 ease-in-out"
        style={{ height: `${getDynamicHeight()}px` }}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
              <p className="text-xs text-slate-400 flex items-center">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Connected to GitHub & LinkedIn
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 hover:bg-slate-700/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4 min-h-0">
          <div className="space-y-4">
            {messages.length > maxVisibleMessages && (
              <div className="text-center py-2">
                <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full">
                  {messages.length - maxVisibleMessages} older messages hidden
                </span>
              </div>
            )}
            {messages.slice(-maxVisibleMessages).map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      : 'bg-slate-800/50 text-slate-200 border border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.sender === 'user' ? 'You' : 'AI Assistant'}
                    </span>
                  </div>
                  <div className="text-sm whitespace-pre-line">
                    {message.content}
                    {message.sender === 'ai' && message.content.includes('github.com/bucky-ops') && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href="https://github.com/bucky-ops"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs bg-slate-700/50 hover:bg-slate-600/50 px-2 py-1 rounded-full transition-colors"
                        >
                          <span>🐙</span>
                          <span>View GitHub</span>
                        </a>
                      </div>
                    )}
                    {message.sender === 'ai' && message.content.includes('linkedin.com/in/muchiri-kamama') && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href="https://linkedin.com/in/muchiri-kamama"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs bg-blue-700/50 hover:bg-blue-600/50 px-2 py-1 rounded-full transition-colors"
                        >
                          <span>💼</span>
                          <span>View LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="h-3 w-3" />
                    <span className="text-xs text-slate-400">AI Assistant</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300">
                    {messages[messages.length - 1]?.sender === 'ai' &&
                     messages[messages.length - 1]?.content.includes('AI Assistant is')
                      ? messages[messages.length - 1].content
                      : 'AI Assistant is processing...'}
                  </div>
                  <div className="flex items-center mt-2 space-x-1">
                    <div className="text-xs text-slate-500">🔗</div>
                    <div className="text-xs text-slate-500">📊</div>
                    <div className="text-xs text-slate-500">⚡</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        <div className="p-4 border-t border-slate-700/50">
          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-1 mb-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setInputValue("Show me Muchiri's GitHub projects");
                handleSendMessage();
              }}
              className="text-xs h-7 px-2 bg-slate-700/30 hover:bg-slate-600/50 text-slate-300 hover:text-white"
              disabled={isTyping}
            >
              📁 Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setInputValue("Tell me about Muchiri's work experience");
                handleSendMessage();
              }}
              className="text-xs h-7 px-2 bg-slate-700/30 hover:bg-slate-600/50 text-slate-300 hover:text-white"
              disabled={isTyping}
            >
              💼 Experience
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setInputValue("What are Muchiri's skills?");
                handleSendMessage();
              }}
              className="text-xs h-7 px-2 bg-slate-700/30 hover:bg-slate-600/50 text-slate-300 hover:text-white"
              disabled={isTyping}
            >
              ⚡ Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setInputValue("How can I connect with Muchiri?");
                handleSendMessage();
              }}
              className="text-xs h-7 px-2 bg-slate-700/30 hover:bg-slate-600/50 text-slate-300 hover:text-white"
              disabled={isTyping}
            >
              🤝 Connect
            </Button>
          </div>

          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about GitHub projects, LinkedIn experience..."
              className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-2 space-x-1">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span className="text-xs text-slate-400">AI-powered • GitHub & LinkedIn connected</span>
          </div>
        </div>
      </Card>
    </div>
  );
}