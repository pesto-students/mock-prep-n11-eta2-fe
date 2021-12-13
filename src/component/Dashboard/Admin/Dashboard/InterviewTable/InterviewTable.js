import React from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { tableDataSource, tableColumns } from 'constant/data';
import "./InterviewTable.css"

export default function InterviewTable() {
    
    return (
        <div className='interview-details'>
            <h2 className='headline'>Interview List for current month</h2>
            <Table key={tableColumns}  dataSource={tableDataSource} columns={tableColumns} />;
        </div>
    )
}