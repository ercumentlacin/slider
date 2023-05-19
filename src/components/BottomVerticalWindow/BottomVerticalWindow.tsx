import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  changeBottomVerticalWindowValues,
  selectBottomVerticalWindowValues,
} from '@/features/screen/screenSlice';
import ScreenFour from '@/features/ScreenFour';
import ScreenThree from '@/features/ScreenThree';
import Split from 'react-split';

export default function BottomVerticalWindow() {
  const dispatch = useAppDispatch();
  const bottomVerticalWindowValues = useAppSelector(
    selectBottomVerticalWindowValues,
  );

  return (
    <Split
      className="split"
      sizes={bottomVerticalWindowValues}
      onDragEnd={(sizes) => {
        dispatch(changeBottomVerticalWindowValues(sizes));
      }}
    >
      <ScreenThree />
      <ScreenFour />
    </Split>
  );
}
