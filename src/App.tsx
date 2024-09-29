import styled from 'styled-components';
import AnimateBox from './components/AnimateBox';
import VariantsBox from './components/VariantsBox';
import GesturesBox from './components/GesturesBox';
import MotionValue from './components/MotionValue';

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
      <div style={{ width: 100, height: 100, backgroundColor: 'white' }}></div>
      <MotionValue />
      <div style={{ width: 100, height: 100, backgroundColor: 'white' }}></div>
    </Wrapper>
  );
}
