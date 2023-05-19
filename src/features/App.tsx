import { useAppDispatch, useAppSelector } from '@/app/hook';
import BottomVerticalWindow from '@/components/BottomVerticalWindow';
import TopVerticalWindow from '@/components/TopVerticalWindow';
import {
  changeHorizontalWindowValues,
  selectHorizontalWindowValues,
} from '@/features/screen/screenSlice';
import Split from 'react-split';
import './app.scss';

function App() {
  const dispatch = useAppDispatch();
  const horizontalWindowValues = useAppSelector(selectHorizontalWindowValues);

  const onDragEnd = (sizes: number[]) => {
    dispatch(changeHorizontalWindowValues(sizes));
  };

  return (
    <Split
      sizes={horizontalWindowValues}
      direction="vertical"
      className="split app"
      onDragEnd={onDragEnd}
    >
      <TopVerticalWindow />
      <BottomVerticalWindow />
    </Split>
  );
}

export default App;
