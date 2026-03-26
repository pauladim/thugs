import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProgramsPage from "./components/ProgramsPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import ProgramDetail from "./components/ProgramDetail";
import DonationPage from "./components/DonationPage";

export default function App() {
  const [page, setPage] = useState("Home");
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <HomePage setPage={setPage} />;
      case "About":
        return <AboutPage />;
      case "Programs":
        return (
          <ProgramsPage
            onSelectProgram={(program) => {
              setSelectedProgram(program);
              setPage("ProgramDetail");
            }}
            onContact={() => setPage("Contact")}
            onDonate={() => setPage("Donate")}
          />
        );
      case "ProgramDetail":
        return (
          <ProgramDetail
            program={selectedProgram}
            setPage={setPage}
            setSelectedProgram={setSelectedProgram}
          />
        );
      case "Projects":
        return <ProjectsPage />;
      case "Contact":
        return <ContactPage />;
      case "Donate":
        return (
          <DonationPage
            onBack={() => setPage("Programs")}
            goFundMeUrl="https://www.gofundme.com/f/support-project-drugfree20"
          />
        );
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--dark)",
        fontFamily: "'Barlow',sans-serif",
      }}
    >
      <Navbar activePage={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} setSelectedProgram={setSelectedProgram} />
    </div>
  );
}