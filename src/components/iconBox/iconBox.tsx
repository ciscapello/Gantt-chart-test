import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Arrow,
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
} from "../../assets/svgs";
import { useAppDispatch } from "../../hooks";
import { showRow } from "../../store";
import { Task } from "../../types";

interface IconBoxProps {
  level: number | undefined;
  task: Task;
}

export default function IconBox({ level, task }: IconBoxProps) {
  const dispatch = useAppDispatch();
  const [pressed, setPressed] = useState(false);
  const { isShow } = task;
  const clickHandler = () => {
    setPressed((prev) => !prev);
    dispatch(showRow({ level, pressed }));
  };
  useEffect(() => {
    isShow ? setPressed(false) : setPressed(true);
  }, [isShow]);

  const selectIcon = () => {
    switch (level) {
      case 1:
        return <Level1 width={14} />;
      case 2:
        return <Level2 width={14} />;
      case 3:
        return <Level3 width={14} />;
      case 4:
        return <Level4 width={14} />;
      default:
        return <Level5 width={14} />;
    }
  };
  return (
    <Box>
      {level !== 5 ? (
        <Button pressed={pressed} onClick={clickHandler}>
          <Arrow width={15} />
        </Button>
      ) : null}
      {selectIcon()}
    </Box>
  );
}

const Box = styled.span`
  vertical-align: middle;
`;

const Button = styled.button<{ pressed: boolean }>`
  transform: ${({ pressed }) => (!pressed ? "none" : "rotate(180deg)")};
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
