import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaShareAlt,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaLink,
  FaFileUpload,
  FaTimes,
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
  FaVenusMars,
  FaIndustry,
} from "react-icons/fa";

const JobShow = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showApplyPopup, setShowApplyPopup] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    coverLetter: "",
    cv: null,
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=CloudeKoncation"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const mapApiJobToCard = (apiJob) => ({
    id: apiJob.SL_No,
    title: apiJob.Title,
    department: apiJob.Industry,
    type: apiJob.JobType,
    location: apiJob.Country,
    applicent: [apiJob.CandidatesOrigin],
    salary: apiJob.Salary,
    experience: apiJob.Experience,
    description: apiJob.Description,
    requirements: apiJob.Requirements ? apiJob.Requirements.split(", ") : [],
    posted: formatDate(apiJob.Date),
    shift: apiJob.Shift,
    education: "Varies",
    benefits: ["Accommodation", "Health Insurance"],
    vacancies: apiJob.Vacancies,
    urgent: apiJob.Status === "Active" && apiJob.Vacancies > 5,
    featured: apiJob.Vacancies > 10,
    gender: apiJob.Gender,
    jobCategory: apiJob.JobCategory,
  });

  const handleShareClick = (job) => {
    setSelectedJob(job);
    setShowSharePopup(true);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyPopup(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      coverLetter: "",
      cv: null,
    });
    setUploadProgress(0);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }));

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    setTimeout(() => {
      setShowApplyPopup(false);
      alert("Application submitted successfully!");
    }, 1000);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=Check out this job: ${selectedJob?.title} at ${selectedJob?.location}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}&title=${selectedJob?.title}`,
    twitter: `https://twitter.com/intent/tweet?text=Check out this job: ${selectedJob?.title}&url=${window.location.href}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    email: `mailto:?subject=Job Opportunity: ${selectedJob?.title}&body=Check out this job: ${selectedJob?.title} at ${selectedJob?.location}`,
  };

  const openShareLink = (platform) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-2">
                <div className="bg-gray-200 animate-pulse h-6 w-16 rounded-full"></div>
                <div className="bg-gray-200 animate-pulse h-6 w-20 rounded-full"></div>
              </div>
              <div className="bg-gray-200 animate-pulse h-4 w-16 rounded"></div>
            </div>

            <div className="bg-gray-200 animate-pulse h-6 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-200 animate-pulse h-4 w-1/2 rounded mb-1"></div>
            <div className="bg-gray-200 animate-pulse h-4 w-2/3 rounded"></div>
          </div>

          <div className="p-6 flex-grow">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-gray-200 animate-pulse rounded-full w-4 h-4 mr-2"></div>
                  <div className="bg-gray-200 animate-pulse h-4 w-16 rounded"></div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              <div className="bg-gray-200 animate-pulse h-3 w-full rounded"></div>
              <div className="bg-gray-200 animate-pulse h-3 w-4/5 rounded"></div>
              <div className="bg-gray-200 animate-pulse h-3 w-3/4 rounded"></div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 animate-pulse h-6 w-20 rounded"
                ></div>
              ))}
            </div>

            <div className="bg-gray-200 animate-pulse h-4 w-2/3 rounded"></div>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <div className="bg-gray-200 animate-pulse h-8 w-16 rounded"></div>
              <div className="bg-gray-200 animate-pulse h-10 w-24 rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong Server Problem
          </h2>
          {/* <p className="text-gray-600 mb-4">{error}</p> */}
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div id="job-position" className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Available <span className="text-blue-500">Jobs</span>
          </h1>
        </motion.div>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((apiJob, index) => {
              const job = mapApiJobToCard(apiJob);
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-wrap gap-2">
                        {job.urgent && (
                          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            URGENT
                          </span>
                        )}
                        {job.featured && (
                          <span className="bg-[#12819C] text-white text-xs font-bold px-3 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                        <span className="bg-[#12819C]/10 text-[#12819C] text-xs font-bold px-3 py-1 rounded-full">
                          {job.jobCategory?.replace(/_/g, " ")}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {job.posted}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#12819C]" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaIndustry className="w-4 h-4 mr-2 text-[#12819C]" />
                      <span className="text-sm">{job.department}</span>
                    </div>
                    {job.gender && job.gender !== "Any" && (
                      <div className="flex items-center text-gray-600 mt-1">
                        <FaVenusMars className="w-4 h-4 mr-2 text-[#12819C]" />
                        <span className="text-sm">Gender: {job.gender}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaMoneyBillWave className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-sm font-medium">
                          Salary: {job.salary}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaClock className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="text-sm">Job Type: {job.type}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaUserTie className="w-4 h-4 mr-2 text-purple-500" />
                        <span className="text-sm">
                          Experience: {job.experience}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaUsers className="w-4 h-4 mr-2 text-orange-500" />
                        <span className="text-sm">
                          {job.vacancies} Vacancies
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {job.description}
                      </p>
                    </div>

                    {job.requirements.length > 0 && (
                      <div className="mb-4">
                        <span className="text-gray-800 font-bold text-sm mb-2">
                          Requirements:{" "}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <span
                              key={idx}
                              className="bg-[#12819C]/10 text-[#12819C] text-sm px-2 py-1 rounded"
                            >
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 3 && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                              +{job.requirements.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="text-sm text-gray-500">
                      <strong>Open for:</strong> {job.applicent.join(", ")}
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200 mt-auto">
                    <div className="flex justify-between items-center">
                      <motion.button
                        onClick={() => handleShareClick(job)}
                        className="flex items-center gap-2 text-[#12819C]/90 hover:text-[#12819C] transition-all duration-300 group bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-300 hover:shadow-md cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaShareAlt className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-semibold">Share</span>
                      </motion.button>
                      <motion.button
                        onClick={() => handleApplyClick(job)}
                        className="bg-[#12819C]/90 hover:bg-[#12819C] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Apply Now</span>
                        <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {!loading && jobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Jobs Available
            </h3>
            <p className="text-gray-500">
              Check back later for new opportunities
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showSharePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSharePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Share Job</h3>
                <button
                  onClick={() => setShowSharePopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Share this job with your network
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: FaWhatsapp,
                    color: "bg-green-500",
                    label: "WhatsApp",
                    platform: "whatsapp",
                  },
                  {
                    icon: FaLinkedin,
                    color: "bg-blue-600",
                    label: "LinkedIn",
                    platform: "linkedin",
                  },
                  {
                    icon: FaTwitter,
                    color: "bg-blue-400",
                    label: "Twitter",
                    platform: "twitter",
                  },
                  {
                    icon: FaFacebook,
                    color: "bg-blue-800",
                    label: "Facebook",
                    platform: "facebook",
                  },
                  {
                    icon: FaEnvelope,
                    color: "bg-gray-600",
                    label: "Email",
                    platform: "email",
                  },
                  {
                    icon: FaLink,
                    color: "bg-purple-600",
                    label: "Copy Link",
                    platform: "copy",
                  },
                ].map(({ icon: Icon, color, label, platform }) => (
                  <motion.button
                    key={platform}
                    onClick={() =>
                      platform === "copy"
                        ? copyToClipboard()
                        : openShareLink(platform)
                    }
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-2 shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showApplyPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowApplyPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Apply for {selectedJob?.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedJob?.department} • {selectedJob?.location}
                  </p>
                </div>
                <button
                  onClick={() => setShowApplyPopup(false)}
                  className="text-gray-400 hover:text-[#12819C] transition-colors cursor-pointer"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select your country</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="India">India</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        coverLetter: e.target.value,
                      }))
                    }
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-200">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileUpload}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <FaFileUpload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">
                        {formData.cv
                          ? formData.cv.name
                          : "Click to upload your CV"}
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </label>

                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-blue-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Uploading... {uploadProgress}%
                        </p>
                      </div>
                    )}

                    {uploadProgress === 100 && (
                      <div className="mt-4 flex items-center justify-center text-green-600">
                        <FaCheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">
                          Upload Complete!
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={() => setShowApplyPopup(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#12819C]/90 text-white rounded-lg font-semibold hover:bg-[#12819C] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                    <FaCheckCircle className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobShow;
