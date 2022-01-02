import React, { lazy, Suspense, useState } from "react";
import { Table, Input } from "antd";
import { tableColumns } from "constant/data";
import "./InterviewTable.css";

const DashboardHeader = lazy(() =>
  import("component/Dashboard/Common/Header/DashboardHeader")
);

export default function InterviewTable({ data }) {
  const { Search } = Input;

  let [tableData, setTableData] = useState(data);
  let [tableDataList, setTableList] = useState(data);

  const onSearch = (value) => {
    let filtered = tableDataList.filter(
      (val) =>
        val.interviewer.name.includes(value) ||
        val.student.name.includes(value) ||
        val.topic.includes(value)
    );
    setTableData(filtered);
    setTableList(tableDataList);
  };

  const search = (
    <>
      <section id="tableSearch">
        <Search placeholder="Search Interviews" onSearch={onSearch} />
      </section>
    </>
  );

  return (
    <div className="interview-details">
      <DashboardHeader
        title="Interview List for Current Month"
        rightComponent={search}
      />
      {search}
      <Suspense fallback={<div>Loading</div>}>
        <Table dataSource={tableData} columns={tableColumns} />;
      </Suspense>
    </div>
  );
}
