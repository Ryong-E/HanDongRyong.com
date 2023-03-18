import { motion } from 'framer-motion';

function SunIcon() {
  return (
    <motion.img
      src='../../../../SunIcon.png'
      alt='sun'
      width={22}
      height={22}
      initial={{ scale: 1.25, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
    />
  );
}

export default SunIcon;
