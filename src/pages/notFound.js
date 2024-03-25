import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl">404</h1>
        <p>This page doesn't seem to exist.</p>
        <button>
          <a href="/">Back to Home</a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
