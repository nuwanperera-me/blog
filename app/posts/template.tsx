'use client';

import { motion } from "framer-motion";

export default function Templete({ children } : {children: React.ReactNode}) {
  return (

    

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}