import React, { Suspense } from "react";
import { mockPrepAdvantages } from "constant/data";
import "./WhyMockPrep.css";

export default function WhyMockPrep() {
  return (
    <section id="features">
      <h2 className="title">Why Mock Prep ?</h2>
      <Suspense fallback={<div>Loading</div>}>
        <section id="sell-pointer">
          {mockPrepAdvantages.map((pointer, index) => (
            <section id="pointer" key={index}>
              <p id="point">
                <i className={pointer.icon}></i>
                {pointer.text}
              </p>
            </section>
          ))}
        </section>
      </Suspense>
    </section>
  );
}
