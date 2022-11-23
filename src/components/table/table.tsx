import React from "react";
import TableHeader from "../tableHeader/tableHeader";
import styled from "styled-components";
import TableRow from "../tableRow/tableRow";
import { useAppSelector } from "../../hooks";

export default function Table() {
  const { tasks } = useAppSelector((state) => state.tasks);
  return (
    <StyledTable>
      <TableHeader />
      <tbody>
        <TableRow />
        {tasks.map((task) => (
          <TableRow task={task} />
        ))}
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
`;
