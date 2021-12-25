import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Doughnut } from "react-chartjs-2";

export default function DoughNutChart({data,options}) {
    return(
        <section>
             <Doughnut className="resources-chart" data={data} options={options}/>
        </section>
    )   
}