import React from "react";
import RemovalOfFingerprints from "./RemovalOfFingerprints";
import { motion } from "framer-motion";

export default function SelectDetailesOfPodologia({ id, width }) {
  switch (id) {
    case 2:
      return (
        <motion.div
          animate={{ x: -50, scale: 1 }}
          initial={{ x: 300, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <RemovalOfFingerprints />
        </motion.div>
      );

    default:
      return <div>wrong</div>;
  }
}
