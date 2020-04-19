import React from 'react';
import colors from '../common/colors';

export const NavigationButton = ({
    href,
    children,
    onClick,
    width,
    mobileWidth,
    height,
    mobileHeight,
    backgroundColor,
    textColor,
    borderRadius,
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
          border-radius: ${borderRadius}px;
          justify-content: center;
          align-items: center;
        }
        a:hover {
        }
        a:focus {
        }
        a:active {
        }
        @media (max-width: 768px) {
          a {
            width: ${mobileWidth}px;
            height: ${mobileHeight}px;
          }
        }
      `}</style>
    </>
  );

  NavigationButton.defaultProps = {
    backgroundColor: colors.purple,
    textColor: 'white',
    isExternalLink: false,
    mobileWidth: 120,
    mobileHeight: 60,
    borderRadius: 10,

  };