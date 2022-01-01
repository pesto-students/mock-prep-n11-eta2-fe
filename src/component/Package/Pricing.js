import React, { lazy, Suspense } from "react";
import { fallback } from "constant/navList";

const PackageCard = lazy(() =>
  import("component/Common/Cards/Packages/PackageCard")
);

export default function Pricing({ pricing }) {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div>
        <h2 className="pricing-header">Pricing and packages</h2>
        <section className="package-detail">
          {pricing.map((pricing, index) => (
            <PackageCard key={index} {...pricing} />
          ))}
        </section>
      </div>
    </Suspense>
  );
}
