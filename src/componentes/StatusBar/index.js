import React from "react";
import { useState, useEffect } from "react";

function StatusBar({ isShowing, name, from, to, max }) {
  const [value, setValue] = useState(0);
  var intervalFn = null;

  const timeToFinish = 3000;
  const interval = 10;

  const calculateIncrement = () => {
    const maxIncrement = timeToFinish / interval;

    const diff = to - from;
    return diff / maxIncrement;
  };
  const increment = calculateIncrement();

  const counter = () => {
    if (value + increment >= to) {
      setValue(to);
      clearTimeout(intervalFn);
      return;
    }
    setValue(value + increment);
  };

  const timeoutFn = () => {
    if (!isShowing) {
      if (value === 0) return;
      setValue(0);
      return (intervalFn !== null) ? clearTimeout(intervalFn) : null;
    }

    intervalFn = setTimeout(() => counter(), interval);
  };

  useEffect(() => {
    timeoutFn();

    return () => {
      if (intervalFn !== null) clearTimeout(intervalFn);
    };
  }, [isShowing, value]);

  function convertToBase(base) {
    return (value * base) / max;
  }

  function calcColorR() {
    var colorValue = 255;

    if (calcColorG() === 255) {
      var totalDifToZero = max / 2;
      var parts = 255 / totalDifToZero;
      var acualDif = (value - totalDifToZero) * parts;

      colorValue -= acualDif;
    }
    return colorValue;
  }

  function calcColorG() {
    var value = convertToBase(255 * 1.7);

    return value > 255 ? 255 : value;
  }

  return (
    <div className="details-bars">
      <div className="details-row">
        <div className="details-description">{name}</div>
        <div className="details-value">
          <div className="d-flex">
            {Math.ceil(value)}
            <div className="barraStatus">
              <div
                className="barraCheia"
                style={{
                  maxWidth: (value * 100) / max + "%",
                  backgroundColor: `rgb(${calcColorR()}, ${calcColorG()}, 0)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
