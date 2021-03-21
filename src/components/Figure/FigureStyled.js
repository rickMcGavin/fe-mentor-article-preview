import styled, { css } from 'styled-components';

const FigureStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
      background: ${colors.white};
      border-radius: 5px;
      figure {
        border-radius: 5px;
      }

      .drawers {
        border-radius: 5px 5px 0 0;
      }

      figcaption {
        padding: 40px 32px 14px;
      }

      h4 {
        color: ${colors.primary[700]};
        font-size: 1.23rem;
        margin-bottom: 16px;
      }

      p {
        color: ${colors.primary[500]};
        font-size: 1.04rem;
        margin-bottom: 32px;
      }

      .user-info {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .profile-img {
        border-radius: 50%;
      }

      .info-container {
        margin-left: 16px;
        margin-right: auto;

        .name {
          font-size: 1rem;
          color: ${colors.primary[500]};
        }

        .date {
          font-size: 1rem;
          color: ${colors.primary[300]};
        }
      }

      .icon-container {
        background-color: ${colors.primary[100]};
        border-radius: 50%;
        padding: 8px;
      }
    `;
  }}
`;

export default FigureStyled;
