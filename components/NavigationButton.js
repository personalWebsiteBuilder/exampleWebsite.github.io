import React from 'react';

export const NavigationButton = ({
    href,
    children,
    onClick,
    isExternalLink,
  }) => (
    <>
      <a
        href={href}
        onClick={onClick}
        target={isExternalLink ? '_blank' : ''}
        rel={isExternalLink ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
      <style jsx>{`
        a {
          background: transparent;
          display: flex;
          text-align: center;
          transition: all 0.15s ease;
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
    backgroundColor: colors.snBlue,
    color: colors.white,
    isExternalLink: false,
  };