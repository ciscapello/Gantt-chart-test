import React, { useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { selectMinDate } from "../../store";
import { Task } from "../../types";
import { handleColorType, dateHandler } from "../../utils";

interface StatusBarProps {
  offset: number | undefined;
  height: number | undefined;
  task?: Task;
}

export default function StatusBar({ offset, height, task }: StatusBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const minDate = useAppSelector(selectMinDate);

  const { startDiffDays, endDiffDays } = dateHandler(
    task!.period_start,
    task!.period_end,
    minDate
  );

  if (offset) offset = offset + 40;
  if (task && offset) offset = offset + 22 * startDiffDays;

  return (
    <Wrapper ref={ref} height={height} task={task} offset={offset}>
      <Bar endDiffDays={endDiffDays} task={task} />
      <Title>{task?.title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.span<{
  offset: number | undefined;
  height: number | undefined;
  task: Task | undefined;
}>`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${(props) => props.offset}px;
  transition: 0.3s;
  opacity: ${(props) => (props.task?.isShow ? "1" : "0")};
`;

const Bar = styled.span<{ endDiffDays: number; task: Task | undefined }>`
  background-color: #a30303;
  width: ${(props) => props.endDiffDays * 22}px;
  height: 24px;
  border-radius: 4px;
  ${({ task }) => handleColorType(task?.nestingLevel)}
  margin-right: 8px;
`;

const Title = styled.p`
  color: #262842;
  font-weight: 400;
  font-size: 14px;
`;
