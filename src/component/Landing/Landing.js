import React, { lazy } from "react";
import "./Landing.css";

const Introduction = lazy(() =>
  import("component/Landing/Introduction/Introduction")
);

// Importing Landing Components
const Offerings = lazy(() => import("component/Landing/Offerings/Offerings"));
const Footer = lazy(() => import("component/Common/Footer/Footer"));
const Analytics = lazy(() => import("component/Landing/Analytics/Analytics"));
const Packages = lazy(() => import("component/Landing/Packages/Packages"));
const Interviewer = lazy(() =>
  import("component/Landing/Interviewers/Interviewers")
);
const WhyMockPrep = lazy(() =>
  import("component/Landing/WhyMockPrep/WhyMockPrep")
);

const Testimonials = lazy(() =>
  import("component/Landing/Testimonials/Testimonial")
);

export default function Landing() {
  return (
    <div id="landing-page">
      <Introduction />
      <section id="landing-container">
        <Offerings />
        <Interviewer />
        <WhyMockPrep />
        <Analytics />
        <Packages />
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}
