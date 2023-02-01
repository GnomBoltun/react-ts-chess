import React, { FC } from 'react'
import { Cell } from '../models/Cell'
import { motion } from 'framer-motion';

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
  return (
    <motion.div 
    whileHover={{ scale: [null, 1.2, 1.1] }}
    transition={{ duration: 0.3 }}
    className={['cell', cell.color].join(' ')}>

    </motion.div>
  )
}

export default CellComponent