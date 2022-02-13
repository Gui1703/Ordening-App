import styled from "styled-components";

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${(props) =>
    props.isBlur &&
    `
    min-height: calc(100vh - 170px);
  `}
`;