import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaArrowLeft,
  FaSadCry,
  FaGhost,
  FaCompass,
  FaRocket,
  FaSatellite,
  FaMeteor,
  FaStar,
  FaRegCompass,
} from "react-icons/fa";
import {
  RiErrorWarningLine,
  RiNavigationLine,
  RiMapPinLine,
} from "react-icons/ri";

const NotFound = () => {
  const [timeLost, setTimeLost] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLost((prev) => prev + 1);
    }, 1000);

    const pulseInterval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(pulseInterval);
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}

        {[...Array(8)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-6 h-6 border border-blue-300 rounded-full animate-float-slow opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <FaGhost className="absolute top-1/4 left-10 text-5xl text-purple-200 animate-bounce opacity-40" />
      <FaCompass className="absolute bottom-1/4 right-10 text-5xl text-blue-200 animate-spin-slow opacity-40" />
      <FaRocket className="absolute top-10 right-1/4 text-4xl text-pink-200 animate-pulse opacity-40" />
      <FaSatellite className="absolute bottom-10 left-1/4 text-4xl text-green-200 animate-ping-slow opacity-40" />

      <div className="text-center relative z-10 max-w-2xl w-full">
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <div className="relative">
              <span
                className={`text-8xl md:text-9xl font-bold ${pulse ? "text-red-500" : "text-gray-800"} transition-all duration-1000`}
              >
                4
              </span>
              <FaMeteor className="absolute -top-3 -right-4 text-3xl text-orange-500 animate-bounce" />
            </div>

            <div className="relative">
              <div className="relative">
                <RiErrorWarningLine className="text-7xl md:text-8xl text-yellow-500 animate-pulse" />
                <FaRegCompass className="absolute -bottom-1 -right-1 text-2xl text-blue-600 animate-spin" />
              </div>
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-full animate-ping opacity-70"></div>
            </div>

            <div className="relative">
              <span
                className={`text-8xl md:text-9xl font-bold ${pulse ? "text-blue-500" : "text-gray-800"} transition-all duration-1000`}
              >
                4
              </span>
              <FaStar className="absolute -top-3 -left-4 text-3xl text-yellow-500 animate-spin-slow" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block">
            <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-gray-800 pr-1">
              Page Not Found
            </span>
            <FaSadCry className="inline-block ml-4 text-4xl text-blue-600 animate-bounce" />
          </h2>
        </div>

        <div className="animate-fade-in-up mb-8">
          <p className="text-gray-600 mt-3 mb-6 max-w-lg mx-auto text-lg leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into
            the digital void. Don't worry, even the best explorers get lost
            sometimes!
          </p>
        </div>

        <div className="mb-10 inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
          <RiNavigationLine className="text-xl text-blue-600 animate-pulse" />
          <span className="text-gray-700">Time exploring:</span>
          <span className="text-xl font-mono font-bold text-green-600 animate-count">
            {timeLost}s
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl 
                     hover:from-blue-700 hover:to-blue-800 transition-all duration-500 
                     transform hover:-translate-y-1 hover:shadow-xl shadow-lg
                     flex items-center justify-center gap-3 overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
            <FaHome className="text-xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">Go Back Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl 
                     hover:bg-gray-50 transition-all duration-300 
                     transform hover:-translate-y-1 shadow-lg border border-gray-200
                     flex items-center justify-center gap-3"
          >
            <FaArrowLeft className="text-xl group-hover:-translate-x-2 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>


      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(5px) translateX(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes count {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-typing {
          animation: typing 2.5s steps(30, end);
          display: inline-block;
          white-space: nowrap;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-count {
          animation: count 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
