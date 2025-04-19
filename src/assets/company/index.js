import React from "react";

// Sazag Infotech Custom Logo
export const SazagLogo = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="60" fill="#383E56" />
    <text
      x="60"
      y="80"
      fontFamily="Arial"
      fontSize="70"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      S
    </text>
  </svg>
);

// New IT Nest Custom Logo
export const NewITLogo = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="60" fill="#E6DEDD" />
    <text
      x="60"
      y="80"
      fontFamily="Arial"
      fontSize="70"
      fontWeight="bold"
      fill="#383E56"
      textAnchor="middle"
    >
      N
    </text>
  </svg>
);

// Freelance Custom Logo
export const FreelanceLogo = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="60" fill="#383E56" />
    <text
      x="60"
      y="80"
      fontFamily="Arial"
      fontSize="70"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      F
    </text>
  </svg>
);

// Export the logos as data URLs for use in components
export const getSazagLogoUrl = () => {
  const svgString = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="60" fill="#383E56"/>
    <text x="60" y="80" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="white" textAnchor="middle">S</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

export const getNewITLogoUrl = () => {
  const svgString = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="60" fill="#E6DEDD"/>
    <text x="60" y="80" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="#383E56" textAnchor="middle">N</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

export const getFreelanceLogoUrl = () => {
  const svgString = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="60" fill="#383E56"/>
    <text x="60" y="80" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="white" textAnchor="middle">F</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};
