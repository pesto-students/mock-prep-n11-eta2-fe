import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Pie } from "react-chartjs-2";

export default function PieChart({ data, options }) {
    Chart.register(CategoryScale);
    return(
        <section>
             <Pie className="trending-chart" data={data} options={options}/>
        </section>
    )   
}