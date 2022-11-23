import React, { useEffect } from "react";
import { Table } from "./components/table";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getTasks, selectTitle } from "./store";
import Download from "./assets/svgs/Download";

function App() {
  const dispatch = useAppDispatch();
  const title = useAppSelector(selectTitle);
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <FlexBox>
        <Title>{title}</Title>
        <Button>
          <Download width={14} />
          Export
        </Button>
      </FlexBox>
      <Wrapper>
        <Table />
      </Wrapper>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  width: 100px;
  height: 40px;
  background-color: transparent;
  border-radius: 8px;
  margin: 30px;
  border: 1px solid #bfbfc0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
  box-shadow: inset -10px 0 10px -10px #000000;
  border-radius: 12px;
  border: 1px solid lightgray;
  z-index: 3;
  margin: 0 30px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 30px;
`;

export default App;
