import React from "react";
import styled from "styled-components";

export default function TableRow() {
  return (
    <tr>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </tr>
  );
}

const TableCell = styled.td`
  border-right-width: 1px;
  border-right-color: #bbbbbb;
  border-right-style: solid;
`;
