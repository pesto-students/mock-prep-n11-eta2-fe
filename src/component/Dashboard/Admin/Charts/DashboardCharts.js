import React, { lazy, Suspense } from "react";
import { earningChartOptions } from "constant/data";
import { Link } from "react-router-dom";
import { messageIcon } from "constant/antIcons";
import "./DashboardChart.css";

const DashboardPie = lazy(() => import("component/Common/Charts/Pie/PieChart"));
const DashboardChart = lazy(() =>
  import("component/Common/Charts/Bar/BarChart")
);

export default function DashboardCharts({ data, query }) {
  return (
    <div>
      <section className="admin-dashboard-charts">
        {data ? (
          <section id="earningChart">
            <h2 className="chartHeader">Earnings for Year 2021</h2>
            {data.earnings ? (
              <DashboardChart
                options={earningChartOptions}
                data={data.earnings}
              />
            ) : (
              <p>Loading..</p>
            )}
          </section>
        ) : (
          <></>
        )}
        {data && query ? (
          <section id="round">
            <section id="resourceChart">
              <h2 className="chartHeader">Earning % based on packages</h2>
              {data.incomeResources ? (
                <DashboardPie
                  options={earningChartOptions}
                  data={data.incomeResources}
                />
              ) : (
                <p>Loading..</p>
              )}
            </section>
            <section id="resourceChart">
              <h2 className="chartHeader">Customer Queries</h2>

              <Suspense fallback={<div>Loading</div>}>
                {query && query.length > 0 ? (
                  <>
                    {query.map((q, index) => (
                      <section key={index}>
                        <p id="queryContainer">
                          {q.title}-<br />
                          {q.name}
                          <Link to="/admin/queryList">{messageIcon}</Link>
                        </p>
                      </section>
                    ))}
                  </>
                ) : (
                  <p>Loading..</p>
                )}
              </Suspense>

              <Link to="queryList/">View all</Link>
            </section>
          </section>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
