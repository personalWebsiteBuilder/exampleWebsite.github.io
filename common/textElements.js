import React from 'react';

export const BigTitle = ({
    children,
    fontSize,
    textAlign,
    color,
    hasTextShadow,
    maxWidth,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    customStyles,
}) => (
    <>
        <h1 style={customStyles}>{children}</h1>
        <style jsx>{`
            h1 {
                font-size: ${fontSize}px;
                text-align: ${textAlign};
                color: ${color};
                text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
                max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
                ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
                ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
                ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
                ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
            }
        `}</style>
    </>
);

BigTitle.defaultProps = {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
};

export const LittleTitle = ({
    children,
    fontSize,
    textAlign,
    color,
    hasTextShadow,
    maxWidth,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    customStyles,
}) => (
    <>
        <h1 style={customStyles}>{children}</h1>
        <style jsx>{`
            h1 {
                font-size: ${fontSize}px;
                text-align: ${textAlign};
                color: ${color};
                text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
                max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
                ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
                ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
                ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
                ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
            }
        `}</style>
    </>
);

LittleTitle.defaultProps = {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
};

export const H1 = ({
    children,
    fontSize,
    textAlign,
    color,
    hasTextShadow,
    maxWidth,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    customStyles,
}) => (
    <>
        <h1 style={customStyles}>{children}</h1>
        <style jsx>{`
            h1 {
                font-size: ${fontSize}px;
                text-align: ${textAlign};
                color: ${color};
                text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
                max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
                ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
                ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
                ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
                ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
            }
        `}</style>
    </>
);

H1.defaultProps = {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
};

export const BodyText = ({
    children,
    fontSize,
    textAlign,
    color,
    hasTextShadow,
    maxWidth,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    customStyles,
}) => (
    <>
        <p style={customStyles}>{children}</p>
        <style jsx>{`
            p {
                font-size: ${fontSize}px;
                text-align: ${textAlign};
                color: ${color};
                text-shadow: ${hasTextShadow ? '0 4px 4px rgba(0, 0, 0, 0.2)' : 'none'};
                max-width: ${maxWidth !== undefined ? `${maxWidth}px` : 'none'};
                ${marginTop !== undefined ? `margin-top: ${marginTop}px` : ''};
                ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px` : ''};
                ${marginLeft !== undefined ? `margin-left: ${marginLeft}px` : ''};
                ${marginRight !== undefined ? `margin-right: ${marginRight}px` : ''};
            }
        `}</style>
    </>
);

BodyText.defaultProps = {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
};