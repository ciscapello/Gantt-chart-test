import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";

export default function TableHeader() {
  const daysArray = useAppSelector((state) => state.tasks.dates);
  const dayOfWeek = new Date(daysArray[0]).getDay();

  return (
    <thead>
      <tr>
        <TableHeaderCell rowSpan={2} first>
          Work Item
        </TableHeaderCell>
        {daysArray.map((day) => (
          <TableHeaderCell key={Number(day)} colSpan={7}>
            {new Date(day).getDay()}
          </TableHeaderCell>
        ))}
      </tr>
      <tr>
        {daysArray.map((day) => (
          <TableHeaderCell key={day} day={Number(new Date(day).getDay())}>
            {new Date(day).getDate()}
          </TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
}

const TableHeaderCell = styled.th<{
  first?: boolean;
  day?: number | undefined;
}>`
  min-width: ${(props) => (props.first ? "390px" : "22px")};
  background-color: #f7f8fc;
  border-right-width: 1px;
  border-right-color: #bbbbbb;
  border-right-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #bbbbbb;
  border-bottom-style: solid;
  box-sizing: border-box;
  height: 25px;
  color: ${({ day }) => (day === 6 || day === 0 ? "#A9A9B8" : "#6d6e85")};
  font-weight: ${(props) => (props.first ? "500" : "400")};
  font-size: ${(props) => (props.first ? "14px" : "12px")};
  line-height: 18px;
  text-align: ${(props) => (props.first ? "start" : "center")};
  padding-left: ${(props) => (props.first ? "20px" : "0")};
`;
