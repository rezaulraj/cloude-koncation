import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/group1971-rec-meetting/30min" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->
const Calendly = ({ show, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      setLoading(true);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/group1971-rec-meetting/30min",
            parentElement: document.querySelector(".calendly-inline-widget"),
            prefill: {},
            utm: {},
          });

          setTimeout(() => setLoading(false), 1000);
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            layout
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-0 bg-white flex flex-col"
              layout
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>

              {loading && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#e60c30] border-opacity-75"></div>
                </div>
              )}

              <div
                className="calendly-inline-widget flex-1"
                data-url="https://calendly.com/group1971-rec-meetting/30min"
                style={{
                  width: "100%",
                  height: "100%",
                  display: loading ? "none" : "block",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Calendly;
