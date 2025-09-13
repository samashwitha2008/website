import React from 'react';
import { FileText, Award, TrendingUp, Clock, BookOpen, Target } from 'lucide-react';
import { StatsCard } from './StatsCard';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="text-gray-600 mt-1">Track your learning progress and discover new content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Documents Processed"
          value="12"
          change="+3 this week"
          changeType="positive"
          icon={FileText}
          color="bg-blue-600"
        />
        <StatsCard
          title="Assessments Completed"
          value="8"
          change="+2 this week"
          changeType="positive"
          icon={Award}
          color="bg-green-600"
        />
        <StatsCard
          title="Average Score"
          value="87%"
          change="+5% improvement"
          changeType="positive"
          icon={TrendingUp}
          color="bg-purple-600"
        />
        <StatsCard
          title="Study Time"
          value="24h"
          change="This week"
          changeType="neutral"
          icon={Clock}
          color="bg-orange-600"
        />
        <StatsCard
          title="Learning Streak"
          value="7 days"
          change="Keep it up!"
          changeType="positive"
          icon={Target}
          color="bg-teal-600"
        />
        <StatsCard
          title="Subjects"
          value="5"
          change="Active courses"
          changeType="neutral"
          icon={BookOpen}
          color="bg-indigo-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Completed assessment', subject: 'Mathematics', time: '2 hours ago', score: '95%' },
              { action: 'Uploaded document', subject: 'Physics', time: '1 day ago', score: null },
              { action: 'Completed study session', subject: 'Chemistry', time: '2 days ago', score: '88%' },
              { action: 'Generated assessment', subject: 'Biology', time: '3 days ago', score: null },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.subject} • {activity.time}</p>
                </div>
                {activity.score && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    {activity.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Review Calculus Fundamentals',
                description: 'Based on your recent assessment, focus on derivatives',
                priority: 'high',
                type: 'Study Plan'
              },
              {
                title: 'Practice Physics Problems',
                description: 'Upload more mechanics problems for better understanding',
                priority: 'medium',
                type: 'Content'
              },
              {
                title: 'Take Chemistry Quiz',
                description: 'Test your knowledge on organic compounds',
                priority: 'low',
                type: 'Assessment'
              },
            ].map((rec, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{rec.type}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                        rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {rec.priority} priority
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};