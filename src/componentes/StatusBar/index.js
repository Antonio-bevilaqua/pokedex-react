import React from "react";
import { useState, useEffect } from "react";

function StatusBar({ isShowing, name, from, to, max }) {
  const [attribute, setAttribute] = useState(0);
  const [intervalValue, setIntervalValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [attributeName, setAttributeName] = useState("");
  const [maxValue, setMaxValue] = useState(0);

  const startCounter = () => {
    let newAttr = attribute + intervalValue;
    if (newAttr >= finalValue) {
      newAttr = finalValue;
      setFinalized(true);
    }
    setAttribute(newAttr);
  };

  const setValue = () => {
    setFinalValue(to);
    setIntervalValue((to - from) / 400);
    setAttributeName(name);
    setAttribute(from);
    setInitialized(true);
    setMaxValue(max);
  };

  const resetValue = () => {
    if (!initialized || !finalized) return true;

    setInitialized(false);
    setFinalized(false);
  };

  const effectCall = () => {
    if (!isShowing) return resetValue();
    if (!initialized) return setValue();
    if (!finalized) return startCounter();
  };

  useEffect(() => {
    effectCall();
  }, [isShowing, initialized, finalized, attribute]);

  function convertToBase(base) {
    return (attribute * base) / max;
  }

  function calcColorR() {
    var value = 255;

    if (calcColorG() === 255) {

      var totalDifToZero = max / 2;
      var parts = 255 / totalDifToZero;
      var acualDif = (attribute - totalDifToZero) * parts;

      value -= acualDif;
    }
    return value;
  }

  function calcColorG() {
    var value = convertToBase(255 * 1.7);

    return value > 255 ? 255 : value;
  }

  return (
    <div className="details-bars">
      <div className="details-row">
        <div className="details-description">{attributeName}</div>
        <div className="details-value">
          <div className="d-flex">
            {Math.ceil(attribute)}
            <div className="barraStatus">
              <div
                className="barraCheia"
                style={{
                  maxWidth: (attribute * 100) / max + "%",
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
