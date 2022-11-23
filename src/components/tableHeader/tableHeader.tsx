import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";

export default function TableHeader() {
  const daysArray = useAppSelector((state) => state.tasks.dates);

  return (
    <thead>
      <tr>
        <TableHeaderCell first>Work Item</TableHeaderCell>
        {daysArray.map((day) => (
          <TableHeaderCell key={Number(day)}>
            {new Date(day).getDate()}
          </TableHeaderCell>
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
  color: #6d6e85;
  font-weight: ${(props) => (props.first ? "500" : "400")};
  font-size: ${(props) => (props.first ? "14px" : "12px")};
  line-height: 18px;
  text-align: ${(props) => (props.first ? "start" : "center")};
  padding-left: ${(props) => (props.first ? "20px" : "0")};
`;
