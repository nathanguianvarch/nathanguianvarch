"use client";
import Experiences from "@/components/experiences";
import LandingPage from "@/components/landingPage";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Schools from "@/components/schools";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      {/* <hr />
      <Skills /> */}
      <hr />
      <Projects />
      <hr />
      <Schools />
      <hr />
      <Experiences />
      <hr />
      <Socials />
    </main>
  );
}
