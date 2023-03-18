import { motion } from 'framer-motion';
import React from 'react';

function Moonicon() {
  return (
    <motion.img
      src='https://kr.object.ncloudstorage.com/handongryong/MoonIcon.png'
      alt='moon'
      width={22}
      height={22}
      initial={{ scale: 1.25, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
    />
  );
}
export default Moonicon;
