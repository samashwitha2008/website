import React, { useState } from 'react';
import { PenTool, Clock, CheckCircle, Play } from 'lucide-react';
import { Assessment } from '../../types';

export const AssessmentsView: React.FC = () => {
  const [assessments] = useState<Assessment[]>([
    {
      id: '1',
      title: 'Calculus Fundamentals Quiz',
      documentId: '1',
      questions: [],
      createdAt: new Date(2024, 0, 15),
      timeLimit: 30,
      attempts: 2
    },
    {
      id: '2',
      title: 'Physics Mechanics Test',
      documentId: '2', 
      questions: [],
      createdAt: new Date(2024, 0, 12),
      timeLimit: 45,
      attempts: 1
    },
    {
      id: '3',
      title: 'Chemistry Basics Assessment',
      documentId: '3',
      questions: [],
      createdAt: new Date(2024, 0, 10),
      timeLimit: 60,
      attempts: 0
    }
  ]);

  const handleStartAssessment = (assessmentId: string) => {
    alert(`Starting assessment: ${assessmentId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assessments</h1>
        <p className="text-gray-600 mt-1">Test your knowledge with AI-generated quizzes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Assessment</h3>
            <p className="text-gray-600 text-sm mb-4">Generate new quiz from your documents</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create New
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Available Assessments</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{assessment.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{assessment.timeLimit} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>{assessment.attempts} attempts</span>
                    </div>
                    <span>Created {assessment.createdAt.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="mt-3">
                    {assessment.attempts > 0 ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-700 font-medium">Completed</span>
                        </div>
                        <span className="text-sm text-gray-500">Best Score: 87%</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-yellow-700 font-medium">Not attempted</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleStartAssessment(assessment.id)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span>{assessment.attempts > 0 ? 'Retake' : 'Start'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};