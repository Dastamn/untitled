import React, { useEffect, useRef } from "react";

const withClickOutside = (Component, callback) => {
  const Out = () => {
    const wrapperRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) =>
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target) &&
        callback();
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return (
      <div ref={wrapperRef}>
        <Component />
      </div>
    );
  };

  return Out;
};

export default withClickOutside;
