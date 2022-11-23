import React, { useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { Task } from "../../types";
import IconBox from "../iconBox/iconBox";
import StatusBar from "../statusBar/statusBar";

interface TableRowProps {
  task?: Task;
}

export default function TableRow({ task }: TableRowProps) {
  const { dates } = useAppSelector((state) => state.tasks);
  const ref = useRef<HTMLTableDataCellElement>(null);
  let offset, height;
  if (ref.current?.clientHeight && ref.current.clientWidth) {
    offset = ref.current!.clientWidth;
    height = ref.current!.clientHeight;
  }
  return (
    <>
      {task && <StatusBar offset={offset} height={height} task={task} />}
      <StyledRow task={task}>
        <TableCell ref={ref} first task={task}>
          {task && <IconBox task={task} level={task.nestingLevel} />}
          <Length>{task?.sub && task?.sub.length}</Length>
          {task && task.title}
        </TableCell>
        {dates.map((day) => (
          <TableCell key={day} />
        ))}
      </StyledRow>
    </>
  );
}

const StyledRow = styled.tr<{ task: Task | undefined }>`
  display: ${({ task }) => (task?.isShow ? "40px" : "0")};
`;

const TableCell = styled.td<{ first?: boolean; task?: Task }>`
  height: 40px;
  opacity: ${(props) => (props.task?.isShow ? "1" : "0")};
  transition: 0.2s;
  padding-left: ${(props) =>
    props.task?.nestingLevel! < 5
      ? `${props.task?.nestingLevel! * 20}`
      : `${props.task?.nestingLevel! * 25}`}px;
  border-right-width: 1px;
  border-right-color: #dbdbdb;
  border-right-style: solid;
  border-bottom-width: ${(props) =>
    props.first && props.task && props.task.isShow ? "1px" : "0"};
  border-bottom-color: ${(props) =>
    props.first && props.task ? "#dbdbdb" : "none"};
  border-bottom-style: ${(props) =>
    props.first && props.task ? "solid" : "none"};
  border-top-width: ${(props) => (props.first && props.task ? "1px" : "0")};
  border-top-color: ${(props) =>
    props.first && props.task ? "#dbdbdb" : "none"};
  border-top-style: ${(props) =>
    props.first && props.task && props.task.isShow ? "solid" : "none"};
  color: #262842;
  font-weight: 400;
  font-size: 14px;
`;

const Length = styled.span`
  font-weight: 100;
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  margin-right: 5px;
  color: #8b8c9e;
`;
