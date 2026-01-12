import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Wand2, Copy, RefreshCw, FileText, Lightbulb } from 'lucide-react';

interface GeneratedContent {
  title: string;
  content: string;
  tags: string[];
  type: 'project' | 'blog' | 'description';
}

export default function AIContentGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState<'project' | 'blog' | 'description'>('project');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);

    // Simulate AI content generation
    setTimeout(() => {
      const content = generateMockContent(contentType, topic, keywords);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000 + Math.random() * 3000);
  };

  const generateMockContent = (type: string, topic: string, keywords: string): GeneratedContent => {
    const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);

    switch (type) {
      case 'project':
        return {
          title: `AI-Generated: ${topic} Management System`,
          content: `This innovative ${topic.toLowerCase()} management system leverages cutting-edge technology to streamline operations and enhance productivity. Built with modern web technologies including React, Node.js, and PostgreSQL, the system features real-time data synchronization, advanced analytics, and intuitive user interfaces.

Key features include automated workflow management, comprehensive reporting tools, and seamless integration with existing enterprise systems. The solution addresses common pain points in ${topic.toLowerCase()} management while providing scalable architecture that grows with your business needs.

Technical implementation focuses on performance, security, and maintainability, ensuring the system remains robust and reliable under various load conditions.`,
          tags: ['React', 'Node.js', 'PostgreSQL', 'Analytics', ...keywordArray.slice(0, 3)],
          type: 'project'
        };

      case 'blog':
        return {
          title: `The Future of ${topic}: Trends and Innovations`,
          content: `The landscape of ${topic.toLowerCase()} is rapidly evolving, driven by technological advancements and changing user expectations. In this comprehensive analysis, we explore the key trends shaping the industry and the innovative solutions emerging to meet new challenges.

From AI-powered automation to blockchain-based transparency, organizations are adopting cutting-edge technologies to stay competitive. The integration of machine learning algorithms and predictive analytics is transforming how we approach ${topic.toLowerCase()} challenges, enabling more proactive and data-driven decision making.

Industry leaders are focusing on sustainable practices, ethical technology implementation, and user-centric design principles. As we look toward the future, the convergence of cloud computing, IoT devices, and advanced analytics will continue to reshape the ${topic.toLowerCase()} ecosystem.`,
          tags: ['Technology', 'Innovation', 'Future Trends', 'AI', ...keywordArray.slice(0, 3)],
          type: 'blog'
        };

      default:
        return {
          title: `Professional ${topic} Services`,
          content: `Specialized in delivering comprehensive ${topic.toLowerCase()} solutions with a focus on quality, efficiency, and innovation. Our expertise spans database architecture, cloud infrastructure, and digital transformation initiatives.

We provide end-to-end services including system design, implementation, optimization, and ongoing support. Our team combines deep technical knowledge with practical business acumen to deliver solutions that drive real value.

Client satisfaction is our priority, with proven track record of successful project deliveries and long-term partnerships. We stay at the forefront of technology trends to ensure our solutions remain current and competitive.`,
          tags: ['Professional Services', 'Consulting', 'Technology', ...keywordArray.slice(0, 3)],
          type: 'description'
        };
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110 group"
        >
          <Wand2 className="h-6 w-6 text-white group-hover:animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Card className="w-96 h-[32rem] bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">AI Content Generator</h3>
              <p className="text-xs text-slate-400">Create with AI</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 hover:bg-slate-700/50"
          >
            <FileText className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          {/* Input Section */}
          <div className="space-y-3 mb-4">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Content Type</label>
              <Select value={contentType} onValueChange={(value: any) => setContentType(value)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project">Project Description</SelectItem>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="description">Service Description</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Topic/Subject</label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Database Solutions, Cloud Architecture..."
                className="bg-slate-800/50 border-slate-600 text-white text-sm placeholder-slate-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Keywords (optional)</label>
              <Input
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="React, Node.js, PostgreSQL..."
                className="bg-slate-800/50 border-slate-600 text-white text-sm placeholder-slate-500"
              />
            </div>
          </div>

          {/* Generate Button */}
          <Button
            onClick={generateContent}
            disabled={!topic.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-4"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Content
              </>
            )}
          </Button>

          {/* Generated Content */}
          {generatedContent && (
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-white">Generated Content</h4>
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(generatedContent.title)}
                    className="h-6 px-2 text-xs hover:bg-slate-700/50"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={generateContent}
                    className="h-6 px-2 text-xs hover:bg-slate-700/50"
                  >
                    <RefreshCw className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30 mb-2">
                <h5 className="text-sm font-medium text-white mb-2">{generatedContent.title}</h5>
                <div className="max-h-32 overflow-y-auto">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {generatedContent.content}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {generatedContent.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-purple-500/20 text-purple-300">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-center mt-2 space-x-1">
                <Lightbulb className="h-3 w-3 text-purple-400" />
                <span className="text-xs text-slate-400">AI-generated content</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}