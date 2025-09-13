import React from 'react';
import { TrendingUp, Award, Clock, Target } from 'lucide-react';
import { ProgressChart } from './ProgressChart';

export const AnalyticsView: React.FC = () => {
  const progressData = [
    { subject: 'Mathematics', progress: 85, score: 92 },
    { subject: 'Physics', progress: 70, score: 87 },
    { subject: 'Chemistry', progress: 60, score: 83 },
    { subject: 'Biology', progress: 45, score: 78 },
    { subject: 'Computer Science', progress: 90, score: 95 },
  ];

  const weeklyData = [
    { day: 'Mon', hours: 3, score: 85 },
    { day: 'Tue', hours: 2, score: 78 },
    { day: 'Wed', hours: 4, score: 92 },
    { day: 'Thu', hours: 2.5, score: 88 },
    { day: 'Fri', hours: 3.5, score: 90 },
    { day: 'Sat', hours: 5, score: 94 },
    { day: 'Sun', hours: 4, score: 87 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Analytics</h1>
        <p className="text-gray-600 mt-1">Track your progress and identify areas for improvement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Overall Progress</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">78%</p>
            </div>
            <div className="p-3 rounded-full bg-blue-600">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg. Score</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">87%</p>
            </div>
            <div className="p-3 rounded-full bg-green-600">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Study Time</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">24h</p>
            </div>
            <div className="p-3 rounded-full bg-purple-600">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Goals Met</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12/15</p>
            </div>
            <div className="p-3 rounded-full bg-orange-600">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Progress</h3>
          <ProgressChart data={progressData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 text-center font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(day.hours / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{day.hours}h</div>
                  <div className="text-xs text-gray-500">{day.score}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-700 mb-2">92%</div>
            <div className="text-sm text-green-600">Best Subject</div>
            <div className="text-xs text-gray-500 mt-1">Mathematics</div>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-700 mb-2">78%</div>
            <div className="text-sm text-yellow-600">Needs Attention</div>
            <div className="text-xs text-gray-500 mt-1">Biology</div>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-700 mb-2">+15%</div>
            <div className="text-sm text-blue-600">Improvement</div>
            <div className="text-xs text-gray-500 mt-1">This month</div>
          </div>
        </div>
      </div>
    </div>
  );
};