import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 342px;
  height: 68px;
  margin: 14px 0px;
  border: none;
  background: ${(props) =>
    props.isBack ? "rgba(255, 255, 255, 0.14);" : "#D93856;"};
  border-radius: 14px;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
