import styled, { css } from 'styled-components';

const FigureStyled = styled.div`
  ${({ theme = {}, active = false }) => {
    const { colors = {}, breakpoint = '' } = theme;
    return css`
      background: ${colors.white};
      border-radius: 5px;
      figure {
        border-radius: 5px;

        @media ${breakpoint} {
          display: flex;

          & > div {
            flex: 1 0 285px;
          }
        }
      }

      .drawers {
        border-radius: 5px 5px 0 0;

        @media ${breakpoint} {
          border-radius: 5px 0 0 5px;
        }
      }

      figcaption {
        overflow: hidden;
        padding: 32px 32px 14px;
        position: relative;

        @media ${breakpoint} {
          overflow: visible;
        }
      }

      h4 {
        color: ${colors.primary[700]};
        font-size: 1.23rem;
        margin-bottom: 16px;

        @media ${breakpoint} {
          font-size: 1.65rem;
          line-height: 1.4;
        }
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
        cursor: pointer;
        padding: 8px;
      }

      .social-info {
        align-items: center;
        background-color: ${colors.primary[700]};
        bottom: 0;
        border-radius: 0 0 5px 5px;
        display: flex;
        justify-content: space-between;
        margin: 0 -32px;
        height: 64px;
        position: absolute;
        width: 100%;

        @media ${breakpoint} {
          border-radius: 10px;
          bottom: 90px;
          max-width: 248px;
          right: -45px;
        }
        /* This element will only show on desktop. Breakpoint is handled with JS */
        .down-arrow {
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid ${colors.primary[700]};
          bottom: 0;
          height: 0; 
          left: 112px;
          position: absolute;
          width: 0; 
          z-index: -1;
        }

        .icon-container {
          background-color: ${colors.primary[300]};
          max-width: 32px;

          svg {
            path {
              fill: ${colors.white};
            }
          }
        }

        .share-container {
          display: flex;
        }

        .share-label {
          color: ${colors.primary[300]};
          font-size: 1rem;
          letter-spacing: 4px;
          margin-right: 20px;
        }

        .share-icon {
          cursor: pointer;
        }

        .share-icon:not(:last-child) {
          margin-right: 16px;
        }
        .twitter {
          align-self: flex-end;
        }
      }
    `;
  }}
`;

export default FigureStyled;
