import React, {lazy,useState} from 'react'
import { Table,Input } from 'antd';
import { tableColumns } from 'Constant/data';
import "./InterviewTable.css"

const DashboardHeader = lazy(() => import('component/Dashboard/Common/Header/DashboardHeader'))

export default function InterviewTable({data}) {

    const { Search } = Input;

    let [tableData, setTableData] = useState(data);
    let [tableDataList, setTableList] = useState(data);

    const onSearch = (value) => {
        let filtered = tableDataList.filter(val => val.interviewer.includes(value) || val.student.includes(value));
        setTableData(filtered)
    }; 

    const search = <><section className="search"><Search placeholder="Search Interviews" onSearch={onSearch} style={{ width: 200 }} /></section></>
   
    return (
        <div className='interview-details'>
              <DashboardHeader title="Interview List for Current Month" rightComponent={search}  />
              <Table dataSource={tableData} columns={tableColumns} />;
        </div>
    )
}