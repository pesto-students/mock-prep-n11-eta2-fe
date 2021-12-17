import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyApp = () => {
  return (
    <div className="calendlyApp">
      <InlineWidget url="https://calendly.com/pesto-mockprep/interview" />
    </div>
  );
};

export default CalendlyApp;