import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const WrapperBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const GesturesVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

export default function GesturesBox() {
  const wrapperBoxRef = useRef<HTMLDivElement>(null);

  return (
    <WrapperBox ref={wrapperBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={wrapperBoxRef} // 허용된 드래그 가능 영역에 제약 조건을 적용(WrapperBox 영역 내에서만 드래그 가능)
        variants={GesturesVariants}
        whileHover='hover'
        whileTap='click'
      />
    </WrapperBox>
  );
}
