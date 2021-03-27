import styled, { css } from "styled-components";

const ContainerStyled = styled.div`
${({ theme = {} }) => {
  const { breakpoint = '' } = theme;
  return css`
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: 375px;
    padding: 72px 25px;

    @media ${breakpoint} {
      max-width: 782px;
    }
  `;
}}
`;

export default ContainerStyled;
