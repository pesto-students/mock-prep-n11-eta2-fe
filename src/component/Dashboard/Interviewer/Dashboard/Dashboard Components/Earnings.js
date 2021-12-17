
import { AttachMoney } from '@material-ui/icons';
import { totalSaleOption,totalSaleData, earningChartOptions, earningChartData, resourceChartOptions ,resourceChartData   } from '../../../../../constant/data';
import DashBoardChart from '../../../../Primary Components/Dashboard-Charts/Bar-Charts';
import PieChart from '../../../../Primary Components/Dashboard-Charts/Pie-Chart';
import DashHeader from '../../../Common/Header/DashHeader';
import './Earnings.css'

export default function Earnings (){
    return(
        <div className="Earnings-container" style ={{marginLeft : "20%"}}>
            <DashHeader title = "Earnings" icon={<AttachMoney />}/>
            
            <div className = "earning-chart">
                 <DashBoardChart className="totalEarningChart" options={earningChartOptions} data={earningChartData} />
            </div>
            <div className = "Earnings-graphs">
                <div className="resourceChart">
                    <PieChart options={resourceChartOptions} data={resourceChartData} />
                </div>
                <div className="resourceChart">
                    <PieChart options={resourceChartOptions} data={resourceChartData} />
                </div>
            </div>
            
        </div>
    )
}