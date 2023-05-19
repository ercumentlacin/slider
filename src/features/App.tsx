/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
import { useAppDispatch, useAppSelector } from '@/app/hook';
import ScreenOne from '@/features/ScreenOne';
import ScreenThree from '@/features/ScreenThree';
import ScreenTwo from '@/features/ScreenTwo';
import {
  changeBottomVerticalWindowValues,
  changeHorizontalWindowValues,
  changeTopVerticalWindowValues,
  selectBottomVerticalWindowValues,
  selectHorizontalWindowValues,
  selectTopVerticalWindowValues,
} from '@/features/screen/screenSlice';
import Split from 'react-split';
import './app.scss';

function App() {
  const dispatch = useAppDispatch();
  const horizontalWindowValues = useAppSelector(selectHorizontalWindowValues);
  const topVerticalWindowValues = useAppSelector(selectTopVerticalWindowValues);
  const bottomVerticalWindowValues = useAppSelector(
    selectBottomVerticalWindowValues,
  );

  return (
    <Split
      sizes={horizontalWindowValues}
      direction="vertical"
      className="split app"
      onDragEnd={(sizes) => {
        dispatch(changeHorizontalWindowValues(sizes));
      }}
    >
      <Split
        className="split"
        sizes={topVerticalWindowValues}
        onDragEnd={(sizes) => {
          dispatch(changeTopVerticalWindowValues(sizes));
        }}
      >
        <ScreenOne />
        <ScreenTwo />
      </Split>

      <Split
        className="split"
        sizes={bottomVerticalWindowValues}
        onDragEnd={(sizes) => {
          dispatch(changeBottomVerticalWindowValues(sizes));
        }}
      >
        <ScreenThree />
        <div>Screen4</div>
      </Split>
    </Split>
  );
}

export default App;
