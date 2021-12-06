import React from 'react'
import { Table } from 'antd';
import { tableDataSource, tableColumns } from '../../../constant/data';
import 'antd/dist/antd.css';

export default function InterviewTable() {
    
    return (
        <div>
            <Table dataSource={tableDataSource} columns={tableColumns} />;
        </div>
    )
}
