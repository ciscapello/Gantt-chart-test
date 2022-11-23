import React, { useEffect } from "react";
import Table from "./components/table/table";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getTasks } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(getTasks());
    // dispatch(getDates());
  }, [dispatch]);

  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        <Table />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 30px;
  overflow: hidden;
  box-shadow: inset -3px 0 2px 0 lightgray;
  border-radius: 12px;
  border: 1px solid lightgray;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin: 30px;
`;

export default App;
