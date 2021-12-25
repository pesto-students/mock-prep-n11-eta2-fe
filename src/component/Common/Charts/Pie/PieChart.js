<<<<<<< HEAD
import { CategoryScale } from 'chart.js';
import { Chart }            from 'react-chartjs-2'
=======
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
>>>>>>> c78e78ec1fa4c9a62f92f1637639c4254cfd9a42
import { Pie } from "react-chartjs-2";

export default function PieChart({ data, options }) {
    Chart.register(CategoryScale);
    return(
        <section>
             <Pie className="trending-chart" data={data} options={options}/>
        </section>
    )   
}