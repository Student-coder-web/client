import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Download } from 'lucide-react';

export function ResumeAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalysis, setHasAnalysis] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileUpload = () => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      analyzeResume();
    }
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalysis(true);
    }, 2500);
  };

  const analysisResults = {
    overallScore: 78,
    strengths: [
      'Strong technical skills section',
      'Quantified achievements',
      'Relevant work experience',
      'Clean, professional formatting'
    ],
    improvements: [
      'Add more action verbs',
      'Include industry keywords',
      'Expand on leadership experience',
      'Add certifications section'
    ],
    keywords: ['React', 'JavaScript', 'AWS', 'Agile', 'Leadership'],
    missingKeywords: ['TypeScript', 'Docker', 'CI/CD', 'Microservices']
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Resume Analyzer</h1>
          <p className="text-lg text-gray-600">AI-powered insights to make your resume shine ✨</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Your Resume</h2>

              {!file ? (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50 hover:border-blue-500 hover:bg-blue-50 transition">
                  <Upload className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-gray-600 mb-3">Drag & drop or upload your resume</p>
                  <label className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer transition">
                    Choose File
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-3">Supports PDF, DOC, DOCX</p>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}

              {isAnalyzing && (
                <div className="mt-4 flex items-center gap-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span className="text-sm text-gray-600">Analyzing your resume...</span>
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resume Tips</h3>
              <div className="space-y-2">
                {[
                  'Use strong action verbs like "achieved," "developed," "led"',
                  'Quantify your achievements with numbers and percentages',
                  'Tailor your resume for each job application',
                  'Keep it concise - aim for 1-2 pages maximum'
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 bg-green-50 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="space-y-6">
            {hasAnalysis && (
              <>
                {/* Overall Score */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Overall Score</h3>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeDasharray={`${analysisResults.overallScore}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{analysisResults.overallScore}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">out of 100</p>
                  </div>
                </div>

                {/* Strengths */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Strengths</h3>
                  <div className="space-y-2">
                    {analysisResults.strengths.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-700">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Areas for Improvement</h3>
                  <div className="space-y-2">
                    {analysisResults.improvements.map((imp, i) => (
                      <div key={i} className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                        <span className="text-sm text-gray-700">{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keywords */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Keywords Analysis</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Found Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.keywords.map((kw, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Missing Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.missingKeywords.map((kw, i) => (
                        <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      <span>Download Detailed Report</span>
                    </button>
                    <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Get Improvement Suggestions</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
