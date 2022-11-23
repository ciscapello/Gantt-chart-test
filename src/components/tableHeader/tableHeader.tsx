import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { dateToStringArr, weekHandler } from "../../utils";

export default function TableHeader() {
  const { dates: daysArray, minDate } = useAppSelector((state) => state.tasks);
  console.log(
    new Date(
      new Date(daysArray[0]).setDate(new Date(daysArray[0]).getDate() + 7)
    )
  );

  const weekArr = weekHandler(new Date(minDate!));
  console.log(weekArr);
  const weeks = dateToStringArr(weekArr);
  console.log("weeks", weeks);

  return (
    <thead>
      <tr>
        <TableHeaderCell rowSpan={2} first>
          Work Item
        </TableHeaderCell>
        {weeks.map((week, index, arr) => (
          <TableHeaderCell key={Math.random()} colSpan={7}>
            {`${week.startWeek} - ${week.endWeek}`}
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
  max-height: 25px;
  color: ${({ day }) => (day === 6 || day === 0 ? "#A9A9B8" : "#6d6e85")};
  font-weight: ${(props) => (props.first ? "500" : "400")};
  font-size: ${(props) => (props.first ? "14px" : "12px")};
  line-height: 18px;
  text-align: ${(props) => (props.first ? "start" : "center")};
  padding-left: ${(props) => (props.first ? "20px" : "0")};
  position: relative;
  z-index: -999;
`;
