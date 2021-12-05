import React from 'react'
import { Select } from 'antd';
import "./Filter.css"

export default function Filter ({filterOptions,filterFunction}) {

    const { Option } = Select;
    const children = [];

    filterOptions.map(filter => {
       return  children.push(<Option key={filter.value}>{filter.value}</Option>);
    })

    return (
            <div>
            <Select
                className="select"
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Filter Interviewers"
                defaultValue={['JavaScript']}
                dropdownMatchSelectWidth={3}
                onChange={filterFunction}
                >
                {children}
            </Select>
        </div>
    )
}
