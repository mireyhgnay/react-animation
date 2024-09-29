// MotionValue - 사용자의 드래깅 좌표를 추적하고 업데이트할 수 있다.
// MotionValue 는 State가 아니다. 그래서 좌표를 이동해도 컴포넌트는 재렌더링되지 않는다.
// 좌표를 확인하고 싶다면 useEffect를 사용해서 좌표를 확인해야 한다.

import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function MotionValue() {
  const x = useMotionValue(0);
  // x 좌표가 -800일때 scale은 2, 0 일때는 1, 800일 때는 0.1
  // 왼쪽으로 이동할수록 scale 은 커지고 오른쪽으로 갈수록 작아진다.
  const boxScale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  return <Box style={{ x, scale: boxScale }} drag='x' dragSnapToOrigin />;
}
