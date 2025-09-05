// import React, { useState, useEffect } from 'react';
// import { JobFilters } from './job-search/JobFilters';
// import { JobResults } from './job-search/JobResults';
// import { JobDetails } from './job-search/JobDetails';
// import { generateMockJobs } from '../utils/mockData';
// import { Job } from '../types/job';

// export function JobSearch() {
//   // State management for jobs and filtering
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
  
//   // Search filters state
//   const [filters, setFilters] = useState({
//     keywords: '',
//     location: '',
//     experienceLevel: '',
//     salary: '',
//     jobType: '',
//     remote: false,
//   });

//   // Initialize with mock data on component mount
//   useEffect(() => {
//     const mockJobs = generateMockJobs();
//     setJobs(mockJobs);
//     setFilteredJobs(mockJobs);
//   }, []);

//   // Main job search function with AI-powered filtering
//   const handleSearch = async () => {
//     setIsLoading(true);
    
//     // Simulate API call with realistic delay
//     setTimeout(() => {
//       let filtered = jobs.filter(job => {
//         // Keyword matching (title, company, skills)
//         const matchesKeywords = !filters.keywords || 
//           job.title.toLowerCase().includes(filters.keywords.toLowerCase()) ||
//           job.company.toLowerCase().includes(filters.keywords.toLowerCase()) ||
//           job.skills.some(skill => skill.toLowerCase().includes(filters.keywords.toLowerCase()));
        
//         // Location matching
//         const matchesLocation = !filters.location || 
//           job.location.toLowerCase().includes(filters.location.toLowerCase());
        
//         // Experience level matching
//         const matchesExperience = !filters.experienceLevel || 
//           job.experienceLevel === filters.experienceLevel;
        
//         // Job type matching
//         const matchesJobType = !filters.jobType || 
//           job.jobType === filters.jobType;
        
//         // Remote work preference
//         const matchesRemote = !filters.remote || job.remote;
        
//         // Salary range matching
//         const matchesSalary = !filters.salary || (() => {
//           const [min, max] = filters.salary.split('-').map(s => parseInt(s.replace(/[^0-9]/g, '')));
//           if (filters.salary.includes('+')) {
//             return job.salary >= min;
//           }
//           return job.salary >= min && job.salary <= max;
//         })();

//         return matchesKeywords && matchesLocation && matchesExperience && 
//                matchesJobType && matchesRemote && matchesSalary;
//       });

//       // AI-powered job ranking (simulate with random scoring)
//       filtered = filtered.sort((a, b) => {
//         // Calculate AI match score based on various factors
//         const aScore = calculateAIScore(a, filters);
//         const bScore = calculateAIScore(b, filters);
//         return bScore - aScore;
//       });

//       setFilteredJobs(filtered);
//       setIsLoading(false);
//     }, 1000);
//   };

//   // Calculate AI matching score for each job
//   const calculateAIScore = (job, searchFilters) => {
//     let score = 0;
    
//     // Base score from job attributes
//     score += job.aiMatch || Math.floor(Math.random() * 30) + 70;
    
//     // Bonus for exact keyword matches
//     if (searchFilters.keywords) {
//       const keywordLower = searchFilters.keywords.toLowerCase();
//       if (job.title.toLowerCase().includes(keywordLower)) score += 10;
//       if (job.skills.some(skill => skill.toLowerCase().includes(keywordLower))) score += 5;
//     }
    
//     // Bonus for location preference
//     if (searchFilters.location && job.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
//       score += 8;
//     }
    
//     // Bonus for remote work match
//     if (searchFilters.remote && job.remote) score += 5;
    
//     return Math.min(score, 100); // Cap at 100%
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Job</h1>
//         <p className="text-gray-600">AI-powered job search with personalized recommendations</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Filters Sidebar */}
//         <div className="lg:col-span-1">
//           <JobFilters 
//             filters={filters} 
//             setFilters={setFilters} 
//             onSearch={handleSearch}
//             isLoading={isLoading}
//           />
//         </div>
        
//         {/* Job Results */}
//         <div className="lg:col-span-2">
//           <JobResults 
//             jobs={filteredJobs} 
//             selectedJob={selectedJob}
//             setSelectedJob={setSelectedJob}
//             isLoading={isLoading}
//           />
//         </div>
        
//         {/* Job Details Panel */}
//         <div className="lg:col-span-1">
//           {selectedJob && (
//             <JobDetails 
//               job={selectedJob} 
//               onClose={() => setSelectedJob(null)}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'

const Jobs = () => {
  return (
    <div>
      joob
    </div>
  )
}

export default Jobs

