import React from 'react';

export const BubbleBars = ({
    widthSmall,
    heightSmall,
    widthLarge,
    heightLarge,
    color,
    spaceBetween,
  }) => (
    <>
     <div className="container">
        <div className="smallBubble"></div>
        <div className="smallBubble"></div>
        <div className="largeBubble"></div>
    </div>
      <style jsx>{`
        .container {
            display: flex;
        }
        .smallBubble {
            width: ${widthSmall}px;
            height: ${heightSmall}px;
            border-radius: ${heightSmall / 2}px;
            background-color: ${color};
            margin-right: ${spaceBetween}px;
        }
        @media (max-width: 768px) {
          .smallBubble {
            width: ${widthSmall / 2}px;
            height: ${heightSmall / 2}px;
            border-radius: ${heightSmall / 4}px;
            background-color: ${color};
            margin-right: ${spaceBetween}px;
        }
        }
        .largeBubble {
            width: ${widthLarge}px;
            height: ${heightLarge}px;
            border-radius: ${heightLarge / 2}px;
            background-color: ${color};
        }
        @media (max-width: 768px) {
          .largeBubble {
            width: ${widthLarge / 2}px;
            height: ${heightLarge / 2}px;
            border-radius: ${heightLarge / 4}px;
            background-color: ${color};
        }
        }
      `}</style>
    </>
  );

  BubbleBars.defaultProps = {
    widthSmall: 26,
    heightSmall: 13,
    widthLarge: 130,
    heightLarge: 13,
    color: '#20578A',
  };
