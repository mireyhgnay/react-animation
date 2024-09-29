import { motion } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function AnimateBox() {
  return (
    <Box
      transition={{ type: 'spring', delay: 0.5 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
    />
  );
}
