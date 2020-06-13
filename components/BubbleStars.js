import React from "react";

export const BubbleStars = ({ thickness, length, color, spacing }) => (
  <>
    <div className="container">
      <div className="vertical"></div>
      <div className="middle">
        <div className="horizontal"></div>
        <div className="horizontal"></div>
      </div>
      <div className="vertical"></div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .middle {
        display: flex;
      }
      .vertical {
        width: ${thickness}px;
        height: ${length}px;
        border-radius: ${thickness / 2}px;
        background-color: ${color};
        margin-top: ${spacing - thickness / 2}px;
        margin-bottom: ${spacing - thickness / 2}px;
      }
      @media (max-width: 768px) {
        .vertical {
          width: ${thickness / 2}px;
          height: ${length / 2}px;
          border-radius: ${thickness / 4}px;
          background-color: ${color};
          margin-top: ${(spacing - thickness / 2) / 2}px;
          margin-bottom: ${(spacing - thickness / 2) / 2}px;
        }
      }
      .horizontal {
        width: ${length}px;
        height: ${thickness}px;
        border-radius: ${thickness / 2}px;
        background-color: ${color};
        margin-right: ${spacing}px;
        margin-left: ${spacing}px;
      }
      @media (max-width: 768px) {
        .horizontal {
          width: ${length / 2}px;
          height: ${thickness / 2}px;
          border-radius: ${thickness / 4}px;
          background-color: ${color};
          margin-right: ${spacing / 2}px;
          margin-left: ${spacing / 2}px;
        }
      }
    `}</style>
  </>
);

BubbleStars.defaultProps = {
  length: 36,
  thickness: 18,
  spacing: 10,
  color: "#20578A",
};
