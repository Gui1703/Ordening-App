import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainerOrders = styled.div`
  width: 342px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  margin: 20px 0;

  button {
    background: none;
    border: none;
    display: flex;
    justify-content: end;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

export const Order = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
`;

export const Client = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
  color: #ffffff;
`;
