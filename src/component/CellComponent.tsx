import React, { FC } from "react";
import { Cell } from "../models/Cell";
import { motion } from "framer-motion";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
      className={["cell", cell.color, selected ? "selected" : "", cell.available && cell.figure ? ' border-[6px] border-[#10b981] animate-pulse' : ''].join(" ")}
      onClick={() => click(cell)}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt="F" />}
      {cell.available && !cell.figure && (
        <motion.div className="available border-[6px] opacity-80 animate-pulse border-[#10b981] rounded-full"></motion.div>
      )}
    </motion.div>
  );
};

export default CellComponent;
