import React from 'react';
import colors from '../common/colors';

export const NavigationButton = ({
    href,
    children,
    onClick,
    width,
    height,
    backgroundColor,
    textColor,
  }) => (
    <>
      <a
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
      <style jsx>{`
        a {
          background-color: ${backgroundColor};
          color: ${textColor};
          display: flex;
          transition: all 0.15s ease;
          width: ${width}px;
          height: ${height}px;
          text-decoration: none;
          border-radius: 10px;
          justify-content: center;
          align-items: center;
        }
        a:hover {
        }
        a:focus {
        }
        a:active {
        }
        @media (max-width: 414px) {
          a {
          }
        }
      `}</style>
    </>
  );

  NavigationButton.defaultProps = {
    backgroundColor: colors.purple,
    textColor: 'white',
    isExternalLink: false,
  };