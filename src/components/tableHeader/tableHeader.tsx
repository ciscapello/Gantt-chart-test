import React from "react";
import styled from "styled-components";

export default function TableHeader() {
  const daysArray: Date[] = [];
  const start = new Date("02/05/2020");
  const end = new Date("03/28/2020");

  for (const d = start; d <= end; d.setDate(d.getDate() + 1)) {
    daysArray.push(new Date(d));
  }

  return (
    <thead>
      <tr>
        <TableHeaderCell first>Work Item</TableHeaderCell>
        {daysArray.map((day) => (
          <TableHeaderCell key={Number(day)}>{day.getDate()}</TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
}

const TableHeaderCell = styled.th<{ first?: boolean }>`
  min-width: ${(props) => (props.first ? "390px" : "22px")};
  background-color: #f7f8fc;
  border-right-width: 1px;
  border-right-color: #bbbbbb;
  border-right-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #bbbbbb;
  border-bottom-style: solid;
  box-sizing: border-box;
  height: 50px;
`;
