import React, { useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { Task } from "../../types";
import { handleColorType } from "../../utils";

interface StatusBarProps {
  offset: number | undefined;
  height: number | undefined;
  task?: Task;
}

export default function StatusBar({ offset, height, task }: StatusBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { minDate } = useAppSelector((state) => state.tasks);
  const startDateDiff = Math.abs(
    new Date(task!.period_start).getTime() - new Date(minDate!).getTime()
  );
  const startDiffDays = Math.ceil(startDateDiff / (1000 * 3600 * 24));

  const endDateDiff = Math.abs(
    new Date(task!.period_end).getTime() -
      new Date(task!.period_start).getTime()
  );
  const endDiffDays = Math.ceil(endDateDiff / (1000 * 3600 * 24)) + 1;

  if (offset) offset = offset + 40;
  if (task && offset) offset = offset + 22 * startDiffDays;

  return (
    <Wrapper ref={ref} height={height} offset={offset}>
      <Bar endDiffDays={endDiffDays} task={task} />
      <Title>{task?.title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  offset: number | undefined;
  height: number | undefined;
}>`
  align-items: center;
  display: flex;
  position: absolute;
  left: ${(props) => props.offset}px;
`;

const Bar = styled.div<{ endDiffDays: number; task: Task | undefined }>`
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
