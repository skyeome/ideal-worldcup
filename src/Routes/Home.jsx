import styled from "styled-components";

const MainTitle = styled.h2``;

const StartBtn = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Home() {
  return (
    <>
      <MainTitle>이상형월드컵</MainTitle>
      <StartBtn primary>시작하기</StartBtn>
    </>
  );
}
export default Home;
