import React, { useEffect } from "react";
import Table from "./components/table/table";
import styled, { createGlobalStyle } from "styled-components";
import { useAppDispatch } from "./hooks";
import { getTasks } from "./store/tasks/actions";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Table />
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  margin: 30px;
  overflow: hidden;
  box-shadow: inset -3px 0 2px 0 lightgray;
  border-radius: 12px;
  border: 1px solid lightgray;
`;

export default App;
