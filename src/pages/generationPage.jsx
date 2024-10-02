import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GptPage from "../components/GptPage";

function generationPage() {
  return (
    <div>
      <Navbar />
      <GptPage />
      {/* <Footer /> */}
    </div>
  );
}

export default generationPage;
