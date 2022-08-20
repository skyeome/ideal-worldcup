import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalForm from "../Components/ModalForm";

const MainTitle = styled.h2``;

const StartBtn = styled(Link)`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Home() {
  const [round, setRound] = useState(32);
  const changeRound = (value) => {
    setRound(value);
  };
  return (
    <>
      <MainTitle>이상형월드컵</MainTitle>
      <ModalForm changeRound={changeRound} />

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
    </>
  );
}
export default Home;
