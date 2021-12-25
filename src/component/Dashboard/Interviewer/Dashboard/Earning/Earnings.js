
import {  earningChartOptions, resourceChartOptions    } from "constant/data";
import DashBoardChart from 'component/Common/Charts/Bar/BarChart';
import PieChart from 'component/Common/Charts/Pie/PieChart';

import './Earnings.css'

export default function Earnings() {
    

    const data = {
        earnings: {
            labels: [
                "Jan","Feb","March","April",
                "Jun",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov"
            ],
            datasets: [
                {
                    label: "Month Wise Earnings Breakdown",
                    data: [
                        1000,
                        4500,
                        12220,
                        7291,
                        4950,
                        7109,
                        6201,
                        7291,
                        8020,
                        12829
                    ],
                    borderColor: "rgb(13, 48, 153)",
                    backgroundColor: "goldenrod"
                  
                }
            ]
        },
        topics: {
            labels: [
                "Javascript",
                "HTML",
                "UI",
                "React"
            ],
            datasets: [
                {
                    label: "Income breakdown package wise",
                    data: [
                        60,
                        22,
                        18,
                        23
                    ],
                    borderColor: "#1300f4",
                    backgroundColor: [
                        "grey",
                        "orange",
                        "lightgrey",
                        "neon"
                    ],
                
                }
            ]
        }
    }
       
    


    return(
        <div className="earnings-container">
            <section className="interviewer-dashboard-charts">
                <section className="earning-chart"> 
                    <h2 className="headline">Earnings for 2021</h2>
                    {data.earnings? <DashBoardChart options={earningChartOptions} data={data.earnings} />:<p></p>}
                </section>
                <section className="resourceChart">
                    <h2 className="headline">Earning % Breakdown by topics</h2>
                    {data.topics? <PieChart options={resourceChartOptions} data={data.topics} />:<p></p>}
                </section>
            </section>
        </div>
    )
}