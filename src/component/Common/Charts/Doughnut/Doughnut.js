import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

export default function DoughNutChart({ data, options }) {
    Chart.register(CategoryScale);
    return(
        <section>
             <Doughnut className="resources-chart" data={data} options={options}/>
        </section>
    )   
}