import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from "react-chartjs-2";

export default function DashBoardChart({data,options}) {
    return(
        <section>
             <Bar className="onboard-chart" data={data} options={options}/>
        </section>
    )   
}