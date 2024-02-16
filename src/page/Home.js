import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Education from "../components/Education";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Education />
      <ContactForm />
    </>
  );
};

export default Home;
