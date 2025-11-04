import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import HomePage from "./pages/home/HomePage";
import EmployerPage from "./pages/Employers/EmployerPage";
import ApplicantPage from "./pages/Applicant/ApplicantPage";
import { useEffect } from "react";
import Career from "./pages/career/Career";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="employers" element={<EmployerPage />} />
          <Route path="applicants" element={<ApplicantPage />} />
          <Route path="careers" element={<Career />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
