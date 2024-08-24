import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalForm from "../Components/ModalForm";

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Centered = styled.div``;

const FormWrap = styled.div`
  select {
    display: block;
    width: 100%;
  }
`;

const MainTitle = styled.h2`
  margin-bottom: 1.2em;
`;

const StartBtn = styled(Link)`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;
`;

function Home() {
  const [round, setRound] = useState(32);
  const changeRound = (value) => {
    setRound(value);
  };
  return (
    <>
      <Container>
        <Centered>
          <MainTitle>이상형월드컵</MainTitle>
          <FormWrap>
            <ModalForm changeRound={changeRound} />
          </FormWrap>

          <div>
            <StartBtn
              to={`/w`}
              state={{
                title: "음식 이상형 월드컵",
                name: "음식",
                round: round,
              }}
            >
              시작하기
            </StartBtn>
          </div>
        </Centered>
      </Container>
    </>
  );
}
export default Home;
