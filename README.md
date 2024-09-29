# 🦋 React Animation

<br />

### **Framer Motion https://www.framer.com/motion/**

#### `install`

```bash
npm install framer-motion
```

<br />

#### `import`

```tsx
import { motion } from 'framer-motion';

return (
  // 잘못된 예
  <div></div>

  // 알맞은 예
  <motion.div></motion.div>
)
```

- HTML 태그를 animate 할 수 없다. <div></div> 에다가 애니메이션을 할 수 없음!

- <motion.div></motion.div> 이렇게 motion을 사용해줘야 html 태그를 사용할 수 있다.

- HTML 태그가 animate 되길 원한다면 motion을 사용해줘야 한다.

<br />

#### `styled-components 사용시`

```tsx
const Box = styled(motion.div)``;

return (
<Box transition-{{ delay : 3 }} animate={{ borderRadius: 100px }} />
)
```

<br />

> 직접 만들어보니 디자이너들이 사용하고 함께 협업할 때 쓰면 정말 유용할것같다고 생각이 들었다.
