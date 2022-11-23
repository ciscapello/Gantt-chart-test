import React from "react";
import TableHeader from "../tableHeader/tableHeader";
import styled from "styled-components";
import TableRow from "../tableRow/tableRow";
import { useAppSelector } from "../../hooks";
import { selectAllTasks } from "../../store";

export default function Table() {
  const tasks = useAppSelector(selectAllTasks);
  return (
    <StyledTable>
      <TableHeader />
      <tbody>
        <TableRow />
        {tasks.map((task) => (
          <TableRow key={task.id} task={task} />
        ))}
        {tasks.map((task) => (
          <TableRow key={task.title} />
        ))}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
`;
