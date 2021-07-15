import React, { useState } from "react";
import Nav from "./Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Container() {
  // change state for "pages"
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default Container;
