import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 1.5vw 2.5vw;
  background: #000000;
  border-radius: 5px;
  min-width: 12vw;
  margin-left: 25vw;
  border: none;
  font-size: 1vw;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
