import React, { useState, useEffect } from "react";
import "./stylePodologia/podologia.css";
import SelectDetailesOfPodologia from "./procedureDetails/SelectDetailesOfPodologia";

import podologiaJson from "../json/podologia.json";
import { motion } from "framer-motion";

export default function Podologia() {
  const [componentMy, setComponent] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [x, setX] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function PodologiaItemJson(json) {
    return (
      <>
        {json &&
          json.map((podologia) => {
            return (
              <div
                className="podologia--title"
                key={podologia.id}
                onClick={() => setComponent(podologia.id)}
              >
                <span>{podologia.title}</span>
                <button>more...</button>
              </div>
            );
          })}
      </>
    );
  }
  const changeComponentNameOfNull = () => {
    setComponent("");
  };
  return (
    <div className="wrapper--podologia">
      <h2>PODOLOGIA</h2>

      <div className="wrapper__podologia--boxByPodologiaJson">
        {PodologiaItemJson(podologiaJson)}
      </div>
      {componentMy ? (
        <motion.div
          className="detaliesPage"
          animate={{ x: -50, scale: 1 }}
          initial={{ x: 300, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <SelectDetailesOfPodologia id={componentMy} width={width} />
        </motion.div>
      ) : null}
    </div>
  );
}
