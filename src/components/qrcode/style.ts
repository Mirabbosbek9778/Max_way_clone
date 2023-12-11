import styled from "styled-components";

const Container = styled.div`
  width: 290px;
  height: 264px;
  border-radius: 10px;
  background-color: rgb(184, 184, 252);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 28px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export { Container, Image };
