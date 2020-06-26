import React from "react";

export const CircularPicture = ({
  image,
  width,
  height,
  marginRight,
  href,
  radiusPercent,
  onClick,
  isExternalLink,
}) => (
  <>
    <img
      src={image}
      href={href}
      onClick={onClick}
      target={isExternalLink ? "_blank" : ""}
      className="circularImage"
    />
    {/* <img
      src={image}
      onClick={onClick}
      className="activeImage"
      /> */}
    <style jsx>{`
      .circularImage {
        border-radius: ${radiusPercent}%;
        display: block;
        margin-left: 0px;
        margin-right: ${marginRight}px;
        width: ${width}px;
        height: ${height}px;
        object-fit: cover;
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .activeImage {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transition: 0.5s ease;
        width: ${width}px;
        height: ${height}px;
        border-radius: ${radiusPercent}%;
      }
      .circularImage:hover .activeImage {
        opacity: 1;
      }
      .circularImage:focus {
      }
      .circularImage:active {
      }
      @media (max-width: 414px) {
        a {
        }
      `}</style>
  </>
);

CircularPicture.defaultProps = {
  width: 200,
  height: 200,
  marginRight: 0,
  radiusPercent: 50,
  isExternalLink: false,
};
