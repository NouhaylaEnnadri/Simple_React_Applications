import React, { useState } from "react";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="pt-6">
      <div role="alert" className="alert bg-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          This is a learning project using the Spoonacular API. Please note that
          you only have access to 15 requests per day.
        </span>
        <div>
          <button className="btn btn-sm btn-base-100" onClick={handleClick}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
