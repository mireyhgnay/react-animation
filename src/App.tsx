import styled from 'styled-components';
import AnimateBox from './components/AnimateBox';
import VariantsBox from './components/VariantsBox';
import GesturesBox from './components/GesturesBox';
import MotionValue from './components/MotionValue';
import SvgBox from './components/SvgBox';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export default function App() {
  return (
    <Wrapper>
      <AnimateBox />
      <VariantsBox />
      <GesturesBox />
      <SvgBox />
      <MotionValue />
    </Wrapper>
  );
}
