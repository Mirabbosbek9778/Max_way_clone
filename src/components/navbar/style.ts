import styled from "styled-components";

interface Props {
  size?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 350px 15px 350px;
`;

const Container = styled.div<Props>`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: ${({ size }) => (size ? "" : "space-between")};
  flex-direction: ${({ size }) => (size ? "column" : "")};
  gap: ${({ size }) => (size ? "30px" : "")};
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const Content = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(184, 184, 252);
`;

const ImageBody = styled.img`
  border-radius: 30px;
  width: 1250px;
`;

const Text = styled.h1<Props>`
  font-size: ${({ size }) => (size ? "18px" : "32px")};
  color: ${({ size }) => (size ? "white" : "black")};
  font-weight: ${({ size }) => (size ? "400" : "600")};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export { Container, Wrapper, Main, Content, ImageBody, Text };
