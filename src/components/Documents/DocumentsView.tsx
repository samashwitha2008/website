import React, { useState } from 'react';
import { Document } from '../../types';
import { DocumentUpload } from './DocumentUpload';
import { DocumentCard } from './DocumentCard';

export const DocumentsView: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'Introduction to Calculus.pdf',
      type: 'pdf',
      uploadedAt: new Date(2024, 0, 15),
      size: 2547823,
      processed: true,
      content: 'Calculus fundamentals and derivatives...'
    },
    {
      id: '2',
      title: 'Physics Mechanics Notes.txt',
      type: 'text',
      uploadedAt: new Date(2024, 0, 12),
      size: 1234567,
      processed: true,
      content: 'Force, motion, and energy principles...'
    },
    {
      id: '3',
      title: 'Chemistry Basics.pdf',
      type: 'pdf',
      uploadedAt: new Date(2024, 0, 10),
      size: 3456789,
      processed: false
    }
  ]);

  const handleUpload = (file: File) => {
    const newDocument: Document = {
      id: Date.now().toString(),
      title: file.name,
      type: file.name.endsWith('.pdf') ? 'pdf' : 'text',
      uploadedAt: new Date(),
      size: file.size,
      processed: false
    };

    setDocuments(prev => [newDocument, ...prev]);

    // Simulate processing
    setTimeout(() => {
      setDocuments(prev => prev.map(doc => 
        doc.id === newDocument.id ? { ...doc, processed: true } : doc
      ));
    }, 3000);
  };

  const handleDelete = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const handleGenerate = (document: Document) => {
    alert(`Generating assessment for: ${document.title}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Document Library</h1>
        <p className="text-gray-600 mt-1">Upload and manage your educational content</p>
      </div>

      <DocumentUpload onUpload={handleUpload} />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Your Documents ({documents.length})
          </h2>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Types</option>
              <option>PDF</option>
              <option>Text</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Recent First</option>
              <option>Oldest First</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>
          </div>
        </div>

        {documents.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No documents yet</h3>
            <p className="mt-2 text-gray-600">Upload your first document to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {documents.map(document => (
              <DocumentCard
                key={document.id}
                document={document}
                onDelete={handleDelete}
                onGenerate={handleGenerate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};