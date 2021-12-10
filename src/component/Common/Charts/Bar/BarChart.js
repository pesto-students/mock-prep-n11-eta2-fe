import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from "react-chartjs-2";

export default function BarChart({ data, options }) {
    Chart.register(CategoryScale);
   
    return(
        <section>
             <Bar className="onboard-chart" data={data} options={options}/>
        </section>
    )   
}
