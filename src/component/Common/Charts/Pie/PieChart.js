import { CategoryScale } from 'chart.js';
import { Chart }            from 'react-chartjs-2'
import { Pie } from "react-chartjs-2";

export default function PieChart({ data, options }) {
    Chart.register(CategoryScale);
    return(
        <section>
             <Pie className="trending-chart" data={data} options={options}/>
        </section>
    )   
}