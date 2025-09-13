import React from 'react';

interface ProgressChartProps {
  data: { subject: string; progress: number; score: number }[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const maxScore = Math.max(...data.map(d => d.score));
  
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">{item.subject}</span>
            <span className="text-sm text-gray-500">{item.score}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(item.score / 100) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-500">Progress: {item.progress}% complete</div>
        </div>
      ))}
    </div>
  );
};