
import {  earningChartOptions, resourceChartOptions    } from "constant/data";
import DashBoardChart from 'component/Common/Charts/Bar/BarChart';
import PieChart from 'component/Common/Charts/Pie/PieChart';

import './Earnings.css'

export default function Earnings({analytics}) {
           
    return(
        <div className="earnings-container">
            <section className="interviewer-dashboard-charts">
                <section className="earning-chart"> 
                    <h2 className="headline">Earnings for 2021</h2>
                    {analytics? <DashBoardChart options={earningChartOptions} data={analytics.earnings} />:<p></p>}
                </section>
                <section className="resourceChart">
                    <h2 className="headline">Earning % Breakdown by topics</h2>
                    {analytics ? <PieChart options={resourceChartOptions} data={analytics.topicData} />:<p></p>}
                </section>
            </section>
        </div>
    )
}