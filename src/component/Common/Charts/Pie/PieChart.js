import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Pie } from "react-chartjs-2";

export default function PieChart({data,options}) {
    return(
        <section>
             <Pie className="trending-chart" data={data} options={options}/>
        </section>
    )   
}