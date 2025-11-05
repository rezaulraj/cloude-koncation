import React, { useState } from "react";
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

  const jobs = [
    {
      id: 1,
      title: "Construction Worker",
      department: "Construction",
      type: "Full-time",
      location: "Malta",
      applicent: ["Pakistan", "India", "Nepal"],
      salary: "€1800 - €2500",
      experience: "1-3 years",
      description:
        "Perform various physical tasks on construction sites including digging, lifting, carrying materials, and assisting skilled tradespeople.",
      requirements: [
        "Physical Stamina",
        "Basic Tools Knowledge",
        "Teamwork",
        "Safety Awareness",
      ],
      posted: "1 day ago",
      shift: "7 AM - 4 PM",
      education: "High School Diploma",
      benefits: [
        "Accommodation",
        "Health Insurance",
        "Overtime Pay",
        "Travel Allowance",
      ],
      vacancies: 25,
      urgent: true,
      featured: true,
    },
    {
      id: 2,
      title: "Bartender",
      department: "Hospitality",
      type: "Full-time",
      location: "Malta",
      applicent: ["All Countries"],
      salary: "€1600 - €2200",
      experience: "2-4 years",
      description:
        "Prepare and serve alcoholic and non-alcoholic beverages, interact with customers, and maintain bar cleanliness.",
      requirements: [
        "Mixology Skills",
        "Customer Service",
        "Cash Handling",
        "English Speaking",
      ],
      posted: "3 days ago",
      shift: "Evening/Night Shift",
      education: "High School Diploma",
      benefits: [
        "Tips",
        "Meal Allowance",
        "Health Insurance",
        "Flexible Schedule",
      ],
      vacancies: 8,
      urgent: false,
      featured: true,
    },
    {
      id: 3,
      title: "Welder",
      department: "Manufacturing",
      type: "Full-time",
      location: "Romania",
      applicent: ["Pakistan", "India", "Bangladesh"],
      salary: "€1500 - €2000",
      experience: "3-5 years",
      description:
        "Join metal components using various welding techniques, read blueprints, and ensure quality welds.",
      requirements: [
        "Arc Welding",
        "MIG/TIG Welding",
        "Blueprint Reading",
        "Quality Control",
      ],
      posted: "2 days ago",
      shift: "8 AM - 5 PM",
      education: "Vocational Training",
      benefits: [
        "Accommodation",
        "Health Insurance",
        "Tools Provided",
        "Overtime Pay",
      ],
      vacancies: 15,
      urgent: true,
      featured: false,
    },
    {
      id: 4,
      title: "Construction Worker",
      department: "Construction",
      type: "Contract",
      location: "Cyprus",
      applicent: ["Pakistan", "Sri Lanka", "Nepal"],
      salary: "€1700 - €2300",
      experience: "1-2 years",
      description:
        "Assist in construction projects, handle materials, operate basic machinery, and follow safety protocols.",
      requirements: [
        "Physical Fitness",
        "Basic Construction Knowledge",
        "Safety Training",
        "Team Player",
      ],
      posted: "5 days ago",
      shift: "7 AM - 3 PM",
      education: "No Formal Education Required",
      benefits: [
        "Accommodation",
        "Medical Insurance",
        "Travel Reimbursement",
        "Bonus",
      ],
      vacancies: 30,
      urgent: true,
      featured: true,
    },
    {
      id: 5,
      title: "Bartender",
      department: "Hospitality",
      type: "Part-time",
      location: "Serbia",
      applicent: ["All Countries"],
      salary: "€1200 - €1800",
      experience: "1-3 years",
      description:
        "Serve beverages, maintain bar inventory, create cocktail menus, and provide excellent customer service.",
      requirements: [
        "Bartending License",
        "Inventory Management",
        "Multilingual",
        "Customer Relations",
      ],
      posted: "1 week ago",
      shift: "Flexible Hours",
      education: "High School Diploma",
      benefits: ["Tips", "Staff Meals", "Uniform Provided", "Training"],
      vacancies: 6,
      urgent: false,
      featured: false,
    },
    {
      id: 6,
      title: "Welder",
      department: "Construction",
      type: "Full-time",
      location: "Greece",
      applicent: ["Pakistan", "India", "Bangladesh"],
      salary: "€1600 - €2100",
      experience: "2-4 years",
      description:
        "Fabricate and assemble metal structures, perform repairs, and maintain welding equipment.",
      requirements: [
        "Steel Welding",
        "Metal Fabrication",
        "Equipment Maintenance",
        "Safety Compliance",
      ],
      posted: "4 days ago",
      shift: "8 AM - 4 PM",
      education: "Vocational Certificate",
      benefits: [
        "Accommodation",
        "Health Insurance",
        "Tools and Equipment",
        "Travel Allowance",
      ],
      vacancies: 12,
      urgent: true,
      featured: true,
    },
    {
      id: 7,
      title: "Construction Supervisor",
      department: "Construction",
      type: "Full-time",
      location: "Romania",
      applicent: ["Pakistan", "India"],
      salary: "€2000 - €2800",
      experience: "5-7 years",
      description:
        "Oversee construction projects, manage workers, ensure safety compliance, and coordinate with project managers.",
      requirements: [
        "Team Management",
        "Project Coordination",
        "Safety Regulations",
        "Problem Solving",
      ],
      posted: "2 days ago",
      shift: "7 AM - 4 PM",
      education: "Diploma in Construction",
      benefits: [
        "Accommodation",
        "Health Insurance",
        "Performance Bonus",
        "Paid Vacation",
      ],
      vacancies: 5,
      urgent: false,
      featured: true,
    },
    {
      id: 8,
      title: "Senior Welder",
      department: "Manufacturing",
      type: "Full-time",
      location: "Cyprus",
      applicent: ["Pakistan", "India"],
      salary: "€2200 - €3000",
      experience: "5+ years",
      description:
        "Lead welding operations, train junior welders, ensure quality standards, and work on complex projects.",
      requirements: [
        "Advanced Welding Techniques",
        "Quality Assurance",
        "Team Leadership",
        "Blueprint Interpretation",
      ],
      posted: "3 days ago",
      shift: "8 AM - 5 PM",
      education: "Vocational Degree",
      benefits: [
        "Accommodation",
        "Comprehensive Insurance",
        "Annual Bonus",
        "Paid Training",
      ],
      vacancies: 8,
      urgent: true,
      featured: true,
    },
    {
      id: 9,
      title: "Head Bartender",
      department: "Hospitality",
      type: "Full-time",
      location: "Greece",
      applicent: ["All Countries"],
      salary: "€1900 - €2600",
      experience: "4-6 years",
      description:
        "Manage bar operations, create cocktail recipes, train staff, and maintain inventory control.",
      requirements: [
        "Bar Management",
        "Menu Development",
        "Staff Training",
        "Inventory Control",
      ],
      posted: "6 days ago",
      shift: "Evening/Night Shift",
      education: "Hospitality Degree Preferred",
      benefits: [
        "Tips",
        "Health Insurance",
        "Meal Allowance",
        "Performance Bonus",
      ],
      vacancies: 4,
      urgent: false,
      featured: false,
    },
    {
      id: 10,
      title: "Construction Laborer",
      department: "Construction",
      type: "Full-time",
      location: "Serbia",
      applicent: ["Pakistan", "Bangladesh", "Nepal"],
      salary: "€1400 - €1900",
      experience: "No Experience Required",
      description:
        "Perform general labor tasks on construction sites, assist skilled workers, and maintain site cleanliness.",
      requirements: [
        "Physical Strength",
        "Willingness to Learn",
        "Basic English",
        "Reliability",
      ],
      posted: "1 day ago",
      shift: "7 AM - 3 PM",
      education: "No Formal Education Required",
      benefits: [
        "Accommodation",
        "Medical Insurance",
        "On-the-job Training",
        "Overtime Pay",
      ],
      vacancies: 35,
      urgent: true,
      featured: true,
    },
    {
      id: 11,
      title: "Bar Supervisor",
      department: "Hospitality",
      type: "Full-time",
      location: "Romania",
      applicent: ["All Countries"],
      salary: "€1700 - €2300",
      experience: "3-5 years",
      description:
        "Supervise bar staff, handle customer complaints, manage inventory, and ensure quality service.",
      requirements: [
        "Supervisory Skills",
        "Customer Service",
        "Inventory Management",
        "Multilingual",
      ],
      posted: "4 days ago",
      shift: "Flexible Hours",
      education: "High School Diploma",
      benefits: [
        "Tips",
        "Health Insurance",
        "Staff Meals",
        "Performance Bonus",
      ],
      vacancies: 3,
      urgent: false,
      featured: false,
    },
    {
      id: 12,
      title: "Pipe Welder",
      department: "Construction",
      type: "Contract",
      location: "Malta",
      applicent: ["Pakistan", "India"],
      salary: "€2000 - €2700",
      experience: "4-6 years",
      description:
        "Specialize in pipe welding for plumbing and industrial applications, ensure leak-proof joints.",
      requirements: [
        "Pipe Welding Certification",
        "Plumbing Knowledge",
        "Precision Work",
        "Quality Testing",
      ],
      posted: "2 days ago",
      shift: "8 AM - 5 PM",
      education: "Vocational Training",
      benefits: [
        "Accommodation",
        "Health Insurance",
        "Tools Provided",
        "Overtime Pay",
      ],
      vacancies: 10,
      urgent: true,
      featured: true,
    },
  ];

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
            Hands-On <span className="text-blue-600">Jobs</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    {job.urgent && (
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                        URGENT
                      </span>
                    )}
                    {job.featured && (
                      <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 ml-2 inline-block">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-1">
                  <FaBuilding className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.department}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaMoneyBillWave className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUserTie className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-sm">{job.vacancies} Vacancies</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
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

                <div className="text-sm text-gray-500 mb-2">
                  <strong>Open for:</strong> {job.applicent.join(", ")}
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <motion.button
                    onClick={() => handleShareClick(job)}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaShareAlt className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-medium">Share</span>
                  </motion.button>

                  <motion.button
                    onClick={() => handleApplyClick(job)}
                    className="bg-primary/90 hover:bg-primary text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
                      className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-2`}
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
                  className="text-gray-400 hover:text-gray-600 transition-colors"
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
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
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
