import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Users, Eye, Clock, TrendingUp, Activity } from 'lucide-react';

interface AnalyticsData {
  visitorsToday: number;
  totalViews: number;
  avgSessionTime: string;
  topPages: { page: string; views: number }[];
  userInterests: { interest: string; percentage: number }[];
  realTimeActivity: number;
}

export default function AIAnalyticsDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    visitorsToday: 0,
    totalViews: 0,
    avgSessionTime: '0:00',
    topPages: [],
    userInterests: [],
    realTimeActivity: 0
  });

  useEffect(() => {
    // Simulate AI analytics data generation
    const generateAnalytics = () => {
      const data: AnalyticsData = {
        visitorsToday: Math.floor(Math.random() * 50) + 10,
        totalViews: Math.floor(Math.random() * 200) + 100,
        avgSessionTime: `${Math.floor(Math.random() * 5) + 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        topPages: [
          { page: 'Projects', views: Math.floor(Math.random() * 50) + 20 },
          { page: 'About', views: Math.floor(Math.random() * 40) + 15 },
          { page: 'Skills', views: Math.floor(Math.random() * 30) + 10 },
          { page: 'Experience', views: Math.floor(Math.random() * 20) + 5 }
        ],
        userInterests: [
          { interest: 'Database Solutions', percentage: Math.floor(Math.random() * 30) + 70 },
          { interest: 'Cloud Technologies', percentage: Math.floor(Math.random() * 25) + 60 },
          { interest: 'Web Development', percentage: Math.floor(Math.random() * 20) + 50 },
          { interest: 'Data Analytics', percentage: Math.floor(Math.random() * 15) + 40 }
        ],
        realTimeActivity: Math.floor(Math.random() * 10) + 1
      };

      setAnalyticsData(data);
    };

    // Show dashboard after some time and update periodically
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      generateAnalytics();
    }, 15000); // Show after 15 seconds

    const updateTimer = setInterval(generateAnalytics, 30000); // Update every 30 seconds

    return () => {
      clearTimeout(showTimer);
      clearInterval(updateTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-40 max-w-sm">
      <Card className="bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-2xl animate-in slide-in-from-right-4 duration-500">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white flex items-center">
                <Activity className="h-3 w-3 mr-1" />
                AI Analytics
              </h3>
              <p className="text-xs text-slate-400">Real-time insights</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-slate-400">Today</span>
              </div>
              <div className="text-lg font-bold text-white">{analyticsData.visitorsToday}</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
              <div className="flex items-center space-x-2 mb-1">
                <Eye className="h-3 w-3 text-green-400" />
                <span className="text-xs text-slate-400">Views</span>
              </div>
              <div className="text-lg font-bold text-white">{analyticsData.totalViews}</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="h-3 w-3 text-purple-400" />
                <span className="text-xs text-slate-400">Avg Time</span>
              </div>
              <div className="text-sm font-bold text-white">{analyticsData.avgSessionTime}</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
              <div className="flex items-center space-x-2 mb-1">
                <Activity className="h-3 w-3 text-cyan-400" />
                <span className="text-xs text-slate-400">Active</span>
              </div>
              <div className="text-lg font-bold text-white">{analyticsData.realTimeActivity}</div>
            </div>
          </div>

          {/* User Interests */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              User Interests
            </h4>
            <div className="space-y-2">
              {analyticsData.userInterests.map((interest, index) => (
                <div key={interest.interest} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 truncate flex-1 mr-2">
                    {interest.interest}
                  </span>
                  <div className="flex items-center space-x-2 flex-1">
                    <Progress value={interest.percentage} className="flex-1 h-1" />
                    <span className="text-xs text-slate-300 w-8 text-right">
                      {interest.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Popular Pages</h4>
            <div className="space-y-1">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{page.page}</span>
                  <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                    {page.views}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-700/30">
            <div className="flex items-center text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              Live data
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Hide
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}